# Components

Stack: Next.js 15 (App Router) + React 19 + TypeScript + Tailwind CSS 3 (CSS variables via `hsl(var(--token))`) + CVA (`class-variance-authority`) for variants + `tailwind-merge`/`clsx` (`cn()` util) + Radix `Slot` for `asChild` + `lucide-react` icons. No shadcn/ui installed directly, but the pattern (cva + forwardRef + cn) mirrors it closely.

Shared UI primitives live in `src/components/ui/`. Layout primitives live in `src/components/layout/`.

## cn() utility
`src/lib/utils.ts`
```tsx
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

## Button
- Source: `src/components/ui/button.tsx`
- Variants: `primary` (default, filled), `secondary` (surface fill), `outline`, `ghost`. Sizes: `sm`, `md` (default), `lg`. Supports `asChild` (renders as `<a>` via Radix Slot).
```tsx
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-pill px-5 text-button transition-[transform,box-shadow,background-color,border-color,color] duration-small ease-[var(--ease-standard)] focus-visible:outline-none disabled:pointer-events-none disabled:opacity-45 motion-hover-lift",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground shadow-action hover:-translate-y-px hover:shadow-plaque",
        secondary: "bg-surface text-foreground shadow-panel hover:-translate-y-px hover:shadow-plaque",
        outline: "border border-border bg-transparent text-foreground hover:border-primary hover:bg-primary-soft",
        ghost: "bg-transparent text-foreground hover:bg-surface-subtle",
      },
      size: {
        sm: "min-h-9 px-4 text-caption",
        md: "min-h-11 px-5",
        lg: "min-h-12 px-6 text-body",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, type, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size }), className)} ref={ref} type={asChild ? undefined : type ?? "button"} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
```

## Card
- Source: `src/components/ui/card.tsx`
- `elevation`: `flat` | `panel` (default shadow) | `plaque` (bigger shadow).
```tsx
import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  elevation?: "flat" | "panel" | "plaque";
}

const Card = forwardRef<HTMLDivElement, CardProps>(({ className, elevation = "panel", ...props }, ref) => (
  <div ref={ref} className={cn("rounded-lg border border-border bg-surface", elevation === "panel" && "shadow-panel", elevation === "plaque" && "shadow-plaque", className)} {...props} />
));
Card.displayName = "Card";

export { Card };
```

## Badge
- Source: `src/components/ui/badge.tsx`
- `tone`: `neutral` (default) | `primary` | `success` | `accent`. Currently unused anywhere in the app (available primitive only).
```tsx
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const badgeVariants = cva("inline-flex items-center gap-2 rounded-pill px-3 py-1 text-metadata uppercase", {
  variants: { tone: { neutral: "bg-surface-subtle text-muted-foreground", primary: "bg-primary-soft text-primary", success: "bg-emerald-50 text-success", accent: "bg-accent-soft text-accent" } },
  defaultVariants: { tone: "neutral" },
});
export interface BadgeProps extends HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {}
const Badge = forwardRef<HTMLSpanElement, BadgeProps>(({ className, tone, ...props }, ref) => <span ref={ref} className={cn(badgeVariants({ tone }), className)} {...props} />);
Badge.displayName = "Badge";
export { Badge, badgeVariants };
```

## Tag
- Source: `src/components/ui/tag.tsx`
- Plain pill label, used for commercial-establishment/context chips (Hotels, Restaurants, Bakeries, etc.).
```tsx
import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
export type TagProps = HTMLAttributes<HTMLSpanElement>;
const Tag = forwardRef<HTMLSpanElement, TagProps>(({ className, ...props }, ref) => <span ref={ref} className={cn("inline-flex items-center rounded-pill border border-border bg-surface px-3 py-1 text-caption font-medium text-muted-foreground", className)} {...props} />);
Tag.displayName = "Tag";
export { Tag };
```

## Divider
- Source: `src/components/ui/divider.tsx`
- `tone`: `border` (default, neutral hr) | `primary` (brand-colored hr).
```tsx
import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
export interface DividerProps extends HTMLAttributes<HTMLHRElement> { tone?: "border" | "primary"; }
const Divider = forwardRef<HTMLHRElement, DividerProps>(({ className, tone = "border", ...props }, ref) => <hr ref={ref} className={cn("border-0 border-t", tone === "border" ? "border-border" : "border-primary", className)} {...props} />);
Divider.displayName = "Divider";
export { Divider };
```

## Cta (inline call-to-action banner)
- Source: `src/components/ui/cta.tsx`
```tsx
import { type ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

export interface CtaProps { title: string; description?: string; href: string; label: string; icon?: ReactNode; className?: string; }
export function Cta({ title, description, href, label, icon = <ArrowRight aria-hidden="true" size={17} />, className }: CtaProps) {
  return <aside className={cn("rounded-lg border border-border bg-surface p-5 shadow-panel sm:flex sm:items-center sm:justify-between sm:gap-6", className)} aria-label={title}>
    <div><h3 className="text-h3">{title}</h3>{description ? <p className="mt-2 text-body text-muted-foreground">{description}</p> : null}</div>
    <Button asChild className="mt-5 shrink-0 sm:mt-0"><a href={href}>{label}{icon}</a></Button>
  </aside>;
}
```

## GlassPanel
- Source: `src/components/ui/glass-panel.tsx`
- Frosted/backdrop-blur surface using the `--glass-*` tokens. `density`: `standard` | `quiet`.
```tsx
import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface GlassPanelProps extends HTMLAttributes<HTMLDivElement> {
  density?: "standard" | "quiet";
}

const GlassPanel = forwardRef<HTMLDivElement, GlassPanelProps>(({ className, density = "standard", ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border border-[color:var(--glass-border)] bg-[color:var(--glass-surface)] shadow-panel backdrop-blur-glass backdrop-saturate-[var(--glass-saturation)]",
      density === "standard" ? "p-5" : "p-4",
      className,
    )}
    {...props}
  />
));
GlassPanel.displayName = "GlassPanel";

