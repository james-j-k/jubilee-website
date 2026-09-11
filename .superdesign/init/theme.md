# Theme

## Part 1 — Compact token summary

Stack: Tailwind CSS 3, all colors piped through CSS custom properties as `H S% L%` triplets consumed via `hsl(var(--token))`. No dark mode is actually enabled in app code today (`[data-theme="dark"]` block exists in tokens.css but nothing toggles it).

### Brand color reality check (IMPORTANT — read before designing)
The actual approved logo (`logo/jubilee-logo.jpg`) uses only **two** brand colors:
- **Ink/navy** — the IndianOil roundel ring + "IndianOil" wordmark. Sampled hex ≈ `#0F1A3D` / `#1B2233` range (very dark desaturated navy-blue).
- **Vivid orange** — the IndianOil roundel fill, the flame icon, and the "Jubilee Indane Home" wordmark. Sampled hex ≈ `#F05400` (rgb 240,84,0) — a warm orange-red, NOT a crimson/pink red.
- Plus black (tagline bar "SAFE.RELIABLE.CONVENIENT") and white.

The CURRENT `tokens.css` (below) instead defines `--primary` as `--color-indane-red: 353 77% 45%` ≈ `#CB1A35`, a **crimson/rose red that does not appear anywhere in the real logo**. This is very likely the "off-brand" feeling behind the redesign request — the site's red skews pink/crimson while the authentic IndianOil/Indane mark is navy + a warm vivid orange. Any redesign that claims brand fidelity should anchor on the sampled navy (`#0F1A3D`-ish) and orange (`#F05400`-ish), not the current crimson token.

### Current color tokens (`:root`, light only)
| Token | Value (HSL) | Approx hex | Used for |
|---|---|---|---|
| `--background` | `40 20% 97%` (`--color-mineral`) | `#F8F7F4` | page canvas |
| `--foreground` | `223 62% 18%` (`--color-jubilee-navy`) | `#182D5C`-ish | primary text/headings |
| `--surface` | `0 0% 100%` (`--color-cloud`) | `#FFFFFF` | cards/panels |
| `--surface-subtle` | `220 14% 96%` (`--color-muted`) | `#F2F3F5` | recessed section bands |
| `--muted-foreground` | `220 12% 36%` (`--color-slate`) | `#596170` | secondary text |
| `--border` | `220 13% 91%` (`--color-border`) | `#E5E7EB`-ish | hairlines |
| `--primary` | `353 77% 45%` (`--color-indane-red`) | `#CB1A35` | CTAs, eyebrows, active nav — **the "off-brand" crimson** |
| `--primary-foreground` | `0 0% 100%` | `#FFFFFF` | text on primary |
| `--primary-soft` | `353 100% 97%` | `#FFF3F5`-ish | hover/active tint |
| `--accent` | `23 100% 46%` (`--color-jubilee-orange`) | `#EB5900`-ish | small highlight spans, tags |
| `--ember-soft` | `23 100% 96%` | pale peach | rare warm surface |
| `--action` | `223 62% 18%` (`--color-jubilee-navy`) | navy | secondary CTA fill (e.g. Commercial spotlight button) |
| `--action-foreground` | `0 0% 100%` | white | text on action |
| `--institutional-navy` | `229 75% 15%` | deep navy | **footer background** |
| `--success` | `142 71% 30%` | green | form success state |
| `--danger` | `0 73% 42%` | red | error state |
| `--focus` | same as `--primary` | crimson | focus ring |

### Typography
- Single font family: **Geist Sans** (`next/font/google`), exposed as `--font-geist-sans` → `--font-sans`. No secondary display or mono face.
- Weights: regular 400, medium 500, semibold 600, "display" 540 (used for big numeric/heading moments).
- Tracking: display `-0.06em`, heading `-0.04em`, body `-0.01em`, metadata `+0.075em` (uppercase eyebrows/labels).
- Fluid type scale via `clamp()`: hero `2.875rem→5rem`, display `2.5rem→4.5rem`, h1 `2.375rem→3.5rem`, h2 `1.875rem→2.5rem`, h3 `1.375rem→1.5rem`; h4/h5/h6 fixed (1.125/1/0.875rem). Body 1rem, caption 0.8125rem, metadata 0.75rem, button 0.9375rem.
- Line-heights: hero 0.98, display 1.02, heading 1.15, body 1.55.

### Spacing (4px base)
`--space-1..10` = 0.25rem, 0.5rem, 0.75rem, 1rem, 1.5rem, 2rem, 3rem, 4rem, 6rem, 8rem.
Section vertical rhythm: `--section-space` = 5rem (mobile) → 6rem (≥48rem) → 8rem (≥80rem).
Gutters: mobile 1.25rem, tablet 2rem, desktop 3rem, wide 5rem. Content width 75rem (max-w-content), wide 90rem, reading 42rem.

