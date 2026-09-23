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
// Source list with links; `groups` = [[heading, [[text, url], …]], …]
function Sources({ groups, note, color }) {
  return (
    <div style={{ marginTop: 40, paddingTop: 24, borderTop: "1px solid #EAE8E4", maxWidth: 720 }}>
      {groups.map(([h, items]) => (
        <div key={h} style={{ marginBottom: 16 }}>
          <div className="t-small" style={{ fontWeight: 600, color, marginBottom: 6 }}>{h}</div>
          <ul style={{ margin: 0, paddingLeft: 18 }}>
            {items.map(([text, url]) => (
              <li key={text} className="t-small" style={{ color: C.dim, marginBottom: 4 }}>
                {url ? <a href={url} target="_blank" rel="noopener noreferrer" className="u-link" style={{ color: C.dim, textDecoration: "none" }}>{text}</a> : text}
              </li>
            ))}
          </ul>
        </div>
      ))}
      {note && <p className="t-small" style={{ color: C.dim, margin: "12px 0 0" }}>{note}</p>}
    </div>
  );
}

const AI_SOURCES = (de) => [
  [de ? "Begutachtete Studien" : "Peer-reviewed studies", [
    ["Brynjolfsson, Li & Raymond (2025): Generative AI at Work. Quarterly Journal of Economics 140(2)", "https://doi.org/10.1093/qje/qjae044"],
    ["Noy & Zhang (2023): Experimental evidence on the productivity effects of generative artificial intelligence. Science 381(6654)", "https://doi.org/10.1126/science.adh2586"],
    ["Dell’Acqua et al. (2026): Navigating the Jagged Technological Frontier. Organization Science", "https://doi.org/10.1287/orsc.2025.21838"],
    ["Cui, Demirer, Jaffe, Musolff, Peng & Salz (2026): The Effects of Generative AI on High-Skilled Work. Management Science", "https://doi.org/10.1287/mnsc.2025.00535"],
    ["Vaccaro, Almaatouq & Malone (2024): When combinations of humans and AI are useful. Nature Human Behaviour 8", "https://doi.org/10.1038/s41562-024-02024-1"],
    ["Brynjolfsson, Rock & Syverson (2021): The Productivity J-Curve. American Economic Journal: Macroeconomics 13(1)", "https://doi.org/10.1257/mac.20180386"],
  ]],
  [de ? "Preprints und Arbeitspapiere" : "Preprints and working papers", [
    ["Kwa et al. (2025): Measuring AI Ability to Complete Long Tasks. METR, Preprint", "https://arxiv.org/abs/2503.14499"],
    ["METR (" + (de ? "Januar" : "January") + " 2026): Time Horizon 1.1", "https://metr.org/blog/2026-1-29-time-horizon-1-1/"],
    ["METR (" + (de ? "Mai" : "May") + " 2026): Frontier Risk Report", "https://metr.org/blog/2026-05-19-frontier-risk-report/"],
    ["Becker, Rush, Barnes & Rein (2025): Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity. Preprint", "https://arxiv.org/abs/2507.09089"],
    ["Yao et al. (2024): τ-bench. Preprint", "https://arxiv.org/abs/2406.12045"],
    ["Xu et al. (2024): TheAgentCompany. Carnegie Mellon University, Preprint", "https://arxiv.org/abs/2412.14161"],
    ["Brynjolfsson, Chandar & Chen (2025, " + (de ? "Fassung August 2026" : "August 2026 version") + "): Canaries in the Coal Mine? Stanford Digital Economy Lab, " + (de ? "Arbeitspapier" : "working paper"), "https://digitaleconomy.stanford.edu/publication/canaries-in-the-coal-mine-six-facts-about-the-recent-employment-effects-of-artificial-intelligence/"],
    ["Humlum & Vestergaard (2025): Large Language Models, Small Labor Market Effects. NBER Working Paper 33777", "https://www.nber.org/papers/w33777"],
  ]],
  [de ? "Berichte, Daten und Prognosen" : "Reports, data and forecasts", [
    ["Epoch AI (September 2026): The Plunging Price of Thought", "https://epoch.ai/publications/the-plunging-price-of-thought"],
    ["a16z & OpenRouter (" + (de ? "Dezember" : "December") + " 2025): State of AI", "https://openrouter.ai/state-of-ai"],
    ["McKinsey (November 2025): The state of AI in 2025", "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai"],
    ["Anthropic (September 2025): Anthropic Economic Index", "https://www.anthropic.com/research/anthropic-economic-index-september-2025-report"],
    ["Gartner (" + (de ? "Juni" : "June") + " 2025): " + (de ? "Prognose zu Agentic-AI-Projekten" : "forecast on agentic AI projects"), "https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027"],
    ["Challapally, Pease, Raskar & Chari (2025): The GenAI Divide: State of AI in Business 2025. " + (de ? "Vorläufiger Bericht" : "Preliminary report"), "https://airnd.center/v0.1_State_of_AI_in_Business_2025_Report.pdf"],
    ["EY (September 2026): " + (de ? "Umfrage zur AI-Governance" : "AI governance survey"), "https://www.ey.com/en_us/newsroom/2026/09/ey-survey-finds-that-autonomous-ai-implementation-outpaces-oversight-yielding-an-ai-governance-gap"],
    ["IBM (" + (de ? "Juli" : "July") + " 2026): Cost of a Data Breach Report 2026", "https://newsroom.ibm.com/2026-07-29-ibm-study-one-in-four-malicious-breaches-are-ai-enabled,-costing-companies-6-million-on-average"],
    ["OWASP (2024): Top 10 for LLM Applications 2025", "https://genai.owasp.org/resource/owasp-top-10-for-llm-applications-2025/"],
    ["UK National Cyber Security Centre (" + (de ? "Dezember" : "December") + " 2025): Prompt injection is not SQL injection", "https://www.ncsc.gov.uk/blog-post/prompt-injection-is-not-sql-injection"],
    ["Linux Foundation (" + (de ? "Dezember" : "December") + " 2025): Agentic AI Foundation", "https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation"],
  ]],
  [de ? "Recht" : "Law", [
    [(de ? "Verordnung (EU) 2026/1744 („Digital Omnibus on AI“), Amtsblatt vom 24. Juli 2026, in Kraft seit 27. Juli 2026" : "Regulation (EU) 2026/1744 (Digital Omnibus on AI), Official Journal of 24 July 2026, in force since 27 July 2026"), de ? "https://eur-lex.europa.eu/eli/reg/2026/1744/oj/deu" : "https://eur-lex.europa.eu/eli/reg/2026/1744/oj/eng"],
  ]],
];

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
          ? "Vom Assistenten zum Agenten: Was die Forschung für die nächsten 24 Monate erwarten lässt"
          : "From assistant to agent: what research suggests for the next 24 months"}
      </h2>
      <p style={{ ...LABEL, fontWeight: 500, color: C.dim, margin: "0 0 32px" }}>
        InVentures Advisory — September 2026
      </p>

      <Body>
        {isDE
          ? "Die erste Welle generativer KI war ein Werkzeug für den Einzelnen: Ein Assistent entwirft Texte, beantwortet Fragen, schlägt Code vor – und ein Mensch entscheidet, was davon bleibt. Die zweite Welle verändert die Einheit der Arbeit. KI-Agenten zerlegen Aufgaben in Schritte, rufen Systeme auf, prüfen Zwischenergebnisse und liefern ein Ergebnis statt eines Vorschlags. Damit verschiebt sich die Frage für Unternehmen: nicht mehr, ob Mitarbeitende mit KI schneller schreiben, sondern welche Arbeit sich verlässlich delegieren lässt."
          : "The first wave of generative AI was a tool for the individual: an assistant drafts texts, answers questions, suggests code — and a person decides what to keep. The second wave changes the unit of work. AI agents break tasks into steps, call systems, check intermediate results and deliver an outcome rather than a suggestion. For companies, the question shifts accordingly: no longer whether employees write faster with AI, but which work can be reliably delegated."}
      </Body>

      <Body>
        {isDE
          ? "Für eine seriöse Einschätzung der nächsten sechs bis 24 Monate taugen weder Produktvorführungen noch Schlagzeilen. Aufschlussreicher sind die wenigen Messreihen und Experimente, die über Jahre belastbar geblieben sind. Sie zeichnen ein klares Bild: Die Fähigkeiten wachsen schnell und erstaunlich gleichmäßig, die Kosten fallen – doch der Engpass wandert. Er liegt immer weniger in der Technik und immer mehr in Verlässlichkeit, Organisation und Vertrauen."
          : "Neither product demos nor headlines are a sound basis for judging the next six to 24 months. More revealing are the few measurement series and experiments that have held up over years. They paint a clear picture: capabilities are growing fast and remarkably steadily, costs are falling — but the bottleneck is moving. It lies less and less in the technology and more and more in reliability, organisation and trust."}
      </Body>

      <H3 color={C.silver}>{isDE ? "Die Messgröße, die zählt: wie lange ein Agent selbstständig arbeitet" : "The metric that matters: how long an agent can work on its own"}</H3>

      <Body>
        {isDE
          ? "Die aufschlussreichste Messreihe stammt von METR, einer unabhängigen Forschungsorganisation. Sie misst Aufgaben in der Zeit, die Fachleute dafür brauchen – und fragt, bis zu welcher Länge ein KI-System sie allein schafft. Dieser Zeithorizont wächst stetig: Im Schnitt der Jahre 2019 bis 2025 verdoppelte er sich etwa alle sieben Monate, seit 2023 sogar etwa alle vier."
          : "The most revealing series comes from METR, an independent research organisation. It measures tasks by the time experts need for them — and asks up to what length an AI system can complete them on its own. This time horizon keeps growing: on average over 2019 to 2025 it doubled about every seven months, and since 2023 about every four."}
      </Body>

      <Body>
        {isDE
          ? "Anfang 2026 schaffte das leistungsfähigste untersuchte System Aufgaben, für die Fachleute 16 bis 20 Stunden brauchen – allerdings nur in jedem zweiten Versuch. Soll es in vier von fünf Versuchen gelingen, sind es Aufgaben von drei bis vier Stunden."
          : "In early 2026, the most capable system evaluated managed tasks that take experts 16 to 20 hours — but only in every second attempt. Ask for success in four out of five attempts, and the tasks shrink to three to four hours."}
      </Body>

      <Body>
        {isDE
          ? "Für Unternehmen zählt die zweite Zahl, denn ein Prozess läuft nicht einmal, sondern tausendfach. Wie stark Wiederholung die Quote drückt, zeigt eine Kundenservice-Simulation: Einen einzelnen Fall löste der Agent in über 60\u00a0% der Versuche, denselben Fall achtmal in Folge richtig aber in unter 25\u00a0% (τ-bench, 2024). Und Testaufgaben sind sauberer als echte Arbeit: In einer simulierten Softwarefirma mit realistischen Büroaufgaben erledigte der beste Agent zuletzt drei von zehn Aufgaben vollständig selbstständig (TheAgentCompany, Carnegie Mellon University)."
          : "For companies, the second figure is the one that counts, because a process runs not once but thousands of times. A customer-service simulation shows how much repetition lowers the rate: the agent solved a single case in over 60% of attempts, but the same case correctly eight times in a row in under 25% (τ-bench, 2024). And test tasks are cleaner than real work: in a simulated software company with realistic office tasks, the best agent most recently completed three out of ten tasks fully on its own (TheAgentCompany, Carnegie Mellon University)."}
      </Body>

      <Body>
        {isDE
          ? "Was folgt daraus? Setzt sich der Trend fort – selbst im langsameren Tempo von sieben Monaten –, wachsen diese drei bis vier Stunden innerhalb von 12 bis 24 Monaten auf mehrere Arbeitstage, zumindest bei sauber definierten Testaufgaben. Ob die Kurve hält, ist offen; über sechs Jahre war sie bemerkenswert stabil. Für Unternehmen ist die nüchterne Lesart entscheidend: Delegierbar werden nicht ganze Berufe, sondern gut abgegrenzte Arbeitspakete mit prüfbarem Ergebnis. Wo Ziele unscharf, Umgebungen wechselhaft und Fehler teuer sind, bleibt der Mensch auf absehbare Zeit der entscheidende Faktor."
          : "What follows? If the trend continues — even at the slower pace of seven months — those three to four hours will grow to several working days within 12 to 24 months, at least on cleanly defined test tasks. Whether the curve holds is open; over six years it has been remarkably stable. For companies, the sober reading is what counts: what becomes delegable is not entire professions but well-bounded work packages with verifiable results. Where goals are fuzzy, environments change and errors are costly, people remain the decisive factor for the foreseeable future."}
      </Body>

      <H3 color={C.silver}>{isDE ? "Was Experimente über den Nutzen zeigen" : "What experiments show about the benefit"}</H3>

      <Body>
        {isDE
          ? "Wie viel Produktivität daraus entsteht, messen randomisierte und quasi-experimentelle Studien – bislang vor allem zu KI-Assistenten, nicht zu Agenten. Ihre Befunde sind robust, verlangen aber eine genaue Lektüre. Im Kundenservice eines Unternehmens stieg mit einem KI-Assistenten die Zahl gelöster Anliegen pro Stunde um rund 15\u00a0%, am stärksten bei weniger erfahrenen Beschäftigten (Quarterly Journal of Economics, 2025). Bei abgegrenzten beruflichen Schreibaufgaben sank die Bearbeitungszeit um 40\u00a0%, die bewertete Qualität stieg um 18\u00a0% (Science, 2023). In einem Experiment mit 758 Unternehmensberatern verbesserte KI Tempo und Qualität bei Aufgaben innerhalb ihrer Fähigkeiten deutlich; bei einer gezielt gewählten Aufgabe außerhalb dieser Grenze sank der Anteil korrekter Lösungen dagegen um rund 19 Prozentpunkte (Organization Science, 2026)."
          : "How much productivity this creates is measured by randomised and quasi-experimental studies — so far mainly of AI assistants, not agents. Their findings are robust but call for careful reading. In one company's customer support, an AI assistant raised issues resolved per hour by around 15%, most of all for less experienced staff (Quarterly Journal of Economics, 2025). For defined professional writing tasks, time needed fell by 40% and rated quality rose by 18% (Science, 2023). In an experiment with 758 management consultants, AI clearly improved speed and quality on tasks within its capabilities; on a deliberately chosen task outside that frontier, however, the share of correct solutions fell by around 19 percentage points (Organization Science, 2026)."}
      </Body>

      <Body>
        {isDE
          ? "Diese zerklüftete Leistungsgrenze ist der rote Faden der Forschung. Beim Programmieren brauchten erfahrene Entwickler in ihnen vertrauten Projekten mit den Werkzeugen von Anfang 2025 im Schnitt 19\u00a0% länger (METR, Preprint), während drei Feldexperimente mit fast 5.000 Entwicklern rund 26\u00a0% mehr erledigte Aufgaben fanden (Management Science, 2026). Beides stimmt – für unterschiedliche Aufgaben, Erfahrungsstufen und Werkzeuge. Für die Agenten-Ära ist das die wichtigste Lehre: Der Nutzen hängt weniger am Modell als an der Passung von Aufgabe, System und Arbeitsablauf. Und weil sich die Grenze mit jeder Modellgeneration verschiebt, ist ihre Vermessung keine einmalige Übung, sondern eine dauerhafte Fähigkeit."
          : "This jagged frontier is the common thread of the research. In programming, experienced developers working in projects they knew well took 19% longer on average with the tools of early 2025 (METR, preprint), while three field experiments with almost 5,000 developers found around 26% more completed tasks (Management Science, 2026). Both are true — for different tasks, experience levels and tools. For the age of agents, this is the key lesson: the benefit depends less on the model than on the fit between task, system and workflow. And because the frontier moves with every model generation, mapping it is not a one-off exercise but a lasting capability."}
      </Body>

      <PullQuote
        color={C.silver}
        text={isDE
          ? "Der Engpass wandert von dem, was KI kann, zu dem, was eine Organisation ihr verlässlich anvertrauen kann."
          : "The bottleneck is moving from what AI can do to what an organisation can reliably entrust to it."}
      />

      <H3 color={C.silver}>{isDE ? "Billigere Intelligenz, teurere Aufgaben" : "Cheaper intelligence, costlier tasks"}</H3>

      <Body>
        {isDE
          ? "Zugleich fällt der Preis für eine gegebene Leistung rasant: Laut Epoch AI kostet dasselbe Leistungsniveau heute nur noch rund ein Dreizehntel dessen, was es ein Jahr zuvor gekostet hat – ein Trend, der seit drei Jahren anhält. Agenten verbrauchen allerdings weit mehr Rechenleistung pro Aufgabe. In einer Auswertung von 100 Billionen Token auf der Plattform OpenRouter hat sich die durchschnittliche Eingabe pro Anfrage etwa vervierfacht; mehr als die Hälfte der Token entfällt inzwischen auf Modelle, die vor der Antwort schrittweise »nachdenken« (a16z und OpenRouter, 2025). Die maßgebliche Größe wird deshalb der Preis pro korrekt erledigter Aufgabe – einschließlich Prüfung, Korrektur und Betrieb."
          : "At the same time, the price of a given level of performance is falling fast: according to Epoch AI, the same capability now costs only about a thirteenth of what it cost a year earlier — a trend that has held for three years. Agents, however, consume far more compute per task. In an analysis of 100 trillion tokens on the OpenRouter platform, the average input per request roughly quadrupled, and more than half of all tokens now go to models that reason step by step before answering (a16z and OpenRouter, 2025). The relevant measure is therefore the price per correctly completed task — including review, correction and operation."}
      </Body>

      <Body>
        {isDE
          ? "Dass sich der Nutzen in den Bilanzen trotzdem oft verzögert, ist kein Widerspruch. Die Forschung zur Produktivitäts-J-Kurve zeigt, dass neue Basistechnologien erst ergänzende Investitionen in Daten, Prozesse und Kompetenzen verlangen, bevor sich ihr Nutzen in Kennzahlen niederschlägt (American Economic Journal: Macroeconomics, 2021). Genau dort stehen viele Unternehmen: Laut McKinsey setzen 88\u00a0% KI ein, aber nur rund 6\u00a0% führen einen spürbaren Teil ihres Ergebnisses darauf zurück, nämlich mindestens 5\u00a0% des operativen Ergebnisses (November 2025). Die viel zitierte Zahl von 95\u00a0% gescheiterten KI-Projekten ist dagegen keine belastbare Quote; sie verallgemeinert einen vorläufigen Bericht."
          : "That the benefit often takes a while to show up in the accounts is no contradiction. Research on the productivity J-curve shows that new general-purpose technologies first require complementary investment in data, processes and skills before their benefit appears in the figures (American Economic Journal: Macroeconomics, 2021). That is exactly where many companies stand: according to McKinsey, 88% use AI, but only around 6% attribute a noticeable share of their results to it — at least 5% of operating profit (November 2025). The much-quoted figure of 95% failed AI projects, by contrast, is not a robust rate; it generalises a preliminary report."}
      </Body>

      <H3 color={C.silver}>{isDE ? "Vom Assistieren zum Delegieren" : "From assisting to delegating"}</H3>

      <Body>
        {isDE
          ? "In der Nutzung ist der Übergang bereits messbar. Im Anthropic Economic Index, der die Nutzung des KI-Systems Claude auswertet, stieg der Anteil der Gespräche, in denen Nutzer eine Aufgabe vollständig an die KI übergeben, von 27\u00a0% Ende 2024 auf 39\u00a0% im August 2025; erstmals überwog damit die Automatisierung die Zusammenarbeit. In der Unternehmensnutzung über Programmierschnittstellen zeigten bereits 77\u00a0% der Vorgänge Automatisierungsmuster. Laut McKinsey skalierten Ende 2025 23\u00a0% der Unternehmen ein agentisches KI-System in mindestens einem Bereich, weitere 39\u00a0% experimentierten damit."
          : "In usage, the transition is already measurable. In the Anthropic Economic Index, which analyses use of the AI system Claude, the share of conversations in which users hand a task over to the AI entirely rose from 27% in late 2024 to 39% in August 2025; for the first time, automation outweighed collaboration. In business use via APIs, 77% of interactions already showed automation patterns. According to McKinsey, 23% of companies were scaling an agentic AI system in at least one function by late 2025, and a further 39% were experimenting with one."}
      </Body>

      <Body>
        {isDE
          ? "Zugleich ist eine Auslese absehbar. Gartner erwartet, dass bis Ende 2027 über 40\u00a0% der Agentic-AI-Projekte eingestellt werden – wegen steigender Kosten, unklaren Nutzens oder unzureichender Risikokontrollen. Das ist eine Prognose, keine Messung. Sie beschreibt aber ein vertrautes Muster technologischer Umbrüche: Auf die Phase breiter Pilotprojekte folgt die Konsolidierung. Bestehen werden Anwendungen, deren Wert sich im gesamten Prozess nachweisen lässt."
          : "At the same time, a shake-out is foreseeable. Gartner expects more than 40% of agentic AI projects to be cancelled by the end of 2027 — because of escalating costs, unclear business value or inadequate risk controls. That is a forecast, not a measurement. But it describes a familiar pattern of technological change: a phase of broad pilots is followed by consolidation. The applications that last will be those whose value can be demonstrated across the whole process."}
      </Body>

      <H3 color={C.silver}>{isDE ? "Arbeit: Wer lernt, wenn Agenten die Einstiegsaufgaben übernehmen?" : "Work: who learns when agents take over entry-level tasks?"}</H3>

      <Body>
        {isDE
          ? "Am deutlichsten zeigt sich der Wandel bisher bei Berufseinsteigern. Eine Stanford-Studie vergleicht junge Beschäftigte zwischen 22 und 25 Jahren in den USA in zwei Gruppen: in Berufen, in denen KI viele Aufgaben übernehmen kann, und in Berufen, die KI weniger betrifft. Seit Ende 2022 hat die erste Gruppe gegenüber der zweiten 19\u00a0% an Beschäftigung verloren. Betroffen sind vor allem Tätigkeiten, die KI ersetzt; wo sie Menschen unterstützt, bleibt die Beschäftigung stabil oder wächst (Brynjolfsson, Chandar und Chen, Arbeitspapier, Fassung August 2026)."
          : "So far, the change shows most clearly among young entrants. A Stanford study compares US workers aged 22 to 25 in two groups: in occupations where AI can take over many tasks, and in occupations less affected by AI. Since late 2022, the first group has lost 19% in employment relative to the second. The loss is concentrated in work that AI replaces; where AI supports people, employment is stable or growing (Brynjolfsson, Chandar and Chen, working paper, August 2026 version)."}
      </Body>

      <Body>
        {isDE
          ? "Für Beschäftigte insgesamt ist der Effekt dagegen noch klein. In Dänemark sparten Chatbot-Nutzer in KI-nahen Berufen im Schnitt etwa eine Stunde pro Woche. Auf Löhne und Arbeitszeit wirkte sich das in den ersten zwei Jahren nach dem Start von ChatGPT praktisch nicht aus (Humlum und Vestergaard, NBER-Arbeitspapier, 2025)."
          : "For workers overall, by contrast, the effect is still small. In Denmark, chatbot users in AI-exposed occupations saved about an hour a week on average. In the first two years after ChatGPT's launch, this had practically no effect on earnings or hours worked (Humlum and Vestergaard, NBER working paper, 2025)."}
      </Body>

      <Body>
        {isDE
          ? "Darin liegt eine der schärfsten Fragen der nächsten zwei Jahre. Die Experimente zu KI-Assistenten zeigen, dass gerade weniger Erfahrene am stärksten profitieren. Übernehmen Agenten aber die Einstiegsaufgaben, an denen Nachwuchs bisher gelernt hat, fehlt Organisationen in wenigen Jahren genau die Erfahrung, die sie für Prüfung, Ausnahmefälle und Verantwortung brauchen. Wer Arbeit an Agenten delegiert, gestaltet deshalb auch Lernwege neu."
          : "Here lies one of the sharpest questions of the next two years. The experiments on AI assistants show that less experienced staff benefit most. But if agents take over the entry-level tasks through which newcomers used to learn, organisations will lack, within a few years, exactly the experience they need for review, exceptions and accountability. Delegating work to agents therefore also means redesigning how people learn."}
      </Body>

      <H3 color={C.silver}>{isDE ? "Vertrauen wird zur knappsten Ressource" : "Trust becomes the scarcest resource"}</H3>

      <Body>
        {isDE
          ? "Je selbstständiger ein System handelt, desto mehr hängt an der Frage, ob man ihm vertrauen kann. Menschliche Kontrolle ist dafür notwendig, aber kein Automatismus: Eine Metaanalyse von 106 Experimenten fand, dass Mensch-KI-Teams bei Entscheidungsaufgaben im Schnitt schlechter abschnitten als der Bessere von beiden allein (Nature Human Behaviour, 2024). Kontrolle wirkt nur, wenn Prüfende Fachwissen, Zeit und echte Eingriffsrechte haben."
          : "The more autonomously a system acts, the more depends on whether it can be trusted. Human oversight is necessary for this, but not automatic: a meta-analysis of 106 experiments found that human–AI teams performed worse on decision tasks, on average, than the better of the two alone (Nature Human Behaviour, 2024). Oversight works only when reviewers have expertise, time and real authority to intervene."}
      </Body>

      <Body>
        {isDE
          ? "Hinzu kommt eine Sicherheitslücke, die mit der Autonomie wächst. Agenten, die E-Mails, Dokumente oder Webseiten verarbeiten, lassen sich durch darin versteckte Anweisungen manipulieren. Diese »Prompt Injection« führt die OWASP-Liste der größten Risiken von KI-Anwendungen an; das britische National Cyber Security Centre hält sie für ein Restrisiko, das sich mit keinem Produkt vollständig beseitigen lässt (Dezember 2025). Die Praxis hinkt hinterher: 47\u00a0% der KI-Verantwortlichen großer börsennotierter US-Unternehmen haben eigene Governance-Regeln bei dringenden Einführungen schon umgangen (EY, September 2026), und jeder vierte böswillige Datenvorfall war laut IBM bereits KI-gestützt (2026)."
          : "Add to this a security gap that grows with autonomy. Agents that process e-mails, documents or web pages can be manipulated by instructions hidden in them. This prompt injection tops the OWASP list of the biggest risks in AI applications; the UK National Cyber Security Centre considers it a residual risk that no product can fully eliminate (December 2025). Practice lags behind: 47% of AI leaders at large US-listed companies have bypassed their own governance rules for urgent deployments (EY, September 2026), and according to IBM, one in four malicious data breaches was already AI-enabled (2026)."}
      </Body>

      <Body>
        {isDE
          ? "Für regulierte Branchen folgt daraus eine klare Erwartung: Das Tempo der Einführung bestimmen in den nächsten 24 Monaten weniger die Modelle als die Architektur des Vertrauens – eng begrenzte Zugriffsrechte, lückenlose Protokollierung, Freigaben an den kritischen Stellen. Offene Standards wie das Model Context Protocol, seit Dezember 2025 unter dem Dach der Linux Foundation, erleichtern die Anbindung von Agenten an Unternehmenssysteme – und machen Governance damit umso dringlicher. Der rechtliche Rahmen verdichtet sich im selben Zeitraum: Die Hochrisiko-Pflichten des AI Act gelten nach der jüngsten Änderung ab Dezember 2027."
          : "For regulated industries, this leads to a clear expectation: over the next 24 months, the pace of adoption will be set less by the models than by the architecture of trust — tightly scoped access rights, complete logging, approvals at the critical points. Open standards such as the Model Context Protocol, under the umbrella of the Linux Foundation since December 2025, make it easier to connect agents to enterprise systems — and make governance all the more urgent. The legal framework tightens over the same period: after the latest amendment, the AI Act's high-risk obligations apply from December 2027."}
      </Body>

      <H3 color={C.silver}>{isDE ? "Die Perspektive" : "The outlook"}</H3>

      <Body>
        {isDE
          ? "Was ist für die nächsten sechs bis 24 Monate also realistisch? Agenten dürften gut abgegrenzte Arbeitspakete von einigen Stunden bis zu mehreren Tagen übernehmen, zuerst dort, wo sich Ergebnisse überprüfen lassen: in Softwareentwicklung, Analyse und Verwaltung. Menschliche Prüfung bleibt dabei Teil des Prozesses, nicht die Ausnahme. Der Preis pro Aufgabe fällt weiter; der Aufwand für Integration, Prüfung und Sicherheit bleibt und wird zum eigentlichen Wettbewerbsfaktor. Viele Pilotprojekte werden eingestellt, einige werden zu Infrastruktur. Und menschliche Arbeit verlagert sich vom Erstellen zum Spezifizieren, Prüfen und Entscheiden."
          : "So what is realistic for the next six to 24 months? Agents are likely to take over well-bounded work packages of a few hours up to several days, first where results can be checked: in software development, analysis and administration. Human review remains part of the process, not the exception. The price per task will keep falling; the effort for integration, review and security remains and becomes the real competitive factor. Many pilots will be stopped, some will become infrastructure. And human work shifts from producing to specifying, reviewing and deciding."}
      </Body>

      <Body>
        {isDE
          ? "Die nächsten zwei Jahre entscheiden damit weniger darüber, was KI kann, als darüber, welche Organisationen gelernt haben, ihr Arbeit verlässlich anzuvertrauen. Das ist nicht allein eine Frage der Technik – sondern eine der Führung."
          : "The next two years will therefore decide less about what AI can do than about which organisations have learned to entrust work to it reliably. That is not only a question of technology — it is a question of leadership."}
      </Body>

      <Sources
        color={C.silver}
        groups={AI_SOURCES(isDE)}
        note={isDE
          ? "Stand: 23. September 2026. Quellenbasierte Einordnung, kein systematischer Literaturreview. Arbeitspapiere, Preprints, Branchenberichte und Prognosen sind als solche gekennzeichnet; Studienergebnisse gelten für die jeweils untersuchten Aufgaben und Systeme. Fortschreibungen von Messreihen sind Szenarien, keine Vorhersagen; die Einschätzungen zu den nächsten 24 Monaten sind Bewertungen von InVentures."
          : "As of 23 September 2026. A source-based assessment, not a systematic literature review. Working papers, preprints, industry reports and forecasts are marked as such; study results apply to the tasks and systems studied. Extrapolations of measurement series are scenarios, not predictions; the assessments of the next 24 months are InVentures' own."}
      />
    </div>
  );
}

