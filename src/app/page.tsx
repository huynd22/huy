import { Header, Footer } from "@/components/layout";
import {
  HeroSection,
  FeaturesSection,
  PartnersSection,
  AboutSection,
  ProcessSection,
  AchievementsSection,
  TestimonialsSection,
  FAQSection,
  ContactSection,
} from "@/components/sections";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <PartnersSection />
      <AboutSection />
      <ProcessSection />
      <AchievementsSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
