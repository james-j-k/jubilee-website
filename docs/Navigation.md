# Navigation

## Navigation model

The global navigation has two jobs: orient visitors and provide an immediate route to contact. It should feel calm and precise, not like a crowded local-services directory.

## Desktop header

```text
[Brand]       Home  About  Services  Commercial  Safety       [Contact us]
```

- Brand mark links to Home. This matches web conventions and provides a reliable escape path.
- Primary links use the six specified routes with no dropdowns. The site is shallow, so a dropdown would add interaction cost without improving discovery.
- `Contact us` is visually distinct as the sole primary header action. A single emphasis prevents competing calls to action.
- Header becomes subtly elevated or gains a border after scroll. This preserves orientation without a heavy persistent bar.

## Mobile header

```text
[Brand]                              [Call] [Menu]
```

The menu opens a full-height, focused navigation surface:

```text
[Close]
Home
About
Services
Commercial
Safety
────────────
[Contact us]
Support details
```

A full panel is intentional: it is easier to scan and tap than a small dropdown, gives navigation a premium editorial pause, and avoids cramped controls. `Call` is a concise, labelled phone link—not an unlabeled icon—so urgent support remains a one-tap action without requiring the menu. Focus is trapped while the panel is open, Escape closes it, and the previous focus target is restored for keyboard users.

## Active and interaction states

- Active route is indicated through text color and a subtle underline/marker; color alone is never the only signal.
- Links have visible keyboard focus rings using the primary brand color with sufficient contrast.
- Hover states are restrained: a color shift and short underline reveal, never bouncy motion.
- The header respects safe-area insets on modern mobile devices.
- The call action may use a compact treatment but must preserve a 44px touch target and accessible name.

## Footer navigation

The footer repeats core routes, contact details, safety link, and legal/operational links once supplied. It acts as recovery navigation for visitors who finish reading a page, not as a second dense sitemap.

## Information scent

Labels remain literal. “Commercial” is retained because it precisely separates business supply needs; “Safety” is retained because it is a high-value, high-stakes destination. Clever labels would make the experience feel less trustworthy.

Navigation intentionally favors immediate comprehension over novelty—the premium quality comes from typography, spacing, and interaction polish rather than hidden IA tricks.
