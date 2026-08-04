# Folder Structure

## Intent

The project should make the common path obvious: a page is assembled from reusable sections, sections are built from stable primitives, and business content lives outside rendering code. This prevents a polished marketing site from becoming a collection of page-specific exceptions as it grows.

## Proposed structure

```text
src/
  app/
    (marketing)/
      layout.tsx
      page.tsx
      about/page.tsx
      services/page.tsx
      commercial/page.tsx
      safety/page.tsx
      contact/page.tsx
    api/contact/route.ts
    globals.css
    layout.tsx
    manifest.ts
    robots.ts
    sitemap.ts
  components/
    layout/
      site-header.tsx
      site-footer.tsx
      mobile-navigation.tsx
      page-intro.tsx
      section.tsx
    sections/
      hero.tsx
      trust-metrics.tsx
      service-overview.tsx
      commercial-feature.tsx
      testimonial-quote.tsx
      safety-guidance.tsx
      contact-panel.tsx
    ui/
      button.tsx
      card.tsx
      badge.tsx
      input.tsx
      textarea.tsx
      accordion.tsx
      dialog.tsx
    motion/
      reveal.tsx
      stagger.tsx
  content/
    navigation.ts
    site.ts
    home.ts
    pages.ts
    services.ts
    safety.ts
    evidence.ts
  assets/
    art-direction.md
    image-manifest.ts
  analytics/
    events.ts
  lib/
    metadata.ts
    schema.ts
    validation.ts
    utils.ts
  hooks/
    use-mobile-navigation.ts
    use-reduced-motion.ts
  types/
    content.ts
    navigation.ts
public/
  images/
  icons/
```

## Ownership rules

`app` owns routing, metadata, and composition only. It must not contain duplicated visual markup; this keeps route files legible and makes page-level SEO easy to review.

`components/ui` contains generic, accessible primitives with no LPG-specific copy. `components/sections` contains meaningful business compositions such as the service overview. This distinction protects reuse without forcing generic primitives to know business context.

`content` holds typed editorial data. The site begins as static content because it is the fastest and safest delivery mechanism for a small marketing surface. Keeping content separate means a future CMS can replace the data source rather than require a visual rewrite.

`assets` makes art direction reviewable rather than incidental: the manifest records image purpose, source, crop, alt-text decision, and responsive treatment. `analytics` gives conversion instrumentation one privacy-reviewed home instead of scattering event names through components. `content/evidence.ts` records the source and review metadata required for any published proof.

`lib/schema.ts` owns structured-data builders and `lib/metadata.ts` owns metadata defaults. SEO is treated as a first-class product concern, rather than a page-by-page afterthought.

## Boundaries

- Default to Server Components. A file becomes client-side only when it needs local interaction, browser APIs, or animation controls.
- Put a component in `ui` only when it can be reused without product-specific terminology.
- Put a component in `sections` only when it answers a user or business question on a page.
- Do not create a global state folder. This product has no cross-route interactive state that warrants one.
- Do not add a CMS, map, chat widget, carousel, or icon library until a concrete requirement justifies its performance and maintenance cost.
- Do not store visual assets as anonymous files. Each must have a documented use and ownership decision.

These boundaries support the intended Vercel-grade outcome: static-first, easy to audit, and inexpensive to evolve.
