import type { TextareaHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
}

export const Textarea = ({ label, id, className, ...props }: TextareaProps) => (
  <label className="grid gap-2 text-sm font-medium text-brand-night/90" htmlFor={id}>
    {label}
    <textarea
      id={id}
      className={cn(
        "min-h-28 w-full rounded-xl border border-brand-night/20 bg-white px-3 py-2 text-base text-brand-night shadow-sm transition placeholder:text-brand-night/40 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-coral/20",
        className
      )}
      {...props}
    />
  </label>
);
