import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
export interface DividerProps extends HTMLAttributes<HTMLHRElement> { tone?: "border" | "primary"; }
const Divider = forwardRef<HTMLHRElement, DividerProps>(({ className, tone = "border", ...props }, ref) => <hr ref={ref} className={cn("border-0 border-t", tone === "border" ? "border-border" : "border-primary", className)} {...props} />);
Divider.displayName = "Divider";
export { Divider };
