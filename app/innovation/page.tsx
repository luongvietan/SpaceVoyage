import InternalPageTemplate from "@/components/InternalPageTemplate";

export default function InnovationPage() {
  return (
    <InternalPageTemplate
      eyebrow="Innovation"
      title="Engineering the Next Era of Travel"
      description="Learn how propulsion systems, adaptive habitat design, and autonomous navigation technology power every Astral Voyages mission."
      highlights={[
        {
          title: "Adaptive Habitat",
          description: "Cabin intelligence dynamically tunes pressure, lighting, and thermal comfort during long transit phases.",
        },
        {
          title: "Navigation AI",
          description: "Predictive route assistance improves precision and response times across mission-critical operations.",
        },
        {
          title: "Energy Systems",
          description: "High-efficiency storage and conversion architecture supports extended voyage endurance.",
        },
      ]}
      timeline={[
        {
          label: "R&D",
          title: "Concept Validation",
          description: "Prototype testing in simulated and orbital environments validates each subsystem.",
        },
        {
          label: "OPS",
          title: "Operational Integration",
          description: "Certified modules are integrated into mission stacks with telemetry monitoring.",
        },
        {
          label: "LIVE",
          title: "In-Mission Feedback",
          description: "Continuous performance insights inform iterative upgrades for upcoming launches.",
        },
      ]}
      faqs={[
        {
          question: "How often are systems upgraded?",
          answer: "Critical upgrades follow each major mission cycle with phased deployment controls.",
        },
        {
          question: "Is technology independently verified?",
          answer: "Yes, core systems undergo third-party validation and safety assurance programs.",
        },
        {
          question: "Can partners co-develop modules?",
          answer: "Innovation partnerships are available through our technical collaboration framework.",
        },
      ]}
      ctaTitle="Partner On Future Systems"
      ctaDescription="Join engineering pilots and co-development initiatives shaping the next generation mission stack."
      ctaLabel="Contact Innovation Team"
      ctaHref="/contact"
    />
  );
}
