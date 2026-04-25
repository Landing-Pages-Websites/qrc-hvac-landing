import { Reveal } from "@/components/Reveal";
import { DualCTA } from "@/components/DualCTA";

const BENEFITS: { title: string; body: string }[] = [
  {
    title: "2 seasonal tune-ups per year",
    body: "Spring cooling check + fall heating check — everything your system needs to run reliably through the hottest and coldest days.",
  },
  {
    title: "Priority scheduling",
    body: "When you call, members jump the line. No more waiting days for a technician when your system is down.",
  },
  {
    title: "Guaranteed pricing — locked for life",
    body: "Your $50/year rate never goes up. Your member discounts never shrink. Grandfather pricing is a promise, not a teaser.",
  },
  {
    title: "15% off all repairs",
    body: "Whenever you need a repair, parts and labor are discounted by 15% — typically paying for the membership in a single visit.",
  },
  {
    title: "75% savings vs. non-member maintenance",
    body: "The two included tune-ups alone cost roughly 4x the annual fee at standard rates. You save the other 75%.",
  },
];

export function ComfortClubSection() {
  return (
    <section
      id="comfort-club"
      className="py-20 sm:py-24 bg-pinstripe-navy text-[var(--color-ink-on-dark)]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal className="text-center">
          <p className="eyebrow eyebrow-on-dark">
            The QRC Membership
          </p>
          <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold text-white leading-tight">
            Meet the Comfort Club For Life
          </h2>
          <p className="mt-4 text-lg sm:text-2xl font-bold text-[var(--color-amber)]">
            $50/year per system — locked for life
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-white/85 text-base sm:text-lg leading-relaxed">
            One flat rate. Locked as long as you're a member. The most
            affordable way to keep your HVAC running, extend equipment life,
            and skip the worst-case breakdown bills.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BENEFITS.map((b) => (
              <li
                key={b.title}
                className="rounded-xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[var(--color-amber)]/20 flex items-center justify-center shrink-0">
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
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                    {b.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm text-white/80 leading-relaxed">
                  {b.body}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={240}>
          <DualCTA
            variant="onDark"
            label="Join the Comfort Club"
            className="!mt-12"
          />
        </Reveal>
      </div>
    </section>
  );
}
