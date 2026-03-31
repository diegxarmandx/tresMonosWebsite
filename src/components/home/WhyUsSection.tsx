import { Clock3, Leaf, Sparkles, Music2 } from "lucide-react";

import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";

const points = [
  {
    icon: Sparkles,
    title: "Sabor boricua auténtico",
    description: "Platos criollos con sazón real, como en casa pero con toque moderno."
  },
  {
    icon: Leaf,
    title: "Ingredientes frescos",
    description: "Preparamos desde cero para mantener calidad y sabor en cada orden."
  },
  {
    icon: Clock3,
    title: "Recogido ágil",
    description: "Cuando llegues a Tres Monos, pregúntale a la host por tu orden."
  },
  {
    icon: Music2,
    title: "Ambiente Tres Monos",
    description: "Barra, cocteles artesanales y buena música para compartir en pareja, con amistades o en familia."
  }
];

export const WhyUsSection = () => (
  <section className="bg-white py-16 sm:py-20">
    <Container className="space-y-8">
      <SectionHeading
        eyebrow="Por qué visitarnos"
        title="Ambiente relajado, buena música y cocina con identidad boricua"
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {points.map((point) => (
          <article key={point.title} className="rounded-3xl border border-brand-night/10 bg-brand-sand/45 p-5">
            <point.icon className="text-brand-coral" size={22} />
            <h3 className="mt-3 font-semibold text-brand-night">{point.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-night/70">{point.description}</p>
          </article>
        ))}
      </div>
    </Container>
  </section>
);
