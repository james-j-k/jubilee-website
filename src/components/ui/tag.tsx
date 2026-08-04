import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
export type TagProps = HTMLAttributes<HTMLSpanElement>;
const Tag = forwardRef<HTMLSpanElement, TagProps>(({ className, ...props }, ref) => <span ref={ref} className={cn("inline-flex items-center rounded-pill border border-border bg-surface px-3 py-1 text-caption font-medium text-muted-foreground", className)} {...props} />);
Tag.displayName = "Tag";
export { Tag };
