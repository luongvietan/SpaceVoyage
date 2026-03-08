"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { REVEAL_VIEWPORT, REVEAL_VISIBLE, revealInitial, revealTransition } from "@/lib/motion";

const footerLinks = [
  { label: "Voyages", href: "/voyages" },
  { label: "Innovation", href: "/innovation" },
  { label: "Safety", href: "/safety" },
  { label: "Press", href: "/press" },
  { label: "Careers", href: "/careers" },
];

export default function SpaceFooter() {
  return (
    <footer className="relative min-h-[88vh] overflow-hidden section-blend bg-[#040a14] text-white">
      <video
        className="cinematic-media-source absolute inset-0 z-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/images/hero_bg.jpeg"
      >
        <source src="/Flow_delpmaspu_.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(4,10,20,0.55)_0%,rgba(4,10,20,0.68)_100%),radial-gradient(circle_at_15%_0%,rgba(95,152,224,0.2),transparent_42%),radial-gradient(circle_at_100%_100%,rgba(17,39,72,0.75),transparent_45%)]" />

      <div className="relative z-10 mx-auto w-full max-w-[92rem] px-4 pb-12 pt-20 md:px-8 lg:px-12">
        <motion.div
          className="liquid-glass refine-card min-h-[430px] rounded-[40px] px-8 py-10 backdrop-blur-xl md:px-12 md:py-12 lg:px-14 lg:py-14"
          initial={revealInitial(20, 8)}
          whileInView={REVEAL_VISIBLE}
          viewport={REVEAL_VIEWPORT}
          transition={revealTransition()}
        >
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <Image
                  src="/astral-monogram-logo.svg"
                  alt="Astral Voyages logo"
                  width={34}
                  height={34}
                  className="h-[34px] w-[34px]"
                />
                <p className="text-xs tracking-[0.18em] text-white/70 uppercase font-body">Astral Voyages</p>
              </div>
              <h2 className="mt-3 max-w-2xl text-5xl leading-[0.88] tracking-[-1px] font-heading italic md:text-6xl">
                The Future of Travel Is Written Between the Stars
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/85 font-body md:text-base">
                Join the next generation of explorers and creators shaping humanity&apos;s presence beyond Earth.
              </p>
              <button className="liquid-glass-strong refine-button mt-7 inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium font-body">
                Join Priority Waitlist
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>

            <div className="flex flex-col justify-between gap-8">
              <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-sm font-medium font-body">
                {footerLinks.map((link) => (
                  <Link key={link.label} href={link.href} className="refine-link text-white/85 hover:text-white">
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="liquid-glass rounded-3xl p-5">
                <p className="text-xs tracking-[0.14em] text-white/70 uppercase font-body">Mission Bulletin</p>
                <p className="mt-2 text-sm leading-relaxed text-white/85 font-body md:pr-6">
                  Receive monthly launch windows, vessel reveals, and behind-the-scenes engineering stories.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-9 flex flex-col gap-3 px-1 text-xs text-white/65 font-body md:flex-row md:items-center md:justify-between"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={REVEAL_VIEWPORT}
          transition={revealTransition(0.1, 0.5)}
        >
          <p>© 2026 Astral Voyages. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="refine-link hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="refine-link hover:text-white">
              Terms
            </Link>
            <Link href="/contact" className="refine-link hover:text-white">
              Contact
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
