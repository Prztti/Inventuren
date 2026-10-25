// InVentures View, October 2026: "Die stehende Uhr geht zweimal am Tag richtig".
// Philip Kügler on AI agents in practice. German text = 5-page family version of the paper (25 Oct 2026);
// English = translation of it. Structure per language: kicker, title, author, bio, intro[], sections[{ h, p[] }], disclaimer.

export const CLOCK = {
  de: {
    kicker: "InVentures View · Oktober 2026",
    title: "Die stehende Uhr geht zweimal am Tag richtig",
    author: "Philip Kügler, MSc · Managing Partner Technology",
    bio: "Philip Kügler, MSc (TU Wien), ist Enterprise-Architekt, also einer, der große IT-Systeme entwirft und bis in den laufenden Betrieb bringt. Seit mehr als 25 Jahren arbeitet er an IT-Großprojekten, vom Zoll im österreichischen Finanzministerium über den elektronischen Reisepass bis zur nationalen Krankenversicherung in Katar. Bei InVentures ist er Managing Partner für Technologie. Heute entwickelt er Software mit KI-Agenten und schaut ihnen dabei so genau auf die Finger wie einem hochbegabten Praktikanten, der nie schläft, alles kann und gelegentlich vorschlägt, seine eigene Arbeit zu löschen.",
    intro: [
      "Über KI wird derzeit meist in zwei Tonlagen gesprochen: euphorisch oder apokalyptisch. Philip spricht in einer dritten, der des Praktikers mit hörbar hochgezogener Augenbraue. Er benutzt die Werkzeuge täglich und weiß deshalb ziemlich genau, wo sie glänzen und wo sie mit großer Überzeugung danebenliegen. Seine Grundthese passt in zwei Sätze: „Artificial Intelligence ist es ja nicht. Es ist eine Informationsextrapolation.“ Was das im Alltag bedeutet, erzählt er am liebsten an Beispielen. Die meisten davon sind komisch. Bei einem Thema hört der Spaß auf.",
    ],
    sections: [
      {
        h: "Extrapolation mit Selbstbewusstsein",
        p: [
          "Wenn über KI geklagt wird, fällt früher oder später das Wort Halluzination. Philip beschreibt dasselbe Phänomen nüchterner, und seine Beschreibung erklärt mehr. Wo viel Wissen nach festen Regeln anzuwenden ist, glänzt ein Sprachmodell. „Das Lustige ist, GPT-Law ist das Einzige, was wahrscheinlich wirklich funktionieren könnte“, sagt Philip, zumindest solange es ums Nachschlagen geht und nicht um den konkreten Fall. Alles andere sei „Random Extrapolation“, als würde man den Aktienkurs von heute aus dem Kurs von gestern vorhersagen: „Das stimmt natürlich in 50 % der Fälle.“ Auch die kaputte Uhr zeigt zweimal am Tag die richtige Zeit. Das Modell klingt dabei in beiden Fällen gleich überzeugt, und genau das macht die sogenannte Halluzination so tückisch. Je seltener das gesuchte Wissen, desto größer die Gefahr, denn die Modelle „tendieren immer zur Mitte“.",
          "Sein Lieblingsbeispiel stammt aus dem Serverbetrieb. Seit drei Jahren fragt Philip gelegentlich, wie man eine Festplattenpartition vergrößert. Jedes Mal kommt derselbe Vorschlag: Partition löschen, die Werte genau aufschreiben, mit denselben Werten neu anlegen. „Theoretisch kann das funktionieren. Das ist theoretisch nicht falsch.“ Solange man jede Zahl richtig abtippt, passiert den Daten sogar nichts. Ein einziger Tippfehler aber macht aus der Wartung eine Datenrettung, und es gibt längst Werkzeuge, die dasselbe in einem Schritt erledigen. Philip übersetzt das Vorgehen gern in die Chirurgie: „Als erstes tust du einmal beim Patienten das Herz entfernen. Dann gehst du online in die Transplantationsliste und suchst, ob du ein Ersatzherz findest.“ Das könnte ja in zehn Minuten da sein. Für das Modell ist die Reihenfolge nur ein Muster unter vielen: „Weil für ihn ist es wurscht, das ist das Muster.“",
        ],
      },
      {
        h: "Ein riesiges Gedächtnis mit eingebautem Vergessen",
        p: [
          "Kaum eine Kennzahl wird so gern beworben wie das Kontextfenster, also die Menge Text, die ein Modell gleichzeitig im Blick behalten kann. Eine Million Token sind gut zweitausend Buchseiten. Was in der Werbung fehlt: Ist das Fenster voll, schreibt sich das Modell eine Zusammenfassung und arbeitet mit der weiter, „aber es geht immer ein bisschen was verloren“. Was der Agent sich merken soll, gehört deshalb als feste Regel in sein dauerhaftes Gedächtnis. „Sonst schreibt er es sich nicht auf, sondern er legt es nur im Kontext ab.“ Beim nächsten Eindampfen ist es dann weg. „Das habe ich jetzt ein paar Mal gehabt.“",
          "Noch lästiger als das Vergessen ist die falsche Erinnerung. Hat sich der Agent einmal etwas falsch zusammengereimt, „nimmt er es als Wahrheit“. Dann ist es nach Philips Erfahrung so, dass „er sich einfach fest rennt und dann pickt er“. Da hilft nur eine frische Sitzung, „und dann geht es wieder“. Dazu kommen Eigenheiten, die man bei Menschen eher nach sehr langen Nächten beobachtet. Ein Agent findet Code im Repository, hält ihn für fremd und schlägt vor, ihn zu löschen, bis Philip ihn bittet, im eigenen Chatverlauf nachzusehen: „Ah ja, jetzt wo du es sagst, den habe ja ich geschrieben.“ Ein anderer ignoriert den eigens hochgeladenen Vertrag und will lieber nachfragen. Philips Nacherzählung: „Darf ich 18 Fragen? Wie ist denn gerade das Wetter in Großbritannien? Sonst kann ich unmöglich den Wert 2 auf 3 umstellen.“",
        ],
      },
      {
        h: "Der Agent arbeitet schnell. Das ist das Problem.",
        p: [
          "Vergesslichkeit wäre zu verschmerzen, wenn der Agent gemächlich arbeiten würde. Tut er aber nicht. In zwei Tagen hat einer mit Philip 65 Tickets umgesetzt. So viele Anforderungen kann kein Mensch laufend prüfen. Philips Faustregel: Für das, was der Agent an einem Tag entwickelt, braucht man einen Tag, nur um zu priorisieren. Deshalb lässt er ihn nie länger als zwanzig Minuten allein. „Auch wenn er selber sagt, er hat es getestet“, kommt oft Unsinn heraus.",
          "Ohne klares Ziel läuft der Agent „wie ein Fraktal in jede Richtung gleichzeitig“, und beim Testen ist er besonders eifrig. „Ich bin immer fasziniert, wie viele automatische Tests er geschrieben hat“, sagt Philip. „Und jedes Mal, wenn er Software entwickelt, werden es 100 Tests mehr.“ Das Urteil folgt trocken: „Die Tests sind komplett für die Fisch.“ Sinnvolle Testfälle zu finden verlangt echtes abstraktes Denken, und davon seien die Modelle „weit, weit, weit“ entfernt.",
        ],
      },
      {
        h: "Vibe Coding: Fünf Ziegel und der Traum vom Eigenheim",
        p: [
          "Vibe Coding, also Software nach Gefühl und Prompt, gilt als Demokratisierung des Programmierens. Tatsächlich programmiert jetzt jeder mit KI. Philips Bild dafür: „Wenn du nicht Maurer bist, kannst du zwar fünf Ziegel aufeinander stapeln, aber du kannst kein zweistöckiges Gebäude mauern.“ Fertige Mauerteile, also Managed Services, ändern daran wenig. Dann kauft man eben die Ostmauer und die Westmauer im Stück und steht vor der Frage, wie man sie verbindet, ob mit Superkleber, und wo eigentlich das Fundament hingehört. „Ich habe zwar das Gefühl, ich kann es, aber ich kann es trotzdem nicht.“ Die möglichen Folgen fasst Philip nüchtern zusammen: Im besten Fall geht man pleite, weil die Kunden abspringen, im schlimmsten Fall landet man vor Gericht.",
          "Woran man den fehlenden Maurer erkennt, zeigt ein Klassiker der Schein-Sicherheit. Die KI schlägt vor, geheime Schlüssel aus dem Quellcode in eine Konfigurationsdatei zu verschieben. „Ja, eh, das ist sicher real“, sagt Philip, denn im Repository liegt der Schlüssel dann wenigstens nicht mehr. „Aber trotzdem liegt der Schlüssel am gleichen Server.“ Ähnlich großzügig geht die KI mit Lizenzen um, sie verwendet alles, was verfügbar ist. Jede Komponente von Hand nachzuprüfen? „Da wirst du alt, dumm und deppert.“",
          "Und das eigentliche Fundament, der Datenschutz, wird gern erst am Ende erledigt, ungefähr wie die Hausnummer am fertigen Gebäude. Was nicht von Anfang an löschbar gebaut ist, lässt sich kaum nachrüsten. Philips Paradebeispiel ist das Backup: Spielt man es zurück, steht die gelöschte Person plötzlich wieder im System, als wäre nichts gewesen.",
        ],
      },
      {
        h: "Gesundheit: Hier hört der Spaß auf",
        p: [
          "Nirgends trauen Nutzer der KI so viel zu wie bei der Gesundheit, und kaum irgendwo ist das gefährlicher. Laien laden Fotos hoch und fragen, ob sie Krebs haben, und auch in Praxen heißt es: „Das sind meine fünf Patienten: Sag mir, wen ich zuerst behandeln soll.“ Ärzte „kippen“ Patientenakten ins Modell und übernehmen das Ergebnis ohne viel Nachdenken. Hier wird Philip ernst: „Und das geht natürlich nicht, weil da bringen's Leute um.“ Die typische Entschuldigung der Maschine kennt man dann schon: „Ups, da hab ich wohl einen Fehler gemacht.“ Die Anbieter schreiben deshalb in ihre Nutzungsregeln, dass bei Wartelisten oder Behandlungsabbrüchen ein Mensch drüberschauen muss. Philip liest das mit trockener Gelassenheit: „Vergiss nicht, dass das für Amerika geschrieben wird. Da steht noch nicht drinnen, nicht die Katze in die Mikrowelle geben, auch wenn Claude das vorschlägt. Aber auch das wird noch kommen.“",
          "Wo KI wirklich helfen kann, zeigt sein Beispiel zu Krisenhinweisen in Gesprächen. Signalwörter reichen nicht, weil Betroffene umschreiben, statt das Wort zu verwenden. Man braucht semantisches Verständnis, und genau das können Sprachmodelle. Bittet man den Agenten aber nicht ausdrücklich darum, schreibt er Code, der nach der Zeichenkette „Suizid“ sucht. Sich selbst überlassen, baut das semantisch begabteste Werkzeug der Softwaregeschichte also eine Stichwortsuche. Und selbst die beste Erkennung ersetzt kein Urteil: „Auch der Therapeut kann nicht eindeutig sagen, was gemeint ist.“ Das System setzt deshalb nur Markierungen, und die Fachperson bestätigt jede einzeln.",
        ],
      },
      {
        h: "Wer zahlt 200, wenn es auch um 100 geht?",
        p: [
          "Bleibt die Frage, über die Investoren am liebsten reden: Wer verdient am Ende Geld? Jahrelang hat die Branche auf eine einfache Formel gesetzt. In Philips Worten: „Die Welt hat so viel Geld reingeschmissen“ und beschlossen, die Optimierung zu vergessen und die Modelle einfach größer zu machen. Diese Formel hält er für ausgereizt. Ob man Pi mit tausend oder mit zwanzig Millionen Stellen rechnet, ist für den Umfang eines Ein-Zentimeter-Kreises „komplett wurscht“, wenn man ohnehin auf acht Stellen rundet. Dass die Spitzenmodelle trotzdem gerade schneller besser werden als je zuvor, passt für Philip ins Bild: Der Fortschritt kommt aus den „anderen Techniken“, die er für nötig hält, etwa dem schrittweisen Durchdenken, und nicht aus noch mehr Parametern.",
          "Und das Geschäft dahinter? Laut Medienberichten hat Anthropic Investoren kurz vor dem geplanten Börsengang eine bemerkenswerte Zahl präsentiert, die Philip so zusammenfasst: „Für jeden Dollar, den sie in die Verarbeitung stecken, verdienen sie einen Dollar 70.“ Gemeint ist Umsatz, nicht Gewinn. Philip würdigt das trotzdem: „Das ist, wenn man sagt, man hat eine Trilliarde Dollar in Hardware investiert, eh schon mal gut.“ Bis der Überschuss die Hardware abbezahlt hat, „wird das noch dauern“. Zumal es im Markt enger wird: Offene Modelle kann jeder betreiben, chinesische Modelle verarbeiten weltweit inzwischen mehr Token als amerikanische, und die Preise pro Leistung fallen drastisch. Philip stellt die entscheidende Frage mit sichtlichem Vergnügen: Wer zahlt 200 Dollar an Anthropic, wenn ein Europäer dasselbe um 100 anbietet?",
          "Für alle, die auf KI ein Geschäft bauen, ist das eine gute Nachricht mit Pointe. Der Wert liegt nicht im Zugang zu einem bestimmten Modell, sondern in Architektur, Umsetzung und Compliance, also genau in dem, was die Modelle nicht können: im Maurerhandwerk.",
        ],
      },
      {
        h: "Der Mensch bleibt. Als Engpass.",
        p: [
          "Damit schließt sich der Kreis zu Philips Grundthese. „Es ist ziemlich wurscht, wie lange es weitergeht. Den Menschen in dem Prozess wirst du noch eine gute Weile nicht ersetzen können.“ Die Ironie dabei: Die KI hat den Menschen nicht überflüssig gemacht, sie hat ihn zum Engpass befördert. Qualität entsteht, wenn jemand in kurzen Takten mitliest, entscheidet und prüft. „Du musst mehr Kontrolle ausüben über das, was er tut. Das steigert enorm die Qualität.“ Das kostet Zeit, und die spart einem keine KI. Auch eine kaputte Uhr zeigt zweimal am Tag die richtige Zeit. Man braucht nur jemanden, der weiß, wie spät es ist.",
        ],
      },
    ],
    disclaimer: "Zitate aus Gesprächen mit Philip Kügler, September und Oktober 2026; Zahlen auf dem Stand von Oktober 2026.",
  },

  en: {
    kicker: "InVentures View · October 2026",
    title: "A stopped clock is right twice a day",
    author: "Philip Kügler, MSc · Managing Partner Technology",
    bio: "Philip Kügler, MSc (TU Wien), is an enterprise architect, in other words someone who designs large IT systems and takes them all the way into live operation. For more than 25 years he has worked on large-scale IT projects, from customs at the Austrian Ministry of Finance and the electronic passport to Qatar’s national health insurance. At InVentures he is Managing Partner for Technology. Today he builds software with AI agents and watches them as closely as he would a highly gifted intern who never sleeps, can do everything and occasionally suggests deleting its own work.",
    intro: [
      "AI is mostly discussed in two registers these days: euphoric or apocalyptic. Philip speaks in a third, that of the practitioner with an audibly raised eyebrow. He uses the tools every day and therefore knows quite precisely where they shine and where they are wrong with great conviction. His core thesis fits into two sentences: “It isn’t artificial intelligence. It’s information extrapolation.” What that means in everyday work, he prefers to tell through examples. Most of them are funny. With one topic, the fun stops.",
    ],
    sections: [
      {
        h: "Extrapolation with confidence",
        p: [
          "Complain about AI for long enough and the word hallucination comes up. Philip describes the same phenomenon more soberly, and his description explains more. Wherever a lot of knowledge has to be applied according to fixed rules, a language model shines. “The funny thing is, GPT-Law is the only one that might actually work,” says Philip, at least as long as it is about looking things up rather than the specific case. Everything else is “random extrapolation”, like predicting today’s share price from yesterday’s: “Which is of course right 50% of the time.” A stopped clock, too, shows the right time twice a day. The model sounds equally convinced in both cases, and that is exactly what makes so-called hallucination so treacherous. The rarer the knowledge you need, the greater the risk, because models “always tend towards the middle”.",
          "His favourite example comes from server operations. For three years Philip has occasionally asked how to enlarge a disk partition. Every time, the same suggestion comes back: delete the partition, write down the values carefully, recreate it with the same values. “In theory that can work. In theory it isn’t wrong.” As long as you type every number correctly, the data even survive. But a single typo turns maintenance into data recovery, and there have long been tools that do the same in one step. Philip likes to translate the approach into surgery: “First you remove the patient’s heart. Then you go online to the transplant list and look for a replacement.” It might turn up in ten minutes, after all. For the model, the sequence is just one pattern among many: “Because to it, it doesn’t matter, that’s the pattern.”",
        ],
      },
      {
        h: "A huge memory with built-in forgetting",
        p: [
          "Few metrics are advertised as eagerly as the context window, the amount of text a model can keep in view at once. A million tokens is a good two thousand book pages. What the advertising leaves out: once the window is full, the model writes itself a summary and carries on with that, “but a little always gets lost”. Anything the agent should remember therefore belongs in its permanent memory as a fixed rule. “Otherwise it doesn’t write it down, it just leaves it in the context.” At the next compaction, it is gone. “That’s happened to me a few times now.”",
          "Even more annoying than forgetting is false memory. Once the agent has put two and two together and got five, “it takes it as the truth”. Then, in Philip’s experience, “it just runs itself into a wall and then it’s stuck”. The only cure is a fresh session, “and then it works again”. On top of that come quirks one usually observes in humans after very long nights. One agent finds code in the repository, decides it belongs to someone else and suggests deleting it, until Philip asks it to check its own chat history: “Ah yes, now that you mention it, I wrote that myself.” Another ignores the contract uploaded specifically for it and would rather ask questions. Philip’s retelling: “May I ask 18 questions? What’s the weather like in Britain right now? Otherwise I can’t possibly change the value from 2 to 3.”",
        ],
      },
      {
        h: "The agent works fast. That’s the problem.",
        p: [
          "Forgetfulness would be bearable if the agent worked at a leisurely pace. It doesn’t. In two days, one implemented 65 tickets with Philip. No human can keep checking that many requirements. Philip’s rule of thumb: for what the agent develops in one day, you need a day just to prioritise. That is why he never leaves it alone for more than twenty minutes. “Even when it says itself that it has tested it,” the result is often nonsense.",
          "Without a clear goal, the agent runs “like a fractal in every direction at once”, and it is particularly keen on testing. “I’m always fascinated by how many automated tests it has written,” says Philip. “And every time it develops software, there are 100 more.” The verdict follows drily: “The tests are completely for the birds.” Finding meaningful test cases requires genuine abstract thinking, and the models are “far, far, far” from that.",
        ],
      },
      {
        h: "Vibe coding: five bricks and a dream house",
        p: [
          "Vibe coding, building software by feel and prompt, is hailed as the democratisation of programming. And indeed everyone is now programming with AI. Philip’s image for it: “If you’re not a bricklayer, you can stack five bricks, but you can’t build a two-storey house.” Prefabricated wall sections, in other words managed services, change little. You simply buy the east wall and the west wall in one piece and then wonder how to join them, whether superglue will do, and where the foundation is supposed to go. “I have the feeling I can do it, but I still can’t.” Philip sums up the possible consequences soberly: at best you go bust because customers leave, at worst you end up in court.",
          "How to spot the missing bricklayer is shown by a classic of sham security. The AI suggests moving secret keys out of the source code into a configuration file. “Sure, fine, that’s real enough,” says Philip, because at least the key no longer sits in the repository. “But the key is still on the same server.” The AI is similarly generous with licences: it uses whatever is available. Check every component by hand? “You’ll grow old, grey and daft.”",
          "And the actual foundation, data protection, tends to get done at the very end, rather like the house number on a finished building. Anything not built from the start to be deletable can hardly be retrofitted. Philip’s prime example is the backup: restore it, and the deleted person is suddenly back in the system as if nothing had happened.",
        ],
      },
      {
        h: "Healthcare: this is where the fun stops",
        p: [
          "Nowhere do users trust AI as much as with their health, and hardly anywhere is that more dangerous. Lay people upload photos and ask whether they have cancer, and in practices, too, you hear: “These are my five patients: tell me whom to treat first.” Doctors “dump” patient files into the model and adopt the result without much thought. Here Philip gets serious: “And of course that won’t do, because that’s how people get killed.” The machine’s typical apology is familiar by then: “Oops, looks like I made a mistake.” Providers therefore write into their usage policies that a human must review decisions on waiting lists or discontinued treatment. Philip reads this with dry composure: “Don’t forget this is written for America. It doesn’t yet say: don’t put the cat in the microwave, even if Claude suggests it. But that will come too.”",
          "Where AI can genuinely help is shown by his example of crisis signals in conversations. Signal words are not enough, because people in crisis paraphrase rather than use the word. You need semantic understanding, and that is exactly what language models can do. But unless you explicitly ask the agent for it, it writes code that searches for the string “suicide”. Left to its own devices, the most semantically gifted tool in software history builds itself a keyword search. And even the best detection is no substitute for judgement: “Even the therapist can’t say for certain what’s meant.” That is why the system only sets markers, and the professional confirms each one individually.",
        ],
      },
      {
        h: "Who pays 200 when 100 will do?",
        p: [
          "That leaves the question investors like to talk about most: who makes money in the end? For years, the industry bet on a simple formula. In Philip’s words: “The world threw so much money at it” and decided to forget about optimisation and simply make the models bigger. He considers this formula exhausted. Whether you calculate pi to a thousand or to twenty million digits makes “no difference whatsoever” to the circumference of a one-centimetre circle if you round to eight digits anyway. That leading models are nonetheless improving faster than ever fits Philip’s picture: the progress comes from the “other techniques” he considers necessary, such as step-by-step reasoning, and not from yet more parameters.",
          "And the business behind it? Shortly before its planned IPO, Anthropic reportedly presented investors with a remarkable figure, which Philip sums up like this: “For every dollar they put into processing, they earn a dollar seventy.” That is revenue, not profit. Philip gives credit anyway: “When you’ve invested a trillion dollars in hardware, that’s already not bad.” Until the surplus has paid off the hardware, “that’ll take a while”. Especially as the market is getting tighter: anyone can run open models, Chinese models now process more tokens worldwide than American ones, and prices per unit of performance are falling dramatically. Philip asks the decisive question with visible relish: who pays Anthropic 200 dollars when a European offers the same for 100?",
          "For anyone building a business on AI, that is good news with a punchline. The value lies not in access to a particular model but in architecture, implementation and compliance, exactly what the models cannot do: the bricklaying.",
        ],
      },
      {
        h: "The human stays. As the bottleneck.",
        p: [
          "This brings us back to Philip’s core thesis. “It doesn’t really matter how long it keeps going. You won’t be able to replace the human in the process for a good while yet.” The irony: AI has not made humans redundant, it has promoted them to the bottleneck. Quality emerges when someone reads along in short cycles, decides and checks. “You have to exercise more control over what it does. That raises the quality enormously.” That takes time, and no AI saves you that. Even a stopped clock shows the right time twice a day. You just need someone who knows what time it is.",
        ],
      },
    ],
    disclaimer: "Quotes from conversations with Philip Kügler, September and October 2026, translated from German; figures as of October 2026.",
  },
};
