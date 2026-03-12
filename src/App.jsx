import { useState, useEffect, useRef, useCallback } from "react";
import AvatarWidget from "./AvatarWidget";
import NewsSection from "./NewsSection";
import Timeline from "./Timeline";
import ContactForm from "./ContactForm";
import PartnerLogos from "./PartnerLogos";
import InVenturesView from "./InVenturesView";
import TrackArticle from "./TrackArticle";
import LegalModal from "./LegalModal";

const C = {
  bg:"#F5F4F1",surface:"#ECEAE6",surfaceAlt:"#E4E2DD",
  border:"rgba(0,0,0,0.06)",
  silver:"#8A96A3",silverText:"#6B7D8C",silverSoft:"rgba(138,150,163,0.1)",
  teal:"#8A96A3",tealText:"#6B7D8C",tealSoft:"rgba(138,150,163,0.1)",
  gold:"#9A7B42",goldText:"#B8924E",goldSoft:"rgba(154,123,66,0.12)",
  white:"#1A1A1A",dim:"#6B7280",muted:"#8A919A",
  cream:"#FFFFFF",warm:"#F7F6F3",dark:"#1A1A1A",
};
const TC = {
  tech:{a:C.silver,at:C.silverText,as:C.silverSoft},
  re:{a:C.gold,at:C.goldText,as:C.goldSoft},
};

