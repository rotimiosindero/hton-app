// Bump this version string whenever any cached file changes (including data.js
// for a new year's lineup) so returning visitors get the fresh copy instead of
// being stuck on an old cached version.
const CACHE_NAME = 'houghton26-0.5.5';

const PRECACHE_URLS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './data.js',
  './artists.js',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png'
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
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        if (response.ok && response.type === 'basic') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => cached);
    })
  );
});
