import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import { forwardRef, type AnchorHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface LinkProps extends NextLinkProps, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof NextLinkProps> {
  emphasis?: "standard" | "quiet";
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>(({ className, emphasis = "standard", ...props }, ref) => (
  <NextLink
    ref={ref}
    className={cn(
      "rounded-sm underline-offset-4 transition-colors duration-micro ease-[var(--ease-standard)] focus-visible:outline-none",
      emphasis === "standard" ? "text-primary decoration-primary/40 hover:decoration-primary" : "text-muted-foreground hover:text-foreground",
      className,
    )}
    {...props}
  />
));
Link.displayName = "Link";

export { Link };
