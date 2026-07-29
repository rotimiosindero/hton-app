// Bump this version string whenever any cached file changes (including data.js
// for a new year's lineup) so returning visitors get the fresh copy instead of
// being stuck on an old cached version.
const CACHE_NAME = 'houghton26-1.1.3';

const PRECACHE_URLS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './data.js',
  './artists.js',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './HTN26-MAP-140x140cm-1-2048x2048.png'
];

self.addEventListener('install', event => {
  // Deliberately not cache.addAll(), which respects normal HTTP caching and
  // can silently bake a stale disk-cached response into a "fresh" install.
  // {cache:'reload'} forces a real network fetch for every precached file.
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => Promise.all(
        PRECACHE_URLS.map(url =>
          fetch(url, {cache: 'reload'}).then(response => cache.put(url, response))
        )
      ))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(names =>
      Promise.all(
        names.filter(name => name !== CACHE_NAME)
             .map(name => caches.delete(name))
      )
    ).then(() => self.clients.claim())
  );
});

// Cache-first: instant loads and full offline support once the first visit
// has completed. Falls back to the network for anything not precached.
self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;

  // Only ever handle our own files. Third-party requests (Buy Me a Coffee,
  // GoatCounter, SoundCloud embeds) are left entirely to the browser — there
  // is nothing useful to cache, and intercepting them meant an offline
  // failure came back through respondWith() as a broken response instead of
  // a plain fast network error the page could shrug off.
  if (new URL(request.url).origin !== self.location.origin) return;

  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) return cached;
      return fetch(request).then(response => {
        if (response.ok && response.type === 'basic') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
        }
        return response;
      }).catch(() =>
        // Offline and not precached. Every branch below must resolve to a real
        // Response: respondWith() rejects on undefined, which is what turned a
        // missing file into a hard "Failed to fetch" rather than a graceful miss.
        (request.mode === 'navigate'
          // A navigation must still land on the app shell. This also covers a
          // shared link arriving with tracking params (hton.app/?fbclid=...),
          // whose URL never matches the cached "/" exactly.
          ? caches.match('./index.html')
          : Promise.resolve(null)
        ).then(shell => shell || new Response('', {status: 504, statusText: 'Offline'}))
      );
    })
  );
});
