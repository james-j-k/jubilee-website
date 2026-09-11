import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  elevation?: "flat" | "panel" | "plaque";
}

const Card = forwardRef<HTMLDivElement, CardProps>(({ className, elevation = "panel", ...props }, ref) => (
  <div ref={ref} className={cn("border-4 bg-surface", elevation === "plaque" ? "border-accent" : "border-border", className)} {...props} />
));
Card.displayName = "Card";

export { Card };
