"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/Button";
import { navLinks, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-brand-night/10 bg-background/90 backdrop-blur">
      <Container className="flex min-h-16 items-center justify-between gap-4">
        <Link className="font-heading text-2xl tracking-wide text-brand-night" href="/">
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-semibold transition",
                pathname === link.href
                  ? "bg-brand-night text-white"
                  : "text-brand-night hover:bg-brand-sand"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href="/order">
            <Button variant="primary">Pedir para recoger</Button>
          </Link>
        </div>

        <button
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full text-brand-night transition hover:bg-brand-sand md:hidden"
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Abrir menú de navegación"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      {isOpen ? (
        <div className="border-t border-brand-night/10 bg-background md:hidden">
          <Container className="grid gap-2 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-xl px-3 py-2 text-sm font-semibold transition",
                  pathname === link.href
                    ? "bg-brand-night text-white"
                    : "text-brand-night hover:bg-brand-sand"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/order" onClick={() => setIsOpen(false)}>
              <Button className="w-full">Pedir para recoger</Button>
            </Link>
          </Container>
        </div>
      ) : null}
    </header>
  );
};
