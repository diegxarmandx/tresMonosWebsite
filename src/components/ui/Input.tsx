import type { InputHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  helperText?: string;
}

export const Input = ({ label, id, helperText, className, ...props }: InputProps) => (
  <label className="grid gap-2 text-sm font-medium text-brand-night/90" htmlFor={id}>
    {label}
    <input
      id={id}
      className={cn(
        "min-h-11 w-full rounded-xl border border-brand-night/20 bg-white px-3 py-2 text-base text-brand-night shadow-sm transition placeholder:text-brand-night/40 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-coral/20",
        className
      )}
      {...props}
    />
    {helperText ? <span className="text-xs text-brand-night/60">{helperText}</span> : null}
  </label>
);
