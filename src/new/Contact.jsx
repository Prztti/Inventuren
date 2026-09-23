import { useState } from "react";
import { C, F } from "./tokens";
import { Reveal, Panel, Container, Eyebrow, H2, Lead } from "./ui";

const MAIL = "info@inventures.at";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function mailtoHref(form, topics) {
  const subject = `Anfrage inventures.at — ${form.topic || topics[topics.length - 1]}`;
  const body = [
    form.message,
    "",
    "—",
    form.name,
    form.company,
    form.email,
  ].filter((x, i) => i < 3 || x).join("\n");
  return `mailto:${MAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

// Success is shown only when /api/contact answers {ok:true}. Anything else falls back to a
// prepared e-mail, so no enquiry is silently lost.
export function ContactForm({ l, accent }) {
  const [form, setForm] = useState({ name: "", company: "", email: "", topic: "", message: "", website: "" });
  const [state, setState] = useState("idle"); // idle | sending | sent | fallback | invalid
  const set = (e) => { setForm({ ...form, [e.target.name]: e.target.value }); if (state === "invalid") setState("idle"); };

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !EMAIL_RE.test(form.email.trim())) { setState("invalid"); return; }
    setState("sending");
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 12000);
    try {
      const res = await fetch("/api/contact", { method: "POST", signal: ctrl.signal, headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(form) });
      const isJson = (res.headers.get("content-type") || "").includes("application/json");
      const data = isJson ? await res.json() : null;
      setState(res.ok && data && data.ok === true ? "sent" : "fallback");
    } catch {
      setState("fallback");
    } finally {
      clearTimeout(timer);
    }
  };

  if (state === "sent") {
    return (
      <div role="status" style={{ padding: "40px 0", borderTop: `1px solid ${C.line}` }}>
        <div aria-hidden style={{ width: 46, height: 46, borderRadius: "50%", border: `1.5px solid ${accent}`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 0 18px", color: accent, fontSize: 20 }}>✓</div>
        <p style={{ fontFamily: F, fontSize: 20, fontWeight: 300, color: C.dark, margin: 0 }}>{l.success}</p>
      </div>
    );
  }

  if (state === "fallback") {
    return (
      <div role="alert" style={{ padding: "32px 0", borderTop: `2px solid ${C.gold}` }}>
        <p style={{ fontFamily: F, fontSize: 16, fontWeight: 600, color: C.dark, margin: "0 0 8px" }}>{l.fallbackTitle}</p>
        <p style={{ fontFamily: F, fontSize: 14, color: C.dim, lineHeight: 1.6, margin: "0 0 18px" }}>{l.fallbackText}</p>
        <a href={mailtoHref(form, l.topics)} className="btn" style={{ display: "inline-flex", gap: 10, fontFamily: F, fontSize: 14, fontWeight: 600, padding: "15px 28px", borderRadius: 999, background: C.dark, color: "#fff", textDecoration: "none" }}>{l.fallbackBtn} <span aria-hidden className="arrow">→</span></a>
        <p style={{ fontFamily: F, fontSize: 13, color: C.dim, margin: "14px 0 0" }}>{l.fallbackOr} <a href={`mailto:${MAIL}`} style={{ color: C.dark }}>{MAIL}</a></p>
      </div>
    );
  }

  const input = { width: "100%", fontFamily: F, fontSize: 17, color: C.dark, background: "transparent", border: "none", borderBottom: "1px solid rgba(0,0,0,0.18)", padding: "10px 0 12px", borderRadius: 0, appearance: "none" };
  const label = { fontFamily: F, fontSize: 12, letterSpacing: 1.4, textTransform: "uppercase", color: C.muted, display: "block", marginBottom: 2, fontWeight: 600 };
  const req = <span style={{ color: C.goldDeep }}> *</span>;

  return (
    <form onSubmit={submit} noValidate className="cform" style={{ display: "flex", flexDirection: "column", gap: 26 }}>
      <div aria-hidden style={{ position: "absolute", left: -10000, width: 1, height: 1, overflow: "hidden" }}>
        <label>Website <input name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={set} /></label>
      </div>
      <div className="split-2 tight">
        <div><label htmlFor="cf-name" style={label}>{l.name}{req}</label><input id="cf-name" name="name" required autoComplete="name" value={form.name} onChange={set} placeholder={l.namePh} style={input} /></div>
        <div><label htmlFor="cf-company" style={label}>{l.company}</label><input id="cf-company" name="company" autoComplete="organization" value={form.company} onChange={set} placeholder={l.companyPh} style={input} /></div>
      </div>
      <div className="split-2 tight">
        <div><label htmlFor="cf-email" style={label}>{l.email}{req}</label><input id="cf-email" name="email" type="email" required autoComplete="email" value={form.email} onChange={set} placeholder={l.emailPh} style={input} /></div>
        <div>
          <label htmlFor="cf-topic" style={label}>{l.topic}</label>
          <select id="cf-topic" name="topic" value={form.topic} onChange={set} style={{ ...input, cursor: "pointer" }}>
            <option value="">—</option>
            {l.topics.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>
      </div>
      <div><label htmlFor="cf-message" style={label}>{l.message}</label><textarea id="cf-message" name="message" rows={4} value={form.message} onChange={set} placeholder={l.messagePh} style={{ ...input, resize: "vertical", lineHeight: 1.6 }} /></div>
      {state === "invalid" && <p role="alert" style={{ fontFamily: F, fontSize: 13, color: "#B42318", margin: 0 }}>{l.required}</p>}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 14 }}>
        <button type="submit" disabled={state === "sending"} className="btn" style={{ fontFamily: F, fontSize: 14, fontWeight: 600, padding: "15px 30px", borderRadius: 999, background: state === "sending" ? C.muted : C.dark, color: "#fff", border: "none", cursor: state === "sending" ? "wait" : "pointer", display: "inline-flex", gap: 10 }}>
          {state === "sending" ? l.sending : l.submit}{state !== "sending" && <span aria-hidden className="arrow">→</span>}
        </button>
        <span style={{ fontFamily: F, fontSize: 12, color: C.muted, maxWidth: 300, lineHeight: 1.5 }}>{l.privacy} <a href="/datenschutz" style={{ color: C.dim }}>{l.privacyLink}</a>.</span>
      </div>
    </form>
  );
}

export function ContactSection({ t, tc, ch }) {
  const c = t.contact;
  const rows = [
    { k: c.web, v: "inventures.at", h: "https://inventures.at" },
    { k: c.mail, v: MAIL, h: `mailto:${MAIL}` },
    { k: c.loc, v: c.locV },
  ];
  return (
    <Panel id="kontakt" tone="white" chapter={ch}>
      <Container>
        <Reveal><Eyebrow color={tc.at} n={ch?.n}>{c.label}</Eyebrow></Reveal>
        <Reveal delay={0.05}><H2 style={{ fontSize: "clamp(44px, 7vw, 104px)" }}>{c.title}</H2></Reveal>
        <Reveal delay={0.1}><Lead>{c.p}</Lead></Reveal>
        <div className="split-2 wide-gap" style={{ alignItems: "start" }}>
          <Reveal delay={0.1}><ContactForm l={c.form} accent={tc.at} /></Reveal>
          <Reveal delay={0.18}>
            <dl style={{ margin: "0 0 36px" }}>
              {rows.map((r) => (
                <div key={r.k} className="row-line" style={{ display: "flex", justifyContent: "space-between", gap: 16 }}>
                  <dt style={{ fontFamily: F, fontSize: 12, letterSpacing: 1.4, textTransform: "uppercase", color: C.muted, fontWeight: 600 }}>{r.k}</dt>
                  <dd style={{ margin: 0, fontFamily: F, fontSize: 17 }}>{r.h ? <a href={r.h} className="u-link" style={{ color: C.dark, textDecoration: "none" }}>{r.v}</a> : <span>{r.v}</span>}</dd>
                </div>
              ))}
            </dl>
            <div style={{ fontFamily: F, fontSize: 12, letterSpacing: 1.4, textTransform: "uppercase", color: C.muted, fontWeight: 600, marginBottom: 8 }}>{c.entity}</div>
            <p style={{ fontFamily: F, fontSize: 15, color: C.text, lineHeight: 1.6, margin: 0 }}>{t.ui.entityLong}</p>
          </Reveal>
        </div>
      </Container>
    </Panel>
  );
}
