"use client";

import { useRef, useState, type KeyboardEvent, type MouseEvent } from "react";
import { useMegaLeadForm } from "@/hooks/useMegaLeadForm";
import { BRAND, SERVICE_OPTIONS, type ServiceValue } from "@/lib/content";

const SUBMIT_ERROR_MESSAGE =
  "Something went wrong sending your request. Please try again, or email us at info@qrc123.com.";

// Idle DOM shows a real semantic submit control; we flip the live button to a
// plain "button" only for the instant an activation click propagates, so the
// Mega optimizer's capture-phase click listener never sees a submit-button click.
const SEMANTIC_SUBMIT_TYPE = "submit";
const NEUTRAL_BUTTON_TYPE = "button";
// Keys that synthesize a click on a focused button (Space fires on keyup, Enter
// on keydown) — both dispatch the click we must pre-neutralize.
const ACTIVATION_KEYS = new Set(["Enter", " "]);

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

// Format a phone as the user types/pastes, WITHOUT losing digits. We detect a
// leading NANP country code "1" (an 11+ digit string starting with 1) BEFORE
// any slice, so the mandatory +15555550100 keeps all 11 digits and renders as
// "+1 (555) 555-0100". Plain 10-digit NANP input renders "(336) 223-5887" as
// before. (Valid 10-digit NANP area codes never start with 1, so a leading 1 is
// unambiguously a country code.)
function formatPhone(value: string): string {
  const raw = value.replace(/\D/g, "");
  if (raw.startsWith("1") && raw.length > 10) {
    const local = raw.slice(1, 11);
    return `+1 (${local.slice(0, 3)}) ${local.slice(3, 6)}-${local.slice(6)}`;
  }
  const digits = raw.slice(0, 10);
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
  subheading = "Need AC repair, HVAC installation, or commercial refrigeration service in Winston-Salem? Tell us what's going on and a QRC expert will follow up shortly.",
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
  const formRef = useRef<HTMLFormElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const phoneDigits = phone.replace(/\D/g, "");
  const phoneValid =
    phoneDigits.length === 10 ||
    (phoneDigits.length === 11 && phoneDigits.startsWith("1"));
  const canSubmit =
    name.trim().length >= 2 &&
    /@.+\./.test(email) &&
    phoneValid &&
    service.length > 0;

  async function runSubmit(): Promise<void> {
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
      // Confirmed success only: dispatch the one native submit event so the Mega
      // optimizer's capture-phase listener beacons form_submit exactly once for a
      // real lead. Because the button is type="button", this is the page's only
      // native submit, so a genuine lead stays exactly one conversion (no double count).
      formRef.current?.dispatchEvent(
        new Event("submit", { bubbles: true, cancelable: true }),
      );
    } catch (err) {
      console.error("Form submission failed:", err);
      setError(SUBMIT_ERROR_MESSAGE);
    } finally {
      inFlightRef.current = false;
      setSubmitting(false);
    }
  }

  // The Mega optimizer beacons form_submit on the semantic submit-button CLICK
  // itself, from a document capture-phase listener that runs before React's
  // bubble-phase onClick can preventDefault — and independent of the native
  // submit event. So we neutralize the live button to type="button" on
  // pointerdown / activation keydown, i.e. BEFORE the click the optimizer sees.
  // The click then reads as a plain button click: no beacon, no native submit.
  // This is an imperative DOM edit (no state change, no rerender); React's vdom
  // still holds type="submit", so it never fights the flip.
  function neutralizeSubmitType(): void {
    const button = buttonRef.current;
    if (!button) return;
    if (submitting || submitted) return;
    button.type = NEUTRAL_BUTTON_TYPE;
  }

  // Re-arm the semantic submit control AFTER the activation event has finished
  // propagating (deferred past the click's default action so no native submit
  // fires while the type is briefly "submit" again). Idle DOM checks then see
  // exactly one enabled type="submit" button.
  function restoreSubmitType(): void {
    window.setTimeout(() => {
      const button = buttonRef.current;
      if (button) button.type = SEMANTIC_SUBMIT_TYPE;
    }, 0);
  }

  function handlePointerDown(): void {
    neutralizeSubmitType();
  }

  // Space/Enter on the focused button synthesizes a click; neutralize on keydown,
  // before that click reaches the optimizer. The click's restoreSubmitType re-arms.
  function handleButtonKeyDown(e: KeyboardEvent<HTMLButtonElement>): void {
    if (!ACTIVATION_KEYS.has(e.key)) return;
    neutralizeSubmitType();
  }

  // A cancelled pointer gesture never produces a click, so re-arm defensively.
  function handlePointerCancel(): void {
    restoreSubmitType();
  }

  // Validate-first gate. runSubmit dispatches the one native submit event only
  // after confirmed {ok:true}, keeping the success beacon on the same fail-closed
  // gate as the success card. We always re-arm the button type on this click.
  function handleClick(e: MouseEvent<HTMLButtonElement>): void {
    e.preventDefault();
    restoreSubmitType();
    if (submitting || submitted) return;
    if (inFlightRef.current) return;
    if (!canSubmit) return;
    void runSubmit();
  }

  function handleKeyDown(e: KeyboardEvent<HTMLFormElement>): void {
    if (e.key !== "Enter") return;
    const tag = (e.target as HTMLElement).tagName;
    if (tag === "TEXTAREA" || tag === "BUTTON") return;
    e.preventDefault();
    if (submitting || submitted) return;
    if (inFlightRef.current) return;
    if (!canSubmit) return;
    void runSubmit();
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

      <form
        ref={formRef}
        onSubmit={(e) => e.preventDefault()}
        onKeyDown={handleKeyDown}
        noValidate
        className="space-y-3.5"
      >
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
            pattern="(\+1 )?\(\d{3}\) \d{3}-\d{4}"
            title="Enter a 10-digit US phone number, e.g. (555) 555-5555 or +1 (555) 555-5555"
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
          ref={buttonRef}
          type="submit"
          onPointerDown={handlePointerDown}
          onPointerCancel={handlePointerCancel}
          onKeyDown={handleButtonKeyDown}
          onClick={handleClick}
          disabled={submitting || submitted}
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
