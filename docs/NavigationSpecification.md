# Navigation Specification — Jubilee Indane Home

## 0. Purpose

Navigation is the first proof that Jubilee Indane Home is organised, reachable, and accountable. It must not behave like a local-business directory or a generic SaaS header. It has one primary job: orient a visitor quickly and preserve a direct route to Jubilee when they need help.

The desired first impression is: **“This is an official, established local agency, and I can reach Jubilee without friction.”**

### Specification precedence

This navigation is a global system. Where it appears inside the approved Hero, `HeroSpecification.md` controls any Hero-specific requirement: the header contact recovery path is a low-emphasis text link, the header must not become a second focal glass object, and the Hero CTA remains the dominant action. A navigation implementation must never resolve a global rule by weakening the approved Hero hierarchy.

This specification extends the approved brand hierarchy:

1. IndianOil is recognised as institutional proof.
2. Indane establishes the familiar LPG ecosystem.
3. Jubilee Indane Home is the memorable local choice and owns the navigation’s dominant identity.

No official IndianOil or Indane asset may be redrawn, recoloured, cropped, animated, masked, placed on glass, or used as a substitute for the Jubilee identity.

## 1. Navigation model and information order

### Primary route order

```text
Jubilee home link → About Jubilee → Services → Commercial → Safety → Contact Jubilee
```

| Route | Customer question | Business purpose | Label rule |
| --- | --- | --- | --- |
| Jubilee home link | “Where am I?” | Restore orientation without duplicating a route. | `Jubilee Indane Home` lockup |
| About Jubilee | “Who is responsible for this?” | Build local accountability and recall. | `About Jubilee` |
| Services | “Can Jubilee help my household?” | Route household demand. | `Services` |
| Commercial | “Can this support my business?” | Route high-value commercial enquiries. | `Commercial` |
| Safety | “Will they handle an essential service responsibly?” | Surface responsible information without creating fear. | `Safety` |
| Contact Jubilee | “How do I act now?” | Convert intent into a direct, attributable contact. | `Contact Jubilee` |

The Jubilee lockup is the Home route, so `Home` must not be repeated in the primary navigation. The remaining four are orientation routes. `Contact Jubilee` is the only conversion action. It is deliberately named with Jubilee rather than `Contact us`: every primary action repeats the agency name and grows recall.

### Routes that must not exist in the global header

- `Book now`, `Order cylinder`, or `Emergency` unless the related workflow, eligibility, operating hours, and escalation owner are approved.
- A generic `Products` route; people visit for service support, not a catalogue.
- A dropdown labelled `More`; it conceals important choices and makes the business feel less direct.
- Social links, promotional campaigns, account login, language toggles, or office timings unless their content has a verified operational owner.

## 2. Brand and logo hierarchy

### Jubilee lockup

The dominant header object is a text-first Jubilee lockup:

```text
Jubilee Indane Home
Authorised IndianOil Indane Distributor
```

- `Jubilee Indane Home` is a semantic home link with the accessible name `Jubilee Indane Home home`.
- The name uses Geist, 600 weight, compact tracking, and sentence case. It must remain readable rather than being replaced by an unexplained monogram.
- The descriptor is supporting factual text. It never becomes a second logo and disappears before the Jubilee name does on narrow widths.
- A fine Jubilee-red rule or one small route point may accompany the Jubilee lockup. It is an identity cue, not an approximation of an official brand mark.

### Official Brand Rail

The header’s official endorsement is a separate solid-white `Official Brand Rail`, not part of the Jubilee lockup:

```text
[unaltered IndianOil mark]  |  [unaltered Indane mark]
Authorised distributor relationship
```

- It appears in the desktop lockup zone as a compact endorsement line. At tablet and mobile widths, its authenticated full version moves into the drawer; the closed header carries only the approved text descriptor.
- It uses the official files at their approved clear space and minimum size. The approval files override this document.
- It is solid white with a neutral 1px border. It has no glass, blur, shadow stack, hover state, or entrance animation.
- It remains visually smaller than `Jubilee Indane Home` and may never take more horizontal room than the Jubilee lockup.
- The relationship text is factual and must use the legally/brand-approved wording. If no approved wording exists, omit the text rather than improvising.

