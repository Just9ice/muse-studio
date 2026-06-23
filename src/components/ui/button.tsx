import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gold disabled:pointer-events-none disabled:opacity-50 active:scale-95",
  {
    variants: {
      variant: {
        primary:
          "bg-gold text-ink border border-gold hover:bg-ink hover:text-cream hover:border-ink hover:shadow-lg hover:-translate-y-0.5",
        outline:
          "border border-ink/30 text-ink hover:border-gold hover:text-gold hover:bg-transparent",
        "outline-light":
          "border border-cream/40 text-cream hover:border-gold hover:text-gold hover:bg-transparent",
        ghost: "text-ink hover:text-gold underline-offset-4 hover:underline",
        "ghost-light":
          "text-cream hover:text-gold underline-offset-4 hover:underline",
      },
      size: {
        default: "h-16 px-7 text-xl",
        sm: "h-9 px-4 text-xs",
        link: "h-auto p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
