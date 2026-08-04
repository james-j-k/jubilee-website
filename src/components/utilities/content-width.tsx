import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
export interface ContentWidthProps extends HTMLAttributes<HTMLDivElement> { wide?: boolean; }
const ContentWidth = forwardRef<HTMLDivElement, ContentWidthProps>(({ wide = false, className, ...props }, ref) => <div ref={ref} className={cn("mx-auto w-full px-[var(--gutter-mobile)] md:px-[var(--gutter-tablet)] lg:px-[var(--gutter-desktop)]", wide ? "max-w-wide" : "max-w-content", className)} {...props} />);
ContentWidth.displayName = "ContentWidth";
export { ContentWidth };
