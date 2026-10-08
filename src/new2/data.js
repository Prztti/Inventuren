// Data for the /new site.

// Track record of both partners. `who`: "david" (left lane), "philip" (right lane), "both" (joint, spans both lanes).
// Philip's entries come from his CV (released by him, 2026-09). Texts kept short on purpose.
export const TIMELINE = [
  { year: "2002", who: "philip",
    en: { title: "Telekom Austria — Digital Products", desc: "Digital products and e-commerce, integrated into billing and SLAs." },
    de: { title: "Telekom Austria — digitale Produkte", desc: "Digitale Produkte und E-Commerce, eingebunden in Verrechnung und SLAs." } },
  { year: "2005", who: "david",
    en: { title: "Co-Investment — Trimmobilien", desc: "First major co-investment: a Vienna residential portfolio." },
    de: { title: "Co-Investment Trimmobilien", desc: "Erstes großes Co-Investment: Wiener Wohnportfolio." } },
  { year: "2006", who: "philip",
    en: { title: "VeriSign / 3united — Mobile Integration", desc: "Technical project lead for international operator integrations of a download and payment platform." },
    de: { title: "VeriSign / 3united — Mobilfunk-Integration", desc: "Technische Projektleitung internationaler Betreiber-Integrationen für eine Download- und Payment-Plattform." } },
  { year: "2009", who: "david", key: true,
    en: { title: "Lansky, Ganzger & Partner", desc: "Built and led the International Real Estate Desk: cross-border deals for CEE and MENA clients." },
    de: { title: "Lansky, Ganzger & Partner", desc: "Aufbau und Leitung des International Real Estate Desk: grenzüberschreitende Deals für CEE und MENA." } },
  { year: "2012", who: "philip",
    en: { title: "RISE — Large-Scale IT Programmes", desc: "Programme lead and architecture, presales for public tenders." },
    de: { title: "RISE — IT-Großprojekte", desc: "Projektleitung und Architektur, Presales für öffentliche Ausschreibungen." } },
  { year: "2013", who: "david",
    en: { title: "Founding of geolad", desc: "Location intelligence and data analytics — from real estate to data." },
    de: { title: "Gründung geolad", desc: "Location Intelligence und Datenanalytik – von Immobilien zu Daten." } },
  { year: "2013", who: "philip", key: true,
    en: { title: "National Health Insurance Qatar", desc: "IT set-up with McKinsey: ministries, registries, data centre, ERP." },
    de: { title: "Nationale Krankenversicherung Katar", desc: "IT-Aufbau mit McKinsey: Ministerien, Register, Rechenzentrum, ERP." } },
  { year: "2015", who: "david", key: true,
    en: { title: "Deutsche Telekom — Data Hub", desc: "First mandate for a B2B platform monetising network data." },
    de: { title: "Deutsche Telekom — Data Hub", desc: "Erstes Mandat für eine B2B-Plattform zur Monetarisierung von Netzwerkdaten." } },
  { year: "2016", who: "both", roles: { en: ["Founder & CEO", "Advisor"], de: ["Gründer & CEO", "Berater"] },
    en: { title: "geolad", desc: "Philip Kügler advises the telecom data platform." },
    de: { title: "geolad", desc: "Philip Kügler berät die Telekom-Datenplattform." } },
  { year: "2017", who: "both", roles: { en: ["CEO", "CTO"], de: ["CEO", "CTO"] },
    en: { title: "TICO — Telecom Identity Product", desc: "Built together, with IP in the EU and the US." },
    de: { title: "TICO — Telekom-Identity-Produkt", desc: "Gemeinsam aufgebaut, mit IP in der EU und den USA." } },
  { year: "2017", who: "philip",
    en: { title: "OptInk — CTO & Co-Founder", desc: "Co-founded and led technology." },
    de: { title: "OptInk — CTO & Co-Founder", desc: "Mitgründer, Leitung Technologie." } },
  { year: "2018", who: "david",
    en: { title: "International Telco Consortium", desc: "Orange, Viettel, Zain, Huawei and Ericsson join." },
    de: { title: "Internationales Telekom-Konsortium", desc: "Orange, Viettel, Zain, Huawei und Ericsson treten bei." } },
  { year: "2020", who: "david",
    en: { title: "Digital Resilience Advisory", desc: "14 mandates in 9 months for real estate and telecom clients." },
    de: { title: "Digital Resilience Advisory", desc: "14 Mandate in 9 Monaten für Immobilien- und Telekom-Kunden." } },
  { year: "2020", who: "philip", key: true,
    en: { title: "Ministry of Finance — Customs", desc: "Product owner, Union Customs Code: EUR 10m+, 30+ systems." },
    de: { title: "Finanzministerium — Zoll", desc: "Product Owner im Unionszollkodex: über 10 Mio. €, 30+ Umfeldsysteme." } },
  { year: "2021", who: "david",
    en: { title: "PropTech Investment", desc: "Seed round in a Vienna AI property platform, with family offices." },
    de: { title: "PropTech-Beteiligung", desc: "Seed-Runde einer Wiener AI-Property-Plattform, mit Family Offices." } },
  { year: "2021", who: "philip", key: true,
    en: { title: "Untis — Identity for Schools", desc: "IAM and SSO for federal, state and school systems." },
    de: { title: "Untis — Identity für Schulen", desc: "IAM und SSO für Bund, Länder und Schulen." } },
  { year: "2023", who: "david", key: true,
    en: { title: "MENA Capital Bridge", desc: "Gulf capital for European real estate — his first GCC–Austria transaction." },
    de: { title: "MENA Capital Bridge", desc: "Golf-Kapital für europäische Immobilien – seine erste Transaktion zwischen Golfstaaten und Österreich." } },
  { year: "2025", who: "philip",
    en: { title: "Merkit Consulting — Managing Director", desc: "Process and test automation." },
    de: { title: "Merkit Consulting — Geschäftsführer", desc: "Prozess- und Testautomatisierung." } },
  { year: "2026", who: "both", final: true,
    en: { title: "prax.net — Our Joint Venture", desc: "Clinical referral network for psychosocial professionals in Austria. Plus: joint leadership of InVentures." },
    de: { title: "prax.net — unser Joint Venture", desc: "Klinisches Referral-Netzwerk für psychosoziale Fachkräfte in Österreich. Dazu: gemeinsame Führung von InVentures." } },
];

