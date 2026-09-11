import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";
export interface ImageFrameProps extends Omit<HTMLAttributes<HTMLElement>, "children"> { children: ReactNode; caption?: string; priority?: "standard" | "feature"; }
const ImageFrame = forwardRef<HTMLElement, ImageFrameProps>(({ children, caption, priority = "standard", className, ...props }, ref) => <figure ref={ref} className={cn("overflow-hidden border-4 bg-surface", priority === "feature" ? "border-accent" : "border-border", className)} {...props}>{children}{caption ? <figcaption className="border-t-4 border-border px-4 py-3 text-caption font-semibold uppercase tracking-wide text-muted-foreground">{caption}</figcaption> : null}</figure>);
ImageFrame.displayName = "ImageFrame";
export { ImageFrame };
