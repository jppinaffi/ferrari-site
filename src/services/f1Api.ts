import { Circuit, Driver, Lap, Meeting, RaceResult, Session } from "./f1ApiTypes";

const BASE_URL = 'https://api.openf1.org/v1';

// --- Rate Limiter / Queue Implementation ---
class RequestQueue {
    private queue: { url: string; resolve: (value: any) => void; reject: (reason?: any) => void }[] = [];
    private processing = false;
    private lastRequestTime = 0;
    private minDelay = 200; // Reduced delay since we are making fewer requests

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
const CACHE_DURATION = 30 * 60 * 1000; // 30 minutes cache

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

// --- F1 Data Store (Bulk Fetching) ---
class F1DataStore {
    private meetings: Map<number, Meeting> = new Map();
    private sessions: Map<number, Session[]> = new Map(); // meeting_key -> sessions
    private drivers: Map<number, Driver[]> = new Map(); // session_key -> drivers
    private results: Map<number, RaceResult[]> = new Map(); // session_key -> results
    private laps: Map<number, Lap[]> = new Map(); // session_key -> laps
    private circuits: Map<number, Circuit> = new Map(); // circuit_key -> circuit

    private seasonLoaded: Record<number, boolean> = {};

    async loadSeason(year: number) {
        if (this.seasonLoaded[year]) return;
        console.log(`[F1DataStore] Loading season ${year}...`);

        try {
            // 1. Fetch all meetings for the year
            const meetingsData = await fetchWithCache<Meeting[]>(`${BASE_URL}/meetings?year=${year}`);
            if (meetingsData.length === 0) {
                console.log(`[F1DataStore] No meetings found for ${year}`);
                this.seasonLoaded[year] = true;
                return;
            }

            meetingsData.forEach(m => {
                this.meetings.set(m.meeting_key, m);
            });

            // Calculate date range for the year
            const startDate = `${year}-01-01`;
            const endDate = `${year}-12-31`;

            // 2. Fetch All Sessions (Bulk Date Range)
            let sessionsData: Session[] = [];
            try {
                // Using >= and <= operators supported by OpenF1
                const url = `${BASE_URL}/sessions?date_start>=${startDate}&date_start<=${endDate}`;
                sessionsData = await fetchWithCache<Session[]>(url);
                console.log(`[F1DataStore] Bulk fetched ${sessionsData.length} sessions`);
            } catch (e) {
                console.warn('[F1DataStore] Bulk session fetch failed', e);
            }

            // Fallback: Fetch by meeting if needed
            if (sessionsData.length === 0 && meetingsData.length > 0) {
                await this.batchFetch(meetingsData.map(m => m.meeting_key), 5, async (keys) => {
                    const promises = keys.map(k => fetchWithCache<Session[]>(`${BASE_URL}/sessions?meeting_key=${k}`));
                    const results = await Promise.all(promises);
                    results.flat().forEach(s => sessionsData.push(s));
                });
            }

            // Deduplicate and Store Sessions
            const sessionKeys: number[] = [];
            sessionsData.forEach(s => {
                const current = this.sessions.get(s.meeting_key) || [];
                if (!current.find(x => x.session_key === s.session_key)) {
                    current.push(s);
                    sessionKeys.push(s.session_key);
                }
                this.sessions.set(s.meeting_key, current);
            });

            // Calculate Min/Max Session Keys for Bulk Fetching
            let minKey = 0;
            let maxKey = 0;
            if (sessionKeys.length > 0) {
                minKey = Math.min(...sessionKeys);
                maxKey = Math.max(...sessionKeys);
            }

            // 3. Identify relevant sessions (Race/Sprint)
            const relevantSessions: Session[] = [];
            this.sessions.forEach(sessions => {
                sessions.forEach(s => {
                    if (s.session_name === 'Race' || s.session_name === 'Sprint') {
                        relevantSessions.push(s);
                    }
                });
            });

            // 4. Fetch Drivers (Bulk Session Key Range)
            let driversData: Driver[] = [];
            try {
                if (minKey > 0 && maxKey > 0) {
                    // Fetch drivers for the session key range
                    const url = `${BASE_URL}/drivers?session_key>=${minKey}&session_key<=${maxKey}`;
                    driversData = await fetchWithCache<Driver[]>(url);
                    console.log(`[F1DataStore] Bulk fetched ${driversData.length} drivers`);
                }
            } catch (e) { console.warn('[F1DataStore] Bulk driver fetch failed', e); }

            // Fallback: Parallel Fetch by Meeting
            if (driversData.length === 0 && meetingsData.length > 0) {
                const keys = meetingsData.map(m => m.meeting_key);
                await this.batchFetch(keys, 5, async (chunkKeys) => {
                    const promises = chunkKeys.map(k => fetchWithCache<Driver[]>(`${BASE_URL}/drivers?meeting_key=${k}`));
                    const results = await Promise.all(promises);
                    results.flat().forEach(d => driversData.push(d));
                });
            }

            // Store drivers
            driversData.forEach(d => {
                const current = this.drivers.get(d.session_key) || [];
                if (!current.find(x => x.driver_number === d.driver_number)) {
                    current.push(d);
                }
                this.drivers.set(d.session_key, current);
            });

            // 5. Fetch Results (Bulk Session Key Range)
            let resultsData: RaceResult[] = [];
            try {
                if (minKey > 0 && maxKey > 0) {
                    const url = `${BASE_URL}/session_result?session_key>=${minKey}&session_key<=${maxKey}`;
                    resultsData = await fetchWithCache<RaceResult[]>(url);
                    console.log(`[F1DataStore] Bulk fetched ${resultsData.length} results`);
                }
            } catch (e) { console.warn('[F1DataStore] Bulk results fetch failed', e); }

            // Fallback: Parallel Fetch by Session
            if (resultsData.length === 0 && relevantSessions.length > 0) {
                const keys = relevantSessions.map(s => s.session_key);
                await this.batchFetch(keys, 5, async (chunkKeys) => {
                    const promises = chunkKeys.map(k => fetchWithCache<RaceResult[]>(`${BASE_URL}/session_result?session_key=${k}`));
                    const results = await Promise.all(promises);
                    results.flat().forEach(r => resultsData.push(r));
                });
            }

            // Store results
            resultsData.forEach(r => {
                const current = this.results.get(r.session_key) || [];
                if (!current.find(x => x.driver_number === r.driver_number)) { // Unique by driver per session
                    current.push(r);
                }
                this.results.set(r.session_key, current);
            });

            this.seasonLoaded[year] = true;
            console.log(`[F1DataStore] Season ${year} loaded.`);

        } catch (error) {
            console.error('Error loading season data:', error);
        }
    }

