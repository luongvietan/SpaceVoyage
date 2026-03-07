import InternalPageTemplate from "@/components/InternalPageTemplate";

export default function SafetyPage() {
  return (
    <InternalPageTemplate
      eyebrow="Safety"
      title="Mission Safety by Design"
      description="Every journey includes layered shielding, continuous monitoring, and rigorous protocol systems validated through orbital simulations."
      highlights={[
        {
          title: "Shielding Layers",
          description: "Multi-zone protective structures reduce exposure across dynamic space environments.",
        },
        {
          title: "Live Monitoring",
          description: "Telemetry, crew diagnostics, and automated alerts operate continuously in mission transit.",
        },
        {
          title: "Emergency Protocols",
          description: "Redundant procedures and crew drills ensure readiness for off-nominal scenarios.",
        },
      ]}
      timeline={[
        {
          label: "Audit",
          title: "Pre-Mission Verification",
          description: "All modules are reviewed against strict safety benchmarks before deployment.",
        },
        {
          label: "Train",
          title: "Crew & Passenger Drills",
          description: "Structured rehearsals prepare all onboard participants for critical events.",
        },
        {
          label: "Track",
          title: "Continuous Assurance",
          description: "In-flight monitoring and live intervention pathways remain active at all times.",
        },
      ]}
      faqs={[
        {
          question: "Is there onboard medical support?",
          answer: "Yes. Medical systems and trained specialists are part of every crewed mission.",
        },
        {
          question: "Are systems manually overridable?",
          answer: "Critical autonomous systems include human override protocols for controlled intervention.",
        },
        {
          question: "How is risk communicated to passengers?",
          answer: "Each passenger receives a clear mission risk brief and preparedness protocol package.",
        },
      ]}
      ctaTitle="Review Safety Framework"
      ctaDescription="Get a guided walkthrough of our safety architecture and mission assurance standards."
      ctaLabel="Request Safety Brief"
      ctaHref="/contact"
    />
  );
}