// Clients & partners, grouped. `tracks` decides where a group appears.
export const CLIENT_GROUPS = [
  { key: "telecom", tracks: ["home", "tech"], names: ["Deutsche Telekom", "A1 Group", "Telekom Austria", "Orange", "Zain Group", "Viettel", "Huawei", "Ericsson", "VeriSign"] },
  { key: "public", tracks: ["home", "tech"], names: ["Bundesministerium für Finanzen", "Supreme Council of Health – State of Qatar", "McKinsey & Company", "European Stroke Organisation", "World Stroke Organization"] },
  { key: "edu", tracks: ["home", "tech"], names: ["Donau-Universität Krems", "Untis"] },
  { key: "finance", tracks: ["home", "tech", "re"], names: ["Raiffeisen Bank International", "Wiener Privatbank SE", "Uniqa Versicherung", "Global Blue", "Arthur D. Little"] },
  { key: "industry", tracks: ["home", "tech"], names: ["Porsche Informatik (Volkswagen)", "RISE", "Match Maker Ventures"] },
  { key: "re", tracks: ["home", "re"], names: ["EPI Immobilien", "Conwert AG", "Trimmobilien Gruppe", "Akkadia Immobilien", "EPI Hospitality", "Arcotel Hotels", "Ibis Group", "Stadt Wien", "Sigmund Freud PrivatUniversität Wien"] },
  { key: "legal", tracks: ["home", "tech", "re"], names: ["Lansky, Ganzger & Partner", "Herbst Kinsky RAe", "DSC Rechtsanwälte", "ORF", "Integrationshaus Wien"] },
];

