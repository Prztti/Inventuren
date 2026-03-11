import { useState } from "react";

const F = "Neue Haas Grotesk Display Pro, Inter, sans-serif";
const C = { dark: "#1A1A1A", gold: "#9A7B42", goldText: "#B8924E", silver: "#8A9BA8", cream: "#F5F4F1", dim: "rgba(26,26,26,0.45)" };

function PullQuote({ text, color = C.gold }) {
  return (
    <div style={{ borderLeft: `3px solid ${color}`, paddingLeft: 24, margin: "32px 0", maxWidth: 520 }}>
      <p style={{ fontFamily: F, fontSize: 18, fontWeight: 300, color: C.dark, fontStyle: "italic", lineHeight: 1.65, margin: 0 }}>
        "{text}"
      </p>
    </div>
  );
}

function Body({ children }) {
  return <p style={{ fontFamily: F, fontSize: 15.5, color: "#374151", lineHeight: 1.85, marginBottom: 20, maxWidth: 720 }}>{children}</p>;
}

function H3({ children, color = C.dark }) {
  return <h3 style={{ fontFamily: F, fontSize: 17, fontWeight: 600, color, letterSpacing: "-0.01em", marginBottom: 10, marginTop: 32 }}>{children}</h3>;
}

// ── AI ARTICLE ──────────────────────────────────────────────────────────────
function AIArticle({ lang }) {
  const isDE = lang === "de";
  return (
    <div>
      {/* Hero image */}
      <div style={{ width: "100%", height: 300, marginBottom: 40, overflow: "hidden", borderRadius: 2, position: "relative" }}>
        <img src="/images/article-ai-disruption.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 60%)" }} />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
        <div style={{ width: 24, height: 1, background: C.silver }} />
        <span style={{ fontFamily: F, fontSize: 9, letterSpacing: 3, textTransform: "uppercase", color: C.silver, fontWeight: 600 }}>
          InVentures View · March 2026
        </span>
      </div>

      <h2 style={{ fontFamily: F, fontSize: "clamp(22px,3vw,34px)", fontWeight: 300, color: C.dark, lineHeight: 1.25, letterSpacing: "-0.02em", marginBottom: 8, maxWidth: 680 }}>
        {isDE
          ? "Die stille Disruption: Wie Agentic AI ganze Unternehmen verändert — bevor sie es merken"
          : "The Silent Disruption: How Agentic AI Is Reshaping Entire Organisations — Before They Notice"}
      </h2>
      <p style={{ fontFamily: F, fontSize: 12, color: C.dim, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 32 }}>
        InVentures Advisory — {isDE ? "März" : "March"} 2026
      </p>

      <Body>
        {isDE
          ? "Noch vor 18 Monaten galt ein Mitarbeiter mit LLM-Know-how als seltene Ressource. Unternehmen zahlten Prämien für Prompt Engineers, Data Scientists und KI-Strategen. Heute beginnt diese Logik zu kollabieren — nicht weil KI schlechter geworden ist, sondern weil sie besser geworden ist: fundamental, strukturell, irreversibel besser."
          : "Eighteen months ago, an employee with LLM knowledge was a rare commodity. Companies paid premiums for prompt engineers, data scientists and AI strategists. Today that logic is beginning to collapse — not because AI has gotten worse, but because it has gotten better: fundamentally, structurally, irreversibly better."}
      </Body>

      <H3 color={C.silver}>{isDE ? "Vom Werkzeug zum Kollegen — zum Vorstand" : "From Tool to Colleague — to Board Member"}</H3>

      <Body>
        {isDE
          ? "Die erste Welle der KI-Adoption — Copiloten, Chatbots, Zusammenfassungen — hat Routineaufgaben beschleunigt. Die zweite Welle, Agentic AI, ist qualitativ anders: Systeme die eigenständig planen, ausführen, rückmelden und iterieren. McKinsey schätzt, dass 60–70 % der Arbeitszeit von Wissensarbeitern heute durch KI-Agenten übernommen werden könnten (McKinsey Global Institute, 2023). Stanford HAI dokumentiert, dass Agentic-AI-Systeme in kontrollierten Umgebungen bereits komplexe Rechtsgutachten, Finanzanalysen und Produktstrategien liefern — nicht als Entwurf, sondern als Erstversion."
          : "The first wave of AI adoption — copilots, chatbots, summaries — accelerated routine tasks. The second wave, Agentic AI, is qualitatively different: systems that independently plan, execute, report and iterate. McKinsey estimates that 60–70% of knowledge workers' time could now be handled by AI agents (McKinsey Global Institute, 2023). Stanford HAI documents that agentic AI systems in controlled environments already deliver complex legal opinions, financial analyses and product strategies — not as drafts, but as first versions."}
      </Body>

      <PullQuote
        color={C.silver}
        text={isDE
          ? "Wer heute glaubt, KI sei ein Produktivitätstool, wird morgen feststellen, dass KI sein Unternehmen ist."
          : "Those who today believe AI is a productivity tool will tomorrow discover that AI is their company."}
      />

      <H3 color={C.silver}>{isDE ? "Der blinde Fleck: KMUs und nicht-börsennotierte Unternehmen" : "The Blind Spot: SMEs and Non-Listed Companies"}</H3>

      <Body>
        {isDE
          ? "Börsennotierte Konzerne haben Boards, Investoren und Analysten die auf AI-Readiness drängen. KMUs und mittelgroße private Unternehmen haben diesen externen Druck nicht. Eine Studie der WKO (2024) zeigt: Nur 10,8 % der österreichischen Unternehmen nutzen KI produktiv. Gleichzeitig berichten frühe Adopters — insbesondere im Rechts-, Finanz- und Beratungssektor — von Effizienzgewinnen von 30–60 %, die Wettbewerbsvorteile erzeugen, die innerhalb von 12–24 Monaten strukturell schwer aufzuholen sind."
          : "Listed corporations have boards, investors and analysts pushing AI readiness. SMEs and mid-sized private companies lack this external pressure. A WKO study (2024) shows: only 10.8% of Austrian companies use AI productively. Meanwhile early adopters — particularly in legal, finance and consulting — report efficiency gains of 30–60%, generating competitive advantages that become structurally difficult to close within 12–24 months."}
      </Body>

      <Body>
        {isDE
          ? "Konkret: Im Rechtsbereich ersetzt Harvey.ai — ein auf GPT-4 basierendes System, eingesetzt bei Allen & Overy und anderen Magic-Circle-Kanzleien — bereits Junior-Associates bei der Vertragsanalyse. Klarna ersetzte 2024 öffentlichkeitswirksam 700 Kundendienst-Mitarbeiter durch ein internes KI-System und kommunizierte damit explizit an Investoren. Das sind keine Ausnahmen — das sind Frühindikatoren."
          : "Concretely: in legal, Harvey.ai — a GPT-4-based system deployed at Allen & Overy and other Magic Circle firms — is already replacing junior associates in contract analysis. In 2024 Klarna publicly replaced 700 customer service employees with an internal AI system, explicitly communicating this to investors. These are not exceptions — they are leading indicators."}
      </Body>

      <H3 color={C.silver}>{isDE ? "Das Extremszenario: Geklonte Vorstände" : "The Extreme Scenario: Cloned Boards"}</H3>

      <Body>
        {isDE
          ? "Was noch vor zwei Jahren nach Science Fiction klang, wird akademisch ernsthaft diskutiert: Digital Twins von Führungskräften — trainiert auf deren Entscheidungshistorie, Kommunikation und strategischen Präferenzen — als 'Decision Prediction Engines'. Unternehmen wie Synthesia und D-ID ermöglichen bereits überzeugende Video-Avatare von Executives. Der nächste Schritt: Entscheidungsmodelle. Wharton-Forscher haben 2023 demonstriert, dass GPT-4 in simulierten Managementszenarien konsistenter und systematischer entscheidet als menschliche Manager — und das ohne Müdigkeit, Bias durch Tagesform oder politische Rücksichtnahme."
          : "What sounded like science fiction two years ago is now seriously discussed in academia: digital twins of executives — trained on their decision history, communication and strategic preferences — as 'decision prediction engines'. Companies like Synthesia and D-ID already enable convincing video avatars of executives. The next step: decision models. Wharton researchers demonstrated in 2023 that GPT-4 decides more consistently and systematically than human managers in simulated management scenarios — without fatigue, mood-induced bias or political considerations."}
      </Body>

      <PullQuote
        color={C.silver}
        text={isDE
          ? "Die Frage ist nicht ob KI Entscheidungen trifft. Die Frage ist, wessen Werte dabei codiert sind."
          : "The question is not whether AI makes decisions. The question is whose values are encoded in it."}
      />

      <H3 color={C.silver}>{isDE ? "Was jetzt zu tun ist" : "What To Do Now"}</H3>

      <Body>
        {isDE
          ? "InVentures begleitet Unternehmen bei der strukturierten AI-Readiness-Analyse: welche Prozesse sind AI-substitutierbar, welche müssen human-in-the-loop bleiben, und wo entstehen durch gezielte Adoption echte Marktvorteile. Wir arbeiten nicht mit Hype — wir arbeiten mit Szenarien, Timelines und messbaren Ergebnissen."
          : "InVentures accompanies companies through structured AI readiness analysis: which processes are AI-substitutable, which must remain human-in-the-loop, and where targeted adoption creates genuine market advantages. We don't work with hype — we work with scenarios, timelines and measurable outcomes."}
      </Body>

      <div style={{ marginTop: 16 }}>
        <span style={{ fontFamily: F, fontSize: 13, color: C.silver, fontStyle: "italic" }}>
          {isDE
            ? "Quellen: McKinsey Global Institute (2023), WKO Digitalisierungsreport (2024), Stanford HAI AI Index (2024), Wharton School — AI in Management (2023), Harvey.ai Case Studies (Allen & Overy, 2023), Klarna Annual Report (2024)"
            : "Sources: McKinsey Global Institute (2023), WKO Digitalisierungsreport (2024), Stanford HAI AI Index (2024), Wharton School — AI in Management (2023), Harvey.ai Case Studies (Allen & Overy, 2023), Klarna Annual Report (2024)"}
        </span>
      </div>
    </div>
  );
}

