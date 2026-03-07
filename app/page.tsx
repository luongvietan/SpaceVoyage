import FaqCtaSection from "@/components/FaqCtaSection";
import LaunchTimelineSection from "@/components/LaunchTimelineSection";
import SeatClassesSection from "@/components/SeatClassesSection";
import SpaceHero from "@/components/SpaceHero";
import VoyageShowcaseSection from "@/components/VoyageShowcaseSection";

export default function Home() {
  return (
    <main>
      <SpaceHero />
      <VoyageShowcaseSection />
      <LaunchTimelineSection />
      <SeatClassesSection />
      <FaqCtaSection />
    </main>
  );
}
