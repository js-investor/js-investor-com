import KonzultaciaHeroSection from "@/components/sections/KonzultaciaHeroSection";
import KonzultaciaZlozenyUrokSection from "@/components/sections/KonzultaciaZlozenyUrokSection";
import StatsBarSection from "@/components/sections/StatsBarSection";
import KonzultaciaPostStatsExtremySection from "@/components/sections/KonzultaciaPostStatsExtremySection";
import DobryPoradcaSection from "@/components/sections/DobryPoradcaSection";
import UvodnyHovorSection from "@/components/sections/UvodnyHovorSection";
import VysledkySection from "@/components/sections/VysledkySection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import FazySection from "@/components/sections/FazySection";
import MobileOnlyImageSection from "@/components/sections/MobileOnlyImageSection";
import VideoSection from "@/components/sections/VideoSection";
import FaqSection from "@/components/sections/FaqSection";
import DeferredBookingSection from "@/components/DeferredBookingSection";
import MoreReviewsSection from "@/components/sections/MoreReviewsSection";
import FooterSection from "@/components/sections/FooterSection";

const Konzultacia = () => (
  <main>
    <KonzultaciaHeroSection />
    <StatsBarSection />
    <KonzultaciaZlozenyUrokSection />
    <KonzultaciaPostStatsExtremySection />
    <DobryPoradcaSection ctaLabel="Chcem začať teraz" />
    <UvodnyHovorSection ctaLabel="Chcem začať teraz" />
    <VysledkySection ctaLabel="Chcem začať teraz" />
    <TestimonialSection ctaLabel="Chcem začať teraz" />
    <FazySection />
    <MobileOnlyImageSection />
    {false && <VideoSection ctaLabel="Chcem začať teraz" />}
    <FaqSection />
    <DeferredBookingSection />
    <MoreReviewsSection ctaLabel="Chcem začať teraz" />
    <FooterSection />
  </main>
);

export default Konzultacia;
