# Layout System

## Governing idea

Premium is created through restraint, alignment, and rhythm. The layout should feel like a calm software product: generous but not wasteful, structured but not boxed-in. Mobile is the primary composition; desktop expands the same hierarchy rather than becoming a different experience.

## Containers and grid

| Layer | Mobile | Tablet | Desktop | Reasoning |
| --- | --- | --- | --- | --- |
| Page gutter | 20px | 32px | 48px | Maintains comfortable reading and touch spacing without wasting narrow screens. |
| Content max width | fluid | 704px | 1200px | Prevents long text lines and creates an intentional desktop frame. |
| Text max width | 36rem | 40rem | 42rem | Keeps explanatory copy readable even in wide layouts. |
| Grid | 4 columns | 8 columns | 12 columns | Supports simple stacking first, then measured composition. |
| Grid gap | 16px | 24px | 24px | Establishes a compact, repeatable spatial system. |

## Spacing scale

Use a four-point base scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px. Small increments support controls and labels; larger increments define page rhythm. Values outside this scale require a documented visual reason, preventing the drift common in hand-built marketing pages.

## Section rhythm

- Standard section vertical padding: 64px mobile, 96px desktop.
- Hero padding: 80px mobile, 128–160px desktop, depending on visual content.
- Adjacent heading/body spacing: 12–16px.
- Heading/content-group spacing: 32px mobile, 48px desktop.
- Card internal padding: 20–24px mobile and desktop.

The generous hero creates a focused opening. Standard sections move briskly enough that service information does not feel buried in luxury whitespace. Repeated spacing makes the site feel engineered rather than merely decorated.

## Responsive composition

Mobile starts with a linear document: message, proof, choice, action. On larger screens, layout may become asymmetric where it reinforces hierarchy—for example, text beside a calm supporting visual in the hero, or a commercial narrative beside a contextual image. Do not use side-by-side layouts simply because space exists.

Use two composition modes intentionally. **Stage** sections are open, low-density moments for the hero, Reliability System, and commercial story; they may use an asymmetric 5/7 or 7/5 desktop split. **Panel** sections are bounded, information-dense moments for service selection, evidence, and contact; they use a precise grid, quiet surface, and clear reading order. Alternating these modes creates editorial rhythm without relying on decorative background changes.

Cards stack on small screens, use two columns when each item benefits from comparison, and only use three columns for short, equivalent service choices. Forms retain a single column on mobile; paired fields may share a row only on larger screens and only when their relationship is obvious.

## Surfaces and imagery

Use broad neutral canvas areas, white surfaces, fine borders, and sparse soft shadow. Imagery should be intentional: high-quality operational, human, or abstract material detail—not generic cylinders, clip-art flames, or busy collages. Every image needs meaningful alt text or is marked decorative when it conveys no information.

Hero imagery uses a tall 4:5 or 3:4 mobile crop and a controlled editorial desktop crop; the subject must remain readable without embedded text. Images never contain essential copy, fake UI, logos not owned by Jubilee, or visual claims that the business cannot substantiate. One strong image is preferable to a gallery of weak stock photography.

## Breakpoints and testing

Use content-led breakpoints around 640px, 768px, 1024px, and 1280px as implementation guides, not targets to design around. Validate at 320px, 375px, 768px, 1024px, and 1440px widths, plus zoomed and landscape mobile states. The test is not whether a layout fits; it is whether hierarchy, tap comfort, and reading flow remain intact.

## Safe areas and interaction zones

Persistent header and mobile panels account for device safe-area insets. Interactive elements have at least a 44×44px target and enough separation to avoid accidental taps. There is no sticky bottom CTA by default; it can obscure content and feels coercive. The clear header action and end-of-page contact panel already provide frequent, calm conversion opportunities.
