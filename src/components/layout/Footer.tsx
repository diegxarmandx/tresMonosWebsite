import Link from "next/link";
import { Facebook, Instagram, MapPin, Phone, Clock3, Music2 } from "lucide-react";

import { Container } from "@/components/shared/Container";
import { siteConfig } from "@/lib/site";

export const Footer = () => (
  <footer className="border-t border-brand-night/10 bg-brand-night text-white">
    <Container className="grid gap-8 py-12 md:grid-cols-3">
      <div className="space-y-3">
        <h3 className="font-heading text-3xl">{siteConfig.name}</h3>
        <p className="max-w-sm text-sm text-white/75">
          Sabor criollo real, ambiente relajado y hospitalidad puertorriqueña en cada visita.
        </p>
      </div>

      <div className="space-y-3 text-sm text-white/85">
        <p className="flex items-center gap-2"><MapPin size={16} /> {siteConfig.address}</p>
        <p className="flex items-center gap-2"><Phone size={16} /> {siteConfig.phone}</p>
        <div className="flex items-start gap-2">
          <Clock3 size={16} className="mt-0.5" />
          <div>
            {siteConfig.hours.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">Síguenos</p>
        <div className="flex gap-3">
          <Link
            href={siteConfig.social.instagram}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-white/20 transition hover:bg-white/10"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </Link>
          <Link
            href={siteConfig.social.facebook}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-white/20 transition hover:bg-white/10"
            aria-label="Facebook"
          >
            <Facebook size={18} />
          </Link>
          <Link
            href={siteConfig.social.tiktok}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-white/20 transition hover:bg-white/10"
            aria-label="TikTok"
          >
            <Music2 size={18} />
          </Link>
        </div>
        <p className="text-sm text-white/70">Para cenas grupales o catering, escríbenos a {siteConfig.email}.</p>
      </div>
    </Container>
  </footer>
);
