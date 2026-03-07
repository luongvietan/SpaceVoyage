"use client";

import Image from "next/image";
import { ArrowUpRight, Rocket, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { REVEAL_VIEWPORT, REVEAL_VISIBLE, revealInitial, revealTransition } from "@/lib/motion";

const timeline = [
  {
    year: "2026",
    phase: "Crew Selection",
    detail: "Medical optimization, mission simulation, and adaptive resilience training begin for all confirmed voyagers.",
    icon: ShieldCheck,
  },
  {
    year: "2027",
    phase: "Orbital Validation",
    detail: "End-to-end vessel verification in Earth orbit, including docking reliability and emergency response systems.",
    icon: Rocket,
  },
  {
    year: "2028",
    phase: "Deep Space Launch",
    detail: "The first complete voyage stack departs for interplanetary transit with live mission telemetry and concierge support.",
    icon: Sparkles,
  },
];

export default function LaunchTimelineSection() {
  return (
    <section className="relative min-h-screen overflow-hidden section-blend bg-[#0a1323] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(115,161,220,0.34),transparent_42%),radial-gradient(circle_at_90%_80%,rgba(26,55,96,0.72),transparent_48%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 md:px-10 md:py-24 lg:px-16">
        <motion.div
          className="liquid-glass inline-flex w-fit items-center rounded-full px-4 py-1.5 text-xs font-medium tracking-[0.16em] text-white/90 uppercase font-body"
          initial={revealInitial(16, 8)}
          whileInView={REVEAL_VISIBLE}
          viewport={REVEAL_VIEWPORT}
          transition={revealTransition(0, 0.55)}
        >
          Launch Timeline
        </motion.div>

        <motion.div
          className="mt-5 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
          initial={revealInitial(22, 10)}
          whileInView={REVEAL_VISIBLE}
          viewport={REVEAL_VIEWPORT}
          transition={revealTransition(0.08, 0.65)}
        >
          <h2 className="max-w-4xl text-4xl leading-[0.9] tracking-[-1px] font-heading italic sm:text-5xl md:text-6xl lg:text-7xl">
            From First Briefing to Interplanetary Liftoff
          </h2>
          <button className="liquid-glass-strong refine-button inline-flex w-fit items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium font-body">
            Reserve Mission Brief
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </motion.div>

        <motion.div
          className="mt-8 grid gap-4 md:grid-cols-3"
          initial={revealInitial(20, 10)}
          whileInView={REVEAL_VISIBLE}
          viewport={REVEAL_VIEWPORT}
          transition={revealTransition(0.12)}
        >
          <div className="cinematic-media relative h-40 rounded-2xl md:col-span-2">
            <Image
              src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=1400&q=80"
              alt="Mission control and launch systems"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 60vw, 100vw"
            />
          </div>
          <div className="cinematic-media relative h-40 rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?auto=format&fit=crop&w=900&q=80"
              alt="Rocket preparing for launch"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 30vw, 100vw"
            />
          </div>
        </motion.div>

        <div className="mt-10 space-y-4">
          {timeline.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.phase}
                className="liquid-glass refine-card grid gap-5 rounded-[30px] p-6 md:grid-cols-[120px_1fr_auto] md:items-center"
                initial={revealInitial(24, 10)}
                whileInView={REVEAL_VISIBLE}
                viewport={REVEAL_VIEWPORT}
                transition={revealTransition(0.16 + index * 0.12, 0.55)}
              >
                <p className="text-4xl leading-none font-heading italic md:text-5xl">{item.year}</p>

                <div>
                  <h3 className="text-2xl leading-tight font-body font-semibold md:text-3xl">{item.phase}</h3>
                  <p className="mt-2 max-w-3xl text-sm leading-relaxed text-white/85 font-body md:text-base">
                    {item.detail}
                  </p>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/12 backdrop-blur-sm">
                  <Icon className="h-5 w-5" />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
