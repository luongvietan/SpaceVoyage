"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { REVEAL_VIEWPORT, REVEAL_VISIBLE, revealInitial, revealTransition } from "@/lib/motion";

const voyageCards = [
  {
    destination: "Mars Frontier",
    window: "Departure Window / 2026 Q4",
    image:
      "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=1200&q=80",
    description:
      "Our first crewed interplanetary journey engineered for long-range comfort, adaptive shielding, and precision orbital arrival.",
  },
  {
    destination: "Europa Echo",
    window: "Research Mission / 2027 Q2",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    description:
      "A deep-science expedition with autonomous survey drones and ice-penetration labs to explore hidden ocean signatures.",
  },
  {
    destination: "Titan Horizon",
    window: "Luxury Explorer / 2028 Q1",
    image:
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1200&q=80",
    description:
      "A cinematic orbital cruise around Saturn's moon with panoramic decks, low-gravity suites, and guided stellar observation.",
  },
];

export default function VoyageShowcaseSection() {
  return (
    <section className="relative min-h-screen overflow-hidden border-t border-white/8 bg-[#0f1d33] text-foreground">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(156,188,229,0.32),transparent_45%),radial-gradient(circle_at_bottom,rgba(25,47,82,0.7),transparent_55%)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-6 py-24 md:px-10 lg:px-16">
        <motion.div
          className="liquid-glass mb-5 inline-flex w-fit items-center rounded-full px-4 py-1.5 text-xs font-medium tracking-[0.18em] text-foreground/90 uppercase font-body"
          initial={revealInitial(18, 10)}
          whileInView={REVEAL_VISIBLE}
          viewport={REVEAL_VIEWPORT}
          transition={revealTransition(0, 0.55)}
        >
          Next Chapter
        </motion.div>

        <motion.h2
          className="max-w-4xl text-5xl leading-[0.86] tracking-[-2px] text-white font-heading italic md:text-6xl lg:text-7xl"
          initial={revealInitial(28, 10)}
          whileInView={REVEAL_VISIBLE}
          viewport={REVEAL_VIEWPORT}
          transition={revealTransition(0.05, 0.65)}
        >
          Choose The Voyage That Redefines Your Sense of Distance
        </motion.h2>

        <motion.p
          className="mt-3 max-w-3xl text-sm leading-relaxed text-white/90 font-body font-light md:text-base"
          initial={revealInitial(20, 10)}
          whileInView={REVEAL_VISIBLE}
          viewport={REVEAL_VIEWPORT}
          transition={revealTransition(0.15)}
        >
          From iconic planetary firsts to immersive orbital expeditions, each route combines mission-grade
          technology with refined passenger experience-designed for safety, wonder, and unforgettable
          perspective.
        </motion.p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {voyageCards.map((card, index) => (
            <motion.article
              key={card.destination}
              className="liquid-glass refine-card rounded-[28px] p-6"
              initial={revealInitial(24, 10)}
              whileInView={REVEAL_VISIBLE}
              viewport={REVEAL_VIEWPORT}
              transition={revealTransition(0.2 + index * 0.12, 0.55)}
            >
              <div className="cinematic-media relative mb-5 h-40 rounded-2xl">
                <Image
                  src={card.image}
                  alt={card.destination}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 30vw, 100vw"
                />
              </div>
              <p className="text-xs tracking-[0.16em] text-white/75 uppercase font-body">{card.window}</p>
              <h3 className="mt-3 text-4xl leading-none text-white font-heading italic">{card.destination}</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/85 font-body">{card.description}</p>
              <button className="liquid-glass-strong refine-button mt-6 flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white font-body">
                Explore Route
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