**Why:** separation lets visitors recognise IndianOil and Indane immediately without accidentally assigning Jubilee’s local identity to the parent brands.

**Business purpose:** institutional endorsement reduces initial risk; Jubilee remains the agency a visitor remembers and contacts.

## 3. Shared visual rules

| Token / rule | Navigation use |
| --- | --- |
| Canvas | Mineral (`#F8F7F4`) when on a light content surface; no pure-white app-bar default. |
| Text | Graphite for primary routes; slate for relationship/supporting copy. |
| Action | On desktop, `Contact Jubilee` is a graphite text recovery link, consistent with the approved Hero. In the focused mobile/tablet drawer only, it becomes a graphite-filled CTA. Jubilee red is reserved for active/focus/route accents, never a full header CTA. |
| Glass | Never used for official marks. At most a low-opacity Jubilee-owned header surface after scroll; no blur in the transparent initial state. |
| Border | 1px neutral structural border only when the header needs separation. |
| Type | Navigation labels: 14px/1.2, 500 weight. CTA: 15px/1, 600. Jubilee name: 17px mobile, 18px tablet, 19px desktop. |
| Radius | 6px for focused route outlines; pill only for the CTA. No pill navigation links. |
| Motion | 160ms interaction feedback; 240ms header state changes; standard approved easing. |

The navigation may have one deliberate material layer—the sticky header surface. It never competes with the Hero’s one focal glass plaque.

## 4. State specification

### A. Desktop — initial transparent state (1280px and above)

| Area | Specification |
| --- | --- |
| Layout | Full-width header, positioned in document flow by default. It may overlay only the approved Hero’s controlled mineral canvas. Inner frame: 12-column, 1200px maximum through 1599px; 1440px maximum from 1600px. The lockup zone occupies columns 1–3 and contains the Jubilee name with the compact Official Brand Rail beneath it. The four primary routes occupy the central cluster. `Contact Jubilee` is a right-side recovery link. |
| Typography | Jubilee name: 19px/1.05, 600. Descriptor: 12px/1.35, 500. Routes: 14px/1.2, 500. CTA: 15px/1, 600. |
| Spacing | Header height: 88px. Outer gutters: 48px at 1280–1599px, 80px at 1600px+. Lockup-to-route gap is flexible, never less than 40px. Route gap: 28px. The contact link has a 44px minimum target but is not a filled button. |
| Animation | No autonomous entrance. On link hover, an underline grows from 0 to 100% over 160ms. CTA translates at most 1px upward on hover. |
| Accessibility | `header` contains one `nav` with an explicit `aria-label="Primary"`. The home lockup remains a single link. The active route uses `aria-current="page"`. Visible focus ring is 2px Jubilee red, 3px offset. |
| Responsive behaviour | If the complete header cannot maintain all minimum gaps, switch to tablet mode; never compress labels, truncate `Jubilee Indane Home`, or make routes overlap. |
| Business purpose | Removing the redundant Home route makes enough room for real official proof, literal destination labels, and a calm direct contact recovery path without crowding the header. |

Transparent means **mineral-canvas transparent**, not transparent over uncontrolled photography. If the Hero image or material visual reaches behind the header, a mineral backing must ensure 4.5:1 text contrast before the header is allowed to overlay it.

### B. Desktop — scrolled/sticky state

| Area | Specification |
| --- | --- |
| Layout | The header becomes `position: sticky; top: 0`, respecting safe-area inset. Content geometry does not shift: same inner frame and route order. |
| Typography | Unchanged; do not shrink type on scroll. The descriptor may fade out only if it is duplicated in visible page content and its removal does not change header height by more than 8px. Default: retain it. |
| Spacing | Header contracts from 88px to 76px through vertical padding only. The official rail remains present and legible; it is never removed merely to create a dramatic scroll effect. Contact remains a 44px target. |
| Animation | 240ms background/border/shadow transition using the standard easing. Never animate layout width, route positions, official marks, or text. |
| Accessibility | The sticky header does not obscure anchor targets; all anchor destinations apply `scroll-margin-top: 96px`. Focused items remain fully visible and are never clipped by the header. |
| Responsive behaviour | Same desktop route layout until tablet breakpoint. |
| Business purpose | Persistent orientation and contact access supports task completion after the visitor has entered the story. The subtle material change communicates context, not urgency. |

