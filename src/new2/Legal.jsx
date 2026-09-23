import { Link } from "react-router-dom";
import { C, F, T, LABEL } from "./tokens";
import { Panel, Container, Rich } from "./ui";
import { LEGAL } from "./legalText";

// Impressum / Datenschutz inside /new. German is binding; EN (and 中文) show the English version.
export default function LegalPage({ kind, lang }) {
  const L = lang === "de" ? LEGAL.de : LEGAL.en;
  const d = L[kind];
  const other = kind === "impressum" ? "/datenschutz" : "/impressum";
  return (
    <main>
      <Panel first tone="white" innerStyle={{ padding: "clamp(120px, 14vw, 168px) 0 clamp(72px, 9vw, 112px)" }}>
        <Container style={{ maxWidth: 860 }}>
          <Link to="/" className="back-link" style={{ fontFamily: F, fontSize: T.sm, fontWeight: 500, color: C.dim, textDecoration: "none" }}>← {L.back}</Link>
          <div style={{ ...LABEL, color: C.silverInk, margin: "40px 0 16px" }}>{d.label}</div>
          <h1 className="t-h2" style={{ margin: "0 0 20px" }}>{d.title}</h1>
          {d.stand && <p className="t-small" style={{ color: C.muted, margin: "0 0 8px" }}>{d.stand}</p>}
          {L.note && <p className="t-small" style={{ color: C.muted, margin: "0 0 8px" }}>{L.note}</p>}
          <p className="t-lead" style={{ margin: "24px 0 48px" }}><Rich text={d.intro} /></p>
          {d.sections.map((s) => (
            <section key={s.h} id={s.id} className="legal-sec" style={{ padding: "28px 0", borderTop: `1px solid ${C.line}`, scrollMarginTop: 96 }}>
              <h2 className="t-h3" style={{ margin: "0 0 16px" }}>{s.h}</h2>
              {s.rows && (
                <dl className="legal-rows" style={{ margin: s.ps ? "0 0 16px" : 0 }}>
                  {s.rows.map(([k, v, href]) => (
                    <div key={k} className="legal-row">
                      <dt className="t-small" style={{ color: C.muted, fontWeight: 600 }}>{k}</dt>
                      <dd className="t-body" style={{ margin: 0 }}>{href ? <a href={href} className="u-link" style={{ color: C.dark, textDecoration: "none" }}>{v}</a> : <Rich text={v} />}</dd>
                    </div>
                  ))}
                </dl>
              )}
              {s.list && <ul className="t-body" style={{ margin: "0 0 16px", paddingLeft: 20 }}>{s.list.map((x) => <li key={x} style={{ marginBottom: 6 }}>{x}</li>)}</ul>}
              {s.ps && s.ps.map((x) => <p key={x.slice(0, 32)} className="t-body" style={{ color: C.text, margin: "0 0 12px" }}><Rich text={x} /></p>)}
            </section>
          ))}
          <div style={{ marginTop: 40, paddingTop: 24, borderTop: `1px solid ${C.line}` }}>
            <Link to={other} className="u-link" style={{ fontFamily: F, fontSize: T.sm, fontWeight: 600, color: C.dark, textDecoration: "none" }}>{L.other[kind]} →</Link>
          </div>
        </Container>
      </Panel>
    </main>
  );
}
