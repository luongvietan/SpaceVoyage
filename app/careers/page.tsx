import InternalPageTemplate from "@/components/InternalPageTemplate";

export default function CareersPage() {
  return (
    <InternalPageTemplate
      eyebrow="Careers"
      title="Build the Future With Us"
      description="Join teams across spacecraft engineering, mission operations, and design to shape the next chapter of human exploration."
      highlights={[
        {
          title: "Engineering",
          description: "Design and optimize mission systems spanning propulsion, habitat, and onboard intelligence.",
        },
        {
          title: "Operations",
          description: "Coordinate mission planning, flight readiness, and cross-functional execution worldwide.",
        },
        {
          title: "Design & Experience",
          description: "Craft premium traveler interfaces, environments, and communication systems.",
        },
      ]}
      timeline={[
        {
          label: "Apply",
          title: "Role Screening",
          description: "Initial review aligned to mission teams, domain depth, and collaboration fit.",
        },
        {
          label: "Build",
          title: "Technical Loop",
          description: "Problem-solving rounds focused on real scenarios from production mission systems.",
        },
        {
          label: "Launch",
          title: "Onboarding",
          description: "Structured integration into product, engineering, or operations squads.",
        },
      ]}
      faqs={[
        {
          question: "Do you hire remote roles?",
          answer: "Hybrid and remote roles are available depending on team and mission function.",
        },
        {
          question: "What backgrounds are prioritized?",
          answer: "Aerospace, systems engineering, product design, data, and operations experience are all valued.",
        },
        {
          question: "Are internships offered?",
          answer: "Seasonal internship programs are available for selected technical and design tracks.",
        },
      ]}
      ctaTitle="Explore Open Roles"
      ctaDescription="Talk with our recruiting team and find the mission stream where your strengths can create impact."
      ctaLabel="Contact Recruiting"
      ctaHref="/contact"
    />
  );
}
