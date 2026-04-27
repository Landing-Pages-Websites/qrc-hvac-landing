import { Reveal } from "@/components/Reveal";
import { DualCTA } from "@/components/DualCTA";

export function CommercialRefrigerationSection() {
  return (
    <section
      id="commercial-refrigeration"
      className="py-20 sm:py-24 bg-pinstripe-navy text-[var(--color-ink-on-dark)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Reveal delay={120} className="lg:order-2">
            {/* SVG illustration — walk-in cooler + ice machine */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border-4 border-white/10 ring-1 ring-[var(--color-amber)]/30 bg-svg-card-warm aspect-[4/3] p-10 flex items-center justify-center">
              <svg
                viewBox="0 0 400 320"
                className="w-full h-full max-w-sm"
                fill="none"
                aria-hidden="true"
              >
                {/* walk-in cooler */}
                <rect
                  x="40"
                  y="70"
                  width="200"
                  height="210"
                  rx="6"
                  fill="rgba(255,255,255,0.95)"
                  stroke="var(--color-amber)"
                  strokeWidth="3"
                />
                {/* door seam */}
                <line
                  x1="140"
                  y1="90"
                  x2="140"
                  y2="270"
                  stroke="var(--color-accent)"
                  strokeWidth="2"
                />
                {/* handle */}
                <rect
                  x="130"
                  y="170"
                  width="8"
                  height="30"
                  rx="2"
                  fill="var(--color-accent)"
                />
                {/* top vent */}
                <rect
                  x="80"
                  y="40"
                  width="120"
                  height="30"
                  rx="3"
                  fill="var(--color-amber)"
                />
                {/* snowflake */}
                <g
                  stroke="var(--color-accent)"
                  strokeWidth="3"
                  strokeLinecap="round"
                >
                  <line x1="195" y1="160" x2="215" y2="180" />
                  <line x1="215" y1="160" x2="195" y2="180" />
                  <line x1="205" y1="150" x2="205" y2="190" />
                  <line x1="185" y1="170" x2="225" y2="170" />
                </g>
                {/* ice machine (right) */}
                <rect
                  x="270"
                  y="140"
                  width="100"
                  height="140"
                  rx="4"
                  fill="rgba(255,255,255,0.95)"
                  stroke="var(--color-amber)"
                  strokeWidth="2"
                />
                <rect
                  x="280"
                  y="155"
                  width="80"
                  height="50"
                  rx="2"
                  fill="var(--color-primary-100)"
                />
                {/* ice cubes */}
                <g fill="var(--color-amber)">
                  <rect x="290" y="170" width="10" height="10" rx="1" />
                  <rect x="305" y="165" width="10" height="10" rx="1" />
                  <rect x="320" y="172" width="10" height="10" rx="1" />
                  <rect x="335" y="168" width="10" height="10" rx="1" />
                  <rect x="298" y="185" width="10" height="10" rx="1" />
                  <rect x="315" y="188" width="10" height="10" rx="1" />
                  <rect x="330" y="184" width="10" height="10" rx="1" />
                </g>
                <rect
                  x="290"
                  y="220"
                  width="60"
                  height="10"
                  rx="2"
                  fill="var(--color-amber)"
                />
                {/* floor */}
                <line
                  x1="20"
                  y1="285"
                  x2="380"
                  y2="285"
                  stroke="rgba(255,255,255,0.5)"
                  strokeWidth="2"
                />
              </svg>
              {/* corner badge */}
              <div className="absolute top-4 left-4 bg-[var(--color-amber)] text-[var(--color-accent)] px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider shadow-lg">
                Refrigeration
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:order-1">
            <p className="eyebrow eyebrow-on-dark">Service Pillar 02</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Commercial Refrigeration
            </h2>
            <p className="mt-5 text-base sm:text-lg text-white/85 leading-relaxed">
              Full-service commercial refrigeration: install, repair, and
              maintenance. Custom walk-in cooler design and sales, ice
              machines, and ice makers. We keep inventory cold, safe, and
              code-compliant across restaurants, convenience stores, and
              cold-storage facilities throughout North and South Carolina.
            </p>
            <p className="mt-4 text-base text-white/75 leading-relaxed">
              Downtime costs more than a repair. QRC technicians are
              trained on all major commercial refrigeration brands and
              arrive with the right parts and refrigerants to get your
              boxes back to temp fast — and with the paperwork your health
              inspector expects.
            </p>

            <ul className="mt-6 grid sm:grid-cols-2 gap-2.5 text-sm">
              {[
                "Walk-in cooler design & sales",
                "Ice machines & ice makers",
                "Install, repair, maintenance",
                "Restaurants, stores, cold storage",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-white"
                >
                  <svg
                    className="w-4 h-4 text-[var(--color-amber)] shrink-0 mt-1"
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

            <DualCTA
              align="start"
              variant="onDark"
              label="Schedule Refrigeration Service"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
