"use client";

import { useTracking } from "@/hooks/useTracking";
import { Reveal } from "@/components/Reveal";
import { DualCTA } from "@/components/DualCTA";
import { FormCard } from "@/components/FormCard";
import { BRAND } from "@/lib/content";

/**
 * Hero: split layout. Left = eyebrow + H1 + subhead + trust line + dual CTA.
 * Right = lead form card (primary conversion surface).
 */
export function HeroSection() {
  // Backup tracking layer — primary config lives in layout.tsx <head>.
  // After Mega Admin registration swap the placeholder for real sk_ key.
  useTracking({ siteKey: "sk_moggs3dj_tjkt5qb1p9" });

  return (
    <section
      id="hero"
      className="relative bg-hero-photo pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden"
    >
      {/* Soft amber accent glow, top-right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(246, 183, 4, 0.18) 0%, transparent 70%)",
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-14 items-start">
          <Reveal className="space-y-5 lg:pt-6 relative">
            <p className="eyebrow eyebrow-on-dark">
              Since {BRAND.since} · Winston-Salem, NC
            </p>
            <h1 className="text-[2.25rem] sm:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.05] tracking-tight drop-shadow-lg">
              {BRAND.tagline}
            </h1>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-xl">
              Residential HVAC, commercial refrigeration, and commercial /
              industrial HVAC — all from one family-owned team. Licensed
              technicians, 24/7/365 emergency response, and the{" "}
              <span className="font-bold text-[var(--color-amber)]">
                Comfort Club For Life
              </span>
              {" "}at just {BRAND.comfortClubPrice}, locked for life.
            </p>
            <ul className="space-y-2 pt-1 max-w-xl">
              {[
                "24/7/365 emergency response — residential, commercial, and industrial",
                "Certified technicians on every call",
                "Serving the Triad for residential · NC + SC for commercial",
                "Comfort Club For Life — 75% maintenance savings vs. non-members",
              ].map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-2.5 text-white"
                >
                  <svg
                    className="w-5 h-5 text-[var(--color-amber)] shrink-0 mt-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-sm sm:text-base">{line}</span>
                </li>
              ))}
            </ul>
            <DualCTA align="start" variant="onDark" className="!mt-6" />
          </Reveal>

          <Reveal delay={150} className="lg:pt-0">
            <FormCard variant="hero" idSuffix="hero" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