Scrolled material: `rgb(248 247 244 / 92%)`, 12–16px backdrop blur only when supported, 1px border at the approved neutral value, and the resting panel shadow. Where transparency/blur harms contrast or performance, use an opaque mineral surface with the same border.

### C. Tablet state (768px–1279px)

| Area | Specification |
| --- | --- |
| Layout | Header is a 3-part row: Jubilee lockup left, `Menu` trigger centre/right, compact text `Contact Jubilee` recovery link right. The full primary route list is not shown inline. The Official Brand Rail is displayed in the drawer, immediately under the lockup area. |
| Typography | Jubilee name: 18px. Descriptor: 12px. `Menu` and `Contact`: 14px, 600. Drawer routes: 18px/1.2, 500. |
| Spacing | Header height: 72px; gutters 32–48px based on the approved grid. Menu and Contact controls have 44px minimum targets and 12px visual separation. |
| Animation | Opening the drawer uses a 240ms opacity + 8px settle for the panel, not a side-sweeping desktop menu. Controls do not rotate or morph theatrically. |
| Accessibility | Menu trigger uses `button`, `aria-expanded`, and `aria-controls`. It is labelled `Open navigation` / `Close navigation`; visible text may remain `Menu`. Focus moves into the drawer on open, is trapped there, Escape closes it, and close restores focus to the trigger. |
| Responsive behaviour | A tablet is not a compressed desktop: routes move wholesale to the drawer before they become crowded. Contact remains exposed as a recovery link, not a competing button. |
| Business purpose | Preserves premium calm at intermediate widths while keeping urgent access direct. |

### D. Mobile state (320px–767px)

| Area | Specification |
| --- | --- |
| Layout | One 64px header row: Jubilee lockup left, a text-labelled `Menu` control right. Show a separate `Call Jubilee` control only after a verified direct phone route exists; otherwise it must not occupy a placeholder slot. |
| Typography | Jubilee name: 17px/1.05, 600. Do not show the descriptor in the closed header below 480px. Menu/call label: 14px/1, 600. |
| Spacing | Gutters: 20px at 320–479px; 24px at 480–767px. Touch targets are at least 48px square. At 320px, lockup and Menu are the only top-row objects. |
| Animation | Closed header stays still. Drawer opens over 240ms with opacity + 8px upward settle. The first route has no delayed reveal; the final state is present instantly in the DOM. |
| Accessibility | Mobile order follows visual order: home, menu, then drawer routes. Respect safe-area insets. Text remains readable at 200% zoom; header may wrap to a taller row rather than overlap controls. |
| Responsive behaviour | Never replace labelled Menu/Call controls with ambiguous icons. Do not preserve a tablet Brand Rail in the closed 320px header. |
| Business purpose | Removes cognitive overhead from a high-stress, one-handed context while retaining clear agency recall. |

### E. Mobile / tablet drawer state

```text
┌──────────────────────────────────────┐
│ Jubilee Indane Home           Close   │
│ Authorised IndianOil Indane Distributor│
│                                      │
│ About Jubilee                        │
│ Services                             │
│ Commercial                           │
│ Safety                               │
│                                      │
│ [ Contact Jubilee ]                  │
│                                      │
│ [IndianOil] | [Indane]               │
│ Authorised distributor relationship  │
└──────────────────────────────────────┘
```

