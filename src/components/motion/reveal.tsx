import { forwardRef, type CSSProperties, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
export interface RevealProps extends HTMLAttributes<HTMLDivElement> { delay?: number; }
const Reveal = forwardRef<HTMLDivElement, RevealProps>(({ delay = 0, className, style, ...props }, ref) => <div ref={ref} className={cn("motion-reveal", className)} style={{ "--motion-delay": `${delay}ms`, ...style } as CSSProperties} {...props} />);
Reveal.displayName = "Reveal";
export { Reveal };
