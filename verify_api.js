
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
