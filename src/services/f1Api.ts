const BASE_URL = 'https://api.openf1.org/v1';

export interface Meeting {
    meeting_key: number;
    meeting_name: string;
    meeting_official_name: string;
    location: string;
    country_key: number;
    country_code: string;
    country_name: string;
    circuit_key: number;
    circuit_short_name: string;
    date_start: string;
    gmt_offset: string;
    year: number;
}

export interface Session {
    session_key: number;
    session_name: string;
    date_start: string;
    date_end: string;
    gmt_offset: string;
    session_type: string;
    meeting_key: number;
    location: string;
    country_key: number;
    country_code: string;
    country_name: string;
    circuit_key: number;
    circuit_short_name: string;
    year: number;
}

export interface RaceResult {
    session_key: number;
    meeting_key: number;
    driver_number: number;
    position: number;
    duration: number;
    gap_to_leader: number;
    status: string;
    dnf: boolean;
    dns: boolean;
    dsq: boolean;
}

export interface Driver {
    driver_number: number;
    broadcast_name: string;
    full_name: string;
    name_acronym: string;
    team_name: string;
    team_colour: string;
    first_name: string;
    last_name: string;
    headshot_url: string;
    country_code: string;
    session_key: number;
    meeting_key: number;
}

export const getUpcomingRaces = async (): Promise<Meeting[]> => {
    try {
        const currentYear = new Date().getFullYear();
        // Fetch meetings for current year
        const response = await fetch(`${BASE_URL}/meetings?year=${currentYear}`);
        if (!response.ok) throw new Error('Failed to fetch meetings');
        const meetings: Meeting[] = await response.json();

        // Filter for future meetings
        const now = new Date();
        return meetings
            .filter(meeting => new Date(meeting.date_start) > now)
            .sort((a, b) => new Date(a.date_start).getTime() - new Date(b.date_start).getTime());
    } catch (error) {
        console.error('Error fetching upcoming races:', error);
        return [];
    }
};

export const getLastRaceResults = async () => {
    try {
        // 1. Get all meetings for current year
        const currentYear = new Date().getFullYear();
        const meetingsResponse = await fetch(`${BASE_URL}/meetings?year=${currentYear}`);
        if (!meetingsResponse.ok) throw new Error('Failed to fetch meetings');
        const meetings: Meeting[] = await meetingsResponse.json();

        // 2. Find the last completed meeting
        const now = new Date();
        const completedMeetings = meetings
            .filter(meeting => new Date(meeting.date_start) < now)
            .sort((a, b) => new Date(b.date_start).getTime() - new Date(a.date_start).getTime());

        if (completedMeetings.length === 0) return null;
        const lastMeeting = completedMeetings[0];

        // 3. Get sessions for this meeting to find the "Race" session
        const sessionsResponse = await fetch(`${BASE_URL}/sessions?meeting_key=${lastMeeting.meeting_key}&session_name=Race`);
        if (!sessionsResponse.ok) throw new Error('Failed to fetch sessions');
        const sessions: Session[] = await sessionsResponse.json();

        if (sessions.length === 0) return null;
        const raceSession = sessions[0];

        // 4. Get results for this session
        const resultsResponse = await fetch(`${BASE_URL}/session_result?session_key=${raceSession.session_key}`);
        if (!resultsResponse.ok) throw new Error('Failed to fetch results');
        const results: RaceResult[] = await resultsResponse.json();

        // 5. Get driver info to map names to results
        const driversResponse = await fetch(`${BASE_URL}/drivers?session_key=${raceSession.session_key}`);
        if (!driversResponse.ok) throw new Error('Failed to fetch drivers');
        const drivers: Driver[] = await driversResponse.json();

        // Map drivers to results
        const enrichedResults = results.map(result => {
            const driver = drivers.find(d => d.driver_number === result.driver_number);
            return {
                ...result,
                driver
            };
        }).sort((a, b) => a.position - b.position);

        return {
            meeting: lastMeeting,
            results: enrichedResults
        };

    } catch (error) {
        console.error('Error fetching last race results:', error);
        return null;
    }
};

export const getRaceSession = async (meetingKey: number): Promise<Session | null> => {
    try {
        const response = await fetch(`${BASE_URL}/sessions?meeting_key=${meetingKey}&session_name=Race`);
        if (!response.ok) throw new Error('Failed to fetch sessions');
        const sessions: Session[] = await response.json();
        return sessions.length > 0 ? sessions[0] : null;
    } catch (error) {
        console.error(`Error fetching race session for meeting ${meetingKey}:`, error);
        return null;
    }
};

export const getMeetingSessions = async (meetingKey: number): Promise<Session[]> => {
    try {
        const response = await fetch(`${BASE_URL}/sessions?meeting_key=${meetingKey}`);
        if (!response.ok) throw new Error('Failed to fetch sessions');
        return await response.json();
    } catch (error) {
        console.error(`Error fetching sessions for meeting ${meetingKey}:`, error);
        return [];
    }
};

export const getRaceResults = async (sessionKey: number): Promise<RaceResult[]> => {
    try {
        const response = await fetch(`${BASE_URL}/session_result?session_key=${sessionKey}`);
        if (!response.ok) throw new Error('Failed to fetch results');
        return await response.json();
    } catch (error) {
        console.error(`Error fetching results for session ${sessionKey}:`, error);
        return [];
    }
};

export const getDrivers = async (sessionKey: number): Promise<Driver[]> => {
    try {
        const response = await fetch(`${BASE_URL}/drivers?session_key=${sessionKey}`);
        if (!response.ok) throw new Error('Failed to fetch drivers');
        return await response.json();
    } catch (error) {
        console.error(`Error fetching drivers for session ${sessionKey}:`, error);
        return [];
    }
};

export const getMeeting = async (meetingKey: number): Promise<Meeting | null> => {
    try {
        const currentYear = new Date().getFullYear();
        const response = await fetch(`${BASE_URL}/meetings?year=${currentYear}&meeting_key=${meetingKey}`);
        if (!response.ok) return null;
        const meetings: Meeting[] = await response.json();
        return meetings.length > 0 ? meetings[0] : null;
    } catch (error) {
        return null;
    }
};
