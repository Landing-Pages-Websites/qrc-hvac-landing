import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { HeroSection } from "@/components/sections/HeroSection";
import { ResidentialHvacSection } from "@/components/sections/ResidentialHvacSection";
import { CommercialRefrigerationSection } from "@/components/sections/CommercialRefrigerationSection";
import { CommercialIndustrialHvacSection } from "@/components/sections/CommercialIndustrialHvacSection";
import { ComfortClubSection } from "@/components/sections/ComfortClubSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title:
    "QRC HVAC & Refrigeration — Winston-Salem NC · Residential + Commercial · Comfort Club For Life",
  description:
    "Carolina's most trusted HVAC and refrigeration company since 1999. Residential HVAC, commercial refrigeration, commercial/industrial HVAC. 24/7/365 emergency response. Join the Comfort Club For Life — $50/year locked for life.",
  openGraph: {
    title: "QRC HVAC & Refrigeration — Carolina's Most Trusted HVAC Company",
    description:
      "Residential HVAC, commercial refrigeration, commercial/industrial HVAC. 24/7/365 emergency response. Comfort Club For Life — $50/year locked for life.",
    url: "https://qrc-hvac-landing.vercel.app",
    siteName: "QRC HVAC & Refrigeration",
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ResidentialHvacSection />
        <CommercialRefrigerationSection />
        <CommercialIndustrialHvacSection />
        <ComfortClubSection />
        <AboutSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
