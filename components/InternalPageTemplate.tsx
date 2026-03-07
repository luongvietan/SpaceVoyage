import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

type InfoCard = {
  title: string;
  description: string;
};

type TimelineStep = {
  label: string;
  title: string;
  description: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

type InternalPageTemplateProps = {
  eyebrow: string;
  title: string;
  description: string;
  highlights: InfoCard[];
  timeline: TimelineStep[];
  faqs: FaqItem[];
  ctaTitle: string;
  ctaDescription: string;
  ctaLabel: string;
  ctaHref: string;
};

export default function InternalPageTemplate({
  eyebrow,
  title,
  description,
  highlights,
  timeline,
  faqs,
  ctaTitle,
  ctaDescription,
  ctaLabel,
  ctaHref,
}: InternalPageTemplateProps) {
  return (
    <main className="relative overflow-hidden bg-[#071126] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(122,170,233,0.34),transparent_42%),radial-gradient(circle_at_90%_90%,rgba(18,39,72,0.78),transparent_48%)]" />

      <section className="relative min-h-screen overflow-hidden pt-24 section-blend">
        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-4 py-20 sm:px-6 md:px-10">
          <Link
            href="/"
            className="liquid-glass refine-link mb-8 inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white/90 font-body"
          >
            <ArrowLeft className="h-4 w-4" />
            Back Home
          </Link>

          <div className="liquid-glass refine-card max-w-5xl rounded-[34px] p-8 md:p-12">
            <p className="text-xs tracking-[0.16em] text-white/75 uppercase font-body">{eyebrow}</p>
            <h1 className="mt-4 text-5xl leading-[0.9] tracking-[-1px] font-heading italic sm:text-6xl md:text-7xl">
              {title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 font-body">{description}</p>
          </div>
        </div>
      </section>

      <section className="relative min-h-screen overflow-hidden section-blend">
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 md:px-10 md:py-24">
          <p className="text-xs tracking-[0.16em] text-white/70 uppercase font-body">Highlights</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {highlights.map((card) => (
              <article key={card.title} className="liquid-glass refine-card rounded-[28px] p-6">
                <h2 className="text-3xl leading-tight font-heading italic">{card.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-white/85 font-body">{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative min-h-screen overflow-hidden section-blend">
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 md:px-10 md:py-24">
          <p className="text-xs tracking-[0.16em] text-white/70 uppercase font-body">Timeline</p>
          <div className="mt-8 space-y-4">
            {timeline.map((step) => (
              <article
                key={step.title}
                className="liquid-glass refine-card grid gap-4 rounded-[28px] p-6 md:grid-cols-[120px_1fr]"
              >
                <p className="text-3xl leading-none text-white/80 font-heading italic md:text-4xl">{step.label}</p>
                <div>
                  <h3 className="text-2xl leading-tight font-body font-semibold md:text-3xl">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/85 font-body md:text-base">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative min-h-screen overflow-hidden section-blend">
        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-5 px-4 py-20 sm:px-6 md:px-10 md:py-24 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            {faqs.map((item) => (
              <article key={item.question} className="liquid-glass refine-card rounded-[28px] p-6">
                <h3 className="text-xl leading-snug font-body font-semibold">{item.question}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/85 font-body md:text-base">{item.answer}</p>
              </article>
            ))}
          </div>

          <aside className="liquid-glass-strong refine-card rounded-[30px] p-7 md:p-8">
            <p className="text-xs tracking-[0.16em] text-white/70 uppercase font-body">Next Step</p>
            <h3 className="mt-3 text-4xl leading-none font-heading italic md:text-5xl">{ctaTitle}</h3>
            <p className="mt-4 text-sm leading-relaxed text-white/85 font-body md:text-base">{ctaDescription}</p>
            <Link
              href={ctaHref}
              className="refine-button mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black font-body"
            >
              {ctaLabel}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
}
