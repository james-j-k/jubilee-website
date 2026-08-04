import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
export interface ContainerProps extends HTMLAttributes<HTMLDivElement> { size?: "content" | "wide" | "reading"; }
const Container = forwardRef<HTMLDivElement, ContainerProps>(({ size = "content", className, ...props }, ref) => <div ref={ref} className={cn("mx-auto w-full px-[var(--gutter-mobile)] md:px-[var(--gutter-tablet)] lg:px-[var(--gutter-desktop)]", size === "content" && "max-w-content", size === "wide" && "max-w-wide", size === "reading" && "max-w-reading", className)} {...props} />);
Container.displayName = "Container";
export { Container };
