// Data for the /new site.

// Track record of both partners. `who`: "david" (left lane), "philip" (right lane), "both" (joint, spans both lanes).
// Philip's entries come from his CV (released by him, 2026-09). Texts kept short on purpose.
export const TIMELINE = [
  { year: "2002", who: "philip",
    en: { title: "Telekom Austria — Digital Products", desc: "Digital products and e-commerce, integrated into billing and SLAs." },
    de: { title: "Telekom Austria — digitale Produkte", desc: "Digitale Produkte und E-Commerce, eingebunden in Verrechnung und SLAs." },
    cn: { title: "奥地利电信——数字产品", desc: "数字产品与电子商务，集成计费与SLA。" } },
  { year: "2005", who: "david",
    en: { title: "Co-Investment — Trimmobilien", desc: "First major co-investment: a Vienna residential portfolio." },
    de: { title: "Co-Investment Trimmobilien", desc: "Erstes großes Co-Investment: Wiener Wohnportfolio." },
    cn: { title: "共同投资Trimmobilien", desc: "首个重要共同投资：维也纳住宅资产组合。" } },
  { year: "2006", who: "philip",
    en: { title: "VeriSign / 3united — Mobile Integration", desc: "Technical project lead for international operator integrations of a download and payment platform." },
    de: { title: "VeriSign / 3united — Mobilfunk-Integration", desc: "Technische Projektleitung internationaler Betreiber-Integrationen für eine Download- und Payment-Plattform." },
    cn: { title: "VeriSign / 3united——移动运营商集成", desc: "为下载与支付平台主导国际运营商集成的技术项目管理。" } },
  { year: "2009", who: "david", key: true,
    en: { title: "Lansky, Ganzger & Partner", desc: "Built and led the International Real Estate Desk: cross-border deals for CEE and MENA clients." },
    de: { title: "Lansky, Ganzger & Partner", desc: "Aufbau und Leitung des International Real Estate Desk: Cross-Border-Deals für CEE und MENA." },
    cn: { title: "Lansky, Ganzger & Partner律所", desc: "组建并领导国际房地产部：为中东欧与中东北非客户完成跨境交易。" } },
  { year: "2012", who: "philip",
    en: { title: "RISE — Large-Scale IT Programmes", desc: "Programme lead and architecture, presales for public tenders." },
    de: { title: "RISE — IT-Großprojekte", desc: "Projektleitung und Architektur, Presales für öffentliche Ausschreibungen." },
    cn: { title: "RISE——大型IT项目", desc: "项目领导与架构设计，公共招标售前。" } },
  { year: "2013", who: "david",
    en: { title: "Founding of geolad", desc: "Location intelligence and data analytics — from real estate to data." },
    de: { title: "Gründung geolad", desc: "Location Intelligence und Datenanalytik – von Immobilien zu Daten." },
    cn: { title: "创立geolad", desc: "位置智能与数据分析——从房地产走向数据。" } },
  { year: "2013", who: "philip", key: true,
    en: { title: "National Health Insurance Qatar", desc: "IT build-up with McKinsey: ministries, registries, data centre, ERP." },
    de: { title: "Nationale Krankenversicherung Katar", desc: "IT-Aufbau mit McKinsey: Ministerien, Register, Rechenzentrum, ERP." },
    cn: { title: "卡塔尔国家医疗保险", desc: "与麦肯锡共同完成IT建设：部委、登记系统、数据中心、ERP。" } },
  { year: "2015", who: "david", key: true,
    en: { title: "Deutsche Telekom — Data Hub", desc: "First mandate for a B2B platform monetising network data." },
    de: { title: "Deutsche Telekom — Data Hub", desc: "Erstes Mandat für eine B2B-Plattform zur Monetarisierung von Netzwerkdaten." },
    cn: { title: "德国电信——数据中心", desc: "首个网络数据变现B2B平台委托。" } },
  { year: "2016", who: "both", roles: { en: ["Founder & CEO", "Advisor"], de: ["Gründer & CEO", "Advisor"], cn: ["创始人兼CEO", "顾问"] },
    en: { title: "geolad", desc: "Philip Kügler advises the telecom data platform." },
    de: { title: "geolad", desc: "Philip Kügler berät die Telekom-Datenplattform." },
    cn: { title: "geolad", desc: "Philip Kügler为电信数据平台提供咨询。" } },
  { year: "2017", who: "both", roles: { en: ["CEO", "CTO"], de: ["CEO", "CTO"], cn: ["CEO", "CTO"] },
    en: { title: "TICO — Telecom Identity Product", desc: "Built together, with IP in the EU and the US." },
    de: { title: "TICO — Telekom-Identity-Produkt", desc: "Gemeinsam aufgebaut, mit IP in der EU und den USA." },
    cn: { title: "TICO——电信身份产品", desc: "共同打造，在欧盟和美国拥有知识产权。" } },
  { year: "2017", who: "philip",
    en: { title: "OptInk — CTO & Co-Founder", desc: "Co-founded and led technology." },
    de: { title: "OptInk — CTO & Co-Founder", desc: "Mitgegründet, Technologie verantwortet." },
    cn: { title: "OptInk——CTO兼联合创始人", desc: "联合创立并负责技术。" } },
  { year: "2018", who: "david",
    en: { title: "International Telco Consortium", desc: "Orange, Viettel, Zain, Huawei and Ericsson join." },
    de: { title: "Internationales Telko-Konsortium", desc: "Orange, Viettel, Zain, Huawei und Ericsson treten bei." },
    cn: { title: "国际电信联盟", desc: "Orange、Viettel、Zain、华为与爱立信加入。" } },
  { year: "2020", who: "david",
    en: { title: "Digital Resilience Advisory", desc: "14 mandates in 9 months for real estate and telecom clients." },
    de: { title: "Digital Resilience Advisory", desc: "14 Mandate in 9 Monaten für Immobilien- und Telekom-Kunden." },
    cn: { title: "数字韧性咨询", desc: "9个月内为房地产与电信客户完成14项委托。" } },
  { year: "2020", who: "philip", key: true,
    en: { title: "Ministry of Finance — Customs", desc: "Product owner, Union Customs Code: EUR 10m+, 30+ systems." },
    de: { title: "Finanzministerium — Zoll", desc: "Product Owner im Unionszollkodex: über 10 Mio. €, 30+ Umfeldsysteme." },
    cn: { title: "奥地利财政部——海关", desc: "欧盟海关法典产品负责人：逾1000万欧元，30多个系统。" } },
  { year: "2021", who: "david",
    en: { title: "PropTech Investment", desc: "Seed round in a Vienna AI property platform, with family offices." },
    de: { title: "PropTech-Beteiligung", desc: "Seed-Runde einer Wiener AI-Property-Plattform, mit Family Offices." },
    cn: { title: "房地产科技投资", desc: "与家族办公室共同投资维也纳AI物业平台种子轮。" } },
  { year: "2021", who: "philip", key: true,
    en: { title: "Untis — Identity for Schools", desc: "IAM and SSO for federal, state and school systems." },
    de: { title: "Untis — Identity für Schulen", desc: "IAM und SSO für Bund, Länder und Schulen." },
    cn: { title: "Untis——学校身份管理", desc: "为联邦、州与学校系统提供身份管理与单点登录。" } },
  { year: "2023", who: "david", key: true,
    en: { title: "MENA Capital Bridge", desc: "Gulf capital for European real estate — his first GCC–Austria transaction." },
    de: { title: "MENA Capital Bridge", desc: "Golf-Kapital für europäische Immobilien – seine erste Transaktion zwischen Golfstaaten und Österreich." },
    cn: { title: "中东北非资本桥梁", desc: "引入海湾资本投资欧洲房地产——完成其首笔海湾—奥地利交易。" } },
  { year: "2025", who: "philip",
    en: { title: "Merkit Consulting — Managing Director", desc: "Process and test automation." },
    de: { title: "Merkit Consulting — Geschäftsführer", desc: "Prozess- und Testautomatisierung." },
    cn: { title: "Merkit Consulting——总经理", desc: "流程与测试自动化。" } },
  { year: "2026", who: "both", final: true,
    en: { title: "prax.net — Our Joint Venture", desc: "Clinical referral network for psychosocial professionals in Austria. Plus: joint leadership of InVentures." },
    de: { title: "prax.net — gemeinsames Joint Venture", desc: "Klinisches Referral-Netzwerk für psychosoziale Fachkräfte in Österreich. Dazu: gemeinsame Führung von InVentures." },
    cn: { title: "prax.net——共同创办的合资企业", desc: "面向奥地利心理社会专业人士的临床转介网络。并共同领导InVentures。" } },
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
