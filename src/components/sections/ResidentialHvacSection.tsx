import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { DualCTA } from "@/components/DualCTA";

export function ResidentialHvacSection() {
  return (
    <section
      id="residential-hvac"
      className="py-20 sm:py-24 bg-cool-tint"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Reveal>
            <p className="eyebrow">Service Pillar 01</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[var(--color-accent)] leading-tight">
              Residential HVAC Services
            </h2>
            <p className="mt-5 text-base sm:text-lg text-[var(--color-ink-muted)] leading-relaxed">
              From AC repair and troubleshooting to furnace repair and
              ductless mini-split system design and installation, we keep
              your home comfortable year-round. Licensed technicians,
              same-day service, and 24/7 emergency response across the
              Winston-Salem and Triad area.
            </p>
            <p className="mt-4 text-base text-[var(--color-ink-muted)] leading-relaxed">
              Whether your AC quit on the hottest day of summer, your
              furnace is short-cycling in January, or you want a quieter,
              more efficient mini-split for an addition or guest suite —
              we'll diagnose the real problem, explain your options in
              plain English, and fix it right the first time.
            </p>

            <ul className="mt-6 grid sm:grid-cols-2 gap-2.5 text-sm">
              {[
                "AC repair & troubleshooting",
                "Furnace repair & replacement",
                "Ductless mini-split design & install",
                "Same-day service availability",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-[var(--color-ink)]"
                >
                  <svg
                    className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-1"
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
                  {item}
                </li>
              ))}
            </ul>

            <DualCTA align="start" label="Schedule Residential Service" />
          </Reveal>

          <Reveal delay={120}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[var(--color-accent)]/20 border-4 border-white aspect-[4/3] ring-1 ring-[var(--color-primary)]/15">
              <Image
                src="/images/ac-repair.webp"
                alt="QRC technician performing AC repair"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              {/* corner badge */}
              <div className="absolute top-4 left-4 bg-[var(--color-accent)] text-white px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider shadow-lg">
                Residential
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
