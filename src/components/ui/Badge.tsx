import type { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

interface BadgeProps extends PropsWithChildren {
  tone?: "warm" | "spicy";
}

export const Badge = ({ tone = "warm", children }: BadgeProps) => (
  <span
    className={cn(
      "inline-flex rounded-full px-2.5 py-1 text-xs font-semibold",
      tone === "warm"
        ? "bg-brand-palm/12 text-brand-palm"
        : "bg-brand-coral/12 text-brand-coral"
    )}
  >
    {children}
  </span>
);
