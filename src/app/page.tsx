import { createPageMetadata, defaultSiteDescription } from "@/lib/site-metadata";

import { AboutSection } from "@/components/home/about-section";
import { ContactCta } from "@/components/home/contact-cta";
import { FeaturedProjectsSection } from "@/components/home/featured-projects-section";
import { HeroSection } from "@/components/home/hero-section";
import { ProcessSection } from "@/components/home/process-section";
import { ServicesSection } from "@/components/home/services-section";
import { StatisticsSection } from "@/components/home/statistics-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";

export const metadata = createPageMetadata({
  description: defaultSiteDescription,
  path: "/",
});

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <FeaturedProjectsSection />
      <StatisticsSection />
      <ProcessSection />
      <TestimonialsSection />
      <ContactCta />
    </>
  );
}
