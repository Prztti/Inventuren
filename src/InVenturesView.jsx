import { useState } from "react";

const F = "'DM Sans',sans-serif";
const gold = "#9A7B42";
const goldText = "#B8924E";
const goldSoft = "rgba(154,123,66,0.1)";
const dark = "#1A1A1A";
const dim = "#6B7280";

const articleEN = {
  title: "The Convergence Play: Why AI and Real Estate Are Becoming One Industry",
  byline: "InVentures Advisory — March 2026",
  body: [
    {
      type: "p",
      text: "Real estate has always been a data business. It just didn't look like one. The value of every asset — residential or commercial, trophy or distressed — has always been determined by information: where people want to live, where companies want to operate, where capital flows, where infrastructure is heading. The building is the physical residual of an underlying data decision.",
    },
    {
      type: "pullquote",
      text: "The building is the physical residual of an underlying data decision. What changes now is that we can finally compute it.",
    },
    {
      type: "p",
      text: "What changes now is that we can finally compute it. AI is not a new tool for the real estate industry — it is the mechanism by which real estate finally becomes legible as a data asset. Location intelligence models can now predict micro-market price movements 18 months forward with meaningful accuracy. Automated due diligence engines can process a data room in hours, not weeks. Predictive maintenance systems extend asset lives and eliminate the reactive cost spirals that erode returns. These are not incremental improvements. They are structural reconfigurations of where value is created and captured.",
    },
    {
      type: "p",
      text: "The firms that see this convergence now are building 10-year moats. Not because AI is a competitive advantage in the conventional sense — it is becoming table stakes — but because the institutional knowledge of how to apply AI specifically to real estate, across transaction structuring, asset management, capital allocation and regulatory compliance, takes years to build. The window to build that expertise from the inside out, rather than acquire it in haste, is closing. The early movers are not the loudest; they are the quietest, because they are busy executing.",
    },
    {
      type: "pullquote",
      text: "The firms that see this convergence now are building 10-year moats. The early movers are not the loudest — they are busy executing.",
    },
    {
      type: "p",
      text: "InVentures sits at this intersection deliberately — not by accident. Since establishing the international real estate practice at Lansky Ganzger + Partner in 2009 through to structuring telco data platform mandates with A1, Orange and Huawei from 2015 onwards, the through-line has always been the same: complex assets, information asymmetry and the conviction that whoever controls the data architecture controls the deal. The launch of our AI Advisory practice in 2023 was not a pivot. It was a recognition that the industries we have operated in for 20 years — real estate, telecom, legal and finance — had arrived at a common frontier.",
    },
    {
      type: "p",
      text: "The EU AI Act creates both a compliance burden and a competitive filter. The firms that treat it as the former will spend resources defensively. The firms that treat it as the latter will use it to raise the cost of entry for competitors. The same pattern played out with GDPR in 2018. Those who built genuine compliance capability early found it became a differentiator in regulated markets, particularly in MENA and Central Europe, where institutional counterparties now demand documented AI governance frameworks before they engage.",
    },
    {
      type: "p",
      text: "The convergence thesis is not speculative. The capital is already moving. Gulf sovereign funds are actively building AI-enabled real estate platforms. European PropTech valuations are increasingly correlated with data-layer quality rather than transaction volume. Family offices across Austria and Germany are reallocating into data-asset-adjacent real estate strategies. The question is not whether AI and real estate will merge. They are merging. The question is who will be positioned to advise — and execute — at that intersection when the institutional mandates arrive at scale.",
    },
    {
      type: "cta",
      text: "If you're building or investing at this intersection, we'd like to hear from you.",
    },
  ],
};

