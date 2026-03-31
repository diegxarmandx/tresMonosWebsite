import type { Metadata } from "next";

import { AboutPageContent } from "@/components/about/AboutPageContent";

export const metadata: Metadata = {
  title: "Nosotros | Tres Monos",
  description: "Conoce la historia, el ambiente y la propuesta culinaria de Tres Monos en Mayagüez."
};

export default function AboutPage() {
  return <AboutPageContent />;
}
