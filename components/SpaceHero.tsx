"use client";

import { ArrowUpRight, Play } from "lucide-react";
import { motion } from "motion/react";
import { REVEAL_EASE } from "@/lib/motion";
import BlurText from "./BlurText";

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
        <source src="/Flow_delpmaspu_1.mp4" type="video/mp4" />
      </video>

      <div className="cinematic-overlay absolute inset-0 z-0" />

      <div className="relative min-h-screen">
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
