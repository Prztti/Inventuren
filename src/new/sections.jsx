import { useState } from "react";
import { C, F, T, LABEL, TRACK } from "./tokens";
import { Reveal, Panel, Container, Eyebrow, H2, Lead, TextLink, Button, Picture } from "./ui";
import { TIMELINE, CLIENT_GROUPS, LOGOS } from "./data";
import { techNews, reNews } from "./news";

const accentOf = (a) => (a === "gold" ? { line: C.gold, text: C.goldDeep } : { line: C.silverLine, text: C.silverInk });
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

const Num = ({ i, color = C.muted }) => <span style={{ fontFamily: F, fontSize: T.sm, fontWeight: 600, color, fontVariantNumeric: "tabular-nums" }}>{String(i + 1).padStart(2, "0")}</span>;

// ── Landing: the two partners ───────────────────────────────────────────────
export function Portrait({ person, sizes = "(max-width: 760px) 50vw, 480px", style }) {
  return (
    <div className="portrait" style={{ borderRadius: 18, overflow: "hidden", aspectRatio: "4 / 5", background: "#16171A", ...style }}>
      <Picture name={person.photo} widths={[480, 960]} sizes={sizes} alt={person.name} />
    </div>
  );
}

export function TeamCards({ t, ch }) {
  const tm = t.team;
  return (
    <Panel id="team" tone="white" chapter={ch}>
      <Container>
        <div className="team-grid">
          <Reveal className="pair">
            {tm.people.map((p) => (
              <figure key={p.key} style={{ margin: 0 }}>
                <Portrait person={p} sizes="(max-width: 760px) 50vw, 280px" />
              </figure>
            ))}
          </Reveal>
          <div>
            <Reveal><Eyebrow n={ch?.n}>{tm.label}</Eyebrow></Reveal>
            <Reveal delay={0.05}><H2>{tm.title}</H2></Reveal>
            <Reveal delay={0.1}><Lead style={{ marginBottom: 40 }}>{tm.intro}</Lead></Reveal>
            {tm.people.map((p, i) => {
              const a = accentOf(p.accent);
              return (
                <Reveal key={p.key} delay={0.12 + i * 0.06} className="bio">
                  <h3 className="t-h3" style={{ margin: "0 0 4px" }}>{p.name}</h3>
                  <div className="t-small" style={{ marginBottom: 12 }}><span style={{ color: a.text, fontWeight: 600 }}>{p.role}</span><span style={{ color: C.muted }}> · {p.focus}</span></div>
                  <p className="t-body" style={{ color: C.text, margin: "0 0 18px" }}>{p.bio}</p>
                  <div className="facts">
                    {p.facts.map((f) => (
                      <div key={f.v}>
                        <div className="t-h3" style={{ color: a.text, whiteSpace: "nowrap", fontVariantNumeric: "lining-nums tabular-nums" }}>{f.v}</div>
                        <div className="t-small" style={{ color: C.dim, lineHeight: 1.4, marginTop: 2 }}>{f.l}</div>
                      </div>
                    ))}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
        <div style={{ marginTop: "clamp(64px, 8vw, 104px)" }}>
          <Reveal><div style={{ ...LABEL, color: C.muted, marginBottom: 24 }}>{tm.bondsLabel}</div></Reveal>
          <div className="cols-3">
            {tm.bonds.map((b, i) => (
              <Reveal key={b.t} delay={i * 0.08} className="rule-top">
                <Num i={i} color={i === 1 ? C.goldDeep : C.silverInk} />
                <h3 className="t-h3" style={{ margin: "12px 0 8px" }}>{b.t}</h3>
                <p className="t-body" style={{ color: C.dim, margin: 0 }}>{b.d}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}><div style={{ marginTop: 44 }}><Button href="#kontakt">{tm.cta}</Button></div></Reveal>
        </div>
      </Container>
    </Panel>
  );
}

// ── Landing: regulated ventures (dark block) ────────────────────────────────
export function Regulated({ t, ch }) {
  const r = t.regulated;
  return (
    <Panel id="regulated" tone="dark" chapter={ch}>
      <Container>
        <Reveal><Eyebrow color={C.gold} n={ch?.n}>{r.label}</Eyebrow></Reveal>
        <Reveal delay={0.05}><H2>{r.title}</H2></Reveal>
        {r.focus && <Reveal delay={0.08}><p className="t-h3" style={{ color: C.gold, margin: "0 0 20px", maxWidth: 820 }}>{r.focus}</p></Reveal>}
        <Reveal delay={0.1}><Lead>{r.intro}</Lead></Reveal>
        <div className="cols-4">
          {r.pillars.map((p, i) => (
            <Reveal key={p.t} delay={i * 0.08} className="rule-top rule-light">
              <Num i={i} color="rgba(242,241,238,.45)" />
              <h3 className="t-h3" style={{ margin: "14px 0 8px" }}>{p.t}</h3>
              <div style={{ ...LABEL, color: p.who.startsWith("David") ? C.gold : "#A9B6C2", marginBottom: 12 }}>{p.who}</div>
              <p className="t-body" style={{ margin: 0, opacity: 0.74 }}>{p.d}</p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <p className="t-stat" style={{ fontWeight: 400, letterSpacing: "-0.02em", lineHeight: 1.25, margin: "clamp(56px, 7vw, 96px) 0 0", maxWidth: 900 }}>
            <span style={{ color: C.gold }}>— </span>{r.closing}
          </p>
        </Reveal>
      </Container>
    </Panel>
  );
}

export function References({ t, ch }) {
  const r = t.regulated;
  return (
    <Panel id="referenzen" tone="warm" chapter={ch}>
      <Container>
        <Reveal><Eyebrow color={C.goldDeep} n={ch?.n}>{r.refLabel}</Eyebrow></Reveal>
        <Reveal delay={0.05}><H2>{r.refTitle}</H2></Reveal>
        <Reveal delay={0.1}><Lead>{r.refIntro}</Lead></Reveal>
        <div className="cols-4">
          {r.fields.map((f, i) => (
            <Reveal key={f.t} delay={i * 0.06} className="rule-top">
              <h3 className="t-title" style={{ margin: "0 0 14px" }}>{f.t}</h3>
              <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {f.items.map((it) => <li key={it} className="t-body" style={{ lineHeight: 1.5, marginBottom: 10, color: C.dim }}>{it}</li>)}
              </ul>
            </Reveal>
          ))}
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
  const color = kind === "david" ? C.goldDeep : kind === "philip" ? C.silverInk : kind === "joint" ? "#fff" : C.dark;
  return (
    <div style={{ width: 48, height: 48, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1, flexShrink: 0, ...ring }}>
      <span style={{ fontFamily: F, fontSize: T.xs, fontWeight: 600, fontVariantNumeric: "tabular-nums", color }}>{year}</span>
    </div>
  );
}

function TlEntry({ ev, side, lang }) {
  const e = ev[lang] || ev.en;
  const a = accentOf(side === "david" ? "gold" : "silver");
  return (
    <div className={`tl-card tl-card-${side}`}>
      <div style={{ ...LABEL, color: a.text, marginBottom: 6 }}>{NAMES[side]}</div>
      <h3 className="t-title" style={{ margin: "0 0 6px" }}>{e.title}</h3>
      <p className="t-body" style={{ color: C.dim, lineHeight: 1.6, margin: 0 }}>{e.desc}</p>
    </div>
  );
}

function JointLabel({ ev, lang }) {
  const roles = ev.roles ? ev.roles[lang] || ev.roles.en : ["", ""];
  const part = (side, role) => (
    <span>
      <span style={{ color: side === "david" ? C.goldDeep : C.silverInk, whiteSpace: "nowrap" }}>{NAMES[side]}</span>
      {role && <span style={{ color: C.muted, fontWeight: 500 }}> · {role}</span>}
    </span>
  );
  return (
    <div style={{ ...LABEL, marginBottom: 10, display: "flex", flexWrap: "wrap", gap: "4px 14px" }} className="tl-jlabel">
      {part("david", roles[0])}<span aria-hidden style={{ color: C.muted }}>+</span>{part("philip", roles[1])}
    </div>
  );
}

export function Timeline({ t, lang, ch }) {
  const tx = t.timeline;
  const [all, setAll] = useState(false);
  const source = all ? TIMELINE : TIMELINE.filter((e) => e.key || e.who === "both");
  // One row per lane-year; joint entries get their own row that spans both lanes.
  const rows = [];
  for (const year of [...new Set(source.map((e) => e.year))]) {
    const evs = source.filter((e) => e.year === year);
    const joints = evs.filter((e) => e.who === "both");
    const david = evs.find((e) => e.who === "david");
    const philip = evs.find((e) => e.who === "philip");
    joints.forEach((ev, k) => rows.push({ type: "joint", year, ev, showYear: k === 0 }));
    if (david || philip) rows.push({ type: "lane", year, david, philip, showYear: joints.length === 0 });
  }
  return (
    <Panel id="track-record" tone="light" chapter={ch}>
      <Container>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <Reveal><Eyebrow color={C.goldDeep} center n={ch?.n}>{tx.label}</Eyebrow></Reveal>
          <Reveal delay={0.05}><H2 style={{ margin: "0 auto 20px" }}>{tx.title}</H2></Reveal>
          <Reveal delay={0.1}><Lead style={{ margin: "0 auto" }}>{tx.sub}</Lead></Reveal>
        </div>
        <div className="tl-legend" aria-hidden>
          <span style={{ color: C.goldDeep }}>{NAMES.david}</span>
          <span />
          <span style={{ color: C.silverInk }}>{NAMES.philip}</span>
        </div>
        <ol className="tl" style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {rows.map((r, i) => {
            const last = i === rows.length - 1;
            if (r.type === "joint") {
              const e = r.ev[lang] || r.ev.en;
              const big = r.ev.final;
              return (
                <Reveal as="li" key={r.year + e.title} className={`tl-row tl-row-joint ${big ? "is-final" : ""}`}>
                  <div className="tl-spine"><YearDot year={r.year} kind="joint" />{!last && <div className="tl-line" />}</div>
                  <div className="tl-jcard">
                    <div aria-hidden className="tl-jbar" />
                    <JointLabel ev={r.ev} lang={lang} />
                    <h3 className={big ? "t-stat" : "t-h3"} style={{ margin: "0 0 8px", lineHeight: 1.25 }}>{e.title}</h3>
                    <p className="t-body" style={{ color: C.dim, margin: 0 }}>{e.desc}</p>
                  </div>
                </Reveal>
              );
            }
            const kind = r.david && r.philip ? "both" : r.david ? "david" : "philip";
            return (
              <Reveal as="li" key={r.year + kind} className="tl-row">
                <div className="tl-left">{r.david && <TlEntry ev={r.david} side="david" lang={lang} />}</div>
                <div className="tl-spine">{r.showYear ? <YearDot year={r.year} kind={kind} /> : <span className="tl-minor" style={{ background: kind === "david" ? C.gold : C.silverLine }} />}{!last && <div className="tl-line" />}</div>
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
        <div style={{ textAlign: "center", marginTop: 40 }}>
          <Button variant="ghost" onClick={() => setAll(!all)}>{all ? tx.less : `${tx.more} (${TIMELINE.length})`}</Button>
        </div>
      </Container>
    </Panel>
  );
}

// ── Clients & partners: logo row + wordmark row, both endless ───────────────
function LogoItem({ name, dup }) {
  const logo = LOGOS[name];
  return (
    <span className={`logo-item ${dup ? "dup" : ""} ${logo ? "has-logo" : ""}`}>
      {logo
        ? <img src={logo.src} alt={name} title={name} loading="lazy" className={`${logo.raster ? "raster" : ""} ${logo.dark ? "dark" : ""}`} style={{ height: logo.h, width: "auto", display: "block" }} />
        : <span className="logo-word">{name}</span>}
    </span>
  );
}

export function Clients({ t, scope = "home", title, id = "partner", ch }) {
  const names = [...new Set(CLIENT_GROUPS.filter((g) => g.tracks.includes(scope)).flatMap((g) => g.names))];
  const withLogo = names.filter((n) => LOGOS[n]);
  const words = names.filter((n) => !LOGOS[n]);
  const rows = [withLogo, words].filter((r) => r.length);
  return (
    <Panel id={id} tone="white" className="panel-tight" chapter={ch}>
      <Container>
        <Reveal><Eyebrow n={ch?.n}>{title || t.clients.label}</Eyebrow></Reveal>
        <Reveal delay={0.05}><H2 style={{ marginBottom: 40 }}>{t.clients.title}</H2></Reveal>
      </Container>
      <div className="marquees" aria-hidden>
        {rows.map((row, i) => (
          <div key={i} className={`marquee ${i ? "marquee-words" : "marquee-logos"}`}>
            <div className={`marquee-track ${i ? "reverse" : ""}`} style={{ animationDuration: `${Math.max(36, row.length * 4.5)}s` }}>
              {[...row, ...row].map((n, j) => <LogoItem key={j} name={n} dup={j >= row.length} />)}
            </div>
          </div>
        ))}
      </div>
      <ul className="sr-only">{names.map((n) => <li key={n}>{n}</li>)}</ul>
      <Container><p className="t-small" style={{ color: C.muted, margin: "24px 0 0" }}>{t.clients.fo}</p></Container>
    </Panel>
  );
}

// ── Track: management profiles ──────────────────────────────────────────────
export function Profiles({ id, label, title, intro, profiles, tc, ch, ui }) {
  const [open, setOpen] = useState({});
  return (
    <Panel id={id} tone="white" chapter={ch}>
      <Container>
        <Reveal><Eyebrow color={tc.at} n={ch?.n}>{label}</Eyebrow></Reveal>
        {title && <Reveal delay={0.05}><H2>{title}</H2></Reveal>}
        {intro && <Reveal delay={0.1}><Lead>{intro}</Lead></Reveal>}
        {profiles.map((p, idx) => {
          const a = accentOf(p.accent);
          return (
            <div key={p.key} style={{ marginTop: idx ? "clamp(72px, 9vw, 120px)" : 0 }}>
              <Reveal>
                <div style={{ display: "flex", gap: 22, alignItems: "flex-end", marginBottom: 36 }}>
                  {p.photo ? <Portrait person={p} sizes="140px" style={{ width: "clamp(96px, 12vw, 140px)", borderRadius: 14, flexShrink: 0 }} /> : <Monogram initials={p.initials} accent={p.accent} size={64} />}
                  <div>
                    <h3 className="t-stat" style={{ margin: 0 }}>{p.name}</h3>
                    <div className="t-body" style={{ marginTop: 8 }}><span style={{ color: a.text, fontWeight: 600 }}>{p.role}</span><span style={{ color: C.muted }}> · {p.focus}</span></div>
                  </div>
                </div>
              </Reveal>
              <div className="split-2">
                <Reveal delay={0.05}>
                  {p.paras.map((x) => <p key={x.slice(0, 24)} className="t-body" style={{ color: C.text, lineHeight: 1.7, margin: "0 0 18px" }}>{x}</p>)}
                  <p className="t-h3" style={{ fontWeight: 400, lineHeight: 1.4, margin: "28px 0 0", paddingLeft: 20, borderLeft: `2px solid ${a.line}` }}>{p.quote}</p>
                </Reveal>
                <Reveal delay={0.12}>
                  <button type="button" className="disclose" aria-expanded={!!open[p.key]} onClick={() => setOpen({ ...open, [p.key]: !open[p.key] })}>
                    {open[p.key] ? ui.hideRefs : ui.showRefs}<span aria-hidden className="disclose-icon">{open[p.key] ? "−" : "+"}</span>
                  </button>
                  {open[p.key] && (
                    <dl style={{ margin: 0 }}>
                      {p.cards.map(([h, d]) => (
                        <div key={h} className="row-line">
                          <dt style={{ ...LABEL, color: a.text, marginBottom: 4 }}>{h}</dt>
                          <dd className="t-body" style={{ color: C.dim, lineHeight: 1.55, margin: 0 }}>{d}</dd>
                        </div>
                      ))}
                    </dl>
                  )}
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
export function Compliance({ c , ch }) {
  return (
    <Panel id="compliance" tone="dark" chapter={ch}>
      <Container>
        <Reveal><Eyebrow color={C.gold} n={ch?.n}>{c.label}</Eyebrow></Reveal>
        <Reveal delay={0.05}><H2>{c.title}</H2></Reveal>
        <Reveal delay={0.1}><Lead>{c.p}</Lead></Reveal>
        <div className="split-2">
          {c.cols.map((col, ci) => (
            <Reveal key={col.t} delay={ci * 0.1}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12, flexWrap: "wrap", marginBottom: 8 }}>
                <h3 className="t-h3" style={{ margin: 0 }}>{col.t}</h3>
                <span style={{ ...LABEL, color: ci ? "#A9B6C2" : C.gold }}>{col.who}</span>
              </div>
              <ol style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {col.items.map((it, i) => (
                  <li key={it} className="row-line row-light" style={{ display: "flex", gap: 16 }}>
                    <Num i={i} color="rgba(242,241,238,.4)" />
                    <span className="t-body" style={{ lineHeight: 1.6, opacity: 0.8 }}>{it}</span>
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
export function Expertise({ id, d, tc, image , ch }) {
  const List = ({ title, items, color }) => (
    <div>
      <h3 className="t-h3" style={{ margin: "0 0 8px", color }}>{title}</h3>
      <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
        {items.map((x) => <li key={x} className="row-line t-body" style={{ color: C.text, lineHeight: 1.6 }}>{x}</li>)}
      </ul>
    </div>
  );
  return (
    <Panel id={id} tone="light" chapter={ch}>
      <Container>
        <Reveal><Eyebrow color={tc.at} n={ch?.n}>{d.tLabel}</Eyebrow></Reveal>
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
              <div className="t-stat" style={{ color: k.gold ? C.goldDeep : C.dark }}>{k.v}<span style={{ fontSize: "0.5em", letterSpacing: 0, marginLeft: 2 }}>{k.u || ""}</span></div>
              <div className="t-small" style={{ color: C.dim, marginTop: 8 }}>{k.l}</div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Panel>
  );
}

export function Services({ d, tc , ch }) {
  return (
    <Panel id="leistungen" tone="white" chapter={ch}>
      <Container>
        <Reveal><Eyebrow color={tc.at} n={ch?.n}>{d.sLabel}</Eyebrow></Reveal>
        <Reveal delay={0.05}><H2 style={{ marginBottom: 56 }}>{d.sTitle}</H2></Reveal>
        <ol style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {d.serv.map((s, i) => (
            <Reveal as="li" key={s.t} className="service-row">
              <Num i={i} color={tc.at} />
              <h3 className="t-h3" style={{ margin: 0, lineHeight: 1.25 }}>{s.t}</h3>
              <div>
                <p className="t-body" style={{ color: C.dim, margin: "0 0 10px" }}>{s.d}</p>
                <div style={{ ...LABEL, letterSpacing: "0.08em", color: tc.at }}>{s.tags.join(" · ")}</div>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </Panel>
  );
}

export function Network({ d, tc , ch }) {
  return (
    <Panel id="netzwerk" tone="warm" chapter={ch}>
      <Container>
        <Reveal><Eyebrow color={tc.at} n={ch?.n}>{d.netLabel}</Eyebrow></Reveal>
        <Reveal delay={0.05}><H2>{d.netTitle}</H2></Reveal>
        <Reveal delay={0.1}><Lead>{d.netP}</Lead></Reveal>
        <div className="cols-5">
          {d.clusters.map(([n, desc], i) => (
            <Reveal key={n} delay={i * 0.06} className="rule-top">
              <h3 className="t-title" style={{ margin: "0 0 10px" }}>{n}</h3>
              <p className="t-small" style={{ color: C.dim, margin: 0 }}>{desc}</p>
            </Reveal>
          ))}
        </div>
        <Reveal><p className="t-h3" style={{ fontWeight: 400, lineHeight: 1.45, margin: "clamp(48px, 6vw, 72px) 0 0", maxWidth: 820 }}>{d.netBar} <span style={{ color: tc.at, fontWeight: 600 }}>— {d.netBadge}</span></p></Reveal>
      </Container>
    </Panel>
  );
}

export function Process({ d, tc , ch }) {
  return (
    <Panel id="prozess" tone="light" chapter={ch}>
      <Container>
        <Reveal><Eyebrow color={tc.at} n={ch?.n}>{d.pLabel}</Eyebrow></Reveal>
        <Reveal delay={0.05}><H2 style={{ marginBottom: 56 }}>{d.pTitle}</H2></Reveal>
        <ol className="proc" style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {d.proc.map((s, i) => {
            const last = i === d.proc.length - 1;
            const col = last ? C.goldDeep : tc.at;
            return (
              <Reveal as="li" key={s.t} delay={i * 0.08} className="proc-step">
                <div className="proc-dot" style={{ background: last ? C.gold : tc.a }} />
                <div style={{ ...LABEL, color: col, marginBottom: 8 }}>{String(i + 1).padStart(2, "0")} · {s.sub}</div>
                <h3 className="t-title" style={{ margin: "0 0 6px" }}>{s.t}</h3>
                <p className="t-small" style={{ color: C.dim, margin: 0 }}>{s.d}</p>
              </Reveal>
            );
          })}
        </ol>
        <Reveal><p className="t-h3" style={{ fontWeight: 400, lineHeight: 1.45, margin: "clamp(48px, 6vw, 72px) 0 0" }}>{d.pBar[0]} <strong style={{ fontWeight: 600 }}>{d.pBar[1]}</strong> {d.pBar[2]} <span style={{ color: tc.at, fontWeight: 600 }}>— {d.pBadge}</span></p></Reveal>
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

export function Insights({ t, lang, track, tc , ch }) {
  const all = [...(track === "re" ? reNews : techNews)].sort((a, b) => String(b.date).localeCompare(String(a.date)));
  const [count, setCount] = useState(6);
  const ix = t.insights;
  return (
    <Panel id="insights" tone="light" chapter={ch}>
      <Container>
        <Reveal><Eyebrow color={tc.at} n={ch?.n}>{ix.label}</Eyebrow></Reveal>
        <Reveal delay={0.05}><H2>{ix.title}</H2></Reveal>
        <Reveal delay={0.1}><Lead>{ix.sub}</Lead></Reveal>
        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {all.slice(0, count).map((n) => (
            <li key={n.id}>
              <a href={n.url} target="_blank" rel="noopener noreferrer" className="news-row">
                <span className="t-small" style={{ color: C.muted }}>{fmtDate(n.date, lang)}</span>
                <span>
                  <span className="t-title" style={{ display: "block", color: C.dark }}>{n.title}</span>
                  <span className="t-body" style={{ display: "block", color: C.dim, lineHeight: 1.55, marginTop: 6 }}>{n.summary}</span>
                  <span className="t-small" style={{ display: "block", color: tc.at, fontWeight: 600, marginTop: 6 }}>{n.source}</span>
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
