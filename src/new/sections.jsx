import { useState } from "react";
import { C, F, TRACK } from "./tokens";
import { Reveal, Section, Eyebrow, H2, Lead, Button, Picture } from "./ui";
import { TIMELINE, CLIENT_GROUPS } from "./data";
import { techNews, reNews } from "../newsData";

const accentOf = (a) => (a === "gold" ? { line: C.gold, text: C.goldDeep, soft: C.goldSoft } : { line: C.silverLine, text: C.silver, soft: C.silverSoft });

export function Monogram({ initials, accent, size = 60 }) {
  const a = accentOf(accent);
  return (
    <div aria-hidden style={{ width: size, height: size, borderRadius: "50%", border: `1.5px solid ${a.line}`, background: a.soft, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
      <span style={{ fontFamily: F, fontSize: size * 0.3, fontWeight: 600, letterSpacing: 1, color: a.text }}>{initials}</span>
    </div>
  );
}

function WhoChip({ name }) {
  const gold = name.startsWith("David");
  const a = accentOf(gold ? "gold" : "silver");
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: F, fontSize: 11, fontWeight: 600, letterSpacing: 0.4, color: a.text, background: a.soft, padding: "4px 9px" }}>
      <span aria-hidden style={{ width: 5, height: 5, borderRadius: "50%", background: a.line }} />{name}
    </span>
  );
}

