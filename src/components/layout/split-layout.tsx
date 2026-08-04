import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
export interface SplitLayoutProps extends HTMLAttributes<HTMLDivElement> { ratio?: "equal" | "content" | "visual"; reverseAtDesktop?: boolean; }
const SplitLayout = forwardRef<HTMLDivElement, SplitLayoutProps>(({ ratio = "equal", reverseAtDesktop = false, className, ...props }, ref) => <div ref={ref} className={cn("grid items-center gap-7 lg:gap-9", ratio === "equal" && "lg:grid-cols-2", ratio === "content" && "lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]", ratio === "visual" && "lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]", reverseAtDesktop && "lg:[&>*:first-child]:order-2", className)} {...props} />);
SplitLayout.displayName = "SplitLayout";
export { SplitLayout };