| Area | Specification |
| --- | --- |
| Layout | Full-height dialog surface, anchored to viewport, mineral background. It is a focused editorial pause rather than a narrow side panel. Use three rows: fixed header (Jubilee lockup and `Close`), independently scrollable route region, and fixed footer (Contact CTA plus Brand Rail). This guarantees that the conversion route and institutional proof are reachable on a 320px screen. |
| Typography | Drawer routes: 22px mobile / 20px tablet, 500 weight, 1.15 leading. CTA is 15px/600. Brand relationship text: 12px/1.35. |
| Spacing | 20px mobile / 32px tablet side gutters. 16px between routes. Minimum 48px block size per route. Footer has 16px top padding and `max(20px, env(safe-area-inset-bottom))` bottom padding. The rail is compact enough that its marks and relationship line remain visible without taking over the drawer. |
| Animation | Overlay opacity and panel settle are 240ms. On close, reverse only if it does not delay restoring page interaction. No staggered list reveals, route drawing, logo animation, or spring overshoot. |
| Accessibility | Implement as a modal dialog: `role="dialog"`, `aria-modal="true"`, meaningful `aria-labelledby`, focus trap, Escape close, scroll lock without a layout jump, and focus restoration. Routes are ordinary links in a labelled `nav`. The page beneath is inert while open. |
| Responsive behaviour | At 320px, only the route region scrolls; the CTA and Brand Rail remain fixed above the safe area. At tablet, retain full-height behaviour rather than turning into a dropdown. |
| Business purpose | A large, legible route chooser makes Jubilee feel deliberate and reachable. The final Brand Rail reinforces authorisation after the visitor has chosen an intent, leaving Jubilee—not Indane—as the dominant memory. |

### F. Keyboard focus state

| Area | Specification |
| --- | --- |
| Layout | No geometry change beyond the 3px focus offset. Never hide focus behind an overflow mask. |
| Typography | No weight, size, or casing change on focus. |
| Spacing | Maintain the full ring clear space; do not use a tight border-only focus treatment. |
| Animation | Focus transitions are instant or at most 160ms. They must remain visible under reduced motion. |
| Accessibility | Every interactive item has a 2px focus ring in Jubilee red with a 3px offset and at least 3:1 contrast. Focus indication combines outline and a subtle fill/underline change for links; color alone is never the state signal. Tab order follows the visual and DOM sequence. |
| Responsive behaviour | Identical semantics at every breakpoint. Drawer focus begins at Close, then progresses through routes and CTA. |
| Business purpose | Clear keyboard control is a direct signal of competence and keeps essential contact navigation available to all visitors. |

### G. Reduced-motion state

| Area | Specification |
| --- | --- |
| Layout / type / spacing | Identical to the corresponding static state. |
| Animation | All navigation transitions resolve immediately. The drawer appears in its complete final position; active underline/focus states are static. No blur is animated. |
| Accessibility | Honour `prefers-reduced-motion: reduce` without requiring a user setting. No content, route, or close control may depend on an animation to become visible or operable. |
| Responsive behaviour | The same complete drawer is available at mobile and tablet widths. |
| Business purpose | A visitor needing reduced motion receives the same direct, trustworthy experience without visual interruption. |

### H. Loading state

| Area | Specification |
| --- | --- |
| Layout | Reserve final header height immediately: 64px mobile, 72px tablet, 80px desktop. Render text lockup and route labels as server HTML; the navigation must not wait for client hydration. |
| Typography / spacing | Final typography and spacing are reserved from first paint. |
| Animation | No spinner, shimmer, or logo fade. Official marks never animate. If a supplied asset loads after text, its fixed footprint is reserved and it appears as an ordinary image paint. |
| Accessibility | The working home link and any working contact route remain usable while assets load. Do not announce a decorative logo as loading. |
| Responsive behaviour | The same intrinsic dimensions are reserved at each breakpoint. |
| Business purpose | A stable first paint reads as operational reliability. Header layout shift is especially damaging because it causes mis-taps on the first interaction. |

### I. Error state — official logo unavailable or rejected

