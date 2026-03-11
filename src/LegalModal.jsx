import { useEffect } from "react";

const F = "'DM Sans',sans-serif";
const gold = "#9A7B42";
const goldText = "#B8924E";
const dark = "#1A1A1A";
const dim = "#6B7280";

export default function LegalModal({ type, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  useEffect(() => {
    const h = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 2000,
        background: "rgba(26,26,26,0.78)", backdropFilter: "blur(8px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "20px",
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: "#fff", maxWidth: 740, width: "100%",
          maxHeight: "88vh", overflowY: "auto",
          padding: "52px 56px 48px",
          position: "relative",
          borderTop: `3px solid ${gold}`,
          boxShadow: "0 32px 80px rgba(0,0,0,0.25)",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute", top: 20, right: 20,
            background: "none", border: "none", cursor: "pointer",
            fontSize: 18, color: dim, lineHeight: 1, padding: "4px 8px",
            fontFamily: F,
          }}
          aria-label="Schließen"
        >✕</button>
        {type === "imprint" ? <Impressum /> : <Datenschutz />}
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <h3 style={{
        fontFamily: F, fontSize: 14, fontWeight: 600, color: dark,
        marginBottom: 12, paddingBottom: 8,
        borderBottom: "1px solid #E5E7EB", letterSpacing: 0.2,
      }}>{title}</h3>
      {children}
    </div>
  );
}

function Field({ label, children }) {
  return (
    <div style={{ display: "flex", gap: 16, marginBottom: 8, fontFamily: F, fontSize: 14 }}>
      <span style={{ color: dim, minWidth: 180, flexShrink: 0 }}>{label}:</span>
      <span style={{ color: dark }}>{children}</span>
    </div>
  );
}

function P({ children }) {
  return <p style={{ fontFamily: F, fontSize: 14, color: "#374151", lineHeight: 1.75, marginBottom: 10 }}>{children}</p>;
}

function UL({ items }) {
  return (
    <ul style={{ fontFamily: F, fontSize: 14, color: "#374151", lineHeight: 1.8, paddingLeft: 22, marginTop: 8 }}>
      {items.map((item, i) => <li key={i} style={{ marginBottom: 6 }} dangerouslySetInnerHTML={{ __html: item }} />)}
    </ul>
  );
}

function A({ href, children }) {
  return <a href={href} target="_blank" rel="noreferrer" style={{ color: goldText, textDecoration: "none" }}>{children}</a>;
}

function Impressum() {
  return (
    <div style={{ fontFamily: F }}>
      <h2 style={{ fontSize: 30, fontWeight: 300, color: dark, marginBottom: 6, letterSpacing: "-0.025em" }}>Impressum</h2>
      <p style={{ fontSize: 10, color: dim, letterSpacing: 2.5, textTransform: "uppercase", marginBottom: 40, fontWeight: 500 }}>Gemäß § 5 ECG · Österreich</p>

      <Section title="Angaben gemäß § 5 E-Commerce-Gesetz (ECG)">
        <Field label="Unternehmen">InVentures GmbH</Field>
        <Field label="Adresse">Garbergasse 14/7, 1060 Wien, Österreich</Field>
        <Field label="Firmenbuchnummer">FN 342972 x beim Handelsgericht Wien</Field>
        <Field label="UID-Nummer">ATU65716433</Field>
        <Field label="Geschäftsführung">David [●] — Geschäftsführer</Field>
        <Field label="E-Mail"><A href="mailto:info@inventures.at">info@inventures.at</A></Field>
        <Field label="Website">inventures.at</Field>
      </Section>

      <Section title="Aufsichtsbehörde & Berufsrecht">
        <P>
          <strong>Aufsichtsbehörde:</strong> Magistrat der Stadt Wien<br />
          <strong>Berufsrecht:</strong> Gewerbeordnung 1994 (GewO), verfügbar unter{" "}
          <A href="https://www.ris.bka.gv.at">www.ris.bka.gv.at</A>
        </P>
      </Section>

      <Section title="EU-Streitschlichtung (ODR)">
        <P>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit,
          die unter folgendem Link erreichbar ist:{" "}
          <A href="https://ec.europa.eu/consumers/odr">https://ec.europa.eu/consumers/odr</A>
        </P>
        <P>
          InVentures GmbH ist weder bereit noch verpflichtet, an Streitbeilegungsverfahren vor
          einer Verbraucherschlichtungsstelle teilzunehmen. Unsere Kontakt-E-Mail-Adresse finden
          Sie im Abschnitt „Angaben gemäß § 5 ECG" oben.
        </P>
      </Section>

      <Section title="Inhaltliche Verantwortung & Haftungshinweis">
        <P>
          Die Inhalte dieser Website wurden mit größter Sorgfalt und nach bestem Wissen erstellt.
          Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernimmt InVentures GmbH
          keine Gewähr. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 ECG für eigene Inhalte nach
          den allgemeinen Gesetzen verantwortlich.
        </P>
        <P>
          Gemäß §§ 8–10 ECG sind wir als Diensteanbieter nicht verpflichtet, übermittelte oder
          gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf
          eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
          Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine
          diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
          Rechtsverletzung möglich.
        </P>
      </Section>

      <Section title="Links zu externen Websites">
        <P>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
          Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
          Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist ohne
          konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.
        </P>
      </Section>

      <Section title="Urheberrecht">
        <P>
          Die durch InVentures GmbH erstellten Inhalte und Werke auf dieser Website unterliegen dem
          österreichischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
          der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung
          des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den
          privaten, nicht kommerziellen Gebrauch gestattet.
        </P>
        <P>
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die
          Urheberrechte Dritter beachtet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung
          aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
          Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
        </P>
      </Section>
    </div>
  );
}