// ── RE ARTICLE ──────────────────────────────────────────────────────────────
function REArticle({ lang }) {
  const isDE = lang === "de";
  return (
    <div>
      {/* Hero image — hotel/RE */}
      <div style={{ width: "100%", height: 300, marginBottom: 40, overflow: "hidden", borderRadius: 2, position: "relative" }}>
        <img src="/images/article-re-hotel.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 60%)" }} />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
        <div style={{ width: 24, height: 1, background: C.gold }} />
        <span style={{ fontFamily: F, fontSize: 9, letterSpacing: 3, textTransform: "uppercase", color: C.gold, fontWeight: 600 }}>
          InVentures View · March 2026
        </span>
      </div>

      <h2 style={{ fontFamily: F, fontSize: "clamp(22px,3vw,34px)", fontWeight: 300, color: C.dark, lineHeight: 1.25, letterSpacing: "-0.02em", marginBottom: 8, maxWidth: 680 }}>
        {isDE
          ? "Nach der Korrektur: Wo jetzt die besten Einstiegsmöglichkeiten im europäischen Immobilienmarkt liegen — und warum Hotels eine stille Krise verbirgt"
          : "After the Correction: Where Europe's Best Real Estate Entry Points Now Lie — and Why Hotels Are Hiding a Silent Crisis"}
      </h2>
      <p style={{ fontFamily: F, fontSize: 12, color: C.dim, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 32 }}>
        InVentures Advisory — {isDE ? "März" : "March"} 2026
      </p>

      <Body>
        {isDE
          ? "Zwischen 2022 und 2024 hat der europäische Immobilienmarkt eine der schärfsten Bewertungskorrekturen der Nachkriegszeit durchlaufen. Steigende Zinsen, Finanzierungsengpässe und ein Nachfragerückgang haben Preise in Kernmärkten um 15–30 % gedrückt — in einzelnen deutschen Teilmärkten bis zu 35 %. Was als Schmerz begann, ist heute für kapitalkräftige Käufer eine strukturelle Chance: Die Korrektur ist weitgehend abgeschlossen, Renditen fallen wieder, und internationales Kapital kehrt zurück."
          : "Between 2022 and 2024, the European real estate market underwent one of the sharpest valuation corrections since the post-war period. Rising interest rates, financing constraints and demand collapse pushed prices in core markets down by 15–30% — in some German sub-markets by up to 35%. What began as pain is today a structural opportunity for capital-strong buyers: the correction is largely complete, yields are falling again, and international capital is returning."}
      </Body>

      <H3 color={C.gold}>{isDE ? "Wohnimmobilien: Struktureller Nachfrageüberhang trifft auf erschöpftes Angebot" : "Residential: Structural Demand Overhang Meets Exhausted Supply"}</H3>

      <Body>
        {isDE
          ? "Wien, München, Hamburg und Zürich eint ein gemeinsames Problem: Fertigstellungen sinken seit 2022 auf historische Tiefststände, während Haushaltsbildung und Migration weiter ansteigen. CBRE dokumentiert für Wien eine Leerstandsrate von unter 1 % bei gleichzeitig steigenden Spitzenmieten. EHL Immobilien berichtet für 2025 von einer Angebotsknappheit, die sich frühestens 2027 entspannen wird. Für Investoren bedeutet das: Bestandsimmobilien mit Repositionierungspotenzial bieten heute Risk-adjusted Returns, die Neubauprojekte nicht erreichen können."
          : "Vienna, Munich, Hamburg and Zurich share a common problem: completions have fallen to historic lows since 2022 while household formation and migration continue to rise. CBRE documents a vacancy rate below 1% in Vienna alongside rising prime rents. EHL Immobilien reports a supply shortage for 2025 that will not ease until 2027 at the earliest. For investors this means: existing stock with repositioning potential today offers risk-adjusted returns that new-build projects cannot match."}
      </Body>

      <PullQuote
        color={C.gold}
        text={isDE
          ? "Die Korrektur hat nicht den Bedarf reduziert — sie hat nur das Angebot eingefroren. Das schafft seltene Einstiegsfenster."
          : "The correction did not reduce demand — it only froze supply. That creates rare entry windows."}
      />

      <H3 color={C.gold}>{isDE ? "Gewerbeimmobilien: Selektiv, aber mit Aufwind" : "Commercial: Selective, but with Tailwind"}</H3>

      <Body>
        {isDE
          ? "Im Bürosektor findet eine beschleunigte Qualitätsspaltung statt: Prime-Flächen in Toplage (Wien 1., 3., 19. Bezirk) verzeichnen Mietsteigerungen von 8–12 %, während B-Lagen strukturellen Leerstand aufbauen. Die Botschaft für Investoren ist präzise: Nur Kernlagen mit hoher ESG-Zertifizierung (ÖGNI/BREEAM) rechtfertigen heute Investition — dort sichert der Mietpremium die Rendite. Logistik bleibt stärkste Asset-Klasse: JLL erwartet bis 2026 stabile Renditen bei weiter steigenden Mieten in Lagen nahe Wien, Linz und Graz."
          : "In the office sector an accelerated quality split is underway: prime space in top locations (Vienna's 1st, 3rd and 19th districts) is recording rent increases of 8–12%, while B-locations are building structural vacancy. The message for investors is precise: only core locations with high ESG certification (ÖGNI/BREEAM) justify investment today — there the rent premium secures the yield. Logistics remains the strongest asset class: JLL expects stable yields through 2026 with continuing rent increases near Vienna, Linz and Graz."}
      </Body>

      <H3 color={C.gold}>{isDE ? "Hotels: Die stille Krise hinter den Rekordzahlen" : "Hotels: The Silent Crisis Behind the Record Numbers"}</H3>

      <Body>
        {isDE
          ? "Der österreichische Tourismusmarkt verzeichnet Rekordübernachtungen — und dennoch steuert der Hotelmarkt auf eine strukturelle Krise zu. Die Schere zwischen steigenden Betriebskosten und stagnierenden Zimmerpreisen öffnet sich in einem Tempo, das viele Betreiber überfordert. Pachten für Hotelimmobilien sind im Zuge der allgemeinen Immobilienwerte gestiegen. Gleichzeitig können Zimmerpreise in Wien und den österreichischen Tourismusregionen nicht unbegrenzt erhöht werden — die Konsumenten reagieren bereits mit Buchungsverschiebungen und verkürzten Aufenthalten."
          : "Austria's tourism market is recording overnight stays at record levels — and yet the hotel market is heading for a structural crisis. The gap between rising operating costs and stagnating room prices is widening at a rate that is overwhelming many operators. Leases on hotel properties have risen in line with general real estate values. Meanwhile room prices in Vienna and Austria's tourism regions cannot be increased without limit — consumers are already responding with booking shifts and shorter stays."}
      </Body>

      <Body>
        {isDE
          ? "CBRE Austria und Christie & Co. dokumentieren für 2025 einen Rückgang der EBITDA-Margen bei 3- und 4-Sterne-Betrieben um 4–8 Prozentpunkte — bei gleichzeitig steigendem Kapitaldienst. Das Ergebnis: Erste Distressed-Asset-Situationen werden bereits sichtbar, insbesondere bei Hotelimmobilien mit auslaufenden Finanzierungen und Betreibern ohne Preissetzungsmacht."
          : "CBRE Austria and Christie & Co. document for 2025 a decline in EBITDA margins at 3- and 4-star properties of 4–8 percentage points — alongside rising debt service. The result: the first distressed-asset situations are already becoming visible, particularly in hotel properties with maturing financing and operators without pricing power."}
      </Body>

      <PullQuote
        color={C.gold}
        text={isDE
          ? "Record occupancy with shrinking margins is not a success story. It is the precursor to a restructuring wave."
          : "Record occupancy with shrinking margins is not a success story. It is the precursor to a restructuring wave."}
      />

      <H3 color={C.gold}>{isDE ? "Wie InVentures positioniert ist" : "How InVentures Is Positioned"}</H3>

      <Body>
        {isDE
          ? "Wir beobachten den Hotelmarkt mit unserem Netzwerk aus Betreibern, Finanzierern und institutionellen Eigentümern sehr genau — mit dem Ziel, unsere Kunden optimal auf selektive Akquisitionen und Expansionen vorzubereiten. Gleichzeitig begleiten wir Investoren bei der Identifikation und Strukturierung von Wohn- und Gewerbeimmobilien, die von der Post-Korrektur-Dynamik profitieren. Unser Ansatz: nicht Timing, sondern Qualität — die richtigen Assets in den richtigen Lagen mit der richtigen Kapitalstruktur."
          : "We monitor the hotel market closely through our network of operators, financiers and institutional owners — with the explicit goal of positioning our clients optimally for selective acquisitions and expansions. Simultaneously we accompany investors in identifying and structuring residential and commercial real estate assets that benefit from post-correction dynamics. Our approach: not timing, but quality — the right assets in the right locations with the right capital structure."}
      </Body>

      <div style={{ marginTop: 16 }}>
        <span style={{ fontFamily: F, fontSize: 13, color: C.dim, fontStyle: "italic" }}>
          {isDE
            ? "Quellen: CBRE Austria Real Estate Market Outlook 2026, EHL Immobilien Wohnmarktbericht 2025, JLL Housing Market Overview H2 2024, Christie & Co Hotel Market Report 2025, PwC/ULI Emerging Trends in Real Estate Europe 2025"
            : "Sources: CBRE Austria Real Estate Market Outlook 2026, EHL Immobilien Wohnmarktbericht 2025, JLL Housing Market Overview H2 2024, Christie & Co Hotel Market Report 2025, PwC/ULI Emerging Trends in Real Estate Europe 2025"}
        </span>
      </div>
    </div>
  );
}

