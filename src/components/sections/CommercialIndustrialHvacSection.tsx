import { Reveal } from "@/components/Reveal";
import { DualCTA } from "@/components/DualCTA";

export function CommercialIndustrialHvacSection() {
  return (
    <section
      id="commercial-industrial-hvac"
      className="py-20 sm:py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Reveal>
            <p className="eyebrow">Service Pillar 03</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[var(--color-accent)] leading-tight">
              Commercial &amp; Industrial HVAC
            </h2>
            <p className="mt-5 text-base sm:text-lg text-[var(--color-ink-muted)] leading-relaxed">
              Expert sales, service, repair, and maintenance for
              commercial and industrial HVAC systems — rooftop units,
              chillers, boilers, and more. Whether it's a single package
              unit on a small retail space or a multi-building plant with
              hundreds of tons of cooling load, our certified techs keep
              your operation running.
            </p>
            <p className="mt-4 text-base text-[var(--color-ink-muted)] leading-relaxed">
              Preventive maintenance agreements, after-hours emergency
              coverage, and project estimates on replacements and
              retrofits. We partner with facilities managers, property
              owners, and GCs across NC and SC to hit uptime targets and
              budgets.
            </p>

            <ul className="mt-6 grid sm:grid-cols-2 gap-2.5 text-sm">
              {[
                "Rooftop units & package systems",
                "Chillers & boilers",
                "PM agreements & retrofits",
                "Multi-building plant support",
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

            <DualCTA align="start" label="Schedule Commercial Service" />
          </Reveal>

          <Reveal delay={120}>
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[var(--color-line)] aspect-[4/3] bg-[var(--color-surface-alt)] p-10 flex items-center justify-center">
              <svg
                viewBox="0 0 400 320"
                className="w-full h-full max-w-sm"
                fill="none"
                aria-hidden="true"
              >
                {/* building */}
                <rect
                  x="60"
                  y="140"
                  width="280"
                  height="140"
                  fill="var(--color-surface-cool)"
                  stroke="var(--color-primary)"
                  strokeWidth="2"
                />
                {/* windows */}
                <g fill="var(--color-primary)">
                  <rect x="80" y="160" width="30" height="25" />
                  <rect x="120" y="160" width="30" height="25" />
                  <rect x="160" y="160" width="30" height="25" />
                  <rect x="80" y="200" width="30" height="25" />
                  <rect x="120" y="200" width="30" height="25" />
                  <rect x="160" y="200" width="30" height="25" />
                  <rect x="80" y="240" width="30" height="25" />
                  <rect x="120" y="240" width="30" height="25" />
                  <rect x="160" y="240" width="30" height="25" />
                  <rect x="220" y="160" width="40" height="40" />
                  <rect x="270" y="160" width="40" height="40" />
                  <rect x="220" y="215" width="40" height="40" />
                  <rect x="270" y="215" width="40" height="40" />
                </g>
                {/* rooftop units */}
                <g
                  fill="var(--color-accent)"
                  stroke="var(--color-amber)"
                  strokeWidth="2"
                >
                  <rect x="90" y="110" width="60" height="30" rx="3" />
                  <rect x="180" y="100" width="70" height="40" rx="3" />
                  <rect x="280" y="115" width="50" height="25" rx="3" />
                </g>
                {/* fans on rooftop units */}
                <g stroke="var(--color-amber)" strokeWidth="2" fill="none">
                  <circle cx="120" cy="125" r="8" />
                  <circle cx="215" cy="120" r="10" />
                  <circle cx="305" cy="127" r="7" />
                </g>
                {/* heat lines */}
                <g
                  stroke="var(--color-ink-muted)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="4 4"
                  opacity="0.5"
                >
                  <line x1="120" y1="100" x2="120" y2="70" />
                  <line x1="215" y1="90" x2="215" y2="50" />
                  <line x1="305" y1="105" x2="305" y2="75" />
                </g>
                {/* ground */}
                <line
                  x1="30"
                  y1="285"
                  x2="370"
                  y2="285"
                  stroke="var(--color-ink-muted)"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
