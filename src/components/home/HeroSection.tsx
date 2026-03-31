import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

export const HeroSection = () => (
  <section className="relative overflow-hidden bg-tropical-mesh py-20 sm:py-28">
    <Container className="relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      <div className="max-w-2xl space-y-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-coral">Mayagüez, Puerto Rico</p>
        <h1 className="font-heading text-5xl leading-[0.95] text-brand-night sm:text-6xl lg:text-7xl">{siteConfig.name}</h1>
        <p className="text-lg leading-relaxed text-brand-night/75 sm:text-xl">{siteConfig.tagline}</p>
        <div className="flex flex-wrap gap-3">
          <Link href="/order">
            <Button>
              Ordenar ahora <ArrowRight size={16} />
            </Button>
          </Link>
          <Link href="/menu">
            <Button variant="ghost">Ver menú</Button>
          </Link>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[2rem] border border-brand-night/10 shadow-soft">
        <Image
          src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=80"
          alt="Presentación de plato inspirado en la cocina puertorriqueña"
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 40vw, 100vw"
          priority
        />
        <div className="relative m-4 rounded-[1.5rem] bg-white/88 p-5 backdrop-blur">
          <h2 className="font-heading text-3xl text-brand-night">Recomendados de hoy</h2>
          <ul className="mt-4 space-y-4 text-sm text-brand-night/75">
            <li className="rounded-2xl bg-white p-4">Arma tu Monkey Bowl con tus ingredientes favoritos.</li>
            <li className="rounded-2xl bg-white p-4">Tapas para compartir y cócteles artesanales en la barra.</li>
            <li className="rounded-2xl bg-white p-4">Especiales diarios con sazón criolla de la casa.</li>
          </ul>
        </div>
      </div>
    </Container>
  </section>
);
