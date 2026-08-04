# Technical Architecture

## Platform

Next.js 15, TypeScript, Tailwind CSS, shadcn/ui primitives, Framer Motion where justified, and Vercel hosting. The product is static-first and server-first: route content renders on the server and is pre-rendered whenever possible.

## Rendering and data

Typed local content modules are the initial content source. This is appropriate until editorial cadence justifies a CMS. Page components remain Server Components; client boundaries are limited to mobile navigation, form behavior, and motion wrappers. Content models must distinguish published facts from optional modules so absent proof is not represented by empty UI.

## Contact architecture

The contact endpoint validates data server-side, applies rate limiting and honeypot/bot protection, and sends enquiries only to an approved destination. It returns accessible field errors and a clear completion state. It must not expose provider credentials or promise unsupported response times.

## Performance and resilience

Use `next/font`, `next/image`, responsive image sizes, explicit dimensions, static metadata, and route-level code splitting. Load motion and nonessential client behavior only where needed. No autoplay video, third-party chat, or blocking map embed by default. Forms must have clear failure/retry behavior.

## Discoverability and observability

Generate sitemap, robots, canonical metadata, Open Graph images, and approved LocalBusiness structured data. Add analytics only with approved privacy treatment; record intent-level events such as navigation, call tap, form start, form success, and form error—never sensitive message content.

## Quality bar

Enforce TypeScript, linting, formatting, automated accessibility checks, and responsive visual review. Validate keyboard navigation, reduced motion, valid semantic structure, Core Web Vitals, and the complete contact failure path before release.