function Datenschutz() {
  return (
    <div style={{ fontFamily: F }}>
      <h2 style={{ fontSize: 30, fontWeight: 300, color: dark, marginBottom: 6, letterSpacing: "-0.025em" }}>Datenschutzerklärung</h2>
      <p style={{ fontSize: 10, color: dim, letterSpacing: 2.5, textTransform: "uppercase", marginBottom: 40, fontWeight: 500 }}>Gemäß DSGVO · Stand: März 2026</p>

      <Section title="1. Verantwortlicher (Art. 4 Nr. 7 DSGVO)">
        <P>
          <strong>InVentures GmbH</strong><br />
          Garbergasse 14/7, 1060 Wien, Österreich<br />
          E-Mail: <A href="mailto:info@inventures.at">info@inventures.at</A><br />
          Website: inventures.at
        </P>
      </Section>

      <Section title="2. Erhobene personenbezogene Daten">
        <P>Wir erheben und verarbeiten folgende Kategorien personenbezogener Daten:</P>
        <UL items={[
          "<strong>Kontaktformulardaten:</strong> Name, E-Mail-Adresse, Unternehmen, ausgewählter Interessensbereich sowie Nachrichteninhalt bei Nutzung des Kontaktformulars auf inventures.at.",
          "<strong>Newsletter-Anmeldedaten:</strong> E-Mail-Adresse bei freiwilliger Anmeldung zum InVentures View Newsletter.",
          "<strong>Technische Zugriffsdaten (Server-Logs):</strong> Bei jedem Seitenaufruf werden automatisch technische Daten erfasst, darunter IP-Adresse (anonymisiert), Datum und Uhrzeit des Zugriffs, aufgerufene URL, verwendeter Browser und Betriebssystem. Diese Daten sind nicht einzelnen Personen zuordenbar und werden ausschließlich für technische Betriebszwecke verwendet.",
        ]} />
        <P>
          Wir erheben keine sensiblen Datenkategorien gemäß Art. 9 DSGVO (z. B. Gesundheitsdaten,
          biometrische Daten, politische Meinungen).
        </P>
      </Section>

      <Section title="3. Rechtsgrundlagen der Verarbeitung (Art. 6 DSGVO)">
        <UL items={[
          "<strong>Art. 6 Abs. 1 lit. b DSGVO</strong> – Verarbeitung zur Erfüllung eines Vertrags oder zur Durchführung vorvertraglicher Maßnahmen (Beantwortung und Bearbeitung von Kontaktanfragen, Projektanfragen und Mandatsanfragen).",
          "<strong>Art. 6 Abs. 1 lit. f DSGVO</strong> – Verarbeitung aufgrund berechtigter Interessen des Verantwortlichen: technisch notwendige Server-Logs zur Sicherstellung des störungsfreien Betriebs und zur Abwehr von Angriffen (Cybersicherheit).",
          "<strong>Art. 6 Abs. 1 lit. a DSGVO</strong> – Einwilligung der betroffenen Person bei freiwilliger Anmeldung zum InVentures View Newsletter. Die Einwilligung kann jederzeit mit Wirkung für die Zukunft widerrufen werden.",
        ]} />
      </Section>

      <Section title="4. Zwecke der Datenverarbeitung">
        <P>Wir verarbeiten Ihre personenbezogenen Daten ausschließlich für folgende, im Voraus festgelegte Zwecke:</P>
        <UL items={[
          "Bearbeitung, Beantwortung und Nachverfolgung von Kontakt- und Projektanfragen sowie strategischen Anfragen",
          "Vorbereitung und Anbahnung von Beratungs- und Kooperationsmandaten",
          "Versand des InVentures View Newsletters mit Fachbeiträgen zu AI, Real Estate und Investment (nur bei bestehender Newsletter-Anmeldung)",
          "Technischer Betrieb, Sicherheit und Optimierung der Website inventures.at",
        ]} />
      </Section>

      <Section title="5. Speicherdauer">
        <P>
          <strong>Kontaktformulardaten</strong> und damit verbundene Korrespondenz werden für einen Zeitraum
          von <strong>drei (3) Jahren</strong> nach dem letzten Kontakt gespeichert. Längere Aufbewahrungspflichten
          nach österreichischem Recht bleiben unberührt (insbesondere steuerrechtliche Aufbewahrungsfristen
          von sieben Jahren gemäß § 132 Abs. 1 BAO).
        </P>
        <P>
          <strong>Server-Logs</strong> werden nach spätestens <strong>30 Tagen</strong> automatisiert gelöscht.
        </P>
        <P>
          <strong>Newsletter-Abonnements</strong> bleiben bis zum Widerruf der Einwilligung gespeichert.
          Nach Widerruf werden die Daten innerhalb von 14 Tagen gelöscht.
        </P>
      </Section>

      <Section title="6. Weitergabe personenbezogener Daten an Dritte">
        <P>
          Eine Weitergabe Ihrer personenbezogenen Daten an Dritte erfolgt grundsätzlich nicht. Ausnahmen
          bestehen ausschließlich in den folgenden, auf das notwendige Minimum beschränkten Fällen:
        </P>
        <UL items={[
          "<strong>Netlify Inc.</strong> (Hosting & Formularverarbeitung): Die Website inventures.at wird über die Infrastruktur von Netlify Inc. betrieben. Über Netlify Forms werden Kontaktformulardaten erfasst und weitergeleitet. Netlify ist nach dem EU-US Data Privacy Framework zertifiziert. Ein Auftragsverarbeitungsvertrag (AVV) gemäß Art. 28 DSGVO ist abgeschlossen. Netlify-Datenschutzerklärung: <a href='https://www.netlify.com/privacy/' target='_blank' rel='noreferrer' style='color:#B8924E'>netlify.com/privacy</a>",
          "<strong>Resend Inc.</strong> (E-Mail-Versand): Für den technischen Versand von E-Mail-Benachrichtigungen aus Kontaktformularen wird der Dienst Resend genutzt. Resend verarbeitet Daten auf Servern innerhalb der Europäischen Union. Ein AVV ist abgeschlossen.",
          "<strong>Behörden und Gerichte:</strong> Bei gesetzlicher Verpflichtung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.",
        ]} />
      </Section>

      <Section title="7. Cookies und Tracking-Technologien">
        <P>
          Diese Website verwendet <strong>ausschließlich technisch notwendige Session-Cookies</strong>, die
          für den ordnungsgemäßen Betrieb der Website unbedingt erforderlich sind. Diese Cookies
          enthalten keine personenbezogenen Daten und werden automatisch gelöscht, sobald Sie Ihren
          Browser schließen.
        </P>
        <P>
          Wir setzen <strong>keinerlei Analyse- oder Tracking-Tools</strong> ein. Insbesondere werden
          folgende Dienste <u>nicht</u> verwendet:
        </P>
        <UL items={[
          "Google Analytics oder vergleichbare Web-Analyse-Dienste",
          "Meta Pixel (Facebook/Instagram) oder sonstige Social-Media-Tracking-Pixel",
          "Remarketing- oder Retargeting-Technologien",
          "Heatmapping- oder Session-Recording-Dienste (z. B. Hotjar, Clarity)",
        ]} />
        <P>
          Es werden keine Nutzerprofile erstellt. Es findet kein verhaltensbasiertes Targeting statt.
        </P>
      </Section>

      <Section title="8. Ihre Rechte als betroffene Person">
        <P>
          Nach der DSGVO stehen Ihnen folgende Rechte zu. Zur Ausübung dieser Rechte wenden Sie sich
          bitte schriftlich an: <A href="mailto:info@inventures.at">info@inventures.at</A>
        </P>
        <UL items={[
          "<strong>Auskunftsrecht (Art. 15 DSGVO):</strong> Sie haben das Recht, jederzeit unentgeltlich Auskunft über die zu Ihrer Person gespeicherten personenbezogenen Daten sowie eine Kopie dieser Daten zu erhalten.",
          "<strong>Recht auf Berichtigung (Art. 16 DSGVO):</strong> Sie haben das Recht, unverzüglich die Berichtigung unrichtiger oder die Vervollständigung unvollständiger personenbezogener Daten zu verlangen.",
          "<strong>Recht auf Löschung (Art. 17 DSGVO):</strong> Sie haben das Recht, die Löschung Ihrer personenbezogenen Daten zu verlangen, sofern die gesetzlichen Voraussetzungen vorliegen und keine Aufbewahrungspflichten entgegenstehen.",
          "<strong>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO):</strong> Sie können die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten verlangen, wenn bestimmte gesetzliche Bedingungen erfüllt sind.",
          "<strong>Recht auf Datenübertragbarkeit (Art. 20 DSGVO):</strong> Sie haben das Recht, die Sie betreffenden personenbezogenen Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten und diese an einen anderen Verantwortlichen zu übertragen.",
          "<strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Sie haben das Recht, jederzeit Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten einzulegen, soweit diese auf Art. 6 Abs. 1 lit. f DSGVO (berechtigte Interessen) beruht.",
          "<strong>Widerrufsrecht (Art. 7 Abs. 3 DSGVO):</strong> Sofern die Verarbeitung Ihrer Daten auf einer Einwilligung beruht (z. B. Newsletter-Anmeldung), können Sie diese Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung bleibt unberührt.",
        ]} />
      </Section>

      <Section title="9. Beschwerderecht bei der Aufsichtsbehörde">
        <P>
          Unbeschadet anderer Rechtsbehelfe haben Sie das Recht, eine Beschwerde bei der zuständigen
          österreichischen Aufsichtsbehörde einzulegen, wenn Sie der Ansicht sind, dass die Verarbeitung
          Ihrer personenbezogenen Daten gegen die DSGVO verstößt:
        </P>
        <P>
          <strong>Österreichische Datenschutzbehörde</strong><br />
          Barichgasse 40–42, 1030 Wien<br />
          Telefon: +43 1 52 152-0<br />
          E-Mail: dsb@dsb.gv.at<br />
          Website: <A href="https://www.dsb.gv.at">www.dsb.gv.at</A>
        </P>
      </Section>

      <Section title="10. Datensicherheit">
        <P>
          Wir setzen technische und organisatorische Maßnahmen ein, um Ihre personenbezogenen Daten
          gegen zufällige oder vorsätzliche Manipulation, Verlust, Zerstörung oder gegen den Zugriff
          unberechtigter Personen zu schützen. Die Übertragung von Daten auf unserer Website erfolgt
          ausschließlich verschlüsselt über HTTPS/TLS. Unsere Sicherheitsmaßnahmen werden entsprechend
          der technologischen Entwicklung fortlaufend verbessert.
        </P>
      </Section>

      <Section title="11. Aktualität und Änderung dieser Datenschutzerklärung">
        <P>
          Diese Datenschutzerklärung ist aktuell gültig und hat den Stand März 2026. Durch die
          Weiterentwicklung unserer Website und Angebote oder aufgrund geänderter gesetzlicher bzw.
          behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern.
          Die jeweils aktuelle Datenschutzerklärung kann jederzeit auf der Website unter inventures.at
          abgerufen werden.
        </P>
      </Section>
    </div>
  );
}
