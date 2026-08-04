import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
/** Use only when an interactive child needs a bounded, visible focus treatment. */
export type FocusRingProps = HTMLAttributes<HTMLDivElement>;
const FocusRing = forwardRef<HTMLDivElement, FocusRingProps>(({ className, ...props }, ref) => <div ref={ref} className={cn("rounded-md focus-within:outline focus-within:outline-2 focus-within:outline-offset-3 focus-within:outline-[hsl(var(--focus))]", className)} {...props} />);
FocusRing.displayName = "FocusRing";
export { FocusRing };
