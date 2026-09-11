import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
export type StructuredPanelProps = HTMLAttributes<HTMLDivElement>;
const StructuredPanel = forwardRef<HTMLDivElement, StructuredPanelProps>(({ className, ...props }, ref) => <div ref={ref} className={cn("border-4 border-border bg-surface p-5 md:p-6", className)} {...props} />);
StructuredPanel.displayName = "StructuredPanel";
export { StructuredPanel };
