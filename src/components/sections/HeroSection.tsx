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
  useTracking({ siteKey: "__QRC_SITE_KEY_PLACEHOLDER__" });

  return (
    <section
      id="hero"
      className="relative bg-hero-cool pt-24 pb-12 sm:pt-32 sm:pb-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-14 items-start">
          <Reveal className="space-y-5 lg:pt-6">
            <p className="eyebrow">
              Since {BRAND.since} · Winston-Salem, NC
            </p>
            <h1 className="text-[2.25rem] sm:text-5xl lg:text-[3.5rem] font-extrabold text-[var(--color-accent)] leading-[1.05] tracking-tight">
              {BRAND.tagline}
            </h1>
            <p className="text-lg sm:text-xl text-[var(--color-ink-muted)] leading-relaxed max-w-xl">
              Residential HVAC, commercial refrigeration, and commercial /
              industrial HVAC — all from one family-owned team. Licensed
              technicians, 24/7/365 emergency response, and the Comfort Club
              For Life at just {BRAND.comfortClubPrice}, locked for life.
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
                  className="flex items-start gap-2.5 text-[var(--color-ink)]"
                >
                  <svg
                    className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5"
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
            <DualCTA align="start" className="!mt-6" />
          </Reveal>

          <Reveal delay={150} className="lg:pt-0">
            <FormCard variant="hero" idSuffix="hero" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
