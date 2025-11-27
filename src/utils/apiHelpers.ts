
// Simple in-memory queue for concurrency limiting
class RequestQueue {
    private queue: (() => Promise<void>)[] = [];
    private activeCount = 0;
    private maxConcurrent: number;

    constructor(maxConcurrent: number) {
        this.maxConcurrent = maxConcurrent;
    }

    add<T>(fn: () => Promise<T>): Promise<T> {
        return new Promise((resolve, reject) => {
            const task = async () => {
                this.activeCount++;
                try {
                    const result = await fn();
                    resolve(result);
                } catch (e) {
                    reject(e);
                } finally {
                    this.activeCount--;
                    this.next();
                }
            };

            if (this.activeCount < this.maxConcurrent) {
                task();
            } else {
                this.queue.push(task);
            }
        });
    }

    private next() {
        if (this.activeCount < this.maxConcurrent && this.queue.length > 0) {
            const task = this.queue.shift();
            task?.();
        }
    }
}

const apiQueue = new RequestQueue(3); // Limit to 3 concurrent requests

// Cache helper
const CACHE_PREFIX = 'f1_cache_';
const CACHE_EXPIRY = 24 * 60 * 60 * 1000; // 24 hours

interface CacheItem<T> {
    data: T;
    timestamp: number;
}

export const fetchWithCache = async <T>(url: string, forceRefresh = false): Promise<T> => {
    const cacheKey = CACHE_PREFIX + url;

    if (!forceRefresh) {
        const cached = localStorage.getItem(cacheKey);
        if (cached) {
            try {
                const item: CacheItem<T> = JSON.parse(cached);
                const now = Date.now();
                if (now - item.timestamp < CACHE_EXPIRY) {
                    return item.data;
                }
            } catch (e) {
                console.warn('Failed to parse cache', e);
                localStorage.removeItem(cacheKey);
            }
        }
    }

    // Use queue for network requests
    return apiQueue.add(async () => {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Failed to fetch ${url}`);
        const data = await response.json();

        try {
            localStorage.setItem(cacheKey, JSON.stringify({
                data,
                timestamp: Date.now()
            }));
        } catch (e) {
            console.warn('Failed to save to cache (quota exceeded?)', e);
        }

        return data;
    });
};
