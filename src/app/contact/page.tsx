import type { Metadata } from "next";

import { ContactPageClient } from "@/components/contact/ContactPageClient";

export const metadata: Metadata = {
  title: "Contacto | Tres Monos",
  description: "Contáctanos para reservaciones, eventos, catering y más información de Tres Monos."
};

export default function ContactPage() {
  return <ContactPageClient />;
}
