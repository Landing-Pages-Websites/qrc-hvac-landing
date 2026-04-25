import { Reveal } from "@/components/Reveal";
import { FormCard } from "@/components/FormCard";
import { BRAND } from "@/lib/content";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 sm:py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <Reveal>
            <p className="eyebrow">Get in touch</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[var(--color-accent)] leading-tight">
              Ready to schedule? Let's get you on the calendar.
            </h2>
            <p className="mt-5 text-base sm:text-lg text-[var(--color-ink-muted)] leading-relaxed">
              Fill out the form and a QRC expert will follow up shortly to
              schedule your service or enroll you in the Comfort Club. For
              immediate service or an after-hours emergency, call us — we
              answer the phone 24/7/365.
            </p>

            <div className="mt-7 space-y-5">
              <a
                href={BRAND.phoneHref}
                className="flex items-start gap-4 rounded-xl border-2 border-[var(--color-primary)] bg-[var(--color-primary-50)] p-5 hover:bg-[var(--color-primary-100)] transition group"
              >
                <div className="w-11 h-11 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider">
                    Call 24/7
                  </p>
                  <p className="mt-0.5 text-xl sm:text-2xl font-extrabold text-[var(--color-accent)]">
                    {BRAND.phoneDisplay}
                  </p>
                  <p className="mt-1 text-xs text-[var(--color-ink-muted)]">
                    Residential &amp; commercial emergency response
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4 rounded-xl border border-[var(--color-line)] p-5">
                <div className="w-11 h-11 rounded-full bg-[var(--color-amber-50)] text-[var(--color-primary)] flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider">
                    Service Area
                  </p>
                  <p className="mt-0.5 text-base font-semibold text-[var(--color-accent)]">
                    Serving Winston-Salem and the Triad for residential ·
                    NC + SC for commercial
                  </p>
                  <p className="mt-1 text-xs text-[var(--color-ink-muted)]">
                    Based in {BRAND.basedIn} · Since {BRAND.since}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <FormCard
              variant="card"
              idSuffix="contact"
              heading="Tell us what you need"
              subheading="Residential, commercial, or emergency — we'll follow up shortly."
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
