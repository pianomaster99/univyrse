import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "outlineDark" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const variantClasses = {
  primary:
    "bg-primary text-primary-foreground shadow-sm hover:opacity-90",
  secondary:
    "bg-secondary text-secondary-foreground shadow-sm hover:opacity-90",
  outline:
    "border-2 border-border bg-background hover:bg-accent hover:text-accent-foreground",
  outlineDark:
    "border-2 border-white/40 bg-transparent text-white hover:bg-white/10 hover:border-white/60",
  ghost: "hover:bg-accent hover:text-accent-foreground",
};

const sizeClasses = {
  sm: "h-9 px-4 py-2 text-sm",
  md: "h-11 px-6 py-2.5",
  lg: "h-12 px-8 py-3 text-lg",
};

const buttonClasses = (variant: ButtonProps["variant"], size: ButtonProps["size"], className?: string) =>
  cn(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
    variantClasses[variant ?? "primary"],
    sizeClasses[size ?? "md"],
    className
  );

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", asChild, children, ...props }, ref) => {
    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children as React.ReactElement<{ className?: string }>, {
        className: cn(buttonClasses(variant, size, className), (children as React.ReactElement<{ className?: string }>).props.className),
      });
    }
    return (
      <button
        ref={ref}
        className={buttonClasses(variant, size, className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };
