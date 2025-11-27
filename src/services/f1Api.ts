const BASE_URL = 'https://api.openf1.org/v1';

// --- Rate Limiter / Queue Implementation ---
class RequestQueue {
    private queue: { url: string; resolve: (value: any) => void; reject: (reason?: any) => void }[] = [];
    private processing = false;
    private lastRequestTime = 0;
    private minDelay = 300; // Minimum 300ms between requests (approx 3 requests/sec)

    async add(url: string): Promise<any> {
        return new Promise((resolve, reject) => {
            this.queue.push({ url, resolve, reject });
            this.process();
        });
    }

    private async process() {
        if (this.processing || this.queue.length === 0) return;
        this.processing = true;

        while (this.queue.length > 0) {
            const now = Date.now();
            const timeSinceLast = now - this.lastRequestTime;

            if (timeSinceLast < this.minDelay) {
                await new Promise(resolve => setTimeout(resolve, this.minDelay - timeSinceLast));
            }

            const request = this.queue.shift();
            if (!request) break;

            try {
                this.lastRequestTime = Date.now();
                const response = await fetch(request.url);

                if (response.status === 429) {
                    // Too Many Requests - Put back in front of queue and wait longer
                    console.warn(`Rate limited (429) for ${request.url}. Backing off...`);
                    this.queue.unshift(request);
                    await new Promise(resolve => setTimeout(resolve, 2000)); // 2s backoff
                    continue;
                }

                if (!response.ok) {
                    throw new Error(`Failed to fetch: ${request.url} (Status: ${response.status})`);
                }

                const data = await response.json();
                request.resolve(data);
            } catch (error) {
                request.reject(error);
            }
        }

        this.processing = false;
    }
}

const requestQueue = new RequestQueue();

// --- Cache Implementation ---
const cache = new Map<string, { data: any; timestamp: number }>();
const CACHE_DURATION = 10 * 60 * 1000; // 10 minutes cache

const fetchWithCache = async <T>(url: string): Promise<T> => {
    const now = Date.now();
    const cached = cache.get(url);

    if (cached && (now - cached.timestamp < CACHE_DURATION)) {
        return cached.data as T;
    }

    // Use the queue for the actual network request
    const data = await requestQueue.add(url);

    cache.set(url, { data, timestamp: now });
    return data as T;
};

// --- Interfaces ---
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

export interface Lap {
    meeting_key: number;
    session_key: number;
    driver_number: number;
    lap_number: number;
    date_start: string;
    date_end: string;
    duration: number;
    sector_1_duration: number;
    sector_2_duration: number;
    sector_3_duration: number;
}

export interface Circuit {
    circuit_key: number;
    circuit_short_name: string;
    circuit_name: string;
    location: string;
    country_key: number;
    country_code: string;
    country_name: string;
    circuit_length: number;
}

// --- API Functions ---

export const getUpcomingRaces = async (): Promise<Meeting[]> => {
    try {
        const currentYear = new Date().getFullYear();
        const meetings = await fetchWithCache<Meeting[]>(`${BASE_URL}/meetings?year=${currentYear}`);

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
        const currentYear = new Date().getFullYear();
        const meetings = await fetchWithCache<Meeting[]>(`${BASE_URL}/meetings?year=${currentYear}`);

        const now = new Date();
        const completedMeetings = meetings
            .filter(meeting => new Date(meeting.date_start) < now)
            .sort((a, b) => new Date(b.date_start).getTime() - new Date(a.date_start).getTime());

        if (completedMeetings.length === 0) return null;
        const lastMeeting = completedMeetings[0];

        const sessions = await fetchWithCache<Session[]>(`${BASE_URL}/sessions?meeting_key=${lastMeeting.meeting_key}&session_name=Race`);

        if (sessions.length === 0) return null;
        const raceSession = sessions[0];

        const results = await fetchWithCache<RaceResult[]>(`${BASE_URL}/session_result?session_key=${raceSession.session_key}`);
        const drivers = await fetchWithCache<Driver[]>(`${BASE_URL}/drivers?session_key=${raceSession.session_key}`);

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
        const sessions = await fetchWithCache<Session[]>(`${BASE_URL}/sessions?meeting_key=${meetingKey}&session_name=Race`);
        return sessions.length > 0 ? sessions[0] : null;
    } catch (error) {
        console.error(`Error fetching race session for meeting ${meetingKey}:`, error);
        return null;
    }
};

export const getMeetingSessions = async (meetingKey: number): Promise<Session[]> => {
    try {
        return await fetchWithCache<Session[]>(`${BASE_URL}/sessions?meeting_key=${meetingKey}`);
    } catch (error) {
        console.error(`Error fetching sessions for meeting ${meetingKey}:`, error);
        return [];
    }
};

export const getRaceResults = async (sessionKey: number): Promise<RaceResult[]> => {
    try {
        return await fetchWithCache<RaceResult[]>(`${BASE_URL}/session_result?session_key=${sessionKey}`);
    } catch (error) {
        console.error(`Error fetching results for session ${sessionKey}:`, error);
        return [];
    }
};

export const getDrivers = async (sessionKey: number): Promise<Driver[]> => {
    try {
        return await fetchWithCache<Driver[]>(`${BASE_URL}/drivers?session_key=${sessionKey}`);
    } catch (error) {
        console.error(`Error fetching drivers for session ${sessionKey}:`, error);
        return [];
    }
};

export const getMeeting = async (meetingKey: number): Promise<Meeting | null> => {
    try {
        const currentYear = new Date().getFullYear();
        const meetings = await fetchWithCache<Meeting[]>(`${BASE_URL}/meetings?year=${currentYear}&meeting_key=${meetingKey}`);
        return meetings.length > 0 ? meetings[0] : null;
    } catch (error) {
        return null;
    }
};

export const getLaps = async (sessionKey: number): Promise<Lap[]> => {
    try {
        return await fetchWithCache<Lap[]>(`${BASE_URL}/laps?session_key=${sessionKey}`);
    } catch (error) {
        console.error(`Error fetching laps for session ${sessionKey}:`, error);
        return [];
    }
};

export const getCircuit = async (circuitKey: number): Promise<Circuit | null> => {
    try {
        const circuits = await fetchWithCache<Circuit[]>(`${BASE_URL}/circuits?circuit_key=${circuitKey}`);
        return circuits.length > 0 ? circuits[0] : null;
    } catch (error) {
        console.error(`Error fetching circuit ${circuitKey}:`, error);
        return null;
    }
};
