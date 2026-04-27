import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { QueryParamPersistence } from "@/components/QueryParamPersistence";
import "./globals.css";

const inter = Inter({
  variable: "--font-body-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

// Display font uses the same Inter variable for a consistent trade-pro look
// (avoids loading a second family — heavier weight handles display vs body).
const interDisplay = Inter({
  variable: "--font-display-inter",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://qrc-hvac-landing.vercel.app"),
  title: {
    default:
      "QRC HVAC & Refrigeration — Carolina's Most Trusted HVAC & Refrigeration Company",
    template: "%s | QRC HVAC & Refrigeration",
  },
  description:
    "Residential HVAC, commercial refrigeration, and commercial/industrial HVAC services across NC and SC since 1999. 24/7/365 emergency response. Winston-Salem, NC. Join the Comfort Club For Life — $50/year per system, locked for life.",
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${interDisplay.variable} h-full antialiased`}
    >
      <head>
        {/* MegaTag config — siteKey/siteId swapped to real values after
            Mega Admin registration. Placeholders trigger optimizer load but
            won't fire events until real keys are in place. */}
        <meta
          name="mega-site-id"
          content="fc9277eb-eacd-4681-b3bb-a4653906fec4"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.MEGA_TAG_CONFIG={siteKey:"sk_moggs3dj_tjkt5qb1p9",siteId:"fc9277eb-eacd-4681-b3bb-a4653906fec4",gtmId:"GTM-NSMDWR4B",pixelId:""};window.API_ENDPOINT="https://optimizer.gomega.ai";window.TRACKING_API_ENDPOINT="https://events-api.gomega.ai";`,
          }}
        />
        <script
          id="optimizer-script"
          src="https://cdn.gomega.ai/scripts/optimizer.min.js"
          async
        />
        {/* Google Tag Manager — scraped from live qrc123.com page (GTM-NSMDWR4B) */}
        <script
          id="gtm-init"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-NSMDWR4B');`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--color-surface)] text-[var(--color-ink)]">
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NSMDWR4B"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <QueryParamPersistence />
        {children}
        {/* CallTrackingMetrics — universal MEGA account */}
        <Script
          src="https://572388.tctm.co/t.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
