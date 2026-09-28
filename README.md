# Jubilee Indane Home — website (2026)

Mobile-first static site for Jubilee Indane Home, Pala. No build step. Pushing `main` deploys to Vercel.

## Run locally

```bash
python -m http.server 5180
```

Then open http://localhost:5180. (Analytics and offline support switch themselves off on localhost.)

## Structure

- `index.html`: page content (English) with `data-i18n` keys for translation
- `js/i18n-ml.js`: Malayalam text for every key, plus planner/cylinder strings
- `js/main.js`: all interactions. The settings at the top are safe to edit:
  - `HOLIDAYS`: office closed days (`"YYYY-MM-DD"`), shown as "Closed today · public holiday"
  - `THANKS`: jubilee thank-you notes. The wall stays hidden until at least one is added. Only add real notes with permission.
  - `JUBILEE`: the jubilee month (Oct 2026). Before it: "turns 25 this October"; during it: "celebrating this month"; after it: "turned 25". Preview any mode with `?jubilee=pre|during|after`.
- `css/style.css`: mobile-first styles (base = phone; `min-width: 600px` and `1024px` for larger screens)
- `sw.js` + `manifest.webmanifest`: installable app and offline support
- `privacy.html`, `terms.html`, `404.html`: sub-pages (English)
- `assets/`: self-hosted fonts, real logos (WebP), photos, app icons

## Updating CSS or JS

1. Bump the `?v=` number on the CSS/JS links in `index.html` (and in `privacy.html`, `terms.html`, `404.html` for the CSS).
2. Update `VERSION` and the matching `?v=` URLs in `sw.js`, so installed apps pick up the change.

## Features

- Hero map with the silver jubilee seal; English / മലയാളം switch (remembered on the device)
- Phone header: Call + Menu. The menu has a "Smell gas? Get help now" block with a direct Call 1906
- Route story (shorter on phones, with Skip)
- Refill planner: 5 / 10 composite / 14.2 / 19 kg; quick date buttons; "people at home" estimate; optional consumer number added to the WhatsApp booking; calendar reminder; remembers entries on the device, with "Forget my details"; "Add to home screen" offered after first use (Chrome/Android)
- Cylinder shelf with swipe; business enquiry form that composes a WhatsApp message
- Silver jubilee section: medallion, timeline, photo viewer (tap to enlarge, swipe), memory invitation, optional thank-you wall
- Gas-safety checklist; live office status (India time)

## Before relying on it

- **Malayalam:** have a native speaker review `js/i18n-ml.js`, especially the safety steps (`sf.*`).
- **Cylinder details:** confirm the four sizes and the `INFO` descriptions in `js/main.js`.
- **Usage estimate:** the "people at home" rates (`RATE` in `js/main.js`) are rough; adjust if Jubilee has local figures.
- **Holidays:** add the office's closed days to `HOLIDAYS`.
