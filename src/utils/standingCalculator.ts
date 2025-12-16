import { getMeetingSessions, getRaceResults, getDrivers, ensureSeasonData, getSeasonMeetings } from '../services/f1Api';
import { Meeting, Driver, Session } from '../services/f1ApiTypes';

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
        // 1. Ensure all season data is loaded (Bulk Fetch)
        await ensureSeasonData(year);

        // 2. Get meetings from store
        // We need to access the store somehow or use the exported getters.
        // Let's use the exported getters.
        // We need a getMeetings(year) exposed in f1Api? 
        // Currently f1Api exports getUpcomingRaces and getLastRaceResults but not getMeetings(year).
        // I added getMeetings to F1DataStore but didn't export a wrapper.
        // Let's modify f1Api to export getMeetingsForYear or utilize the store directly if we export it?
        // Code below assumes I add getMeetingsForYear to f1Api or similar.
        // Actually, let's just re-implement the loop using available exports since they hit the store.

        // Wait, I need `getMeetings(year)` to iterate.
        // I'll assume I can add `getMeetingsForYear` to f1Api or use the existing `getUpcomingRaces` and `getLastRaceResults` logic? 
        // No, `standingCalculator` needs ALL completed meetings.
        // I will update f1Api to export `getSeasonMeetings(year)`.

        // For now, let's fix the imports and logic assuming `getSeasonMeetings` exists, 
        // then I'll quickly update f1Api to export it.
        const meetings = await getSeasonMeetings(year);

        // 3. Filter for completed meetings (past date)
        const now = new Date();
        const completedMeetings = meetings.filter(m => new Date(m.date_start) < now);

        const driverPoints: Record<number, { points: number, driver: Driver }> = {};
        const teamPoints: Record<string, { points: number, colour: string, drivers: Set<string> }> = {};

        // 4. Iterate and aggregate
        // Since data is in memory, we can just await sequentially without perf penalty
        for (const meeting of completedMeetings) {
            const sessions = await getMeetingSessions(meeting.meeting_key);

            for (const session of sessions) {
                if (session.session_name !== 'Race' && session.session_name !== 'Sprint') continue;

                const results = await getRaceResults(session.session_key);
                const drivers = await getDrivers(session.session_key); // Should be instant

                const pointsSystem = session.session_name === 'Sprint' ? SPRINT_POINTS : RACE_POINTS;

                results.forEach(result => {
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
            }
        }

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
