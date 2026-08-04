# Awwwards-Level Design Review

## Review standard

This review measures the documentation against the ambition of a Site of the Day contender, while holding the site to a higher bar of operational trust because it represents an LPG distributor. A memorable experience cannot be achieved by adding spectacle to a generic service template. It needs a distinctive idea, disciplined art direction, useful interactions, real proof, and an exceptionally clear mobile journey.

## Document-by-document critique and resolution

| Document | Weakness found | Why it matters | Documentation improvement |
| --- | --- | --- | --- |
| `AI_INSTRUCTIONS.md` | Only gave generic build rules. | It did not protect the design intent during implementation. | Adds non-negotiable experience, accessibility, performance, and evidence rules. |
| `Brand.md` | Listed adjectives and colors but no ownable brand idea. | “Modern, premium, minimal” describes thousands of sites. | Defines the “Quiet Energy” idea, visual personality, image direction, and prohibited clichés. |
| `Colors.md` | Correct but neutral, with no compositional guidance. | A token list alone cannot create a recognisable experience. | Adds red/ember tonal roles, a warm atmospheric surface, and color-ratio rules. |
| `ComponentLibrary.md` | Was a bare inventory. | Components could be implemented as generic blocks with no product purpose. | Maps every component to a user decision and removes unverified social-proof as a default. |
| `ComponentSpecs.md` | Made metrics and testimonials prominent without a proof-source standard. | Unverified counters and quotes erode trust faster than their absence. | Replaces them with an evidence module that has strict publication criteria. |
| `Content.md` | Did not define audience, narrative, or proof requirements. | Copy could become generic advertising. | Defines content pillars, source-of-truth rules, and page-level content jobs. |
| `Copywriting.md` | The hero promise is credible but interchangeable. | It cannot carry a premium visual narrative alone. | Establishes a message hierarchy and stronger, restrained copy directions. |
| `DesignSystem.md` | Repeated only four color values and one font. | It did not connect brand to layout, type, components, or accessibility. | Becomes the governing index for all system documents. |
| `FolderStructure.md` | Did not reserve a place for visual assets, analytics events, or form adapters. | Art direction and conversion instrumentation could become ad hoc. | Adds explicit asset, analytics, and integration boundaries. |
| `InformationArchitecture.md` | The home order was conventional; metrics and testimonial could be empty or generic. | The story lacked an ownable “how reliability works” moment. | Centers a Reliability System sequence and adds service-area fit before action. |
| `LayoutSystem.md` | Defined grid but not editorial composition or image crop rules. | A 12-column grid alone yields a standard corporate layout. | Adds controlled asymmetry, stage/panel rhythm, and mobile image behavior. |
| `Motion.md` | Sensible restraint but no signature spatial language. | The site could feel static rather than exquisitely deliberate. | Adds one restrained “energy path” reveal and strict interaction motion rules. |
| `Navigation.md` | Mobile contact depended too heavily on opening the menu. | Urgent users should not need a second action to reach help. | Adds a persistent, labelled call action and clarifies contact hierarchy. |
| `PRD.md` | Was a placeholder. | The project had no measurable product contract. | Defines audiences, goals, exclusions, proof dependencies, and acceptance criteria. |
| `Sitemap.md` | Was a flat route list. | It did not express route role, linking, or emergency access. | Adds route intent and cross-link rules without expanding scope. |
| `TechnicalArchitecture.md` | Was a technology list, not an architecture. | It gave no rendering, content, validation, performance, or observability choices. | Defines a static-first, server-first delivery model and constraints. |
| `Typography.md` | Correct scale, but typography had no distinctive composition rules. | A premium experience needs a voice, not only sizes. | Adds editorial contrast, metric treatment, and line-break/crop discipline. |
| `UserJourney.md` | Did not include location/service eligibility or form recovery. | Visitors may submit avoidable enquiries or abandon silently. | Adds fit confirmation, progressive disclosure, and recovery states. |
| `UX.md` | Was a list of adjectives. | It could not resolve trade-offs. | Defines decision rules, especially for urgency, proof, and mobile. |
| `Wireframes.md` | Showed section order but not the signature visual moment or mobile call access. | It read like a strong wireframe, not a premium experience blueprint. | Adds a visual “energy line” concept, proof module, and refined mobile header. |

## Key opportunities captured

1. **Own a single visual idea:** “Quiet Energy” makes LPG feel precise, calm, and dependable. A subtle continuous energy line and editorial material photography become a memorable system, not decoration.
2. **Show reliability as a system, not a claim:** a three-step operational sequence—request, coordinated delivery, continued support—turns a promise into an understandable model. It is published only when operations validates it.
3. **Design for service fit early:** service area, availability, and the difference between household and commercial needs are made clear before form completion. This improves trust and lead quality.
4. **Treat urgency as a first-class state:** direct calling remains reachable on mobile; safety guidance leads to appropriate real-world help rather than a decorative FAQ.
5. **Make proof earned:** no invented counters, badges, reviews, or response-time claims. If proof is unavailable, use transparent process and useful safety guidance instead.

## Deliberate exclusions

Auto-playing hero video, parallax, carousels, floating chat, fake counters, “trusted by” logo walls, and decorative 3D gas cylinders are excluded. They either make the product feel like a generic local-business site, obscure an urgent task, or add performance cost without improving a decision.

The following documents are revised to implement these resolutions. All content-dependent modules remain conditional until facts, imagery, service-area data, and contact operations are supplied and approved.
