import { useState } from "react";
import { C, F, TRACK } from "./tokens";
import { Reveal, Panel, Container, Eyebrow, H2, Lead, TextLink, Button, Picture } from "./ui";
import { TIMELINE, CLIENT_GROUPS, LOGOS } from "./data";
import { techNews, reNews } from "../newsData";

const accentOf = (a) => (a === "gold" ? { line: C.gold, text: C.goldDeep } : { line: C.silverLine, text: C.silver });
const NAMES = { david: "David Brainin", philip: "Philip Kügler" };
const nameAccent = (name) => accentOf(name.startsWith("David") ? "gold" : "silver");

export function Monogram({ initials, accent, size = 56 }) {
  const a = accentOf(accent);
  return (
    <div aria-hidden style={{ width: size, height: size, borderRadius: "50%", border: `1px solid ${a.line}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
      <span style={{ fontFamily: F, fontSize: size * 0.3, fontWeight: 500, letterSpacing: 1, color: a.text }}>{initials}</span>
    </div>
  );
}

const Num = ({ i, color = C.muted }) => <span style={{ fontFamily: F, fontSize: 13, fontWeight: 600, color, letterSpacing: 1 }}>{String(i + 1).padStart(2, "0")}</span>;

// ── Landing: the two partners ───────────────────────────────────────────────
export function TeamCards({ t }) {
  const tm = t.team;
  return (
    <Panel id="team" tone="white">
      <Container>
        <Reveal><Eyebrow>{tm.label}</Eyebrow></Reveal>
        <Reveal delay={0.05}><H2>{tm.title}</H2></Reveal>
        <Reveal delay={0.1}><Lead>{tm.intro}</Lead></Reveal>
        <div className="duo">
          {tm.people.map((p, i) => {
            const a = accentOf(p.accent);
            return (
              <Reveal key={p.key} delay={0.1 + i * 0.1} className="duo-col">
                <div style={{ display: "flex", gap: 18, alignItems: "center", marginBottom: 28 }}>
                  <Monogram initials={p.initials} accent={p.accent} />
                  <div>
                    <h3 style={{ fontFamily: F, fontSize: "clamp(24px, 2.4vw, 32px)", fontWeight: 400, margin: 0, letterSpacing: "-0.02em" }}>{p.name}</h3>
                    <div style={{ fontFamily: F, fontSize: 14, marginTop: 6 }}><span style={{ color: a.text, fontWeight: 600 }}>{p.role}</span><span style={{ color: C.muted }}> · {p.focus}</span></div>
                  </div>
                </div>
                <p style={{ fontFamily: F, fontSize: 16, color: C.text, lineHeight: 1.75, margin: "0 0 36px", flex: 1 }}>{p.bio}</p>
                <div className="facts">
                  {p.facts.map((f) => (
                    <div key={f.v} style={{ borderTop: `1px solid ${a.line}`, paddingTop: 14 }}>
                      <div style={{ fontFamily: F, fontSize: "clamp(22px, 2vw, 30px)", fontWeight: 300, letterSpacing: "-0.02em", color: C.dark, whiteSpace: "nowrap" }}>{f.v}</div>
                      <div style={{ fontFamily: F, fontSize: 13, color: C.dim, lineHeight: 1.45, marginTop: 4 }}>{f.l}</div>
                    </div>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
        <div style={{ marginTop: "clamp(72px, 9vw, 120px)" }}>
          <Reveal><div style={{ fontFamily: F, fontSize: 12, letterSpacing: 2.4, textTransform: "uppercase", color: C.muted, fontWeight: 600, marginBottom: 28 }}>{tm.bondsLabel}</div></Reveal>
          <div className="cols-3">
            {tm.bonds.map((b, i) => (
              <Reveal key={b.t} delay={i * 0.08} className="rule-top">
                <Num i={i} color={i === 1 ? C.goldDeep : C.silver} />
                <h3 style={{ fontFamily: F, fontSize: 22, fontWeight: 400, letterSpacing: "-0.01em", margin: "14px 0 10px" }}>{b.t}</h3>
                <p style={{ fontFamily: F, fontSize: 15, color: C.dim, lineHeight: 1.7, margin: 0 }}>{b.d}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}><div style={{ marginTop: 48 }}><Button href="#kontakt">{tm.cta}</Button></div></Reveal>
        </div>
      </Container>
    </Panel>
  );
}

// ── Landing: regulated ventures (dark block) ────────────────────────────────
export function Regulated({ t }) {
  const r = t.regulated;
  return (
    <Panel id="regulated" tone="dark">
      <Container>
        <Reveal><Eyebrow color={C.gold}>{r.label}</Eyebrow></Reveal>
        <Reveal delay={0.05}><H2>{r.title}</H2></Reveal>
        <Reveal delay={0.1}><Lead>{r.intro}</Lead></Reveal>
        <div className="cols-4">
          {r.pillars.map((p, i) => (
            <Reveal key={p.t} delay={i * 0.08} className="rule-top rule-light">
              <Num i={i} color="rgba(242,241,238,.45)" />
              <h3 style={{ fontFamily: F, fontSize: 21, fontWeight: 400, letterSpacing: "-0.01em", margin: "14px 0 8px" }}>{p.t}</h3>
              <div style={{ fontFamily: F, fontSize: 12, fontWeight: 600, letterSpacing: 1.2, textTransform: "uppercase", color: p.who.startsWith("David") ? C.gold : "#A9B6C2", marginBottom: 12 }}>{p.who}</div>
              <p style={{ fontFamily: F, fontSize: 15, lineHeight: 1.7, margin: 0, opacity: 0.68 }}>{p.d}</p>
            </Reveal>
          ))}
        </div>
        <div style={{ marginTop: "clamp(72px, 9vw, 112px)" }}>
          <Reveal><div style={{ fontFamily: F, fontSize: 12, letterSpacing: 2.4, textTransform: "uppercase", fontWeight: 600, opacity: 0.5, marginBottom: 28 }}>{r.fieldsLabel}</div></Reveal>
          <div className="cols-4">
            {r.fields.map((f, i) => (
              <Reveal key={f.t} delay={i * 0.06}>
                <h3 style={{ fontFamily: F, fontSize: 15, fontWeight: 600, margin: "0 0 14px", color: "#fff" }}>{f.t}</h3>
                <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                  {f.items.map((it) => <li key={it} style={{ fontFamily: F, fontSize: 15, lineHeight: 1.55, marginBottom: 12, opacity: 0.68 }}>{it}</li>)}
                </ul>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <p style={{ fontFamily: F, fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 300, letterSpacing: "-0.02em", lineHeight: 1.25, margin: "clamp(56px, 7vw, 96px) 0 0", maxWidth: 900 }}>
              <span style={{ color: C.gold }}>— </span>{r.closing}
            </p>
          </Reveal>
        </div>
      </Container>
    </Panel>
  );
}

// ── Timeline: two lanes, David left, Philip right ───────────────────────────
function YearDot({ year, kind }) {
  const ring = kind === "david" ? { border: `1.5px solid ${C.gold}`, background: C.bg }
    : kind === "philip" ? { border: `1.5px solid ${C.silverLine}`, background: C.bg }
    : kind === "both" ? { border: "1.5px solid transparent", background: `linear-gradient(${C.bg}, ${C.bg}) padding-box, linear-gradient(90deg, ${C.gold} 50%, ${C.silverLine} 50%) border-box` }
    : { border: "1.5px solid transparent", background: `linear-gradient(90deg, ${C.gold}, ${C.silverLine})` };
  const color = kind === "david" ? C.goldDeep : kind === "philip" ? C.silver : kind === "joint" ? "#fff" : C.dark;
  return (
    <div style={{ width: 48, height: 48, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1, flexShrink: 0, ...ring }}>
      <span style={{ fontFamily: F, fontSize: 11, fontWeight: 600, color }}>{year}</span>
    </div>
  );
}

function TlEntry({ ev, side, lang }) {
  const e = ev[lang] || ev.en;
  const a = accentOf(side === "david" ? "gold" : "silver");
  return (
    <div className={`tl-card tl-card-${side}`}>
      <div style={{ fontFamily: F, fontSize: 11, letterSpacing: 1.4, textTransform: "uppercase", fontWeight: 600, color: a.text, marginBottom: 6 }}>{NAMES[side]}</div>
      <h3 style={{ fontFamily: F, fontSize: 17, fontWeight: 500, margin: "0 0 6px", lineHeight: 1.35, letterSpacing: "-0.01em" }}>{e.title}</h3>
      <p style={{ fontFamily: F, fontSize: 14, color: C.dim, lineHeight: 1.65, margin: 0 }}>{e.desc}</p>
    </div>
  );
}

export function Timeline({ t, lang }) {
  const tx = t.timeline;
  const rows = [];
  for (const ev of TIMELINE) {
    let r = rows.find((x) => x.year === ev.year);
    if (!r) { r = { year: ev.year }; rows.push(r); }
    r[ev.who] = ev;
  }
  return (
    <Panel id="track-record" tone="light">
      <Container>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <Reveal><Eyebrow color={C.goldDeep} center>{tx.label}</Eyebrow></Reveal>
          <Reveal delay={0.05}><H2 style={{ margin: "0 auto 20px" }}>{tx.title}</H2></Reveal>
          <Reveal delay={0.1}><Lead style={{ margin: "0 auto" }}>{tx.sub}</Lead></Reveal>
        </div>
        <div className="tl-legend" aria-hidden>
          <span style={{ color: C.goldDeep }}>{NAMES.david}</span>
          <span />
          <span style={{ color: C.silver }}>{NAMES.philip}</span>
        </div>
        <ol className="tl" style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {rows.map((r, i) => {
            const last = i === rows.length - 1;
            if (r.both) {
              const e = r.both[lang] || r.both.en;
              return (
                <Reveal as="li" key={r.year} className="tl-row tl-row-joint">
                  <div className="tl-spine"><YearDot year={r.year} kind="joint" /></div>
                  <div className="tl-jcard">
                    <div style={{ fontFamily: F, fontSize: 11, letterSpacing: 1.4, textTransform: "uppercase", fontWeight: 600, marginBottom: 8 }}>
                      <span style={{ color: C.goldDeep }}>{NAMES.david}</span> <span style={{ color: C.muted }}>&</span> <span style={{ color: C.silver }}>{NAMES.philip}</span>
                    </div>
                    <h3 style={{ fontFamily: F, fontSize: "clamp(22px, 2.4vw, 30px)", fontWeight: 400, margin: "0 0 8px", letterSpacing: "-0.02em" }}>{e.title}</h3>
                    <p style={{ fontFamily: F, fontSize: 16, color: C.dim, lineHeight: 1.65, margin: 0 }}>{e.desc}</p>
                  </div>
                </Reveal>
              );
            }
            const kind = r.david && r.philip ? "both" : r.david ? "david" : "philip";
            return (
              <Reveal as="li" key={r.year} className="tl-row">
                <div className="tl-left">{r.david && <TlEntry ev={r.david} side="david" lang={lang} />}</div>
                <div className="tl-spine"><YearDot year={r.year} kind={kind} />{!last && <div className="tl-line" />}</div>
                <div className="tl-right">
                  <div className="tl-desk">{r.philip && <TlEntry ev={r.philip} side="philip" lang={lang} />}</div>
                  <div className="tl-mob">
                    {r.david && <TlEntry ev={r.david} side="david" lang={lang} />}
                    {r.philip && <TlEntry ev={r.philip} side="philip" lang={lang} />}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </Container>
    </Panel>
  );
}

// ── Clients & partners: two endless logo rows ───────────────────────────────
function LogoItem({ name, dup }) {
  const src = LOGOS[name];
  return (
    <span className={`logo-item ${dup ? "dup" : ""}`}>
      {src ? <img src={src} alt={name} loading="lazy" style={{ height: 30, width: "auto", display: "block" }} /> : <span className="logo-word">{name}</span>}
    </span>
  );
}

export function Clients({ t, scope = "home", title, id = "partner" }) {
  const names = [...new Set(CLIENT_GROUPS.filter((g) => g.tracks.includes(scope)).flatMap((g) => g.names))];
  const half = Math.ceil(names.length / 2);
  const rows = [names.slice(0, half), names.slice(half)];
  return (
    <Panel id={id} tone="white" className="panel-tight">
      <Container>
        <Reveal><Eyebrow>{title || t.clients.label}</Eyebrow></Reveal>
      </Container>
      <div className="marquees" aria-hidden>
        {rows.map((row, i) => (
          <div key={i} className="marquee">
            <div className={`marquee-track ${i ? "reverse" : ""}`} style={{ animationDuration: `${Math.max(40, row.length * 5)}s` }}>
              {[...row, ...row].map((n, j) => <LogoItem key={j} name={n} dup={j >= row.length} />)}
            </div>
          </div>
        ))}
      </div>
      <ul className="sr-only">{names.map((n) => <li key={n}>{n}</li>)}</ul>
      <Container><p style={{ fontFamily: F, fontSize: 14, color: C.muted, margin: "28px 0 0" }}>{t.clients.fo}</p></Container>
    </Panel>
  );
}

// ── Track: management profiles ──────────────────────────────────────────────
export function Profiles({ id, label, title, intro, profiles, tc }) {
  return (
    <Panel id={id} tone="white">
      <Container>
        <Reveal><Eyebrow color={tc.at}>{label}</Eyebrow></Reveal>
        {title && <Reveal delay={0.05}><H2>{title}</H2></Reveal>}
        {intro && <Reveal delay={0.1}><Lead>{intro}</Lead></Reveal>}
        {profiles.map((p, idx) => {
          const a = accentOf(p.accent);
          return (
            <div key={p.key} style={{ marginTop: idx ? "clamp(72px, 9vw, 120px)" : 0 }}>
              <Reveal>
                <div style={{ display: "flex", gap: 20, alignItems: "center", marginBottom: 36 }}>
                  <Monogram initials={p.initials} accent={p.accent} size={64} />
                  <div>
                    <h3 style={{ fontFamily: F, fontSize: "clamp(30px, 3.6vw, 48px)", fontWeight: 300, margin: 0, letterSpacing: "-0.03em" }}>{p.name}</h3>
                    <div style={{ fontFamily: F, fontSize: 15, marginTop: 6 }}><span style={{ color: a.text, fontWeight: 600 }}>{p.role}</span><span style={{ color: C.muted }}> · {p.focus}</span></div>
                  </div>
                </div>
              </Reveal>
              <div className="split-2">
                <Reveal delay={0.05}>
                  {p.paras.map((x) => <p key={x.slice(0, 24)} style={{ fontFamily: F, fontSize: 16, color: C.text, lineHeight: 1.8, margin: "0 0 18px" }}>{x}</p>)}
                  <p style={{ fontFamily: F, fontSize: "clamp(20px, 2vw, 26px)", fontWeight: 300, fontStyle: "italic", lineHeight: 1.4, letterSpacing: "-0.01em", margin: "28px 0 0", paddingLeft: 20, borderLeft: `2px solid ${a.line}` }}>{p.quote}</p>
                </Reveal>
                <Reveal delay={0.12}>
                  <dl style={{ margin: 0 }}>
                    {p.cards.map(([h, d]) => (
                      <div key={h} className="row-line">
                        <dt style={{ fontFamily: F, fontSize: 12, letterSpacing: 1.4, textTransform: "uppercase", color: a.text, fontWeight: 600, marginBottom: 4 }}>{h}</dt>
                        <dd style={{ fontFamily: F, fontSize: 15, color: C.dim, lineHeight: 1.55, margin: 0 }}>{d}</dd>
                      </div>
                    ))}
                  </dl>
                </Reveal>
              </div>
            </div>
          );
        })}
      </Container>
    </Panel>
  );
}

// ── Tech: data protection & security (dark block) ───────────────────────────
export function Compliance({ c }) {
  return (
    <Panel id="compliance" tone="dark">
      <Container>
        <Reveal><Eyebrow color={C.gold}>{c.label}</Eyebrow></Reveal>
        <Reveal delay={0.05}><H2>{c.title}</H2></Reveal>
        <Reveal delay={0.1}><Lead>{c.p}</Lead></Reveal>
        <div className="split-2">
          {c.cols.map((col, ci) => (
            <Reveal key={col.t} delay={ci * 0.1}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12, flexWrap: "wrap", marginBottom: 8 }}>
                <h3 style={{ fontFamily: F, fontSize: 22, fontWeight: 400, margin: 0 }}>{col.t}</h3>
                <span style={{ fontFamily: F, fontSize: 12, fontWeight: 600, letterSpacing: 1.2, textTransform: "uppercase", color: ci ? "#A9B6C2" : C.gold }}>{col.who}</span>
              </div>
              <ol style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {col.items.map((it, i) => (
                  <li key={it} className="row-line row-light" style={{ display: "flex", gap: 16 }}>
                    <Num i={i} color="rgba(242,241,238,.4)" />
                    <span style={{ fontFamily: F, fontSize: 15, lineHeight: 1.6, opacity: 0.78 }}>{it}</span>
                  </li>
                ))}
              </ol>
            </Reveal>
          ))}
        </div>
      </Container>
    </Panel>
  );
}

// ── Track: transformation / expertise block ─────────────────────────────────
export function Expertise({ id, d, tc, image }) {
  const List = ({ title, items, color }) => (
    <div>
      <h3 style={{ fontFamily: F, fontSize: 22, fontWeight: 400, margin: "0 0 8px", color }}>{title}</h3>
      <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
        {items.map((x) => <li key={x} className="row-line" style={{ fontFamily: F, fontSize: 15, color: C.text, lineHeight: 1.6 }}>{x}</li>)}
      </ul>
    </div>
  );
  return (
    <Panel id={id} tone="light">
      <Container>
        <Reveal><Eyebrow color={tc.at}>{d.tLabel}</Eyebrow></Reveal>
        <Reveal delay={0.05}><H2>{d.tTitle}</H2></Reveal>
        <Reveal delay={0.1}><Lead>{d.tP}</Lead></Reveal>
      </Container>
      <Container wide>
        <Reveal>
          <div style={{ borderRadius: 20, overflow: "hidden", height: "clamp(240px, 38vw, 520px)", marginBottom: "clamp(56px, 7vw, 96px)", position: "relative" }}>
            <Picture {...image} sizes="(max-width: 1320px) 100vw, 1320px" parallax="0.12" style={{ position: "absolute", inset: 0, top: "-9%" }} />
          </div>
        </Reveal>
      </Container>
      <Container>
        <div className="split-2">
          <Reveal><List title={d.opexT} items={d.opex} color={tc.at} /></Reveal>
          <Reveal delay={0.1}><List title={d.revT} items={d.rev} color={C.goldDeep} /></Reveal>
        </div>
        <div className="cols-3" style={{ marginTop: "clamp(56px, 7vw, 96px)" }}>
          {d.kpis.map((k, i) => (
            <Reveal key={k.l} delay={i * 0.08} className="rule-top">
              <div style={{ fontFamily: F, fontSize: "clamp(36px, 4.4vw, 60px)", fontWeight: 300, letterSpacing: "-0.035em", color: k.gold ? C.goldDeep : C.dark }}>{k.v}<span style={{ fontSize: "0.4em", letterSpacing: 0 }}>{k.u || ""}</span></div>
              <div style={{ fontFamily: F, fontSize: 14, color: C.dim, marginTop: 6, lineHeight: 1.5 }}>{k.l}</div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Panel>
  );
}

export function Services({ d, tc }) {
  return (
    <Panel id="leistungen" tone="white">
      <Container>
        <Reveal><Eyebrow color={tc.at}>{d.sLabel}</Eyebrow></Reveal>
        <Reveal delay={0.05}><H2 style={{ marginBottom: 56 }}>{d.sTitle}</H2></Reveal>
        <ol style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {d.serv.map((s, i) => (
            <Reveal as="li" key={s.t} className="service-row">
              <Num i={i} color={tc.at} />
              <h3 style={{ fontFamily: F, fontSize: "clamp(22px, 2.4vw, 30px)", fontWeight: 400, letterSpacing: "-0.02em", margin: 0, lineHeight: 1.2 }}>{s.t}</h3>
              <div>
                <p style={{ fontFamily: F, fontSize: 15, color: C.dim, lineHeight: 1.7, margin: "0 0 10px" }}>{s.d}</p>
                <div style={{ fontFamily: F, fontSize: 12, letterSpacing: 1, textTransform: "uppercase", color: tc.at, fontWeight: 600 }}>{s.tags.join(" · ")}</div>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </Panel>
  );
}

export function Network({ d, tc }) {
  return (
    <Panel id="netzwerk" tone="warm">
      <Container>
        <Reveal><Eyebrow color={tc.at}>{d.netLabel}</Eyebrow></Reveal>
        <Reveal delay={0.05}><H2>{d.netTitle}</H2></Reveal>
        <Reveal delay={0.1}><Lead>{d.netP}</Lead></Reveal>
        <div className="cols-5">
          {d.clusters.map(([n, desc], i) => (
            <Reveal key={n} delay={i * 0.06} className="rule-top">
              <h3 style={{ fontFamily: F, fontSize: 18, fontWeight: 500, margin: "0 0 10px" }}>{n}</h3>
              <p style={{ fontFamily: F, fontSize: 14, color: C.dim, lineHeight: 1.6, margin: 0 }}>{desc}</p>
            </Reveal>
          ))}
        </div>
        <Reveal><p style={{ fontFamily: F, fontSize: "clamp(18px, 1.8vw, 22px)", fontWeight: 300, lineHeight: 1.5, margin: "clamp(48px, 6vw, 72px) 0 0", maxWidth: 820 }}>{d.netBar} <span style={{ color: tc.at, fontWeight: 500 }}>— {d.netBadge}</span></p></Reveal>
      </Container>
    </Panel>
  );
}

export function Process({ d, tc }) {
  return (
    <Panel id="prozess" tone="light">
      <Container>
        <Reveal><Eyebrow color={tc.at}>{d.pLabel}</Eyebrow></Reveal>
        <Reveal delay={0.05}><H2 style={{ marginBottom: 56 }}>{d.pTitle}</H2></Reveal>
        <ol className="proc" style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {d.proc.map((s, i) => {
            const last = i === d.proc.length - 1;
            const col = last ? C.goldDeep : tc.at;
            return (
              <Reveal as="li" key={s.t} delay={i * 0.08} className="proc-step">
                <div className="proc-dot" style={{ background: last ? C.gold : tc.a }} />
                <div style={{ fontFamily: F, fontSize: 12, letterSpacing: 1.2, textTransform: "uppercase", color: col, fontWeight: 600, marginBottom: 8 }}>{String(i + 1).padStart(2, "0")} · {s.sub}</div>
                <h3 style={{ fontFamily: F, fontSize: 19, fontWeight: 500, margin: "0 0 6px" }}>{s.t}</h3>
                <p style={{ fontFamily: F, fontSize: 14, color: C.dim, lineHeight: 1.6, margin: 0 }}>{s.d}</p>
              </Reveal>
            );
          })}
        </ol>
        <Reveal><p style={{ fontFamily: F, fontSize: "clamp(18px, 1.8vw, 22px)", fontWeight: 300, lineHeight: 1.5, margin: "clamp(48px, 6vw, 72px) 0 0" }}>{d.pBar[0]} <strong style={{ fontWeight: 600 }}>{d.pBar[1]}</strong> {d.pBar[2]} <span style={{ color: tc.at, fontWeight: 500 }}>— {d.pBadge}</span></p></Reveal>
      </Container>
    </Panel>
  );
}

// ── Insights: curated news as a clean list ──────────────────────────────────
const MONTHS = { en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], de: ["Jän", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"] };
const fmtDate = (s, lang) => {
  const [y, m] = String(s).split("-");
  if (!m) return y;
  if (lang === "cn") return `${y}年${parseInt(m, 10)}月`;
  return `${(MONTHS[lang] || MONTHS.en)[parseInt(m, 10) - 1]} ${y}`;
};

export function Insights({ t, lang, track, tc }) {
  const all = [...(track === "re" ? reNews : techNews)].sort((a, b) => String(b.date).localeCompare(String(a.date)));
  const [count, setCount] = useState(6);
  const ix = t.insights;
  return (
    <Panel id="insights" tone="light">
      <Container>
        <Reveal><Eyebrow color={tc.at}>{ix.label}</Eyebrow></Reveal>
        <Reveal delay={0.05}><H2>{ix.title}</H2></Reveal>
        <Reveal delay={0.1}><Lead>{ix.sub}</Lead></Reveal>
        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {all.slice(0, count).map((n) => (
            <li key={n.id}>
              <a href={n.url} target="_blank" rel="noopener noreferrer" className="news-row">
                <span style={{ fontFamily: F, fontSize: 13, color: C.muted }}>{fmtDate(n.date, lang)}</span>
                <span>
                  <span style={{ display: "block", fontFamily: F, fontSize: "clamp(18px, 1.8vw, 22px)", fontWeight: 400, color: C.dark, lineHeight: 1.3, letterSpacing: "-0.01em" }}>{n.title}</span>
                  <span style={{ display: "block", fontFamily: F, fontSize: 13, color: tc.at, fontWeight: 600, marginTop: 6 }}>{n.source}</span>
                </span>
                <span aria-hidden className="arrow" style={{ fontSize: 20, color: C.dark }}>↗</span>
              </a>
            </li>
          ))}
        </ul>
        {count < all.length && <div style={{ marginTop: 32 }}><Button variant="ghost" onClick={() => setCount((c) => c + 6)}>{ix.more}</Button></div>}
      </Container>
    </Panel>
  );
}

export { accentOf, TRACK, nameAccent, TextLink };
