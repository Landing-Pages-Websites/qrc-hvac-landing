"use client";

import { useRef, useState } from "react";
import { useMegaLeadForm } from "@/hooks/useMegaLeadForm";
import { BRAND, SERVICE_OPTIONS, type ServiceValue } from "@/lib/content";

const SUBMIT_ERROR_MESSAGE =
  "Something went wrong sending your request. Please try again, or email us at info@qrc123.com.";

type Props = {
  variant?: "hero" | "card";
  heading?: string;
  subheading?: string;
  idSuffix?: string;
};

/**
 * QRC HVAC lead form. Fields match the live page at
 * https://schedule.qrc123.com/schedule-now EXACTLY:
 *   - name (single)      required — "Full Name*" / placeholder "John Doe"
 *   - email              required — "Email*" / "john.doe@example.com"
 *   - phone              required — "Phone Number*" / "(555) 555-5555"
 *   - service (select)   required — "Service Needed*" / "Select a service"
 *                        Options: Residential HVAC Service, Commercial HVAC Service,
 *                        Commercial Refrigeration Service, Comfort Club Inquiry, Other
 *   - message (textarea) optional — "Your Message" / "Tell us more about your needs..."
 *
 * Submit button label: "Submit Request" (matches live).
 * Each field is its own key in form_data (per landing-page-forms Rule #2).
 * Submit button disables after success to prevent duplicate submissions
 * (per landing-page-builder Rule #12).
 */

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  if (digits.length === 0) return "";
  if (digits.length < 4) return `(${digits}`;
  if (digits.length < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

const ChevronDown = () => (
  <svg
    className="w-5 h-5 text-[var(--color-ink-muted)]"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
);

export function FormCard({
  variant = "card",
  heading = "Schedule service now",
  subheading = "Tell us what's going on and a QRC expert will follow up shortly. 24/7 emergency response available.",
  idSuffix = "main",
}: Props) {
  const { submit } = useMegaLeadForm();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState<ServiceValue | "">("");
  const [message, setMessage] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inFlightRef = useRef(false);

  const phoneDigits = phone.replace(/\D/g, "");
  const phoneValid = phoneDigits.length === 10;
  const canSubmit =
    name.trim().length >= 2 &&
    /@.+\./.test(email) &&
    phoneValid &&
    service.length > 0;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (submitting || submitted) return;
    if (inFlightRef.current) return;
    if (!canSubmit) return;
    inFlightRef.current = true;
    setError(null);
    setSubmitting(true);
    try {
      const res = await submit({
        name: name.trim(),
        email: email.trim(),
        phone: phoneDigits,
        service,
        message: message.trim(),
      });
      if (res?.ok !== true) {
        throw new Error("Submission not confirmed by server.");
      }
      setSubmitted(true);
    } catch (err) {
      console.error("Form submission failed:", err);
      setError(SUBMIT_ERROR_MESSAGE);
    } finally {
      inFlightRef.current = false;
      setSubmitting(false);
    }
  }

  const wrapperClass =
    variant === "hero"
      ? "bg-white/98 backdrop-blur rounded-2xl shadow-2xl shadow-[var(--color-accent)]/30 border border-[var(--color-primary)]/15 p-6 sm:p-8"
      : "bg-white rounded-2xl shadow-xl border border-[var(--color-line)] p-6 sm:p-8";

  const inputClass =
    "w-full rounded-lg border-2 border-[var(--color-line)] bg-white px-4 py-3 text-base text-[var(--color-ink)] placeholder:text-[var(--color-ink-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] transition";

  if (submitted) {
    return (
      <div className={wrapperClass}>
        <div className="text-center py-6 space-y-4">
          <div className="mx-auto w-14 h-14 rounded-full bg-[var(--color-amber-50)] flex items-center justify-center">
            <svg
              className="w-7 h-7 text-[var(--color-primary)]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-[var(--color-accent)]">
            Thanks, {name.split(" ")[0] || "we got it"}!
          </h3>
          <p className="text-[var(--color-ink-muted)] max-w-sm mx-auto">
            A QRC expert will follow up shortly. For immediate service, call{" "}
            <a
              href={BRAND.phoneHref}
              className="font-bold text-[var(--color-primary)] underline"
            >
              {BRAND.phoneDisplay}
            </a>
            {" "}— we're available 24/7/365.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={wrapperClass}>
      <div className="mb-5">
        <h3 className="text-2xl sm:text-[1.7rem] font-bold text-[var(--color-accent)] leading-tight">
          {heading}
        </h3>
        {subheading && (
          <p className="text-sm text-[var(--color-ink-muted)] mt-2 leading-relaxed">
            {subheading}
          </p>
        )}
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-3.5">
        <div>
          <label htmlFor={`name-${idSuffix}`} className="sr-only">
            Full name
          </label>
          <input
            id={`name-${idSuffix}`}
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor={`email-${idSuffix}`} className="sr-only">
            Email address
          </label>
          <input
            id={`email-${idSuffix}`}
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="john.doe@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor={`phone-${idSuffix}`} className="sr-only">
            Phone number
          </label>
          <input
            id={`phone-${idSuffix}`}
            name="phone"
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
            required
            pattern="\(\d{3}\) \d{3}-\d{4}"
            title="Enter a 10-digit US phone number"
            placeholder="(555) 555-5555"
            value={phone}
            onChange={(e) => setPhone(formatPhone(e.target.value))}
            className={inputClass}
          />
        </div>

        <div className="relative">
          <label htmlFor={`service-${idSuffix}`} className="sr-only">
            Service Needed
          </label>
          <select
            id={`service-${idSuffix}`}
            name="service"
            required
            value={service}
            onChange={(e) => setService(e.target.value as ServiceValue)}
            className={`${inputClass} appearance-none pr-10 ${
              service === "" ? "text-[var(--color-ink-muted)]" : ""
            }`}
          >
            <option value="" disabled>
              Select a service
            </option>
            {SERVICE_OPTIONS.map((opt) => (
              <option
                key={opt.value}
                value={opt.value}
                className="text-[var(--color-ink)]"
              >
                {opt.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <ChevronDown />
          </div>
        </div>

        <div>
          <label htmlFor={`message-${idSuffix}`} className="sr-only">
            Your message (optional)
          </label>
          <textarea
            id={`message-${idSuffix}`}
            name="message"
            rows={4}
            placeholder="Tell us more about your needs..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={inputClass}
          />
        </div>

        {error && (
          <p
            role="alert"
            aria-live="polite"
            className="rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700"
          >
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={!canSubmit || submitting || submitted}
          className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] disabled:opacity-60 disabled:cursor-not-allowed text-white px-6 py-3.5 rounded-lg font-bold text-base transition shadow-sm mt-1"
        >
          {submitting ? "Submitting…" : "Submit Request"}
        </button>

        <p className="text-[11px] text-[var(--color-ink-muted)] text-center leading-relaxed pt-1">
          By submitting, you agree to be contacted by QRC HVAC &amp;
          Refrigeration about your service request. Or call{" "}
          <a href={BRAND.phoneHref} className="font-semibold">
            {BRAND.phoneDisplay}
          </a>
          {" "}directly — 24/7/365.
        </p>
      </form>
    </div>
  );
}
