import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
export interface EditorialLayoutProps extends HTMLAttributes<HTMLDivElement> { measure?: "content" | "reading"; }
const EditorialLayout = forwardRef<HTMLDivElement, EditorialLayoutProps>(({ measure = "content", className, ...props }, ref) => <div ref={ref} className={cn("mx-auto w-full px-[var(--gutter-mobile)] md:px-[var(--gutter-tablet)] lg:px-[var(--gutter-desktop)]", measure === "content" ? "max-w-content" : "max-w-reading", className)} {...props} />);
EditorialLayout.displayName = "EditorialLayout";
export { EditorialLayout };
