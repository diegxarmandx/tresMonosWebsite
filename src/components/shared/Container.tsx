import type { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

interface ContainerProps extends PropsWithChildren {
  className?: string;
}

export const Container = ({ className, children }: ContainerProps) => (
  <div className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}>{children}</div>
);