const TX = {
en:{
  claim:["Analysis.","Execution.","Impact."],
  since06:"Since 2006", since15:"Since 2015",
  selectTitle:"Two disciplines. One network.",
  selectSub:"Select your area of interest",
  tracks:{
    tech:{label:"Tech & AI",sub:"AI Transformation · Implementation · Accelerator"},
    re:{label:"Real Estate &\nHospitality",sub:"Sale & Acquisition · Transactions · Project Leadership"},
  },
  nav:["Profile","Partners","Services","Network","Process","News","Contact"],
  partnerTitle:"Clients & Partners",fo:"+ undisclosed Family Offices",
  fLabel:"Founder",
  fQ:"Thinking like a lawyer. Acting like an entrepreneur. Executing with high Impact.",
  networkLabel:"Network & Execution",
  networkTitle:"The right team for every challenge.",
  networkP:"I don't just advise — I execute. With the right experts, assembled project-specifically from a proven network spanning Legal, Tech, Real Estate, Finance and Industry. This is what separates consulting from impact.",
  networkBadge:"Consulting & Execution",
  clusters:{
    tech:[
      {n:"Legal",d:"Corporate, IP & regulatory — Lansky & Partner RAe, Prader Rechtsanwaelte"},
      {n:"Tech & AI",d:"Software architects, AI specialists, data engineers, product builders"},
      {n:"Real Estate",d:"EPI Immobilien Group, Akkadia Immobilien, hospitality operators"},
      {n:"Finance",d:"Raiffeisen Bank International, Wiener Privatbank SE, VCs, Family Offices"},
      {n:"Industry",d:"Telecom operators, enterprise transformation leaders, Uniqa Versicherung"},
    ],
    re:[
      {n:"Legal",d:"DSC Rechtsanwälte, Herbst Kinsky RAe — RE, corporate & transaction law. Small specialized boutiques."},
      {n:"Real Estate",d:"EPI Immobilien Group, Akkadia Immobilien, Arcotel Hotels, Plaza Group"},
      {n:"Finance",d:"Raiffeisen Bank International, Wiener Privatbank SE, Family Offices"},
      {n:"Industry",d:"Uniqa Versicherung, Stadt Wien, construction & development partners"},
      {n:"Tech & AI",d:"PropTech, digital asset management, AI process automation"},
    ],
  },
  cLabel:"Contact",cTitle:"Get in touch.",
  cP:"For strategic enquiries, partnership opportunities or accelerator applications.",
  loc:"Vienna, Austria",ent:"InVentures GmbH",entSub:"formerly Inside Holding & Real Estate GmbH (est. 2010)",
  re:{
    heroP:"Over EUR 450M in transactions across residential, commercial and hospitality. Deal structuring, project leadership and hands-on execution — from sale to acquisition.",
    ctaA:"Explore Real Estate",ctaB:"Services",
    stats:[{v:"€600m+",l:"Transaction volume advised"},{v:"€35m+",l:"VC & growth capital mobilised"},{v:"€12m+",l:"Research grants secured"},{v:"20+",l:"Years cross-sector expertise"},{v:"40+",l:"Projects in DACH & MENA"},{v:"6",l:"Industry verticals"}],
    fP1:"Lawyer and serial CEO with over 25 years of real estate and hospitality experience. Transaction record exceeding EUR 450 million across residential, commercial and hotel portfolios.",
    fP2:"Trusted advisor and project lead for institutional investors, family offices and developers across Austria, MENA and beyond. Active network partner with EPI Immobilien Group and leading Austrian hospitality operators.",
    secLabel:"Focus Areas",
    sec:["Residential","Commercial & Office","Hotel & Hospitality","Retail & Mixed Use","Development Projects","Sale & Acquisition"],
    secDetail:["EPI Immobilien Group, Trimmobilien Gruppe, Conwert SE, Akkadia Immobilien","Strategic advisory on commercial acquisitions and disposals","Arcotel Hotels, Plaza Group, Ibis Group — hotel transactions & advisory","Mixed-use project advisory and transaction structuring","Project development advisory, feasibility, regulatory coordination","End-to-end buy-side and sell-side transaction management"],
    tLabel:"Real Estate Expertise",tTitle:"From first analysis to successful closing.",
    tP:"Deep market knowledge, legal precision and operational execution. We structure and lead real estate transactions — always with the goal of a clean, timely, value-maximising result.",
    opexT:"Transaction & Advisory",
    opex:["Strategic market and feasibility analysis","Full due diligence process: legal, financial, technical and commercial","Financing and equity structuring advisory","Stakeholder management and negotiation leadership","Regulatory and zoning process coordination"],
    revT:"Sale, Acquisition & Project Leadership",
    rev:["Buy-side and sell-side mandate management","Project development oversight from concept to handover","Hospitality repositioning and brand advisory","Cross-border deal sourcing (EU, MENA)","Distressed asset advisory and restructuring"],
    kpis:[{v:"EUR 450M+",l:"transaction record across asset classes"},{v:"25+",l:"years of real estate advisory & execution"},{v:"EU & MENA",l:"transaction reach across markets"}],
    sLabel:"Services",sTitle:"What we do in Real Estate & Hospitality",
    serv:[
      {n:"01",t:"Transaction Advisory",d:"Buy-side and sell-side mandate execution. Market analysis, full due diligence (legal, financial, technical), structuring, negotiation and successful closing.",tags:["Acquisitions","Sales","Due Diligence"]},
      {n:"02",t:"Project Management & Leadership",d:"Hands-on project leadership for development, refurbishment and repositioning. Budget, timeline, contractor and authority management.",tags:["Project Mgmt","Development","Execution"]},
      {n:"03",t:"Hospitality Advisory",d:"Strategic advisory for hotel and F&B assets: repositioning, brand selection, operator negotiations and value-add identification.",tags:["Hotels","F&B","Repositioning"]},
      {n:"04",t:"RE Structuring & Legal",d:"Transaction structuring, corporate law, financing coordination and closing documentation. Cross-border (EU, MENA).",tags:["Structuring","Legal","Cross-Border"]},
    ],
    pLabel:"Process",pTitle:"From first brief to successful closing",
    proc:[
      {n:"01",t:"Initial Brief",sub:"Week 1",d:"Define mandate, objectives, timeline and key constraints"},
      {n:"02",t:"Market & Asset Analysis",sub:"Week 2–3",d:"Deep analysis: market data, legal framework, risk assessment"},
      {n:"03",t:"Strategy & Structuring",sub:"Week 3–5",d:"Transaction structure, financing approach, negotiation strategy"},
      {n:"04",t:"Execution & Negotiation",sub:"Month 2–4",d:"Active deal management, stakeholder negotiation, authority coordination"},
      {n:"05",t:"Closing & Handover",sub:"Month 3–6",d:"Successful closing, documentation, post-closing integration"},
    ],
    pBar:"Typical transaction timeline:",pBarB:"3–6 months",pBarC:"from mandate to successful closing",pBadge:"Hands-On Execution",
  },
  tech:{
    heroP:"Strategic sparring, AI-driven enterprise transformation and disruptive Agentic AI implementation. OPEX reduction and new revenue streams — measurable within 6 to 9 months.",
    ctaA:"Discover AI Transformation",ctaB:"Services",
    stats:[{v:"€600m+",l:"Transaction volume advised"},{v:"€35m+",l:"VC & growth capital mobilised"},{v:"€12m+",l:"Research grants secured"},{v:"20+",l:"Years cross-sector expertise"},{v:"40+",l:"Projects in DACH & MENA"},{v:"6",l:"Industry verticals"}],
    fP1:"Lawyer, startup founder and serial CEO with over 25 years of operational experience. Transaction record exceeding EUR 200 million across six sectors — from telecom to real estate, hospitality, science and social impact.",
    fP2:"Commissioned in 2015 as a pioneer by Deutsche Telekom and A1 Group to develop new digital revenue streams. Founder and CEO of Geolad GmbH — a multinational telecom data platform with 30+ employees and partners across EU and Asia.",
    secLabel:"Sectors",
    sec:["Telecom & Data","Real Estate","Science & Education","Legal","Hospitality","Social Impact"],
    secDetail:["Deutsche Telekom, A1 Group, Orange, Zain, Viettel, Huawei, Ericsson","Conwert SE, Arcotel Hotels, Trimmobilien Gruppe","European Stroke Organisation, SFU Wien, Donau Universitaet Krems","Lansky & Partner RAe, Prader Rechtsanwaelte","Arcotel Hotels, Plaza Group, Ibis Group","Integrationshaus Wien, ORF, Red Bull, Verein vidid"],
    compLabel:"Data Compliance & AI Regulation",compTitle:"8 Years of GDPR Expertise. Ready for the EU AI Act.",
    compP:"Since the inception of the GDPR in 2018, we have been advising and implementing data protection compliance across multiple industries. This deep regulatory expertise now extends to the EU AI Act — ensuring that AI-driven transformation is not only effective, but fully compliant.",
    compItems:["8 years of hands-on GDPR implementation across telecom, real estate, hospitality and science","Data Protection Impact Assessments (DPIAs) for AI systems and automated decision-making","EU AI Act readiness: risk classification, conformity assessments, documentation obligations","Design of compliant AI governance frameworks and data processing architectures","Cross-border data transfer structuring (EU, MENA, ASEAN) under Schrems II requirements","Training and enablement of teams for privacy-by-design and AI compliance culture"],
    tLabel:"AI Transformation & Implementation",tTitle:"OPEX Reduction & New Revenue Streams",
    tP:"We don't transform enterprises in theory — we implement measurable results. Two levers: reduce operational costs and unlock new income sources. Both AI-driven, both demonstrable within 6 to 9 months.",
    opexT:"OPEX Reduction",
    opex:["AI-driven automation of repetitive processes","Reduction of manual error rates and rework costs","Intelligent document management and contract analysis","Consolidation of fragmented data sources and systems","Predictive maintenance replacing reactive cost drivers"],
    revT:"New Revenue Streams",
    rev:["Data monetisation from existing enterprise assets","AI-driven product and service development","Digital platform and marketplace models","Cross-selling through intelligent customer analytics","Scalable SaaS components from internal solutions"],
    kpis:[{v:"6–9",u:" Months",l:"to measurable results"},{v:"30%+",l:"typical OPEX savings in target processes"},{v:"Net New",l:"revenue streams from existing assets",c:C.goldText}],
    sLabel:"Services",sTitle:"What we do",
    serv:[
      {n:"01",t:"Strategic Sparring & Advisory",d:"C-level strategic reflection with cross-sector perspective. Transaction support in complex stakeholder environments. Interim management.",tags:["CEO Sparring","Transactions","Interim"]},
      {n:"02",t:"AI & Data Consulting",d:"Industry-specific AI advisory from readiness assessment to operational implementation. AI agents, data platforms, predictive analytics — GDPR and EU AI Act compliant.",tags:["AI Agents","Data Strategy","EU AI Act"]},
      {n:"03",t:"AI Transformation & Implementation",d:"End-to-end AI transformation. Workflow automation, intelligent document management, change management for AI-driven work processes.",tags:["Automation","Implementation","Dashboards"]},
      {n:"04",t:"Incubator & Company Building",d:"Building tech startups with founder experience: ideation, incorporation, fundraising, international scaling.",tags:["Building","Fundraising","Scaling"]},
      {n:"05",t:"Accelerator",d:"Fast-track programme for early-stage ventures: structured mentoring, network access, investor introductions and go-to-market support.",tags:["Accelerator","Mentoring","Go-to-Market"]},
    ],
    pLabel:"Process",pTitle:"From analysis to results in 6–9 months",
    proc:[
      {n:"01",t:"Initial Meeting",sub:"Week 1",d:"Identify scope, objectives and quick-win potential"},
      {n:"02",t:"Case Analysis",sub:"Week 2–3",d:"Deep-dive: processes, data, stakeholders, bottlenecks"},
      {n:"03",t:"Strategy Plan",sub:"Week 4–5",d:"Action plan with KPIs, responsibilities, milestones"},
      {n:"04",t:"Execution",sub:"Month 2–6",d:"Operational implementation, AI integration, change management"},
      {n:"05",t:"Revenue Impact",sub:"Month 6–9",d:"Measurable OPEX reduction and activated revenue streams"},
    ],
    pBar:"Total duration:",pBarB:"6–9 months",pBarC:"from first meeting to measurable revenue impact",pBadge:"Committed Timeline",
  },
},
de:{
  claim:["Analysis.","Execution.","Impact."],
  since06:"Seit 2006",since15:"Seit 2015",
  selectTitle:"Zwei Disziplinen. Ein Netzwerk.",
  selectSub:"Wählen Sie Ihren Bereich",
  tracks:{
    tech:{label:"Tech & AI",sub:"AI-Transformation · Implementierung · Accelerator"},
    re:{label:"Real Estate &\nHospitality",sub:"Verkauf & Ankauf · Transaktionen · Projektleitung"},
  },
  nav:["Profil","Partner","Leistungen","Netzwerk","Prozess","News","Kontakt"],
  partnerTitle:"Kunden & Partner",fo:"+ undisclosed Family Offices",
  fLabel:"Gründer",
  fQ:"Juristisch denkend. Unternehmerisch handelnd. Mit hohem Impact umsetzend.",
  networkLabel:"Netzwerk & Execution",
  networkTitle:"Das richtige Team für jede Herausforderung.",
  networkP:"Nicht nur Beratung — Umsetzung. Mit den richtigen Experten, projektspezifisch zusammengestellt aus einem bewährten Netzwerk in Legal, Tech, Real Estate, Finance und Industry.",
  networkBadge:"Consulting & Execution",
  clusters:{
    tech:[
      {n:"Legal",d:"Gesellschafts-, IP- & Regulierungsrecht — Lansky & Partner RAe, Prader Rechtsanwaelte"},
      {n:"Tech & AI",d:"Software-Architekten, AI-Spezialisten, Data Engineers, Product Builder"},
      {n:"Real Estate",d:"EPI Immobilien Group, Akkadia Immobilien, Hospitality-Operators"},
      {n:"Finance",d:"Raiffeisen Bank International, Wiener Privatbank SE, VCs, Family Offices"},
      {n:"Industry",d:"Telekom-Operatoren, Enterprise-Transformationsexperten, Uniqa Versicherung"},
    ],
    re:[
      {n:"Legal",d:"DSC Rechtsanwälte, Herbst Kinsky RAe — Immobilien-, Gesellschafts- & Transaktionsrecht. Kleine spezialisierte Boutiquen."},
      {n:"Real Estate",d:"EPI Immobilien Group, Akkadia Immobilien, Arcotel Hotels, Plaza Group"},
      {n:"Finance",d:"Raiffeisen Bank International, Wiener Privatbank SE, Family Offices"},
      {n:"Industry",d:"Uniqa Versicherung, Stadt Wien, Bau- & Entwicklungspartner"},
      {n:"Tech & AI",d:"PropTech, digitales Asset-Management, AI-Prozessautomatisierung"},
    ],
  },
  cLabel:"Kontakt",cTitle:"Get in touch.",
  cP:"Für strategische Anfragen, Partnerschaftsmöglichkeiten oder Accelerator-Bewerbungen.",
  loc:"Wien, Österreich",ent:"InVentures GmbH",entSub:"vormals Inside Holding & Real Estate GmbH (gegr. 2010)",
  re:{
    heroP:"Über EUR 450 Mio. in Transaktionen in Wohn-, Gewerbe- und Hospitality-Immobilien. Deal-Strukturierung, Projektleitung und operative Umsetzung — vom Verkauf bis zum Ankauf.",
    ctaA:"Real Estate entdecken",ctaB:"Leistungen",
    stats:[{v:"€600m+",l:"Beratenes Transaktionsvolumen"},{v:"€35m+",l:"Mobilisiertes VC-Kapital"},{v:"€12m+",l:"Forschungsförderungen"},{v:"20+",l:"Jahre Expertise"},{v:"40+",l:"Projekte in DACH & MENA"},{v:"6",l:"Industrie-Vertikale"}],
    fP1:"Jurist und Mehrfach-CEO mit über 25 Jahren Immobilien- und Hospitality-Erfahrung. Transaction Record von über EUR 450 Mio. in Wohn-, Gewerbe- und Hotel-Portfolios.",
    fP2:"Vertrauenspartner und Projektleiter für institutionelle Investoren, Family Offices und Developer. Aktiver Netzwerkpartner der EPI Immobilien Group und führender österreichischer Hospitality-Operators.",
    secLabel:"Schwerpunkte",
    sec:["Wohnimmobilien","Gewerbe & Büro","Hotel & Hospitality","Retail & Mixed Use","Entwicklungsprojekte","Verkauf & Ankauf"],
    secDetail:["EPI Immobilien Group, Trimmobilien Gruppe, Conwert SE, Akkadia Immobilien","Strategische Beratung bei gewerblichen An- und Verkäufen","Arcotel Hotels, Plaza Group, Ibis Group — Hotel-Transaktionen & Advisory","Mixed-Use Projektberatung und Transaktionsstrukturierung","Projektentwicklungsberatung, Machbarkeit, Behördenkoordination","End-to-End Buy-Side und Sell-Side Mandatsbetreuung"],
    tLabel:"Real Estate Expertise",tTitle:"Von der ersten Analyse bis zum erfolgreichen Closing.",
    tP:"Tiefes Marktwissen, rechtliche Präzision und operative Umsetzung. Wir strukturieren und leiten Immobilientransaktionen — immer mit dem Ziel eines sauberen, termingerechten, wertoptimierenden Ergebnisses.",
    opexT:"Transaktion & Advisory",
    opex:["Strategische Markt- und Machbarkeitsanalyse","Vollständiger Due-Diligence-Prozess: rechtlich, finanziell, technisch und kaufmännisch","Finanzierungs- und Eigenkapitalstrukturierung","Stakeholder-Management und Verhandlungsführung","Behörden- und Widmungsprozesskoordination"],
    revT:"Verkauf, Ankauf & Projektleitung",
    rev:["Buy-Side und Sell-Side Mandatsführung","Projektentwicklungssteuerung von der Planung bis zur Übergabe","Hospitality-Repositionierung und Markenberatung","Grenzüberschreitendes Deal-Sourcing (EU, MENA)","Advisory bei distressed Assets und Restrukturierung"],
    kpis:[{v:"EUR 450M+",l:"Transaction Record über Asset-Klassen"},{v:"25+",l:"Jahre Immobilienberatung & Execution"},{v:"EU & MENA",l:"Transaktionsraum über Märkte"}],
    sLabel:"Leistungen",sTitle:"Was wir im Bereich Real Estate & Hospitality tun",
    serv:[
      {n:"01",t:"Transaktions-Advisory",d:"Buy-Side und Sell-Side Mandatsbetreuung. Marktanalyse, vollständige Due Diligence (rechtlich, finanziell, technisch), Strukturierung, Verhandlung und erfolgreiches Closing.",tags:["Ankauf","Verkauf","Due Diligence"]},
      {n:"02",t:"Projektmanagement & -leitung",d:"Operative Projektleitung bei Entwicklung, Sanierung und Repositionierung. Budget, Zeitplan, Generalunternehmer- und Behördenmanagement.",tags:["Projektleitung","Entwicklung","Execution"]},
      {n:"03",t:"Hospitality Advisory",d:"Strategische Beratung für Hotel- und F&B-Assets: Repositionierung, Markenwahl, Operatorverhandlungen und Wertsteigerungspotenziale.",tags:["Hotels","F&B","Repositionierung"]},
      {n:"04",t:"RE-Strukturierung & Legal",d:"Transaktionsstrukturierung, Gesellschaftsrecht, Finanzierungskoordination und Closing-Dokumentation. Grenzüberschreitend (EU, MENA).",tags:["Strukturierung","Legal","Cross-Border"]},
    ],
    pLabel:"Prozess",pTitle:"Vom ersten Briefing bis zum erfolgreichen Closing",
    proc:[
      {n:"01",t:"Erstbriefing",sub:"Woche 1",d:"Mandat, Ziele, Zeitplan und Rahmenbedingungen definieren"},
      {n:"02",t:"Markt- & Asset-Analyse",sub:"Woche 2–3",d:"Tiefenanalyse: Marktdaten, rechtlicher Rahmen, Risikobeurteilung"},
      {n:"03",t:"Strategie & Strukturierung",sub:"Woche 3–5",d:"Transaktionsstruktur, Finanzierungsansatz, Verhandlungsstrategie"},
      {n:"04",t:"Execution & Verhandlung",sub:"Monat 2–4",d:"Aktives Deal-Management, Stakeholder-Verhandlung, Behördenkoordination"},
      {n:"05",t:"Closing & Übergabe",sub:"Monat 3–6",d:"Erfolgreiches Closing, Dokumentation, Post-Closing-Integration"},
    ],
    pBar:"Typischer Transaktionszeitraum:",pBarB:"3–6 Monate",pBarC:"vom Mandat bis zum erfolgreichen Closing",pBadge:"Operative Execution",
  },
  tech:{
    heroP:"Strategisches Sparring, AI-gestützte Unternehmenstransformation und disruptive Agentic-AI-Implementierung. OPEX-Reduktion und neue Revenue Streams – messbar innerhalb von 6 bis 9 Monaten.",
    ctaA:"AI-Transformation entdecken",ctaB:"Leistungen",
    stats:[{v:"€600m+",l:"Beratenes Transaktionsvolumen"},{v:"€35m+",l:"Mobilisiertes VC-Kapital"},{v:"€12m+",l:"Forschungsförderungen"},{v:"20+",l:"Jahre Expertise"},{v:"40+",l:"Projekte in DACH & MENA"},{v:"6",l:"Industrie-Vertikale"}],
    fP1:"Jurist, Startup-Founder und Mehrfach-CEO mit über 25 Jahren operativer Erfahrung. Transaction Record von über 200 Mio. EUR über sechs Branchen hinweg.",
    fP2:"Bereits 2015 als Pionier von der Deutschen Telekom und A1 Group beauftragt, neue digitale Revenue Streams zu entwickeln. Gründer der Geolad GmbH – Telekom-Datenplattform mit 30+ Mitarbeitern und Partnern in EU und Asien.",
    secLabel:"Sektoren",
    sec:["Telekom & Data","Immobilien","Science & Education","Legal","Hospitality","Social Impact"],
    secDetail:["Deutsche Telekom, A1 Group, Orange, Zain, Viettel, Huawei, Ericsson","Conwert SE, Arcotel Hotels, Trimmobilien Gruppe","European Stroke Organisation, SFU Wien, Donau Universitaet Krems","Lansky & Partner RAe, Prader Rechtsanwaelte","Arcotel Hotels, Plaza Group, Ibis Group","Integrationshaus Wien, ORF, Red Bull, Verein vidid"],
    compLabel:"Data Compliance & AI-Regulierung",compTitle:"8 Jahre DSGVO-Expertise. Bereit für den EU AI Act.",
    compP:"Seit Inkrafttreten der DSGVO 2018 beraten und implementieren wir Datenschutz-Compliance über mehrere Branchen hinweg. Diese Expertise erstreckt sich nun auf den EU AI Act.",
    compItems:["8 Jahre hands-on DSGVO-Implementierung in Telekom, Immobilien, Hospitality und Science","Datenschutz-Folgenabschätzungen für AI-Systeme und automatisierte Entscheidungsfindung","EU AI Act Readiness: Risikoklassifizierung, Konformitätsbewertungen, Dokumentationspflichten","Design complianter AI-Governance-Frameworks und Datenverarbeitungsarchitekturen","Cross-Border-Datentransfer-Strukturierung (EU, MENA, ASEAN) unter Schrems-II-Anforderungen","Training und Enablement von Teams für Privacy-by-Design und AI-Compliance-Kultur"],
    tLabel:"AI Transformation & Implementation",tTitle:"OPEX-Reduktion & neue Revenue Streams",
    tP:"Wir transformieren Unternehmen nicht theoretisch – wir implementieren messbare Ergebnisse. Zwei Hebel: operative Kosten senken und neue Einnahmequellen erschließen. Beides AI-gestützt, beides innerhalb von 6 bis 9 Monaten nachweisbar.",
    opexT:"OPEX-Reduktion",
    opex:["AI-gestützte Automatisierung repetitiver Prozesse","Reduktion manueller Fehlerquoten und Nacharbeitskosten","Intelligentes Dokumentenmanagement und Vertragsanalyse","Konsolidierung fragmentierter Datenquellen und Systeme","Predictive Maintenance statt reaktiver Kostentreiber"],
    revT:"Neue Revenue Streams",
    rev:["Datenmonetarisierung aus bestehenden Unternehmensassets","AI-gestützte Produkt- und Serviceentwicklung","Digitale Plattform- und Marktplatzmodelle","Cross-Selling durch intelligente Kundenanalyse","Skalierbare SaaS-Komponenten aus internen Lösungen"],
    kpis:[{v:"6–9",u:" Monate",l:"bis zum messbaren Ergebnis"},{v:"30%+",l:"typische OPEX-Ersparnis"},{v:"Net New",l:"Revenue Streams aus bestehenden Assets",c:C.goldText}],
    sLabel:"Leistungen",sTitle:"Was wir tun",
    serv:[
      {n:"01",t:"Strategic Sparring & Advisory",d:"Strategische Reflexion auf Augenhöhe mit CEOs und Vorständen. Cross-Sektor-Perspektive. Transaktionsbegleitung. Interim Management.",tags:["CEO-Sparring","Transaktionen","Interim"]},
      {n:"02",t:"AI & Data Consulting",d:"Branchenspezifische AI-Beratung vom Assessment bis zur Implementierung. AI-Agenten, Datenplattformen, Predictive Analytics – DSGVO- und EU-AI-Act-konform.",tags:["AI-Agents","Data Strategy","EU AI Act"]},
      {n:"03",t:"AI Transformation & Implementation",d:"End-to-End AI-Transformation. Workflow-Automatisierung, intelligentes Dokumentenmanagement, Change Management für AI-gestützte Arbeitsprozesse.",tags:["Automatisierung","Implementierung","Dashboards"]},
      {n:"04",t:"Incubator & Company Building",d:"Tech-Startups aufbauen mit Founder-Erfahrung: Ideation, Gesellschaftsgründung, Fundraising, internationale Skalierung.",tags:["Building","Fundraising","Scaling"]},
      {n:"05",t:"Accelerator",d:"Fast-Track-Programm für Early-Stage-Ventures: strukturiertes Mentoring, Netzwerkzugang, Investorenvorstellungen und Go-to-Market-Support.",tags:["Accelerator","Mentoring","Go-to-Market"]},
    ],
    pLabel:"Prozess",pTitle:"Von der Analyse zum Ergebnis in 6–9 Monaten",
    proc:[
      {n:"01",t:"Erstgespräch",sub:"Woche 1",d:"Scope, Ziele und Quick-Win-Potenziale identifizieren"},
      {n:"02",t:"Case-Analyse",sub:"Woche 2–3",d:"Tiefenanalyse: Prozesse, Daten, Stakeholder, Engpässe"},
      {n:"03",t:"Strategieplan",sub:"Woche 4–5",d:"Maßnahmenplan mit KPIs, Verantwortlichkeiten, Meilensteinen"},
      {n:"04",t:"Umsetzung",sub:"Monat 2–6",d:"Operative Implementierung, AI-Integration, Change Management"},
      {n:"05",t:"Revenue Impact",sub:"Monat 6–9",d:"Messbare OPEX-Reduktion und aktivierte Revenue Streams"},
    ],
    pBar:"Gesamtdauer:",pBarB:"6–9 Monate",pBarC:"von Erstgespräch bis messbarem Revenue Impact",pBadge:"Verbindlicher Zeitrahmen",
  },
},
cn:{
  claim:["Analysis.","Execution.","Impact."],
  since06:"始于2006年",since15:"始于2015年",
  selectTitle:"两大领域。一个网络。",
  selectSub:"请选择您的领域",
  tracks:{
    tech:{label:"技术与AI",sub:"AI转型 · 实施 · 加速器"},
    re:{label:"房地产与\n酒店业",sub:"销售与收购 · 交易 · 项目领导"},
  },
  nav:["创始人","合作伙伴","服务","网络","流程","新闻","联系"],
  partnerTitle:"客户与合作伙伴",fo:"+ 非公开家族办公室",
  fLabel:"创始人",
  fQ:"以法律思维思考。以企业家方式行动。以高成效付诸实施。",
  networkLabel:"网络与执行",
  networkTitle:"为每个挑战组建合适的团队。",
  networkP:"不仅提供咨询——更付诸实施。从法律、技术、房地产、金融到行业的成熟网络中，根据项目需求定制专家团队。",
  networkBadge:"咨询与执行",
  clusters:{
    tech:[
      {n:"法律",d:"企业、知识产权及监管——Lansky & Partner RAe, Prader律所"},
      {n:"技术与AI",d:"软件架构师、AI专家、数据工程师"},
      {n:"房地产",d:"EPI不动产集团、Akkadia Immobilien、酒店运营商"},
      {n:"金融",d:"Raiffeisen银行国际、维也纳私人银行、风险投资、家族办公室"},
      {n:"行业",d:"电信运营商、企业转型领导者、Uniqa保险"},
    ],
    re:[
      {n:"法律",d:"DSC律所、Herbst Kinsky RAe——房地产、公司及交易法。小型专业精品律所。"},
      {n:"房地产",d:"EPI不动产集团、Akkadia Immobilien、雅高酒店、Plaza集团"},
      {n:"金融",d:"Raiffeisen银行国际、维也纳私人银行、家族办公室"},
      {n:"行业",d:"Uniqa保险、维也纳市、建筑与开发合作伙伴"},
      {n:"技术与AI",d:"房地产科技、数字资产管理、AI流程自动化"},
    ],
  },
  cLabel:"联系",cTitle:"联系我们",
  cP:"欢迎战略咨询、合作机会或加速器申请。",
  loc:"维也纳，奥地利",ent:"InVentures GmbH",entSub:"前身 Inside Holding & Real Estate GmbH（成立于2010年）",
  re:{
    heroP:"超过4.5亿欧元的住宅、商业和酒店地产交易记录。交易结构设计、项目领导和实际执行——从销售到收购。",
    ctaA:"了解房地产业务",ctaB:"服务内容",
    stats:[{v:"€600m+",l:"顾问交易总额"},{v:"€35m+",l:"动员的VC资本"},{v:"€12m+",l:"研究资助"},{v:"20+",l:"跨行业专业经验"},{v:"40+",l:"DACH & MENA项目"},{v:"6",l:"行业板块"}],
    fP1:"法律专家及连续CEO，拥有超过25年的房地产和酒店业经验。交易记录超过4.5亿欧元。",
    fP2:"为机构投资者、家族办公室和开发商提供可信赖的顾问和项目领导服务。EPI不动产集团及奥地利领先酒店运营商的活跃网络合作伙伴。",
    secLabel:"重点领域",
    sec:["住宅","商业与办公","酒店与餐饮","零售与综合用途","开发项目","销售与收购"],
    secDetail:["EPI不动产集团, Trimmobilien集团, Conwert SE, Akkadia Immobilien","商业收购和处置战略咨询","雅高酒店, Plaza集团, Ibis集团——酒店交易与咨询","综合用途项目咨询和交易结构设计","项目开发咨询、可行性研究、监管协调","端到端买方和卖方交易管理"],
    tLabel:"房地产专业知识",tTitle:"从首次分析到成功交割。",
    tP:"深厚的市场知识、法律精准度和运营执行力。我们为房地产交易提供结构设计和项目领导。",
    opexT:"交易与顾问",
    opex:["战略市场和可行性分析","交易结构设计和法律尽职调查","融资和股权结构咨询","利益相关方管理和谈判领导","监管和规划流程协调"],
    revT:"销售、收购与项目领导",
    rev:["买方和卖方授权管理","从概念到交付的项目开发监督","酒店重新定位和品牌咨询","跨境交易来源（欧盟、中东北非）","不良资产咨询和重组"],
    kpis:[{v:"4.5亿欧元+",l:"跨资产类别交易记录"},{v:"25+",l:"年房地产咨询与执行经验"},{v:"欧盟与中东北非",l:"跨市场交易覆盖"}],
    sLabel:"服务",sTitle:"我们在房地产与酒店业的业务",
    serv:[
      {n:"01",t:"交易顾问",d:"买方和卖方授权执行。市场分析、法律结构、谈判和成功交割。",tags:["收购","销售","尽职调查"]},
      {n:"02",t:"项目管理与领导",d:"开发、翻新和重新定位项目的实际领导。预算、时间表、承包商和政府机构管理。",tags:["项目管理","开发","执行"]},
      {n:"03",t:"酒店顾问",d:"酒店和餐饮资产的战略咨询：重新定位、品牌选择、运营商谈判。",tags:["酒店","餐饮","重新定位"]},
      {n:"04",t:"RE结构设计与法律",d:"交易结构、公司法、融资协调和交割文件。跨境（欧盟、中东北非）。",tags:["结构设计","法律","跨境"]},
    ],
    pLabel:"流程",pTitle:"从首次简报到成功交割",
    proc:[
      {n:"01",t:"初次简报",sub:"第1周",d:"定义授权、目标、时间表和关键约束条件"},
      {n:"02",t:"市场与资产分析",sub:"第2–3周",d:"深度分析：市场数据、法律框架、风险评估"},
      {n:"03",t:"战略与结构设计",sub:"第3–5周",d:"交易结构、融资方案、谈判策略"},
      {n:"04",t:"执行与谈判",sub:"第2–4月",d:"积极的交易管理、利益相关方谈判、政府协调"},
      {n:"05",t:"交割与移交",sub:"第3–6月",d:"成功交割、文件记录、交割后整合"},
    ],
    pBar:"典型交易周期：",pBarB:"3–6个月",pBarC:"从授权到成功交割",pBadge:"实际执行",
  },
  tech:{
    heroP:"战略顾问、AI转型与实施以及运营公司建设。运营成本优化与新收入来源——6至9个月内可衡量成果。",
    ctaA:"了解AI转型方案",ctaB:"服务内容",
    stats:[{v:"€600m+",l:"顾问交易总额"},{v:"€35m+",l:"动员的VC资本"},{v:"€12m+",l:"研究资助"},{v:"20+",l:"跨行业专业经验"},{v:"40+",l:"DACH & MENA项目"},{v:"6",l:"行业板块"}],
    fP1:"法律专家、连续创业者及多次担任CEO，拥有超过25年的运营经验。横跨六大行业的交易记录超过2亿欧元。",
    fP2:"2015年受德国电信和A1集团委托，率先开发新数字收入来源。Geolad GmbH创始人兼CEO——30+员工，合作伙伴遍布欧洲和亚洲。",
    secLabel:"行业领域",
    sec:["电信与数据","房地产","科研与教育","法律","酒店业","社会公益"],
    secDetail:["德国电信, A1集团, Orange, Zain, Viettel, 华为, 爱立信","Conwert SE, 雅高酒店, Trimmobilien集团","欧洲卒中组织, SFU维也纳, 多瑙大学克雷姆斯","Lansky & Partner RAe, Prader律所","雅高酒店, Plaza集团, Ibis集团","维也纳融合之家, ORF, 红牛, vidid协会"],
    compLabel:"数据合规与AI监管",compTitle:"8年GDPR经验。为欧盟AI法案做好准备。",
    compP:"自2018年GDPR生效以来，在多个行业中提供数据保护合规咨询。现已扩展至欧盟AI法案。",
    compItems:["8年跨行业GDPR实施经验","针对AI系统的数据保护影响评估","欧盟AI法案就绪：风险分类、合规评估","设计合规的AI治理框架","Schrems II下的跨境数据传输结构","团队AI合规文化培训"],
    tLabel:"AI转型与实施",tTitle:"运营成本优化与新收入来源",
    tP:"不做理论转型——实现可衡量的结果。两大杠杆：降低运营成本，开拓新收入来源。",
    opexT:"运营成本优化",
    opex:["AI驱动重复流程自动化","降低人工错误率和返工成本","智能文档管理与合同分析","整合碎片化数据源和系统","预测性维护取代被动成本驱动"],
    revT:"新收入来源",
    rev:["从现有企业资产中实现数据变现","AI驱动的产品与服务开发","数字平台与市场模式","通过智能客户分析实现交叉销售","从内部解决方案构建可扩展SaaS组件"],
    kpis:[{v:"6–9",u:" 个月",l:"达到可衡量成果"},{v:"30%+",l:"目标流程运营成本节省"},{v:"全新",l:"来自现有资产的收入来源",c:C.goldText}],
    sLabel:"服务",sTitle:"我们的业务",
    serv:[
      {n:"01",t:"战略顾问与咨询",d:"与CEO和董事会平等对话的战略反思。跨行业视角。交易支持。临时管理。",tags:["CEO顾问","交易","临时管理"]},
      {n:"02",t:"AI与数据咨询",d:"从准备度评估到运营实施的行业AI咨询。AI代理、数据平台、预测分析。",tags:["AI代理","数据战略","欧盟AI法案"]},
      {n:"03",t:"AI转型与实施",d:"端到端AI转型。工作流自动化、智能文档管理、变革管理。",tags:["自动化","实施","仪表盘"]},
      {n:"04",t:"孵化器与公司建设",d:"以创始人经验构建科技初创企业：创意、设立、融资、国际化扩展。",tags:["建设","融资","扩展"]},
      {n:"05",t:"加速器",d:"早期创业公司快速通道：结构化指导、网络资源、投资者引荐和市场推广支持。",tags:["加速器","指导","市场推广"]},
    ],
    pLabel:"流程",pTitle:"从分析到成果：6–9个月",
    proc:[
      {n:"01",t:"初次会议",sub:"第1周",d:"确定范围、目标和速赢潜力"},
      {n:"02",t:"案例分析",sub:"第2–3周",d:"深度分析：流程、数据、利益相关方、瓶颈"},
      {n:"03",t:"战略规划",sub:"第4–5周",d:"包含KPI、责任分配和里程碑的行动计划"},
      {n:"04",t:"执行实施",sub:"第2–6月",d:"运营实施、AI集成、变革管理"},
      {n:"05",t:"收入成效",sub:"第6–9月",d:"可衡量的运营成本降低和已激活的收入来源"},
    ],
    pBar:"总周期：",pBarB:"6–9个月",pBarC:"从首次会议到可衡量的收入成效",pBadge:"承诺时间框架",
  },
},
};

