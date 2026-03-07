import InternalPageTemplate from "@/components/InternalPageTemplate";

export default function PlanLaunchPage() {
  return (
    <InternalPageTemplate
      eyebrow="Plan Launch"
      title="Prepare Your Mission Timeline"
      description="Start your launch plan with consultation, training milestones, and personalized seat recommendations for your departure window."
      highlights={[
        {
          title: "Mission Blueprint",
          description: "Build a complete launch roadmap from consultation through post-flight support.",
        },
        {
          title: "Training Tracks",
          description: "Receive tailored preparation modules based on route complexity and mission duration.",
        },
        {
          title: "Cabin Strategy",
          description: "Compare seat classes with transparent trade-offs for comfort, scope, and budget.",
        },
      ]}
      timeline={[
        {
          label: "T-90",
          title: "Consultation & Fit",
          description: "Define mission goals and align the ideal route and seat class.",
        },
        {
          label: "T-45",
          title: "Readiness Block",
          description: "Complete health optimization and simulation drills with mission staff.",
        },
        {
          label: "T-0",
          title: "Launch Execution",
          description: "Finalize checks and proceed through guided boarding to liftoff.",
        },
      ]}
      faqs={[
        {
          question: "Can planning be done remotely?",
          answer: "Yes. All planning stages can be handled digitally with concierge support.",
        },
        {
          question: "Do you support group mission planning?",
          answer: "Group itineraries are available for teams, families, and research cohorts.",
        },
        {
          question: "What happens if launch windows shift?",
          answer: "You receive proactive rescheduling options with preserved mission priority.",
        },
      ]}
      ctaTitle="Begin Your Launch Brief"
      ctaDescription="Schedule a one-on-one planning session to lock mission scope, timeline, and cabin pathway."
      ctaLabel="Book Planning Session"
      ctaHref="/contact"
    />
  );
}
