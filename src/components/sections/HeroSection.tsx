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
          <Reveal className="order-2 lg:order-1 space-y-5 lg:pt-6 relative">
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
                Comfort Club
              </span>
              {" "}— Buy a Year, Get a Year Free, plus priority service, no overtime charges, and 15% off repairs.
            </p>
            {/*
              Transparent pricing callout — added 2026-05-21 for QS remediation
              (task 744acef0). Adds visible service-cost context above the fold
              to address BELOW_AVERAGE Landing Page Experience scores on install
              and repair keywords where users expect cost transparency.
            */}
            <div
              id="transparent-pricing"
              className="rounded-xl bg-white/10 backdrop-blur ring-1 ring-[var(--color-amber)]/60 px-4 py-3 sm:px-5 sm:py-4 max-w-xl"
            >
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[var(--color-amber)]/25 flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5 text-[var(--color-amber)]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                    Transparent HVAC Pricing — Get a Real Quote
                  </h3>
                  <p className="mt-1.5 text-sm sm:text-base text-white/90 leading-relaxed">
                    We quote before we start. No surprise fees. Call or book
                    online for your free estimate.
                  </p>
                </div>
              </div>
            </div>
            {/*
              H2 + service chips — added 2026-05-13 for QS remediation (task
              31396ac7). Mirrors high-volume repair keywords above the fold so
              the LP Experience score improves on AC/HVAC/heat pump repair
              search terms.
            */}
            <div className="space-y-3 pt-1">
              <h2 className="text-lg sm:text-xl font-bold text-[var(--color-amber)] uppercase tracking-wide">
                AC Repair &amp; HVAC Repair
              </h2>
              <ul className="flex flex-wrap gap-2 max-w-xl" aria-label="Repair services offered">
                {[
                  "AC Repair",
                  "Furnace Repair",
                  "Heat Pump Repair",
                  "Mini-Split Service",
                ].map((svc) => (
                  <li
                    key={svc}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur ring-1 ring-white/30 px-3 py-1 text-xs sm:text-sm font-semibold text-white"
                  >
                    <svg
                      className="w-3.5 h-3.5 text-[var(--color-amber)] shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {svc}
                  </li>
                ))}
              </ul>
            </div>
            <ul className="space-y-2 pt-1 max-w-xl">
              {[
                "24/7/365 emergency response — residential, commercial, and industrial",
                "Certified technicians on every call",
                "Serving the Triad for residential · NC + SC for commercial",
                "Comfort Club — buy a year, get a year free, plus 15% off repairs",
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

          <Reveal delay={150} className="order-1 lg:order-2 lg:pt-0">
            <FormCard variant="hero" idSuffix="hero" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
