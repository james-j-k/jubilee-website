# Routes

Framework: Next.js 15 App Router, file-based routing. All public pages live under the `(marketing)` route group, which shares `src/app/(marketing)/layout.tsx` (SiteHeader + SiteFooter + StickyMobileContactBar). Root `src/app/layout.tsx` wraps everything (fonts, JSON-LD, skip link).

| URL | Component file | Layout | Summary |
|---|---|---|---|
| `/` | `src/app/(marketing)/page.tsx` | marketing | **Home** — the primary design target. Composes: Hero, LocalAccountability, JubileeDifference, Services, CommercialSpotlight, SafetyResponsibility, ProofTrust, ContactVisit (all from `src/components/sections/`). |
| `/about` | `src/app/(marketing)/about/page.tsx` | marketing | About Jubilee — hero (headline "A Pala story, since 2001.", founder blurb, WhatsApp CTA) + photo gallery using real photography in `/photos` (office, team, owner portrait, awareness campaign, with-customers shots) + StructuredPanel content sections. Styles: `src/components/about/about-page.module.css`. |
| `/services` | `src/app/(marketing)/services/page.tsx` | marketing | Domestic LPG page — hero ("Domestic LPG support for your home.") + StructuredPanel journey/FAQ content. Styles: `src/components/domestic/domestic-page.module.css`. |
| `/commercial` | `src/app/(marketing)/commercial/page.tsx` | marketing | Commercial LPG page — hero ("Commercial LPG for the work that keeps Pala moving.") + `CommercialEnquiryForm` + StructuredPanel content. Styles: `src/components/commercial/commercial-page.module.css`. |
| `/safety` | `src/app/(marketing)/safety/page.tsx` | marketing | Safety Resource Center — hero ("Clear LPG safety guidance, close at hand.") with an outbound CTA to the official IndianOil safety FAQ, plus guidance content. Styles: `src/components/safety/safety-page.module.css`. |
| `/privacy` | `src/app/(marketing)/privacy/page.tsx` | marketing | Legal — Privacy Policy (long-form text). Styles: `src/components/legal/legal-page.module.css`. |
| `/terms` | `src/app/(marketing)/terms/page.tsx` | marketing | Legal — Terms & Conditions (long-form text). Same legal-page styles. |

Non-route app files: `src/app/error.tsx`, `src/app/global-error.tsx`, `src/app/not-found.tsx`, `src/app/loading.tsx` (route-level skeleton, styles in `src/components/feedback/recovery.module.css`), `src/app/manifest.ts`, `src/app/robots.ts`, `src/app/sitemap.ts`, `src/app/opengraph-image.tsx`.

Every page-level hero repeats the same pattern: `OfficialBrandRail` (approved IndianOil/Indane lockup) → eyebrow → `h1` → intro paragraph → CTA(s), next to a `heroNote`/`aside` panel. This is a strong shared "page hero" convention worth keeping consistent if the home hero is redesigned.

**Design target for this session: `/` (Home).**
