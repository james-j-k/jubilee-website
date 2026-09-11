# Pages — dependency trees

## / (Home Page) — PRIMARY DESIGN TARGET
Entry: `src/app/(marketing)/page.tsx`
Layout: `src/app/(marketing)/layout.tsx` (SiteHeader, SiteFooter, StickyMobileContactBar)

Dependencies:
- `src/components/navigation/site-header.tsx` (+ `site-header.module.css`)
  - `src/content/navigation.ts` (primaryNavigation)
  - `src/lib/utils.ts` (cn)
- `src/components/sections/hero.tsx` (+ `hero.module.css`)
  - `logo/jubilee-logo.jpg` (approved composite lockup image)
  - `src/components/ui/official-brand-rail.tsx`
- `src/components/sections/local-accountability.tsx` (+ `local-accountability.module.css`)
  - `src/content/local-trust.ts`
  - `src/components/ui/terrain-divider.tsx`
- `src/components/sections/jubilee-difference.tsx` (+ `jubilee-difference.module.css`)
  - `src/content/jubilee-difference.ts`
  - `src/components/layout/index.ts` (Container, Section, Stack, StructuredPanel)
  - `src/components/ui/index.ts` (Divider, SectionHeading, TerrainDivider)
- `src/components/sections/services.tsx` (+ `services.module.css`)
  - `src/content/services.ts`
  - `src/components/layout/index.ts` (Container, Section, SplitLayout, Stack)
  - `src/components/ui/index.ts` (Divider, SectionHeading, Tag, TerrainDivider)
- `src/components/sections/commercial-spotlight.tsx` (+ `commercial-spotlight.module.css`)
  - `src/content/commercial-spotlight.ts`
  - `src/components/ui/index.ts` (Button, Divider, Tag, TerrainDivider)
  - `src/components/layout/index.ts` (Container, Section, SplitLayout, Stack)
- `src/components/sections/safety-responsibility.tsx` (+ `safety-responsibility.module.css`)
  - `src/content/safety-responsibility.ts`
  - `src/components/layout/index.ts` (Container, Section, StructuredPanel)
  - `src/components/ui/index.ts` (Button, Divider, SectionHeading)
- `src/components/sections/proof-trust.tsx` (+ `proof-trust.module.css`)
  - `src/content/proof-trust.ts`
  - `src/components/layout/index.ts` (Container, Section, StructuredPanel)
  - `src/components/ui/index.ts` (Divider, SectionHeading, TerrainDivider)
- `src/components/sections/contact-visit.tsx` (+ `contact-visit.module.css`)
  - `src/components/contact/contact-card.tsx` (OfficeCard, GodownCard) (+ `contact-card.module.css`)
    - `src/content/contact.ts`
    - `src/lib/contact.ts` (phoneHref/whatsappHref/emailHref/mapsHref/externalLinkProps)
    - `src/components/ui/index.ts` (Button, Card)
  - `src/components/sections/contact-enquiry-form.tsx` ("use client" — WhatsApp/email handoff form)
  - `src/components/ui/section-heading.tsx`
  - `src/components/layout/index.ts` (Container, Section, SplitLayout)
- `src/components/navigation/site-footer.tsx` (+ `site-footer.module.css`)
  - `logo/jubilee-logo.jpg`
  - `src/content/contact.ts`, `src/content/navigation.ts`
  - `src/lib/contact.ts`
- `src/components/contact/sticky-mobile-contact-bar.tsx` (+ `.module.css`)
  - `src/lib/contact.ts`

Shared foundation for every node above: `src/lib/utils.ts` (cn), `src/styles/tokens.css`, `src/styles/motion.css`, `src/app/globals.css`, `tailwind.config.ts`.

**Section order on the page (top to bottom):** Hero → Local Accountability → The Jubilee Difference → Services (Domestic/Commercial split) → Commercial Spotlight → Safety & Responsibility → Proof & Trust → Contact & Visit.

**Note on content depth**: every section pulls its copy from a small typed content module in `src/content/*.ts` (e.g. `jubileeDifference`, `services`, `commercialSpotlight`, `safetyResponsibility`, `proofTrust`, `localTrust`). These are short, stable arrays/objects — safe to treat as fixed copy when reproducing, not dynamic data.

---

## /about
Entry: `src/app/(marketing)/about/page.tsx`, styles `src/components/about/about-page.module.css`, content `src/content/about-page.ts`.
Dependencies: `ContactCard` (inline), `JsonLd`, `Container`/`Section`/`StructuredPanel`, `ImageFrame`/`OfficialBrandRail`/`SectionHeading`, plus 7 real photographs in `/photos` (office, team, owner portrait, awareness campaign, customer shots).

## /services (Domestic LPG)
Entry: `src/app/(marketing)/services/page.tsx`, styles `src/components/domestic/domestic-page.module.css`, content `src/content/domestic-page.ts`.

## /commercial
Entry: `src/app/(marketing)/commercial/page.tsx`, styles `src/components/commercial/commercial-page.module.css`, content `src/content/commercial-page.ts`. Includes `src/components/commercial/commercial-enquiry-form.tsx`.

## /safety
Entry: `src/app/(marketing)/safety/page.tsx`, styles `src/components/safety/safety-page.module.css`, content `src/content/safety-page.ts`. Includes an outbound `Button` link to IndianOil's official safety FAQ.

## /privacy, /terms
Simple long-form legal text pages, styles `src/components/legal/legal-page.module.css`.
