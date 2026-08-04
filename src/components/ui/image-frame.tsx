import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";
export interface ImageFrameProps extends Omit<HTMLAttributes<HTMLElement>, "children"> { children: ReactNode; caption?: string; priority?: "standard" | "feature"; }
const ImageFrame = forwardRef<HTMLElement, ImageFrameProps>(({ children, caption, priority = "standard", className, ...props }, ref) => <figure ref={ref} className={cn("overflow-hidden rounded-lg border border-border bg-surface", priority === "feature" && "shadow-plaque", className)} {...props}>{children}{caption ? <figcaption className="border-t border-border px-4 py-3 text-caption text-muted-foreground">{caption}</figcaption> : null}</figure>);
ImageFrame.displayName = "ImageFrame";
export { ImageFrame };