const anchors=["profil","partner","leistungen","netzwerk","prozess","news","kontakt"];
const partnersRE=["Wiener Privatbank SE","EPI Immobilien Group","Akkadia Immobilien","Conwert SE","Trimmobilien Gruppe","Arcotel Hotels","Plaza Group","Ibis Group","Raiffeisen Bank International","DSC Rechtsanwälte","Herbst Kinsky RAe","Uniqa Versicherung","Stadt Wien"];
const partnersTech=["Deutsche Telekom","A1 Group","Orange","Zain Group","Viettel","Huawei","Ericsson","European Stroke Organisation","SFU Wien","Donau Universitaet Krems","Raiffeisen Bank International","Wiener Privatbank SE","Uniqa Versicherung","Lansky & Partner RAe","ORF","Integrationshaus Wien"];

function useV(threshold=0.1){
  const r=useRef(null);const[v,s]=useState(false);
  useEffect(()=>{const e=r.current;if(!e)return;
    const o=new IntersectionObserver(([x])=>{if(x.isIntersecting){s(true);o.unobserve(e);}},{threshold});
    o.observe(e);return()=>o.disconnect();},[threshold]);
  return[r,v];
}
function useIsMobile(bp=768){
  const[m,s]=useState(false);
  useEffect(()=>{const c=()=>s(window.innerWidth<=bp);c();window.addEventListener("resize",c);return()=>window.removeEventListener("resize",c);},[bp]);
  return m;
}
function R({children,delay=0}){
  const[r,v]=useV();
  return <div ref={r} style={{opacity:v?1:0,transform:v?"translateY(0)":"translateY(14px)",transition:`opacity 0.5s ease ${delay}s, transform 0.5s ease ${delay}s`}}>{children}</div>;
}

