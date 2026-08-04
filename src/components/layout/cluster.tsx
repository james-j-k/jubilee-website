import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
export interface ClusterProps extends HTMLAttributes<HTMLDivElement> { gap?: "sm" | "md" | "lg"; justify?: "start" | "center" | "between" | "end"; }
const Cluster = forwardRef<HTMLDivElement, ClusterProps>(({ gap = "md", justify = "start", className, ...props }, ref) => <div ref={ref} className={cn("flex flex-wrap items-center", gap === "sm" && "gap-2", gap === "md" && "gap-4", gap === "lg" && "gap-6", justify === "center" && "justify-center", justify === "between" && "justify-between", justify === "end" && "justify-end", className)} {...props} />);
Cluster.displayName = "Cluster";
export { Cluster };
