"use client";

import { ArrowUpRight, Check } from "lucide-react";
import { motion } from "motion/react";
import { REVEAL_VIEWPORT, REVEAL_VISIBLE, revealInitial, revealTransition } from "@/lib/motion";

const plans = [
  {
    name: "Orbital",
    price: "$120k",
    note: "per seat",
    tagline: "Perfect for first-time off-world travelers.",
    features: ["3-day orbital itinerary", "Private preparation suite", "Live mission concierge"],
    featured: false,
  },
  {
    name: "Pioneer",
    price: "$420k",
    note: "per seat",
    tagline: "Designed for deep-space voyagers and creators.",
    features: ["14-day deep-space route", "Adaptive gravity cabin", "Priority science deck access"],
    featured: true,
  },
  {
    name: "Legacy",
    price: "$980k",
    note: "per suite",
    tagline: "Ultra-luxury interplanetary experience.",
    features: ["Private suite + observation dome", "Dedicated onboard team", "Custom post-flight archive"],
    featured: false,
  },
];

export default function SeatClassesSection() {
  return (
    <section className="relative min-h-screen overflow-hidden section-blend bg-[#08101f] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(124,173,234,0.25),transparent_45%),radial-gradient(circle_at_0%_100%,rgba(21,45,81,0.8),transparent_48%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-16">
        <motion.div
          className="liquid-glass inline-flex rounded-full px-4 py-1.5 text-xs font-medium tracking-[0.16em] text-white/90 uppercase font-body"
          initial={revealInitial(16, 8)}
          whileInView={REVEAL_VISIBLE}
          viewport={REVEAL_VIEWPORT}
          transition={revealTransition(0, 0.55)}
        >
          Seat Classes
        </motion.div>

        <motion.div
          className="mt-5 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
          initial={revealInitial(20, 10)}
          whileInView={REVEAL_VISIBLE}
          viewport={REVEAL_VIEWPORT}
          transition={revealTransition(0.08, 0.65)}
        >
          <h2 className="max-w-4xl text-5xl leading-[0.86] tracking-[-2px] font-heading italic md:text-6xl lg:text-7xl">
            Select Your Cabin, Define Your Cosmic Perspective
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-white/85 font-body md:text-base">
            Transparent pricing, mission-grade safety, and a seamless path from reservation to liftoff.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.article
              key={plan.name}
              className={`refine-card relative rounded-[30px] p-6 ${
                plan.featured ? "liquid-glass-strong ring-1 ring-white/35" : "liquid-glass"
              }`}
              initial={revealInitial(24, 10)}
              whileInView={REVEAL_VISIBLE}
              viewport={REVEAL_VIEWPORT}
              transition={revealTransition(0.16 + index * 0.12, 0.55)}
            >
              {plan.featured ? (
                <span className="absolute top-6 right-6 inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold text-black font-body">
                  Most Chosen
                </span>
              ) : null}

              <h3 className="mt-2 min-h-10 text-4xl leading-none font-heading italic">{plan.name}</h3>

              <div className="mt-4 flex items-end gap-2">
                <p className="text-4xl leading-none font-body font-semibold">{plan.price}</p>
                <p className="pb-1 text-xs text-white/70 uppercase tracking-[0.12em] font-body">{plan.note}</p>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-white/85 font-body">{plan.tagline}</p>

              <div className="mt-5 space-y-2.5">
                {plan.features.map((feature) => (
                  <p key={feature} className="flex items-center gap-2 text-sm text-white/90 font-body">
                    <Check className="h-4 w-4 shrink-0" />
                    {feature}
                  </p>
                ))}
              </div>

              <button className="refine-button mt-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-black font-body">
                Claim This Seat
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
