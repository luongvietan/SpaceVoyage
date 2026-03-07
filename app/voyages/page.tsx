import InternalPageTemplate from "@/components/InternalPageTemplate";

export default function VoyagesPage() {
  return (
    <InternalPageTemplate
      eyebrow="Voyages"
      title="Curated Missions Beyond Earth"
      description="Explore interplanetary routes designed for discovery, comfort, and mission-grade safety across orbital and deep-space destinations."
      highlights={[
        {
          title: "Orbital Escapes",
          description: "Short-format luxury journeys with panoramic observatories and guided celestial navigation experiences.",
        },
        {
          title: "Research Voyages",
          description: "Science-led expeditions with onboard labs and collaborative mission tracks for exploratory teams.",
        },
        {
          title: "Deep-Space Routes",
          description: "Long-horizon itineraries supported by adaptive habitat systems, resilience training, and concierge operations.",
        },
      ]}
      timeline={[
        {
          label: "01",
          title: "Route Selection",
          description: "Match mission profile, duration, and cabin class to your exploration goals.",
        },
        {
          label: "02",
          title: "Readiness Program",
          description: "Complete simulation modules, health calibration, and mission orientation.",
        },
        {
          label: "03",
          title: "Departure Window",
          description: "Finalize launch timeline and embark with real-time support from mission control.",
        },
      ]}
      faqs={[
        {
          question: "Can I combine orbital and deep-space itineraries?",
          answer: "Yes. Multi-leg voyages are available with custom scheduling between mission windows.",
        },
        {
          question: "Do voyages include onboard specialists?",
          answer: "Each route includes trained crew, medical oversight, and experience guides.",
        },
        {
          question: "How far ahead should I reserve?",
          answer: "Recommended lead time is 3-9 months depending on route demand and seat class.",
        },
      ]}
      ctaTitle="Design Your Mission Track"
      ctaDescription="Start with a route consult to align destinations, timeline, and onboard experience to your ambition."
      ctaLabel="Plan My Voyage"
      ctaHref="/plan-launch"
    />
  );
}
