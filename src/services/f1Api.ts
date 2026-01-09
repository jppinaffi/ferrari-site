import { Circuit, Driver, Lap, Meeting, RaceResult, Session } from "./f1ApiTypes";

const BASE_URL = 'https://api.openf1.org/v1';

// --- Rate Limiter / Queue Implementation ---
class RequestQueue {
    private queue: { url: string; resolve: (value: any) => void; reject: (reason?: any) => void }[] = [];
    private processing = false;
    private lastRequestTime = 0;
    private minDelay = 200;

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
                    console.warn(`Rate limited (429) for ${request.url}. Backing off...`);
                    this.queue.unshift(request);
                    await new Promise(resolve => setTimeout(resolve, 2000));
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
const CACHE_DURATION = 30 * 60 * 1000;

const fetchWithCache = async <T>(url: string): Promise<T> => {
    const now = Date.now();
    const cached = cache.get(url);

    if (cached && (now - cached.timestamp < CACHE_DURATION)) {
        return cached.data as T;
    }

    const data = await requestQueue.add(url);
    cache.set(url, { data, timestamp: now });
    return data as T;
};

// --- F1 Data Store (Strict Bulk Fetching) ---
class F1DataStore {
    private meetings: Map<number, Meeting> = new Map();
    private sessions: Map<number, Session[]> = new Map();
    private drivers: Map<number, Driver[]> = new Map();
    private results: Map<number, RaceResult[]> = new Map();
    private seasonLoaded: Record<number, boolean> = {};

    async loadSeason(year: number) {
        if (this.seasonLoaded[year]) return;
        console.log(`[F1DataStore] Bulk Loading season ${year}...`);

        try {
            // 1. Fetch all meetings
            const meetingsData = await fetchWithCache<Meeting[]>(`${BASE_URL}/meetings?year=${year}`);
            if (meetingsData.length === 0) {
                this.seasonLoaded[year] = true;
                return;
            }

            meetingsData.forEach(m => this.meetings.set(m.meeting_key, m));

            // 2. Fetch All Sessions (Bulk)
            const startDate = `${year}-01-01`;
            const endDate = `${year}-12-31`;
            const sessionsData = await fetchWithCache<Session[]>(`${BASE_URL}/sessions?date_start>=${startDate}&date_start<=${endDate}&session_name=Race&session_name=Sprint`);

            const sessionKeys: number[] = [];
            sessionsData.forEach(s => {
                const current = this.sessions.get(s.meeting_key) || [];
                current.push(s);
                this.sessions.set(s.meeting_key, current);
                sessionKeys.push(s.session_key);
            });

            if (sessionKeys.length === 0) {
                this.seasonLoaded[year] = true;
                return;
            }

            const minKey = Math.min(...sessionKeys);
            const maxKey = Math.max(...sessionKeys);

            // 3. Fetch Drivers and Results in Bulk for the whole range
            const [driversData, resultsData] = await Promise.all([
                fetchWithCache<Driver[]>(`${BASE_URL}/drivers?session_key>=${minKey}&session_key<=${maxKey}`),
                fetchWithCache<RaceResult[]>(`${BASE_URL}/session_result?session_key>=${minKey}&session_key<=${maxKey}`)
            ]);

            driversData.forEach(d => {
                const current = this.drivers.get(d.session_key) || [];
                current.push(d);
                this.drivers.set(d.session_key, current);
            });

            resultsData.forEach(r => {
                const current = this.results.get(r.session_key) || [];
                current.push(r);
                this.results.set(r.session_key, current);
            });

            this.seasonLoaded[year] = true;
            console.log(`[F1DataStore] Season ${year} bulk fetch complete.`);

        } catch (error) {
            console.error('Critical error in bulk fetching:', error);
        }
    }

    // --- Strict Getters (No API Fallbacks) ---
    getMeeting(key: number): Meeting | undefined {
        return this.meetings.get(key);
    }

    getMeetingsByYear(year: number): Meeting[] {
        return Array.from(this.meetings.values())
            .filter(m => new Date(m.date_start).getFullYear() === year)
            .sort((a, b) => new Date(a.date_start).getTime() - new Date(b.date_start).getTime());
    }

    getSessions(meetingKey: number): Session[] {
        return this.sessions.get(meetingKey) || [];
    }

    getDrivers(sessionKey: number): Driver[] {
        return this.drivers.get(sessionKey) || [];
    }

    getResults(sessionKey: number): RaceResult[] {
        return this.results.get(sessionKey) || [];
    }
}

export const dataStore = new F1DataStore();

// --- Refactored API Functions (Strictly DataStore bound) ---

export const ensureSeasonData = async (year: number) => {
    await dataStore.loadSeason(year);
};

export const getSeasonMeetings = async (year: number): Promise<Meeting[]> => {
    await dataStore.loadSeason(year);
    return dataStore.getMeetingsByYear(year);
};

export const getUpcomingRaces = async (): Promise<Meeting[]> => {
    const currentYear = new Date().getFullYear();
    await dataStore.loadSeason(currentYear);
    const now = new Date();
    return dataStore.getMeetingsByYear(currentYear)
        .filter(m => new Date(m.date_start) > now);
};

export const getLastRaceResults = async () => {
    const currentYear = new Date().getFullYear();
    await dataStore.loadSeason(currentYear);

    const meetings = dataStore.getMeetingsByYear(currentYear);
    const now = new Date();
    const completed = meetings
        .filter(m => new Date(m.date_start) < now)
        .reverse();

    if (completed.length === 0) return null;

    const lastMeeting = completed[0];
    const sessions = dataStore.getSessions(lastMeeting.meeting_key);
    const raceSession = sessions.find(s => s.session_name === 'Race');

    if (!raceSession) return null;

    const results = dataStore.getResults(raceSession.session_key);
    const drivers = dataStore.getDrivers(raceSession.session_key);

    const enrichedResults = results.map(result => ({
        ...result,
        driver: drivers.find(d => d.driver_number === result.driver_number)
    })).sort((a, b) => a.position - b.position);

    return { meeting: lastMeeting, results: enrichedResults };
};

export const getRaceSession = async (meetingKey: number): Promise<Session | null> => {
    const sessions = dataStore.getSessions(meetingKey);
    return sessions.find(s => s.session_name === 'Race') || null;
};

export const getMeetingSessions = async (meetingKey: number): Promise<Session[]> => {
    return dataStore.getSessions(meetingKey);
};

export const getRaceResults = async (sessionKey: number): Promise<RaceResult[]> => {
    return dataStore.getResults(sessionKey);
};

export const getDrivers = async (sessionKey: number): Promise<Driver[]> => {
    return dataStore.getDrivers(sessionKey);
};

export const getMeeting = async (meetingKey: number): Promise<Meeting | null> => {
    return dataStore.getMeeting(meetingKey) || null;
};

// Nota: Laps e Circuit não foram incluídos no bulk load devido ao volume de dados (Laps) 
// ou por serem estáticos (Circuits). Se não estiverem no cache, retornarão vazio.
export const getLaps = async (sessionKey: number): Promise<Lap[]> => [];
export const getCircuit = async (circuitKey: number): Promise<Circuit | null> => null;