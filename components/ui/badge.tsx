import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "success" | "info" | "outline";
  size?: "sm" | "md" | "lg";
}

const variantClasses = {
  default: "border-transparent bg-primary text-primary-foreground shadow",
  secondary: "border-transparent bg-secondary text-secondary-foreground",
  success: "border-transparent bg-green-100 text-green-800",
  info: "border-transparent bg-blue-100 text-blue-800",
  outline: "text-foreground border border-border",
};

const sizeClasses = {
  sm: "text-xs px-2 py-0.5",
  md: "text-sm px-2.5 py-0.5",
  lg: "text-sm px-3 py-1",
};

function Badge({
  className,
  variant = "default",
  size = "md",
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    />
  );
}

export { Badge };
