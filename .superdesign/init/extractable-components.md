# Extractable Components

Components worth extracting as reusable Superdesign `DraftComponent` entities (full source is in `components.md` / `layouts.md`).

## Layout Components (appear on most/every page)

## SiteHeader
- Source: `src/components/navigation/site-header.tsx`
- Category: layout
- Description: Sticky top navigation — logo lockup, centered nav links (About/Services/Commercial/Safety), "Contact Jubilee" CTA, hamburger opening a full-screen mobile drawer.
- Extractable props: `activeItem` (string, one of the primary nav hrefs — drives the active-link underline/color), `isScrolled` (boolean, drives the opaque/glass background state — likely simplify to always-scrolled for static design drafts).
- Hardcoded: "Jubilee Indane Home" wordmark text, "Authorised Indane Distributor" relationship line, "Contact Jubilee" CTA label/href (`/#contact`), Menu/X icons, all CSS.

## SiteFooter
- Source: `src/components/navigation/site-footer.tsx`
- Category: layout
- Description: Dark-navy 4-column footer — brand identity + logo, quick nav, services links, contact & visit block, legal bar.
- Extractable props: none really needed (footer content is static site-wide).
- Hardcoded: logo image, all nav link labels/hrefs, address/hours/contact strings, copyright year (`new Date().getFullYear()` — hardcode a literal year in the static template), all CSS.

## StickyMobileContactBar
- Source: `src/components/contact/sticky-mobile-contact-bar.tsx`
- Category: layout
- Description: Fixed-bottom 3-column mobile quick-contact bar (Call / WhatsApp / Directions).
- Extractable props: none.
- Hardcoded: labels, icons, hrefs, all CSS. Mobile-only (hidden ≥48rem) — likely omit from desktop draft canvases.

---

## Basic / Section-pattern Components (repeat across sections, worth extracting for consistency)

## OfficialBrandRail
- Source: `src/components/ui/official-brand-rail.tsx`
- Category: basic
- Description: The protected IndianOil/Indane brand-relationship strip (approved logo lockup + "Authorised Indane Distributor" text). Appears at the top of the Hero AND at the top of every page-level hero (about/services/commercial/safety). **Brand-restricted — the skill's Logo invariant applies: any generated draft that has a logo position here must render the actual supplied Jubilee/IndianOil lockup image, not a placeholder.**
- Extractable props: `relationship` (string, default "Authorised Indane Distributor"), `size` ("compact" | "standard").
- Hardcoded: the lockup image itself, border/background styling.

## SectionHeading
- Source: `src/components/ui/section-heading.tsx`
- Category: basic
- Description: Eyebrow + heading + optional description block, opens nearly every section.
- Extractable props: `eyebrow` (string), `title` (string), `description` (string), `as` (heading level), `align` ("start" | "center").
- Hardcoded: none — this is pure content-driven; simplest to keep as inline HTML per draft rather than extracting.

## Basic UI primitives (per skill guidance — SKIP extraction, use inline HTML in drafts)
Button, Tag, Divider, Card, Badge, GlassPanel, StructuredPanel — all simple, single-purpose, cva-based. Reproduce their Tailwind classes directly in draft HTML rather than extracting as components.

---

## Recommendation for this session
Given the design target is the Home page redesign, extract **SiteHeader** and **SiteFooter** first (they anchor every page and should stay visually consistent across variations). Extract **OfficialBrandRail** if the reproduction/variations need to reuse it exactly (recommended, since it's brand-restricted — see Logo invariant above). Skip extracting section-specific one-off components (Hero, Local Accountability, etc.) — those are the actual design surface being iterated on.
