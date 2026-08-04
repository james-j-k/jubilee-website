# Component Specifications

## Shared components

| Component | Exists to | Content contract | Interaction and accessibility |
| --- | --- | --- | --- |
| Site header | Orient visitors and expose contact. | Brand, route list, one primary CTA. | Semantic `header`/`nav`; current page announced with `aria-current`. |
| Mobile navigation | Make all routes easy to reach on a small screen. | Same links as desktop; contact and support detail. | Dialog semantics, focus trap, Escape close, scroll lock. |
| Button | Make a clear next action unmistakable. | Short imperative label; primary, secondary, or text variant. | Native button/link semantics chosen by destination; 44px minimum touch target. |
| Section | Create consistent pacing and content boundaries. | Eyebrow optional; heading; body; child content. | Renders semantic section and associates heading with content. |
| Card | Group a single comparable choice or proof point. | One title, concise explanation, optional link. | Not clickable unless it represents one destination; avoid nested interactive elements. |
| Footer | Provide recovery navigation and key operational details. | Route links, contact, safety, legal when available. | Semantic footer; no essential item is footer-only. |

## Home sections

| Component | Exists to | Required content | Rules |
| --- | --- | --- | --- |
| Hero | State the value proposition and start the primary journey. | H1, supporting line, primary CTA, secondary link, optional visual. | Exactly one primary CTA; visual must support rather than obscure message. |
| Reliability System | Make dependable support understandable. | Three approved process steps, optional restrained energy line. | Each step must describe a real customer-facing stage; remove rather than generalize it. |
| Evidence module | Prove reliability when evidence exists. | Verified metric, accreditation, or attributed quote. | Requires source, period/review date, and owner; no count-up animation or anonymous proof. |
| Service overview | Help household visitors self-select. | Two to four services and route/CTA. | Cards have equal hierarchy; no fake feature density. |
| Commercial feature | Give business users a clear branch. | Distinct benefit statement, short proof, CTA. | Visually differentiated by composition, not a second color system. |
| Safety gateway | Demonstrate care and route urgent questions. | Brief safety prompt and link. | It cannot replace emergency/support information where required. |
| Contact panel | Convert readers after they have context. | Clear help statement, contact CTA, optional secondary method. | Appears at the end of every major page. |

## Page-specific components

| Component | Exists to | Specification |
| --- | --- | --- |
| Page intro | Establish a page outcome. | Eyebrow optional, one H1, concise supporting paragraph; no redundant hero CTA unless required. |
| Service detail group | Explain a service without sales clutter. | Outcome, what is included, practical next step. |
| Commercial qualification | Set expectations for business enquiries. | Suitable use cases, required initial details, clear enquiry CTA. |
| Safety accordion | Make dense safety guidance scannable. | Task-led questions; first necessary item may be open; native button controls and `aria-expanded`. |
| Contact form | Capture only routing information. | Name, phone/contact method, enquiry type, message; consent only if legally required. |

## Visual signature component

`EnergyLine` is a decorative-supporting primitive, never a standalone section. It may connect the Reliability System steps or transition between related blocks. It has a static equivalent, no essential content, and no more than one prominent use per route. This creates a recognisable detail without turning an essential LPG service into a spectacle.

## Component quality bar

Every component must earn its place by supporting an identified user decision or operational task. It must have empty, long-text, keyboard-focus, and reduced-motion behavior considered before release. No carousel, badge cloud, decorative counter, floating chat bubble, or generic “feature” component should be introduced without a business reason.