    private async batchFetch(items: number[], batchSize: number, fetchFn: (batch: number[]) => Promise<void>) {
        const chunks = [];
        for (let i = 0; i < items.length; i += batchSize) {
            chunks.push(items.slice(i, i + batchSize));
        }

        // Execute chunks SEQUENTIALLY to avoid overwhelming rate limits even with queue
        for (const chunk of chunks) {
            await fetchFn(chunk);
        }
    }

    // --- Accessors ---

    getMeeting(key: number): Meeting | undefined {
        return this.meetings.get(key);
    }

    getMeetings(year: number): Meeting[] {
        // Return meetings for year, sorted
        const yearMeetings: Meeting[] = [];
        this.meetings.forEach(m => {
            if (new Date(m.date_start).getFullYear() === year) {
                yearMeetings.push(m);
            }
        });
        return yearMeetings.sort((a, b) => new Date(a.date_start).getTime() - new Date(b.date_start).getTime());
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

    // Fallback for individual fetching if needed (or load from API if missing)
    async ensureMeeting(meetingKey: number): Promise<Meeting | null> {
        if (this.meetings.has(meetingKey)) return this.meetings.get(meetingKey)!;
        try {
            // Fallback: fetch individual. Ideally we just load the whole season.
            const ms = await fetchWithCache<Meeting[]>(`${BASE_URL}/meetings?meeting_key=${meetingKey}`);
            if (ms[0]) this.meetings.set(meetingKey, ms[0]);
            return ms[0] || null;
        } catch (e) { return null; }
    }
}

export const dataStore = new F1DataStore();


// --- API Functions (Refactored to use dataStore) ---

export const ensureSeasonData = async (year: number) => {
    await dataStore.loadSeason(year);
};

export const getSeasonMeetings = async (year: number): Promise<Meeting[]> => {
    await dataStore.loadSeason(year);
    return dataStore.getMeetings(year);
};

export const getUpcomingRaces = async (): Promise<Meeting[]> => {
    try {
        const currentYear = new Date().getFullYear();
        await dataStore.loadSeason(currentYear);

        const meetings = dataStore.getMeetings(currentYear);
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
        await dataStore.loadSeason(currentYear); // Ensure data

        const meetings = dataStore.getMeetings(currentYear);
        const now = new Date();
        const completedMeetings = meetings
            .filter(meeting => new Date(meeting.date_start) < now)
            .sort((a, b) => new Date(b.date_start).getTime() - new Date(a.date_start).getTime());

        if (completedMeetings.length === 0) return null;
        const lastMeeting = completedMeetings[0];

        const sessions = dataStore.getSessions(lastMeeting.meeting_key);
        const raceSession = sessions.find(s => s.session_name === 'Race');

        if (!raceSession) return null;

        const results = dataStore.getResults(raceSession.session_key);
        const drivers = dataStore.getDrivers(raceSession.session_key);

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
    // Check store first
    const sessions = dataStore.getSessions(meetingKey);
    const race = sessions.find(s => s.session_name === 'Race');
    if (race) return race;

    // Fallback
    try {
        const sessions = await fetchWithCache<Session[]>(`${BASE_URL}/sessions?meeting_key=${meetingKey}&session_name=Race`);
        return sessions.length > 0 ? sessions[0] : null;
    } catch (error) {
        return null;
    }
};

export const getMeetingSessions = async (meetingKey: number): Promise<Session[]> => {
    const s = dataStore.getSessions(meetingKey);
    if (s.length > 0) return s;
    return await fetchWithCache<Session[]>(`${BASE_URL}/sessions?meeting_key=${meetingKey}`);
};

export const getRaceResults = async (sessionKey: number): Promise<RaceResult[]> => {
    const r = dataStore.getResults(sessionKey);
    if (r.length > 0) return r;
    return await fetchWithCache<RaceResult[]>(`${BASE_URL}/session_result?session_key=${sessionKey}`);
};

export const getDrivers = async (sessionKey: number): Promise<Driver[]> => {
    const d = dataStore.getDrivers(sessionKey);
    if (d.length > 0) return d;
    return await fetchWithCache<Driver[]>(`${BASE_URL}/drivers?session_key=${sessionKey}`);
};

export const getMeeting = async (meetingKey: number): Promise<Meeting | null> => {
    // Only async because of legacy signature, but we can make it sync internally or await ensure
    const m = dataStore.getMeeting(meetingKey);
    if (m) return m;

    return await dataStore.ensureMeeting(meetingKey);
};

export const getLaps = async (sessionKey: number): Promise<Lap[]> => {
    // Laps are heavy, maybe don't bulk load them unless needed?
    // Current usage: RaceDetails needs them for calculating total laps.
    // Laps endpoint is HUGE. 
    // Optimization: Just fetch max(lap_number) instead? API doesn't support aggregation.
    // Keep individual fetch for laps as it's only for specific race details view.
    try {
        return await fetchWithCache<Lap[]>(`${BASE_URL}/laps?session_key=${sessionKey}`);
    } catch (error) {
        console.error(`Error fetching laps for session ${sessionKey}:`, error);
        return [];
    }
};

export const getCircuit = async (circuitKey: number): Promise<Circuit | null> => {
    // Cache circuits?
    try {
        const circuits = await fetchWithCache<Circuit[]>(`${BASE_URL}/circuits?circuit_key=${circuitKey}`);
        return circuits.length > 0 ? circuits[0] : null;
    } catch (error) {
        return null;
    }
};