### Radius & elevation
`--radius-sm` 0.375rem, `--radius-md` 0.75rem, `--radius-lg` 1.25rem, `--radius-pill` 999px.
Shadows are soft/quiet (near-black at 7–17% opacity), not colored/glowing: `--shadow-panel` `0 8px 20px rgb(17 24 39/7%)`, `--shadow-plaque` `0 22px 48px rgb(17 24 39/11%)`, `--shadow-action` `0 11px 23px rgb(17 24 39/17%)`.

### Glass material
`--glass-surface: rgb(255 255 255/52%)`, `--glass-border: rgb(255 255 255/68%)`, `--glass-blur: 16px`, `--glass-saturation: 110%` — used by the Hero's plaque card and `GlassPanel` component.

### Motion
Eases: `--ease-standard: cubic-bezier(0.16,1,0.3,1)`, `--ease-route: cubic-bezier(0.65,0,0.35,1)`. Durations: micro 160ms, small 240ms, reveal 340ms, route 420ms. `--motion-distance: 0.5rem` (reveal-up travel distance).
Motion utility classes (`src/styles/motion.css`): `.motion-fade`, `.motion-reveal` (fade+rise-up), `.motion-route-draw` (stroke-dasharray/offset draw-in), `.motion-hover-lift` (translateY(-2px) on hover). **These exist but are barely wired up in practice** — most of the current site (all sections except the Hero) has zero motion; only the Hero has bespoke mount-triggered `@keyframes` (`copyEnter`, `plaqueEnter`, `drawRoute`, `nodeEnter`) and even those only fire once on page load, not on scroll. There is no IntersectionObserver/scroll-triggered reveal system anywhere in the codebase today.

### Z-index scale
base 0, raised 10, sticky 20 (header), overlay 30, modal 40 (mobile drawer), toast 50 (skip-link).

---

## Part 2 — Raw source

