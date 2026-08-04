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
