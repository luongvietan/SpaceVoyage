import FaqCtaSection from "@/components/FaqCtaSection";
import LaunchTimelineSection from "@/components/LaunchTimelineSection";
import LenisProvider from "@/components/LenisProvider";
import SeatClassesSection from "@/components/SeatClassesSection";
import SpaceFooter from "@/components/SpaceFooter";
import SpaceHero from "@/components/SpaceHero";
import VoyageShowcaseSection from "@/components/VoyageShowcaseSection";

export default function Home() {
  return (
    <LenisProvider>
      <main>
        <SpaceHero />
        <VoyageShowcaseSection />
        <LaunchTimelineSection />
        <SeatClassesSection />
        <FaqCtaSection />
        <SpaceFooter />
      </main>
    </LenisProvider>
  );
}
