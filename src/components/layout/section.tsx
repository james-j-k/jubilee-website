import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
export interface SectionProps extends HTMLAttributes<HTMLElement> { tone?: "default" | "subtle" | "surface"; spacing?: "standard" | "tight"; }
const Section = forwardRef<HTMLElement, SectionProps>(({ tone = "default", spacing = "standard", className, ...props }, ref) => <section ref={ref} className={cn(spacing === "standard" ? "py-[var(--section-space)]" : "py-7 md:py-8", tone === "subtle" && "bg-surface-subtle", tone === "surface" && "bg-surface", className)} {...props} />);
Section.displayName = "Section";
export { Section };
