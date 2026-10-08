import { Link } from "react-router-dom";
import { C, F, T, LABEL, TRACK, GLASS } from "./tokens";
import { Picture, Button, Panel, Container, TextLink, Words, HEAD_PACE } from "./ui";
import { Clients, Profiles, Compliance, Expertise, Services, Network, Process, Insights } from "./sections";
import { ContactSection } from "./Contact";
import TechFlow from "./TechFlow";

function Hero({ t, d, track, tc }) {
  return (
    <Panel first tone="light" className="hero" innerStyle={{ minHeight: "100svh", display: "flex", alignItems: "center" }}>
      <div aria-hidden style={{ position: "absolute", top: "-20%", right: "-20%", width: "70%", height: "120%", background: `radial-gradient(ellipse, ${tc.as} 0%, transparent 62%)`, pointerEvents: "none" }} />
      <Container wide style={{ width: "100%", paddingTop: 120, paddingBottom: 72 }}>
        {/* Real Estate shows a photo next to the text, Tech a workflow graphic */}
        <div className={track === "re" ? "hero-grid" : "hero-grid hero-grid-flow"}>
          <div>
            {/* the back link is a control: a small glass capsule (the wrapper carries the entrance animation) */}
            <div className="hero-in" style={{ marginBottom: 40 }}><Link to="/" className="back-link glass glass-press" style={{ fontFamily: F, fontSize: T.sm, fontWeight: 500, color: C.dim, textDecoration: "none", display: "inline-flex", gap: 8, padding: "9px 16px", borderRadius: GLASS.radius }}>← {t.ui.back}</Link></div>
            <div className="hero-in" style={{ ...LABEL, color: tc.at, marginBottom: 20 }}>{track === "re" ? t.ui.since06 : t.ui.since15}</div>
            {/* the headline builds up line by line, word by word; the lead follows, then the actions */}
            <h1 className="hero-in words-load t-h2" style={{ margin: "0 0 24px", lineHeight: 1.04 }}>
              <span style={{ display: "block" }}><Words step={HEAD_PACE} lead>{d.h1[0]}</Words></span>
              <span style={{ display: "block", color: C.silver }}><Words step={HEAD_PACE}>{d.h1[1]}</Words></span>
              <span style={{ display: "block", color: C.goldText }}><Words step={HEAD_PACE}>{d.h1[2]}</Words></span>
            </h1>
            <p className="hero-in words-load t-lead" style={{ maxWidth: 600, margin: "0 0 40px" }}><Words>{d.heroP}</Words></p>
            <div className="hero-in" style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center", animationDelay: "1.6s" }}>
              <Button href="#kontakt" color={C.dark}>{t.ui.discuss}</Button>
              <Button href="#leistungen" variant="glass">{d.ctaA}</Button>
              <span style={{ marginLeft: 8 }}><TextLink href={track === "re" ? "#profil" : "#team"} size={T.sm}>{d.ctaB}</TextLink></span>
            </div>
          </div>
          {track === "re" ? (
            <div className="hero-visual hero-in d2" style={{ height: "min(62vh, 580px)", borderRadius: 24, overflow: "hidden", position: "relative" }}>
              <Picture name="re-stairwell" widths={[600, 1000]} sizes="420px" priority parallax="0.1" alt="" style={{ position: "absolute", inset: 0, top: "-9%" }} />
            </div>
          ) : (
            <div className="hero-flow hero-in d2"><TechFlow /></div>
          )}
        </div>
        {/* the key figures keep scrolling with the page until they are near the top; only then does the next panel slide over them */}
        <dl className="stats-row hero-in" data-stick-mark={110} style={{ animationDelay: "1.2s" }}>
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
        ? <Profiles id="team" label={d.teamLabel} title={d.teamTitle} intro={d.teamIntro} profiles={d.profiles} tc={tc} ch={at(k.team)} ui={t.ui} tone="light" />
        : <Profiles id="profil" label={d.profileLabel} title={d.profileTitle} profiles={[d.profile]} tc={tc} ch={at(k.team)} ui={t.ui} tone="light" />}
      {isTech && <Compliance c={d.comp} ch={at(k.comp)} />}
      {/* tones alternate light / white; Real Estate has no dark block, so its middle sections swap */}
      <Expertise id={isTech ? "transformation" : "expertise"} d={d} tc={tc} ch={at(k.exp)} tone={isTech ? "light" : "white"}
        image={isTech ? { name: "ai-expertise-visual", widths: [800, 1600] } : { name: "re-hotel", widths: [900, 1800] }} />
      <Services d={d} tc={tc} ch={at(k.serv)} tone={isTech ? "white" : "light"} />
      <Network d={d} tc={tc} ch={at(k.net)} />
      <Process d={d} tc={tc} ch={at(k.proc)} />
      <ContactSection t={t} tc={tc} ch={at(k.contact)} track={track} />
      <Insights t={t} lang={lang} track={track} tc={tc} ch={at(k.insights)} />
    </main>
  );
}