| Area | Specification |
| --- | --- |
| Layout | Preserve the Jubilee lockup, routes, and contact CTA. Replace only the unavailable Official Brand Rail area with a small factual text line in the drawer/footer-level endorsement location: `Authorised distributor relationship` only when its wording is approved. Do not place a broken-image icon, blank bordered box, or fake logo in the header. |
| Typography | Use 12px slate factual text. Jubilee typography remains unchanged and dominant. |
| Spacing | Collapse the absent rail cleanly; do not preserve empty logo gaps in the closed header. |
| Animation | None. A logo error is not an interaction. |
| Accessibility | Failed decorative image requests must not result in an unlabeled graphic or an empty focusable control. If a factual relationship claim cannot be verified, omit it entirely and log the content error for the site owner. |
| Responsive behaviour | Desktop retains the remaining navigation geometry; tablet/mobile drawers omit the rail rather than show a failure state. |
| Business purpose | Honest degradation protects trust. Jubilee is still reachable, but the site never pretends to display official proof it cannot validate. |

## 5. Scroll transition rules

1. Initial state starts transparent only on the approved Hero’s controlled mineral backdrop. All non-Hero pages start with the readable solid sticky material.
2. At 12px of page scroll, begin the sticky material transition.
3. Finish at 24px scroll: mineral surface, subtle border, restrained shadow, optional supported blur.
4. Do not change route order, copy, logo scale, or CTA hierarchy during this transition.
5. On return to top, reverse only after scroll returns below 8px, preventing visual flicker.
6. Never auto-hide the header on scroll. Essential-service sites should not make orientation disappear.

This threshold makes the transition feel like context retention rather than a decorative effect.

## 6. Interaction requirements

### Active route

- Text changes to graphite/primary as needed for contrast.
- A 1px Jubilee-red underline or left rule identifies the current route.
- `aria-current="page"` is mandatory.
- On mobile drawer, active route uses the same marker plus an explicit visually hidden `Current page` label if required by implementation semantics.

### CTA

- Header CTA label: `Contact Jubilee`.
- Desktop and tablet closed state: graphite text recovery link with a 44px minimum target; it is not a filled button.
- Drawer state: graphite fill, cloud text, 48px minimum height, because it is the single conversion decision in a focused navigation surface.
- Mobile: Menu is primary header control. `Call Jubilee` appears only when a verified telephone link exists and remains labelled.
- CTA hover/press changes only transform and shadow over 160ms. No colour flash, pulse, or urgency effect.

### Glass behaviour

- Initial transparent header: no glass.
- Scrolled sticky header: one restrained Jubilee-owned mineral surface; blur 12–16px maximum, only if contrast and performance pass.
- Drawer: no glass. It is an opaque mineral information surface for legibility and focus.
- Official Brand Rail: always solid white; never glass.

## 7. Semantic structure

```text
header
  a (Jubilee Indane Home home)
  nav[aria-label="Primary"]
    ul
      li > a (route)
  a (Contact Jubilee) or button (open contact mechanism)
  button (Open navigation) [tablet/mobile]

dialog [tablet/mobile drawer only]
  header
    a (Jubilee Indane Home home)
    button (Close navigation)
  nav[aria-label="Primary navigation"]
  a (Contact Jubilee)
  aside[aria-label="Official brand relationship"]
```

The contact CTA is a link when it navigates to a page, anchor, `tel:`, or verified messaging destination. It is a button only when it opens an in-page contact dialog. No click handler should imitate link behaviour.

## 8. Production acceptance checklist

- [ ] Jubilee name is the largest and most readable proper noun in every navigation state.
- [ ] Official marks are exact supplied assets, solid-surface only, and never animated or recoloured.
- [ ] `Contact Jubilee` is the only primary conversion action.
- [ ] All primary routes remain literal and visible in the drawer without a nested menu.
- [ ] Header has no layout shift while official assets load.
- [ ] All controls meet 48px mobile and 44px desktop minimum target sizes.
- [ ] Keyboard focus, Escape close, focus trap, focus restoration, and scroll lock pass testing.
- [ ] Reduced-motion state is a complete final state, not a disabled or hidden drawer.
- [ ] At 320px and 200% zoom, lockup and controls remain legible, reachable, and non-overlapping.
- [ ] Sticky transition preserves content position and never obscures anchor destinations.
- [ ] Missing official assets degrade honestly without fake marks, broken-image visuals, or unverified claims.
- [ ] No dropdowns, carousels, auto-hiding header, animated logos, or speculative booking/emergency actions are introduced.
