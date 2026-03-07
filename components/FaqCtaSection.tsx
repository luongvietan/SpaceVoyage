"use client";

import Image from "next/image";
import { ArrowUpRight, CircleHelp } from "lucide-react";
import { motion } from "motion/react";
import { REVEAL_VIEWPORT, REVEAL_VISIBLE, revealInitial, revealTransition } from "@/lib/motion";

const faqs = [
  {
    question: "How long is mission preparation before launch?",
    answer:
      "Preparation typically runs 8-12 weeks, including medical calibration, safety rehearsal, and personalized mission onboarding.",
  },
  {
    question: "Is deep-space travel safe for first-time passengers?",
    answer:
      "Yes. Every route includes multi-layer shielding, AI-assisted monitoring, and a full onboard response crew trained for critical contingencies.",
  },
  {
    question: "Can I defer my departure after booking?",
    answer:
      "You can reschedule to the next available departure window with concierge support and preserved mission priority status.",
  },
];

export default function FaqCtaSection() {
  return (
    <section className="relative min-h-screen overflow-hidden border-t border-white/8 bg-[#060d1a] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(101,157,226,0.2),transparent_50%),radial-gradient(circle_at_15%_100%,rgba(20,44,78,0.72),transparent_46%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-16">
        <motion.div
          className="liquid-glass inline-flex rounded-full px-4 py-1.5 text-xs font-medium tracking-[0.16em] text-white/90 uppercase font-body"
          initial={revealInitial(14, 8)}
          whileInView={REVEAL_VISIBLE}
          viewport={REVEAL_VIEWPORT}
          transition={revealTransition(0, 0.55)}
        >
          Questions & Booking
        </motion.div>

        <motion.h2
          className="mt-5 max-w-5xl text-5xl leading-[0.86] tracking-[-2px] font-heading italic md:text-6xl lg:text-7xl"
          initial={revealInitial(24, 10)}
          whileInView={REVEAL_VISIBLE}
          viewport={REVEAL_VIEWPORT}
          transition={revealTransition(0.08, 0.65)}
        >
          Everything You Need Before You Reserve Your Seat Beyond Earth
        </motion.h2>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.article
                key={faq.question}
                className="liquid-glass refine-card rounded-[28px] p-6"
                initial={revealInitial(20, 8)}
                whileInView={REVEAL_VISIBLE}
                viewport={REVEAL_VIEWPORT}
                transition={revealTransition(0.12 + index * 0.1, 0.5)}
              >
                <div className="flex items-center gap-2">
                  <CircleHelp className="h-4 w-4 text-white/80" />
                  <h3 className="text-lg leading-snug font-body font-semibold">{faq.question}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/85 font-body md:text-base">
                  {faq.answer}
                </p>
              </motion.article>
            ))}
          </div>

          <motion.aside
            className="liquid-glass-strong refine-card rounded-[30px] p-7 md:p-8"
            initial={revealInitial(24, 10)}
            whileInView={REVEAL_VISIBLE}
            viewport={REVEAL_VIEWPORT}
            transition={revealTransition(0.25)}
          >
            <div className="cinematic-media relative mb-5 h-44 rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=1200&q=80"
                alt="Earth horizon from orbit"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 35vw, 100vw"
              />
            </div>
            <p className="text-xs tracking-[0.16em] text-white/70 uppercase font-body">Priority Access</p>
            <h3 className="mt-3 text-4xl leading-none font-heading italic md:text-5xl">
              Launch With The First Wave
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-white/85 font-body md:text-base">
              Reserve now to receive mission updates, cabin previews, and private consultation with a voyage
              specialist before public availability opens.
            </p>
            <button className="refine-button mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black font-body">
              Book A Private Briefing
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
