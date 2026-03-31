import Image from "next/image";

import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";

export const AboutPageContent = () => (
  <div className="py-14 sm:py-20">
    <Container className="space-y-12">
      <SectionHeading
        eyebrow="Nuestra historia"
        title="Tres Monos: cocina criolla, barra y buen ambiente"
        description="Tres Monos es un restaurante local en Mayagüez que ofrece comida puertorriqueña con sabor real, tapas para compartir y cócteles artesanales."
      />

      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div className="space-y-5 text-base leading-relaxed text-brand-night/75">
          <p>
            Aquí puedes armar tu propio Monkey Bowl, disfrutar de almuerzos completos, cenas con sazón
            y especiales diarios.
          </p>
          <p>
            Nuestro ambiente es relajado, con barra, música y servicio de mesa. Es perfecto para venir en
            pareja, con amistades o en familia.
          </p>
          <p>
            Servimos platos criollos como carne frita, mofongo, arroz mamposteao, pechuga en salsa y más.
            Si buscas dónde comer en Mayagüez, pásate por Tres Monos.
          </p>
        </div>

        <div className="relative h-96 overflow-hidden rounded-3xl border border-brand-night/10">
          <Image
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80"
            alt="Ambiente del restaurante"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        </div>
      </div>
    </Container>
  </div>
);
