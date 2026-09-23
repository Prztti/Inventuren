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
        <span style={{ ...LABEL, color: C.silver }}>InVentures View · September 2026</span>
      </div>

      <h2 className="t-stat" style={{ color: C.dark, lineHeight: 1.2, margin: "0 0 12px", maxWidth: 720 }}>
        {isDE
          ? "Die stille Disruption: Agentic AI ist im Einsatz – die Aufsicht hinkt nach"
          : "The silent disruption: agentic AI is in use — oversight is lagging behind"}
      </h2>
      <p style={{ ...LABEL, fontWeight: 500, color: C.dim, margin: "0 0 32px" }}>
        InVentures Advisory — September 2026
      </p>

      <Body>
        {isDE
          ? "Vor zweieinhalb Jahren galt LLM-Know-how als seltene Ressource; Unternehmen zahlten Prämien für Prompt Engineers und KI-Strategen. Im Herbst 2026 stellt sich eine andere Frage: nicht mehr, ob KI eingesetzt wird, sondern wer die Kontrolle behält, wenn Systeme eigenständig planen und handeln."
          : "Two and a half years ago, LLM know-how was a rare commodity; companies paid premiums for prompt engineers and AI strategists. In autumn 2026 the question has changed: no longer whether AI is used, but who stays in control when systems plan and act on their own."}
      </Body>

      <H3 color={C.silver}>{isDE ? "Vom Werkzeug zum Kollegen – zum Vorstand" : "From tool to colleague — to board member"}</H3>

      <Body>
        {isDE
          ? "Die erste Welle der KI-Adoption – Copiloten, Chatbots, Zusammenfassungen – hat Routineaufgaben beschleunigt. Die zweite Welle, Agentic AI, ist qualitativ anders: Systeme, die eigenständig planen, ausführen, rückmelden und iterieren. Laut dem Global AI Pulse von KPMG (März 2026, 2.110 Führungskräfte) setzen 32 % der Unternehmen KI-Agenten bereits ein und skalieren sie, weitere 27 % steuern mehrere Agenten im Verbund; 74 % wollen KI selbst in einer Rezession als Investitionspriorität halten. McKinsey sieht das theoretische Potenzial, Tätigkeiten zu automatisieren, die 60–70 % der Arbeitszeit beanspruchen – ein Potenzial, keine gemessene Leistung. Nach unserer Einschätzung verkürzen Agenten heute vor allem die Entwurfsphase; die fachliche Prüfung bleibt beim Menschen."
          : "The first wave of AI adoption — copilots, chatbots, summaries — accelerated routine tasks. The second wave, agentic AI, is qualitatively different: systems that independently plan, execute, report and iterate. According to KPMG's Global AI Pulse (March 2026, 2,110 executives), 32% of companies are already deploying and scaling AI agents and a further 27% orchestrate multiple agents; 74% intend to keep AI a top investment priority even in a recession. McKinsey sees the theoretical potential to automate activities that absorb 60–70% of working time — a potential, not a measured result. In our assessment, agents today mainly shorten the drafting stage; expert review stays with people."}
      </Body>

      <PullQuote
        color={C.silver}
        text={isDE
          ? "Wer heute glaubt, KI sei ein Produktivitätstool, wird morgen feststellen, dass KI sein Unternehmen ist."
          : "Those who today believe AI is a productivity tool will tomorrow discover that AI is their company."}
      />

      <H3 color={C.silver}>{isDE ? "Die Governance-Lücke" : "The governance gap"}</H3>

      <Body>
        {isDE
          ? "Mit dem Tempo wächst das Risiko. In einer EY-Befragung vom September 2026 unter 202 KI-Verantwortlichen börsennotierter US-Unternehmen mit mehr als einer Milliarde Dollar Umsatz haben 98 % formale AI-Governance-Richtlinien – doch 47 % räumen ein, sie bei dringenden Einführungen schon umgangen zu haben. Laut IBM Cost of a Data Breach Report 2026 war jeder vierte böswillige Datenvorfall KI-gestützt, 56 % mehr als im Vorjahr; solche Vorfälle kosteten im Schnitt 6 Mio. US-Dollar, rund eine Million mehr als der weltweite Durchschnitt. Mehr als 20 % der Unternehmen meldeten Angriffe auf ihre KI-Modelle oder -Anwendungen selbst. Unsere Folgerung: Richtlinien auf Papier reichen nicht. Freigaben, Protokollierung und Zugriffsrechte gehören in die Architektur."
          : "Risk grows with speed. In an EY survey from September 2026 of 202 senior AI decision-makers at US-listed companies with more than a billion dollars in revenue, 98% have formal AI governance policies — yet 47% admit to having bypassed them for urgent deployments. According to IBM's Cost of a Data Breach Report 2026, one in four malicious breaches was AI-enabled, up 56% on the previous year; such breaches cost USD 6 million on average, around a million more than the global average. More than 20% of organisations reported attacks on their AI models or applications themselves. Our conclusion: policies on paper are not enough. Approvals, logging and access rights belong in the architecture."}
      </Body>

      <H3 color={C.silver}>{isDE ? "Was seit 2. August 2026 gilt" : "What applies since 2 August 2026"}</H3>

      <Body>
        {isDE
          ? "Seit 2. August 2026 setzen das AI Office der Europäischen Kommission und die nationalen Behörden den AI Act durch. Chatbots müssen offenlegen, dass Nutzer mit einer KI sprechen; Deepfakes sind zu kennzeichnen, KI-generierte Inhalte maschinenlesbar zu markieren. Für Hochrisiko-Anwendungen – etwa in Bildung, Beschäftigung, kritischer Infrastruktur, Strafverfolgung und Grenzmanagement – gelten die Pflichten nach der im Mai 2026 vereinbarten Vereinfachung ab 2. Dezember 2027, für Sicherheitskomponenten ab 2. August 2028. Im Gesundheitswesen ist KI längst Alltag: Laut WHO/Europe nutzen 74 % der EU-Mitgliedstaaten KI in der Diagnostik. Wer heute in Gesundheit, Bildung oder Verwaltung baut, gewinnt Zeit – aber keinen Aufschub für eine saubere Architektur."
          : "Since 2 August 2026, the European Commission's AI Office and national authorities have been enforcing the AI Act. Chatbots must disclose that users are talking to an AI; deepfakes must be labelled and AI-generated content marked in machine-readable form. For high-risk uses — including education, employment, critical infrastructure, law enforcement and border management — the obligations apply from 2 December 2027 under the simplification agreed in May 2026, and from 2 August 2028 for safety components. In health care, AI is already routine: according to WHO/Europe, 74% of EU Member States use AI in diagnostics. Anyone building in health, education or public administration today gains time — but no reprieve from a clean architecture."}
      </Body>

      <H3 color={C.silver}>{isDE ? "Der blinde Fleck: kleine und mittlere Unternehmen" : "The blind spot: small and mid-sized companies"}</H3>

      <Body>
        {isDE
          ? "Börsennotierte Konzerne haben Boards, Investoren und Analysten, die auf AI-Readiness drängen. Kleine und mittlere private Unternehmen haben diesen externen Druck nicht. Laut Statistik Austria nutzten 2025 rund 30 % der österreichischen Unternehmen mit mindestens 10 Beschäftigten künstliche Intelligenz – 2023 waren es 10,8 %. Das ist mehr als der EU-Schnitt, aber weiterhin eine Minderheit. Wie schnell sich Arbeitsweisen ändern, zeigen frühe Beispiele: Harvey unterstützt Anwältinnen und Anwälte bei Allen & Overy und weiteren Magic-Circle-Kanzleien bei Vertragsanalyse und Due Diligence, jedes Ergebnis wird anwaltlich geprüft; Klarna meldete schon im Februar 2024, dass sein KI-Assistent im Kundenservice ein Arbeitsvolumen entsprechend 700 Vollzeitkräften erledigt. Nach unserer Einschätzung entstehen daraus binnen 12 bis 24 Monaten Vorsprünge, die schwer aufzuholen sind."
          : "Listed corporations have boards, investors and analysts pushing AI readiness. Small and mid-sized private companies lack this external pressure. According to Statistik Austria, around 30% of Austrian companies with 10 or more employees used artificial intelligence in 2025, up from 10.8% in 2023 — above the EU average, but still a minority. Early examples show how fast ways of working change: Harvey supports lawyers at Allen & Overy and other Magic Circle firms in contract analysis and due diligence, with every output reviewed by a lawyer; as early as February 2024 Klarna reported that its AI assistant handled a customer-service workload equivalent to 700 full-time agents. In our assessment, this creates leads within 12 to 24 months that are hard to close."}
      </Body>

      <H3 color={C.silver}>{isDE ? "Das Extremszenario: Geklonte Vorstände" : "The extreme scenario: cloned boards"}</H3>

      <Body>
        {isDE
          ? "Digital Twins von Führungskräften – trainiert auf Entscheidungshistorie, Kommunikation und strategische Präferenzen – werden als „Decision Prediction Engines“ ernsthaft diskutiert; Anbieter wie Synthesia und D-ID ermöglichen bereits überzeugende Video-Avatare von Executives. Die Forschung zu KI-gestützten Managemententscheidungen zeigt ein gemischtes Bild: Bei klar strukturierten Aufgaben entscheiden Sprachmodelle konsistenter als Menschen, bei mehrdeutigen zeigen sie ähnliche Verzerrungen. Der eigentliche Vorteil liegt nach unserer Einschätzung in der Unabhängigkeit von Tagesform und Müdigkeit – nicht in Objektivität an sich."
          : "Digital twins of executives — trained on their decision history, communication and strategic preferences — are seriously discussed as \"decision prediction engines\"; providers such as Synthesia and D-ID already enable convincing video avatars of executives. Research on AI-supported management decisions paints a mixed picture: on clearly structured tasks, language models decide more consistently than people; in ambiguous ones, they show similar biases. In our assessment, the real advantage is independence from mood and fatigue — not objectivity as such."}
      </Body>

      <PullQuote
        color={C.silver}
        text={isDE
          ? "Die Frage ist nicht, ob KI Entscheidungen trifft. Die Frage ist, wessen Werte dabei codiert sind."
          : "The question is not whether AI makes decisions. The question is whose values are encoded in it."}
      />

      <H3 color={C.silver}>{isDE ? "Was jetzt zu tun ist" : "What to do now"}</H3>

      <Body>
        {isDE
          ? "InVentures begleitet Unternehmen bei der strukturierten AI-Readiness-Analyse: welche Prozesse durch KI automatisierbar sind, welche human-in-the-loop bleiben müssen und wo gezielte Adoption echte Marktvorteile schafft. Dazu gehört jetzt die Einordnung nach dem AI Act – bevor die Hochrisiko-Pflichten Ende 2027 greifen – und eine Architektur, in der Freigaben, Protokollierung und Datenschutz von Beginn an mitgebaut sind. Unsere Schule dafür ist das Telekommunikationsrecht, das seit Jahren strenger ist als die DSGVO allein. Wir arbeiten nicht mit Hype – wir arbeiten mit Szenarien, Timelines und messbaren Ergebnissen."
          : "InVentures accompanies companies through structured AI readiness analysis: which processes can be automated by AI, which must remain human-in-the-loop, and where targeted adoption creates genuine market advantages. This now includes classification under the AI Act — before the high-risk obligations apply at the end of 2027 — and an architecture with approvals, logging and data protection built in from the start. Our school for this is telecommunications law, which has been stricter than the GDPR alone for years. We don't work with hype — we work with scenarios, timelines and measurable outcomes."}
      </Body>

      <div style={{ marginTop: 16 }}>
        <span className="t-small" style={{ color: C.silver }}>
          {isDE
            ? "Quellen: KPMG, Global AI Pulse Survey (März 2026); EY, Umfrage zur AI-Governance (September 2026); IBM, Cost of a Data Breach Report 2026 (Juli 2026); Europäische Kommission, Durchsetzung des AI Act ab 2. August 2026 (Juli 2026); Europäisches Parlament, Einigung zur Vereinfachung des AI Act (Mai 2026); WHO/Europe, KI im Gesundheitswesen der EU-Mitgliedstaaten (April 2026); Statistik Austria, IKT-Einsatz in Unternehmen 2025 (Juni 2026); McKinsey Global Institute, The Economic Potential of Generative AI (2023); Allen & Overy, Partnerschaft mit Harvey (2023); Klarna, Pressemitteilung zum KI-Assistenten (Februar 2024); Chen et al., A Manager and an AI Walk into a Bar, Manufacturing & Service Operations Management (2025). Aussagen „nach unserer Einschätzung“ sind Bewertungen von InVentures."
            : "Sources: KPMG, Global AI Pulse Survey (March 2026); EY, AI governance survey (September 2026); IBM, Cost of a Data Breach Report 2026 (July 2026); European Commission, AI Act enforcement from 2 August 2026 (July 2026); European Parliament, agreement on simplifying the AI Act (May 2026); WHO/Europe, AI in health care across EU Member States (April 2026); Statistik Austria, ICT usage in enterprises 2025 (June 2026); McKinsey Global Institute, The Economic Potential of Generative AI (2023); Allen & Overy, Harvey partnership (2023); Klarna, press release on its AI assistant (February 2024); Chen et al., A Manager and an AI Walk into a Bar, Manufacturing & Service Operations Management (2025). Statements marked \"in our assessment\" are InVentures' own views."}
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
        <span style={{ ...LABEL, color: C.gold }}>InVentures View · September 2026</span>
      </div>

      <h2 className="t-stat" style={{ color: C.dark, lineHeight: 1.2, margin: "0 0 12px", maxWidth: 720 }}>
        {isDE
          ? "Nach der Korrektur: Wo der Immobilienmarkt trotz steigender Zinsen Chancen bietet"
          : "After the correction: where real estate still offers opportunities as rates rise again"}
      </h2>
      <p style={{ ...LABEL, fontWeight: 500, color: C.dim, margin: "0 0 32px" }}>
        InVentures Advisory — September 2026
      </p>

      <Body>
        {isDE
          ? "Zwischen 2022 und 2024 hat der europäische Immobilienmarkt eine der schärfsten Bewertungskorrekturen der Nachkriegszeit durchlaufen: Der europäische Gewerbeimmobilien-Preisindex von Green Street lag 2024 rund 25 % unter seinem Höchststand von 2022, deutsche Gewerbeimmobilien verloren laut VDP-Index rund 17 %. Seither kehrt das Kapital zurück. CBRE zählte im zweiten Quartal 2026 europaweit 59,1 Mrd. € Investitionen, 10 % mehr als im Vorjahr; Wohnen ist seit drei Quartalen das aktivste Segment. In EMEA flossen laut JLL 17,4 Mrd. € in Wohnimmobilien – das höchste Quartalsvolumen seit 2022."
          : "Between 2022 and 2024, the European real estate market went through one of the sharpest valuation corrections since the post-war period: Green Street's pan-European commercial property price index stood around 25% below its 2022 peak in 2024, and German commercial property lost roughly 17% according to the VDP index. Since then, capital has been returning. CBRE counted €59.1bn of European investment in the second quarter of 2026, 10% more than a year earlier; living has been the most active sector for three quarters. According to JLL, €17.4bn went into EMEA living assets — the highest quarterly volume since 2022."}
      </Body>

      <Body>
        {isDE
          ? "Doch die Finanzierung wird wieder teurer. Die EZB hat am 10. September 2026 die Leitzinsen um 0,25 Prozentpunkte angehoben; die Inflation dürfte wegen hoher Energiepreise noch länger über 2 % liegen und erst gegen Ende 2027 zum Ziel zurückkehren. Gleichzeitig beobachtet die OeNB die Banken genau: Gewerbeimmobilien machen 43 % der Unternehmenskredite österreichischer Banken aus, die Quote notleidender Kredite in diesem Segment stieg auf 8,3 %. Nach unserer Einschätzung bleibt das Einstiegsfenster offen – aber vor allem für Käufer mit starker Eigenkapitalbasis und einer Finanzierung, die auch höhere Zinsen trägt."
          : "Financing, however, is becoming more expensive again. On 10 September 2026 the ECB raised its key interest rates by 0.25 percentage points; because of high energy prices, inflation is expected to stay above 2% for some time and to return to target only towards the end of 2027. At the same time, the Austrian National Bank is watching lenders closely: commercial real estate accounts for 43% of Austrian banks' corporate loans, and the share of non-performing loans in this segment has risen to 8.3%. In our assessment, the entry window remains open — but mainly for buyers with a strong equity base and financing that can carry higher rates."}
      </Body>

      <H3 color={C.gold}>{isDE ? "Wohnimmobilien: Die Nachfrage übersteigt das Angebot weiter" : "Residential: demand continues to outstrip supply"}</H3>

      <Body>
        {isDE
          ? "In Wien schrumpft das Neubauvolumen deutlich. EHL Immobilien beziffert die Fertigstellungen 2025 auf 9.688 Einheiten – erstmals seit rund zehn Jahren unter 10.000 und 32 % weniger als 2023; 2026 werden nur noch rund 60 % des Niveaus von 2023 erreicht. EHL erwartet für 2026 Mietsteigerungen von durchschnittlich sieben bis acht Prozent, CBRE Spitzenmieten auf Rekordniveau von 20,30 € pro Quadratmeter. Für Investoren heißt das aus unserer Sicht: Bestandsimmobilien mit Repositionierungspotenzial können risikoadjustierte Renditen bieten, die Neubauprojekte kaum erreichen – wenn Lage, Zustand und Einstiegspreis stimmen."
          : "In Vienna, new-build volumes are shrinking markedly. EHL Immobilien puts 2025 completions at 9,688 units — the first figure below 10,000 in around a decade and 32% fewer than in 2023; in 2026 completions will reach only around 60% of the 2023 level. EHL expects average rent increases of seven to eight percent in 2026, and CBRE expects prime rents to hit a record €20.30 per square metre. In our view, existing stock with repositioning potential can therefore offer risk-adjusted returns that new-build projects will struggle to match — provided location, condition and entry price are right."}
      </Body>

      <PullQuote
        color={C.gold}
        text={isDE
          ? "Die Korrektur hat nicht den Bedarf reduziert – sie hat nur das Angebot eingefroren. Das schafft seltene Einstiegsfenster."
          : "The correction did not reduce demand — it only froze supply. That creates rare entry windows."}
      />

      <H3 color={C.gold}>{isDE ? "Büro, Logistik und Energieeffizienz: selektiv" : "Office, logistics and energy efficiency: selective"}</H3>

      <Body>
        {isDE
          ? "Im Wiener Büromarkt liegt der Leerstand laut EHL bei rund 3,8 %, Spitzenmieten erreichen bis zu rund 29,50 €/m² (Frühjahr 2026). Die Qualitätsspaltung setzt sich fort: Gefragt sind moderne, gut angebundene Flächen, B-Lagen bauen zunehmend strukturellen Leerstand auf. Dazu kommt Regulierung: Weil keiner der Mitgliedstaaten die neugefasste EU-Gebäuderichtlinie bis 29. Mai 2026 vollständig umgesetzt hat, leitete die EU-Kommission im Juli 2026 Vertragsverletzungsverfahren gegen alle 27 ein. Unsere These: Energieeffizienz und ESG-Qualität werden vom Imagefaktor zur Finanzierungs- und Wertfrage – dort kann ein Mietaufschlag zur Rendite beitragen. Logistik bleibt eine der widerstandsfähigsten Asset-Klassen; CBRE erwartet für 2026 eine Konsolidierung bei stabilen bis leicht steigenden Mieten in den Regionen Wien, Linz und Graz."
          : "In Vienna's office market, vacancy is around 3.8% according to EHL, with prime rents of up to around €29.50/m² (spring 2026). The quality split continues: modern, well-connected space is in demand, while B-locations are increasingly building structural vacancy. Regulation adds to this: because no Member State had fully transposed the recast EU buildings directive by 29 May 2026, the European Commission opened infringement procedures against all 27 in July 2026. Our thesis: energy efficiency and ESG quality are turning from an image factor into a question of financing and value — there, a rent premium can contribute to returns. Logistics remains one of the most resilient asset classes; for 2026, CBRE expects consolidation with stable to slightly rising rents in the Vienna, Linz and Graz regions."}
      </Body>

      <H3 color={C.gold}>{isDE ? "Hotels: Kostendruck hinter den Rekordzahlen" : "Hotels: cost pressure behind the record numbers"}</H3>

      <Body>
        {isDE
          ? "Der österreichische Tourismus verzeichnete 2025 mit rund 157 Millionen Nächtigungen einen neuen Höchstwert, und Investoren kehren in den Sektor zurück: Laut Cushman & Wakefield überstieg das europäische Hoteltransaktionsvolumen 2025 27 Mrd. € – das stärkste Jahr seit 2019. In der European Hotel Investor Intentions Survey 2026 von CBRE wollen über 90 % der Investoren ihre Hotelallokation halten oder erhöhen. Auf Betreiberseite sieht es anders aus: CBRE Austria beobachtet sinkende Margen, weil Personal- und Betriebskosten schneller steigen als die erzielbaren Zimmerpreise. Nach unserer Einschätzung kann dieser Kostendruck – verstärkt durch wieder steigende Zinsen – bei Betrieben mit auslaufenden Finanzierungen und ohne Preissetzungsmacht zu Distressed-Asset-Situationen führen."
          : "Austrian tourism reached a new high of around 157 million overnight stays in 2025, and investors are returning to the sector: according to Cushman & Wakefield, European hotel transactions exceeded €27bn in 2025 — the strongest year since 2019. In CBRE's European Hotel Investor Intentions Survey 2026, more than 90% of investors plan to hold or increase their hotel allocation. On the operator side, the picture differs: CBRE Austria observes shrinking margins, as staff and operating costs rise faster than achievable room rates. In our assessment, this cost pressure — amplified by rising rates — may lead to distressed-asset situations for operators with maturing financing and limited pricing power."}
      </Body>

      <PullQuote
        color={C.gold}
        text={isDE
          ? "Rekordauslastung allein sichert keine Profitabilität. Sinkende Margen können Restrukturierungen erforderlich machen."
          : "Record occupancy alone does not secure profitability. Shrinking margins can make restructuring necessary."}
      />

      <H3 color={C.gold}>{isDE ? "AI in der Immobilienwirtschaft: vom Pilot in den Betrieb" : "AI in real estate: from pilot to operation"}</H3>

      <Body>
        {isDE
          ? "Laut RICS setzen über drei Viertel der Befragten aus der Gewerbeimmobilienbranche bereits AI ein – die meisten noch im Pilotstadium. Nach unserer Einschätzung liegt der Wert dort, wo Daten, Verträge und Prozesse zusammenkommen: bei Due Diligence, Portfolio-Analyse und Asset Management. Wer diesen Schritt geht, braucht beides – Immobilienerfahrung und eine sichere technische Umsetzung."
          : "According to RICS, more than three quarters of respondents from the commercial property sector already use AI — most of them still at pilot stage. In our assessment, the value lies where data, contracts and processes meet: in due diligence, portfolio analysis and asset management. Taking this step requires both real estate experience and secure technical delivery."}
      </Body>

      <H3 color={C.gold}>{isDE ? "Wie InVentures positioniert ist" : "How InVentures is positioned"}</H3>

      <Body>
        {isDE
          ? "Wir beobachten den Hotelmarkt mit unserem Netzwerk aus Betreibern, Finanzierern und institutionellen Eigentümern genau – mit dem Ziel, unsere Kunden auf selektive Akquisitionen und Expansionen vorzubereiten. Gleichzeitig begleiten wir Investoren bei der Identifikation und Strukturierung von Wohn- und Gewerbeimmobilien, die von der Post-Korrektur-Dynamik profitieren – mit Finanzierungsstrukturen, die auch steigende Zinsen tragen. Unser Ansatz: nicht Timing, sondern Qualität – die richtigen Assets in den richtigen Lagen mit der richtigen Kapitalstruktur."
          : "We monitor the hotel market closely through our network of operators, financiers and institutional owners — to prepare our clients for selective acquisitions and expansions. At the same time, we support investors in identifying and structuring residential and commercial assets that benefit from post-correction dynamics — with financing structures that can carry rising rates. Our approach: not timing, but quality — the right assets in the right locations with the right capital structure."}
      </Body>

      <div style={{ marginTop: 16 }}>
        <span className="t-small" style={{ color: C.dim }}>
          {isDE
            ? "Quellen: CBRE, European Real Estate Investment Figures Q2 2026 (Juli 2026); JLL, EMEA Living Investment Q2 2026 (August 2026); EZB, geldpolitische Beschlüsse vom 10. September 2026; OeNB, Pressemitteilung zur Finanzmarktstabilität (April 2026); EHL Immobilien, Der Wohnungsmarkt Wien 2026 (Februar 2026), Wiener Wohnungsmarkt – Rückblick 2025 & Ausblick 2026 (Jänner 2026) und Büromarktbericht Frühjahr 2026; CBRE Austria, Immobilienwirtschaft 2026 (Jänner 2026) und Logistikmarktbericht 2025; Europäische Kommission, Umsetzung der Gebäuderichtlinie (Juli 2026); Statistik Austria, Ankünfte und Nächtigungen 2025 (Jänner 2026); Cushman & Wakefield, Hotelinvestments in EMEA (März 2026); CBRE, European Hotel Investor Intentions Survey 2026 (Mai 2026); RICS, AI in Commercial Property and Construction Report 2026 (August 2026); Green Street, Pan-European Commercial Property Price Index (2024); VDP-Immobilienpreisindex (2024). Aussagen „nach unserer Einschätzung“ und „unsere These“ sind Bewertungen von InVentures."
            : "Sources: CBRE, European Real Estate Investment Figures Q2 2026 (July 2026); JLL, EMEA living investment Q2 2026 (August 2026); ECB, monetary policy decisions of 10 September 2026; Austrian National Bank, financial stability press release (April 2026); EHL Immobilien, Vienna Housing Market 2026 (February 2026), Vienna Housing Market Review 2025 & Outlook 2026 (January 2026) and Office Market Report Spring 2026; CBRE Austria, Real Estate Outlook 2026 (January 2026) and Logistics Market Report 2025; European Commission, transposition of the buildings directive (July 2026); Statistik Austria, arrivals and overnight stays 2025 (January 2026); Cushman & Wakefield, EMEA hotel investment (March 2026); CBRE, European Hotel Investor Intentions Survey 2026 (May 2026); RICS, AI in Commercial Property and Construction Report 2026 (August 2026); Green Street, Pan-European Commercial Property Price Index (2024); VDP property price index (2024). Statements marked \"in our view\", \"in our assessment\" or \"our thesis\" are InVentures' own views."}
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
