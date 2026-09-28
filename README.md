# Jubilee Indane Home — website (2026)

Mobile-first static site for Jubilee Indane Home, Pala. No build step.

## Run locally

```bash
python -m http.server 5180
```

Then open http://localhost:5180.

## Structure

- `index.html`: page content and shared SVG gradients
- `css/style.css`: mobile-first styles (base = phone; `min-width: 600px` and `1024px` for larger screens)
- `js/main.js`: all interactions (see below)
- `assets/logo/`: real logos as transparent PNGs (IndianOil roundel; Jubilee wordmark in colour and white; favicons made from the logo flame)
- `assets/img/`: photos

When you change CSS or JS, bump the `?v=` number on the two links in `index.html` so browsers fetch the new files.

## What's on the page

1. Hero: live topographic map of Pala, with the route drawing on load and the silver jubilee seal stamping onto the map
2. Route story: scroll-driven delivery route, godown → town → homes → hill roads
3. Refill planner: 5 kg / 10 kg composite / 14.2 kg / 19 kg; estimate of gas left; book-by date; pre-filled WhatsApp booking; downloadable calendar reminder (.ics); "people at home" quick estimate
4. Cylinder range: all four sizes to scale on a shelf, with details and enquiry links
5. Silver jubilee: interactive silver medallion (tilt and sheen follow the pointer), timeline, photos
6. Route log numbers (count up), gas-safety checklist, about, contact (live open/closed status in IST), footer with logos
7. Phone action bar: Call / WhatsApp / Refill (hides at the footer)

Smooth scrolling uses [Lenis](https://github.com/darkroomengineering/lenis) from jsDelivr on mouse/trackpad devices; touch devices keep native scrolling. Everything respects `prefers-reduced-motion`.

## Before launch

- Have a native speaker review the Malayalam lines (all marked `lang="ml"`, plus the cylinder `ml` fields in `js/main.js`).
- Confirm Jubilee supplies all four sizes (5 kg, 10 kg composite, 14.2 kg, 19 kg) and the descriptions in `INFO` in `js/main.js`.
- The "people at home" estimate uses rough usage rates (`RATE` in `js/main.js`); adjust if Jubilee has better local figures.
- After October 2026, update the "Silver jubilee · October 2026" wording.
- Replace photos with higher-resolution shots where possible.
