import Link from "next/link";

import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/Button";

export const OrderCtaSection = () => (
  <section className="py-16 sm:py-20">
    <Container className="rounded-[2rem] bg-brand-palm p-8 text-white sm:p-12">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/75">Ordena en línea</p>
          <h2 className="mt-2 font-heading text-4xl">Pide para recoger, rápido y sin complicaciones</h2>
          <p className="mt-3 max-w-xl text-sm text-white/80 sm:text-base">
            Haz tu orden en minutos. Este frontend ya está preparado para conectarse luego con pagos seguros,
            envío de orden al backend y estado de cocina en tiempo real.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 lg:justify-end">
          <Link href="/order">
            <Button variant="ghost" className="bg-white text-brand-night hover:bg-brand-sand">
              Empezar orden
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="secondary" className="bg-brand-night text-white hover:bg-black">
              Reservar mesa grupal
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  </section>
);
