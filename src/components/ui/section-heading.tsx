import { type ElementType, type HTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "start" | "center";
  headingClassName?: string;
}
export function SectionHeading({ as = "h2", eyebrow, title, description, align = "start", className, headingClassName, ...props }: SectionHeadingProps) {
  const Heading = as as ElementType;
  const size = as === "h1" ? "text-h1" : as === "h2" ? "text-h2" : "text-h3";
  return <header className={cn("max-w-reading", align === "center" && "mx-auto text-center", className)} {...props}>
    {eyebrow ? <p className="mb-3 text-metadata uppercase text-primary">{eyebrow}</p> : null}
    <Heading className={cn(size, "text-balance text-foreground", headingClassName)}>{title}</Heading>
    {description ? <p className="mt-4 text-bodylg text-muted-foreground">{description}</p> : null}
  </header>;
}
