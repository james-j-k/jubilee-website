import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
export interface GridProps extends HTMLAttributes<HTMLDivElement> { columns?: 1 | 2 | 3 | 4; gap?: "sm" | "md" | "lg"; }
const Grid = forwardRef<HTMLDivElement, GridProps>(({ columns = 2, gap = "md", className, ...props }, ref) => <div ref={ref} className={cn("grid", columns === 1 && "grid-cols-1", columns === 2 && "grid-cols-1 md:grid-cols-2", columns === 3 && "grid-cols-1 md:grid-cols-2 lg:grid-cols-3", columns === 4 && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4", gap === "sm" && "gap-4", gap === "md" && "gap-5 md:gap-6", gap === "lg" && "gap-7 md:gap-8", className)} {...props} />);
Grid.displayName = "Grid";
export { Grid };
