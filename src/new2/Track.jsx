import { Link } from "react-router-dom";
import { C, F, T, LABEL, TRACK } from "./tokens";
import { Picture, Button, Panel, Container, TextLink } from "./ui";
import { Clients, Profiles, Compliance, Expertise, Services, Network, Process, Insights } from "./sections";
import { ContactSection } from "./Contact";

function Hero({ t, d, track, tc }) {
  return (
    <Panel first tone="light" className="hero" innerStyle={{ minHeight: "100svh", display: "flex", alignItems: "center" }}>
      <div aria-hidden style={{ position: "absolute", top: "-20%", right: "-20%", width: "70%", height: "120%", background: `radial-gradient(ellipse, ${tc.as} 0%, transparent 62%)`, pointerEvents: "none" }} />
      <Container wide style={{ width: "100%", paddingTop: 120, paddingBottom: 72 }}>
        <div className="hero-grid">
          <div>
            <Link to="/" className="hero-in back-link" style={{ fontFamily: F, fontSize: T.sm, fontWeight: 500, color: C.dim, textDecoration: "none", display: "inline-flex", gap: 8, marginBottom: 40 }}>← {t.ui.back}</Link>
            <div className="hero-in" style={{ ...LABEL, color: tc.at, marginBottom: 20 }}>{track === "re" ? t.ui.since06 : t.ui.since15}</div>
            <h1 className="hero-in d1 t-h2" style={{ margin: "0 0 24px", lineHeight: 1.04 }}>
              <span style={{ display: "block" }}>{d.h1[0]}</span>
              <span style={{ display: "block", color: C.silver }}>{d.h1[1]}</span>
              <span style={{ display: "block", color: C.goldText }}>{d.h1[2]}</span>
            </h1>
            <p className="hero-in d2 t-lead" style={{ maxWidth: 600, margin: "0 0 40px" }}>{d.heroP}</p>
            <div className="hero-in d3" style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
              <Button href="#kontakt" color={C.dark}>{t.ui.discuss}</Button>
              <Button href="#leistungen" variant="ghost">{d.ctaA}</Button>
              <span style={{ marginLeft: 8 }}><TextLink href={track === "re" ? "#profil" : "#team"} size={T.sm}>{d.ctaB}</TextLink></span>
            </div>
          </div>
          <div className="hero-visual hero-in d2" style={{ height: "min(62vh, 580px)", borderRadius: 24, overflow: "hidden", position: "relative" }}>
            {track === "re"
              ? <Picture name="hero-re" widths={[800, 1280]} sizes="420px" priority parallax="0.1" alt="" style={{ position: "absolute", inset: 0, top: "-9%" }} />
              : <TechVisual v={d.visual} />}
          </div>
        </div>
        <dl className="stats-row hero-in d4">
          {d.stats.map((s) => (
            <div key={s.l}>
              <dt className="t-stat" style={{ color: C.dark, whiteSpace: "nowrap" }}>{s.v}</dt>
              <dd className="t-small" style={{ color: C.dim, margin: "6px 0 0", lineHeight: 1.45 }}>{s.l}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </Panel>
  );
}

// Tech hero: a small architecture sketch instead of a decorative image — governance wraps every layer.
function TechVisual({ v }) {
  return (
    <div role="img" aria-label={`${v.label}: ${v.layers.map((l) => l[0]).join(", ")}`} style={{ position: "absolute", inset: 0, background: "#15171A", color: "#F2F1EE", padding: "clamp(22px, 2.4vw, 32px)", display: "flex", flexDirection: "column", justifyContent: "center", gap: 18 }}>
      <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      <div style={{ ...LABEL, color: C.gold, position: "relative" }}>{v.label}</div>
      <div style={{ position: "relative", border: "1px solid rgba(184,148,75,.45)", borderRadius: 18, padding: 14, display: "flex", flexDirection: "column", gap: 10 }}>
        {v.layers.map(([h, d], i) => (
          <div key={h} style={{ background: "#1F2226", border: "1px solid rgba(255,255,255,.08)", borderRadius: 12, padding: "14px 16px" }}>
            <div className="t-small" style={{ fontWeight: 600, display: "flex", gap: 10 }}><span style={{ color: i === 0 ? C.gold : "#A9B6C2", fontVariantNumeric: "tabular-nums" }}>{String(i + 1).padStart(2, "0")}</span>{h}</div>
            <div className="t-small" style={{ color: "rgba(242,241,238,.62)", marginTop: 4 }}>{d}</div>
          </div>
        ))}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, paddingTop: 4 }}>
          {v.chips.map((c) => <span key={c} style={{ ...LABEL, letterSpacing: "0.06em", color: C.gold, border: "1px solid rgba(184,148,75,.5)", borderRadius: 999, padding: "5px 10px" }}>{c}</span>)}
        </div>
      </div>
      <p className="t-small" style={{ position: "relative", color: "rgba(242,241,238,.62)", margin: 0 }}>{v.caption}</p>
    </div>
  );
}

export default function Track({ t, lang, track }) {
  const d = t[track];
  const tc = TRACK[track];
  const isTech = track === "tech";
  const c = Object.fromEntries(d.chapters.map((name, i) => [i, { n: String(i + 1).padStart(2, "0"), name }]));
  const at = (i) => c[i];
  // chapter order: tech = team, compliance, transformation, services, network, process, contact, insights
  //                re   = profile, expertise, services, network, process, contact, insights
  const k = isTech ? { team: 0, comp: 1, exp: 2, serv: 3, net: 4, proc: 5, contact: 6, insights: 7 } : { team: 0, exp: 1, serv: 2, net: 3, proc: 4, contact: 5, insights: 6 };
  return (
    <main>
      <Hero t={t} d={d} track={track} tc={tc} />
      <Clients t={t} scope={track} title={d.partnerTitle} id="partner" />
      {isTech
        ? <Profiles id="team" label={d.teamLabel} title={d.teamTitle} intro={d.teamIntro} profiles={d.profiles} tc={tc} ch={at(k.team)} ui={t.ui} />
        : <Profiles id="profil" label={d.profileLabel} title={d.profileTitle} profiles={[d.profile]} tc={tc} ch={at(k.team)} ui={t.ui} />}
      {isTech && <Compliance c={d.comp} ch={at(k.comp)} />}
      <Expertise id={isTech ? "transformation" : "expertise"} d={d} tc={tc} ch={at(k.exp)}
        image={isTech ? { name: "ai-expertise-visual", widths: [800, 1600] } : { name: "re-expertise-reference-clean", widths: [800, 1280] }} />
      <Services d={d} tc={tc} ch={at(k.serv)} />
      <Network d={d} tc={tc} ch={at(k.net)} />
      <Process d={d} tc={tc} ch={at(k.proc)} />
      <ContactSection t={t} tc={tc} ch={at(k.contact)} track={track} />
      <Insights t={t} lang={lang} track={track} tc={tc} ch={at(k.insights)} />
    </main>
  );
}
