import { getMeetingSessions, getRaceResults, getDrivers, Meeting, Driver, Session } from '../services/f1Api';

export interface DriverStanding {
    position: number;
    driver_number: number;
    driver_name: string;
    driver_acronym: string;
    team_name: string;
    team_colour: string;
    points: number;
    headshot_url: string;
}

export interface ConstructorStanding {
    position: number;
    team_name: string;
    team_colour: string;
    points: number;
    drivers: string[];
}

const RACE_POINTS = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1];
const SPRINT_POINTS = [8, 7, 6, 5, 4, 3, 2, 1];

export const calculateStandings = async (year: number) => {
    try {
        // 1. Get all meetings for the year
        const response = await fetch(`https://api.openf1.org/v1/meetings?year=${year}`);
        if (!response.ok) throw new Error('Failed to fetch meetings');
        const meetings: Meeting[] = await response.json();

        // 2. Filter for completed meetings (past date)
        const now = new Date();
        const completedMeetings = meetings.filter(m => new Date(m.date_start) < now);

        const driverPoints: Record<number, { points: number, driver: Driver }> = {};
        const teamPoints: Record<string, { points: number, colour: string, drivers: Set<string> }> = {};

        // 3. Fetch sessions for all completed meetings in parallel
        // We use a helper to ensure we don't silently fail if one request drops
        const sessionsPromises = completedMeetings.map(async (meeting) => {
            try {
                return await getMeetingSessions(meeting.meeting_key);
            } catch (e) {
                console.warn(`Failed to fetch sessions for meeting ${meeting.meeting_key}`, e);
                return [];
            }
        });

        const meetingsSessions = await Promise.all(sessionsPromises);

        // Flatten and filter for Race and Sprint sessions
        const relevantSessions: Session[] = [];
        meetingsSessions.forEach(sessions => {
            if (sessions && Array.isArray(sessions)) {
                sessions.forEach(session => {
                    if (session.session_name === 'Race' || session.session_name === 'Sprint') {
                        relevantSessions.push(session);
                    }
                });
            }
        });

        // 4. Fetch results and drivers for all relevant sessions
        const resultsPromises = relevantSessions.map(async (session) => {
            try {
                const [results, drivers] = await Promise.all([
                    getRaceResults(session.session_key),
                    getDrivers(session.session_key)
                ]);
                return { results, drivers, sessionType: session.session_name };
            } catch (e) {
                console.warn(`Failed to fetch results for session ${session.session_key}`, e);
                return null;
            }
        });

        const sessionData = await Promise.all(resultsPromises);

        // 5. Aggregate points
        sessionData.forEach((data) => {
            if (!data) return; // Skip failed sessions
            const { results, drivers, sessionType } = data;
            const pointsSystem = sessionType === 'Sprint' ? SPRINT_POINTS : RACE_POINTS;

            results.forEach(result => {
                // Only award points if position is within points range
                if (result.position <= pointsSystem.length && result.position > 0) {
                    const points = pointsSystem[result.position - 1];
                    const driver = drivers.find(d => d.driver_number === result.driver_number);

                    if (driver) {
                        // Driver Points
                        if (!driverPoints[driver.driver_number]) {
                            driverPoints[driver.driver_number] = { points: 0, driver };
                        }
                        driverPoints[driver.driver_number].points += points;

                        // Constructor Points
                        if (!teamPoints[driver.team_name]) {
                            teamPoints[driver.team_name] = { points: 0, colour: driver.team_colour, drivers: new Set() };
                        }
                        teamPoints[driver.team_name].points += points;
                        teamPoints[driver.team_name].drivers.add(driver.last_name);
                    }
                }
            });
        });

        // 6. Format and Sort Drivers Standings
        const driversStandings: DriverStanding[] = Object.values(driverPoints)
            .map(({ points, driver }) => ({
                position: 0, // Assigned later
                driver_number: driver.driver_number,
                driver_name: driver.full_name,
                driver_acronym: driver.name_acronym,
                team_name: driver.team_name,
                team_colour: driver.team_colour,
                points,
                headshot_url: driver.headshot_url
            }))
            .sort((a, b) => b.points - a.points)
            .map((d, index) => ({ ...d, position: index + 1 }));

        // 7. Format and Sort Constructors Standings
        const constructorsStandings: ConstructorStanding[] = Object.entries(teamPoints)
            .map(([teamName, data]) => ({
                position: 0,
                team_name: teamName,
                team_colour: data.colour,
                points: data.points,
                drivers: Array.from(data.drivers)
            }))
            .sort((a, b) => b.points - a.points)
            .map((c, index) => ({ ...c, position: index + 1 }));

        return { drivers: driversStandings, constructors: constructorsStandings };

    } catch (error) {
        console.error('Error calculating standings:', error);
        return { drivers: [], constructors: [] };
    }
};
