import type { Metadata } from "next";

import { OrderPageClient } from "@/components/order/OrderPageClient";

export const metadata: Metadata = {
  title: "Ordenar | Tres Monos",
  description: "Ordena en línea en Tres Monos para recoger tu comida en Mayagüez."
};

export default function OrderPage() {
  return <OrderPageClient />;
}
