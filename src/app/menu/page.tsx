import type { Metadata } from "next";

import { MenuPageClient } from "@/components/menu/MenuPageClient";

export const metadata: Metadata = {
  title: "Menú | Tres Monos",
  description: "Explora el menú de Tres Monos con mofongos, mariscos, carnes, frituras, postres y bebidas."
};

export default function MenuPage() {
  return <MenuPageClient />;
}
