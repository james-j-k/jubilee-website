import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
export interface MaxWidthProps extends HTMLAttributes<HTMLDivElement> { size?: "content" | "wide" | "reading"; }
const MaxWidth = forwardRef<HTMLDivElement, MaxWidthProps>(({ size = "content", className, ...props }, ref) => <div ref={ref} className={cn("w-full", size === "content" && "max-w-content", size === "wide" && "max-w-wide", size === "reading" && "max-w-reading", className)} {...props} />);
MaxWidth.displayName = "MaxWidth";
export { MaxWidth };
