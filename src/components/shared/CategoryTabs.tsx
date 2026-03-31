"use client";

import { cn } from "@/lib/utils";
import type { MenuCategory } from "@/types/menu";

interface CategoryTabsProps {
  categories: MenuCategory[];
  activeCategory: MenuCategory | "All";
  onChange: (value: MenuCategory | "All") => void;
}

export const CategoryTabs = ({ categories, activeCategory, onChange }: CategoryTabsProps) => (
  <div className="flex flex-wrap gap-2" role="tablist" aria-label="Categorías del menú">
    <button
      className={cn(
        "min-h-11 rounded-full px-4 text-sm font-semibold transition",
        activeCategory === "All"
          ? "bg-brand-night text-white"
          : "bg-white text-brand-night ring-1 ring-brand-night/15 hover:bg-brand-sand"
      )}
      onClick={() => onChange("All")}
      type="button"
    >
      Todos
    </button>
    {categories.map((category) => (
      <button
        key={category}
        className={cn(
          "min-h-11 rounded-full px-4 text-sm font-semibold transition",
          activeCategory === category
            ? "bg-brand-night text-white"
            : "bg-white text-brand-night ring-1 ring-brand-night/15 hover:bg-brand-sand"
        )}
        onClick={() => onChange(category)}
        type="button"
      >
        {category}
      </button>
    ))}
  </div>
);