// ── RE ARTICLE ──────────────────────────────────────────────────────────────
const RE_SOURCES = (de) => [
  [de ? "Studie" : "Peer-reviewed study", [
    ["Eichholtz, Kok & Sun (2026): The impact of minimum energy performance standards on the commercial real estate market. Nature Communications 17", "https://doi.org/10.1038/s41467-026-70684-w"],
  ]],
  [de ? "Notenbanken und amtliche Statistik" : "Central banks and official statistics", [
    [(de ? "EZB (10. September 2026): Geldpolitische Beschlüsse" : "ECB (10 September 2026): Monetary policy decisions"), "https://www.ecb.europa.eu/press/pr/date/2026/html/ecb.mp260910~314e508016.en.html"],
    [(de ? "OeNB (April 2026): Finanzmarktstabilität, Pressemitteilung" : "OeNB (April 2026): Financial stability, press release"), "https://www.oenb.at/Presse/Pressearchiv/2026/20260422.html"],
    [(de ? "OeNB (Juli 2026): Neuer Preisindex für Gewerbeimmobilien" : "OeNB (July 2026): New commercial property price index"), "https://www.oenb.at/Presse/oenb-blog/2026/2026-07-22-neuer-preisindex-fuer-mehr-transparenz-am-oesterreichischen-gewerbeimmobilienmarkt.html"],
    [(de ? "Statistik Austria (Jänner 2026): Nächtigungen 2025" : "Statistics Austria (January 2026): Overnight stays 2025"), "https://www.statistik.at/fileadmin/announcement/2026/01/20260130AnkuenfteNaechtigungenDezember2025.pdf"],
    [(de ? "Statistik Austria: Ankünfte und Nächtigungen" : "Statistics Austria: Arrivals and overnight stays"), "https://www.statistik.at/statistiken/tourismus-und-verkehr/tourismus/beherbergung/ankuenfte-naechtigungen"],
  ]],
  [de ? "Recht" : "Law", [
    [(de ? "Richtlinie (EU) 2024/1275 über die Gesamtenergieeffizienz von Gebäuden (Neufassung)" : "Directive (EU) 2024/1275 on the energy performance of buildings (recast)"), de ? "https://eur-lex.europa.eu/eli/dir/2024/1275/oj/deu" : "https://eur-lex.europa.eu/eli/dir/2024/1275/oj/eng"],
    [(de ? "Europäische Kommission (Juli 2026): Vertragsverletzungsverfahren zur Gebäuderichtlinie" : "European Commission (July 2026): Infringement procedures on the buildings directive"), "https://energy.ec.europa.eu/news/commission-calls-eu-countries-transpose-reinforced-rules-energy-performance-buildings-2026-07-15_en"],
    [(de ? "Sozialministerium: Neuerungen im Mietrecht ab 1. 1. 2026" : "Austrian Ministry of Social Affairs: Changes to rental law from 1 January 2026"), "https://www.konsumentenfragen.at/konsumentenfragen/Bauen__Wohnen_und_Versorgungsleistungen/Wohnen/Rund_um_die_Miete/Neuerungen-im-Mietrecht-ab-1.1.2026.html"],
  ]],
  [de ? "Marktberichte und Befragungen" : "Market reports and surveys", [
    ["CBRE (" + (de ? "Juli" : "July") + " 2026): European Real Estate Investment Figures Q2 2026", "https://www.cbre.com/insights/figures/european-real-estate-investment-figures-q2-2026"],
    ["JLL (August 2026): EMEA living investment Q2 2026", "https://www.jll.com/en-uk/newsroom/emea-living-investment-jumps-in-second-quarter"],
    ["EHL (2026): Investment Marktupdate H1 2026", "https://publikationen.ehl.at/view/309470442/"],
    ["EHL (Juli 2026): Wiener Wohnungsmarkt Marktupdate H1 2026", "https://publikationen.ehl.at/view/114388338"],
    ["CBRE Austria (September 2026): Büromarktbericht Österreich 2026", "https://www.cbre.at/insights/figures/b%C3%BCromarktbericht-%C3%B6sterreich-2026"],
    ["CBRE Austria (Juni 2026): Hotelmarktbericht Wien 2026", "https://www.cbre.at/insights/figures/hotelmarktbericht-wien-2026"],
    ["Cushman & Wakefield (" + (de ? "März" : "March") + " 2026): " + (de ? "Hotelinvestments Europa 2025, vorläufig" : "European hotel investment 2025, preliminary"), "https://www.cushmanwakefield.com/en/germany/news/2026/03/hotel-investment-emea"],
    ["CBRE (" + (de ? "Mai" : "May") + " 2026): European Hotel Investor Intentions Survey 2026", "https://www.cbre.com/insights/reports/european-hotel-investor-intentions-survey-2026"],
    ["RICS (August 2026): AI in commercial property and construction report 2026", "https://www.rics.org/news-insights/ai-in-commercial-property-and-construction-report-2026"],
  ]],
];

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
          ? "Nach der Korrektur: Wo der Immobilienmarkt in den nächsten 24 Monaten Chancen bietet"
          : "After the correction: where real estate offers opportunities over the next 24 months"}
      </h2>
      <p style={{ ...LABEL, fontWeight: 500, color: C.dim, margin: "0 0 32px" }}>
        InVentures Advisory — September 2026
      </p>

      <Body>
        {isDE
          ? "Die Preiskorrektur nach der Zinswende ist in Österreich weitgehend verarbeitet. Laut dem neuen Gewerbeimmobilien-Preisindex der OeNB fielen die Preise von 2022 bis Ende 2024 um rund 10\u00a0% und blieben 2025 nahezu stabil. Doch die Erholung verläuft ungleich. Europaweit stiegen die Immobilieninvestitionen im zweiten Quartal 2026 um 10\u00a0% auf 59,1\u00a0Mrd.\u00a0€ (CBRE). In Österreich dagegen lag das Volumen im ersten Halbjahr mit 1,15\u00a0Mrd.\u00a0€ praktisch auf dem Niveau des Vorjahres (EHL)."
          : "In Austria, the price correction after the interest-rate turn has largely worked its way through. According to the OeNB's new commercial property price index, prices fell by around 10% from 2022 to the end of 2024 and held almost steady in 2025. But the recovery is uneven. Across Europe, real estate investment rose by 10% to €59.1 billion in the second quarter of 2026 (CBRE). In Austria, by contrast, first-half volume of €1.15 billion was practically unchanged on the previous year (EHL)."}
      </Body>

      <Body>
        {isDE
          ? "Auch die Schlagzeilen über zurückkehrendes Kapital verdienen einen zweiten Blick. Im Wohnsegment stiegen die Investitionen in Europa, dem Nahen Osten und Afrika im selben Quartal um 49\u00a0% – die Zahl der Transaktionen sank aber um 19\u00a0% (JLL). Das Wachstum tragen wenige große Abschlüsse, nicht ein breiter Markt. Daraus folgt unsere zentrale These für die nächsten 24 Monate: Es beginnt keine allgemeine Aufwärtsbewegung, sondern eine Phase der Auslese. Chancen entstehen dort, wo Cashflow, Rechtsrahmen und Finanzierung zusammenpassen."
          : "Headlines about returning capital also deserve a second look. In residential, investment across Europe, the Middle East and Africa rose by 49% in the same quarter — but the number of transactions fell by 19% (JLL). The growth is carried by a few large deals, not by a broad market. This leads to our central thesis for the next 24 months: what lies ahead is not a general upswing but a phase of selection. Opportunities arise where cash flow, legal framework and financing fit together."}
      </Body>

      <H3 color={C.gold}>{isDE ? "Finanzierung: kein Rückenwind von den Zinsen" : "Financing: no tailwind from interest rates"}</H3>

      <Body>
        {isDE
          ? "Die Zinswende ist keine Einbahnstraße. Am 10.\u00a0September 2026 hob die EZB ihre Leitzinsen um 0,25 Prozentpunkte an; der Einlagensatz liegt seit 16.\u00a0September bei 2,50\u00a0%. Ihre Fachleute erwarten 3,0\u00a0% Inflation für 2026 und 2,5\u00a0% für 2027, auf einen Zinspfad legt sich die Notenbank nicht fest. Wer ein Investment auf sinkende Zinsen baut, baut auf eine Annahme, die die EZB selbst nicht trifft."
          : "The rate turn is not a one-way street. On 10 September 2026 the ECB raised its key interest rates by 0.25 percentage points; since 16 September the deposit rate has stood at 2.50%. Its staff expect inflation of 3.0% in 2026 and 2.5% in 2027, and the central bank does not commit to a rate path. Anyone building an investment on falling rates is building on an assumption the ECB itself does not make."}
      </Body>

      <Body>
        {isDE
          ? "Zugleich steigt das Kreditrisiko in den Bankbilanzen. Gewerbeimmobilien machen 43\u00a0% der Unternehmenskredite österreichischer Banken aus. Der Anteil notleidender Kredite in diesem Segment stieg binnen eines Jahres von 6,3\u00a0% auf 8,3\u00a0%, im gewerblichen Wohnen auf über 14\u00a0% (OeNB, Stand Ende 2025). Für die nächsten zwei Jahre heißt das: Anschlussfinanzierungen werden zum Nadelöhr – und eigenkapitalstarke Käufer dürften Gelegenheiten dort finden, wo Eigentümer refinanzieren müssen, es aber nicht können."
          : "At the same time, credit risk on bank balance sheets is rising. Commercial real estate accounts for 43% of Austrian banks' corporate loans. The share of non-performing loans in this segment rose within one year from 6.3% to 8.3%, and to over 14% in commercial residential (OeNB, end-2025). For the next two years this means refinancing becomes the bottleneck — and equity-rich buyers are likely to find opportunities where owners have to refinance but cannot."}
      </Body>

      <H3 color={C.gold}>{isDE ? "Wohnen: knappes Angebot, gedeckelte Mieten" : "Residential: scarce supply, capped rents"}</H3>

      <Body>
        {isDE
          ? "Am Wiener Wohnungsmarkt öffnet sich eine Schere. Auf der einen Seite schrumpft das Angebot: EHL zählte 2025 rund 9.250 fertiggestellte Wohnungen und erwartet für 2026 nur noch rund 8.300. Auf der anderen Seite begrenzt das Mietrecht seit Jänner 2026 die Wertsicherung von Wohnungsmieten, auch in bestehenden Verträgen: Richtwert- und Kategoriemieten dürfen 2026 um höchstens 1\u00a0% und 2027 um höchstens 2\u00a0% steigen; bei den übrigen Verträgen wird Inflation bis 3\u00a0% voll, darüber nur zur Hälfte weitergegeben."
          : "In Vienna's housing market, a gap is opening. On one side, supply is shrinking: EHL counted around 9,250 completed homes in 2025 and expects only around 8,300 in 2026. On the other, since January 2026 Austrian rental law has limited the indexation of residential rents, including in existing contracts: regulated rents (Richtwert and Kategorie) may rise by at most 1% in 2026 and 2% in 2027; for other contracts, inflation is passed on in full up to 3%, and only by half above that."}
      </Body>

      <Body>
        {isDE
          ? "Neuvermietungen dürften mit der Knappheit teurer werden, laufende Mieten steigen nur noch gebremst. Der Wert eines Bestandsobjekts hängt damit weniger an der Marktmiete als an der rechtlich erzielbaren Miete – und daran, wann und wie sich Flächen neu vermieten oder aufwerten lassen. Genau hier liegen nach unserer Einschätzung die Chancen der nächsten zwei Jahre: in Beständen mit tragfähigem Sanierungs- oder Repositionierungsplan, deren Kaufpreis die rechtlichen Grenzen bereits abbildet."
          : "New lettings are likely to become more expensive as supply tightens, while rents in existing contracts rise only in a controlled way. The value of an existing building therefore depends less on market rent than on the rent that can legally be achieved — and on when and how space can be re-let or upgraded. This, in our assessment, is where the opportunities of the next two years lie: in existing stock with a viable refurbishment or repositioning plan whose purchase price already reflects the legal limits."}
      </Body>

      <PullQuote
        color={C.gold}
        text={isDE
          ? "Entscheidend ist nicht die Marktmiete, sondern die Miete, die sich rechtlich erzielen lässt."
          : "What counts is not the market rent, but the rent that can legally be achieved."}
      />

      <H3 color={C.gold}>{isDE ? "Büro: niedriger Leerstand, vorsichtige Nutzer" : "Office: low vacancy, cautious occupiers"}</H3>

      <Body>
        {isDE
          ? "Der Wiener Büromarkt zeigt zwei Gesichter. Der Leerstand ist mit 3,9\u00a0% niedrig, die Spitzenmiete lag im ersten Halbjahr 2026 bei 28,50\u00a0€ pro Quadratmeter und Monat; bis Jahresende erwartet CBRE rund 29,50\u00a0€. Vermietet wurden dagegen 74.650 Quadratmeter, 5\u00a0% weniger als im Vorjahr. Knappes Angebot trifft auf vorsichtige Nutzer. Nach unserer Einschätzung konzentriert sich die Nachfrage deshalb weiter auf moderne, gut angebundene und energetisch zukunftsfähige Flächen – und die Lücke zu veralteten Beständen wächst."
          : "Vienna's office market has two faces. Vacancy is low at 3.9%, and prime rent stood at €28.50 per square metre per month in the first half of 2026; CBRE expects around €29.50 by year-end. Take-up, however, was 74,650 square metres, 5% less than a year earlier. Scarce supply meets cautious occupiers. In our assessment, demand will therefore continue to concentrate on modern, well-connected and energy-efficient space — and the gap to outdated stock will widen."}
      </Body>

      <H3 color={C.gold}>{isDE ? "Energie: Wert statt Mietaufschlag" : "Energy: value, not a rent premium"}</H3>

      <Body>
        {isDE
          ? "Energieeffizienz wird in den nächsten Jahren zum Bewertungsfaktor. Die neugefasste EU-Gebäuderichtlinie hätte bis 29.\u00a0Mai 2026 in nationales Recht umgesetzt sein müssen; am 15.\u00a0Juli leitete die Kommission Vertragsverletzungsverfahren gegen alle 27 Mitgliedstaaten ein. Für Nichtwohngebäude sieht die Richtlinie Mindeststandards vor: Die energetisch schlechtesten 16\u00a0% des Bestands müssen bis 2030 verbessert werden, die schlechtesten 26\u00a0% bis 2033."
          : "Energy efficiency will become a valuation factor in the coming years. The recast EU Energy Performance of Buildings Directive should have been transposed into national law by 29 May 2026; on 15 July the Commission opened infringement procedures against all 27 Member States. For non-residential buildings, the directive sets minimum standards: the worst-performing 16% of the stock must be improved by 2030, the worst 26% by 2033."}
      </Body>

      <Body>
        {isDE
          ? "Was das wirtschaftlich bedeutet, zeigt eine 2026 in Nature Communications veröffentlichte Studie zu niederländischen Büros, für die ein Mindest-Energielabel vorgeschrieben wurde: Gebäude, die den Standard erfüllten, erzielten danach deutlich höhere Kaufpreise als andere – ihre Mieten blieben dagegen weitgehend gleich (Eichholtz, Kok und Sun). Energetische Qualität wirkt also auf Wert und Verkäuflichkeit, nicht automatisch auf die Miete. Eine Sanierung muss sich deshalb auch ohne Mietaufschlag rechnen – über Betriebskosten, Finanzierbarkeit und Exit."
          : "A study published in Nature Communications in 2026 shows what this means economically. It examined Dutch offices after a minimum energy label became mandatory: buildings that met the standard achieved significantly higher sale prices than others — while their rents remained largely unchanged (Eichholtz, Kok and Sun). Energy quality thus affects value and marketability, not automatically rent. A refurbishment therefore has to pay off without a rent premium — through operating costs, financeability and exit."}
      </Body>

      <H3 color={C.gold}>{isDE ? "Hotels: Kostendruck hinter den Rekordzahlen" : "Hotels: cost pressure behind the record numbers"}</H3>

      <Body>
        {isDE
          ? "Die Nachfrage ist so stark wie nie. Österreich verzeichnete 2025 mit 157 Millionen Nächtigungen ein Allzeithoch; Wien überschritt erstmals die Marke von 20 Millionen – ein Plus von 6,5\u00a0% gegenüber 1,9\u00a0% im Bundesschnitt. Der Sommer 2026 liegt mit 41,9 Millionen Nächtigungen von Mai bis Juli 3,2\u00a0% über dem Vorjahr. Auch Investoren kehren zurück: Europaweit wechselten 2025 Hotels für über 27\u00a0Mrd.\u00a0€ den Besitzer, so viel wie seit 2019 nicht mehr, und über 90\u00a0% der von CBRE befragten Investoren wollen ihr Hotelengagement halten oder ausbauen."
          : "Demand has never been stronger. Austria recorded an all-time high of 157 million overnight stays in 2025; Vienna passed the 20 million mark for the first time — up 6.5%, against 1.9% nationally. Summer 2026 is running 3.2% above last year, with 41.9 million overnight stays from May to July. Investors are returning too: across Europe, hotels worth more than €27 billion changed hands in 2025, the most since 2019, and over 90% of investors surveyed by CBRE intend to maintain or increase their hotel allocation."}
      </Body>

      <Body>
        {isDE
          ? "Hinter den Rekordzahlen steigen jedoch die Kosten. CBRE beobachtet in Wien vor allem bei Full-Service-Hotels Druck durch hohe Personal- und Betriebskosten. Rekordnachfrage ist deshalb noch kein Beleg für Rekordmargen. Nach unserer Einschätzung entstehen in den nächsten zwei Jahren selektive Gelegenheiten dort, wo Betrieb, Investitionsbedarf und Refinanzierung zusammenfallen – für Käufer, die Betrieb und Immobilie getrennt bewerten."
          : "Behind the record numbers, however, costs are rising. CBRE sees pressure from high staff and operating costs in Vienna, especially for full-service hotels. Record demand is therefore no proof of record margins. In our assessment, the next two years will bring selective opportunities where operations, capital needs and refinancing coincide — for buyers who assess the operating business and the property separately."}
      </Body>

      <H3 color={C.gold}>{isDE ? "KI: von der Nutzung zum Nachweis" : "AI: from use to proof"}</H3>

      <Body>
        {isDE
          ? "Auch in der Immobilienwirtschaft ist KI angekommen. In einer RICS-Befragung mit über 3.100 Antworten aus Immobilien- und Bauwirtschaft gaben mehr als drei Viertel der Gewerbeimmobilien-Fachleute an, KI in irgendeiner Form zu nutzen – meist allerdings noch im Pilotstadium. Den Weg in den Betrieb finden nach unserer Einschätzung zuerst eng umrissene, überprüfbare Aufgaben: Mietverträge mit Quellenverweis auswerten, Datenräume auf Vollständigkeit prüfen, Widersprüche für die fachliche Prüfung markieren. Der Nutzen zeigt sich an gesparter Zeit und vermiedenen Fehlern, nicht an der Menge erzeugter Texte."
          : "AI has arrived in real estate as well. In a RICS survey with more than 3,100 responses from property and construction, more than three quarters of commercial property professionals said they use AI in some form — mostly still at pilot stage. In our assessment, the first applications to reach day-to-day operations will be narrowly defined, verifiable tasks: extracting lease terms with source references, checking data rooms for completeness, flagging inconsistencies for professional review. The benefit shows in time saved and errors avoided, not in the volume of text produced."}
      </Body>

      <H3 color={C.gold}>{isDE ? "Die Perspektive" : "The outlook"}</H3>

      <Body>
        {isDE
          ? "Was ist für die nächsten sechs bis 24 Monate realistisch? Die Zinsen bleiben kein Rückenwind, die Banken prüfen strenger, und Anschlussfinanzierungen dürften Objekte auf den Markt bringen, die vor zwei Jahren nicht zu haben waren. Im Wohnen wächst die Lücke zwischen Neuvermietung und Bestand, im Büro jene zwischen modernen und veralteten Flächen. Mit den Fristen 2030 und 2033 rückt der energetische Zustand in jede Bewertung. Hotels bleiben gefragt – entscheiden werden die Margen."
          : "So what is realistic for the next six to 24 months? Interest rates will not provide a tailwind, banks will look more closely, and refinancing is likely to bring properties to market that were not available two years ago. In residential, the gap between new lettings and existing contracts widens; in office, the gap between modern and outdated space. With the 2030 and 2033 deadlines approaching, energy performance enters every valuation. Hotels remain in demand — margins will decide."}
      </Body>

      <Body>
        {isDE
          ? "Die nächsten zwei Jahre belohnen deshalb nicht den Kauf am Tiefpunkt, sondern das Urteil im Einzelfall. Es geht nicht darum, die Korrektur zu kaufen – sondern das richtige Objekt zu Bedingungen, die auch die nächste überstehen."
          : "The next two years will therefore reward not buying at the bottom, but judgement case by case. The point is not to buy the correction — it is to buy the right asset on terms that can withstand the next one."}
      </Body>

      <Sources
        color={C.gold}
        groups={RE_SOURCES(isDE)}
        note={isDE
          ? "Stand: 23. September 2026. Marktberichte und Befragungen von Maklerhäusern sind als solche gekennzeichnet; Prognosen sind keine gemessenen Ergebnisse, und Daten verschiedener Anbieter sind nicht direkt vergleichbar. Einschätzungen zu Chancen und den nächsten 24 Monaten sind Bewertungen von InVentures. Allgemeiner Marktkommentar – keine Bewertung einzelner Objekte und keine Anlageempfehlung."
          : "As of 23 September 2026. Broker market reports and surveys are marked as such; forecasts are not measured results, and data from different providers are not directly comparable. Assessments of opportunities and the next 24 months are InVentures' own. General market commentary — not a valuation of individual properties and not investment advice."}
      />
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
