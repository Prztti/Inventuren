import { useState } from "react";

const F = "'DM Sans',sans-serif";
const gold = "#9A7B42";
const goldText = "#B8924E";
const dark = "#1A1A1A";
const dim = "#6B7280";
const muted = "#8A919A";

const events = [
  {
    year: "2005",
    en: { title: "Portfolio Expansion — Trimm Real Estate Group", desc: "Co-investment in a Vienna residential portfolio expansion alongside the Trimm Immobilien Gruppe, marking the first significant co-investment mandate." },
    de: { title: "Beteiligung & Skalierung Trimm Immobilien Gruppe", desc: "Co-Investment im Rahmen einer Portfolioerweiterung der Trimm Immobilien Gruppe Wien — erstes bedeutendes Co-Investment-Mandat." },
  },
  {
    year: "2007",
    en: { title: "Co-Investment — UNIQA Institutional Real Estate Package", desc: "Participated in a €600m institutional real estate package alongside UNIQA Group, spanning residential and commercial assets across Austria." },
    de: { title: "Co-Investment UNIQA Immobilienpaket", desc: "Beteiligung an einem institutionellen Immobilienpaket von 600 Mio. EUR gemeinsam mit der UNIQA Group — Wohn- und Gewerbeimmobilien in ganz Österreich." },
  },
  {
    year: "2009",
    en: { title: "International Real Estate Desk — Lansky Ganzger + Partner", desc: "Established and led the International Real Estate Practice at Austria's premier law firm, structuring cross-border transactions for CEE and MENA clients." },
    de: { title: "International Real Estate Desk bei Lansky Ganzger + Partner", desc: "Aufbau und Leitung der International Real Estate Practice in Österreichs führender Anwaltskanzlei — grenzüberschreitende Transaktionen für CEE- und MENA-Mandanten." },
  },
  {
    year: "2010",
    en: { title: "Wohnimpuls Partnership & LKW Walter Advisory", desc: "Strategic partnership with Wohnimpuls Bauträger on multiple residential projects; concurrently advised LKW Walter Group on real estate strategy and HQ expansion." },
    de: { title: "Kooperation Wohnimpuls Bauträger", desc: "Strategische Partnerschaft mit Wohnimpuls für mehrere Wohnbauprojekte; zeitgleich Beratung der LKW Walter Gruppe zu Immobilienstrategie und Hauptquartier-Expansion." },
  },
  {
    year: "2013",
    en: { title: "Founding of geolad GmbH", desc: "Established geolad GmbH as a specialist vehicle for location intelligence and spatial data analytics, bridging real estate expertise and emerging data markets." },
    de: { title: "Gründung geolad GmbH", desc: "Gründung der geolad GmbH als Spezialbeteiligungsgesellschaft für Location Intelligence und räumliche Datenanalytik — Brücke zwischen Immobilien-Know-how und Datenmärkten." },
  },
  {
    year: "2015",
    en: { title: "First Telecom Data Hub Mandate", desc: "Awarded the first engagement for the development of a Telecom Science Data Hub — a pioneering B2B platform monetising network data for enterprise clients." },
    de: { title: "Erstes Telco-Data-Hub-Mandat", desc: "Erste Beauftragung zur Entwicklung eines Telecom Science Data Hubs — einer wegweisenden B2B-Plattform zur Monetarisierung von Netzwerkdaten für Unternehmenskunden." },
  },
  {
    year: "2017",
    en: { title: "A1 Group — Anchor Partnership", desc: "A1 Group joined the Data Hub ecosystem as anchor partner, validating the platform architecture and accelerating enterprise data product development." },
    de: { title: "A1 Group Partnership", desc: "Die A1 Group trat als Ankerpartner in das Data-Hub-Ökosystem ein — Validierung der Plattformarchitektur und Beschleunigung der Produktentwicklung für Unternehmenskunden." },
  },
  {
    year: "2018",
    en: { title: "International Telco Consortium", desc: "Orange, Viettel, Zain, Huawei and Ericsson joined the ecosystem — establishing InVentures as a global connector between telecoms and data platform buyers." },
    de: { title: "Internationales Telko-Konsortium", desc: "Orange, Viettel, Zain, Huawei und Ericsson traten dem Ökosystem bei — InVentures etablierte sich als globaler Verbinder zwischen Telekommunikationsunternehmen und Datenplattform-Käufern." },
  },
  {
    year: "2019",
    en: { title: "EU Horizon Research Grant", desc: "Secured first EU Horizon research co-funding for AI-assisted urban mobility analytics — first €2.3m in public research grants, establishing the research funding track." },
    de: { title: "EU-Horizon-Forschungsförderung", desc: "Erste EU-Horizon-Forschungskofinanzierung für KI-gestützte städtische Mobilitätsanalytik gesichert — erste 2,3 Mio. EUR an öffentlichen Forschungsgeldern." },
  },
  {
    year: "2020",
    en: { title: "COVID Digital Resilience Advisory", desc: "Pivoted to digital resilience consulting for real estate and telecom clients navigating pandemic-driven market dislocations — 14 mandates delivered in 9 months." },
    de: { title: "COVID Digital Resilience Advisory", desc: "Umstieg auf Digital-Resilience-Beratung für Immobilien- und Telekom-Kunden inmitten pandemiebedingter Marktverschiebungen — 14 Mandate in 9 Monaten abgeschlossen." },
  },
  {
    year: "2021",
    en: { title: "PropTech Portfolio Entry", desc: "First direct PropTech investment in a Vienna-based AI-powered property management platform — seed round led alongside Austrian and German family offices." },
    de: { title: "PropTech-Portfolioeinstieg", desc: "Erste direkte PropTech-Beteiligung an einer Wiener KI-gestützten Property-Management-Plattform — Seed-Runde gemeinsam mit österreichischen und deutschen Family Offices geleitet." },
  },
  {
    year: "2022",
    en: { title: "MENA Capital Bridge", desc: "Established structured access to Gulf Cooperation Council sovereign and family office capital for European real estate — first GCC-to-AT deal closed Q4 2022." },
    de: { title: "MENA Capital Bridge", desc: "Strukturierter Zugang zu souveränem und Family-Office-Kapital aus dem Golfkooperationsrat für europäische Immobilien geschaffen — erster GCC-zu-AT-Deal im Q4 2022 abgeschlossen." },
  },
  {
    year: "2023",
    en: { title: "AI Advisory Practice — Formal Launch", desc: "Launched InVentures AI Advisory — supporting B2B clients in AI strategy, EU AI Act readiness and data monetisation across DACH and CEE markets." },
    de: { title: "AI Advisory Practice — offizieller Start", desc: "Start der InVentures AI Advisory — Begleitung von B2B-Kunden in KI-Strategie, EU-AI-Act-Readiness und Datenmonetarisierung in DACH und CEE." },
  },
  {
    year: "2024",
    en: { title: "InVentures GmbH — Relaunch", desc: "Rebranded and restructured as InVentures GmbH, consolidating 20 years of cross-sector expertise into a focused AI × Real Estate advisory platform." },
    de: { title: "InVentures GmbH Relaunch", desc: "Rebranding und Restrukturierung als InVentures GmbH — 20 Jahre branchenübergreifende Expertise in einer fokussierten AI × Real Estate Advisory-Plattform konsolidiert." },
  },
  {
    year: "2025",
    en: { title: "inventures.at — Platform Launch", desc: "Launch of inventures.at — InVentures' digital-first client interface for AI strategy, PropTech advisory and cross-border investment mandates." },
    de: { title: "inventures.at — Platform Launch", desc: "Launch von inventures.at — InVentures' digitale Mandatsplattform für KI-Strategie, PropTech-Advisory und grenzüberschreitende Investitionsprojekte." },
  },
];

