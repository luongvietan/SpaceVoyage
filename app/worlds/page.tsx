import InternalPageTemplate from "@/components/InternalPageTemplate";

export default function WorldsPage() {
  return (
    <InternalPageTemplate
      eyebrow="Worlds"
      title="Destinations Across the Solar Frontier"
      description="From Mars horizons to icy moon orbits, discover worlds selected for science, beauty, and unforgettable perspective."
      highlights={[
        {
          title: "Mars Valley",
          description: "Immersive orbital views above canyon terrains with guided geological interpretation.",
        },
        {
          title: "Europa Arc",
          description: "Ice-surface reconnaissance journeys focused on oceanic signatures and research landmarks.",
        },
        {
          title: "Titan Halo",
          description: "Cinematic loop routes around Saturn's moon with unmatched atmospheric contrast.",
        },
      ]}
      timeline={[
        {
          label: "A",
          title: "Destination Brief",
          description: "Review conditions, mission length, and observatory windows for each world.",
        },
        {
          label: "B",
          title: "Experience Curation",
          description: "Customize viewing modules, research add-ons, and companion resources.",
        },
        {
          label: "C",
          title: "World Arrival",
          description: "Arrive in orbit with guided live mapping and narrated exploration sessions.",
        },
      ]}
      faqs={[
        {
          question: "Which world is best for first-time travelers?",
          answer: "Mars Valley and short orbital routes are typically the most approachable starting points.",
        },
        {
          question: "Are routes seasonal?",
          answer: "Yes. Windows vary based on orbital alignment and mission safety margins.",
        },
        {
          question: "Can I switch destinations after booking?",
          answer: "Destination changes are possible before final mission lock with concierge assistance.",
        },
      ]}
      ctaTitle="Choose Your First World"
      ctaDescription="Let our team recommend the ideal destination based on travel comfort, duration, and curiosity."
      ctaLabel="Find My Destination"
      ctaHref="/contact"
    />
  );
}
