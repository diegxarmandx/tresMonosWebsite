import Link from "next/link";

import { DishCard } from "@/components/shared/DishCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/Button";
import type { MenuItem } from "@/types/menu";

interface FeaturedDishesSectionProps {
  items: MenuItem[];
}

export const FeaturedDishesSection = ({ items }: FeaturedDishesSectionProps) => (
  <section className="py-16 sm:py-20">
    <Container className="space-y-8">
      <SectionHeading
        eyebrow="Platos destacados"
        title="Clásicos boricuas con presentación moderna"
        description="Recetas criollas, ingredientes frescos y sabor real en cada bocado."
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <DishCard key={item.id} item={item} />
        ))}
      </div>
      <div className="flex justify-center">
        <Link href="/menu">
          <Button variant="secondary" className="min-h-14 px-20 text-xl">
            Ver menú completo
          </Button>
        </Link>
      </div>
    </Container>
  </section>
);
