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
function Rules({ items }) {
  return (
    <ol style={{ margin: "0 0 20px", paddingLeft: 22, maxWidth: 680 }}>
      {items.map(([h, d]) => (
        <li key={h} className="t-body" style={{ color: TC.text, lineHeight: 1.7, marginBottom: 10 }}>
          <strong style={{ fontWeight: 600 }}>{h}</strong> {d}
        </li>
      ))}
    </ol>
  );
}

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
  [de ? "Preprints, Forschungsberichte und Daten" : "Preprints, research reports and data", [
    ["Becker, Rush, Barnes & Rein (2025): Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity. Preprint", "https://arxiv.org/abs/2507.09089"],
    ["METR (Februar 2026): We are Changing our Developer Productivity Experiment Design", "https://metr.org/blog/2026-02-24-uplift-update/"],
    ["Challapally, Pease, Raskar & Chari (2025): The GenAI Divide: State of AI in Business 2025. " + (de ? "Vorläufiger Bericht" : "Preliminary report"), "https://airnd.center/v0.1_State_of_AI_in_Business_2025_Report.pdf"],
    ["Stanford HAI (2025): AI Index Report 2025, " + (de ? "Kapitel 1" : "chapter 1"), "https://hai.stanford.edu/assets/files/hai_ai-index-report-2025_chapter1_final.pdf"],
    ["Cottier et al. (2025): The rising costs of training frontier AI models. Preprint", "https://arxiv.org/abs/2405.21015"],
    ["Gmyrek et al. (2025): Generative AI and Jobs: A Refined Global Index of Occupational Exposure. ILO Working Paper 140", "https://doi.org/10.54394/HETP0387"],
    ["KPMG (" + (de ? "März" : "March") + " 2026): Global AI Pulse Survey", "https://kpmg.com/xx/en/media/press-releases/2026/03/kpmg-global-ai-pulse-survey.html"],
    ["EY (September 2026): " + (de ? "Umfrage zur AI-Governance" : "AI governance survey"), "https://www.ey.com/en_us/newsroom/2026/09/ey-survey-finds-that-autonomous-ai-implementation-outpaces-oversight-yielding-an-ai-governance-gap"],
    ["IBM (" + (de ? "Juli" : "July") + " 2026): Cost of a Data Breach Report 2026", "https://newsroom.ibm.com/2026-07-29-ibm-study-one-in-four-malicious-breaches-are-ai-enabled,-costing-companies-6-million-on-average"],
    [(de ? "Europäische Kommission (Juli 2026): Durchsetzung des AI Act ab 2. August 2026" : "European Commission (July 2026): AI Act enforcement from 2 August 2026"), "https://digital-strategy.ec.europa.eu/en/news/commission-starts-enforcing-ai-act-rules-and-new-transparency-requirements-2-august"],
    [(de ? "Europäisches Parlament (Mai 2026): Einigung zur Vereinfachung des AI Act" : "European Parliament (May 2026): agreement on simplifying the AI Act"), "https://www.europarl.europa.eu/news/en/press-room/20260427IPR42011/ai-act-deal-on-simplification-measures-ban-on-nudifier-apps"],
    [(de ? "WHO/Europe (April 2026): KI im Gesundheitswesen der EU-Mitgliedstaaten" : "WHO/Europe (April 2026): AI in health care across EU Member States"), "https://www.who.int/europe/news/item/20-04-2026-new-who-europe-report-provides-first-ever-snapshot-of-ai-in-health-care-across-european-union-member-states"],
    [(de ? "Statistik Austria (Juni 2026): IKT-Einsatz in Unternehmen 2025" : "Statistik Austria (June 2026): ICT usage in enterprises 2025"), "https://www.statistik.at/fileadmin/announcement/2026/06/20260624IKTU2025.pdf"],
  ]],
  [de ? "Unternehmensangaben" : "Company information", [
    ["Klarna (" + (de ? "Februar" : "February") + " 2024): Klarna AI assistant handles two-thirds of customer service chats in its first month", "https://www.klarna.com/international/press/klarna-ai-assistant-handles-two-thirds-of-customer-service-chats-in-its-first-month/"],
    ["Klarna Group plc (2026): " + (de ? "Geschäftsbericht (Form 20-F) 2025, S. 184" : "Annual report (Form 20-F) 2025, p. 184"), "https://s205.q4cdn.com/644747736/files/doc_financials/2025/q4/Klarna-Group-plc-20-F-2025.pdf#page=188"],
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
          ? "Wann sich KI lohnt: Was die Forschung zeigt – und worauf es jetzt ankommt"
          : "When AI pays off: what the research shows — and what matters now"}
      </h2>
      <p style={{ ...LABEL, fontWeight: 500, color: C.dim, margin: "0 0 32px" }}>
        InVentures Advisory — September 2026
      </p>

      <Body>
        {isDE
          ? "Vor zweieinhalb Jahren galt LLM-Know-how als seltene Ressource. Heute ist KI in vielen Unternehmen im Einsatz – und die Forschung liefert belastbare Antworten: Generative KI kann Arbeit spürbar beschleunigen und ihre Qualität verbessern. Der Nutzen stellt sich aber nicht bei jeder Aufgabe von selbst ein. Entscheidend sind die konkrete Tätigkeit, die Fähigkeiten des Systems und die Gestaltung der Arbeitsabläufe. Das ist eine gute Nachricht, denn alle drei lassen sich steuern."
          : "Two and a half years ago, LLM know-how was a rare commodity. Today AI is in use at many companies — and research provides solid answers: generative AI can noticeably speed up work and improve its quality. But the benefit does not appear by itself for every task. What matters is the specific activity, the capabilities of the system and the design of the workflow. That is good news, because all three can be managed."}
      </Body>

      <Body>
        {isDE
          ? "Die entscheidende Frage lautet deshalb nicht, ob ein Unternehmen KI einführt, sondern: Verbessert das System den gesamten Arbeitsprozess – einschließlich Prüfung, Korrektur, Kosten und Verantwortung? Wer diese Frage sauber beantwortet, kann KI schneller und sicherer skalieren."
          : "The decisive question is therefore not whether a company introduces AI, but: does the system improve the entire workflow — including review, correction, cost and accountability? Those who answer this question properly can scale AI faster and more safely."}
      </Body>

      <H3 color={C.silver}>{isDE ? "Der Nutzen ist belegt – unter klaren Bedingungen" : "The benefit is proven — under clear conditions"}</H3>

      <Body>
        {isDE
          ? "Eine 2025 im Quarterly Journal of Economics veröffentlichte Studie untersuchte die schrittweise Einführung eines KI-Assistenten bei 5.172 Beschäftigten im Kundenservice: Die Zahl gelöster Anliegen pro Arbeitsstunde stieg im Schnitt um rund 15 %, am stärksten bei weniger erfahrenen Beschäftigten; bei den erfahrensten waren die Zeitgewinne gering, die Qualität ging leicht zurück. Die KI unterstützte dabei Menschen, die für das Gespräch verantwortlich blieben. In einem randomisierten Experiment mit 453 akademisch ausgebildeten Berufstätigen sank die Bearbeitungszeit abgegrenzter beruflicher Schreibaufgaben mit ChatGPT um durchschnittlich 40 %, während die bewertete Qualität um 18 % stieg (Science, 2023). Beide Studien messen bestimmte Aufgaben – nicht einen ganzen Arbeitstag und nicht die Wirkung auf Beschäftigung."
          : "A study published in the Quarterly Journal of Economics in 2025 examined the staggered introduction of an AI assistant among 5,172 customer-support agents: issues resolved per hour rose by around 15% on average, most strongly among less experienced agents; for the most experienced, time savings were small and quality declined slightly. The AI supported people who remained responsible for the conversation. In a randomised experiment with 453 college-educated professionals, the time needed for defined professional writing tasks fell by 40% on average with ChatGPT, while rated quality rose by 18% (Science, 2023). Both studies measure specific tasks — not an entire working day and not the effect on employment."}
      </Body>

      <Body>
        {isDE
          ? "Wie sehr es auf die Passung ankommt, zeigt ein Experiment mit 758 Unternehmensberatern: Bei Aufgaben innerhalb der Fähigkeiten des Systems erledigten sie mit KI mehr Aufgaben, schneller und in höherer Qualität. Bei einer gezielt gewählten Aufgabe außerhalb dieser Grenze sank der Anteil korrekter Lösungen dagegen um rund 19 Prozentpunkte (Organization Science, 2026; Experiment mit GPT-4 aus dem Jahr 2023). Diese Grenze verschiebt sich mit jeder Modellgeneration – umso wertvoller ist es, sie für die eigenen Aufgaben zu kennen."
          : "An experiment with 758 management consultants shows how much fit matters: on tasks within the system's capabilities, they completed more tasks, faster and at higher quality with AI. On a deliberately chosen task outside that frontier, however, the share of correct solutions fell by around 19 percentage points (Organization Science, 2026; experiment with GPT-4 in 2023). This frontier shifts with every model generation — which makes it all the more valuable to know it for your own tasks."}
      </Body>

      <Body>
        {isDE
          ? "Unternehmen setzen auf diesen Nutzen: Laut dem Global AI Pulse von KPMG (März 2026, 2.110 Führungskräfte) setzen 32 % KI-Agenten bereits ein und skalieren sie, weitere 27 % steuern mehrere Agenten im Verbund; 74 % wollen KI selbst in einer Rezession als Investitionspriorität halten."
          : "Companies are acting on this: according to KPMG's Global AI Pulse (March 2026, 2,110 executives), 32% are already deploying and scaling AI agents and a further 27% orchestrate multiple agents; 74% intend to keep AI a top investment priority even in a recession."}
      </Body>

      <PullQuote
        color={C.silver}
        text={isDE
          ? "KI lohnt sich dort, wo sie den ganzen Arbeitsprozess verbessert – nicht nur den ersten Entwurf."
          : "AI pays off where it improves the whole workflow — not just the first draft."}
      />

      <H3 color={C.silver}>{isDE ? "Softwareentwicklung: messen statt vermuten" : "Software development: measure, don't assume"}</H3>

      <Body>
        {isDE
          ? "Beim Programmieren gehen die Befunde auseinander – und genau das ist lehrreich. In einem randomisierten METR-Experiment aus dem Jahr 2025 bearbeiteten 16 erfahrene Entwicklerinnen und Entwickler 246 reale Aufgaben in ihnen vertrauten Open-Source-Projekten; mit den damaligen KI-Werkzeugen brauchten sie im Schnitt 19 % mehr Zeit (Preprint). Drei randomisierte Feldexperimente mit insgesamt 4.867 Entwicklern berichten dagegen rund 26 % mehr erledigte Aufgaben für jene, deren KI-Nutzung durch das Experiment ausgelöst wurde (Management Science, 2026). Ein METR-Folgeexperiment vom Februar 2026 deutete auf günstigere Effekte hin; die Forschenden halten diese Werte wegen Auswahl- und Messproblemen aber selbst nicht für belastbar."
          : "In programming, the findings diverge — and that is instructive. In a randomised METR experiment from 2025, 16 experienced developers worked on 246 real tasks in open-source projects they knew well; with the AI tools of the time they needed 19% more time on average (preprint). Three randomised field experiments with a total of 4,867 developers, by contrast, report around 26% more completed tasks for those whose AI use was triggered by the experiment (Management Science, 2026). A METR follow-up in February 2026 pointed to more favourable effects, but the researchers themselves consider these figures unreliable because of selection and measurement problems."}
      </Body>

      <Body>
        {isDE
          ? "Die Studien messen unterschiedliche Aufgaben, Erfahrungsstufen, Werkzeuge und Erfolgsgrößen. Ihre Prozentwerte lassen sich nicht zu einer allgemeinen „KI-Produktivität“ verrechnen. Für ein Unternehmen zählt, ob eine Änderung nach Prüfung und Integration schneller und in ausreichender Qualität einsatzbereit ist – und genau das lässt sich im eigenen Team messen."
          : "The studies measure different tasks, experience levels, tools and outcome measures. Their percentages cannot be combined into a general \"AI productivity\" figure. What counts for a company is whether a change is ready for use faster and in sufficient quality after review and integration — and that is exactly what can be measured in your own team."}
      </Body>

      <H3 color={C.silver}>{isDE ? "Schlagzeilen ersetzen keinen Business Case" : "Headlines are no business case"}</H3>

      <Body>
        {isDE
          ? "Die oft wiederholte Aussage, 95 % aller KI-Projekte scheiterten, ist nicht als allgemeine Quote abgesichert. Der zugrunde liegende NANDA-Bericht von 2025 spricht davon, dass 95 % der Organisationen aus ihren GenAI-Vorhaben bislang keinen messbaren Ertrag sehen. Er stützt sich auf 52 Interviews, eine Befragung von 153 Führungskräften und über 300 öffentlich dokumentierte Initiativen, bezeichnet seine Ergebnisse selbst als vorläufig und wechselt zwischen Organisationen, Pilotprojekten und wirtschaftlichen Wirkungen als Bezugsgröße. Eine repräsentative Ausfallquote lässt sich daraus nicht ableiten."
          : "The frequently repeated claim that 95% of all AI projects fail is not established as a general rate. The underlying NANDA report from 2025 states that 95% of organisations are so far seeing no measurable return from their GenAI initiatives. It draws on 52 interviews, a survey of 153 senior leaders and more than 300 publicly documented initiatives, describes its own findings as preliminary and switches between organisations, pilots and financial impact as its reference point. No representative failure rate can be derived from it."}
      </Body>

      <Body>
        {isDE
          ? "Auch Klarna taugt weder als Beleg für den vollständigen Ersatz von Menschen noch für ein Scheitern. Schon die Meldung vom Februar 2024 betonte, dass Kundinnen und Kunden weiterhin menschliche Ansprechpartner wählen konnten; die damals genannten 40 Mio. US-Dollar waren eine erwartete Ergebnisverbesserung für 2024. Im Geschäftsbericht für 2025 nennt Klarna rund 59 Mio. US-Dollar Kosteneinsparungen durch den Assistenten – bei weiterhin verfügbarem menschlichem Support. Das sind Unternehmensangaben, keine unabhängige Evaluation. Belastbar wird eine Aussage erst, wenn Kosten, Qualität und Leistung unter nachvollziehbaren Bedingungen verglichen werden."
          : "Nor is Klarna evidence of either the complete replacement of people or of failure. Its announcement in February 2024 already stressed that customers could still choose to talk to a human; the USD 40 million mentioned at the time was an expected profit improvement for 2024. In its annual report for 2025, Klarna reports around USD 59 million in cost savings from the assistant — with human support still available. These are company figures, not an independent evaluation. A claim becomes robust only when cost, quality and performance are compared under transparent conditions."}
      </Body>

      <H3 color={C.silver}>{isDE ? "Wirtschaftlichkeit entsteht im ganzen Prozess" : "Economics are decided across the whole process"}</H3>

      <Body>
        {isDE
          ? "KI-Nutzung ist dramatisch günstiger geworden: Laut Stanford AI Index 2025 sank der API-Preis für eine Leistung mindestens auf GPT-3.5-Niveau im Wissenstest MMLU zwischen November 2022 und Oktober 2024 um mehr als das 280-Fache – obwohl die Trainingskosten der Spitzenmodelle Schätzungen zufolge seit 2016 um rund das 2,4-Fache pro Jahr gestiegen sind. Der Nutzungspreis ist allerdings nur ein Teil der Rechnung: Datenaufbereitung, Integration, Schulung, Betrieb, menschliche Prüfung und Nacharbeit gehören ebenso dazu."
          : "Using AI has become dramatically cheaper: according to the Stanford AI Index 2025, the API price for performance at least at GPT-3.5 level on the MMLU knowledge test fell more than 280-fold between November 2022 and October 2024 — even though frontier-model training costs are estimated to have grown by around 2.4-fold per year since 2016. The usage price, however, is only part of the bill: data preparation, integration, training, operation, human review and rework belong to it as well."}
      </Body>

      <Body>
        {isDE
          ? "Zeitgewinne können wertvoll sein, auch wenn sie nicht als geringere Personalkosten sichtbar werden – etwa, wenn sie zusätzliche Kapazität oder bessere Betreuung ermöglichen. Die Forschung zur Produktivitäts-J-Kurve erklärt zudem, warum neue Basistechnologien ergänzende Investitionen in Wissen und Organisation brauchen, bevor sich ihr Nutzen in Kennzahlen zeigt. Das erklärt Anlaufzeiten – es ist keine Garantie für jedes Projekt."
          : "Time savings can be valuable even when they do not show up as lower staff costs — for example when they create additional capacity or better service. Research on the productivity J-curve also explains why new general-purpose technologies need complementary investment in knowledge and organisation before their benefit appears in the figures. That explains start-up periods — it is no guarantee for every project."}
      </Body>

      <H3 color={C.silver}>{isDE ? "Kontrolle, die wirkt" : "Oversight that works"}</H3>

      <Body>
        {isDE
          ? "Menschliche Kontrolle ist wichtig – sie wirkt aber nicht automatisch. Eine Metaanalyse von 106 experimentellen Studien in Nature Human Behaviour fand: Kombinationen aus Mensch und KI schnitten im Schnitt besser ab als Menschen allein, aber schlechter als die jeweils bessere Einzelleistung von Mensch oder KI. Bei Entscheidungsaufgaben verloren die Kombinationen an Leistung, bei der Erstellung von Inhalten – dem Kerngebiet generativer KI – fielen die Gewinne deutlich größer aus. Die Studien stammen aus den Jahren 2020 bis Mitte 2023. Die Lehre daraus: Zusammenarbeit wirkt, wenn sie zur Aufgabe passt und bewusst gestaltet wird."
          : "Human oversight matters — but it does not work automatically. A meta-analysis of 106 experimental studies in Nature Human Behaviour found that human–AI combinations performed better on average than humans alone, but worse than the better of the two working alone. In decision tasks the combinations lost performance, while in content creation — the core domain of generative AI — the gains were significantly larger. The studies date from 2020 to mid-2023. The lesson: collaboration works when it fits the task and is deliberately designed."}
      </Body>

      <Body>
        {isDE
          ? "Wer Ergebnisse prüfen soll, braucht Fachwissen, die richtigen Informationen, ausreichend Zeit und die Möglichkeit, eine fehlerhafte Ausgabe tatsächlich zu korrigieren oder zurückzuweisen. Für Systeme mit mehreren KI-Agenten gilt derselbe Maßstab: Jeder zusätzliche Agent sollte einen nachweisbaren Beitrag leisten, der seinen Koordinations-, Prüf- und Kostenaufwand rechtfertigt. Begrenzte Zuständigkeiten, überprüfbare Zwischenergebnisse und klare Übergaben an Menschen sind sinnvolle Gestaltungsprinzipien – eine universell überlegene Architektur gibt es nicht."
          : "Anyone expected to review results needs expertise, the right information, enough time and the real ability to correct or reject a faulty output. The same standard applies to systems with several AI agents: each additional agent should make a demonstrable contribution that justifies its coordination, review and cost overhead. Limited responsibilities, verifiable intermediate results and clear hand-offs to people are sensible design principles — there is no universally superior architecture."}
      </Body>

      <H3 color={C.silver}>{isDE ? "Die Governance-Lücke schließen" : "Closing the governance gap"}</H3>

      <Body>
        {isDE
          ? "Mit dem Tempo wächst das Risiko. In einer EY-Befragung vom September 2026 unter 202 KI-Verantwortlichen börsennotierter US-Unternehmen mit mehr als einer Milliarde Dollar Umsatz haben 98 % formale AI-Governance-Richtlinien – doch 47 % räumen ein, sie bei dringenden Einführungen schon umgangen zu haben. Laut IBM Cost of a Data Breach Report 2026 war jeder vierte böswillige Datenvorfall KI-gestützt, 56 % mehr als im Vorjahr; solche Vorfälle kosteten im Schnitt 6 Mio. US-Dollar, rund eine Million mehr als der weltweite Durchschnitt. Unsere Folgerung: Richtlinien auf Papier reichen nicht. Gehören Freigaben, Protokollierung und Zugriffsrechte zur Architektur, wird Governance vom Bremsklotz zur Voraussetzung für Tempo."
          : "Risk grows with speed. In an EY survey from September 2026 of 202 senior AI decision-makers at US-listed companies with more than a billion dollars in revenue, 98% have formal AI governance policies — yet 47% admit to having bypassed them for urgent deployments. According to IBM's Cost of a Data Breach Report 2026, one in four malicious breaches was AI-enabled, up 56% on the previous year; such breaches cost USD 6 million on average, around a million more than the global average. Our conclusion: policies on paper are not enough. When approvals, logging and access rights are part of the architecture, governance turns from a brake into a precondition for speed."}
      </Body>

      <PullQuote
        color={C.silver}
        text={isDE
          ? "Die Frage ist nicht, ob KI Entscheidungen trifft. Die Frage ist, wessen Werte dabei codiert sind."
          : "The question is not whether AI makes decisions. The question is whose values are encoded in it."}
      />

      <H3 color={C.silver}>{isDE ? "Was seit 2. August 2026 gilt" : "What applies since 2 August 2026"}</H3>

      <Body>
        {isDE
          ? "Seit 2. August 2026 setzen das AI Office der Europäischen Kommission und die nationalen Behörden den AI Act durch. Chatbots müssen offenlegen, dass Nutzer mit einer KI sprechen; Deepfakes sind zu kennzeichnen, KI-generierte Inhalte maschinenlesbar zu markieren. Für Hochrisiko-Anwendungen – etwa in Bildung, Beschäftigung, kritischer Infrastruktur, Strafverfolgung und Grenzmanagement – gelten die Pflichten nach der im Mai 2026 vereinbarten Vereinfachung ab 2. Dezember 2027, für Sicherheitskomponenten ab 2. August 2028. Im Gesundheitswesen ist KI längst Alltag: Laut WHO/Europe nutzen 74 % der EU-Mitgliedstaaten KI in der Diagnostik. Wer heute in Gesundheit, Bildung oder Verwaltung baut, gewinnt Zeit – und kann sie für eine saubere Architektur nutzen."
          : "Since 2 August 2026, the European Commission's AI Office and national authorities have been enforcing the AI Act. Chatbots must disclose that users are talking to an AI; deepfakes must be labelled and AI-generated content marked in machine-readable form. For high-risk uses — including education, employment, critical infrastructure, law enforcement and border management — the obligations apply from 2 December 2027 under the simplification agreed in May 2026, and from 2 August 2028 for safety components. In health care, AI is already routine: according to WHO/Europe, 74% of EU Member States use AI in diagnostics. Anyone building in health, education or public administration today gains time — and can use it for a clean architecture."}
      </Body>

      <H3 color={C.silver}>{isDE ? "Die Chance für den Mittelstand" : "The opportunity for mid-sized companies"}</H3>

      <Body>
        {isDE
          ? "Laut Statistik Austria nutzten 2025 rund 30 % der österreichischen Unternehmen mit mindestens 10 Beschäftigten künstliche Intelligenz – 2023 waren es 10,8 %. Das ist mehr als der EU-Schnitt, aber weiterhin eine Minderheit. Für kleine und mittlere Unternehmen liegt darin eine Chance: Wer jetzt mit messbaren Anwendungsfällen beginnt, baut Erfahrung und Vorsprung auf."
          : "According to Statistik Austria, around 30% of Austrian companies with 10 or more employees used artificial intelligence in 2025, up from 10.8% in 2023 — above the EU average, but still a minority. For small and mid-sized companies this is an opportunity: those who start now with measurable use cases build experience and a lead."}
      </Body>

      <Body>
        {isDE
          ? "Auch die Beschäftigungsfrage verdient Genauigkeit. Laut dem globalen Expositionsindex der Internationalen Arbeitsorganisation arbeitet rund jede vierte erwerbstätige Person in einem Beruf, der in Teilen durch generative KI verändert werden kann; 3,3 % der Beschäftigung fallen in die höchste Kategorie. Weil die meisten Berufe Aufgaben enthalten, die menschliches Zutun erfordern, hält die ILO die Veränderung von Tätigkeiten für die wahrscheinlichste Wirkung – nicht den Wegfall von Arbeitsplätzen. Ob Ersatz, Entlastung oder zusätzliche Arbeit entsteht, hängt davon ab, wie Unternehmen KI einführen."
          : "The employment question also deserves precision. According to the International Labour Organization's global exposure index, around one in four workers is in an occupation with some exposure to generative AI; 3.3% of employment falls into the highest category. Because most occupations include tasks that require human input, the ILO sees the transformation of jobs — not job loss — as the most likely impact. Whether AI replaces, relieves or creates additional work depends on how companies introduce it."}
      </Body>

      <H3 color={C.silver}>{isDE ? "Was jetzt zu tun ist" : "What to do now"}</H3>

      <Body>
        {isDE
          ? "Aus der Forschung lassen sich fünf praktische Prüfregeln ableiten. Mit ihnen setzen wir Projekte auf:"
          : "Five practical checks can be derived from the research. We use them to set up projects:"}
      </Body>

      <Rules items={isDE ? [
        ["Anwendungsfall eingrenzen.", "Vorab festlegen, welche Aufgabe das System übernimmt und woran ein korrektes Ergebnis erkennbar ist."],
        ["Mit dem bisherigen Verfahren vergleichen.", "Möglichst vergleichbare Aufgaben und Gruppen untersuchen; Veränderungen an Personal oder Prozessen mitberücksichtigen."],
        ["Die vollständige Bearbeitung erfassen.", "Vorbereitung, Prüfung, Rückfragen und Korrekturen ebenso messen wie die eigentliche Erstellung."],
        ["Qualität und Kosten gemeinsam bewerten.", "Etwa Kosten pro korrekt gelöstem Kundenanliegen oder pro abgenommener Softwareänderung. Tokenverbrauch und Textmenge messen Aktivität, nicht Nutzen."],
        ["Nach wesentlichen Änderungen neu prüfen.", "Neue Modelle, Aufgaben oder Abläufe können frühere Ergebnisse verändern."],
      ] : [
        ["Narrow the use case.", "Define up front which task the system takes on and how a correct result can be recognised."],
        ["Compare with the previous process.", "Examine tasks and groups that are as comparable as possible; account for changes in staff or processes."],
        ["Capture the full effort.", "Measure preparation, review, follow-up questions and corrections as well as the actual creation."],
        ["Assess quality and cost together.", "For example, cost per correctly resolved customer issue or per accepted software change. Token consumption and text volume measure activity, not value."],
        ["Re-test after significant changes.", "New models, tasks or workflows can change earlier results."],
      ]} />

      <Body>
        {isDE
          ? "Diese Regeln sind eine praktische Ableitung aus der Forschung, kein einheitlich validierter Standard. Dazu gehört jetzt die Einordnung nach dem AI Act – bevor die Hochrisiko-Pflichten Ende 2027 greifen – und eine Architektur, in der Freigaben, Protokollierung und Datenschutz von Beginn an mitgebaut sind. Unsere Schule dafür ist das Telekommunikationsrecht, das seit Jahren strenger ist als die DSGVO allein."
          : "These checks are a practical derivation from the research, not a uniformly validated standard. They now go hand in hand with classification under the AI Act — before the high-risk obligations apply at the end of 2027 — and with an architecture that has approvals, logging and data protection built in from the start. Our school for this is telecommunications law, which has been stricter than the GDPR alone for years."}
      </Body>

      <Body>
        {isDE
          ? "Eine tragfähige KI-Strategie beginnt mit überprüfbaren Verbesserungen konkreter Arbeit. Bleiben sie im vollständigen Prozess bestehen, ist das die Grundlage für den nächsten Automatisierungsschritt. Wir arbeiten nicht mit Hype – wir arbeiten mit Szenarien, Timelines und messbaren Ergebnissen."
          : "A sustainable AI strategy starts with verifiable improvements to concrete work. If they hold across the whole process, they are the basis for the next step in automation. We don't work with hype — we work with scenarios, timelines and measurable outcomes."}
      </Body>

      <Sources
        color={C.silver}
        groups={AI_SOURCES(isDE)}
        note={isDE
          ? "Stand: 23. September 2026. Quellenbasierte Einordnung, kein systematischer Literaturreview. Die Kernaussagen stützen sich auf begutachtete Studien und eine Metaanalyse; Preprints, Berichte und Unternehmensangaben sind als solche gekennzeichnet. Veröffentlichungsjahr und untersuchte Technologie können auseinanderliegen – historische Effekte sind keine Leistungswerte aktueller Systeme. Aussagen „unsere Folgerung“ und Schlussfolgerungen zu Vorgehen und Architektur sind Bewertungen von InVentures."
          : "As of 23 September 2026. A source-based assessment, not a systematic literature review. The core statements rest on peer-reviewed studies and a meta-analysis; preprints, reports and company figures are marked as such. Publication year and the technology studied can differ — historical effects are not performance figures of current systems. \"Our conclusion\" and conclusions on approach and architecture are InVentures' own assessments."}
      />
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
          ? "Zwischen 2022 und 2024 hat der europäische Immobilienmarkt eine der schärfsten Bewertungskorrekturen der Nachkriegszeit durchlaufen: Der europäische Gewerbeimmobilien-Preisindex von Green Street lag 2024 rund 25 % unter seinem Höchststand von 2022, deutsche Gewerbeimmobilien verloren laut VDP-Index rund 17 %. Seither kehrt das Kapital zurück. CBRE zählte im zweiten Quartal 2026 europaweit 59,1 Mrd. € Investitionen, 10 % mehr als im Vorjahr; Wohnen ist seit drei Quartalen das aktivste Segment. In EMEA flossen laut JLL 17,4 Mrd. € in Wohnimmobilien – das höchste Quartalsvolumen seit 2022."
          : "Between 2022 and 2024, the European real estate market went through one of the sharpest valuation corrections since the post-war period: Green Street's pan-European commercial property price index stood around 25% below its 2022 peak in 2024, and German commercial property lost roughly 17% according to the VDP index. Since then, capital has been returning. CBRE counted €59.1bn of European investment in the second quarter of 2026, 10% more than a year earlier; living has been the most active sector for three quarters. According to JLL, €17.4bn went into EMEA living assets — the highest quarterly volume since 2022."}
      </Body>

      <Body>
        {isDE
          ? "Doch die Finanzierung wird wieder teurer. Die EZB hat am 10. September 2026 die Leitzinsen um 0,25 Prozentpunkte angehoben; die Inflation dürfte wegen hoher Energiepreise noch länger über 2 % liegen und erst gegen Ende 2027 zum Ziel zurückkehren. Gleichzeitig beobachtet die OeNB die Banken genau: Gewerbeimmobilien machen 43 % der Unternehmenskredite österreichischer Banken aus, die Quote notleidender Kredite in diesem Segment stieg auf 8,3 %. Nach unserer Einschätzung bleibt das Einstiegsfenster offen – aber vor allem für Käufer mit starker Eigenkapitalbasis und einer Finanzierung, die auch höhere Zinsen trägt."
          : "Financing, however, is becoming more expensive again. On 10 September 2026 the ECB raised its key interest rates by 0.25 percentage points; because of high energy prices, inflation is expected to stay above 2% for some time and to return to target only towards the end of 2027. At the same time, the Austrian National Bank is watching lenders closely: commercial real estate accounts for 43% of Austrian banks' corporate loans, and the share of non-performing loans in this segment has risen to 8.3%. In our assessment, the entry window remains open — but mainly for buyers with a strong equity base and financing that can carry higher rates."}
      </Body>

      <H3 color={C.gold}>{isDE ? "Wohnimmobilien: Die Nachfrage übersteigt das Angebot weiter" : "Residential: demand continues to outstrip supply"}</H3>

      <Body>
        {isDE
          ? "In Wien schrumpft das Neubauvolumen deutlich. EHL Immobilien beziffert die Fertigstellungen 2025 auf 9.688 Einheiten – erstmals seit rund zehn Jahren unter 10.000 und 32 % weniger als 2023; 2026 werden nur noch rund 60 % des Niveaus von 2023 erreicht. EHL erwartet für 2026 Mietsteigerungen von durchschnittlich sieben bis acht Prozent, CBRE Spitzenmieten auf Rekordniveau von 20,30 € pro Quadratmeter. Für Investoren heißt das aus unserer Sicht: Bestandsimmobilien mit Repositionierungspotenzial können risikoadjustierte Renditen bieten, die Neubauprojekte kaum erreichen – wenn Lage, Zustand und Einstiegspreis stimmen."
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
          ? "Im Wiener Büromarkt liegt der Leerstand laut EHL bei rund 3,8 %, Spitzenmieten erreichen bis zu rund 29,50 €/m² (Frühjahr 2026). Die Qualitätsspaltung setzt sich fort: Gefragt sind moderne, gut angebundene Flächen, B-Lagen bauen zunehmend strukturellen Leerstand auf. Dazu kommt Regulierung: Weil keiner der Mitgliedstaaten die neugefasste EU-Gebäuderichtlinie bis 29. Mai 2026 vollständig umgesetzt hat, leitete die EU-Kommission im Juli 2026 Vertragsverletzungsverfahren gegen alle 27 ein. Unsere These: Energieeffizienz und ESG-Qualität werden vom Imagefaktor zur Finanzierungs- und Wertfrage – dort kann ein Mietaufschlag zur Rendite beitragen. Logistik bleibt eine der widerstandsfähigsten Asset-Klassen; CBRE erwartet für 2026 eine Konsolidierung bei stabilen bis leicht steigenden Mieten in den Regionen Wien, Linz und Graz."
          : "In Vienna's office market, vacancy is around 3.8% according to EHL, with prime rents of up to around €29.50/m² (spring 2026). The quality split continues: modern, well-connected space is in demand, while B-locations are increasingly building structural vacancy. Regulation adds to this: because no Member State had fully transposed the recast EU buildings directive by 29 May 2026, the European Commission opened infringement procedures against all 27 in July 2026. Our thesis: energy efficiency and ESG quality are turning from an image factor into a question of financing and value — there, a rent premium can contribute to returns. Logistics remains one of the most resilient asset classes; for 2026, CBRE expects consolidation with stable to slightly rising rents in the Vienna, Linz and Graz regions."}
      </Body>

      <H3 color={C.gold}>{isDE ? "Hotels: Kostendruck hinter den Rekordzahlen" : "Hotels: cost pressure behind the record numbers"}</H3>

      <Body>
        {isDE
          ? "Der österreichische Tourismus verzeichnete 2025 mit rund 157 Millionen Nächtigungen einen neuen Höchstwert, und Investoren kehren in den Sektor zurück: Laut Cushman & Wakefield überstieg das europäische Hoteltransaktionsvolumen 2025 27 Mrd. € – das stärkste Jahr seit 2019. In der European Hotel Investor Intentions Survey 2026 von CBRE wollen über 90 % der Investoren ihre Hotelallokation halten oder erhöhen. Auf Betreiberseite sieht es anders aus: CBRE Austria beobachtet sinkende Margen, weil Personal- und Betriebskosten schneller steigen als die erzielbaren Zimmerpreise. Nach unserer Einschätzung kann dieser Kostendruck – verstärkt durch wieder steigende Zinsen – bei Betrieben mit auslaufenden Finanzierungen und ohne Preissetzungsmacht zu Distressed-Asset-Situationen führen."
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
