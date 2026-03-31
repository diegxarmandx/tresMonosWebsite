export const menuCategories = [
  "Bowls",
  "Tapas",
  "La Carta",
  "Postres",
  "Cocteles y Clasicos"
] as const;

export type MenuCategory = (typeof menuCategories)[number];
export type MenuTag = "Popular" | "Picante";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: MenuCategory;
  tags?: MenuTag[];
  detailImage?: string;
  detailButtonLabel?: string;
  featured?: boolean;
}
