import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
export interface HoverSurfaceProps extends HTMLAttributes<HTMLDivElement> { disabled?: boolean; }
const HoverSurface = forwardRef<HTMLDivElement, HoverSurfaceProps>(({ disabled = false, className, ...props }, ref) => <div ref={ref} className={cn(!disabled && "motion-hover-lift", className)} {...props} />);
HoverSurface.displayName = "HoverSurface";
export { HoverSurface };
