import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { DualCTA } from "@/components/DualCTA";
import { BRAND } from "@/lib/content";

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 sm:py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Reveal>
            <p className="eyebrow">About QRC</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[var(--color-accent)] leading-tight">
              A family-owned name Carolinians have trusted since {BRAND.since}
            </h2>
            <p className="mt-5 text-base sm:text-lg text-[var(--color-ink-muted)] leading-relaxed">
              Since 1999, the {BRAND.family} has built QRC into Carolina's
              most trusted HVAC and refrigeration company. Based in{" "}
              {BRAND.basedIn}, we serve residential customers across the
              Triad and commercial/industrial clients throughout North and
              South Carolina.
            </p>
            <p className="mt-4 text-base text-[var(--color-ink-muted)] leading-relaxed">
              Certified technicians. 24/7/365 emergency response. And two
              decades of referrals, repeat business, and handshake
              relationships — the kind you only earn by showing up, doing
              the work right, and standing behind it.
            </p>

            <div className="mt-7 grid grid-cols-3 gap-4 max-w-md">
              <div>
                <p className="text-3xl font-extrabold text-[var(--color-primary)]">
                  25+
                </p>
                <p className="text-xs text-[var(--color-ink-muted)] mt-1">
                  Years in business
                </p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-[var(--color-primary)]">
                  24/7
                </p>
                <p className="text-xs text-[var(--color-ink-muted)] mt-1">
                  Emergency response
                </p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-[var(--color-primary)]">
                  NC+SC
                </p>
                <p className="text-xs text-[var(--color-ink-muted)] mt-1">
                  Commercial coverage
                </p>
              </div>
            </div>

            <DualCTA align="start" />
          </Reveal>

          <Reveal delay={120}>
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[var(--color-line)] aspect-[4/3]">
              <Image
                src="/images/qrc-building.png"
                alt="QRC HVAC & Refrigeration headquarters in Winston-Salem"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        {/* 24/7 emergency sub-band */}
        <Reveal delay={200}>
          <div className="mt-14 rounded-2xl bg-[var(--color-accent)] text-white p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[var(--color-danger)]/20 border-2 border-[var(--color-danger)] flex items-center justify-center shrink-0">
                <svg
                  className="w-6 h-6 text-[var(--color-danger)]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-[var(--color-amber)] uppercase tracking-wider">
                  HVAC Emergency?
                </p>
                <p className="mt-1 text-lg sm:text-xl text-white font-semibold leading-snug">
                  24/7/365 response — residential &amp; commercial. We
                  answer the phone every hour of every day.
                </p>
              </div>
            </div>
            <a
              href={BRAND.phoneHref}
              className="bg-[var(--color-amber)] hover:bg-[var(--color-amber-hover)] text-[var(--color-accent)] px-6 py-3.5 rounded-lg font-extrabold text-lg transition shadow-lg shrink-0"
            >
              Call {BRAND.phoneDisplay}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