### `src/styles/tokens.css` (full)
```css
:root {
  /* Color: Jubilee-owned interface palette. */
  --color-mineral: 40 20% 97%;
  --color-cloud: 0 0% 100%;
  --color-graphite: 220 14% 18%;
  --color-slate: 220 12% 36%;
  --color-muted: 220 14% 96%;
  --color-border: 220 13% 91%;
  /* Institutional layer: Indane recognition and public-service certainty. */
  --color-indane-red: 353 77% 45%;
  --color-indane-red-soft: 353 100% 97%;
  --color-institutional-navy: 229 75% 15%;
  /* Jubilee layer: local identity drawn from the supplied Jubilee lockup. */
  --color-jubilee-orange: 23 100% 46%;
  --color-jubilee-orange-soft: 23 100% 96%;
  --color-jubilee-navy: 223 62% 18%;
  --color-success: 142 71% 30%;
  --color-danger: 0 73% 42%;

  /* Semantic color tokens. */
  --background: var(--color-mineral);
  --foreground: var(--color-jubilee-navy);
  --surface: var(--color-cloud);
  --surface-subtle: var(--color-muted);
  --muted: var(--color-muted);
  --muted-foreground: var(--color-slate);
  --border: var(--color-border);
  --primary: var(--color-indane-red);
  --primary-foreground: var(--color-cloud);
  --primary-soft: var(--color-indane-red-soft);
  --accent: var(--color-jubilee-orange);
  --ember-soft: var(--color-jubilee-orange-soft);
  --action: var(--color-jubilee-navy);
  --action-foreground: var(--color-cloud);
  --institutional-navy: var(--color-institutional-navy);
  --success: var(--color-success);
  --danger: var(--color-danger);
  --focus: var(--color-indane-red);

  /* Typography. Geist is supplied by next/font in the root layout. */
  --font-sans: var(--font-geist-sans), Arial, sans-serif;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-display: 540;
  --tracking-display: -0.06em;
  --tracking-heading: -0.04em;
  --tracking-body: -0.01em;
  --tracking-metadata: 0.075em;

  --text-hero: clamp(2.875rem, 8vw, 5rem);
  --text-display: clamp(2.5rem, 5.5vw, 4.5rem);
  --text-h1: clamp(2.375rem, 4.2vw, 3.5rem);
  --text-h2: clamp(1.875rem, 3.1vw, 2.5rem);
  --text-h3: clamp(1.375rem, 2.2vw, 1.5rem);
  --text-h4: 1.125rem;
  --text-h5: 1rem;
  --text-h6: 0.875rem;
  --text-body-lg: clamp(1.125rem, 1.6vw, 1.25rem);
  --text-body: 1rem;
  --text-caption: 0.8125rem;
  --text-metadata: 0.75rem;
  --text-button: 0.9375rem;

  --leading-hero: 0.98;
  --leading-display: 1.02;
  --leading-heading: 1.15;
  --leading-body: 1.55;
  --leading-caption: 1.45;
  --leading-metadata: 1.35;

  /* Spacing: 4px base unit. */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.5rem;
  --space-6: 2rem;
  --space-7: 3rem;
  --space-8: 4rem;
  --space-9: 6rem;
  --space-10: 8rem;

  /* Radius and elevation. */
  --radius-sm: 0.375rem;
  --radius-md: 0.75rem;
  --radius-lg: 1.25rem;
  --radius-pill: 999px;
  --shadow-panel: 0 8px 20px rgb(17 24 39 / 7%);
  --shadow-plaque: 0 22px 48px rgb(17 24 39 / 11%);
  --shadow-action: 0 11px 23px rgb(17 24 39 / 17%);

  /* Glass material. */
  --glass-surface: rgb(255 255 255 / 52%);
  --glass-border: rgb(255 255 255 / 68%);
  --glass-blur: 16px;
  --glass-saturation: 110%;

  /* Motion. */
  --ease-standard: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-route: cubic-bezier(0.65, 0, 0.35, 1);
  --duration-micro: 160ms;
  --duration-small: 240ms;
  --duration-reveal: 340ms;
  --duration-route: 420ms;
  --motion-distance: 0.5rem;

  /* Layering. */
  --z-base: 0;
  --z-raised: 10;
  --z-sticky: 20;
  --z-overlay: 30;
  --z-modal: 40;
  --z-toast: 50;

  /* Layout. */
  --gutter-mobile: 1.25rem;
  --gutter-tablet: 2rem;
  --gutter-desktop: 3rem;
  --gutter-wide: 5rem;
  --content-width: 75rem;
  --content-width-wide: 90rem;
  --reading-width: 42rem;
  --section-space: 5rem;
  --section-space-wide: 8rem;
}

/* Prepared for a future approved dark theme. No theme selector is enabled by app code. */
[data-theme="dark"] {
  --background: 222 24% 9%;
  --foreground: 40 20% 97%;
  --surface: 222 22% 13%;
  --surface-subtle: 222 18% 17%;
  --muted: 222 18% 17%;
  --muted-foreground: 220 12% 72%;
  --border: 222 15% 25%;
  --primary-soft: 353 38% 18%;
  --ember-soft: 27 46% 17%;
  --glass-surface: rgb(20 25 35 / 62%);
  --glass-border: rgb(255 255 255 / 12%);
}

@media (min-width: 48rem) {
  :root { --section-space: 6rem; }
}

@media (min-width: 80rem) {
  :root { --section-space: var(--section-space-wide); }
}
```

### `src/styles/motion.css` (full)
```css
@keyframes ds-fade-in { from { opacity: 0; } to { opacity: 1; } }
@keyframes ds-reveal-up { from { opacity: 0; transform: translateY(var(--motion-distance)); } to { opacity: 1; transform: translateY(0); } }
@keyframes ds-route-draw { to { stroke-dashoffset: 0; } }

.motion-fade { animation: ds-fade-in var(--duration-reveal) var(--ease-standard) both; animation-delay: var(--motion-delay, 0ms); }
.motion-reveal { animation: ds-reveal-up var(--duration-reveal) var(--ease-standard) both; animation-delay: var(--motion-delay, 0ms); }
.motion-route-draw { stroke-dasharray: var(--route-length, 1); stroke-dashoffset: var(--route-length, 1); animation: ds-route-draw var(--duration-route) var(--ease-route) both; animation-delay: var(--motion-delay, 0ms); }
.motion-hover-lift { transition: transform var(--duration-micro) ease-out, box-shadow var(--duration-micro) ease-out; }
.motion-hover-lift:hover { transform: translateY(-2px); }

@media (prefers-reduced-motion: reduce) {
  .motion-fade, .motion-reveal, .motion-route-draw { animation-delay: 0ms !important; animation-duration: 1ms !important; }
  .motion-hover-lift { transition-duration: 1ms !important; }
  .motion-hover-lift:hover { transform: none; }
}
```

