import { Link } from "react-router-dom";

const F = "'DM Sans', sans-serif";
const C = {
  bg: "#F5F4F1",
  dark: "#1A1A1A",
  dim: "#6B7280",
  muted: "#8A919A",
  gold: "#9A7B42",
  goldText: "#B8924E",
  border: "rgba(0,0,0,0.07)",
  surface: "#ECEAE6",
};

const Label = ({ children }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
    <div style={{ width: 24, height: 1, background: C.gold }} />
    <span style={{ fontFamily: F, fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: C.goldText, fontWeight: 600 }}>
      {children}
    </span>
  </div>
);

const Section = ({ title, children }) => (
  <div style={{ marginBottom: 36 }}>
    <div style={{ fontFamily: F, fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: C.goldText, fontWeight: 600, marginBottom: 10 }}>
      {title}
    </div>
    {children}
  </div>
);

// Small superscript for the academic title (Mag.^iur), as on the German preview pages.
const SUP = { fontSize: "0.6em", verticalAlign: "0.6em", lineHeight: 0, marginLeft: "0.05em" };

const Row = ({ label, value, link }) => (
  <div style={{ display: "flex", gap: 16, paddingBottom: 12, marginBottom: 12, borderBottom: `1px solid ${C.border}`, flexWrap: "wrap" }}>
    <span style={{ fontFamily: F, fontSize: 11, color: C.muted, minWidth: 180, flexShrink: 0 }}>{label}</span>
    {link
      ? <a href={link} target="_blank" rel="noopener noreferrer" style={{ fontFamily: F, fontSize: 13, color: C.gold, textDecoration: "none" }}>{value}</a>
      : <span style={{ fontFamily: F, fontSize: 13, color: C.dark, lineHeight: 1.6 }}>{value}</span>
    }
  </div>
);

const P = ({ children, style }) => (
  <p style={{ fontFamily: F, fontSize: 13, color: C.dim, lineHeight: 1.75, margin: "0 0 10px", ...style }}>{children}</p>
);

export default function Impressum() {
  return (
    <div style={{ background: C.bg, minHeight: "100vh", fontFamily: F }}>
      <div style={{ maxWidth: 1060, margin: "0 auto", padding: "80px 24px 80px" }}>

        {/* Back */}
        <Link to="/" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: F, fontSize: 11, letterSpacing: 1, textTransform: "uppercase", color: C.muted, textDecoration: "none", marginBottom: 48 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
          Zurück
        </Link>

        <Label>Impressum</Label>
        <h1 style={{ fontFamily: F, fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 300, color: C.dark, letterSpacing: "-0.02em", marginBottom: 48, lineHeight: 1.2 }}>
          Inside Holding &amp; Real Estate GmbH
        </h1>
        <div style={{ marginBottom: 40 }}>
          <P>InVentures ist ein Joint Venture von Mag.<sup style={SUP}>iur</sup> David Brainin und Philip Kügler, MSc. Rechtsträger und Betreiber dieser Website ist die Inside Holding &amp; Real Estate GmbH.</P>
        </div>

        {/* Firmendaten */}
        <Section title="Firmendaten">
          <Row label="Firmenname" value="Inside Holding & Real Estate GmbH" />
          <Row label="Rechtsform" value="Gesellschaft mit beschränkter Haftung" />
          <Row label="Firmenbuchnummer" value="FN 342972 x" />
          <Row label="Firmenbuchgericht" value="Handelsgericht Wien" />
          <Row label="UID-Nummer" value="ATU65716433" />
          <Row label="Geschäftsanschrift" value="Garbergasse 14/7, 1060 Wien" />
          <Row label="Geschäftsführer" value={<>Mag.<sup style={SUP}>iur</sup> David Brainin</>} />
        </Section>

        {/* Kontakt */}
        <Section title="Kontakt">
          <Row label="Telefon" value="+43 664 11 00 333" link="tel:+436641100333" />
          <Row label="E-Mail" value="info@inventures.at" link="mailto:info@inventures.at" />
          <Row label="Website" value="inventures.at" link="https://inventures.at" />
        </Section>

        {/* Unternehmensgegenstand */}
        <Section title="Unternehmensgegenstand">
          <P>Immobiliengeschäfte und Beteiligungen.</P>
        </Section>

        {/* Gewerberechtliche Angaben */}
        <Section title="Gewerberechtliche Angaben">
          <Row label="Gewerbeberechtigungen" value="Handelsgewerbe und Handelsagent; Namhaftmachung von Personen, die an einem Vertragsabschluss über Immobilien interessiert sind, an einen Immobilienmakler" />
          <Row label="Kammer" value="Wirtschaftskammer Wien" />
          <Row label="Gewerbebehörde" value="Magistratisches Bezirksamt für den 6. und 7. Bezirk, Hermanngasse 24–26, 1070 Wien" />
          <Row label="Gewerberecht" value="Gewerbeordnung 1994 (ris.bka.gv.at)" link="https://www.ris.bka.gv.at" />
        </Section>

        {/* Haftungsausschluss */}
        <Section title="Haftungsausschluss — Externe Links">
          <P>
            Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
          </P>
        </Section>

        {/* Urheberrecht */}
        <Section title="Urheberrecht">
          <P>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf dieser Website unterliegen dem österreichischen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors oder Erstellers.
          </P>
        </Section>

        {/* Mediengesetz */}
        <Section title="Offenlegung gem. § 25 MedienG">
          <Row label="Medieninhaber" value="Inside Holding & Real Estate GmbH, Garbergasse 14/7, 1060 Wien" />
          <Row label="Beteiligungsverhältnisse" value={<>Mag.<sup style={SUP}>iur</sup> David Brainin, 100 %</>} />
          <Row label="Grundlegende Richtung" value="Information über die Leistungen von InVentures in den Bereichen Tech & AI sowie Real Estate & Hospitality und Fachbeiträge zu diesen Themen." />
        </Section>

        {/* Footer nav */}
        <div style={{ marginTop: 64, paddingTop: 24, borderTop: `1px solid ${C.border}`, display: "flex", gap: 20 }}>
          <Link to="/" style={{ fontFamily: F, fontSize: 11, color: C.muted, textDecoration: "none", letterSpacing: 0.5 }}>Home</Link>
          <Link to="/datenschutz" style={{ fontFamily: F, fontSize: 11, color: C.muted, textDecoration: "none", letterSpacing: 0.5 }}>Datenschutzerklärung</Link>
        </div>
      </div>
    </div>
  );
}
