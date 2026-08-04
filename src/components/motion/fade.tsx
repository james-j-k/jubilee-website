import { forwardRef, type CSSProperties, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
export interface FadeProps extends HTMLAttributes<HTMLDivElement> { delay?: number; }
const Fade = forwardRef<HTMLDivElement, FadeProps>(({ delay = 0, className, style, ...props }, ref) => <div ref={ref} className={cn("motion-fade", className)} style={{ "--motion-delay": `${delay}ms`, ...style } as CSSProperties} {...props} />);
Fade.displayName = "Fade";
export { Fade };
