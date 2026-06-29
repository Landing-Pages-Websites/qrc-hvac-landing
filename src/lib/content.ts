/**
 * QRC HVAC & Refrigeration — content constants.
 * Source of truth: /var/lib/megaclaw/workspace/memory/projects/qrc-hvac.md
 * (brief) + live page https://schedule.qrc123.com/schedule-now + qrc123.com.
 */

export const BRAND = {
  name: "QRC HVAC",
  fullName: "QRC HVAC & Refrigeration",
  tagline: "Carolina's Most Trusted HVAC and Refrigeration Company",
  since: 1999,
  family: "Eller family",
  basedIn: "Winston-Salem, NC",
  phoneDisplay: "(336) 223-5887",
  phoneHref: "tel:+13362235887",
  email: "info@qrc123.com",
  primaryCtaLabel: "Schedule Service Now",
  primaryCtaShort: "Schedule Service",
  // Service area
  residentialArea: "the Triad / Winston-Salem area",
  commercialArea: "throughout North and South Carolina",
  // Hook offer
  comfortClubOffer: "Buy a Year, Get a Year Free",
} as const;

// Service Needed dropdown — exact options from live page
// (https://schedule.qrc123.com/schedule-now, verified via DOM scrape 2026-04-27)
export const SERVICE_OPTIONS = [
  { value: "Residential HVAC Service", label: "Residential HVAC Service" },
  { value: "Commercial HVAC Service", label: "Commercial HVAC Service" },
  { value: "Commercial Refrigeration Service", label: "Commercial Refrigeration Service" },
  { value: "Comfort Club Inquiry", label: "Comfort Club Inquiry" },
  { value: "Other", label: "Other" },
] as const;

export type ServiceValue = (typeof SERVICE_OPTIONS)[number]["value"];

export const FAQS: { q: string; a: string }[] = [
  {
    q: "What is the Comfort Club?",
    a: "The Comfort Club is our maintenance membership. Right now, when you buy a year you get a second year free — plus priority service, no overtime charges, 2 seasonal tune-ups each year, and 15% off all repairs.",
  },
  {
    q: "What does a Comfort Club membership include?",
    a: "It includes two comprehensive seasonal tune-ups (Spring and Fall), priority service scheduling, no overtime charges, and a 15% discount on any necessary repairs. Join now and you'll get your second year free.",
  },
  {
    q: "How much can I save with the Comfort Club?",
    a: "With our current Buy a Year, Get a Year Free offer, your second year of membership is completely free. Members also skip overtime charges and get 15% off all repairs, so the savings add up fast.",
  },
  {
    q: "Do you offer emergency HVAC services?",
    a: "Yes, QRC provides 24/7/365 emergency response capability for all your residential, commercial, and industrial HVAC needs.",
  },
  {
    q: "What types of residential HVAC services do you provide?",
    a: "We offer AC repair, furnace repair, and ductless mini-split system design and installation, ensuring your home stays comfortable year-round.",
  },
  {
    q: "What commercial refrigeration services does QRC offer?",
    a: "Our commercial refrigeration services include installation, repair, and maintenance — plus custom walk-in cooler design and sales, ice machines, and ice makers for restaurants, stores, and cold-storage facilities.",
  },
  {
    q: "Are your technicians certified?",
    a: "Yes. Our technicians are fully certified and trained to handle residential, commercial, and industrial HVAC and refrigeration systems.",
  },
  {
    q: "Where does QRC provide services?",
    a: "We're based in Winston-Salem, NC. We serve residential customers across the Triad / North Carolina area, and commercial/industrial clients throughout North and South Carolina.",
  },
  {
    q: "How can I schedule a service or join the Comfort Club?",
    a: "Call us at (336) 223-5887 or fill out the form on this page. A QRC expert will follow up shortly to schedule your service or enroll you in the Comfort Club.",
  },
  {
    q: "What is a Tele-Tech appointment?",
    a: "A Tele-Tech appointment is a virtual diagnostic call with one of our certified technicians. It saves you time and truck-roll fees by solving simple issues remotely, or accurately scoping repairs before we arrive.",
  },
];
