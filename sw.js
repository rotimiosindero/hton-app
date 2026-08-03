// Bump this version string whenever any cached file changes (including data.js
// for a new year's lineup) so returning visitors get the fresh copy instead of
// being stuck on an old cached version.
const CACHE_NAME = 'houghton26-1.2.3';

const PRECACHE_URLS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './data.js',
  './whatsnew.js',
  './artists.js',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './HTN26-MAP-140x140cm-1-2048x2048.png'
];

// A captive portal — the "join this WiFi, now sign in here" kind — answers every
// request with its own HTML page and reports success while doing it, so fetch()
// alone cannot tell it apart from the real file. Left unchecked that page gets
// stored as data.js, and because activate() then deletes the previous cache,
// the last good copy is gone and the app opens blank offline until a new version
// ships. So: prove the response is really ours before storing it.
//
// One file is enough to prove it. A portal substitutes everything, so if data.js
// comes back as genuine data the network is not intercepting and the rest of the
// set can be trusted — checking every file would only add ways to reject a
// perfectly good update.
//
// Content, not Content-Type: the same file is served as text/javascript locally
// and application/javascript by GitHub Pages, while this marker is written
// verbatim by apply_new.py and does not vary by host.
const CONTENT_PROBE = {url: './data.js', marker: 'const HTON_DATA'};

async function fetchVerified(url){
  const response = await fetch(url, {cache: 'reload'});
  // Catches a 404/500 error page, which arrives as perfectly cacheable HTML.
  if(!response.ok) throw new Error(`${url}: HTTP ${response.status}`);
  // Same-origin responses are 'basic'; a portal that redirects to its own host
  // is not, and a followed redirect is not what any of these URLs should do.
  if(response.type !== 'basic' || response.redirected) throw new Error(`${url}: intercepted`);
  if(url === CONTENT_PROBE.url){
    // clone() so the body stays unread and available for cache.put below.
    const text = await response.clone().text();
    if(!text.includes(CONTENT_PROBE.marker)) throw new Error(`${url}: unexpected content`);
  }
  return response;
}

self.addEventListener('install', event => {
  // Deliberately not cache.addAll(), which respects normal HTTP caching and
  // can silently bake a stale disk-cached response into a "fresh" install.
  // {cache:'reload'} forces a real network fetch for every precached file.
  //
  // Verify the whole set, then write it. Interleaving the two would leave a
  // half-written cache behind when a later file fails validation — a failed
  // install never reaches activate(), so nothing would clean that up.
  // Throwing anywhere in here fails the install, which leaves the previous
  // worker and its cache untouched: returning visitors stay on the version
  // they already have instead of losing the app.
  event.waitUntil((async () => {
    const responses = await Promise.all(PRECACHE_URLS.map(fetchVerified));
    const cache = await caches.open(CACHE_NAME);
    await Promise.all(PRECACHE_URLS.map((url, i) => cache.put(url, responses[i])));
    await self.skipWaiting();
  })());
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
