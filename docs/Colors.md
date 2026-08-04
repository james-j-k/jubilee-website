# Color System

## Brand posture

Color should express controlled warmth and operational confidence. Red is a precise signal, not a wall of branding; large fields remain neutral to achieve the premium restraint associated with Apple, Linear, and Vercel.

## Core palette

| Token | Value | Intended use | Reasoning |
| --- | --- | --- | --- |
| `--background` | `#FAFAFA` | Main canvas | A soft near-white reduces glare while retaining a crisp product surface. |
| `--foreground` | `#111827` | Primary text | Near-black delivers excellent readability without the visual harshness of pure black. |
| `--primary` | `#D72638` | Main action, active state, key brand signal | Honors the specified Indane-inspired accent while feeling contemporary when used sparingly. |
| `--primary-foreground` | `#FFFFFF` | Text on primary | Provides a clear, high-contrast action treatment. |
| `--accent` | `#F97316` | Small highlight, status or warmth detail | Adds energy without competing with primary conversion actions. |
| `--ember-soft` | `#FFF3E8` | Rare warm atmospheric surface | Creates a tactile, human counterpoint for a feature moment without becoming a promotional orange field. |
| `--primary-soft` | `#FFF0F2` | Active/selected background | Gives primary interactions a calm resting context without overusing saturated red. |
| `--surface` | `#FFFFFF` | Elevated cards/panels | Gives content a quiet elevation from the base canvas. |
| `--muted` | `#F3F4F6` | Secondary surfaces | Separates groups without heavy boxes. |
| `--muted-foreground` | `#4B5563` | Supporting text | Maintains readable hierarchy for descriptive copy. |
| `--border` | `#E5E7EB` | Dividers and control boundaries | Defines structure with low visual noise. |
| `--success` | `#15803D` | Confirmed form status only | Conventional positive signal, reserved for factual feedback. |
| `--danger` | `#B91C1C` | Error or urgent safety state | Clear severity distinct from brand-primary red. |

## Usage rules

- Primary red is reserved for the main CTA, active navigation, focused controls, and occasional key emphasis. This scarcity preserves meaning.
- Orange is never a competing primary CTA. It may support illustrations, tags, or small data emphasis only.
- Long-form text stays foreground or muted-foreground; red body copy reduces reading comfort and overbrands the page.
- Cards use border and surface before shadow. Excess shadows feel promotional and undermine the quiet product-system aesthetic.
- Safety or error messaging uses semantic severity tokens, never the brand color by default.
- Aim for approximately 80% neutral canvas/surfaces, 15% ink and muted structure, and no more than 5% expressive red or ember within a viewport. This keeps color meaningful.
- The energy line uses a low-contrast neutral stroke in its resting state; red or ember appears only at an active connection or highlighted step.

## Contrast and states

All foreground/background combinations must meet WCAG AA: 4.5:1 for normal text and 3:1 for large text and interface boundaries. Every interactive state has a non-color change: focus ring, underline, border, or label. Disabled controls reduce emphasis but remain readable; they are not used to conceal an available action.

## Future theme readiness

Components consume semantic variables rather than literal palette values. This permits a future dark theme, campaign palette, or accessibility adjustment without component-level edits. The initial release remains light-only because the supplied brand specification does not establish a dark-mode identity; a half-designed dark theme would dilute quality.
