"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { DualCTA } from "@/components/DualCTA";
import { FAQS } from "@/lib/content";

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="py-20 sm:py-24 bg-blueprint"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Reveal className="text-center">
          <p className="eyebrow">Questions, answered</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[var(--color-accent)] leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-[var(--color-ink-muted)] text-base sm:text-lg">
            Everything you might want to know before scheduling a service
            call or joining the Comfort Club.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <ul className="mt-10 space-y-3">
            {FAQS.map((faq, i) => {
              const isOpen = open === i;
              return (
                <li
                  key={faq.q}
                  className="rounded-xl bg-white border-2 border-[var(--color-line)] hover:border-[var(--color-primary)]/40 overflow-hidden shadow-sm transition"
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 hover:bg-[var(--color-primary-50)] transition"
                    aria-expanded={isOpen}
                    aria-controls={`faq-body-${i}`}
                  >
                    <span className="text-base sm:text-lg font-bold text-[var(--color-accent)]">
                      {faq.q}
                    </span>
                    <svg
                      className={`w-5 h-5 text-[var(--color-primary)] shrink-0 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>
                  {isOpen && (
                    <div
                      id={`faq-body-${i}`}
                      className="px-5 pb-5 text-[var(--color-ink-muted)] text-sm sm:text-base leading-relaxed"
                    >
                      {faq.a}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={240}>
          <DualCTA />
        </Reveal>
      </div>
    </section>
  );
}