const txTitles = {
  en: { label: "Track Record", title: "20 Years. One Through-Line.", sub: "From Vienna real estate to global telecom data platforms to AI advisory — a deliberate journey across the industries that matter." },
  de: { label: "Track Record", title: "20 Jahre. Ein roter Faden.", sub: "Von Wiener Immobilientransaktionen über globale Telekom-Datenplattformen bis zur KI-Advisory — ein gezielter Weg durch die relevanten Industrien." },
  cn: { label: "发展历程", title: "20年。一条主线。", sub: "从维也纳房地产到全球电信数据平台，再到AI咨询——跨越关键行业的蓄意之旅。" },
};

export default function Timeline({ lang = "en" }) {
  const [expanded, setExpanded] = useState(null);
  const tx = txTitles[lang] || txTitles.en;

  return (
    <section style={{ background: "linear-gradient(175deg, #F5F4F1 0%, #EDEBE6 50%, #F2F0EB 100%)", padding: "80px 0", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 1, height: "100%", background: `linear-gradient(to bottom, transparent, ${gold}33, ${gold}55, ${gold}33, transparent)`, pointerEvents: "none" }} />

      <div style={{ maxWidth: 1060, margin: "0 auto", padding: "0 40px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 12 }}>
            <div style={{ width: 24, height: 1, background: gold }} />
            <span style={{ fontFamily: F, fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: goldText, fontWeight: 600 }}>{tx.label}</span>
            <div style={{ width: 24, height: 1, background: gold }} />
          </div>
          <h2 style={{ fontFamily: F, fontSize: "clamp(26px,3.5vw,40px)", fontWeight: 300, color: dark, letterSpacing: "-0.025em", marginBottom: 12 }}>{tx.title}</h2>
          <p style={{ fontFamily: F, fontSize: 14, color: dim, lineHeight: 1.7, maxWidth: 520, margin: "0 auto" }}>{tx.sub}</p>
        </div>

        {/* Timeline entries */}
        <div style={{ position: "relative" }}>
          {events.map((ev, i) => {
            const isLeft = i % 2 === 0;
            const isExpanded = expanded === i;
            const entry = lang === "de" ? ev.de : lang === "cn" ? ev.en : ev.en; // CN fallback to EN

            return (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 56px 1fr",
                  gap: 0,
                  marginBottom: 8,
                  alignItems: "start",
                }}
              >
                {/* Left content */}
                <div style={{ padding: "0 32px 0 0", textAlign: "right", paddingTop: 10 }}>
                  {isLeft ? (
                    <TimelineCard entry={entry} ev={ev} isExpanded={isExpanded} onToggle={() => setExpanded(isExpanded ? null : i)} goldText={goldText} gold={gold} dark={dark} dim={dim} muted={muted} F={F} align="right" />
                  ) : null}
                </div>

                {/* Center spine */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative" }}>
                  {/* Year badge */}
                  <div style={{
                    width: 48, height: 48, borderRadius: "50%",
                    background: i === events.length - 1 ? gold : "#fff",
                    border: `2px solid ${gold}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0, zIndex: 1, position: "relative",
                    boxShadow: "0 2px 8px rgba(154,123,66,0.15)",
                  }}>
                    <span style={{ fontFamily: F, fontSize: 9, fontWeight: 700, color: i === events.length - 1 ? "#fff" : goldText, letterSpacing: 0.5 }}>{ev.year}</span>
                  </div>
                  {i < events.length - 1 && (
                    <div style={{ width: 1, flex: 1, minHeight: 40, background: `linear-gradient(to bottom, ${gold}44, ${gold}22)`, marginTop: 2 }} />
                  )}
                </div>

                {/* Right content */}
                <div style={{ padding: "0 0 0 32px", paddingTop: 10 }}>
                  {!isLeft ? (
                    <TimelineCard entry={entry} ev={ev} isExpanded={isExpanded} onToggle={() => setExpanded(isExpanded ? null : i)} goldText={goldText} gold={gold} dark={dark} dim={dim} muted={muted} F={F} align="left" />
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile layout override via CSS injection */}
        <style>{`
          @media(max-width:768px){
            .tl-grid{display:block!important}
            .tl-left{display:none!important}
            .tl-right{padding-left:16px!important;padding-right:0!important}
            .tl-spine{width:40px!important}
          }
        `}</style>
      </div>
    </section>
  );
}

function TimelineCard({ entry, isExpanded, onToggle, goldText, gold, dark, dim, F, align }) {
  return (
    <div
      onClick={onToggle}
      style={{
        cursor: "pointer",
        padding: "14px 16px",
        background: isExpanded ? "#fff" : "transparent",
        border: `1px solid ${isExpanded ? gold + "44" : "transparent"}`,
        transition: "all 0.25s",
        textAlign: align,
      }}
      onMouseEnter={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.borderColor = gold + "33"; }}
      onMouseLeave={e => { if (!isExpanded) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "transparent"; } }}
    >
      <h4 style={{ fontFamily: F, fontSize: 13, fontWeight: 600, color: dark, marginBottom: 4, lineHeight: 1.4 }}>{entry.title}</h4>
      {isExpanded && (
        <p style={{ fontFamily: F, fontSize: 12, color: dim, lineHeight: 1.65, marginTop: 6 }}>{entry.desc}</p>
      )}
      {!isExpanded && (
        <span style={{ fontFamily: F, fontSize: 10, color: goldText, letterSpacing: 0.5 }}>
          {align === "right" ? "→" : "←"}
        </span>
      )}
    </div>
  );
}
