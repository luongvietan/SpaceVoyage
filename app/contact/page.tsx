import InternalPageTemplate from "@/components/InternalPageTemplate";

export default function ContactPage() {
  return (
    <InternalPageTemplate
      eyebrow="Contact"
      title="Speak With Mission Concierge"
      description="Connect with our team for booking support, partnership inquiries, or media requests. We are here to guide your next step."
      highlights={[
        {
          title: "Booking Support",
          description: "Get route, pricing, and seat guidance from a dedicated mission concierge.",
        },
        {
          title: "Partnerships",
          description: "Discuss research, commercial, and innovation collaboration opportunities.",
        },
        {
          title: "Media & Press",
          description: "Route interview requests and communications inquiries to the right team quickly.",
        },
      ]}
      timeline={[
        {
          label: "1",
          title: "Submit Inquiry",
          description: "Share your goals, timeline, and preferred route or topic.",
        },
        {
          label: "2",
          title: "Consultation",
          description: "Our team responds with guidance, options, and next steps.",
        },
        {
          label: "3",
          title: "Action Plan",
          description: "Receive a clear path toward booking, partnership, or media engagement.",
        },
      ]}
      faqs={[
        {
          question: "How quickly does your team respond?",
          answer: "Most inquiries receive a response within one business day.",
        },
        {
          question: "Can I request a private consultation?",
          answer: "Yes, private mission consultation slots can be scheduled by request.",
        },
        {
          question: "Do you support international customers?",
          answer: "Yes. Support is available globally across planning and mission onboarding.",
        },
      ]}
      ctaTitle="Start the Conversation"
      ctaDescription="Tell us your mission intent and we will connect you with the right specialist."
      ctaLabel="Back to Plan Launch"
      ctaHref="/plan-launch"
    />
  );
}
