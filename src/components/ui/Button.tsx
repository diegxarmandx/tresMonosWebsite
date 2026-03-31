import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps
  extends PropsWithChildren,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
  variant?: ButtonVariant;
  className?: string;
  isLoading?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-coral text-white shadow-soft hover:bg-[#b94d35] focus-visible:ring-brand-coral/40 disabled:bg-brand-coral/60",
  secondary:
    "bg-brand-palm text-white shadow-soft hover:bg-[#245544] focus-visible:ring-brand-palm/35 disabled:bg-brand-palm/60",
  ghost:
    "bg-white/60 text-brand-night ring-1 ring-brand-night/15 backdrop-blur hover:bg-white focus-visible:ring-brand-night/30"
};

export const Button = ({
  variant = "primary",
  className,
  children,
  isLoading,
  disabled,
  ...props
}: ButtonProps) => (
  <button
    className={cn(
      "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-4",
      variantStyles[variant],
      className
    )}
    disabled={disabled || isLoading}
    {...props}
  >
    {isLoading ? (
      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/60 border-t-white" aria-hidden />
    ) : null}
    {children}
  </button>
);
