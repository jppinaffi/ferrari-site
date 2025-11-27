
const BASE_URL = 'https://api.openf1.org/v1';

// Cache implementation
const cache = new Map();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

const fetchWithCache = async (url) => {
    const now = Date.now();
    const cached = cache.get(url);

    if (cached && (now - cached.timestamp < CACHE_DURATION)) {
        console.log(`[CACHE HIT] ${url}`);
        return cached.data;
    }

    console.log(`[FETCH] ${url}`);
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Failed to fetch: ${url}`);
    const data = await response.json();

    cache.set(url, { data, timestamp: now });
    return data;
};

async function test() {
    try {
        // Test 1: Fetch meetings twice to check cache
        const currentYear = new Date().getFullYear();
        const url = `${BASE_URL}/meetings?year=${currentYear}&limit=1`;

        console.log("--- Test 1: Caching ---");
        await fetchWithCache(url);
        await fetchWithCache(url); // Should be cache hit

        // Test 2: Fetch Laps (simulated)
        console.log("\n--- Test 2: Laps Endpoint ---");
        // We need a valid session key. Let's try to find one from the meeting we just fetched if possible, 
        // or just use a known one or random one to see if endpoint exists (it might return empty)
        // 9158 is a session key from 2023 Bahrain GP Race
        const lapsUrl = `${BASE_URL}/laps?session_key=9158&limit=1`;
        const laps = await fetchWithCache(lapsUrl);
        console.log("Laps found:", laps.length);

        // Test 3: Circuit (simulated)
        console.log("\n--- Test 3: Circuit Endpoint ---");
        // 63 is Bahrain
        const circuitUrl = `${BASE_URL}/circuits?circuit_key=63`;
        const circuit = await fetchWithCache(circuitUrl);
        console.log("Circuit info:", JSON.stringify(circuit[0], null, 2));

    } catch (e) {
        console.error(e);
    }
}

test();
