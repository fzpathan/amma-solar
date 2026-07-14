import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-base font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green/40 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-green text-white hover:bg-green-dark soft-shadow",
        secondary:
          "bg-navy text-white hover:bg-navy-deep soft-shadow",
        outline:
          "border border-white/40 bg-white/10 text-white backdrop-blur hover:bg-white/20",
        ghost: "text-navy hover:bg-surface",
        whatsapp: "bg-[#25D366] text-white hover:bg-[#1ebe57] soft-shadow",
        soft: "bg-white text-navy soft-shadow hover:soft-shadow-lg",
      },
      size: {
        default: "h-12 px-5 py-2",
        sm: "h-10 rounded-lg px-3 text-sm",
        lg: "h-14 rounded-xl px-8 text-lg",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
