# Motion System

## Principle

Motion is a usability layer. It may establish spatial continuity, reveal hierarchy, confirm an action, or preserve context. If it does none of these, it is excluded. This creates the confidence associated with premium software without turning an essential service into a spectacle.

## Motion inventory

| Moment | Behavior | Purpose | Constraint |
| --- | --- | --- | --- |
| Header on scroll | Adds subtle border/surface separation. | Maintains orientation after content moves beneath it. | No positional jump. |
| Mobile menu | Fades/slides in as a complete surface; items enter in brief sequence. | Makes a state change legible and focuses navigation. | Must be interruptible and close immediately. |
| Section entry | Opacity and small upward reveal when first entering viewport. | Helps readers parse major groups in a long page. | Once only; never blocks content. |
| Reliability System | A short line draw or step emphasis as the group enters view. | Connects a real three-step process and reinforces the Quiet Energy signature. | Static line and complete text are present before motion; no looping. |
| Service-card hover | Border/surface emphasis and minimal icon shift. | Confirms interactivity on pointer devices. | No hover-dependent information. |
| Button interaction | Fast color/scale or press-state feedback. | Confirms input was received. | Must retain clear focus state. |
| Form feedback | Inline error appearance and success-state transition. | Directs recovery and confirms completion. | No reliance on color or animation alone. |

## Timing and easing

- Micro-feedback: 120–160ms.
- Small component transitions: 180–240ms.
- Section reveal: 320–420ms.
- Menu surface: 240–320ms.
- Use a gentle decelerating ease for entrances and a short standard ease for exits.

These ranges make the interface feel responsive rather than theatrical. A transition longer than roughly 400ms creates waiting, especially on a task-focused mobile site.

## Scroll behavior

Only direct user navigation may use smooth scrolling, and it must respect the user’s reduced-motion preference. Scroll-linked parallax, progress effects, and automatic horizontal movement are prohibited because they impair readability, add performance cost, and do not improve LPG-service comprehension.

## Reduced motion and accessibility

When `prefers-reduced-motion: reduce` is active, content appears immediately; menus and dialogs may use only an imperceptible opacity transition or none. Nothing essential is introduced exclusively through animation. Keyboard focus is moved deliberately when overlays open and close.

## Engineering model

Motion wrappers are isolated in `components/motion` and applied around semantic server-rendered content only where needed. Variants are centralized so duration and easing remain coherent. Avoid a global animation provider; it increases client JavaScript and makes static content harder to preserve.

The design’s still state must already feel complete. Motion merely makes state changes easier to understand.

## Signature-motion rule

The energy-line reveal is the only expressive route-level motion. It may run once when its process section becomes visible and must complete within 500ms. It is not repeated on every section, never follows the cursor, and is disabled for reduced motion. Repetition would turn a useful continuity cue into brand decoration.
