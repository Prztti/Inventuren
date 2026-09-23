import { F, T, LABEL, C as TC } from "./tokens";

const C = { dark: TC.dark, gold: TC.goldDeep, goldText: TC.gold, silver: TC.silverInk, cream: TC.bg, dim: TC.dim };

function PullQuote({ text, color = C.gold }) {
  return (
    <div style={{ borderLeft: `3px solid ${color}`, paddingLeft: 24, margin: "32px 0", maxWidth: 520 }}>
      <p className="t-h3" style={{ fontWeight: 400, color: C.dark, lineHeight: 1.45, margin: 0 }}>
        {text}
      </p>
    </div>
  );
}

function Body({ children }) {
  return <p className="t-body" style={{ color: TC.text, lineHeight: 1.75, margin: "0 0 20px", maxWidth: 680 }}>{children}</p>;
}

function H3({ children, color = C.dark }) {
  return <h3 className="t-h3" style={{ color, margin: "40px 0 12px" }}>{children}</h3>;
}

// ── AI ARTICLE ──────────────────────────────────────────────────────────────
function AIArticle({ lang }) {
  const isDE = lang === "de";
  return (
    <div>
      {/* Hero image */}
      <div style={{ width: "100%", height: 300, marginBottom: 40, overflow: "hidden", borderRadius: 2, position: "relative" }}>
        <img src="/images/opt/article-ai-disruption-1024.webp" loading="lazy" decoding="async" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 60%)" }} />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
        <div style={{ width: 24, height: 1, background: C.silver }} />
        <span style={{ ...LABEL, color: C.silver }}>
          InVentures View · {isDE ? "März 2026, aktualisiert September 2026" : "March 2026, updated September 2026"}
        </span>
      </div>

      <h2 className="t-stat" style={{ color: C.dark, lineHeight: 1.2, margin: "0 0 12px", maxWidth: 720 }}>
        {isDE
          ? "Die stille Disruption: Wie Agentic AI Unternehmen verändert"
          : "The silent disruption: how agentic AI is reshaping organisations"}
      </h2>
      <p style={{ ...LABEL, fontWeight: 500, color: C.dim, margin: "0 0 32px" }}>
        InVentures Advisory — {isDE ? "März 2026" : "March 2026"}
      </p>

      <Body>
        {isDE
          ? "Noch vor 18 Monaten galt ein Mitarbeiter mit LLM-Know-how als seltene Ressource. Unternehmen zahlten Prämien für Prompt Engineers, Data Scientists und KI-Strategen. Heute beginnt diese Logik zu kollabieren — nicht weil KI schlechter geworden ist, sondern weil sie besser geworden ist: fundamental, strukturell, irreversibel besser."
          : "Eighteen months ago, an employee with LLM knowledge was a rare commodity. Companies paid premiums for prompt engineers, data scientists and AI strategists. Today that logic is beginning to collapse — not because AI has gotten worse, but because it has gotten better: fundamentally, structurally, irreversibly better."}
      </Body>

      <H3 color={C.silver}>{isDE ? "Vom Werkzeug zum Kollegen — zum Vorstand" : "From Tool to Colleague — to Board Member"}</H3>

      <Body>
        {isDE
          ? "Die erste Welle der KI-Adoption — Copiloten, Chatbots, Zusammenfassungen — hat Routineaufgaben beschleunigt. Die zweite Welle, Agentic AI, ist qualitativ anders: Systeme, die eigenständig planen, ausführen, rückmelden und iterieren. McKinsey schätzte 2023, dass generative KI zusammen mit anderen Technologien theoretisch Tätigkeiten automatisieren könnte, die 60–70 % der heutigen Arbeitszeit beanspruchen. Das ist ein theoretisches Potenzial, keine gemessene Leistung heutiger KI-Agenten; wie viel davon realisiert wird, hängt von Prozessen, Daten und Wirtschaftlichkeit ab. Nach unserer Einschätzung verkürzen Agentic-AI-Systeme heute vor allem die Entwurfsphase – bei Analysen, Verträgen und Konzepten. Die fachliche Prüfung bleibt beim Menschen."
          : "The first wave of AI adoption — copilots, chatbots, summaries — accelerated routine tasks. The second wave, Agentic AI, is qualitatively different: systems that independently plan, execute, report and iterate. McKinsey estimated in 2023 that generative AI, together with other technologies, could in theory automate activities that absorb 60–70% of employees' working time today. That is a theoretical potential, not a measure of what today's AI agents deliver; how much of it is realised depends on processes, data and economics. In our assessment, agentic AI systems today mainly shorten the drafting stage — for analyses, contracts and concepts. Expert review stays with people."}
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
          ? "Börsennotierte Konzerne haben Boards, Investoren und Analysten, die auf AI-Readiness drängen. Kleine und mittlere private Unternehmen haben diesen externen Druck nicht. Laut Statistik Austria nutzten 2025 rund 30 % der österreichischen Unternehmen mit mindestens 10 Beschäftigten künstliche Intelligenz – 2023 waren es 10,8 %. Das ist mehr als der EU-Schnitt, aber weiterhin eine Minderheit. Frühe Anwender, insbesondere im Rechts-, Finanz- und Beratungssektor, berichten von deutlichen Effizienzgewinnen. Nach unserer Einschätzung können daraus binnen 12 bis 24 Monaten Vorsprünge entstehen, die schwer aufzuholen sind."
          : "Listed corporations have boards, investors and analysts pushing AI readiness. Small and mid-sized private companies lack this external pressure. According to Statistik Austria, around 30% of Austrian companies with 10 or more employees used artificial intelligence in 2025, up from 10.8% in 2023 — above the EU average, but still a minority. Early adopters, particularly in legal, finance and consulting, report clear efficiency gains. In our assessment, these can turn into leads that are hard to close within 12 to 24 months."}
      </Body>

      <Body>
        {isDE
          ? "Konkret: Im Rechtsbereich unterstützt Harvey – ursprünglich auf GPT-4 aufgebaut und bei Allen & Overy sowie weiteren Magic-Circle-Kanzleien im Einsatz – Anwältinnen und Anwälte bei Vertragsanalyse, Due Diligence und Regulatorik; jedes Ergebnis wird dort anwaltlich geprüft. Klarna berichtete im Februar 2024, dass sein KI-Assistent im Kundenservice ein Arbeitsvolumen entsprechend 700 Vollzeitkräften erledigt, und verband das öffentlich mit besseren Renditen für Investoren. Das sind keine Ausnahmen – das sind frühe Signale dafür, wie stark KI Arbeitsweisen bereits verändert."
          : "Concretely: in legal, Harvey — originally built on GPT-4 and used at Allen & Overy and other Magic Circle firms — supports lawyers in contract analysis, due diligence and regulatory work; every output is reviewed by a lawyer. In February 2024 Klarna reported that its AI assistant handled a customer-service workload equivalent to 700 full-time agents, and publicly linked this to better returns for investors. These are not exceptions — they are early signals of how deeply AI is already changing the way work gets done."}
      </Body>

      <H3 color={C.silver}>{isDE ? "Das Extremszenario: Geklonte Vorstände" : "The Extreme Scenario: Cloned Boards"}</H3>

      <Body>
        {isDE
          ? "Was noch vor zwei Jahren nach Science Fiction klang, wird akademisch ernsthaft diskutiert: Digital Twins von Führungskräften — trainiert auf deren Entscheidungshistorie, Kommunikation und strategischen Präferenzen — als 'Decision Prediction Engines'. Unternehmen wie Synthesia und D-ID ermöglichen bereits überzeugende Video-Avatare von Executives. Der nächste Schritt: Entscheidungsmodelle. Die Forschung zu KI-gestützten Managemententscheidungen zeigt bisher ein gemischtes Bild: Bei klar strukturierten Aufgaben entscheiden Sprachmodelle konsistenter als Menschen, bei mehrdeutigen Entscheidungen zeigen sie ähnliche Verzerrungen. Der eigentliche Vorteil liegt nach unserer Einschätzung in der Unabhängigkeit von Tagesform und Müdigkeit – nicht in Objektivität an sich."
          : "What sounded like science fiction two years ago is now seriously discussed in academia: digital twins of executives — trained on their decision history, communication and strategic preferences — as 'decision prediction engines'. Companies like Synthesia and D-ID already enable convincing video avatars of executives. The next step: decision models. Research on AI-supported management decisions paints a mixed picture so far: on clearly structured tasks, language models decide more consistently than people; in ambiguous decisions, they show similar biases. In our assessment, the real advantage is independence from mood and fatigue — not objectivity as such."}
      </Body>

      <PullQuote
        color={C.silver}
        text={isDE
          ? "Die Frage ist nicht, ob KI Entscheidungen trifft. Die Frage ist, wessen Werte dabei codiert sind."
          : "The question is not whether AI makes decisions. The question is whose values are encoded in it."}
      />

      <H3 color={C.silver}>{isDE ? "Was jetzt zu tun ist" : "What To Do Now"}</H3>

      <Body>
        {isDE
          ? "InVentures begleitet Unternehmen bei der strukturierten AI-Readiness-Analyse: welche Prozesse durch KI automatisierbar sind, welche human-in-the-loop bleiben müssen und wo gezielte Adoption echte Marktvorteile schafft. Wir arbeiten nicht mit Hype — wir arbeiten mit Szenarien, Timelines und messbaren Ergebnissen."
          : "InVentures accompanies companies through structured AI readiness analysis: which processes can be automated by AI, which must remain human-in-the-loop, and where targeted adoption creates genuine market advantages. We don't work with hype — we work with scenarios, timelines and measurable outcomes."}
      </Body>

      <div style={{ marginTop: 16 }}>
        <span className="t-small" style={{ color: C.silver }}>
          {isDE
            ? "Quellen: McKinsey Global Institute, The Economic Potential of Generative AI (2023); Statistik Austria, IKT-Einsatz in Unternehmen 2025 (Juni 2026); Digital Austria, KI-Monitor (2024); Allen & Overy, Ankündigung der Partnerschaft mit Harvey (2023); Klarna, Pressemitteilung zum KI-Assistenten (Februar 2024); Chen et al., A Manager and an AI Walk into a Bar, Manufacturing & Service Operations Management (2025). Aussagen „nach unserer Einschätzung“ sind Bewertungen von InVentures."
            : "Sources: McKinsey Global Institute, The Economic Potential of Generative AI (2023); Statistik Austria, ICT usage in enterprises 2025 (June 2026); Digital Austria, KI-Monitor (2024); Allen & Overy, announcement of the Harvey partnership (2023); Klarna, press release on its AI assistant (February 2024); Chen et al., A Manager and an AI Walk into a Bar, Manufacturing & Service Operations Management (2025). Statements marked \"in our assessment\" are InVentures' own views."}
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
        <img src="/images/opt/article-re-hotel-1400.webp" loading="lazy" decoding="async" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 60%)" }} />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
        <div style={{ width: 24, height: 1, background: C.gold }} />
        <span style={{ ...LABEL, color: C.gold }}>
          InVentures View · {isDE ? "März 2026, aktualisiert September 2026" : "March 2026, updated September 2026"}
        </span>
      </div>

      <h2 className="t-stat" style={{ color: C.dark, lineHeight: 1.2, margin: "0 0 12px", maxWidth: 720 }}>
        {isDE
          ? "Nach der Korrektur: Wo der europäische Immobilienmarkt jetzt Chancen bietet – und warum Hotelbetreiber unter Kostendruck stehen"
          : "After the correction: where Europe's real estate market offers opportunities now — and why hotel operators are under cost pressure"}
      </h2>
      <p style={{ ...LABEL, fontWeight: 500, color: C.dim, margin: "0 0 32px" }}>
        InVentures Advisory — {isDE ? "März 2026" : "March 2026"}
      </p>

      <Body>
        {isDE
          ? "Zwischen 2022 und 2024 hat der europäische Immobilienmarkt eine der schärfsten Bewertungskorrekturen der Nachkriegszeit durchlaufen. Steigende Zinsen, Finanzierungsengpässe und ein Nachfragerückgang haben die Preise spürbar gedrückt: Der europäische Gewerbeimmobilien-Preisindex von Green Street lag 2024 rund 25 % unter seinem Höchststand von 2022, Büros traf es am stärksten; deutsche Gewerbeimmobilien verloren laut VDP-Index rund 17 %. Was als Schmerz begann, ist heute für kapitalkräftige Käufer eine strukturelle Chance: Die Korrektur ist weitgehend abgeschlossen, Renditen fallen wieder, und internationales Kapital kehrt zurück."
          : "Between 2022 and 2024, the European real estate market underwent one of the sharpest valuation corrections since the post-war period. Rising interest rates, financing constraints and falling demand pushed prices down sharply: Green Street's pan-European commercial property price index stood around 25% below its 2022 peak in 2024, with offices hit hardest; German commercial property lost roughly 17%, according to the VDP index. What began as pain is today a structural opportunity for well-capitalised buyers: the correction is largely complete, yields are falling again, and international capital is returning."}
      </Body>

      <H3 color={C.gold}>{isDE ? "Wohnimmobilien: Die Nachfrage übersteigt das Angebot weiter" : "Residential: demand continues to outstrip supply"}</H3>

      <Body>
        {isDE
          ? "Wien, München, Hamburg und Zürich eint ein gemeinsames Problem: Fertigstellungen sinken seit 2022 auf historische Tiefststände, während Haushaltsbildung und Migration weiter ansteigen. Für Wien erwartet CBRE 2026 Spitzenmieten auf Rekordniveau von 20,30 € pro Quadratmeter. EHL Immobilien beziffert die Wiener Fertigstellungen 2025 auf 9.688 Einheiten – erstmals seit rund zehn Jahren unter 10.000 und 32 % weniger als 2023; für 2026 rechnet EHL mit einem weiteren Rückgang auf rund 8.630 Einheiten. Für Investoren heißt das aus unserer Sicht: Bestandsimmobilien mit Repositionierungspotenzial können risikoadjustierte Renditen bieten, die Neubauprojekte kaum erreichen – wenn Lage, Zustand und Einstiegspreis stimmen."
          : "Vienna, Munich, Hamburg and Zurich share a common problem: completions have fallen to historic lows since 2022 while household formation and migration continue to rise. For Vienna, CBRE expects prime rents to reach a record €20.30 per square metre in 2026. EHL Immobilien puts 2025 completions in Vienna at 9,688 units — the first figure below 10,000 in around a decade and 32% fewer than in 2023 — and expects a further fall to around 8,630 units in 2026. In our view, existing stock with repositioning potential can therefore offer risk-adjusted returns that new-build projects will struggle to match — provided location, condition and entry price are right."}
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
          ? "Im Bürosektor findet eine beschleunigte Qualitätsspaltung statt: Top-Flächen in Wiens Innenstadtlagen erzielen Spitzenmieten von bis zu rund 29,50 €/m² (EHL, Frühjahr 2026), während B-Lagen zunehmend strukturellen Leerstand aufbauen. Unsere These für Investoren: Vor allem Kernlagen mit hoher ESG-Zertifizierung (ÖGNI/BREEAM) rechtfertigen derzeit eine Investition – dort kann ein Mietaufschlag zur Rendite beitragen. Logistik bleibt eine der widerstandsfähigsten Asset-Klassen: Für 2026 erwartet CBRE eine Konsolidierung bei stabilen bis leicht steigenden Mieten in den Regionen Wien, Linz und Graz."
          : "In the office sector an accelerated quality split is underway: prime space in Vienna's inner-city locations achieves top rents of up to around €29.50/m² (EHL, spring 2026), while B-locations are increasingly building structural vacancy. Our thesis for investors: above all, core locations with high ESG certification (ÖGNI/BREEAM) justify investment at present — there, a rent premium can contribute to returns. Logistics remains one of the most resilient asset classes: for 2026, CBRE expects consolidation with stable to slightly rising rents in the Vienna, Linz and Graz regions."}
      </Body>

      <H3 color={C.gold}>{isDE ? "Hotels: Kostendruck hinter den Rekordzahlen" : "Hotels: cost pressure behind the record numbers"}</H3>

      <Body>
        {isDE
          ? "Der österreichische Tourismus verzeichnete 2025 mit rund 157 Millionen Nächtigungen einen neuen Höchstwert – und dennoch gerät die Profitabilität vieler Hotelbetriebe unter Druck. Die Schere zwischen steigenden Betriebskosten und stagnierenden Zimmerpreisen öffnet sich in einem Tempo, das viele Betreiber überfordert. Pachten für Hotelimmobilien sind in den vergangenen Jahren gestiegen und belasten die Kostenseite der Betreiber zusätzlich. Gleichzeitig können Zimmerpreise in Wien und den österreichischen Tourismusregionen nicht unbegrenzt erhöht werden — die Konsumenten reagieren bereits mit Buchungsverschiebungen und verkürzten Aufenthalten."
          : "Austrian tourism reached a new high of around 157 million overnight stays in 2025 — and yet profitability at many hotel operators is coming under pressure. The gap between rising operating costs and stagnating room prices is widening at a rate that is overwhelming many operators. Leases on hotel properties have risen in recent years, adding to operators' costs. Meanwhile room prices in Vienna and Austria's tourism regions cannot be increased without limit — consumers are already responding with booking shifts and shorter stays."}
      </Body>

      <Body>
        {isDE
          ? "CBRE Austria beobachtet sinkende Margen bei Hotelbetreibern, weil Personal- und Betriebskosten schneller steigen als die erzielbaren Zimmerpreise – und bezeichnet das Segment für Investoren dennoch als attraktiv. Nach unserer Einschätzung kann dieser Kostendruck bei einzelnen Betrieben mit auslaufenden Finanzierungen und ohne Preissetzungsmacht in den kommenden Jahren zu Distressed-Asset-Situationen führen."
          : "CBRE Austria observes shrinking margins at hotel operators, as staff and operating costs rise faster than achievable room rates — while still describing the segment as attractive for investors. In our assessment, this cost pressure may lead to distressed-asset situations over the coming years for operators with maturing financing and limited pricing power."}
      </Body>

      <PullQuote
        color={C.gold}
        text={isDE
          ? "Rekordauslastung allein sichert keine Profitabilität. Sinkende Margen können Restrukturierungen erforderlich machen."
          : "Record occupancy alone does not secure profitability. Shrinking margins can make restructuring necessary."}
      />

      <H3 color={C.gold}>{isDE ? "Wie InVentures positioniert ist" : "How InVentures is positioned"}</H3>

      <Body>
        {isDE
          ? "Wir beobachten den Hotelmarkt mit unserem Netzwerk aus Betreibern, Finanzierern und institutionellen Eigentümern sehr genau — mit dem Ziel, unsere Kunden optimal auf selektive Akquisitionen und Expansionen vorzubereiten. Gleichzeitig begleiten wir Investoren bei der Identifikation und Strukturierung von Wohn- und Gewerbeimmobilien, die von der Post-Korrektur-Dynamik profitieren. Unser Ansatz: nicht Timing, sondern Qualität — die richtigen Assets in den richtigen Lagen mit der richtigen Kapitalstruktur."
          : "We monitor the hotel market closely through our network of operators, financiers and institutional owners — with the explicit goal of positioning our clients optimally for selective acquisitions and expansions. Simultaneously we accompany investors in identifying and structuring residential and commercial real estate assets that benefit from post-correction dynamics. Our approach: not timing, but quality — the right assets in the right locations with the right capital structure."}
      </Body>

      <div style={{ marginTop: 16 }}>
        <span className="t-small" style={{ color: C.dim }}>
          {isDE
            ? "Quellen: CBRE Austria, Immobilienwirtschaft 2026 (Jänner 2026) sowie Logistikmarktbericht 2025; EHL Immobilien, Wiener Wohnungsmarkt – Rückblick 2025 & Ausblick 2026 (Jänner 2026) und Büromarktbericht Frühjahr 2026; Statistik Austria, Ankünfte und Nächtigungen 2025 (Jänner 2026); Green Street, Pan-European Commercial Property Price Index (2024); VDP-Immobilienpreisindex (2024). Aussagen „nach unserer Einschätzung“ und „unsere These“ sind Bewertungen von InVentures."
            : "Sources: CBRE Austria, Real Estate Outlook 2026 (January 2026) and Logistics Market Report 2025; EHL Immobilien, Vienna Housing Market Review 2025 & Outlook 2026 (January 2026) and Office Market Report Spring 2026; Statistik Austria, arrivals and overnight stays 2025 (January 2026); Green Street, Pan-European Commercial Property Price Index (2024); VDP property price index (2024). Statements marked \"in our view\", \"in our assessment\" or \"our thesis\" are InVentures' own views."}
        </span>
      </div>
    </div>
  );
}

// ── MAIN COMPONENT (copy of src/TrackArticle.jsx for /new: site type scale, CI colours, optimised images) ──
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
            style={{ fontFamily: F, fontSize: T.sm, color: accentColor, textDecoration: "none", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 8, border: `1px solid ${accentColor}`, padding: "12px 24px", borderRadius: 999, transition: "all 0.2s" }}
          >
            {lang === "de" ? "Gespräch anfragen" : "Request a Conversation"} →
          </a>
          <span className="t-small" style={{ color: C.dim }}>
            {lang === "de" ? "Oder schreiben Sie uns direkt:" : "Or write to us:"} info@inventures.at
          </span>
        </div>
      </div>
    </section>
  );
}
