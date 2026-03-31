import type { PropsWithChildren } from "react";

interface SectionHeadingProps extends PropsWithChildren {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
}

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  children
}: SectionHeadingProps) => (
  <div className={align === "center" ? "text-center" : "text-left"}>
    {eyebrow ? (
      <p
        className={
          tone === "light"
            ? "text-xs font-semibold uppercase tracking-[0.2em] text-white/70"
            : "text-xs font-semibold uppercase tracking-[0.2em] text-brand-coral"
        }
      >
        {eyebrow}
      </p>
    ) : null}
    <h2
      className={
        tone === "light"
          ? "mt-2 font-heading text-3xl leading-tight text-white sm:text-4xl"
          : "mt-2 font-heading text-3xl leading-tight text-brand-night sm:text-4xl"
      }
    >
      {title}
    </h2>
    {description ? (
      <p
        className={
          tone === "light"
            ? "mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg"
            : "mt-4 max-w-2xl text-base leading-relaxed text-brand-night/70 sm:text-lg"
        }
      >
        {description}
      </p>
    ) : null}
    {children}
  </div>
);
