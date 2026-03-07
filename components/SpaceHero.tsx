"use client";

import { ArrowUpRight, Play } from "lucide-react";
import { motion } from "motion/react";
import { REVEAL_EASE } from "@/lib/motion";
import BlurText from "./BlurText";

const navItems = ["Home", "Voyages", "Worlds", "Innovation", "Plan Launch"];
const partners = ["Aeon", "Vela", "Apex", "Orbit", "Zeno"];

export default function SpaceHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <video
        className="cinematic-media-source absolute inset-0 z-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/images/hero_bg.jpeg"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260306_115329_5e00c9c5-4d69-49b7-94c3-9c31c60bb644.mp4"
          type="video/mp4"
        />
      </video>

      <div className="cinematic-overlay absolute inset-0 z-0" />

      <div className="relative min-h-screen">
        <header
          className="fixed top-4 left-0 right-0 px-8 lg:px-16"
          style={{ zIndex: 2147483647 }}
        >
          <nav className="flex items-center justify-between">
            <div
              className="liquid-glass-strong relative z-[2147483647] flex h-12 w-12 items-center justify-center rounded-full"
              aria-label="Astral Voyages monogram"
            >
              <span className="absolute -left-[1px] top-[6px] text-[1.08rem] leading-none text-white/95 font-heading italic">
                .
              </span>
              <span className="absolute left-[15px] top-[15px] text-[0.88rem] leading-none tracking-[0.06em] text-white/82 font-body font-medium">
                
              </span>
              <span className="pointer-events-none absolute inset-[7px] rounded-full border border-white/20" />
              <span className="pointer-events-none absolute inset-[4px] rounded-full border border-white/8" />
              <span className="pointer-events-none absolute right-[8px] top-[9px] h-[3px] w-[3px] rounded-full bg-white/75 shadow-[0_0_6px_rgba(255,255,255,0.65)]" />
            </div>

            <div className="liquid-glass relative z-[2147483647] hidden items-center gap-1 rounded-full px-2 py-1 backdrop-blur-xl md:flex">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="px-3 py-2 text-sm font-medium text-foreground/90 font-body"
                >
                  {item}
                </a>
              ))}
              <button className="flex items-center gap-1 rounded-full bg-white px-3.5 py-1.5 text-sm font-medium text-black font-body">
                Claim a Spot
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>

            <div className="w-12 md:hidden" />
          </nav>
        </header>

        <main className="flex min-h-screen flex-col">
          <div className="flex flex-1 flex-col items-center justify-center px-4 pt-24 text-center">
            <motion.div
              className="liquid-glass mb-2 flex items-center gap-2 rounded-full px-1 py-1"
              initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
              animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: REVEAL_EASE, delay: 0.3 }}
            >
              <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-black font-body">
                New
              </span>
              <span className="pr-3 text-sm text-foreground/90 font-body">
                Maiden Crewed Voyage to Mars Arrives 2026
              </span>
            </motion.div>

            <BlurText
              text="Venture Past Our Sky Across the Universe"
              className="max-w-2xl justify-center text-6xl leading-[0.8] tracking-[-4px] text-foreground font-heading italic md:text-7xl lg:text-[5.5rem]"
              delay={100}
              animateBy="words"
              direction="bottom"
            />

            <motion.p
              className="mt-1 max-w-2xl text-sm leading-tight text-white font-body font-light md:text-base"
              initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
              animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: REVEAL_EASE, delay: 0.8 }}
            >
              Discover the universe in ways once unimaginable. Our pioneering vessels and breakthrough
              engineering bring deep-space exploration within reach-secure and extraordinary.
            </motion.p>

            <motion.div
              className="mt-4 flex items-center gap-6"
              initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
              animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: REVEAL_EASE, delay: 1.1 }}
            >
              <button className="liquid-glass-strong flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-foreground font-body">
                Start Your Voyage
                <ArrowUpRight className="h-5 w-5" />
              </button>
              <button className="flex items-center gap-2 text-sm font-medium text-foreground font-body">
                View Liftoff
                <Play className="h-4 w-4 fill-current" />
              </button>
            </motion.div>
          </div>

          <div className="flex flex-col items-center gap-4 pb-8">
            <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body">
              Collaborating with top aerospace pioneers globally
            </div>
            <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
              {partners.map((partner) => (
                <span
                  key={partner}
                  className="text-2xl tracking-tight text-white font-heading italic md:text-3xl"
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
