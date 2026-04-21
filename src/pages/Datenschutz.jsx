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
    <div style={{ fontFamily: F, fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: C.goldText, fontWeight: 600, marginBottom: 12 }}>
      {title}
    </div>
    {children}
  </div>
);

const P = ({ children }) => (
  <p style={{ fontFamily: F, fontSize: 13, color: C.dim, lineHeight: 1.75, margin: "0 0 10px" }}>{children}</p>
);

const Li = ({ children }) => (
  <li style={{ fontFamily: F, fontSize: 13, color: C.dim, lineHeight: 1.75, marginBottom: 6 }}>{children}</li>
);

export default function Datenschutz() {
  return (
    <div style={{ background: C.bg, minHeight: "100vh", fontFamily: F }}>
      <div style={{ maxWidth: 1060, margin: "0 auto", padding: "80px 24px 80px" }}>

        {/* Back */}
        <Link to="/" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: F, fontSize: 11, letterSpacing: 1, textTransform: "uppercase", color: C.muted, textDecoration: "none", marginBottom: 48 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
          Zurück
        </Link>

        <Label>Datenschutz</Label>
        <h1 style={{ fontFamily: F, fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 300, color: C.dark, letterSpacing: "-0.02em", marginBottom: 12, lineHeight: 1.2 }}>
          Datenschutzerklärung
        </h1>
        <p style={{ fontFamily: F, fontSize: 14, color: C.muted, marginBottom: 48 }}>
          Gemäß Art. 13 DSGVO, § 96 TKG 2021 — Stand: April 2026
        </p>

        {/* 1. Verantwortlicher */}
        <Section title="1. Verantwortlicher">
          <P>Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:</P>
          <div style={{ padding: "16px 20px", background: "rgba(0,0,0,0.03)", border: `1px solid ${C.border}`, marginBottom: 10 }}>
            <p style={{ fontFamily: F, fontSize: 13, color: C.dark, lineHeight: 1.8, margin: 0 }}>
              <strong>InVentures GmbH</strong><br />
              {/* TODO: Adresse prüfen — vermutlich Garbergasse 14/7, 1060 Wien */}
              [BITTE PRÜFEN: Garbergasse 14/7, 1060 Wien]<br />
              E-Mail: <a href="mailto:info@inventures.at" style={{ color: C.gold }}>info@inventures.at</a><br />
              Telefon: <a href="tel:+436641100333" style={{ color: C.gold }}>+43 664 11 00 333</a>
            </p>
          </div>
        </Section>

        {/* 2. Verarbeitungszwecke */}
        <Section title="2. Zwecke der Verarbeitung">
          <P>Wir verarbeiten personenbezogene Daten auf dieser Website zu folgenden Zwecken:</P>
          <ul style={{ paddingLeft: 20, margin: "0 0 10px" }}>
            <Li>Bereitstellung und Betrieb der Website</Li>
            <Li>Beantwortung von Kontaktanfragen per E-Mail oder Kontaktformular</Li>
            <Li>Analyse des Nutzerverhaltens zur Website-Optimierung (nur mit Einwilligung)</Li>
            <Li>Werbliche Kommunikation (nur mit Einwilligung)</Li>
          </ul>
        </Section>

        {/* 3. Rechtsgrundlagen */}
        <Section title="3. Rechtsgrundlagen">
          <P>Die Verarbeitung Ihrer Daten erfolgt auf Basis folgender Rechtsgrundlagen:</P>
          <ul style={{ paddingLeft: 20, margin: "0 0 10px" }}>
            <Li><strong>Art. 6 Abs. 1 lit. a DSGVO</strong> — Einwilligung (z. B. Analyse- und Marketing-Cookies)</Li>
            <Li><strong>Art. 6 Abs. 1 lit. b DSGVO</strong> — Vertragserfüllung oder vorvertragliche Maßnahmen</Li>
            <Li><strong>Art. 6 Abs. 1 lit. f DSGVO</strong> — Berechtigte Interessen (z. B. technisch notwendige Cookies, Server-Sicherheit)</Li>
          </ul>
        </Section>

        {/* 4. Server-Logfiles */}
        <Section title="4. Server-Logfiles (Hosting)">
          <P>
            Beim Abruf dieser Website werden automatisch Informationen in sogenannten Server-Logfiles gespeichert.
            Diese umfassen: IP-Adresse (anonymisiert), Browsertyp und -version, Betriebssystem, Referrer-URL, abgerufene Seite sowie Datum und Uhrzeit des Abrufs.
          </P>
          <P>
            Diese Daten sind technisch notwendig für den sicheren Betrieb der Website und werden nicht mit anderen Datenquellen zusammengeführt.
            Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO. Speicherdauer: 30 Tage, danach automatische Löschung.
          </P>
        </Section>

        {/* 5. Cookies */}
        <Section title="5. Cookies und Tracking (§ 96 TKG)">
          <P>
            Diese Website verwendet Cookies — kleine Textdateien, die in Ihrem Browser gespeichert werden.
            Wir unterscheiden folgende Kategorien:
          </P>
          <ul style={{ paddingLeft: 20, margin: "0 0 10px" }}>
            <Li>
              <strong>Technisch notwendige Cookies:</strong> Unerlässlich für den Betrieb der Website (z. B. Speicherung Ihrer Cookie-Einwilligung).
              Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO. Keine Einwilligung erforderlich.
            </Li>
            <Li>
              <strong>Analyse-Cookies:</strong> Werden nur mit Ihrer Einwilligung gesetzt. Ermöglichen die Analyse des Nutzerverhaltens zur Website-Optimierung.
              Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO.
            </Li>
            <Li>
              <strong>Marketing-Cookies:</strong> Werden nur mit Ihrer Einwilligung gesetzt. Dienen der Personalisierung von Werbung und Conversion-Tracking.
              Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO.
            </Li>
          </ul>
          <P>
            Sie können Ihre Einwilligung jederzeit widerrufen, indem Sie auf{" "}
            <button
              onClick={() => window.dispatchEvent(new Event("open-consent"))}
              style={{ background: "none", border: "none", color: C.gold, cursor: "pointer", fontFamily: F, fontSize: 13, padding: 0, textDecoration: "underline" }}
            >
              Cookie-Einstellungen
            </button>{" "}
            klicken.
          </P>
        </Section>

        {/* 6. Kontaktformular */}
        <Section title="6. Kontaktformular und E-Mail-Kontakt">
          <P>
            Wenn Sie uns per Kontaktformular oder E-Mail kontaktieren, werden die von Ihnen übermittelten Daten
            (Name, E-Mail-Adresse, Nachricht) zur Bearbeitung Ihrer Anfrage gespeichert.
            Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw. Art. 6 Abs. 1 lit. f DSGVO.
            Speicherdauer: bis zur vollständigen Bearbeitung Ihrer Anfrage, längstens 3 Jahre.
          </P>
        </Section>

        {/* 7. Hosting — Vercel */}
        <Section title="7. Hosting — Vercel Inc. (Drittlandübermittlung)">
          <P>
            Diese Website wird bei Vercel Inc., 340 Pine Street, Suite 701, San Francisco, CA 94104, USA gehostet.
            Bei jedem Seitenaufruf können Daten (insbesondere IP-Adresse, Zugriffszeiten) an Server von Vercel in den USA übertragen werden.
          </P>
          <P>
            Vercel ist unter dem EU-US Data Privacy Framework zertifiziert. Die Datenübermittlung in die USA erfolgt auf Grundlage
            von Standardvertragsklauseln gemäß Art. 46 Abs. 2 lit. c DSGVO. Weitere Informationen:{" "}
            <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: C.gold }}>
              vercel.com/legal/privacy-policy
            </a>
          </P>
        </Section>

        {/* 8. Schriftarten */}
        <Section title="8. Schriftarten">
          <P>
            Diese Website verwendet die Schriftart „DM Sans", welche lokal auf unserem Webserver eingebunden ist.
            Es findet kein Transfer von Daten an Dritte (z. B. Google) statt.
          </P>
        </Section>

        {/* 9. Betroffenenrechte */}
        <Section title="9. Ihre Rechte als betroffene Person">
          <P>Sie haben gemäß DSGVO folgende Rechte gegenüber uns:</P>
          <ul style={{ paddingLeft: 20, margin: "0 0 10px" }}>
            <Li><strong>Auskunftsrecht</strong> (Art. 15 DSGVO): Auskunft über die verarbeiteten Daten</Li>
            <Li><strong>Recht auf Berichtigung</strong> (Art. 16 DSGVO): Korrektur unrichtiger Daten</Li>
            <Li><strong>Recht auf Löschung</strong> (Art. 17 DSGVO): „Recht auf Vergessenwerden"</Li>
            <Li><strong>Recht auf Einschränkung</strong> (Art. 18 DSGVO): Eingeschränkte Verarbeitung</Li>
            <Li><strong>Recht auf Datenübertragbarkeit</strong> (Art. 20 DSGVO): Erhalt Ihrer Daten in maschinenlesbarem Format</Li>
            <Li><strong>Widerspruchsrecht</strong> (Art. 21 DSGVO): Widerspruch gegen Verarbeitung auf Basis berechtigter Interessen</Li>
            <Li><strong>Recht auf Widerruf</strong> (Art. 7 Abs. 3 DSGVO): Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft</Li>
          </ul>
          <P>
            Zur Ausübung dieser Rechte wenden Sie sich bitte an:{" "}
            <a href="mailto:info@inventures.at" style={{ color: C.gold }}>info@inventures.at</a>
          </P>
        </Section>

        {/* 10. Beschwerderecht */}
        <Section title="10. Beschwerderecht bei der Datenschutzbehörde">
          <P>
            Sie haben das Recht, sich bei der österreichischen Datenschutzbehörde zu beschweren, wenn Sie der Ansicht sind,
            dass die Verarbeitung Ihrer personenbezogenen Daten gegen die DSGVO verstößt:
          </P>
          <div style={{ padding: "16px 20px", background: "rgba(0,0,0,0.03)", border: `1px solid ${C.border}` }}>
            <p style={{ fontFamily: F, fontSize: 13, color: C.dark, lineHeight: 1.8, margin: 0 }}>
              <strong>Österreichische Datenschutzbehörde</strong><br />
              Barichgasse 40–42<br />
              1030 Wien<br />
              <a href="https://www.dsb.gv.at" target="_blank" rel="noopener noreferrer" style={{ color: C.gold }}>www.dsb.gv.at</a>
            </p>
          </div>
        </Section>

        {/* 11. Speicherdauer */}
        <Section title="11. Speicherdauer">
          <P>
            Wir speichern personenbezogene Daten nur solange, wie es für den jeweiligen Verarbeitungszweck erforderlich ist
            oder gesetzliche Aufbewahrungspflichten bestehen (z. B. 7 Jahre nach UGB). Nach Ablauf der Speicherfrist werden
            die Daten routinemäßig gelöscht, sofern sie nicht zur Vertragserfüllung oder -anbahnung weiterhin benötigt werden.
          </P>
        </Section>

        {/* 12. Kein Profiling */}
        <Section title="12. Automatisierte Entscheidungsfindung / Profiling">
          <P>
            Wir treffen keine Entscheidungen, die ausschließlich auf einer automatisierten Verarbeitung — einschließlich Profiling —
            beruhen und Ihnen gegenüber rechtliche Wirkung entfalten oder Sie in ähnlicher Weise erheblich beeinträchtigen (Art. 22 DSGVO).
          </P>
        </Section>

        {/* Footer nav */}
        <div style={{ marginTop: 64, paddingTop: 24, borderTop: `1px solid ${C.border}`, display: "flex", gap: 20 }}>
          <Link to="/" style={{ fontFamily: F, fontSize: 11, color: C.muted, textDecoration: "none", letterSpacing: 0.5 }}>Home</Link>
          <Link to="/impressum" style={{ fontFamily: F, fontSize: 11, color: C.muted, textDecoration: "none", letterSpacing: 0.5 }}>Impressum</Link>
        </div>
      </div>
    </div>
  );
}
