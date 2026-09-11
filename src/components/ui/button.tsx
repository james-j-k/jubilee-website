import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-pill px-5 text-button font-black uppercase tracking-wide transition-transform duration-100 ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:outline-none disabled:pointer-events-none disabled:opacity-45 active:scale-[0.96]",
  {
    variants: {
      variant: {
        primary: "btn-primary bg-accent text-primary-foreground",
        secondary: "btn-secondary bg-action text-action-foreground",
        outline: "btn-outline border-4 border-border bg-transparent text-foreground hover:bg-primary-soft",
        ghost: "btn-ghost bg-transparent text-foreground hover:bg-surface-subtle",
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
