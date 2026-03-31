import { Quote } from "lucide-react";

import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import type { Testimonial } from "@/types/testimonial";

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export const TestimonialsSection = ({ testimonials }: TestimonialsSectionProps) => (
  <section className="py-16 sm:py-20">
    <Container className="space-y-8">
      <SectionHeading
        eyebrow="Lo que dice la gente"
        title="Quién prueba Tres Monos, vuelve"
        align="center"
      />
      <div className="grid gap-4 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article key={testimonial.id} className="rounded-3xl border border-brand-night/10 bg-white p-6 shadow-soft">
            <Quote size={18} className="text-brand-coral" />
            <p className="mt-3 text-sm leading-relaxed text-brand-night/75">{testimonial.quote}</p>
            <p className="mt-4 font-semibold text-brand-night">{testimonial.name}</p>
            <p className="text-xs text-brand-night/60">{testimonial.role}</p>
          </article>
        ))}
      </div>
    </Container>
  </section>
);
