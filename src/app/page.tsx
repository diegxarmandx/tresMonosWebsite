import menuData from "@/data/menu.json";
import testimonialsData from "@/data/testimonials.json";

import { AboutPreviewSection } from "@/components/home/AboutPreviewSection";
import { FeaturedDishesSection } from "@/components/home/FeaturedDishesSection";
import { HeroSection } from "@/components/home/HeroSection";
import { OrderCtaSection } from "@/components/home/OrderCtaSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { WhyUsSection } from "@/components/home/WhyUsSection";
import type { MenuItem } from "@/types/menu";
import type { Testimonial } from "@/types/testimonial";

export default function HomePage() {
  const featuredItems = (menuData as MenuItem[])
    .filter((item) => item.featured)
    .slice(0, 3);

  return (
    <>
      <HeroSection />
      <FeaturedDishesSection items={featuredItems} />
      <AboutPreviewSection />
      <WhyUsSection />
      <TestimonialsSection testimonials={testimonialsData as Testimonial[]} />
      <OrderCtaSection />
    </>
  );
}
