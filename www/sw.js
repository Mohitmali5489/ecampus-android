const CACHE_NAME = 'ecampus-offline-cache-v1';
const OFFLINE_URL = 'offline.html';

// 1. When the app is installed, cache the offline.html file
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.add(OFFLINE_URL);
        })
    );
});

// 2. Intercept network requests
self.addEventListener('fetch', (event) => {
    // Only intercept page navigation requests (HTML files)
    if (event.request.mode === 'navigate') {
        event.respondWith(
            // Try to fetch the page from the internet first
            fetch(event.request).catch(() => {
                // If the internet fetch fails, serve the cached offline.html
                return caches.match(OFFLINE_URL);
            })
        );
    }
});