const F="'DM Sans',sans-serif";
const Label=({children,color})=>(<div style={{display:"flex",alignItems:"center",gap:10,marginBottom:10}}><div style={{width:24,height:1,background:color||C.teal}}/><span style={{fontFamily:F,fontSize:10,letterSpacing:3,textTransform:"uppercase",color:color||C.tealText,fontWeight:600}}>{children}</span></div>);
const H2D=({children})=><h2 style={{fontFamily:F,fontSize:"clamp(24px,3vw,36px)",fontWeight:300,color:C.white,marginBottom:40,letterSpacing:"-0.02em"}}>{children}</h2>;
const H2L=({children})=><h2 style={{fontFamily:F,fontSize:"clamp(24px,3vw,36px)",fontWeight:300,color:C.dark,marginBottom:40,letterSpacing:"-0.02em"}}>{children}</h2>;
const Dot=({color})=><div style={{width:4,height:4,borderRadius:"50%",background:color,marginTop:7,flexShrink:0}}/>;

export default function App(){
  const[lang,setLang]=useState("en");
  const[track,setTrack_]=useState(()=>{
    // Restore track from URL hash on load
    const h=window.location.hash.replace("#","");
    return (h==="tech"||h==="re")?h:null;
  });
  const setTrack=useCallback((t)=>{
    setTrack_(t);
    if(t){window.history.pushState({track:t},"",`#${t}`);}
    else{window.history.pushState({track:null},"",window.location.pathname);}
    window.scrollTo({top:0,behavior:"smooth"});
  },[]);
  const[scrolled,setScrolled]=useState(false);
  const[menuOpen,setMenuOpen]=useState(false);
  const[legalModal,setLegalModal]=useState(null);
  const mob=useIsMobile();
  const t=TX[lang];
  const tc=track?TC[track]:TC.tech;
  const td=track?t[track]:null;

  useEffect(()=>{const h=()=>setScrolled(window.scrollY>40);window.addEventListener("scroll",h);return()=>window.removeEventListener("scroll",h);},[]);
  // Browser back/forward support
  useEffect(()=>{const h=(e)=>{const t=e.state?.track||null;setTrack_(t);window.scrollTo({top:0,behavior:"smooth"});};window.addEventListener("popstate",h);return()=>window.removeEventListener("popstate",h);},[]);
  useEffect(()=>{setMenuOpen(false);},[track]);

  const partners=track==="re"?partnersRE:track==="tech"?partnersTech:[...partnersTech,...partnersRE];

  return(
<div style={{fontFamily:F}}>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet"/>
<style>{`
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{overflow-x:hidden;background:#F5F4F1}
::selection{background:${tc.a};color:#fff}
@keyframes drift{0%{transform:translate(0,0)}50%{transform:translate(15px,-10px)}100%{transform:translate(0,0)}}
@keyframes glow{0%{opacity:0.03}50%{opacity:0.06}100%{opacity:0.03}}
@keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
@keyframes splitReveal{from{opacity:0;transform:scaleY(0.95)}to{opacity:1;transform:scaleY(1)}}
.track-card{transition:all 0.35s cubic-bezier(.4,0,.2,1);}
.track-card:hover{transform:translateY(-3px);}
@media(max-width:768px){
  .nav-links{display:none!important}
  .mob-menu{display:flex!important}
  .split-grid{grid-template-columns:1fr!important;height:auto!important;min-height:100vh!important}
  .split-card{min-height:45vh!important}
  .grid-2{grid-template-columns:1fr!important}
  .proc-row{flex-direction:column!important;gap:28px!important}
  .proc-row>div{display:flex!important;gap:14px!important;align-items:flex-start!important}
  .proc-line{display:none!important}
  .hero-pad{padding:110px 20px 60px!important}
  .sec-pad{padding:60px 20px!important}
}
`}</style>

{/* NAV */}
<nav style={{position:"fixed",top:0,left:0,right:0,zIndex:100,background:scrolled||menuOpen?"rgba(245,243,239,0.97)":"transparent",backdropFilter:scrolled||menuOpen?"blur(20px)":"none",borderBottom:scrolled?`1px solid rgba(0,0,0,0.07)`:"none",transition:"all 0.3s",padding:scrolled?"11px 0":"18px 0"}}>
<div style={{maxWidth:1060,margin:"0 auto",padding:"0 16px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
  <div style={{display:"flex",alignItems:"center",gap:16}}>
    <a href="#" onClick={e=>{e.preventDefault();setTrack(null);}} style={{textDecoration:"none",display:"flex",flexDirection:"column"}}>
      <div style={{display:"flex",alignItems:"baseline",gap:4}}>
        <span style={{fontFamily:F,fontSize:15,fontWeight:700,color:C.goldText,letterSpacing:2.5}}>INVENTURES</span>
        <span style={{fontFamily:F,fontSize:9,letterSpacing:1.5,color:C.goldText}}>.at</span>
      </div>
      <span style={{fontFamily:F,fontSize:7.5,letterSpacing:1.5,color:C.gold,textTransform:"uppercase",marginTop:1}}>InVentures GmbH</span>
    </a>
    {track && (
      <div style={{display:"flex",alignItems:"center",gap:6,padding:"3px 10px",background:tc.as,borderRadius:2}}>
        <div style={{width:5,height:5,borderRadius:"50%",background:tc.a}}/>
        <span style={{fontFamily:F,fontSize:9,letterSpacing:1.5,textTransform:"uppercase",color:tc.at,fontWeight:600}}>{track==="re"?"Real Estate":"Tech & AI"}</span>
        <button onClick={()=>setTrack(null)} style={{background:"none",border:"none",cursor:"pointer",color:C.dim,fontSize:11,lineHeight:1,padding:"0 0 0 4px",marginTop:"-1px"}} title="Switch track">✕</button>
      </div>
    )}
  </div>
  <div className="nav-links" style={{display:"flex",alignItems:"center",gap:track?16:0}}>
    {track && t.nav.map((l,i)=>(
      <a key={i} href={`#${anchors[i]}`} style={{fontFamily:F,fontSize:11,letterSpacing:0.8,textTransform:lang==="cn"?"none":"uppercase",color:C.dim,textDecoration:"none",transition:"color 0.2s",fontWeight:500}}
        onMouseEnter={e=>e.target.style.color=C.white} onMouseLeave={e=>e.target.style.color=C.dim}>{l}</a>
    ))}
    {track && <div style={{width:1,height:14,background:C.border,margin:"0 4px"}}/>}
    <div style={{display:"flex",gap:2}}>
      {[["en","EN"],["de","DE"],["cn","中文"]].map(([code,label])=>(
        <button key={code} onClick={()=>setLang(code)} style={{fontFamily:F,fontSize:10,letterSpacing:0.5,fontWeight:lang===code?700:400,color:lang===code?tc.at:C.dim,background:lang===code?tc.as:"transparent",border:"none",padding:"4px 8px",cursor:"pointer",transition:"all 0.2s"}}>{label}</button>
      ))}
    </div>
  </div>
  <div className="mob-menu" style={{display:"none",alignItems:"center",gap:12}}>
    <div style={{display:"flex",gap:2}}>
      {[["en","EN"],["de","DE"],["cn","中文"]].map(([code,label])=>(
        <button key={code} onClick={()=>setLang(code)} style={{fontFamily:F,fontSize:10,fontWeight:lang===code?700:400,color:lang===code?tc.at:C.dim,background:lang===code?tc.as:"transparent",border:"none",padding:"4px 6px",cursor:"pointer"}}>{label}</button>
      ))}
    </div>
    <button onClick={()=>setMenuOpen(!menuOpen)} style={{background:"none",border:"none",cursor:"pointer",padding:8,display:"flex",flexDirection:"column",gap:5}}>
      <div style={{width:22,height:2,background:C.white,transition:"all 0.3s",transform:menuOpen?"rotate(45deg) translate(3px,3px)":"none"}}/>
      <div style={{width:22,height:2,background:C.white,transition:"all 0.3s",opacity:menuOpen?0:1}}/>
      <div style={{width:22,height:2,background:C.white,transition:"all 0.3s",transform:menuOpen?"rotate(-45deg) translate(3px,-3px)":"none"}}/>
    </button>
  </div>
</div>
{menuOpen && track && (
  <div style={{padding:"16px 20px",display:"flex",flexDirection:"column",gap:12,borderTop:`1px solid ${C.border}`}}>
    {t.nav.map((l,i)=>(
      <a key={i} href={`#${anchors[i]}`} onClick={()=>setMenuOpen(false)} style={{fontFamily:F,fontSize:14,color:C.dim,textDecoration:"none",padding:"4px 0"}}>{l}</a>
    ))}
    <div style={{paddingTop:8,borderTop:`1px solid ${C.border}`}}>
      <button onClick={()=>{setTrack(null);setMenuOpen(false);}} style={{fontFamily:F,fontSize:12,color:tc.at,background:"none",border:"none",cursor:"pointer",padding:0}}>← {lang==="de"?"Zurück zur Übersicht":lang==="cn"?"返回总览":"Back to overview"}</button>
    </div>
  </div>
)}
</nav>

{/* ── LANDING ── */}
{!track && (
<section style={{minHeight:"100vh",display:"flex",flexDirection:"column",background:C.bg,overflow:"hidden",position:"relative"}}>
  <div style={{position:"absolute",inset:0,background:`url('/images/hero-landing.jpg') center/cover no-repeat`,opacity:0.12}}/>
  <div style={{position:"absolute",inset:0,opacity:0.025,backgroundImage:`radial-gradient(${C.teal} 0.4px, transparent 0.4px)`,backgroundSize:"32px 32px"}}/>
  {/* Claim header */}
  <div style={{position:"relative",zIndex:2,textAlign:"center",padding:mob?"90px 20px 32px":"100px 40px 40px",animation:"fadeUp 0.7s ease both"}}>
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:8,marginBottom:16}}>
      <span style={{fontFamily:F,fontSize:9,letterSpacing:3,textTransform:"uppercase",color:C.goldText,fontWeight:500}}>InVentures GmbH · Vienna</span>
      <div style={{width:32,height:1,background:C.silver,opacity:0.4}}/>
    </div>
    <h1 style={{fontFamily:F,fontSize:mob?"clamp(28px,8vw,52px)":"clamp(36px,5vw,64px)",fontWeight:300,color:C.dark,letterSpacing:"-0.025em",lineHeight:1.1}}>
      <span style={{color:C.dark,fontWeight:300}}>{t.claim[0]}</span>{" "}
      <span style={{color:C.silverText,fontWeight:600}}>{t.claim[1]}</span>{" "}
      <span style={{color:C.goldText,fontWeight:300}}>{t.claim[2]}</span>
    </h1>
    <p style={{fontFamily:F,fontSize:13,color:C.dim,marginTop:12,letterSpacing:0.3}}>{t.selectTitle}</p>
    <p style={{fontFamily:F,fontSize:11,color:C.muted,marginTop:4,letterSpacing:1,textTransform:"uppercase"}}>{t.selectSub}</p>
  </div>
  {/* Split cards — Tech first, RE second */}
  <div className="split-grid" style={{display:"grid",gridTemplateColumns:"1fr 1fr",flex:1,gap:mob?12:20,padding:mob?"0 12px 24px":"0 40px 48px",maxWidth:1200,margin:"0 auto",width:"100%",position:"relative",zIndex:2}}>
    {/* Tech Card — LEFT */}
    <div className="track-card split-card" onClick={()=>setTrack("tech")} style={{cursor:"pointer",background:`url('/images/hero-tech.jpg') center/cover no-repeat`,border:`1px solid rgba(138,150,163,0.2)`,padding:mob?"32px 24px":"52px 44px",display:"flex",flexDirection:"column",justifyContent:"space-between",minHeight:mob?"auto":480,position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",inset:0,background:"linear-gradient(90deg, rgba(16,20,26,0.78) 0%, rgba(18,24,30,0.58) 38%, rgba(18,24,30,0.30) 70%, rgba(18,24,30,0.22) 100%)",zIndex:0}}/>

      <div style={{position:"absolute",top:0,left:0,right:0,height:3,background:`linear-gradient(90deg, ${C.silver}, ${C.silverText})`}}/>
      <div style={{position:"absolute",bottom:"-20%",left:"-10%",width:"50%",height:"80%",background:`radial-gradient(ellipse, rgba(138,150,163,0.08) 0%, transparent 60%)`,pointerEvents:"none"}}/>
      <div style={{position:"relative",zIndex:1,textShadow:"0 1px 10px rgba(0,0,0,0.22)",background:"linear-gradient(180deg, rgba(10,14,18,0.18) 0%, rgba(10,14,18,0.08) 100%)",backdropFilter:"blur(2px)",padding:"12px 12px 10px 12px",margin:"-12px -12px 0 -12px"}}>
        <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:28}}>
          <div style={{width:20,height:1,background:C.silver}}/>
          <span style={{fontFamily:F,fontSize:9,letterSpacing:3,textTransform:"uppercase",color:"rgba(255,255,255,0.92)",fontWeight:600,background:"rgba(8,12,18,0.34)",padding:"4px 8px",borderRadius:2}}>{t.since15}</span>
        </div>
        <h2 style={{fontFamily:F,fontSize:mob?"clamp(22px,5vw,38px)":"clamp(26px,3.5vw,44px)",fontWeight:300,color:"#FFFFFF",lineHeight:1.15,letterSpacing:"-0.02em",marginBottom:20,textShadow:"0 2px 18px rgba(0,0,0,0.45)"}}>{t.tracks.tech.label}</h2>
        <p style={{fontFamily:F,fontSize:13,color:"rgba(255,255,255,0.86)",lineHeight:1.7,maxWidth:340,textShadow:"0 1px 10px rgba(0,0,0,0.35)"}}>{t.tracks.tech.sub}</p>
      </div>
      <div>
        <div style={{display:"flex",flexWrap:"wrap",gap:6,marginBottom:28}}>
          {["AI Transformation","OPEX Reduction","GDPR/AI Act","Accelerator"].map(tag=>(
            <span key={tag} style={{fontFamily:F,fontSize:9,letterSpacing:0.8,textTransform:"uppercase",fontWeight:700,padding:"5px 9px",background:"rgba(9,14,22,0.52)",border:"1px solid rgba(255,255,255,0.14)",color:"rgba(255,255,255,0.94)",borderRadius:2}}>{tag}</span>
          ))}
        </div>
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          <span style={{fontFamily:F,fontSize:12,fontWeight:700,color:"#FFFFFF",letterSpacing:0.5,background:"rgba(8,12,18,0.42)",padding:"8px 12px",borderRadius:2}}>{lang==="de"?"Tech & AI entdecken":lang==="cn"?"了解技术与AI":"Explore Tech & AI"}</span>
          <span style={{color:"#FFFFFF",fontSize:16,textShadow:"0 1px 8px rgba(0,0,0,0.35)"}}>→</span>
        </div>
      </div>
    </div>
    {/* RE Card — RIGHT */}
    <div className="track-card split-card" onClick={()=>setTrack("re")} style={{cursor:"pointer",background:`url('/images/hero-re.jpg') center/cover no-repeat`,border:`1px solid rgba(154,123,66,0.18)`,padding:mob?"32px 24px":"52px 44px",display:"flex",flexDirection:"column",justifyContent:"space-between",minHeight:mob?"auto":480,position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",inset:0,background:"linear-gradient(90deg, rgba(38,24,10,0.76) 0%, rgba(50,34,12,0.54) 38%, rgba(50,34,12,0.28) 70%, rgba(50,34,12,0.18) 100%)",zIndex:0}}/>

      <div style={{position:"absolute",top:0,left:0,right:0,height:3,background:`linear-gradient(90deg, ${C.gold}, ${C.goldText})`}}/>
      <div style={{position:"absolute",bottom:"-20%",right:"-10%",width:"50%",height:"80%",background:`radial-gradient(ellipse, rgba(154,123,66,0.08) 0%, transparent 60%)`,pointerEvents:"none"}}/>
      <div style={{position:"relative",zIndex:1,textShadow:"0 1px 10px rgba(0,0,0,0.22)",background:"linear-gradient(180deg, rgba(26,16,6,0.16) 0%, rgba(26,16,6,0.06) 100%)",backdropFilter:"blur(2px)",padding:"12px 12px 10px 12px",margin:"-12px -12px 0 -12px"}}>
        <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:28}}>
          <div style={{width:20,height:1,background:C.gold}}/>
          <span style={{fontFamily:F,fontSize:9,letterSpacing:3,textTransform:"uppercase",color:"rgba(255,255,255,0.92)",fontWeight:600,background:"rgba(30,18,6,0.34)",padding:"4px 8px",borderRadius:2}}>{t.since06}</span>
        </div>
        <h2 style={{fontFamily:F,fontSize:mob?"clamp(22px,5vw,38px)":"clamp(26px,3.5vw,44px)",fontWeight:300,color:"#FFFFFF",lineHeight:1.15,letterSpacing:"-0.02em",whiteSpace:"pre-line",marginBottom:20,textShadow:"0 2px 18px rgba(0,0,0,0.45)"}}>{t.tracks.re.label}</h2>
        <p style={{fontFamily:F,fontSize:13,color:"rgba(255,255,255,0.86)",lineHeight:1.7,maxWidth:340,textShadow:"0 1px 10px rgba(0,0,0,0.35)"}}>{t.tracks.re.sub}</p>
      </div>
      <div>
        <div style={{display:"flex",flexWrap:"wrap",gap:6,marginBottom:28}}>
          {["Sale & Acquisition","Transactions","Project Mgmt","Hospitality"].map(tag=>(
            <span key={tag} style={{fontFamily:F,fontSize:9,letterSpacing:0.8,textTransform:"uppercase",fontWeight:700,padding:"5px 9px",background:"rgba(28,18,8,0.48)",border:"1px solid rgba(255,255,255,0.14)",color:"rgba(255,255,255,0.94)",borderRadius:2}}>{tag}</span>
          ))}
        </div>
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          <span style={{fontFamily:F,fontSize:12,fontWeight:700,color:"#FFFFFF",letterSpacing:0.5,background:"rgba(30,18,6,0.42)",padding:"8px 12px",borderRadius:2}}>{lang==="de"?"Real Estate entdecken":lang==="cn"?"了解房地产":"Explore Real Estate"}</span>
          <span style={{color:"#FFFFFF",fontSize:16,textShadow:"0 1px 8px rgba(0,0,0,0.35)"}}>→</span>
        </div>
      </div>
    </div>
  </div>
  {/* Timeline — Company Track Record */}
  <Timeline lang={lang} />
  {/* Logo trust-bar below timeline on landing */}
  {!track && <R><PartnerLogos lang={lang} compact={true} /></R>}
</section>
)}

{/* ── TRACK CONTENT ── */}
{track && td && (<>

{/* HERO */}
<section style={{minHeight:"100vh",display:"flex",alignItems:"center",background:`linear-gradient(160deg, #F0EEE9 0%, #EAE8E3 30%, #F2F0EB 60%, #F5F3EF 100%)`,position:"relative",overflow:"hidden"}}>
  <div style={{position:"absolute",inset:0,opacity:0.03,backgroundImage:`radial-gradient(${tc.a} 0.4px, transparent 0.4px)`,backgroundSize:"32px 32px"}}/>
  <div style={{position:"absolute",top:"-25%",right:"-15%",width:"70%",height:"120%",background:`radial-gradient(ellipse, ${tc.as.replace("0.1","0.1")} 0%, transparent 60%)`,pointerEvents:"none",animation:"drift 20s ease-in-out infinite"}}/>
  <svg style={{position:"absolute",top:0,right:0,width:"100%",height:"100%",pointerEvents:"none",opacity:0.04}} viewBox="0 0 1200 800" preserveAspectRatio="none">
    <line x1="800" y1="0" x2="1200" y2="400" stroke={tc.a} strokeWidth="0.6"/>
    <line x1="900" y1="0" x2="1200" y2="300" stroke={tc.a} strokeWidth="0.4"/>
    <line x1="700" y1="0" x2="1200" y2="500" stroke={tc.a} strokeWidth="0.4"/>
  </svg>
  <div style={{maxWidth:1060,margin:"0 auto",padding:mob?"100px 20px 48px":"140px 40px 80px",position:"relative",width:"100%",zIndex:1}}>
    <R><button onClick={()=>setTrack(null)} style={{fontFamily:F,fontSize:11,letterSpacing:1,color:tc.at,background:"none",border:`1px solid ${tc.a}40`,borderRadius:2,cursor:"pointer",padding:"6px 14px",marginBottom:28,display:"inline-flex",alignItems:"center",gap:6,transition:"all 0.2s"}} onMouseEnter={e=>{e.currentTarget.style.background=tc.as;e.currentTarget.style.borderColor=tc.a;}} onMouseLeave={e=>{e.currentTarget.style.background="none";e.currentTarget.style.borderColor=`${tc.a}40`;}}><span style={{fontSize:13}}>←</span>{lang==="de"?"Zurück zur Übersicht":lang==="cn"?"返回总览":"Back to overview"}</button></R>
    <R><div style={{display:"flex",alignItems:"center",gap:8,marginBottom:14}}><div style={{width:24,height:1,background:tc.a}}/><span style={{fontFamily:F,fontSize:9,letterSpacing:3,textTransform:"uppercase",color:tc.at,fontWeight:600}}>{track==="re"?t.since06:t.since15}</span></div></R>
    <R delay={0.08}><h1 style={{fontFamily:F,fontSize:"clamp(32px,4.5vw,58px)",fontWeight:300,color:C.dark,lineHeight:1.15,marginBottom:24,maxWidth:760,letterSpacing:"-0.025em"}}>
      <span style={{color:C.dark,fontWeight:300}}>Deep Analysis.</span><br/>
      <span style={{color:C.silverText,fontWeight:600}}>Fast Execution.</span><br/>
      <span style={{color:C.goldText,fontWeight:300}}>High Impact.</span>
    </h1></R>
    <R delay={0.16}><p style={{fontFamily:F,fontSize:16,color:C.dim,lineHeight:1.75,maxWidth:500,marginBottom:40}}>{td.heroP}</p></R>
    <R delay={0.24}>
      <div style={{display:"flex",gap:14,flexWrap:"wrap"}}>
        <a href="#leistungen" style={{fontFamily:F,fontSize:11,letterSpacing:1.2,textTransform:"uppercase",fontWeight:600,padding:"13px 28px",background:tc.a,color:"#fff",textDecoration:"none",transition:"opacity 0.2s"}} onMouseEnter={e=>e.target.style.opacity="0.85"} onMouseLeave={e=>e.target.style.opacity="1"}>{td.ctaA}</a>
        <a href="#netzwerk" style={{fontFamily:F,fontSize:11,letterSpacing:1.2,textTransform:"uppercase",fontWeight:500,padding:"13px 28px",border:`1px solid ${C.border}`,color:C.dim,textDecoration:"none",transition:"all 0.2s"}} onMouseEnter={e=>{e.target.style.borderColor=tc.at;e.target.style.color=tc.at}} onMouseLeave={e=>{e.target.style.borderColor=C.border;e.target.style.color=C.dim}}>Network</a>
      </div>
    </R>
    <R delay={0.32}>
      <div style={{display:"flex",gap:mob?20:48,marginTop:mob?40:64,flexWrap:"wrap"}}>
        {td.stats.map((s,i)=>(
          <div key={i}><div style={{fontFamily:F,fontSize:22,fontWeight:700,color:tc.at}}>{s.v}</div><div style={{fontFamily:F,fontSize:10,letterSpacing:1.5,textTransform:"uppercase",color:C.dim,marginTop:3,fontWeight:500}}>{s.l}</div></div>
        ))}
      </div>
    </R>
  </div>
</section>

{/* PARTNERS */}
<section id="partner" style={{background:`linear-gradient(180deg, #F0EEE9 0%, #EBE9E4 50%, #F0EEE9 100%)`,padding:mob?"28px 20px":"48px 40px",borderTop:`1px solid ${C.border}`,borderBottom:`1px solid ${C.border}`}}>
<div style={{maxWidth:1060,margin:"0 auto"}}>
  <R><div style={{textAlign:"center",marginBottom:24}}><span style={{fontFamily:F,fontSize:10,letterSpacing:3,textTransform:"uppercase",color:C.dim,fontWeight:500}}>{t.partnerTitle}</span></div></R>
  <R delay={0.06}>
    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",gap:0,lineHeight:2.4}}>
      {partners.map((n,i)=>(
        <span key={i} style={{display:"inline-flex",alignItems:"center",cursor:"default"}}>
          <span style={{fontFamily:F,fontSize:13,fontWeight:500,color:"rgba(26,26,26,0.25)",letterSpacing:0.4,whiteSpace:"nowrap",transition:"color 0.3s",padding:"0 4px"}}
            onMouseEnter={e=>e.target.style.color=tc.at} onMouseLeave={e=>e.target.style.color="rgba(26,26,26,0.25)"}>{n}</span>
          {i<partners.length-1 && <span style={{color:`${tc.a}33`,fontSize:6,padding:"0 10px"}}>&#9679;</span>}
        </span>
      ))}
      <span style={{display:"inline-flex",alignItems:"center"}}>
        <span style={{color:`${tc.a}33`,fontSize:6,padding:"0 10px"}}>&#9679;</span>
        <span style={{fontFamily:F,fontSize:13,fontWeight:400,color:"rgba(26,26,26,0.18)",fontStyle:"italic",whiteSpace:"nowrap",padding:"0 4px"}}>{t.fo}</span>
      </span>
    </div>
  </R>
</div>
</section>

{/* PROFILE */}
<section id="profil" style={{background:C.cream,padding:mob?"48px 20px":"88px 40px"}}>
<div style={{maxWidth:1060,margin:"0 auto"}}>
  <R><Label color={tc.a}>{t.fLabel}</Label></R>
  <R delay={0.04}><h2 style={{fontFamily:F,fontSize:"clamp(26px,3vw,38px)",fontWeight:300,color:C.dark,marginBottom:44,letterSpacing:"-0.02em"}}>Mag. David Brainin</h2></R>
  <div style={{display:"grid",gridTemplateColumns:mob?"1fr":"1fr 1fr",gap:mob?24:48}}>
    <R delay={0.08}>
      <div>
        <p style={{fontFamily:F,fontSize:15,color:C.dark,lineHeight:1.8,marginBottom:16}}>{td.fP1}</p>
        <p style={{fontFamily:F,fontSize:15,color:C.dark,lineHeight:1.8,marginBottom:24}}>{td.fP2}</p>
        <div style={{padding:"16px 20px",borderLeft:`2px solid ${tc.a}`,background:C.warm}}>
          <p style={{fontFamily:F,fontSize:15,fontStyle:"italic",color:C.dark,lineHeight:1.6,margin:0}}>{t.fQ}</p>
        </div>
      </div>
    </R>
    <R delay={0.16}>
      <div style={{display:"flex",flexDirection:"column",gap:5}}>
        {td.sec.map((s,i)=>(
          <div key={i} style={{padding:"11px 16px",background:"#fff",border:"1px solid #EAE8E4",transition:"all 0.2s",cursor:"default"}} onMouseEnter={e=>{e.currentTarget.style.borderColor=tc.a;e.currentTarget.style.transform="translateX(2px)"}} onMouseLeave={e=>{e.currentTarget.style.borderColor="#EAE8E4";e.currentTarget.style.transform="translateX(0)"}}>
            <div style={{fontFamily:F,fontSize:10,letterSpacing:2,textTransform:"uppercase",color:tc.a,fontWeight:700,marginBottom:2}}>{s}</div>
            <div style={{fontFamily:F,fontSize:12,color:"#6B7280"}}>{td.secDetail[i]}</div>
          </div>
        ))}
      </div>
    </R>
  </div>
</div>
</section>

{/* COMPLIANCE (Tech only) */}
{track==="tech" && (
<section style={{background:`linear-gradient(170deg, #F0EEE9 0%, #EBE9E4 50%, #F0EEE9 100%)`,padding:mob?"48px 20px":"88px 40px",borderBottom:`1px solid ${C.border}`,position:"relative",overflow:"hidden"}}>
<div style={{position:"absolute",top:"20%",right:"-5%",width:"40%",height:"60%",background:`radial-gradient(ellipse, rgba(42,138,150,0.06) 0%, transparent 60%)`,pointerEvents:"none"}}/>
<div style={{maxWidth:1060,margin:"0 auto",position:"relative",zIndex:1}}>
  <R><Label>{td.compLabel}</Label></R>
  <R delay={0.04}><H2D>{td.compTitle}</H2D></R>
  <R delay={0.08}><p style={{fontFamily:F,fontSize:15,color:C.dim,lineHeight:1.8,maxWidth:640,marginBottom:40}}>{td.compP}</p></R>
  <R delay={0.12}>
    <div style={{display:"grid",gridTemplateColumns:mob?"1fr":"1fr 1fr",gap:16}}>
      {td.compItems.map((item,i)=>(
        <div key={i} style={{display:"flex",gap:12,alignItems:"flex-start",padding:"14px 18px",background:"#EAEAE6",border:`1px solid ${C.border}`}}>
          <div style={{width:20,height:20,borderRadius:"50%",border:`1.5px solid ${C.teal}`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:1}}>
            <span style={{fontFamily:F,fontSize:9,fontWeight:700,color:C.tealText}}>{String(i+1).padStart(2,"0")}</span>
          </div>
          <span style={{fontFamily:F,fontSize:13,color:C.muted,lineHeight:1.6}}>{item}</span>
        </div>
      ))}
    </div>
  </R>
</div>
</section>
)}

{/* TRANSFORMATION / RE EXPERTISE */}
<section id="transformation" style={{background:`linear-gradient(175deg, #F2F0EB 0%, #EDEBE6 40%, #F0EEE9 70%, #F5F3EF 100%)`,padding:mob?"48px 20px":"88px 40px",position:"relative",overflow:"hidden"}}>
<div style={{position:"absolute",top:"-15%",left:"-10%",width:"55%",height:"80%",background:`radial-gradient(ellipse, ${tc.as} 0%, transparent 55%)`,pointerEvents:"none"}}/>
<div style={{maxWidth:1060,margin:"0 auto",position:"relative",zIndex:1}}>
  <R><Label color={tc.a}>{td.tLabel}</Label></R>
  <R delay={0.04}><H2D>{td.tTitle}</H2D></R>
  <R delay={0.08}><p style={{fontFamily:F,fontSize:15,color:C.dim,lineHeight:1.8,maxWidth:600,marginBottom:30}}>{td.tP}</p></R>
  <R delay={0.1}>
    <div style={{marginBottom:30,border:`1px solid ${C.border}`,overflow:"hidden",background:"#fff"}}>
      <img src={track==="tech"?"/images/article-ai-disruption.jpg":"/images/re-expertise-reference-clean.jpg"} alt="" style={{width:"100%",height:mob?220:320,objectFit:"cover",objectPosition:"center center",display:"block"}} />
    </div>
  </R>
  <div style={{display:"grid",gridTemplateColumns:mob?"1fr":"1fr 1fr",gap:16,marginBottom:40}}>
    <R delay={0.12}>
      <div style={{padding:"28px 24px",border:`1px solid ${C.border}`,background:"#EAEAE6",height:"100%"}}>
        <div style={{fontFamily:F,fontSize:11,letterSpacing:2,textTransform:"uppercase",color:tc.at,fontWeight:600,marginBottom:16}}>{td.opexT}</div>
        {td.opex.map((x,i)=>(<div key={i} style={{display:"flex",gap:10,alignItems:"flex-start",marginBottom:12}}><Dot color={tc.a}/><span style={{fontFamily:F,fontSize:13,color:C.muted,lineHeight:1.6}}>{x}</span></div>))}
      </div>
    </R>
    <R delay={0.16}>
      <div style={{padding:"28px 24px",border:`1px solid ${C.border}`,background:"#EAEAE6",height:"100%"}}>
        <div style={{fontFamily:F,fontSize:11,letterSpacing:2,textTransform:"uppercase",color:C.goldText,fontWeight:600,marginBottom:16}}>{td.revT}</div>
        {td.rev.map((x,i)=>(<div key={i} style={{display:"flex",gap:10,alignItems:"flex-start",marginBottom:12}}><Dot color={C.gold}/><span style={{fontFamily:F,fontSize:13,color:C.muted,lineHeight:1.6}}>{x}</span></div>))}
      </div>
    </R>
  </div>
  <R delay={0.2}>
    <div style={{display:"grid",gridTemplateColumns:mob?"1fr":"repeat(3,1fr)",gap:mob?12:16}}>
      {td.kpis.map((s,i)=>(
        <div key={i} style={{padding:"22px",background:C.surfaceAlt,border:`1px solid ${C.border}`,textAlign:"center"}}>
          <div style={{fontFamily:F,fontSize:24,fontWeight:700,color:s.c||tc.at}}>{s.v}<span style={{fontSize:14,fontWeight:400}}>{s.u||""}</span></div>
          <div style={{fontFamily:F,fontSize:10,color:C.dim,marginTop:4,letterSpacing:0.5,textTransform:"uppercase"}}>{s.l}</div>
        </div>
      ))}
    </div>
  </R>
</div>
</section>

{/* SERVICES */}
<section id="leistungen" style={{background:C.cream,padding:mob?"48px 20px":"88px 40px"}}>
<div style={{maxWidth:1060,margin:"0 auto"}}>
  <R><Label color={tc.a}>{td.sLabel}</Label></R>
  <R delay={0.04}><H2L>{td.sTitle}</H2L></R>
  <div style={{display:"grid",gridTemplateColumns:mob?"1fr":"1fr 1fr",gap:14}}>
    {td.serv.map((s,i)=>(
      <R key={i} delay={i*0.06}>
        <div style={{padding:"28px 24px",border:"1px solid #EAE8E4",background:"#fff",transition:"border-color 0.25s",height:"100%",display:"flex",flexDirection:"column"}} onMouseEnter={e=>e.currentTarget.style.borderColor=tc.a} onMouseLeave={e=>e.currentTarget.style.borderColor="#EAE8E4"}>
          <span style={{fontFamily:F,fontSize:26,fontWeight:200,color:`${tc.a}33`}}>{s.n}</span>
          <h3 style={{fontFamily:F,fontSize:17,fontWeight:600,color:C.dark,margin:"4px 0 10px"}}>{s.t}</h3>
          <p style={{fontFamily:F,fontSize:13,color:"#6B7280",lineHeight:1.7,flex:1}}>{s.d}</p>
          <div style={{display:"flex",gap:5,flexWrap:"wrap",marginTop:14}}>
            {s.tags.map(tag=><span key={tag} style={{fontFamily:F,fontSize:9,letterSpacing:0.8,textTransform:"uppercase",fontWeight:600,padding:"3px 8px",background:tc.as,color:tc.a}}>{tag}</span>)}
          </div>
        </div>
      </R>
    ))}
  </div>
</div>
</section>

{/* NETWORK */}
<section id="netzwerk" style={{background:`linear-gradient(170deg, #F0EEE9 0%, #EBE9E4 50%, #F2F0EB 100%)`,padding:mob?"48px 20px":"88px 40px",position:"relative",overflow:"hidden"}}>
<div style={{position:"absolute",top:"-10%",right:"-10%",width:"45%",height:"70%",background:`radial-gradient(ellipse, ${tc.as} 0%, transparent 60%)`,pointerEvents:"none"}}/>
<div style={{position:"absolute",bottom:"-10%",left:"10%",width:"35%",height:"50%",background:`radial-gradient(ellipse, rgba(154,123,66,0.05) 0%, transparent 60%)`,pointerEvents:"none"}}/>
<div style={{maxWidth:1060,margin:"0 auto",position:"relative",zIndex:1}}>
  <R><Label color={tc.a}>{t.networkLabel}</Label></R>
  <R delay={0.04}><H2D>{t.networkTitle}</H2D></R>
  <R delay={0.08}><p style={{fontFamily:F,fontSize:15,color:C.dim,lineHeight:1.8,maxWidth:600,marginBottom:44}}>{t.networkP}</p></R>
  <R delay={0.1}><PartnerLogos lang={lang} /></R>
  <div style={{height:40}}/>
  <R delay={0.12}>
    <div style={{display:"grid",gridTemplateColumns:mob?"1fr 1fr":"repeat(5,1fr)",gap:12,marginBottom:32}}>
      {t.clusters[track].map((cl,i)=>(
        <div key={i} style={{padding:"20px 16px",background:"#EAEAE6",border:`1px solid ${C.border}`,transition:"border-color 0.2s",cursor:"default"}} onMouseEnter={e=>e.currentTarget.style.borderColor=tc.a} onMouseLeave={e=>e.currentTarget.style.borderColor=C.border}>
          <div style={{fontFamily:F,fontSize:10,letterSpacing:2,textTransform:"uppercase",color:tc.at,fontWeight:700,marginBottom:8}}>{cl.n}</div>
          <div style={{fontFamily:F,fontSize:11,color:C.muted,lineHeight:1.55}}>{cl.d}</div>
        </div>
      ))}
    </div>
  </R>
  <R delay={0.18}>
    <div style={{padding:"18px 24px",background:C.surfaceAlt,border:`1px solid ${C.border}`,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:12}}>
      <span style={{fontFamily:F,fontSize:13,color:C.muted,lineHeight:1.6,maxWidth:560}}>
        {lang==="de"?"Projektspezifische Team-Zusammenstellung — die richtigen Experten für jede Phase, jede Branche, jede Herausforderung.":lang==="cn"?"根据项目需求定制团队——为每个阶段、每个行业、每个挑战匹配合适的专家。":"Project-specific team assembly — the right experts for every phase, every industry, every challenge."}
      </span>
      <div style={{display:"flex",alignItems:"center",gap:8}}>
        <div style={{width:6,height:6,borderRadius:"50%",background:tc.a}}/>
        <span style={{fontFamily:F,fontSize:10,color:tc.at,letterSpacing:1,textTransform:"uppercase",fontWeight:600,whiteSpace:"nowrap"}}>{t.networkBadge}</span>
      </div>
    </div>
  </R>
</div>
</section>

{/* PROCESS */}
<section id="prozess" style={{background:`linear-gradient(165deg, #F0EEE9 0%, #EDEBE6 50%, #F2F0EB 100%)`,padding:mob?"48px 20px":"88px 40px",position:"relative",overflow:"hidden"}}>
<svg style={{position:"absolute",top:"-20%",right:"-15%",width:"60%",height:"140%",pointerEvents:"none",opacity:0.03}} viewBox="0 0 600 600">
  <circle cx="300" cy="300" r="120" fill="none" stroke={tc.a} strokeWidth="0.6"/>
  <circle cx="300" cy="300" r="200" fill="none" stroke={tc.a} strokeWidth="0.4"/>
  <circle cx="300" cy="300" r="280" fill="none" stroke={tc.a} strokeWidth="0.2"/>
</svg>
<div style={{maxWidth:1060,margin:"0 auto",position:"relative",zIndex:1}}>
  <R><Label color={tc.a}>{td.pLabel}</Label></R>
  <R delay={0.04}><H2D>{td.pTitle}</H2D></R>
  <R delay={0.08}>
    <div className="proc-row" style={{position:"relative",display:"flex",flexDirection:mob?"column":"row",gap:mob?24:0}}>
      <div style={{position:"absolute",top:28,left:48,right:48,height:2,display:mob?"none":"block",background:`linear-gradient(90deg,${tc.a},${C.gold})`,opacity:0.2,zIndex:0}}/>
      {td.proc.map((s,i)=>{const last=i===4;return(
        <div key={i} style={{flex:1,position:"relative",zIndex:1,textAlign:mob?"left":"center",padding:mob?"0":"0 6px",display:mob?"flex":"block",gap:mob?14:0,alignItems:mob?"flex-start":"initial"}}>
          <div style={{width:56,height:56,borderRadius:"50%",border:`2px solid ${last?C.gold:tc.a}`,background:C.bg,display:"flex",alignItems:"center",justifyContent:"center",margin:mob?"0":"0 auto 14px",flexShrink:0}}>
            <span style={{fontFamily:F,fontSize:15,fontWeight:700,color:last?C.goldText:tc.at}}>{s.n}</span>
          </div>
          <div>
            <div style={{fontFamily:F,fontSize:13,fontWeight:600,color:C.white,marginBottom:3}}>{s.t}</div>
            <div style={{fontFamily:F,fontSize:10,letterSpacing:1,textTransform:"uppercase",color:last?C.goldText:tc.at,fontWeight:600,marginBottom:8}}>{s.sub}</div>
            <div style={{fontFamily:F,fontSize:11,color:C.dim,lineHeight:1.55}}>{s.d}</div>
          </div>
        </div>
      )})}
    </div>
  </R>
  <R delay={0.16}>
    <div style={{marginTop:44,padding:"18px 24px",background:C.surfaceAlt,border:`1px solid ${C.border}`,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:12}}>
      <span style={{fontFamily:F,fontSize:13,color:C.muted}}>{td.pBar} <strong style={{color:C.white}}>{td.pBarB}</strong> {td.pBarC}</span>
      <div style={{display:"flex",alignItems:"center",gap:8}}>
        <div style={{width:6,height:6,borderRadius:"50%",background:tc.a}}/>
        <span style={{fontFamily:F,fontSize:10,color:tc.at,letterSpacing:1,textTransform:"uppercase",fontWeight:600}}>{td.pBadge}</span>
      </div>
    </div>
  </R>
</div>
</section>

{/* NEWS */}
<section id="news">
  <NewsSection track={track} lang={lang} />
</section>

{/* TRACK ARTICLE — AI or RE specific thought leadership */}
<TrackArticle track={track} lang={lang} />

{/* CONTACT */}
<section id="kontakt" style={{background:C.cream,padding:mob?"48px 20px":"88px 40px"}}>
<div style={{maxWidth:1060,margin:"0 auto"}}>
  <R><Label color={tc.a}>{t.cLabel}</Label></R>
  <R delay={0.04}><h2 style={{fontFamily:F,fontSize:"clamp(26px,3vw,38px)",fontWeight:300,color:C.dark,marginBottom:12,letterSpacing:"-0.02em"}}>{t.cTitle}</h2></R>
  <R delay={0.08}><p style={{fontFamily:F,fontSize:15,color:"#6B7280",lineHeight:1.75,maxWidth:480,marginBottom:40}}>{t.cP}</p></R>
  <div style={{display:"grid",gridTemplateColumns:mob?"1fr":"1fr 1fr",gap:mob?32:60,alignItems:"start"}}>
    <R delay={0.1}>
      <ContactForm lang={lang} accentColor={tc.a} accentTextColor={tc.at} />
    </R>
    <R delay={0.18}>
      <div>
        <div style={{display:"flex",flexDirection:"column",gap:14,marginBottom:28}}>
          {[{l:"Web",v:"inventures.at",h:"https://inventures.at"},{l:"E-Mail",v:"info@inventures.at",h:"mailto:info@inventures.at"},{l:"Location",v:t.loc,h:null}].map((c,i)=>(
            <div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"center",paddingBottom:14,borderBottom:"1px solid #EAE8E4"}}>
              <span style={{fontFamily:F,fontSize:10,letterSpacing:2,textTransform:"uppercase",color:"#6B7280",fontWeight:500}}>{c.l}</span>
              {c.h?<a href={c.h} style={{fontFamily:F,fontSize:14,color:C.dark,textDecoration:"none",fontWeight:500,transition:"color 0.2s"}} onMouseEnter={e=>e.target.style.color=tc.a} onMouseLeave={e=>e.target.style.color=C.dark}>{c.v}</a>
                :<span style={{fontFamily:F,fontSize:14,color:C.dark,fontWeight:500}}>{c.v}</span>}
            </div>
          ))}
        </div>
        <div>
          <span style={{fontFamily:F,fontSize:10,letterSpacing:2,textTransform:"uppercase",color:"#6B7280",fontWeight:500,display:"block",marginBottom:6}}>Legal Entity</span>
          <p style={{fontFamily:F,fontSize:13,color:C.dark,lineHeight:1.6,margin:0}}>{t.ent}<br/><span style={{color:"#9CA3AF"}}>{t.entSub}</span></p>
        </div>
      </div>
    </R>
  </div>
</div>
</section>

</>)}

{/* FOOTER */}
<footer style={{background:`linear-gradient(180deg, #F0EEE9 0%, #F5F3EF 100%)`,padding:mob?"24px 20px":"32px 40px",borderTop:`1px solid ${C.border}`}}>
<div style={{maxWidth:1060,margin:"0 auto",display:"flex",flexDirection:"column",gap:16}}>
  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:12}}>
    <div style={{display:"flex",flexDirection:"column"}}>
      <div style={{display:"flex",alignItems:"baseline",gap:4}}>
        <span style={{fontFamily:F,fontSize:12,fontWeight:700,color:C.goldText,letterSpacing:2.5}}>INVENTURES</span>
        <span style={{fontFamily:F,fontSize:8,letterSpacing:1.5,color:C.goldText}}>.at</span>
      </div>
      <span style={{fontFamily:F,fontSize:8,color:C.dim,letterSpacing:1,marginTop:2}}>{t.ent}</span>
    </div>
    {!track && (
      <div style={{display:"flex",gap:8}}>
        <button onClick={()=>setTrack("re")} style={{fontFamily:F,fontSize:9,letterSpacing:1.5,textTransform:"uppercase",color:C.goldText,background:C.goldSoft,border:"none",padding:"4px 10px",cursor:"pointer"}}>Real Estate</button>
        <button onClick={()=>setTrack("tech")} style={{fontFamily:F,fontSize:9,letterSpacing:1.5,textTransform:"uppercase",color:C.tealText,background:C.tealSoft,border:"none",padding:"4px 10px",cursor:"pointer"}}>Tech & AI</button>
      </div>
    )}
    <span style={{fontFamily:F,fontSize:10,color:C.dim}}>2006–2026 {t.ent}</span>
  </div>
  {/* Footer links row */}
  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:12,paddingTop:12,borderTop:`1px solid ${C.border}`}}>
    {/* Legal links */}
    <div style={{display:"flex",gap:20,alignItems:"center"}}>
      <button onClick={()=>setLegalModal("imprint")} style={{fontFamily:F,fontSize:10,letterSpacing:1.2,textTransform:"uppercase",color:C.dim,background:"none",border:"none",cursor:"pointer",padding:0,transition:"color 0.2s"}} onMouseEnter={e=>e.target.style.color=C.goldText} onMouseLeave={e=>e.target.style.color=C.dim}>Impressum</button>
      <button onClick={()=>setLegalModal("privacy")} style={{fontFamily:F,fontSize:10,letterSpacing:1.2,textTransform:"uppercase",color:C.dim,background:"none",border:"none",cursor:"pointer",padding:0,transition:"color 0.2s"}} onMouseEnter={e=>e.target.style.color=C.goldText} onMouseLeave={e=>e.target.style.color=C.dim}>Datenschutz</button>
    </div>
    {/* Social links */}
    <div style={{display:"flex",gap:16,alignItems:"center"}}>
      <a href="#" style={{display:"flex",alignItems:"center",gap:6,textDecoration:"none",color:C.dim,transition:"color 0.2s"}} onMouseEnter={e=>e.currentTarget.style.color=C.goldText} onMouseLeave={e=>e.currentTarget.style.color=C.dim}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        <span style={{fontFamily:F,fontSize:10,letterSpacing:0.8}}>LinkedIn — under reconstruction</span>
      </a>
      <a href="#" style={{display:"flex",alignItems:"center",gap:6,textDecoration:"none",color:C.dim,transition:"color 0.2s"}} onMouseEnter={e=>e.currentTarget.style.color=C.goldText} onMouseLeave={e=>e.currentTarget.style.color=C.dim}>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        <span style={{fontFamily:F,fontSize:10,letterSpacing:0.8}}>X / Twitter — under reconstruction</span>
      </a>
    </div>
  </div>
</div>
</footer>

<AvatarWidget lang={lang} />
{legalModal && <LegalModal type={legalModal} onClose={()=>setLegalModal(null)} />}
</div>
  );
}
