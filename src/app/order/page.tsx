import type { Metadata } from "next";

import { OrderPageClient } from "@/components/order/OrderPageClient";

export const metadata: Metadata = {
  title: "Ordenar | Tres Monos",
  description: "Experiencia de orden en línea para recoger, con carrito y checkout en modo frontend simulado."
};

export default function OrderPage() {
  return <OrderPageClient />;
}
