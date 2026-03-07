import InternalPageTemplate from "@/components/InternalPageTemplate";

export default function TermsPage() {
  return (
    <InternalPageTemplate
      eyebrow="Terms"
      title="Terms and Conditions"
      description="Read the terms governing bookings, cancellations, mission participation, and usage of Astral Voyages digital services."
      highlights={[
        {
          title: "Booking Terms",
          description: "Understand reservation conditions, pricing commitments, and payment timelines.",
        },
        {
          title: "Mission Participation",
          description: "Review traveler obligations, eligibility requirements, and readiness expectations.",
        },
        {
          title: "Platform Use",
          description: "Access rules, acceptable use standards, and account responsibilities are defined here.",
        },
      ]}
      timeline={[
        {
          label: "I",
          title: "Agreement Acceptance",
          description: "Use of services indicates acceptance of current terms and applicable policies.",
        },
        {
          label: "II",
          title: "Operational Conditions",
          description: "Mission and booking terms may vary by route, schedule, and regulatory context.",
        },
        {
          label: "III",
          title: "Amendments",
          description: "Updates are published with notice and effective date transparency.",
        },
      ]}
      faqs={[
        {
          question: "What happens if I cancel a booking?",
          answer: "Cancellation outcomes depend on route-specific windows and booking class conditions.",
        },
        {
          question: "Can terms vary by destination?",
          answer: "Yes, some operational terms differ based on mission profile and jurisdiction.",
        },
        {
          question: "Where can I get legal clarification?",
          answer: "Please contact support for term interpretation and policy clarification.",
        },
      ]}
      ctaTitle="Questions About Terms?"
      ctaDescription="Our team can help clarify booking or participation terms before you commit."
      ctaLabel="Speak With Support"
      ctaHref="/contact"
    />
  );
}
