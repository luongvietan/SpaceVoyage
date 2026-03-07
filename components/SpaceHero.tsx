"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, Play } from "lucide-react";
import { motion } from "motion/react";
import { REVEAL_EASE } from "@/lib/motion";
import BlurText from "./BlurText";

const navItems = ["Home", "Voyages", "Worlds", "Innovation", "Plan Launch"];
const partners = ["Aeon", "Vela", "Apex", "Orbit", "Zeno"];

export default function SpaceHero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          className="fixed top-3 left-0 right-0 px-4 sm:top-4 sm:px-6 lg:px-16"
          style={{ zIndex: 2147483647 }}
        >
          <nav className="mx-auto w-full max-w-[1240px] space-y-2">
            <div className="relative flex items-center justify-between">
              <div
                className="liquid-glass-strong refine-card relative z-[2147483647] flex h-10 w-10 items-center justify-center rounded-full sm:h-12 sm:w-12"
                aria-label="Astral Voyages monogram"
              >
                <span className="absolute left-[8px] top-[5px] text-[1rem] leading-none text-white/95 font-heading italic sm:left-[9px] sm:top-[6px] sm:text-[1.08rem]">
                  .
                </span>
                <span className="absolute left-[18px] top-[14px] text-[0.82rem] leading-none tracking-[0.06em] text-white/82 font-body font-medium sm:left-[21px] sm:top-[16px] sm:text-[0.88rem]">
                  
                </span>
                <span className="pointer-events-none absolute inset-[7px] rounded-full border border-white/20 sm:inset-[8px]" />
                <span className="pointer-events-none absolute inset-[4px] rounded-full border border-white/8 sm:inset-[5px]" />
                <span className="pointer-events-none absolute right-[8px] top-[8px] h-[3px] w-[3px] rounded-full bg-white/75 shadow-[0_0_6px_rgba(255,255,255,0.65)]" />
              </div>

              <div className="liquid-glass absolute left-1/2 z-[2147483647] hidden -translate-x-1/2 items-center gap-1 rounded-full px-2 py-1 backdrop-blur-xl lg:flex">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="refine-link px-3 py-2 text-sm font-medium text-foreground/90 font-body"
                  >
                    {item}
                  </a>
                ))}
                <button className="refine-button flex items-center gap-1 rounded-full bg-white px-3.5 py-1.5 text-sm font-medium text-black font-body">
                  Claim a Spot
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>

              <div className="flex items-center gap-2 lg:hidden">
                <button
                  onClick={() => setIsMenuOpen((prev) => !prev)}
                  aria-label="Open navigation"
                  className="liquid-glass refine-button flex h-10 w-10 items-center justify-center rounded-full"
                >
                  <Menu className="h-4 w-4" />
                </button>
              </div>

              <div className="hidden h-10 w-10 sm:h-12 sm:w-12 lg:block" />
            </div>

            {isMenuOpen ? (
              <div className="liquid-glass relative z-[2147483647] rounded-2xl px-3 py-3 backdrop-blur-xl lg:hidden">
                <div className="flex flex-col gap-1">
                  {navItems.map((item) => (
                    <a
                      key={`mobile-${item}`}
                      href="#"
                      className="refine-link rounded-xl px-3 py-2 text-sm font-medium text-foreground/90 font-body"
                    >
                      {item}
                    </a>
                  ))}
                  <button className="refine-button mt-1 flex items-center justify-center gap-1 rounded-xl bg-white px-3.5 py-2 text-sm font-medium text-black font-body">
                    Claim a Spot
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ) : null}
          </nav>
        </header>

        <main className="flex min-h-screen flex-col">
          <div className="flex flex-1 flex-col items-center justify-center px-4 pt-28 text-center sm:pt-32">
            <motion.div
              className="liquid-glass mb-3 flex flex-wrap items-center justify-center gap-2 rounded-full px-1 py-1 sm:mb-2"
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
              className="max-w-2xl justify-center text-5xl leading-[0.84] tracking-[-2px] text-foreground font-heading italic sm:text-6xl md:text-7xl md:tracking-[-4px] lg:text-[5.5rem]"
              delay={100}
              animateBy="words"
              direction="bottom"
            />

            <motion.p
              className="mt-2 max-w-2xl px-2 text-sm leading-tight text-white font-body font-light md:mt-1 md:text-base"
              initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
              animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: REVEAL_EASE, delay: 0.8 }}
            >
              Discover the universe in ways once unimaginable. Our pioneering vessels and breakthrough
              engineering bring deep-space exploration within reach-secure and extraordinary.
            </motion.p>

            <motion.div
              className="mt-5 flex flex-col items-center gap-3 sm:flex-row sm:gap-6"
              initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
              animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: REVEAL_EASE, delay: 1.1 }}
            >
              <button className="liquid-glass-strong refine-button flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-foreground font-body">
                Start Your Voyage
                <ArrowUpRight className="h-5 w-5" />
              </button>
              <button className="refine-link flex items-center gap-2 text-sm font-medium text-foreground font-body">
                View Liftoff
                <Play className="h-4 w-4 fill-current" />
              </button>
            </motion.div>
          </div>

          <div className="flex flex-col items-center gap-4 pb-8 sm:pb-10">
            <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body">
              Collaborating with top aerospace pioneers globally
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
              {partners.map((partner) => (
                <span
                  key={partner}
                  className="text-xl tracking-tight text-white font-heading italic sm:text-2xl md:text-3xl"
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
