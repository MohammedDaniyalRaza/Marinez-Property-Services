import { BeforeAfterSlider } from '../components/sections/BeforeAfterSlider';
import { BentoServicesGrid } from '../components/sections/BentoServicesGrid';
import { FacebookVideoSection } from '../components/sections/FacebookVideoSection';
import { FinalCtaBand } from '../components/sections/FinalCtaBand';
import { HolidaySpotlight } from '../components/sections/HolidaySpotlight';
import { HomeHero } from '../components/sections/HomeHero';
import { HowItWorks } from '../components/sections/HowItWorks';
import { InteractiveShowcase } from '../components/sections/InteractiveShowcase';
import { PinnedWhyUs } from '../components/sections/PinnedWhyUs';
import { ServiceAreaMap } from '../components/sections/ServiceAreaMap';
import { ServiceMarquee } from '../components/sections/ServiceMarquee';
import { TestimonialsCarousel } from '../components/sections/TestimonialsCarousel';
import { TpsMembershipSection } from '../components/sections/TpsMembershipSection';

export function HomePage() {
  return (
    <>
      <HomeHero />
      <ServiceMarquee />
      <InteractiveShowcase />
      <BentoServicesGrid />
      <PinnedWhyUs />
      <BeforeAfterSlider />
      <HolidaySpotlight />
      <TpsMembershipSection />
      <FacebookVideoSection />
      <HowItWorks />
      <TestimonialsCarousel />
      <ServiceAreaMap />
      <FinalCtaBand />
    </>
  );
}
