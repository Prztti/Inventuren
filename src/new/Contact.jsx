import { useState } from "react";
import { C, F } from "./tokens";
import { Reveal, Section, Eyebrow, H2, Lead } from "./ui";

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
      <div role="status" style={{ padding: "44px 28px", textAlign: "center", background: C.warm, border: `1px solid ${C.line}` }}>
        <div aria-hidden style={{ width: 46, height: 46, borderRadius: "50%", border: `1.5px solid ${accent}`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px", color: accent, fontSize: 20 }}>✓</div>
        <p style={{ fontFamily: F, fontSize: 16, color: C.dark, margin: 0 }}>{l.success}</p>
      </div>
    );
  }

  if (state === "fallback") {
    return (
      <div role="alert" style={{ padding: "28px 26px", background: C.warm, border: `1px solid ${C.line}`, borderLeft: `3px solid ${C.gold}` }}>
        <p style={{ fontFamily: F, fontSize: 16, fontWeight: 600, color: C.dark, margin: "0 0 8px" }}>{l.fallbackTitle}</p>
        <p style={{ fontFamily: F, fontSize: 14, color: C.dim, lineHeight: 1.6, margin: "0 0 18px" }}>{l.fallbackText}</p>
        <a href={mailtoHref(form, l.topics)} style={{ display: "inline-block", fontFamily: F, fontSize: 12, letterSpacing: 1.2, textTransform: "uppercase", fontWeight: 700, padding: "13px 26px", background: accent, color: "#fff", textDecoration: "none" }}>{l.fallbackBtn}</a>
        <p style={{ fontFamily: F, fontSize: 13, color: C.dim, margin: "14px 0 0" }}>{l.fallbackOr} <a href={`mailto:${MAIL}`} style={{ color: C.dark }}>{MAIL}</a></p>
      </div>
    );
  }

  const input = { width: "100%", fontFamily: F, fontSize: 15, color: C.dark, background: "#fff", border: `1px solid ${C.line}`, padding: "12px 14px", borderRadius: 0, appearance: "none" };
  const label = { fontFamily: F, fontSize: 11, letterSpacing: 1.6, textTransform: "uppercase", color: C.dim, display: "block", marginBottom: 6, fontWeight: 600 };
  const req = <span style={{ color: C.goldDeep }}> *</span>;

  return (
    <form onSubmit={submit} noValidate style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div aria-hidden style={{ position: "absolute", left: -10000, width: 1, height: 1, overflow: "hidden" }}>
        <label>Website <input name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={set} /></label>
      </div>
      <div className="g2 g2-tight" style={{ gap: 12 }}>
        <div><label htmlFor="cf-name" style={label}>{l.name}{req}</label><input id="cf-name" name="name" required autoComplete="name" value={form.name} onChange={set} placeholder={l.namePh} style={input} /></div>
        <div><label htmlFor="cf-company" style={label}>{l.company}</label><input id="cf-company" name="company" autoComplete="organization" value={form.company} onChange={set} placeholder={l.companyPh} style={input} /></div>
      </div>
      <div className="g2 g2-tight" style={{ gap: 12 }}>
        <div><label htmlFor="cf-email" style={label}>{l.email}{req}</label><input id="cf-email" name="email" type="email" required autoComplete="email" value={form.email} onChange={set} placeholder={l.emailPh} style={input} /></div>
        <div>
          <label htmlFor="cf-topic" style={label}>{l.topic}</label>
          <select id="cf-topic" name="topic" value={form.topic} onChange={set} style={{ ...input, cursor: "pointer" }}>
            <option value="">—</option>
            {l.topics.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>
      </div>
      <div><label htmlFor="cf-message" style={label}>{l.message}</label><textarea id="cf-message" name="message" rows={5} value={form.message} onChange={set} placeholder={l.messagePh} style={{ ...input, resize: "vertical", lineHeight: 1.6 }} /></div>
      {state === "invalid" && <p role="alert" style={{ fontFamily: F, fontSize: 13, color: "#B42318", margin: 0 }}>{l.required}</p>}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 14 }}>
        <button type="submit" disabled={state === "sending"} className="btn" style={{ fontFamily: F, fontSize: 12, letterSpacing: 1.4, textTransform: "uppercase", fontWeight: 700, padding: "14px 34px", background: state === "sending" ? C.muted : accent, color: "#fff", border: "none", cursor: state === "sending" ? "wait" : "pointer" }}>
          {state === "sending" ? l.sending : l.submit}
        </button>
        <span style={{ fontFamily: F, fontSize: 12, color: C.muted, maxWidth: 300, lineHeight: 1.5 }}>{l.privacy} <a href="/datenschutz" style={{ color: C.dim }}>{l.privacyLink}</a>.</span>
      </div>
    </form>
  );
}

export function ContactSection({ t, tc, bg = C.card }) {
  const c = t.contact;
  const rows = [
    { k: c.web, v: "inventures.at", h: "https://inventures.at" },
    { k: c.mail, v: MAIL, h: `mailto:${MAIL}` },
    { k: c.loc, v: c.locV },
  ];
  return (
    <Section id="kontakt" bg={bg}>
      <Reveal><Eyebrow color={tc.at}>{c.label}</Eyebrow></Reveal>
      <Reveal delay={0.04}><H2>{c.title}</H2></Reveal>
      <Reveal delay={0.06}><Lead>{c.p}</Lead></Reveal>
      <div className="g2" style={{ gap: "clamp(32px, 5vw, 64px)", alignItems: "start" }}>
        <Reveal delay={0.08}><ContactForm l={c.form} accent={tc.at} /></Reveal>
        <Reveal delay={0.14}>
          <div>
            <dl style={{ margin: "0 0 28px" }}>
              {rows.map((r) => (
                <div key={r.k} style={{ display: "flex", justifyContent: "space-between", gap: 16, padding: "14px 0", borderBottom: `1px solid ${C.line}` }}>
                  <dt style={{ fontFamily: F, fontSize: 11, letterSpacing: 1.8, textTransform: "uppercase", color: C.dim, fontWeight: 600 }}>{r.k}</dt>
                  <dd style={{ margin: 0, fontFamily: F, fontSize: 15, fontWeight: 500 }}>{r.h ? <a href={r.h} style={{ color: C.dark, textDecoration: "none" }}>{r.v}</a> : <span style={{ color: C.dark }}>{r.v}</span>}</dd>
                </div>
              ))}
            </dl>
            <div style={{ fontFamily: F, fontSize: 11, letterSpacing: 1.8, textTransform: "uppercase", color: C.dim, fontWeight: 600, marginBottom: 6 }}>{c.entity}</div>
            <p style={{ fontFamily: F, fontSize: 14, color: C.text, lineHeight: 1.6, margin: 0 }}>{t.ui.entityLong}</p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
