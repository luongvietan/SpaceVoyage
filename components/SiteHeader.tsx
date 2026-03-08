"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Voyages", href: "/voyages" },
  { label: "Worlds", href: "/worlds" },
  { label: "Innovation", href: "/innovation" },
  { label: "Plan Launch", href: "/plan-launch" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href;
  };

  return (
    <header className="fixed top-3 left-0 right-0 px-4 sm:top-4 sm:px-6 lg:px-16" style={{ zIndex: 2147483647 }}>
      <nav className="mx-auto w-full max-w-[1240px] space-y-2">
        <div className="relative flex items-center justify-between">
          <Link
            href="/"
            className="liquid-glass-strong refine-card relative z-[2147483647] flex h-10 w-10 items-center justify-center rounded-full sm:h-12 sm:w-12"
            aria-label="Astral Voyages home"
          >
            <span className="absolute left-[8px] top-[5px] text-[1rem] leading-none text-white/95 font-heading italic sm:left-[9px] sm:top-[6px] sm:text-[1.08rem]">
              .
            </span>
            <span className="absolute left-[18px] top-[14px] text-[0.82rem] leading-none tracking-[0.06em] text-white/82 font-body font-medium sm:left-[21px] sm:top-[16px] sm:text-[0.88rem]">
              
            </span>
            <span className="pointer-events-none absolute inset-[7px] rounded-full border border-white/20 sm:inset-[8px]" />
            <span className="pointer-events-none absolute inset-[4px] rounded-full border border-white/8 sm:inset-[5px]" />
            <span className="pointer-events-none absolute right-[8px] top-[8px] h-[3px] w-[3px] rounded-full bg-white/75 shadow-[0_0_6px_rgba(255,255,255,0.65)]" />
          </Link>

          <div className="liquid-glass absolute left-1/2 z-[2147483647] hidden -translate-x-1/2 items-center gap-1 rounded-full px-2 py-1 backdrop-blur-xl lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`refine-link rounded-full px-3 py-2 text-sm font-medium font-body ${
                  isActive(item.href) ? "bg-white/15 text-white" : "text-foreground/90"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/plan-launch"
              className="refine-button flex items-center gap-1 rounded-full bg-white px-3.5 py-1.5 text-sm font-medium text-black font-body"
            >
              Claim a Spot
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation"
              className="liquid-glass refine-button flex h-10 w-10 items-center justify-center rounded-full"
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>

          <div className="hidden h-10 w-10 sm:h-12 sm:w-12 lg:block" />
        </div>

        {isMenuOpen ? (
          <div className="liquid-glass relative z-[2147483647] rounded-2xl px-3 py-3 backdrop-blur-xl lg:hidden">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={`mobile-${item.label}`}
                  href={item.href}
                  className={`refine-link rounded-xl px-3 py-2 text-sm font-medium font-body ${
                    isActive(item.href) ? "bg-white/15 text-white" : "text-foreground/90"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/plan-launch"
                onClick={() => setIsMenuOpen(false)}
                className="refine-button mt-1 flex items-center justify-center gap-1 rounded-xl bg-white px-3.5 py-2 text-sm font-medium text-black font-body"
              >
                Claim a Spot
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        ) : null}
      </nav>
    </header>
  );
}
