import BrowseByCategory from "@/features/home/components/BrowseByCategory";
import { FeaturedProperties } from "@/features/home/components/FeaturedProperties";
import FinalCta from "@/features/home/components/FinalCta";
import { HeroSection } from "@/features/home/components/HeroSection";
import HowItWorks from "@/features/home/components/HowItWorks";
import PopularAreas from "@/features/home/components/PopularAreas";
import Testimonials from "@/features/home/components/Testimonials";
import TrustStrip from "@/features/home/components/TrustStrip";
import { WhyRentNest } from "@/features/home/components/WhyRentNest";
import { mockAreas, mockProperties } from "@/features/home/data/mockData";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <TrustStrip />
      <FeaturedProperties properties={mockProperties} />
      <BrowseByCategory />
      <PopularAreas areas={mockAreas} />
      <HowItWorks />
      <WhyRentNest />
      <Testimonials />
      <FinalCta />
    </main>
  );
}
