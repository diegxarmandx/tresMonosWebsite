import Image from "next/image";
import type { ReactNode } from "react";

import { Badge } from "@/components/ui/Badge";
import { formatCurrency } from "@/lib/currency";
import type { MenuItem } from "@/types/menu";

interface DishCardProps {
  item: MenuItem;
  action?: ReactNode;
}

export const DishCard = ({ item, action }: DishCardProps) => (
  <article className="group overflow-hidden rounded-3xl border border-brand-night/10 bg-white shadow-soft transition duration-300 hover:-translate-y-0.5 hover:shadow-lg">
    <div className="relative h-56 w-full overflow-hidden">
      <Image
        src={item.image}
        alt={item.name}
        fill
        className="object-cover transition duration-500 group-hover:scale-105"
        sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
      />
    </div>
    <div className="space-y-3 p-5">
      <div className="flex flex-wrap items-center gap-2">
        {item.tags?.map((tag) => (
          <Badge key={tag} tone={tag === "Picante" ? "spicy" : "warm"}>
            {tag}
          </Badge>
        ))}
      </div>
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-heading text-2xl text-brand-night">{item.name}</h3>
        <p className="text-base font-semibold text-brand-night">{formatCurrency(item.price)}</p>
      </div>
      <p className="text-sm leading-relaxed text-brand-night/70">{item.description}</p>
      {item.detailImage ? (
        <details className="group/details rounded-2xl border border-brand-night/15 bg-brand-sand/30 p-3">
          <summary className="cursor-pointer list-none text-sm font-semibold text-brand-night">
            {item.detailButtonLabel ?? "Ver detalles"}
          </summary>
          <div className="mt-3 overflow-hidden rounded-xl border border-brand-night/10">
            <Image
              src={item.detailImage}
              alt={`Menu de ${item.name}`}
              width={900}
              height={1200}
              className="h-auto w-full object-contain"
              sizes="(min-width: 1280px) 25vw, (min-width: 768px) 40vw, 100vw"
            />
          </div>
        </details>
      ) : null}
      {action ? <div className="pt-2">{action}</div> : null}
    </div>
  </article>
);
