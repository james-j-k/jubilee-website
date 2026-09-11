# Jubilee Indane Home — Design System

## Product context

Jubilee Indane Home is an **Authorised Indane (IndianOil) LPG Distributor** serving Pala, Kerala — domestic and commercial gas-cylinder customers across a mixed urban/hilly-rural service area. This is a local, trust-driven, safety-conscious utility service, not a consumer tech product. Key jobs-to-be-done on the home page: establish institutional legitimacy (the IndianOil/Indane relationship is protected and must be shown correctly), build local trust (route-based delivery, scale, local accountability), and drive a single primary action — contact Jubilee (call / WhatsApp / enquiry form).

Key pages: `/` (home — current design target), `/about`, `/services` (domestic), `/commercial`, `/safety`, `/privacy`, `/terms`.

Full architecture/content detail: see `.superdesign/init/*.md`.

## Direction for this round

The user has asked to explore a **new visual direction** for the home page (not just a refinement of the current editorial/restrained layout), while the brand color palette must be corrected and respected as a hard constraint — see below. A prior redesign attempt in this codebase (built by hand, outside Superdesign) leaned heavily into a dark-navy/gradient/glow "SaaS-vibrant" aesthetic and was rejected by the user ("bad, didn't like, go back to original") — treat that as one data point, not a template to repeat verbatim. Feel free to genuinely explore; the variations step exists precisely so the user can compare options rather than commit to a single guess.

## Brand colors — CORRECTED (hard constraint)

The approved logo (`logo/jubilee-logo.jpg`) was pixel-sampled directly. It uses exactly two brand colors plus black/white — **no crimson or pink red appears anywhere in the real mark.** The site's current implementation uses a crimson (`#CB1A35`) that does not match the brand; going forward, replace it with the colors below.

| Role | Color | Hex | Notes |
|---|---|---|---|
| **Ink / Navy** (brand anchor, dark) | Deep desaturated navy-blue | `#0F1A3D` (roughly `hsl(226 60% 15%)`) | Sampled from the IndianOil roundel ring + wordmark. Use for headings/ink text on light surfaces, dark section backgrounds, footer, primary dark UI chrome. |
| **Flame Orange** (brand anchor, primary action) | Vivid orange-red (NOT crimson/pink) | `#F05400` (roughly `hsl(21 100% 47%)`) | Sampled from the IndianOil roundel fill and the "Jubilee Indane Home" flame wordmark. Use for the primary CTA, key accents, active states. **This — not red — is the brand's signal color.** |
| Amber (secondary accent, optional) | Warm amber, derived to pair with the orange | `#FFB020`-ish | Optional gradient/accent partner; use sparingly, e.g. tag dots, small highlights. |
| Signal Blue (optional secondary, derived) | Mid blue in the navy family | `#2F6FE4`-ish | Optional — a brighter blue drawn from the navy family, useful only if a second accent is needed (e.g. a two-tone gradient). Never a substitute for the orange as the primary action color. |
| Canvas (light surface) | Warm near-white | `#FBF8F3`–`#FAFAFA` | Page background on light sections. |
| Slate (muted text) | Desaturated blue-gray | `#5B6472`-ish | Secondary/supporting text on light surfaces. |

**Accessibility note:** the raw sampled orange (`#F05400`) is roughly 3.3:1 against white text and light canvas — short of 4.5:1 AA for small text. Where orange is used as small text/label color on a light background, a slightly darkened variant (~`hsl(21 100% 38%)`, still clearly "the brand orange," not crimson) should be used instead; reserve the fully-saturated bright orange for large text, icons, buttons-with-dark-text, and decorative/gradient use. Where orange is a button fill, prefer **dark navy text** on it (the logo's own navy-on-orange pairing) over white text, which fails contrast on this hue.

**Do not introduce**: crimson/pink/rose reds, purple, teal/green as brand colors. Semantic success/danger colors may still use conventional green/red **only** for literal form status (never as decorative brand color).

## Typography

Current implementation uses only Geist Sans (a safe, generic system-feeling default) for everything. For the "new direction" exploration, use a more considered pairing that reads as an established, trustworthy local institution rather than a generic SaaS template:

- **Display / headings**: a serif or semi-serif with warmth and real character (e.g. **Fraunces**, or similar) — used for H1/H2 moments, sparingly, at large sizes. Conveys "established since 2001," not "startup."
- **Body / UI**: a clean, highly legible grotesque sans (e.g. **Inter**, or similar) for body copy, labels, buttons, navigation.
- Keep the existing fluid `clamp()` type-scale philosophy (hero/display/h1/h2/h3 all scale with viewport) — see `.superdesign/init/theme.md` for exact current values as a sizing reference; the new direction may adjust the actual scale/weights but should keep responsive fluid sizing.

## Layout, spacing, motion — open for the new direction

Current spacing scale (4px base, `--space-1..10`), radii (`sm/md/lg/pill`), and shadow language (soft neutral shadows, no color/glow) are documented in `.superdesign/init/theme.md` as a *reference*, not a hard constraint for this exploration — the new direction may propose different rhythm, radius, and elevation language as long as it stays coherent and accessible.

**Motion**: the current site has almost no real motion (a few mount-only keyframes on the Hero, nothing scroll-triggered anywhere else). This is a real opportunity — thoughtful scroll-reveal and hover/press micro-interaction would be a genuine improvement, not scope creep. Keep it purposeful and respect `prefers-reduced-motion`, not decorative-for-its-own-sake.

## Brand-restricted asset — Official Brand Rail

Every hero on this site (home + all sub-pages) opens with the approved `logo/jubilee-logo.jpg` composite lockup (IndianOil roundel + Jubilee Indane Home wordmark + tagline) next to "Authorised Indane Distributor." This is a protected institutional relationship — **any design draft with a logo position must render this exact approved lockup image, never a placeholder, initials, or invented mark.** Upload it as a Brand Asset before drafting (see workflow below).

## What "much better" should mean here

- Correct the brand color mismatch (crimson → real navy + orange) — non-negotiable.
- A genuinely considered typographic upgrade from generic Geist-only.
- Real scroll/interaction motion where the current site has almost none.
- Keep the institutional trust signals (IndianOil/Indane official relationship, route-based local accountability, operational proof numbers, safety messaging) — these are the substance of why a customer would trust a gas distributor; don't bury them under decoration.
- Still get to a single clear primary action: contact Jubilee.