### `tailwind.config.ts` (full)
```ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      borderRadius: { lg: "var(--radius-lg)", md: "var(--radius-md)", sm: "var(--radius-sm)", pill: "var(--radius-pill)" },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        surface: "hsl(var(--surface))",
        "surface-subtle": "hsl(var(--surface-subtle))",
        muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
        border: "hsl(var(--border))",
        primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))", soft: "hsl(var(--primary-soft))" },
        accent: { DEFAULT: "hsl(var(--accent))", soft: "hsl(var(--ember-soft))" },
        action: { DEFAULT: "hsl(var(--action))", foreground: "hsl(var(--action-foreground))" },
        institutional: { navy: "hsl(var(--institutional-navy))" },
        success: "hsl(var(--success))",
        danger: "hsl(var(--danger))",
      },
      fontFamily: { sans: ["var(--font-sans)"] },
      fontSize: {
        hero: ["var(--text-hero)", { lineHeight: "var(--leading-hero)", letterSpacing: "var(--tracking-display)", fontWeight: "var(--font-weight-display)" }],
        display: ["var(--text-display)", { lineHeight: "var(--leading-display)", letterSpacing: "var(--tracking-display)", fontWeight: "var(--font-weight-display)" }],
        h1: ["var(--text-h1)", { lineHeight: "var(--leading-heading)", letterSpacing: "var(--tracking-heading)", fontWeight: "var(--font-weight-semibold)" }],
        h2: ["var(--text-h2)", { lineHeight: "var(--leading-heading)", letterSpacing: "var(--tracking-heading)", fontWeight: "var(--font-weight-semibold)" }],
        h3: ["var(--text-h3)", { lineHeight: "1.25", letterSpacing: "var(--tracking-heading)", fontWeight: "var(--font-weight-semibold)" }],
        h4: ["var(--text-h4)", { lineHeight: "1.3", letterSpacing: "var(--tracking-heading)", fontWeight: "var(--font-weight-semibold)" }],
        h5: ["var(--text-h5)", { lineHeight: "1.35", letterSpacing: "var(--tracking-heading)", fontWeight: "var(--font-weight-semibold)" }],
        h6: ["var(--text-h6)", { lineHeight: "1.4", letterSpacing: "var(--tracking-metadata)", fontWeight: "var(--font-weight-semibold)" }],
        bodylg: ["var(--text-body-lg)", { lineHeight: "1.5" }],
        body: ["var(--text-body)", { lineHeight: "var(--leading-body)" }],
        caption: ["var(--text-caption)", { lineHeight: "var(--leading-caption)" }],
        metadata: ["var(--text-metadata)", { lineHeight: "var(--leading-metadata)", letterSpacing: "var(--tracking-metadata)", fontWeight: "var(--font-weight-semibold)" }],
        button: ["var(--text-button)", { lineHeight: "1", fontWeight: "var(--font-weight-semibold)" }],
      },
      spacing: { 1: "var(--space-1)", 2: "var(--space-2)", 3: "var(--space-3)", 4: "var(--space-4)", 5: "var(--space-5)", 6: "var(--space-6)", 7: "var(--space-7)", 8: "var(--space-8)", 9: "var(--space-9)", 10: "var(--space-10)" },
      maxWidth: { content: "var(--content-width)", wide: "var(--content-width-wide)", reading: "var(--reading-width)" },
      boxShadow: { panel: "var(--shadow-panel)", plaque: "var(--shadow-plaque)", action: "var(--shadow-action)" },
      backdropBlur: { glass: "var(--glass-blur)" },
      zIndex: { base: "var(--z-base)", raised: "var(--z-raised)", sticky: "var(--z-sticky)", overlay: "var(--z-overlay)", modal: "var(--z-modal)", toast: "var(--z-toast)" },
    },
  },
  plugins: [],
};

export default config;
```

### `src/app/globals.css` (full)
```css
@import "../styles/tokens.css";
@import "../styles/motion.css";

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  * { @apply border-border; box-sizing: border-box; }
  html { @apply bg-background text-foreground; scroll-behavior: smooth; text-rendering: optimizeLegibility; }
  body { @apply min-h-screen bg-background font-sans antialiased; font-feature-settings: "kern", "liga", "clig", "calt"; }
  button, input, textarea, select { font: inherit; }
  :focus-visible { outline: 2px solid hsl(var(--focus)); outline-offset: 3px; }
  ::selection { background: hsl(var(--primary-soft)); color: hsl(var(--foreground)); }
  section[id], main[id] { scroll-margin-top: 7rem; }
}

.skip-link { position: fixed; z-index: var(--z-toast); top: var(--space-3); left: var(--space-3); transform: translateY(-200%); border-radius: var(--radius-sm); background: hsl(var(--foreground)); color: hsl(var(--surface)); padding: var(--space-3) var(--space-4); font-size: var(--text-caption); font-weight: var(--font-weight-semibold); text-decoration: none; transition: transform var(--duration-micro) var(--ease-standard); }
.skip-link:focus-visible { transform: translateY(0); }

@media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } }
@media (max-width: 47.9375rem) { body { padding-bottom: calc(3.5rem + env(safe-area-inset-bottom)); } }
```