export { GlassPanel };
```

## ImageFrame
- Source: `src/components/ui/image-frame.tsx`
- `<figure>` wrapper with optional caption; `priority`: `standard` | `feature` (bigger shadow).
```tsx
import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";
export interface ImageFrameProps extends Omit<HTMLAttributes<HTMLElement>, "children"> { children: ReactNode; caption?: string; priority?: "standard" | "feature"; }
const ImageFrame = forwardRef<HTMLElement, ImageFrameProps>(({ children, caption, priority = "standard", className, ...props }, ref) => <figure ref={ref} className={cn("overflow-hidden rounded-lg border border-border bg-surface", priority === "feature" && "shadow-plaque", className)} {...props}>{children}{caption ? <figcaption className="border-t border-border px-4 py-3 text-caption text-muted-foreground">{caption}</figcaption> : null}</figure>);
ImageFrame.displayName = "ImageFrame";
export { ImageFrame };
```

## Link
- Source: `src/components/ui/link.tsx`
- Wraps `next/link`. `emphasis`: `standard` (primary-colored underline) | `quiet` (muted).
```tsx
import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import { forwardRef, type AnchorHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface LinkProps extends NextLinkProps, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof NextLinkProps> {
  emphasis?: "standard" | "quiet";
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>(({ className, emphasis = "standard", ...props }, ref) => (
  <NextLink
    ref={ref}
    className={cn(
      "rounded-sm underline-offset-4 transition-colors duration-micro ease-[var(--ease-standard)] focus-visible:outline-none",
      emphasis === "standard" ? "text-primary decoration-primary/40 hover:decoration-primary" : "text-muted-foreground hover:text-foreground",
      className,
    )}
    {...props}
  />
));
Link.displayName = "Link";

export { Link };
```

## MapEmbed
- Source: `src/components/ui/map-embed.tsx`
- Location card; renders a supplied map embed or a gradient placeholder with a pin icon, plus a "directions" link row.
```tsx
import { type ReactNode } from "react";
import { ExternalLink, MapPin } from "lucide-react";

import { cn } from "@/lib/utils";

export interface MapEmbedProps {
  title: string;
  description: string;
  href: string;
  embed?: ReactNode;
  className?: string;
}

export function MapEmbed({ title, description, href, embed, className }: MapEmbedProps) {
  return (
    <div className={cn("overflow-hidden rounded-md border border-border bg-surface-subtle", className)}>
      {embed ? (
        <div className="aspect-[16/9]">{embed}</div>
      ) : (
        <div className="flex aspect-[16/9] items-end justify-between gap-4 bg-[linear-gradient(135deg,hsl(var(--surface-subtle)),hsl(var(--ember-soft)))] p-4">
          <MapPin aria-hidden="true" size={22} strokeWidth={1.6} className="text-primary" />
          <span aria-hidden="true" className="h-px flex-1 bg-primary/30" />
        </div>
      )}
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-between gap-3 border-t border-border px-4 py-3 text-caption font-semibold text-foreground transition-colors duration-micro hover:bg-surface focus-visible:outline-none"
        aria-label={`Open ${title} in Google Maps`}
      >
        <span><span className="block">{title}</span><span className="mt-1 block font-normal text-muted-foreground">{description}</span></span>
        <ExternalLink aria-hidden="true" size={16} strokeWidth={1.7} className="shrink-0 text-primary" />
      </a>
    </div>
  );
}
```

## OfficialBrandRail
- Source: `src/components/ui/official-brand-rail.tsx`
- Protected institutional endorsement surface (IndianOil/Indane relationship statement). **Deliberately unanimated** — a bordered neutral rail that shows the approved logo lockup + relationship text ("Authorised Indane Distributor"). Used at the top of the hero and every page hero.
```tsx
import { cva, type VariantProps } from "class-variance-authority";
import { type ReactNode } from "react";

import { cn } from "@/lib/utils";

const railVariants = cva(
  "flex w-full flex-wrap items-center gap-y-2 border border-border bg-surface text-foreground",
  {
    variants: {
      size: {
        compact: "min-h-12 gap-3 rounded-md px-3 py-2",
        standard: "min-h-16 gap-4 rounded-md px-4 py-3",
      },
    },
    defaultVariants: { size: "standard" },
  },
);

type SeparateMarks = { indianOilMark: ReactNode; indaneMark: ReactNode; approvedLockup?: never; };
type CompositeLockup = { approvedLockup: ReactNode; indianOilMark?: never; indaneMark?: never; };
type SharedProps = VariantProps<typeof railVariants> & { relationship: string; className?: string; };
export type OfficialBrandRailProps = SharedProps & (SeparateMarks | CompositeLockup);

export function OfficialBrandRail({ indianOilMark, indaneMark, approvedLockup, relationship, size, className }: OfficialBrandRailProps) {
  return (
    <aside aria-label="Official IndianOil and Indane brand relationship" className={cn(railVariants({ size }), className)}>
      {approvedLockup ? (
        <div aria-hidden="true" className="flex shrink-0 items-center [&_img]:block [&_svg]:block">{approvedLockup}</div>
      ) : (
        <div aria-hidden="true" className="flex shrink-0 items-center gap-3 whitespace-nowrap [&_img]:block [&_svg]:block">
          <span className="flex items-center">{indianOilMark}</span>
          <span aria-hidden="true" className="h-6 border-l border-border" />
          <span className="flex items-center">{indaneMark}</span>
        </div>
      )}
      <p className="min-w-0 text-caption text-muted-foreground">{relationship}</p>
    </aside>
  );
}

export { railVariants };
```

## SectionHeading
- Source: `src/components/ui/section-heading.tsx`
- Eyebrow (uppercase, primary-colored) + heading (`h1`-`h6`) + optional description. Used at the top of nearly every section.
```tsx
import { type ElementType, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps extends HTMLAttributes<HTMLElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "start" | "center";
}
export function SectionHeading({ as = "h2", eyebrow, title, description, align = "start", className, ...props }: SectionHeadingProps) {
  const Heading = as as ElementType;
  const size = as === "h1" ? "text-h1" : as === "h2" ? "text-h2" : "text-h3";
  return <header className={cn("max-w-reading", align === "center" && "mx-auto text-center", className)} {...props}>
    {eyebrow ? <p className="mb-3 text-metadata uppercase text-primary">{eyebrow}</p> : null}
    <Heading className={cn(size, "text-balance text-foreground")}>{title}</Heading>
    {description ? <p className="mt-4 text-bodylg text-muted-foreground">{description}</p> : null}
  </header>;
}
```

## TerrainDivider
- Source: `src/components/ui/terrain-divider.tsx`
- Decorative flat wavy-contour SVG line (`text-border` color, i.e. neutral) used at the bottom-edge of several panels as a quiet section-boundary flourish. Static, no animation.
```tsx
import { type SVGProps } from "react";
import { cn } from "@/lib/utils";
export interface TerrainDividerProps extends SVGProps<SVGSVGElement> { decorative?: boolean; title?: string; }
export function TerrainDivider({ decorative = true, title, className, ...props }: TerrainDividerProps) {
  return <svg viewBox="0 0 1440 104" preserveAspectRatio="none" className={cn("block h-auto w-full text-border", className)} aria-hidden={decorative || undefined} aria-label={decorative ? undefined : title ?? "Terrain contour"} role={decorative ? undefined : "img"} {...props}>{!decorative && title ? <title>{title}</title> : null}<path d="M0 76C120 69 162 22 304 30c136 8 173 60 315 44 134-15 179-74 328-46 135 25 180 51 305 33 95-14 125-41 188-32" fill="none" stroke="currentColor" strokeWidth="1.5" vectorEffect="non-scaling-stroke" /></svg>;
}
```

---

## Layout primitives (`src/components/layout/`)

### Container
```tsx
import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
export interface ContainerProps extends HTMLAttributes<HTMLDivElement> { size?: "content" | "wide" | "reading"; }
const Container = forwardRef<HTMLDivElement, ContainerProps>(({ size = "content", className, ...props }, ref) => <div ref={ref} className={cn("mx-auto w-full px-[var(--gutter-mobile)] md:px-[var(--gutter-tablet)] lg:px-[var(--gutter-desktop)]", size === "content" && "max-w-content", size === "wide" && "max-w-wide", size === "reading" && "max-w-reading", className)} {...props} />);
Container.displayName = "Container";
export { Container };
```

### Section
```tsx
import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
export interface SectionProps extends HTMLAttributes<HTMLElement> { tone?: "default" | "subtle" | "surface"; spacing?: "standard" | "tight"; }
const Section = forwardRef<HTMLElement, SectionProps>(({ tone = "default", spacing = "standard", className, ...props }, ref) => <section ref={ref} className={cn(spacing === "standard" ? "py-[var(--section-space)]" : "py-7 md:py-8", tone === "subtle" && "bg-surface-subtle", tone === "surface" && "bg-surface", className)} {...props} />);
Section.displayName = "Section";
export { Section };
```
`tone="default"` renders no explicit background utility (section then relies on its own module CSS, or falls through to the page background).

### Stack / Cluster / Grid
```tsx
// Stack — vertical flex, gap 1-8, align start|center|stretch
const Stack = forwardRef<HTMLDivElement, StackProps>(({ gap = 4, align = "stretch", className, ...props }, ref) => <div ref={ref} className={cn("flex flex-col", `gap-${gap}`, align === "start" && "items-start", align === "center" && "items-center", className)} {...props} />);

// Cluster — horizontal flex-wrap, gap sm|md|lg, justify start|center|between|end
const Cluster = forwardRef<HTMLDivElement, ClusterProps>(({ gap = "md", justify = "start", className, ...props }, ref) => <div ref={ref} className={cn("flex flex-wrap items-center", gap === "sm" && "gap-2", gap === "md" && "gap-4", gap === "lg" && "gap-6", justify === "center" && "justify-center", justify === "between" && "justify-between", justify === "end" && "justify-end", className)} {...props} />);

// Grid — columns 1-4 (responsive breakpoints baked in), gap sm|md|lg
const Grid = forwardRef<HTMLDivElement, GridProps>(({ columns = 2, gap = "md", className, ...props }, ref) => <div ref={ref} className={cn("grid", columns === 1 && "grid-cols-1", columns === 2 && "grid-cols-1 md:grid-cols-2", columns === 3 && "grid-cols-1 md:grid-cols-2 lg:grid-cols-3", columns === 4 && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4", gap === "sm" && "gap-4", gap === "md" && "gap-5 md:gap-6", gap === "lg" && "gap-7 md:gap-8", className)} {...props} />);
```

### SplitLayout
Two-column responsive grid, `ratio`: `equal` | `content` (85/115) | `visual` (115/85). `reverseAtDesktop` flips column order at `lg`.
```tsx
const SplitLayout = forwardRef<HTMLDivElement, SplitLayoutProps>(({ ratio = "equal", reverseAtDesktop = false, className, ...props }, ref) => <div ref={ref} className={cn("grid items-center gap-7 lg:gap-9", ratio === "equal" && "lg:grid-cols-2", ratio === "content" && "lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]", ratio === "visual" && "lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]", reverseAtDesktop && "lg:[&>*:first-child]:order-2", className)} {...props} />);
```

### StructuredPanel
Bordered surface card used as the outer wrapper for most content panels (Jubilee Difference, Proof & Trust, Safety, etc.).
```tsx
const StructuredPanel = forwardRef<HTMLDivElement, StructuredPanelProps>(({ className, ...props }, ref) => <div ref={ref} className={cn("rounded-lg border border-border bg-surface p-5 shadow-panel md:p-6", className)} {...props} />);
```

### EditorialStage
```tsx
const EditorialStage = forwardRef<HTMLElement, EditorialStageProps>(({ density = "comfortable", className, ...props }, ref) => <section ref={ref} className={cn("relative overflow-clip bg-background", density === "comfortable" ? "py-[var(--section-space)]" : "py-9 md:py-10", className)} {...props} />);
```
(Currently unused by any page — an available primitive.)

Barrel exports: `src/components/ui/index.ts` (Badge, Button, Card, Cta, Divider, GlassPanel, ImageFrame, Link, MapEmbed, OfficialBrandRail, SectionHeading, Tag, TerrainDivider) and `src/components/layout/index.ts` (Cluster, Container, EditorialStage, Grid, Section, SplitLayout, Stack, StructuredPanel).
