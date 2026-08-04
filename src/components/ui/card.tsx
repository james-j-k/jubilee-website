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
