"use client";

import { useEffect, useMemo, useState } from "react";

import { CategoryTabs } from "@/components/shared/CategoryTabs";
import { Container } from "@/components/shared/Container";
import { DishCard } from "@/components/shared/DishCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/Button";
import { menuApi } from "@/lib/api/menuApi";
import { menuCategories, type MenuCategory, type MenuItem } from "@/types/menu";

export const MenuPageClient = () => {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [activeCategory, setActiveCategory] = useState<MenuCategory | "All">("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const loadMenu = async () => {
      const result = await menuApi.getMenuItems();
      if (!mounted) return;
      setItems(result);
      setLoading(false);
    };

    void loadMenu();

    return () => {
      mounted = false;
    };
  }, []);

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") return items;
    return items.filter((item) => item.category === activeCategory);
  }, [activeCategory, items]);

  return (
    <div className="py-14 sm:py-20">
      <Container className="space-y-8">
        <SectionHeading
          eyebrow="Nuestro menú"
          title="Comida puertorriqueña para todos los gustos"
          description="Desde mofongo y mariscos hasta frituras, postres y bebidas hechas con sabor criollo."
        />

        <CategoryTabs
          categories={[...menuCategories]}
          activeCategory={activeCategory}
          onChange={setActiveCategory}
        />

        {loading ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3" aria-live="polite">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="overflow-hidden rounded-3xl border border-brand-night/10 bg-white p-4">
                <div className="h-44 animate-pulse rounded-2xl bg-brand-sand" />
                <div className="mt-4 h-4 w-2/3 animate-pulse rounded bg-brand-sand" />
                <div className="mt-3 h-3 w-full animate-pulse rounded bg-brand-sand" />
                <div className="mt-2 h-3 w-3/4 animate-pulse rounded bg-brand-sand" />
              </div>
            ))}
          </div>
        ) : null}

        {!loading && filteredItems.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-brand-night/25 bg-white p-10 text-center">
            <p className="text-base text-brand-night/75">Aún no hay platos en esta categoría.</p>
            <Button className="mt-4" variant="ghost" onClick={() => setActiveCategory("All")}>
              Ver todos los platos
            </Button>
          </div>
        ) : null}

        {!loading && filteredItems.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredItems.map((item) => (
              <DishCard key={item.id} item={item} />
            ))}
          </div>
        ) : null}
      </Container>
    </div>
  );
};
