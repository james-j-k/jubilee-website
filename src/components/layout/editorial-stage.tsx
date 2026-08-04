import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
export interface EditorialStageProps extends HTMLAttributes<HTMLElement> { density?: "comfortable" | "immersive"; }
const EditorialStage = forwardRef<HTMLElement, EditorialStageProps>(({ density = "comfortable", className, ...props }, ref) => <section ref={ref} className={cn("relative overflow-clip bg-background", density === "comfortable" ? "py-[var(--section-space)]" : "py-9 md:py-10", className)} {...props} />);
EditorialStage.displayName = "EditorialStage";
export { EditorialStage };
