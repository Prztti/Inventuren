// Legal pages for the /new site (DE binding, EN translation; 中文 shows the English version).
// Entity facts: Inside Holding & Real Estate GmbH is the legal entity behind InVentures (David Brainin, 2026-09-23).
// Section shape: { id?, h, rows?: [[label, value, href?]], ps?: [text], list?: [text] }

const ENTITY = "Inside Holding & Real Estate GmbH";
const ADDRESS = "Garbergasse 14/7, 1060 Wien, Österreich";
const ADDRESS_EN = "Garbergasse 14/7, 1060 Vienna, Austria";
const MAIL = "info@inventures.at";
const PHONE = "+43 664 11 00 333";

export const LEGAL = {
  de: {
    back: "Zur Übersicht",
    other: { impressum: "Datenschutzerklärung", datenschutz: "Impressum" },
    impressum: {
      label: "Impressum",
      title: "Impressum",
      intro: `InVentures ist ein Joint Venture von David Brainin und Philip Kügler. Rechtsträger und Betreiber dieser Website ist die ${ENTITY}.`,
      sections: [
        { h: "Angaben gemäß § 5 ECG, § 14 UGB und § 25 MedienG", rows: [
          ["Firma", ENTITY],
          ["Rechtsform", "Gesellschaft mit beschränkter Haftung"],
          ["Sitz und Anschrift", ADDRESS],
          ["Firmenbuchnummer", "FN 342972 x"],
          ["Firmenbuchgericht", "Handelsgericht Wien"],
          ["UID-Nummer", "ATU65716433"],
          ["Geschäftsführer", "Mag. David Brainin"],
          ["Telefon", PHONE, "tel:+436641100333"],
          ["E-Mail", MAIL, `mailto:${MAIL}`],
        ] },
        { h: "Unternehmensgegenstand und Gewerbe", rows: [
          ["Unternehmensgegenstand", "Immobiliengeschäfte und Beteiligungen"],
          ["Gewerbeberechtigungen", "Handelsgewerbe und Handelsagent; Namhaftmachung von Personen, die an einem Vertragsabschluss über Immobilien interessiert sind, an einen Immobilienmakler"],
          ["Kammer", "Wirtschaftskammer Wien"],
          ["Gewerbebehörde", "Magistratisches Bezirksamt für den 6. und 7. Bezirk, Hermanngasse 24–26, 1070 Wien"],
          ["Gewerberecht", "Gewerbeordnung 1994, abrufbar unter ris.bka.gv.at", "https://www.ris.bka.gv.at"],
        ] },
        { h: "Offenlegung gemäß § 25 MedienG", rows: [
          ["Medieninhaber", `${ENTITY}, ${ADDRESS}`],
          ["Beteiligungsverhältnisse", "Mag. David Brainin, 100 %"],
          ["Grundlegende Richtung", "Information über die Leistungen von InVentures in den Bereichen Tech & AI sowie Real Estate & Hospitality und Fachbeiträge zu diesen Themen."],
        ] },
        { h: "Verbraucherstreitbeilegung", ps: [
          "Wir sind weder verpflichtet noch bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
        ] },
        { id: "referenzen", h: "Hinweis zu Referenzen, Track Record und Marken", ps: [
          "Die auf dieser Website genannten Unternehmen, Institutionen, Projekte und Kennzahlen beschreiben die berufliche Erfahrung der Partner David Brainin und Philip Kügler. Erfasst sind Organisationen, an denen die Partner maßgeblich beteiligt waren oder in denen sie Führungspositionen innehatten, sowie Projekte und Kunden, die sie unmittelbar geleitet oder betreut haben – innerhalb eigener oder fremder Organisationen, als Angestellte oder als Auftragnehmer, auch vor Gründung von InVentures.",
          `Die Nennung bedeutet nicht, dass diese Organisationen Kunden der ${ENTITY} oder von InVentures sind oder waren, und bringt keine Empfehlung, Partnerschaft oder Billigung durch sie zum Ausdruck. Kennzahlen beziehen sich, soweit nicht anders angegeben, auf die berufliche Tätigkeit der jeweiligen Partner insgesamt und nicht ausschließlich auf InVentures.`,
          "Marken, Logos und Unternehmensnamen sind Eigentum der jeweiligen Inhaber und werden ausschließlich zur Beschreibung dieser Tätigkeiten verwendet.",
        ] },
        { h: "Haftung für Inhalte und Links", ps: [
          "Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für Richtigkeit, Vollständigkeit und Aktualität übernehmen wir keine Gewähr. Fachartikel und Marktberichte geben den Stand zum jeweiligen Datum wieder und sind keine Rechts-, Steuer- oder Anlageberatung.",
          "Diese Website enthält Links zu Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für diese Inhalte ist der jeweilige Anbieter verantwortlich. Werden uns Rechtsverletzungen bekannt, entfernen wir die betreffenden Links umgehend.",
        ] },
        { h: "Urheberrecht", ps: [
          "Texte, Grafiken und Bilder dieser Website sind urheberrechtlich geschützt. Jede Verwertung außerhalb der Grenzen des Urheberrechts bedarf der schriftlichen Zustimmung der Rechteinhaber.",
        ] },
      ],
    },
    datenschutz: {
      label: "Datenschutz",
      title: "Datenschutzerklärung",
      stand: "Stand: September 2026",
      intro: "Diese Website ist so gebaut, dass möglichst wenige personenbezogene Daten anfallen: keine Cookies, keine Analyse- oder Marketingdienste, keine eingebetteten Inhalte von Drittanbietern. Schriften und Bilder werden von unserem eigenen Server geladen.",
      sections: [
        { h: "1. Verantwortlicher", rows: [
          ["Verantwortlicher", ENTITY],
          ["Anschrift", ADDRESS],
          ["E-Mail", MAIL, `mailto:${MAIL}`],
          ["Telefon", PHONE, "tel:+436641100333"],
        ], ps: [`InVentures ist ein Joint Venture von David Brainin und Philip Kügler. Datenschutzrechtlich verantwortlich ist die ${ENTITY}.`] },
        { h: "2. Hosting und Server-Logfiles", ps: [
          "Diese Website wird bei Vercel Inc., USA, gehostet. Beim Aufruf verarbeitet Vercel technisch notwendige Daten – insbesondere IP-Adresse, Datum und Uhrzeit, aufgerufene Seite, Referrer sowie Browser- und Geräteinformationen –, um die Website auszuliefern und vor Angriffen zu schützen.",
          "Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO; unser berechtigtes Interesse liegt im sicheren und stabilen Betrieb der Website. Vercel verarbeitet die Daten als Auftragsverarbeiter. Die Übermittlung in die USA stützt sich auf den Angemessenheitsbeschluss der Europäischen Kommission zum EU-US Data Privacy Framework (Art. 45 DSGVO), unter dem Vercel zertifiziert ist. Protokolldaten werden nur so lange gespeichert, wie es für diese Zwecke erforderlich ist.",
        ] },
        { h: "3. Kontaktformular und E-Mail", ps: [
          "Wenn Sie uns per E-Mail oder über das Kontaktformular schreiben, verarbeiten wir Ihre Angaben (Name, Unternehmen, E-Mail-Adresse, Thema, Nachricht), um Ihre Anfrage zu beantworten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) oder, bei allgemeinen Anfragen, Art. 6 Abs. 1 lit. f DSGVO.",
          "Das Formular übermittelt Ihre Angaben verschlüsselt an unseren Server bei Vercel. Solange der automatische Versand nicht eingerichtet ist, werden sie dort nicht gespeichert; stattdessen öffnet sich eine vorbereitete E-Mail in Ihrem E-Mail-Programm, die Sie selbst an info@inventures.at senden.",
          "Wir speichern Anfragen, bis sie erledigt sind. Entsteht daraus kein Auftrag, löschen wir sie spätestens nach drei Jahren, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.",
        ] },
        { h: "4. Cookies und lokale Speicherung (§ 165 Abs. 3 TKG 2021)", ps: [
          "Diese Website setzt keine Cookies. Im lokalen Speicher Ihres Browsers (localStorage) wird ausschließlich die von Ihnen gewählte Sprache abgelegt (Eintrag „inventures-lang“), damit die Website beim nächsten Besuch in dieser Sprache erscheint. Diese Speicherung ist für die von Ihnen ausdrücklich gewählte Funktion unbedingt erforderlich und daher ohne Einwilligung zulässig. Sie können den Eintrag jederzeit über die Einstellungen Ihres Browsers löschen.",
        ] },
        { h: "5. Schriftarten, Bilder und externe Links", ps: [
          "Schriftarten, Bilder und Logos werden von unserem eigenen Server geladen. Es werden keine Daten an Google Fonts oder andere Drittanbieter übertragen.",
          "Unsere Insights verlinken auf Beiträge anderer Anbieter. Erst wenn Sie einen solchen Link anklicken, verlassen Sie unsere Website; dann gelten die Datenschutzbestimmungen des jeweiligen Anbieters.",
        ] },
        { h: "6. Ihre Rechte", list: [
          "Auskunft (Art. 15 DSGVO)",
          "Berichtigung (Art. 16 DSGVO)",
          "Löschung (Art. 17 DSGVO)",
          "Einschränkung der Verarbeitung (Art. 18 DSGVO)",
          "Datenübertragbarkeit (Art. 20 DSGVO)",
          "Widerspruch gegen Verarbeitungen auf Grundlage berechtigter Interessen (Art. 21 DSGVO)",
          "Widerruf einer Einwilligung mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO)",
        ], ps: [`Wenden Sie sich dafür an ${MAIL}.`] },
        { h: "7. Beschwerderecht", ps: [
          "Sie können sich bei der Österreichischen Datenschutzbehörde beschweren, wenn Sie meinen, dass die Verarbeitung Ihrer Daten gegen die DSGVO verstößt: Barichgasse 40–42, 1030 Wien, dsb.gv.at.",
        ] },
        { h: "8. Keine automatisierte Entscheidungsfindung", ps: [
          "Wir treffen keine ausschließlich automatisierten Entscheidungen einschließlich Profiling im Sinne von Art. 22 DSGVO.",
        ] },
      ],
    },
  },
  en: {
    back: "Back to overview",
    note: "Translation for convenience. In case of doubt, the German version applies.",
    other: { impressum: "Privacy policy", datenschutz: "Legal notice" },
    impressum: {
      label: "Legal notice",
      title: "Legal notice",
      intro: `InVentures is a joint venture of David Brainin and Philip Kügler. The legal entity operating InVentures and this website is ${ENTITY}.`,
      sections: [
        { h: "Information pursuant to § 5 ECG, § 14 UGB and § 25 MedienG (Austria)", rows: [
          ["Company", ENTITY],
          ["Legal form", "Limited liability company (GmbH)"],
          ["Registered office and address", ADDRESS_EN],
          ["Company register number", "FN 342972 x"],
          ["Register court", "Commercial Court of Vienna (Handelsgericht Wien)"],
          ["VAT number", "ATU65716433"],
          ["Managing director", "Mag. David Brainin"],
          ["Phone", PHONE, "tel:+436641100333"],
          ["E-mail", MAIL, `mailto:${MAIL}`],
        ] },
        { h: "Business purpose and trade licences", rows: [
          ["Business purpose", "Real estate transactions and shareholdings"],
          ["Trade licences", "Trading and commercial agency; referral of persons interested in a real estate transaction to a licensed estate agent"],
          ["Chamber", "Vienna Economic Chamber (Wirtschaftskammer Wien)"],
          ["Trade authority", "Municipal District Office for the 6th and 7th districts, Hermanngasse 24–26, 1070 Vienna"],
          ["Trade law", "Austrian Trade Regulation Act 1994 (Gewerbeordnung), available at ris.bka.gv.at", "https://www.ris.bka.gv.at"],
        ] },
        { h: "Disclosure pursuant to § 25 MedienG", rows: [
          ["Media owner", `${ENTITY}, ${ADDRESS_EN}`],
          ["Ownership", "Mag. David Brainin, 100%"],
          ["Editorial line", "Information about the services of InVentures in Tech & AI and Real Estate & Hospitality, and articles on these topics."],
        ] },
        { h: "Consumer dispute resolution", ps: [
          "We are neither obliged nor willing to take part in dispute resolution proceedings before a consumer arbitration board.",
        ] },
        { id: "referenzen", h: "Note on references, track record and trademarks", ps: [
          "The companies, institutions, projects and figures named on this website describe the professional experience of the partners David Brainin and Philip Kügler. They include organisations in which the partners held a significant stake or a leadership position, and projects and clients they directly led or served — within their own or third-party organisations, as employees or as contractors, including before InVentures was founded.",
          `Naming an organisation does not mean that it is or was a client of ${ENTITY} or of InVentures, and does not imply any recommendation, partnership or endorsement. Unless stated otherwise, figures refer to the partners' professional work as a whole and not only to InVentures.`,
          "Trademarks, logos and company names are the property of their respective owners and are used solely to describe this work.",
        ] },
        { h: "Liability for content and links", ps: [
          "The content of this website has been prepared with great care. We accept no liability for its accuracy, completeness or timeliness. Articles and market reports reflect the state of knowledge on their date and are not legal, tax or investment advice.",
          "This website contains links to third-party websites whose content we do not control. The respective provider is responsible for that content. If we become aware of any infringement, we will remove the link without delay.",
        ] },
        { h: "Copyright", ps: [
          "Texts, graphics and images on this website are protected by copyright. Any use beyond the limits of copyright law requires the written consent of the rights holder.",
        ] },
      ],
    },
    datenschutz: {
      label: "Privacy",
      title: "Privacy policy",
      stand: "As of September 2026",
      intro: "This website is built to collect as little personal data as possible: no cookies, no analytics or marketing services, no embedded third-party content. Fonts and images are served from our own server.",
      sections: [
        { h: "1. Controller", rows: [
          ["Controller", ENTITY],
          ["Address", ADDRESS_EN],
          ["E-mail", MAIL, `mailto:${MAIL}`],
          ["Phone", PHONE, "tel:+436641100333"],
        ], ps: [`InVentures is a joint venture of David Brainin and Philip Kügler. The controller under data protection law is ${ENTITY}.`] },
        { h: "2. Hosting and server log files", ps: [
          "This website is hosted by Vercel Inc., USA. When you visit it, Vercel processes technically necessary data — in particular IP address, date and time, the page requested, referrer and browser and device information — to deliver the website and protect it against attacks.",
          "The legal basis is Art. 6(1)(f) GDPR; our legitimate interest is the secure and stable operation of the website. Vercel acts as our processor. Transfers to the USA rely on the European Commission's adequacy decision for the EU-U.S. Data Privacy Framework (Art. 45 GDPR), under which Vercel is certified. Log data is kept only as long as necessary for these purposes.",
        ] },
        { h: "3. Contact form and e-mail", ps: [
          "If you write to us by e-mail or via the contact form, we process your details (name, company, e-mail address, topic, message) to answer your enquiry. The legal basis is Art. 6(1)(b) GDPR (pre-contractual steps) or, for general enquiries, Art. 6(1)(f) GDPR.",
          "The form sends your details in encrypted form to our server at Vercel. As long as automatic sending has not been set up, they are not stored there; instead a prepared e-mail opens in your e-mail program, which you send to info@inventures.at yourself.",
          "We keep enquiries until they have been dealt with. If no engagement follows, we delete them after three years at the latest, unless statutory retention obligations apply.",
        ] },
        { h: "4. Cookies and local storage (§ 165(3) TKG 2021)", ps: [
          "This website does not set cookies. Your browser's local storage (localStorage) only keeps the language you have chosen (entry \"inventures-lang\"), so that the website opens in that language on your next visit. This is strictly necessary for the function you explicitly requested and therefore permitted without consent. You can delete the entry at any time in your browser settings.",
        ] },
        { h: "5. Fonts, images and external links", ps: [
          "Fonts, images and logos are served from our own server. No data is transferred to Google Fonts or other third parties.",
          "Our insights link to articles by other publishers. Only when you click such a link do you leave our website; the privacy policy of that publisher then applies.",
        ] },
        { h: "6. Your rights", list: [
          "Access (Art. 15 GDPR)",
          "Rectification (Art. 16 GDPR)",
          "Erasure (Art. 17 GDPR)",
          "Restriction of processing (Art. 18 GDPR)",
          "Data portability (Art. 20 GDPR)",
          "Objection to processing based on legitimate interests (Art. 21 GDPR)",
          "Withdrawal of consent with effect for the future (Art. 7(3) GDPR)",
        ], ps: [`To exercise these rights, contact ${MAIL}.`] },
        { h: "7. Right to lodge a complaint", ps: [
          "You can lodge a complaint with the Austrian Data Protection Authority if you believe that the processing of your data infringes the GDPR: Barichgasse 40–42, 1030 Vienna, dsb.gv.at.",
        ] },
        { h: "8. No automated decision-making", ps: [
          "We do not make decisions based solely on automated processing, including profiling, within the meaning of Art. 22 GDPR.",
        ] },
      ],
    },
  },
};
