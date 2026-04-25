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
  comfortClubPrice: "$50/year per system",
} as const;

export const SERVICE_OPTIONS = [
  { value: "residential-hvac", label: "Residential HVAC" },
  { value: "commercial-refrigeration", label: "Commercial Refrigeration" },
  {
    value: "commercial-industrial-hvac",
    label: "Commercial & Industrial HVAC",
  },
  { value: "emergency", label: "Emergency Service" },
  { value: "other", label: "Other" },
] as const;

export type ServiceValue = (typeof SERVICE_OPTIONS)[number]["value"];

export const FAQS: { q: string; a: string }[] = [
  {
    q: "What is the Comfort Club For Life?",
    a: "The Comfort Club For Life is our exclusive maintenance program, offering 2 seasonal tune-ups annually, priority service, guaranteed pricing, and a 15% discount on all repairs for just $50 per year per system, locked for life.",
  },
  {
    q: "What does the $50 Comfort Club membership include?",
    a: "It includes two comprehensive seasonal tune-ups (Spring and Fall), priority service scheduling, guaranteed pricing on all services, and a 15% discount on any necessary repairs.",
  },
  {
    q: "How much can I save with the Comfort Club?",
    a: "Members enjoy 75% savings on annual maintenance costs compared to non-member rates, plus 15% off all repairs.",
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
