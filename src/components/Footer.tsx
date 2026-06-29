import { BRAND } from "@/lib/content";

/**
 * Legal-only footer. No nav, no social, no outbound links.
 */
export function Footer() {
  return (
    <footer className="bg-[var(--color-accent)] text-[var(--color-ink-on-dark)] py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-3">
        <p className="text-sm text-white/90 font-semibold">
          © {new Date().getFullYear()} {BRAND.fullName}
        </p>
        <p className="text-xs text-white/75 leading-relaxed">
          Based in {BRAND.basedIn} · {BRAND.phoneDisplay} · Serving residential
          NC and commercial NC + SC · 24/7/365 emergency response
        </p>
        <p className="text-[11px] text-white/55 leading-relaxed max-w-2xl mx-auto pt-2 border-t border-white/10">
          Licensed HVAC and refrigeration contractor. Service availability
          varies by location and system type. Promotional offers (including
          the Comfort Club "Buy a Year, Get a Year Free" promotion) shown on
          this page are current offers and may change; offer terms are
          subject to program conditions.
        </p>
      </div>
    </footer>
  );
}