const articleDE = {
  title: "Die Konvergenz-These: Warum KI und Immobilien zu einer Industrie verschmelzen",
  byline: "InVentures Advisory — März 2026",
  body: [
    {
      type: "p",
      text: "Immobilien waren schon immer ein Datengeschäft — es sah nur nicht so aus. Der Wert jedes Assets, ob Wohnimmobilie oder Bürogebäude, Trophy oder Distressed, wurde stets durch Information bestimmt: wo Menschen leben wollen, wo Unternehmen operieren, wohin Kapital fließt, wohin Infrastruktur sich entwickelt. Das Gebäude ist das physische Residuum einer zugrundeliegenden Datenentscheidung.",
    },
    {
      type: "pullquote",
      text: "Das Gebäude ist das physische Residuum einer Datenentscheidung. Was sich ändert: Wir können es jetzt berechnen.",
    },
    {
      type: "p",
      text: "Was sich jetzt ändert: Wir können es endlich berechnen. KI ist kein neues Werkzeug für die Immobilienbranche — sie ist der Mechanismus, durch den Immobilien als Daten-Asset erstmals lesbar werden. Location-Intelligence-Modelle sagen Mikro-Markt-Preisentwicklungen 18 Monate im Voraus mit signifikanter Genauigkeit vorher. Automatisierte Due-Diligence-Systeme verarbeiten Datenräume in Stunden statt in Wochen. Predictive-Maintenance-Systeme verlängern Asset-Lebenszyklen und eliminieren reaktive Kostenspiralen.",
    },
    {
      type: "p",
      text: "Unternehmen, die diese Konvergenz jetzt erkennen, bauen 10-Jahres-Burggräben auf. Nicht weil KI ein konventioneller Wettbewerbsvorteil ist — sie wird zum Mindeststandard —, sondern weil das institutionelle Wissen, wie man KI spezifisch auf Immobilien anwendet, über Transaktionsstrukturierung, Asset-Management und regulatorische Compliance, Jahre braucht. Das Fenster, diese Expertise organisch aufzubauen statt sie hastig einzukaufen, schließt sich gerade.",
    },
    {
      type: "pullquote",
      text: "Wer die Datenarchitektur kontrolliert, kontrolliert den Deal — das war schon immer so.",
    },
    {
      type: "p",
      text: "InVentures steht bewusst an dieser Schnittstelle — nicht zufällig. Von der Gründung der International Real Estate Practice bei Lansky Ganzger + Partner 2009 bis zur Strukturierung von Telco-Datenplattform-Mandaten mit A1, Orange und Huawei ab 2015 war die Leitlinie stets dieselbe: komplexe Assets, Informationsasymmetrie und die Überzeugung, dass derjenige den Deal kontrolliert, der die Datenarchitektur kontrolliert.",
    },
    {
      type: "p",
      text: "Der EU AI Act schafft sowohl eine Compliance-Belastung als auch ein Wettbewerbs-Filter. Wer ihn als ersteres behandelt, agiert defensiv. Wer ihn als letzteren behandelt, nutzt ihn, um die Eintrittskosten für Wettbewerber zu erhöhen. Dasselbe Muster gab es mit der DSGVO 2018. Die frühen Mover fanden, dass echte Compliance-Kompetenz zum Differenzierungsmerkmal wurde — besonders in MENA und Zentraleuropa.",
    },
    {
      type: "cta",
      text: "Wenn Sie an dieser Schnittstelle aufbauen oder investieren, würden wir gerne von Ihnen hören.",
    },
  ],
};

function PullQuote({ text }) {
  return (
    <div style={{
      borderLeft: `3px solid ${gold}`,
      paddingLeft: 24, margin: "32px 0",
      position: "relative",
    }}>
      <p style={{
        fontFamily: F, fontSize: "clamp(16px,2vw,20px)", fontWeight: 300,
        color: dark, lineHeight: 1.6, fontStyle: "italic",
        letterSpacing: "-0.01em",
      }}>
        "{text}"
      </p>
    </div>
  );
}

