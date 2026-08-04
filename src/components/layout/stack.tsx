import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
export interface StackProps extends HTMLAttributes<HTMLDivElement> { gap?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8; align?: "start" | "center" | "stretch"; }
const Stack = forwardRef<HTMLDivElement, StackProps>(({ gap = 4, align = "stretch", className, ...props }, ref) => <div ref={ref} className={cn("flex flex-col", `gap-${gap}`, align === "start" && "items-start", align === "center" && "items-center", className)} {...props} />);
Stack.displayName = "Stack";
export { Stack };