// Reference band: two rows by theme (David, 2026-09-23). The top row runs left, the bottom row
// runs right; each row shows its names in this order, strongest first within a theme.
// `row` 0 = top, 1 = bottom. `on` = pages that show the name (home, tech, re). The real estate
// page stays David's.
export const REFERENCES = [
  // ── top row
  // Öffentliche Hand
  { name: "Bundesministerium für Finanzen", row: 0, on: ["home", "tech"] },
  { name: "Stadt Wien", row: 0, on: ["home", "re"] },
  { name: "ORF", row: 0, on: ["home", "tech", "re"] },
  // Universitäten
  { name: "Donau-Universität Krems", row: 0, on: ["home", "tech"] },
  { name: "Sigmund Freud PrivatUniversität Wien", row: 0, on: ["home", "re"] },
  // Wissenschaft
  { name: "World Stroke Organization", row: 0, on: ["home", "tech"] },
  { name: "European Stroke Organisation", row: 0, on: ["home", "tech"] },
  // Beratung
  { name: "McKinsey & Company", row: 0, on: ["home", "tech"] },
  { name: "Arthur D. Little", row: 0, on: ["home", "tech"] },
  // Tech & Telekom, by group size at the time of the work
  { name: "Porsche Informatik (Volkswagen)", row: 0, on: ["home", "tech"] },
  { name: "Huawei", row: 0, on: ["home", "tech"] },
  { name: "Deutsche Telekom", row: 0, on: ["home", "tech"] },
  { name: "Orange", row: 0, on: ["home", "tech"] },
  { name: "Ericsson", row: 0, on: ["home", "tech"] },
  { name: "Viettel", row: 0, on: ["home", "tech"] },
  { name: "A1 Group", row: 0, on: ["home", "tech"] },
  { name: "Telekom Austria", row: 0, on: ["home", "tech"] },
  { name: "Zain Group", row: 0, on: ["home", "tech"] },
  { name: "VeriSign", row: 0, on: ["home", "tech"] },
  { name: "Untis", row: 0, on: ["home", "tech"] },
  { name: "RISE", row: 0, on: ["home", "tech"] },
  // Recht (lighter, so after tech)
  { name: "Lansky, Ganzger & Partner", row: 0, on: ["home", "tech", "re"] },
  { name: "Herbst Kinsky RAe", row: 0, on: ["home", "tech", "re"] },
  { name: "DSC Rechtsanwälte", row: 0, on: ["home", "tech", "re"] },
  // Gesellschaft
  { name: "Integrationshaus Wien", row: 0, on: ["home", "tech", "re"] },
  // Supreme Council of Health closes the row: the loop wraps, so it starts directly left of BMF
  { name: "Supreme Council of Health – State of Qatar", row: 0, on: ["home", "tech"] },
  // ── bottom row
  // Banken & Payments
  { name: "Raiffeisen Bank International", row: 1, on: ["home", "tech", "re"] },
  { name: "Wiener Privatbank SE", row: 1, on: ["home", "tech", "re"] },
  { name: "Global Blue", row: 1, on: ["home", "tech"] },
  // Förderungen (right after the banks, so they do not all sit next to RBI at the start)
  { name: "FFG – Forschungsförderungsgesellschaft", row: 1, on: ["home", "tech"] },
  { name: "aws – Austria Wirtschaftsservice", row: 1, on: ["home", "tech"] },
  { name: "WKO – Wirtschaftskammer Österreich", row: 1, on: ["home", "tech", "re"] },
  // Versicherungen
  { name: "Uniqa Versicherung", row: 1, on: ["home", "tech", "re"] },
  // Immobilien & Hospitality
  { name: "Ibis Group", row: 1, on: ["home", "re"] },
  { name: "Conwert AG", row: 1, on: ["home", "re"] },
  { name: "EPI Immobilien", row: 1, on: ["home", "re"] },
  { name: "Arcotel Hotels", row: 1, on: ["home", "re"] },
  { name: "Trimmobilien Gruppe", row: 1, on: ["home", "re"] },
  { name: "Akkadia Immobilien", row: 1, on: ["home", "re"] },
  { name: "EPI Hospitality", row: 1, on: ["home", "re"] },
  // Kapital
  { name: "Match Maker Ventures", row: 1, on: ["home", "tech"] },
];

// Logo files for the client marquee (downloaded from Wikimedia Commons, self-hosted in public/logos).
// h = display height in px, tuned per logo shape. Names without an entry are shown as a wordmark.
export const LOGOS = {
  "Deutsche Telekom": { src: "/logos/deutsche-telekom.svg", h: 38 },
  "A1 Group": { src: "/logos/a1.svg", h: 34 },
  "Telekom Austria": { src: "/logos/telekom-austria.svg", h: 40 },
  "Orange": { src: "/logos/orange.svg", h: 38 },
  "Zain Group": { src: "/logos/zain.svg", h: 30, dark: true },
  "Viettel": { src: "/logos/viettel.svg", h: 24 },
  "Huawei": { src: "/logos/huawei.svg", h: 20 },
  "Ericsson": { src: "/logos/ericsson.svg", h: 40 },
  "VeriSign": { src: "/logos/verisign.svg", h: 30 },
  "Bundesministerium für Finanzen": { src: "/logos/bmf.svg", h: 30 },
  "McKinsey & Company": { src: "/logos/mckinsey.svg", h: 22 },
  "Sigmund Freud PrivatUniversität Wien": { src: "/logos/sfu.svg", h: 40 },
  "Raiffeisen Bank International": { src: "/logos/rbi.svg", h: 32 },
  "Uniqa Versicherung": { src: "/logos/uniqa.svg", h: 38 },
  "Arthur D. Little": { src: "/logos/arthur-d-little.svg", h: 20 },
  "Porsche Informatik (Volkswagen)": { src: "/logos/porsche-informatik.jpg", h: 30, raster: true },
  "Conwert AG": { src: "/logos/conwert.svg", h: 34 },
  "EPI Immobilien": { src: "/logos/epi.png", h: 30, raster: true },
  "Ibis Group": { src: "/logos/ibis.svg", h: 38 },
  "Stadt Wien": { src: "/logos/stadt-wien.svg", h: 36 },
  "ORF": { src: "/logos/orf.svg", h: 22 },
  "Integrationshaus Wien": { src: "/logos/integrationshaus.jpg", h: 32, raster: true },
};
