import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
export type TagProps = HTMLAttributes<HTMLSpanElement>;
const Tag = forwardRef<HTMLSpanElement, TagProps>(({ className, ...props }, ref) => <span ref={ref} className={cn("inline-flex items-center bg-accent px-4 py-2 text-xs font-black uppercase tracking-wide text-primary-foreground", className)} {...props} />);
Tag.displayName = "Tag";
export { Tag };
