"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { REVEAL_VIEWPORT, REVEAL_VISIBLE, revealInitial, revealTransition } from "@/lib/motion";

const footerLinks = [
  { label: "Voyages", href: "#" },
  { label: "Innovation", href: "#" },
  { label: "Safety", href: "#" },
  { label: "Press", href: "#" },
  { label: "Careers", href: "#" },
];

export default function SpaceFooter() {
  return (
    <footer className="relative min-h-screen overflow-hidden bg-[#040a14] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(95,152,224,0.2),transparent_42%),radial-gradient(circle_at_100%_100%,rgba(17,39,72,0.75),transparent_45%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-10 pt-20 md:px-10 lg:px-16">
        <motion.div
          className="liquid-glass rounded-[34px] p-7 md:p-10"
          initial={revealInitial(20, 8)}
          whileInView={REVEAL_VISIBLE}
          viewport={REVEAL_VIEWPORT}
          transition={revealTransition()}
        >
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-xs tracking-[0.18em] text-white/70 uppercase font-body">Astral Voyages</p>
              <h2 className="mt-3 max-w-xl text-4xl leading-[0.9] tracking-[-1px] font-heading italic md:text-5xl">
                The Future of Travel Is Written Between the Stars
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/85 font-body md:text-base">
                Join the next generation of explorers and creators shaping humanity&apos;s presence beyond Earth.
              </p>
              <button className="liquid-glass-strong mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium font-body">
                Join Priority Waitlist
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>

            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-2 gap-3 text-sm font-medium font-body">
                {footerLinks.map((link) => (
                  <a key={link.label} href={link.href} className="text-white/85 transition hover:text-white">
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="liquid-glass rounded-2xl p-4">
                <p className="text-xs tracking-[0.14em] text-white/70 uppercase font-body">Mission Bulletin</p>
                <p className="mt-2 text-sm leading-relaxed text-white/85 font-body">
                  Receive monthly launch windows, vessel reveals, and behind-the-scenes engineering stories.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-7 flex flex-col gap-3 text-xs text-white/65 font-body md:flex-row md:items-center md:justify-between"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={REVEAL_VIEWPORT}
          transition={revealTransition(0.1, 0.5)}
        >
          <p>© 2026 Astral Voyages. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="transition hover:text-white">
              Privacy
            </a>
            <a href="#" className="transition hover:text-white">
              Terms
            </a>
            <a href="#" className="transition hover:text-white">
              Contact
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
