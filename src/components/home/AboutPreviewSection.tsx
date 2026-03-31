import Link from "next/link";

import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/Button";

export const AboutPreviewSection = () => (
  <section className="py-16 sm:py-20">
    <Container className="grid gap-8 rounded-[2rem] bg-brand-night p-8 text-white sm:p-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
      <SectionHeading
        eyebrow="Sobre Tres Monos"
        title="Sabor criollo real en el corazón de Mayagüez"
        description="Comida puertorriqueña, tapas para compartir y cócteles artesanales en un ambiente relajado."
        tone="light"
      />
      <div className="space-y-4 text-sm text-white/80">
        <p>
          Nacimos en Mayagüez con una misión clara: servir cocina puertorriqueña auténtica con un toque
          moderno, buena música y hospitalidad de casa.
        </p>
        <div className="flex justify-center">
          <Link href="/about">
            <Button variant="ghost" className="min-h-12 px-8 text-base bg-white text-brand-night hover:bg-brand-sand">
              Conoce nuestra historia
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  </section>
);
