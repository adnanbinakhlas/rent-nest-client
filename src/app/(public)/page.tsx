import CTASection from "@/components/home/CTASection";
import FAQSection from "@/components/home/FAQSection";
import FeaturedPropertiesSection from "@/components/home/FeaturedPropertiesSection";
import HeroSection from "@/components/home/HeroSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import StatsSection from "@/components/home/StatsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";

export default function HomePage() {
  return (
    <>
      <main>
        <HeroSection />
        <StatsSection />
        <FeaturedPropertiesSection />
        <HowItWorksSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
    </>
  );
}
