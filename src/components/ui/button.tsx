import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-pill px-5 text-button transition-[transform,box-shadow,background-color,border-color,color] duration-small ease-[var(--ease-standard)] focus-visible:outline-none disabled:pointer-events-none disabled:opacity-45 motion-hover-lift",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground shadow-action hover:-translate-y-px hover:shadow-plaque",
        secondary: "bg-surface text-foreground shadow-panel hover:-translate-y-px hover:shadow-plaque",
        outline: "border border-border bg-transparent text-foreground hover:border-primary hover:bg-primary-soft",
        ghost: "bg-transparent text-foreground hover:bg-surface-subtle",
      },
      size: {
        sm: "min-h-9 px-4 text-caption",
        md: "min-h-11 px-5",
        lg: "min-h-12 px-6 text-body",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, type, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size }), className)} ref={ref} type={asChild ? undefined : type ?? "button"} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
