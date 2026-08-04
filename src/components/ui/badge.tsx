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