// ── Landing: two partner cards + what connects them ─────────────────────────
export function TeamCards({ t }) {
  const tm = t.team;
  return (
    <Section id="team" bg={C.card}>
      <Reveal><Eyebrow>{tm.label}</Eyebrow></Reveal>
      <Reveal delay={0.04}><H2>{tm.title}</H2></Reveal>
      <Reveal delay={0.08}><Lead>{tm.intro}</Lead></Reveal>
      <div className="g2" style={{ gap: 20 }}>
        {tm.people.map((p, i) => {
          const a = accentOf(p.accent);
          return (
            <Reveal key={p.key} delay={0.1 + i * 0.06} style={{ height: "100%" }}>
              <article style={{ height: "100%", display: "flex", flexDirection: "column", background: C.warm, border: `1px solid ${C.line}`, borderTop: `3px solid ${a.line}`, padding: "clamp(24px, 3vw, 36px)" }}>
                <div style={{ display: "flex", gap: 18, alignItems: "center", marginBottom: 22 }}>
                  <Monogram initials={p.initials} accent={p.accent} />
                  <div>
                    <h3 style={{ fontFamily: F, fontSize: 22, fontWeight: 500, color: C.dark, margin: 0, letterSpacing: "-0.01em" }}>{p.name}</h3>
                    <div style={{ fontFamily: F, fontSize: 12, fontWeight: 600, letterSpacing: 1.2, textTransform: "uppercase", color: a.text, marginTop: 6 }}>{p.role}</div>
                    <div style={{ fontFamily: F, fontSize: 13, color: C.dim, marginTop: 3 }}>{p.focus}</div>
                  </div>
                </div>
                <p style={{ fontFamily: F, fontSize: 15, color: C.text, lineHeight: 1.75, margin: "0 0 26px", flex: 1 }}>{p.bio}</p>
                <div className="facts" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, borderTop: `1px solid ${C.line}`, paddingTop: 20 }}>
                  {p.facts.map((f) => (
                    <div key={f.v}>
                      <div style={{ fontFamily: F, fontSize: 22, fontWeight: 700, color: a.text, letterSpacing: "-0.01em" }}>{f.v}</div>
                      <div style={{ fontFamily: F, fontSize: 12, color: C.dim, lineHeight: 1.45, marginTop: 4 }}>{f.l}</div>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
      <Reveal delay={0.12}>
        <div style={{ marginTop: 48 }}>
          <div style={{ fontFamily: F, fontSize: 11, letterSpacing: 2.4, textTransform: "uppercase", color: C.dim, fontWeight: 600, marginBottom: 16 }}>{tm.bondsLabel}</div>
          <div className="g3" style={{ gap: 14 }}>
            {tm.bonds.map((b, i) => (
              <div key={b.t} style={{ padding: "22px 22px 24px", background: C.bg, border: `1px solid ${C.line}` }}>
                <div style={{ fontFamily: F, fontSize: 12, fontWeight: 600, color: i === 1 ? C.goldDeep : C.silver, marginBottom: 8 }}>{String(i + 1).padStart(2, "0")}</div>
                <h3 style={{ fontFamily: F, fontSize: 17, fontWeight: 600, color: C.dark, margin: "0 0 8px" }}>{b.t}</h3>
                <p style={{ fontFamily: F, fontSize: 14, color: C.dim, lineHeight: 1.65, margin: 0 }}>{b.d}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 28 }}><Button href="#kontakt" color={C.silver}>{tm.cta} →</Button></div>
        </div>
      </Reveal>
    </Section>
  );
}

// ── Landing: regulated ventures (the combination, without naming a venture) ─
export function Regulated({ t }) {
  const r = t.regulated;
  return (
    <Section id="regulated" bg={`linear-gradient(170deg, #F0EEE9 0%, #EAE8E3 55%, #F2F0EB 100%)`}>
      <Reveal><Eyebrow color={C.goldDeep}>{r.label}</Eyebrow></Reveal>
      <Reveal delay={0.04}><H2>{r.title}</H2></Reveal>
      <Reveal delay={0.08}><Lead>{r.intro}</Lead></Reveal>
      <div className="g4" style={{ gap: 14 }}>
        {r.pillars.map((p, i) => (
          <Reveal key={p.t} delay={0.1 + i * 0.05} style={{ height: "100%" }}>
            <div style={{ height: "100%", display: "flex", flexDirection: "column", gap: 12, padding: "24px 22px", background: C.card, border: `1px solid ${C.line}` }}>
              <span style={{ fontFamily: F, fontSize: 28, fontWeight: 200, color: C.silverLine, lineHeight: 1 }}>{String(i + 1).padStart(2, "0")}</span>
              <h3 style={{ fontFamily: F, fontSize: 17, fontWeight: 600, color: C.dark, margin: 0 }}>{p.t}</h3>
              <div><WhoChip name={p.who} /></div>
              <p style={{ fontFamily: F, fontSize: 14, color: C.dim, lineHeight: 1.65, margin: 0 }}>{p.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.1}>
        <div style={{ marginTop: 44 }}>
          <div style={{ fontFamily: F, fontSize: 11, letterSpacing: 2.4, textTransform: "uppercase", color: C.dim, fontWeight: 600, marginBottom: 16 }}>{r.fieldsLabel}</div>
          <div className="g4" style={{ gap: 0, borderTop: `1px solid rgba(0,0,0,0.12)` }}>
            {r.fields.map((f) => (
              <div key={f.t} className="field-col" style={{ padding: "20px 20px 8px 0" }}>
                <h3 style={{ fontFamily: F, fontSize: 12, letterSpacing: 1.6, textTransform: "uppercase", fontWeight: 700, color: C.silver, margin: "0 0 12px" }}>{f.t}</h3>
                <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                  {f.items.map((it) => (
                    <li key={it} style={{ display: "flex", gap: 10, fontFamily: F, fontSize: 14, color: C.text, lineHeight: 1.55, marginBottom: 10 }}>
                      <span aria-hidden style={{ width: 4, height: 4, borderRadius: "50%", background: C.gold, marginTop: 9, flexShrink: 0 }} />{it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: F, fontSize: "clamp(18px, 2vw, 22px)", fontWeight: 300, color: C.dark, lineHeight: 1.5, margin: "36px 0 0", paddingLeft: 20, borderLeft: `2px solid ${C.gold}`, maxWidth: 760 }}>{r.closing}</p>
        </div>
      </Reveal>
    </Section>
  );
}

// ── Timeline (content unchanged; single column on phones) ───────────────────
export function Timeline({ t, lang }) {
  const tx = t.timeline;
  return (
    <Section id="track-record" bg={`linear-gradient(175deg, #F5F4F1 0%, #EDEBE6 50%, #F2F0EB 100%)`}>
      <div style={{ textAlign: "center", marginBottom: 44 }}>
        <Eyebrow color={C.goldDeep} center>{tx.label}</Eyebrow>
        <H2 style={{ margin: "0 auto 12px" }}>{tx.title}</H2>
        <p style={{ fontFamily: F, fontSize: 15, color: C.dim, lineHeight: 1.7, maxWidth: 560, margin: "0 auto" }}>{tx.sub}</p>
      </div>
      <ol className="tl" style={{ listStyle: "none", margin: 0, padding: 0 }}>
        {TIMELINE.map((ev, i) => {
          const e = lang === "de" ? ev.de : ev.en;
          const last = i === TIMELINE.length - 1;
          const card = (
            <div className="tl-card" style={{ padding: "12px 16px", background: "rgba(255,255,255,0.75)", border: `1px solid rgba(184,148,75,0.18)` }}>
              <h3 style={{ fontFamily: F, fontSize: 14, fontWeight: 600, color: last ? C.goldDeep : C.dark, margin: "0 0 5px", lineHeight: 1.35 }}>{e.title}</h3>
              <p style={{ fontFamily: F, fontSize: 13, color: C.dim, lineHeight: 1.6, margin: 0 }}>{e.desc}</p>
            </div>
          );
          const left = i % 2 === 0;
          return (
            <li key={ev.year + e.title} className={`tl-row ${left ? "tl-l" : "tl-r"}`}>
              <div className="tl-left">{left ? card : null}</div>
              <div className="tl-spine">
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: last ? C.gold : "#fff", border: `2px solid ${C.gold}`, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1 }}>
                  <span style={{ fontFamily: F, fontSize: 10, fontWeight: 700, color: last ? "#fff" : C.goldDeep }}>{ev.year}</span>
                </div>
                {!last && <div className="tl-line" />}
              </div>
              <div className="tl-right">{left ? <div className="tl-mob">{card}</div> : card}</div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}

// ── Clients & partners as a typographic list (no third-party logos) ─────────
export function Clients({ t, scope = "home", title, bg = C.bg, id }) {
  const groups = CLIENT_GROUPS.filter((g) => g.tracks.includes(scope));
  return (
    <Section id={id} bg={bg} style={{ padding: "clamp(40px, 6vw, 64px) clamp(16px, 4vw, 40px)", borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
      <div style={{ fontFamily: F, fontSize: 11, letterSpacing: 2.4, textTransform: "uppercase", color: C.dim, fontWeight: 600, marginBottom: 20 }}>{title || t.clients.label}</div>
      <div className="clients" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))", gap: "22px 28px" }}>
        {groups.map((g) => (
          <div key={g.key}>
            <div style={{ fontFamily: F, fontSize: 11, letterSpacing: 1.4, textTransform: "uppercase", fontWeight: 700, color: g.key === "re" ? C.goldDeep : C.silver, marginBottom: 8 }}>{t.groups[g.key]}</div>
            <div style={{ fontFamily: F, fontSize: 14, color: C.text, lineHeight: 1.75 }}>
              {g.names.map((n) => <div key={n}>{n}</div>)}
            </div>
          </div>
        ))}
      </div>
      <div style={{ fontFamily: F, fontSize: 13, fontStyle: "italic", color: C.muted, marginTop: 18 }}>{t.clients.fo}</div>
    </Section>
  );
}

// ── Track: management profiles ──────────────────────────────────────────────
export function Profiles({ id, label, title, intro, profiles, tc }) {
  return (
    <Section id={id} bg={C.card}>
      <Reveal><Eyebrow color={tc.at}>{label}</Eyebrow></Reveal>
      {title && <Reveal delay={0.04}><H2>{title}</H2></Reveal>}
      {intro && <Reveal delay={0.06}><Lead>{intro}</Lead></Reveal>}
      {profiles.map((p, idx) => {
        const a = accentOf(p.accent);
        return (
          <div key={p.key} style={{ paddingTop: idx ? 48 : 8, marginTop: idx ? 48 : 0, borderTop: idx ? `1px solid ${C.line}` : "none" }}>
            <Reveal>
              <div style={{ display: "flex", gap: 18, alignItems: "center", marginBottom: 28 }}>
                <Monogram initials={p.initials} accent={p.accent} size={64} />
                <div>
                  <h3 style={{ fontFamily: F, fontSize: "clamp(24px, 2.6vw, 32px)", fontWeight: 300, color: C.dark, margin: 0, letterSpacing: "-0.02em" }}>{p.name}</h3>
                  <div style={{ fontFamily: F, fontSize: 13, color: C.dim, marginTop: 6 }}>
                    <span style={{ fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", fontSize: 12, color: a.text }}>{p.role}</span>
                    <span aria-hidden style={{ margin: "0 8px", color: C.muted }}>·</span>{p.focus}
                  </div>
                </div>
              </div>
            </Reveal>
            <div className="g2" style={{ gap: "clamp(24px, 4vw, 48px)" }}>
              <Reveal delay={0.06}>
                <div>
                  {p.paras.map((x) => <p key={x.slice(0, 24)} style={{ fontFamily: F, fontSize: 15, color: C.text, lineHeight: 1.8, margin: "0 0 16px" }}>{x}</p>)}
                  <blockquote style={{ margin: "8px 0 0", padding: "16px 20px", borderLeft: `2px solid ${a.line}`, background: C.warm }}>
                    <p style={{ fontFamily: F, fontSize: 15, fontStyle: "italic", color: C.dark, lineHeight: 1.6, margin: 0 }}>{p.quote}</p>
                  </blockquote>
                </div>
              </Reveal>
              <Reveal delay={0.12}>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 6 }}>
                  {p.cards.map(([h, d]) => (
                    <li key={h} className="hover-line" style={{ padding: "12px 16px", background: "#fff", border: `1px solid ${C.line}`, "--hover": a.line }}>
                      <div style={{ fontFamily: F, fontSize: 11, letterSpacing: 1.8, textTransform: "uppercase", color: a.text, fontWeight: 700, marginBottom: 3 }}>{h}</div>
                      <div style={{ fontFamily: F, fontSize: 13, color: C.dim, lineHeight: 1.5 }}>{d}</div>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        );
      })}
    </Section>
  );
}

// ── Tech: data protection & security (legal + technical column) ─────────────
export function Compliance({ c }) {
  return (
    <Section id="compliance" bg={`linear-gradient(170deg, #F0EEE9 0%, #EBE9E4 50%, #F0EEE9 100%)`}>
      <Reveal><Eyebrow>{c.label}</Eyebrow></Reveal>
      <Reveal delay={0.04}><H2>{c.title}</H2></Reveal>
      <Reveal delay={0.08}><Lead>{c.p}</Lead></Reveal>
      <div className="g2" style={{ gap: 16 }}>
        {c.cols.map((col, ci) => (
          <Reveal key={col.t} delay={0.1 + ci * 0.06} style={{ height: "100%" }}>
            <div style={{ height: "100%", background: C.card, border: `1px solid ${C.line}`, padding: "24px 22px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap", marginBottom: 18 }}>
                <h3 style={{ fontFamily: F, fontSize: 13, letterSpacing: 1.6, textTransform: "uppercase", fontWeight: 700, color: ci ? C.silver : C.goldDeep, margin: 0 }}>{col.t}</h3>
                <WhoChip name={col.who} />
              </div>
              <ol style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {col.items.map((it, i) => (
                  <li key={it} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "10px 0", borderTop: i ? `1px solid ${C.line}` : "none" }}>
                    <span style={{ fontFamily: F, fontSize: 11, fontWeight: 700, color: C.muted, minWidth: 20, marginTop: 2 }}>{String(i + 1).padStart(2, "0")}</span>
                    <span style={{ fontFamily: F, fontSize: 14, color: C.text, lineHeight: 1.6 }}>{it}</span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

// ── Track: transformation / expertise block ─────────────────────────────────
export function Expertise({ id, d, tc, image }) {
  const List = ({ title, items, color }) => (
    <div style={{ height: "100%", padding: "26px 24px", border: `1px solid ${C.line}`, background: C.card }}>
      <h3 style={{ fontFamily: F, fontSize: 12, letterSpacing: 1.8, textTransform: "uppercase", color, fontWeight: 700, margin: "0 0 16px" }}>{title}</h3>
      <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
        {items.map((x) => (
          <li key={x} style={{ display: "flex", gap: 10, marginBottom: 12, fontFamily: F, fontSize: 14, color: C.text, lineHeight: 1.6 }}>
            <span aria-hidden style={{ width: 4, height: 4, borderRadius: "50%", background: color, marginTop: 9, flexShrink: 0 }} />{x}
          </li>
        ))}
      </ul>
    </div>
  );
  return (
    <Section id={id} bg={`linear-gradient(175deg, #F2F0EB 0%, #EDEBE6 40%, #F5F3EF 100%)`}>
      <Reveal><Eyebrow color={tc.at}>{d.tLabel}</Eyebrow></Reveal>
      <Reveal delay={0.04}><H2>{d.tTitle}</H2></Reveal>
      <Reveal delay={0.08}><Lead>{d.tP}</Lead></Reveal>
      <Reveal delay={0.1}>
        <div style={{ marginBottom: 28, border: `1px solid ${C.line}`, overflow: "hidden", height: "clamp(200px, 30vw, 340px)", background: "#fff" }}>
          <Picture {...image} sizes="(max-width: 1100px) 100vw, 1100px" />
        </div>
      </Reveal>
      <div className="g2" style={{ gap: 16, marginBottom: 28 }}>
        <Reveal delay={0.12} style={{ height: "100%" }}><List title={d.opexT} items={d.opex} color={tc.at} /></Reveal>
        <Reveal delay={0.16} style={{ height: "100%" }}><List title={d.revT} items={d.rev} color={C.goldDeep} /></Reveal>
      </div>
      <Reveal delay={0.2}>
        <div className="g3" style={{ gap: 12 }}>
          {d.kpis.map((k) => (
            <div key={k.l} style={{ padding: 22, background: C.surfaceAlt, textAlign: "center" }}>
              <div style={{ fontFamily: F, fontSize: 26, fontWeight: 700, color: k.gold ? C.goldDeep : tc.at }}>{k.v}<span style={{ fontSize: 15, fontWeight: 400 }}>{k.u || ""}</span></div>
              <div style={{ fontFamily: F, fontSize: 12, color: C.dim, marginTop: 6, lineHeight: 1.4 }}>{k.l}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}

export function Services({ d, tc }) {
  return (
    <Section id="leistungen" bg={C.card}>
      <Reveal><Eyebrow color={tc.at}>{d.sLabel}</Eyebrow></Reveal>
      <Reveal delay={0.04}><H2 style={{ marginBottom: 36 }}>{d.sTitle}</H2></Reveal>
      <div className="g2" style={{ gap: 14 }}>
        {d.serv.map((s, i) => (
          <Reveal key={s.t} delay={(i % 2) * 0.06} style={{ height: "100%" }}>
            <article className="hover-line" style={{ height: "100%", display: "flex", flexDirection: "column", padding: "26px 24px", border: `1px solid ${C.line}`, background: "#fff", "--hover": tc.a }}>
              <span style={{ fontFamily: F, fontSize: 26, fontWeight: 200, color: tc.a }}>{String(i + 1).padStart(2, "0")}</span>
              <h3 style={{ fontFamily: F, fontSize: 18, fontWeight: 600, color: C.dark, margin: "4px 0 10px" }}>{s.t}</h3>
              <p style={{ fontFamily: F, fontSize: 14, color: C.dim, lineHeight: 1.7, flex: 1, margin: 0 }}>{s.d}</p>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 16 }}>
                {s.tags.map((tag) => <span key={tag} style={{ fontFamily: F, fontSize: 10, letterSpacing: 0.8, textTransform: "uppercase", fontWeight: 600, padding: "4px 8px", background: tc.as, color: tc.at }}>{tag}</span>)}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Network({ d, tc }) {
  return (
    <Section id="netzwerk" bg={`linear-gradient(170deg, #F0EEE9 0%, #EBE9E4 50%, #F2F0EB 100%)`}>
      <Reveal><Eyebrow color={tc.at}>{d.netLabel}</Eyebrow></Reveal>
      <Reveal delay={0.04}><H2>{d.netTitle}</H2></Reveal>
      <Reveal delay={0.08}><Lead>{d.netP}</Lead></Reveal>
      <Reveal delay={0.1}>
        <div className="g5" style={{ gap: 12, marginBottom: 20 }}>
          {d.clusters.map(([n, desc]) => (
            <div key={n} className="hover-line" style={{ padding: "20px 16px", background: C.card, border: `1px solid ${C.line}`, "--hover": tc.a }}>
              <h3 style={{ fontFamily: F, fontSize: 11, letterSpacing: 1.8, textTransform: "uppercase", color: tc.at, fontWeight: 700, margin: "0 0 8px" }}>{n}</h3>
              <p style={{ fontFamily: F, fontSize: 13, color: C.dim, lineHeight: 1.55, margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>
      </Reveal>
      <Reveal delay={0.14}>
        <div style={{ padding: "18px 22px", background: C.surfaceAlt, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontFamily: F, fontSize: 14, color: C.text, lineHeight: 1.6, maxWidth: 640 }}>{d.netBar}</span>
          <Badge color={tc.at}>{d.netBadge}</Badge>
        </div>
      </Reveal>
    </Section>
  );
}

function Badge({ children, color }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: F, fontSize: 11, color, letterSpacing: 1, textTransform: "uppercase", fontWeight: 600, whiteSpace: "nowrap" }}>
      <span aria-hidden style={{ width: 6, height: 6, borderRadius: "50%", background: color }} />{children}
    </span>
  );
}

export function Process({ d, tc }) {
  return (
    <Section id="prozess" bg={`linear-gradient(165deg, #F0EEE9 0%, #EDEBE6 50%, #F2F0EB 100%)`}>
      <Reveal><Eyebrow color={tc.at}>{d.pLabel}</Eyebrow></Reveal>
      <Reveal delay={0.04}><H2 style={{ marginBottom: 36 }}>{d.pTitle}</H2></Reveal>
      <Reveal delay={0.08}>
        <ol className="proc" style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {d.proc.map((s, i) => {
            const last = i === d.proc.length - 1;
            const col = last ? C.goldDeep : tc.at;
            return (
              <li key={s.t} className="proc-step">
                <div className="proc-dot" style={{ borderColor: last ? C.gold : tc.a }}>
                  <span style={{ fontFamily: F, fontSize: 15, fontWeight: 700, color: col }}>{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div>
                  <h3 style={{ fontFamily: F, fontSize: 15, fontWeight: 600, color: C.dark, margin: "0 0 3px" }}>{s.t}</h3>
                  <div style={{ fontFamily: F, fontSize: 11, letterSpacing: 1, textTransform: "uppercase", color: col, fontWeight: 600, marginBottom: 6 }}>{s.sub}</div>
                  <p style={{ fontFamily: F, fontSize: 13, color: C.dim, lineHeight: 1.55, margin: 0 }}>{s.d}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </Reveal>
      <Reveal delay={0.14}>
        <div style={{ marginTop: 40, padding: "18px 22px", background: C.surfaceAlt, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontFamily: F, fontSize: 14, color: C.text }}>{d.pBar[0]} <strong style={{ color: C.dark }}>{d.pBar[1]}</strong> {d.pBar[2]}</span>
          <Badge color={tc.at}>{d.pBadge}</Badge>
        </div>
      </Reveal>
    </Section>
  );
}

// ── Insights: curated news as text cards (no third-party images) ────────────
const MONTHS = { en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], de: ["Jän", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"] };
const fmtDate = (s, lang) => {
  const [y, m] = String(s).split("-");
  if (!m) return y;
  if (lang === "cn") return `${y}年${parseInt(m, 10)}月`;
  return `${(MONTHS[lang] || MONTHS.en)[parseInt(m, 10) - 1]} ${y}`;
};

export function Insights({ t, lang, track, tc, children }) {
  const all = [...(track === "re" ? reNews : techNews)].sort((a, b) => String(b.date).localeCompare(String(a.date)));
  const [count, setCount] = useState(6);
  const ix = t.insights;
  return (
    <Section id="insights" bg={C.bg}>
      <Reveal><Eyebrow color={tc.at}>{ix.label}</Eyebrow></Reveal>
      <Reveal delay={0.04}><H2>{ix.title}</H2></Reveal>
      <Reveal delay={0.06}><Lead style={{ marginBottom: 28 }}>{ix.sub}</Lead></Reveal>
      <div className="g3" style={{ gap: 14 }}>
        {all.slice(0, count).map((n) => (
          <a key={n.id} href={n.url} target="_blank" rel="noopener noreferrer" className="hover-line news" style={{ display: "flex", flexDirection: "column", gap: 10, padding: "20px 20px 18px", background: C.card, border: `1px solid ${C.line}`, textDecoration: "none", "--hover": tc.a }}>
            <div style={{ fontFamily: F, fontSize: 11, letterSpacing: 1, textTransform: "uppercase", color: tc.at, fontWeight: 600 }}>{n.source} · {fmtDate(n.date, lang)}</div>
            <h3 style={{ fontFamily: F, fontSize: 16, fontWeight: 600, color: C.dark, lineHeight: 1.35, margin: 0 }}>{n.title}</h3>
            <p className="clamp3" style={{ fontFamily: F, fontSize: 13, color: C.dim, lineHeight: 1.6, margin: 0, flex: 1 }}>{n.summary}</p>
            <span style={{ fontFamily: F, fontSize: 12, fontWeight: 600, color: C.text }}>{ix.read} ↗</span>
          </a>
        ))}
      </div>
      {count < all.length && (
        <div style={{ marginTop: 22 }}><Button variant="ghost" onClick={() => setCount((c) => c + 6)}>{ix.more}</Button></div>
      )}
      {children && <div style={{ marginTop: 64 }}>{children}</div>}
    </Section>
  );
}

export { accentOf, TRACK };
