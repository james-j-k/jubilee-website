import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
export type PageWrapperProps = HTMLAttributes<HTMLElement>;
const PageWrapper = forwardRef<HTMLElement, PageWrapperProps>(({ className, ...props }, ref) => <main ref={ref} className={cn("min-h-screen overflow-x-clip bg-background text-foreground", className)} {...props} />);
PageWrapper.displayName = "PageWrapper";
export { PageWrapper };
