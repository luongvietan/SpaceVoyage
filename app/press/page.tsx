import InternalPageTemplate from "@/components/InternalPageTemplate";

export default function PressPage() {
  return (
    <InternalPageTemplate
      eyebrow="Press"
      title="Newsroom and Mission Announcements"
      description="Browse press releases, launch updates, and media resources covering Astral Voyages milestones and partnerships."
      highlights={[
        {
          title: "Mission Updates",
          description: "Timely announcements on launches, route expansions, and fleet developments.",
        },
        {
          title: "Media Resources",
          description: "Curated brand assets, approved visuals, and spokesperson information for publication.",
        },
        {
          title: "Partner Stories",
          description: "Joint innovation and collaboration highlights across aerospace and research ecosystems.",
        },
      ]}
      timeline={[
        {
          label: "News",
          title: "Release Cycle",
          description: "Regular updates are published around mission milestones and seasonal windows.",
        },
        {
          label: "Media",
          title: "Press Requests",
          description: "Our communications team supports interviews and background briefings.",
        },
        {
          label: "Archive",
          title: "Historical Record",
          description: "Track all official announcements and key company developments over time.",
        },
      ]}
      faqs={[
        {
          question: "How do I request a press kit?",
          answer: "Use the contact channel and select media inquiry for a prioritized response.",
        },
        {
          question: "Are executive interviews available?",
          answer: "Yes, subject to scheduling and topic alignment with mission communications.",
        },
        {
          question: "Can media attend launch events?",
          answer: "Accredited media access is available for select events and mission windows.",
        },
      ]}
      ctaTitle="Connect With Press Team"
      ctaDescription="Reach communications for interviews, statements, assets, and event accreditation requests."
      ctaLabel="Submit Media Inquiry"
      ctaHref="/contact"
    />
  );
}