function SubscribeForm({ lang }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const placeholder = lang === "de" ? "Ihre E-Mail" : lang === "cn" ? "您的邮箱" : "your@email.com";
  const btnText = lang === "de" ? "Abonnieren" : lang === "cn" ? "订阅" : "Subscribe";
  const successText = lang === "de" ? "Danke — Sie sind jetzt angemeldet." : lang === "cn" ? "感谢订阅。" : "Thank you — you're subscribed.";
  const labelText = lang === "de" ? "InVentures View abonnieren" : lang === "cn" ? "订阅 InVentures View" : "Subscribe to InVentures View";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const body = new URLSearchParams({ "form-name": "newsletter", email }).toString();
      await fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body });
      setDone(true);
    } catch {
      setDone(true);
    }
    setSubmitting(false);
  };

  return (
    <div style={{
      padding: "28px 32px",
      background: goldSoft,
      border: `1px solid ${gold}33`,
      marginTop: 40,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
        <div style={{ width: 16, height: 1, background: gold }} />
        <span style={{ fontFamily: F, fontSize: 10, letterSpacing: 2.5, textTransform: "uppercase", color: goldText, fontWeight: 600 }}>InVentures View</span>
      </div>
      <p style={{ fontFamily: F, fontSize: 13, color: dim, marginBottom: 16, lineHeight: 1.6 }}>
        {labelText}
      </p>
      {done ? (
        <p style={{ fontFamily: F, fontSize: 14, color: goldText, fontWeight: 500 }}>{successText}</p>
      ) : (
        <form
          name="newsletter"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
          style={{ display: "flex", gap: 8, flexWrap: "wrap" }}
        >
          <input type="hidden" name="form-name" value="newsletter" />
          <input
            type="email" name="email" required
            value={email} onChange={e => setEmail(e.target.value)}
            placeholder={placeholder}
            style={{
              fontFamily: F, fontSize: 13, padding: "10px 14px",
              border: "1px solid #E0DDD8", outline: "none",
              background: "#fff", flex: "1 1 200px", minWidth: 0,
            }}
          />
          <button
            type="submit" disabled={submitting}
            style={{
              fontFamily: F, fontSize: 10, letterSpacing: 1.5,
              textTransform: "uppercase", fontWeight: 700,
              padding: "10px 24px", background: gold, color: "#fff",
              border: "none", cursor: submitting ? "not-allowed" : "pointer",
              opacity: submitting ? 0.7 : 1,
              whiteSpace: "nowrap",
            }}
          >
            {submitting ? "···" : btnText}
          </button>
        </form>
      )}
    </div>
  );
}

export default function InVenturesView({ lang = "en" }) {
  const article = lang === "de" ? articleDE : articleEN;

  const downloadText = lang === "de" ? "PDF herunterladen" : lang === "cn" ? "下载PDF" : "Download PDF";
  const viewLabel = lang === "de" ? "InVentures View" : "InVentures View";
  const issueText = lang === "de" ? "Ausgabe März 2026" : lang === "cn" ? "2026年3月刊" : "Issue: March 2026";

  return (
    <section style={{
      background: "linear-gradient(170deg, #F2F0EB 0%, #EDEBE6 50%, #F5F4F1 100%)",
      padding: "88px 0",
      position: "relative", overflow: "hidden",
    }}>
      {/* Decorative line */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 3,
        background: `linear-gradient(90deg, transparent, ${gold}88, transparent)`,
      }} />

      <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 40px" }}>
        {/* Meta header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12, marginBottom: 48 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 20, height: 1, background: gold }} />
            <span style={{ fontFamily: F, fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: goldText, fontWeight: 600 }}>{viewLabel}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <span style={{ fontFamily: F, fontSize: 11, color: "#9CA3AF", letterSpacing: 0.5 }}>{issueText}</span>
            <a
              href="#"
              style={{
                fontFamily: F, fontSize: 10, letterSpacing: 1.5, textTransform: "uppercase",
                color: goldText, textDecoration: "none", fontWeight: 600,
                padding: "6px 14px", border: `1px solid ${gold}44`,
                transition: "all 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = goldSoft; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
            >
              ↓ {downloadText}
            </a>
          </div>
        </div>

        {/* Article title */}
        <h2 style={{
          fontFamily: F,
          fontSize: "clamp(24px,3.5vw,38px)",
          fontWeight: 300, color: dark,
          lineHeight: 1.25, letterSpacing: "-0.025em",
          marginBottom: 16,
        }}>
          {article.title}
        </h2>

        {/* Byline */}
        <p style={{
          fontFamily: F, fontSize: 12, color: dim,
          letterSpacing: 0.5, marginBottom: 44,
          paddingBottom: 20, borderBottom: "1px solid rgba(0,0,0,0.08)",
        }}>
          {article.byline}
        </p>

        {/* Article body */}
        <div>
          {article.body.map((block, i) => {
            if (block.type === "p") {
              return (
                <p key={i} style={{
                  fontFamily: F, fontSize: 15, color: "#374151",
                  lineHeight: 1.85, marginBottom: 22,
                  letterSpacing: "0.01em",
                }}>
                  {block.text}
                </p>
              );
            }
            if (block.type === "pullquote") {
              return <PullQuote key={i} text={block.text} />;
            }
            if (block.type === "cta") {
              return (
                <div key={i} style={{
                  marginTop: 40, padding: "24px 28px",
                  background: "#fff",
                  border: `1px solid ${gold}33`,
                  borderLeft: `3px solid ${gold}`,
                }}>
                  <p style={{
                    fontFamily: F, fontSize: 15, color: dark,
                    lineHeight: 1.6, margin: 0, fontWeight: 500,
                  }}>
                    {block.text}
                  </p>
                  <a
                    href="#kontakt"
                    style={{
                      fontFamily: F, fontSize: 11, letterSpacing: 1.5,
                      textTransform: "uppercase", color: goldText,
                      fontWeight: 700, textDecoration: "none",
                      display: "inline-block", marginTop: 14,
                    }}
                  >
                    {lang === "de" ? "Kontakt aufnehmen →" : lang === "cn" ? "联系我们 →" : "Get in touch →"}
                  </a>
                </div>
              );
            }
            return null;
          })}
        </div>

        {/* Subscribe */}
        <SubscribeForm lang={lang} />
      </div>
    </section>
  );
}
