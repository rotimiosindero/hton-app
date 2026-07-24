# Houghton 2026 — Timetable

A personal, offline-capable festival timetable. Time runs continuously along the
x-axis, stages run down the y-axis, sets are blocks sized to their actual
duration. Built from the original spreadsheet's merged-cell timings.

## Project structure

```
index.html            the page shell
style.css              all styling (system fonts only, no external requests)
app.js                 rendering, search, drag-to-scroll, notes
data.js                the parsed timetable data (HTON_DATA)
manifest.webmanifest   makes it installable as an app
sw.js                  service worker, caches everything for offline use
icons/                 app icons for the home screen
```

## Running it locally

**Important:** double-clicking `index.html` and opening it as a `file://` URL
will *not* let the service worker register. Browsers (Safari included) only
allow service workers over `https://` or on `localhost`. For local testing,
serve the folder instead:

```bash
cd houghton-timetable
python3 -m http.server 8000
# then open http://localhost:8000 in Safari
```

or, if you have Node installed:

```bash
npx serve .
```

Once loaded once with a connection, reload with Wi-Fi/data switched off to
confirm it still works, that is the real test of the offline behaviour.

## What changed from the original Claude.ai build

- **No external font requests.** The previous version pulled Anton, Inter, and
  JetBrains Mono from Google Fonts. That is one more thing that can fail
  offline or on a slow signal, so this version uses only the system font
  already on your device, styled to keep the same visual weight.
- **Notes now use `localStorage`, not `window.storage`.** The Claude.ai
  version's notes persistence only works inside Claude's own Artifacts
  sandbox. A standalone site needs the standard browser API instead, it
  behaves the same way from your side (notes stay on that device), it just
  works outside of Claude.ai too.
- **A few Safari-specific touches**: `-webkit-` prefixes for sticky
  positioning and momentum scrolling, `overscroll-behavior: contain` on the
  grid so dragging near the screen edge is less likely to trigger Safari's
  swipe-back gesture, and `env(safe-area-inset-*)` padding so content is not
  hidden behind the notch or home indicator when installed full-screen.

## Sharing this with friends

Running it only on your own machine means only you can open it. To actually
share a link:

1. Push this folder to a GitHub repository (Claude Code can do this for you,
   it works directly with git).
2. Turn on **GitHub Pages** for that repo (Settings → Pages → deploy from the
   main branch), or connect the repo to **Netlify**, **Vercel**, or
   **Cloudflare Pages**, any of these give a free `https://` URL, which is a
   requirement for the offline support to work for anyone but you.
3. Share that URL. On an iPhone, opening it in Safari and using
   **Share → Add to Home Screen** installs it like an app, with the icon
   and offline caching already wired up.

## Known limitation worth knowing about

iOS Safari's edge-swipe-to-go-back gesture is a system-level gesture. The
`overscroll-behavior` fix in this build reduces accidental triggers while
dragging the grid, but Safari does not give web pages a way to fully disable
it. If it becomes annoying in practice, dragging from the middle of the
screen rather than near the very edge avoids it.

## Updating next year's lineup

Everything specific to this year's data lives in `data.js`. Swap that file's
contents for a new lineup (same shape: `stages`, `days`, `entries`,
`globalGrid`, `notes`) and bump the `CACHE_NAME` version string in `sw.js` so
returning visitors get the new copy instead of a stale cached one.