// ── MAIN COMPONENT ──────────────────────────────────────────────────────────
export default function TrackArticle({ track, lang }) {
  const mob = typeof window !== "undefined" && window.innerWidth < 700;
  const accentColor = track === "re" ? C.gold : C.silver;

  return (
    <section style={{ background: "#fff", padding: mob ? "56px 20px" : "88px 40px", borderTop: `1px solid ${accentColor}20` }}>
      <div style={{ maxWidth: 820, margin: "0 auto" }}>
        {track === "tech" ? <AIArticle lang={lang} /> : <REArticle lang={lang} />}

        <div style={{ marginTop: 40, paddingTop: 28, borderTop: "1px solid #EAE8E4", display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
          <a
            href="mailto:info@inventures.at?subject=InVentures View — Inquiry"
            style={{ fontFamily: F, fontSize: 12, letterSpacing: 1.5, textTransform: "uppercase", color: accentColor, textDecoration: "none", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 8, border: `1px solid ${accentColor}`, padding: "10px 20px", borderRadius: 2, transition: "all 0.2s" }}
          >
            {lang === "de" ? "Gespräch anfragen" : "Request a Conversation"} →
          </a>
          <span style={{ fontFamily: F, fontSize: 12, color: C.dim }}>
            {lang === "de" ? "Oder schreiben Sie uns direkt:" : "Or write to us:"} info@inventures.at
          </span>
        </div>
      </div>
    </section>
  );
}
