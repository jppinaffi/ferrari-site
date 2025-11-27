
const BASE_URL = 'https://api.openf1.org/v1';

// --- Rate Limiter / Queue Implementation ---
class RequestQueue {
    constructor() {
        this.queue = [];
        this.processing = false;
        this.lastRequestTime = 0;
        this.minDelay = 300; // 300ms
    }

    async add(url) {
        return new Promise((resolve, reject) => {
            this.queue.push({ url, resolve, reject });
            this.process();
        });
    }

    async process() {
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
                console.log(`[FETCH] ${request.url} at ${new Date().toISOString()}`);
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

async function test() {
    try {
        console.log("--- Test: Rate Limiter ---");
        const urls = [
            `${BASE_URL}/meetings?year=2024&limit=1`,
            `${BASE_URL}/meetings?year=2023&limit=1`,
            `${BASE_URL}/meetings?year=2022&limit=1`,
            `${BASE_URL}/meetings?year=2021&limit=1`,
            `${BASE_URL}/meetings?year=2020&limit=1`
        ];

        // Fire all requests at once
        console.log("Firing 5 requests...");
        const start = Date.now();
        await Promise.all(urls.map(url => requestQueue.add(url)));
        const end = Date.now();
        console.log(`All requests completed in ${end - start}ms`);

    } catch (e) {
        console.error(e);
    }
}

test();
