import InternalPageTemplate from "@/components/InternalPageTemplate";

export default function PrivacyPage() {
  return (
    <InternalPageTemplate
      eyebrow="Privacy"
      title="Your Data, Protected Clearly"
      description="Review how we collect, process, and protect personal information across mission planning, booking, and communications."
      highlights={[
        {
          title: "Data Collection",
          description: "We collect only information required for secure booking, planning, and communication support.",
        },
        {
          title: "Data Usage",
          description: "Your data is used to operate services, improve mission readiness, and deliver support.",
        },
        {
          title: "Data Protection",
          description: "Security controls, access policies, and monitoring systems protect data throughout its lifecycle.",
        },
      ]}
      timeline={[
        {
          label: "Scope",
          title: "Information Mapping",
          description: "Define what personal data is processed and for what purpose.",
        },
        {
          label: "Control",
          title: "User Rights",
          description: "Access, correction, and deletion requests are handled through dedicated support channels.",
        },
        {
          label: "Update",
          title: "Policy Revisions",
          description: "Policy changes are communicated clearly with effective dates and summaries.",
        },
      ]}
      faqs={[
        {
          question: "Can I request data deletion?",
          answer: "Yes, deletion requests can be submitted through contact support channels.",
        },
        {
          question: "Do you share data with third parties?",
          answer: "Only when necessary for service delivery, compliance, or approved partnerships.",
        },
        {
          question: "How long is data retained?",
          answer: "Retention periods vary by data type and legal requirements, then are securely removed.",
        },
      ]}
      ctaTitle="Need a Privacy Clarification?"
      ctaDescription="Contact us for detailed privacy questions and specific data rights requests."
      ctaLabel="Contact Support"
      ctaHref="/contact"
    />
  );
}
