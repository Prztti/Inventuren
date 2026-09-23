import { useState } from "react";
import { Link } from "react-router-dom";
import { C, F, TRACK } from "./tokens";
import { Picture, Button, Panel, Container } from "./ui";
import { Clients, Profiles, Compliance, Expertise, Services, Network, Process, Insights } from "./sections";
import { ContactSection } from "./Contact";
import Article from "./Article";

function Hero({ t, d, track, tc }) {
  return (
    <Panel first tone="light" className="hero" innerStyle={{ minHeight: "100svh", display: "flex", alignItems: "center" }}>
      <div aria-hidden style={{ position: "absolute", top: "-20%", right: "-20%", width: "70%", height: "120%", background: `radial-gradient(ellipse, ${tc.as} 0%, transparent 62%)`, pointerEvents: "none" }} />
      <Container wide style={{ width: "100%", paddingTop: 120, paddingBottom: 72 }}>
        <div className="hero-grid">
          <div>
            <Link to="/" className="hero-in back-link" style={{ fontFamily: F, fontSize: 14, color: C.dim, textDecoration: "none", display: "inline-flex", gap: 8, marginBottom: 40 }}>← {t.ui.back}</Link>
            <div className="hero-in" style={{ fontFamily: F, fontSize: 12, letterSpacing: 2.4, textTransform: "uppercase", color: tc.at, fontWeight: 600, marginBottom: 20 }}>{track === "re" ? t.ui.since06 : t.ui.since15}</div>
            <h1 className="hero-in d1" style={{ fontFamily: F, fontSize: "clamp(40px, 4.8vw, 72px)", fontWeight: 300, lineHeight: 1.0, letterSpacing: "-0.045em", margin: "0 0 32px" }}>
              <span style={{ display: "block" }}>{d.h1[0]}</span>
              <span style={{ display: "block", color: C.silver, fontWeight: 500 }}>{d.h1[1]}</span>
              <span style={{ display: "block", color: C.gold }}>{d.h1[2]}</span>
            </h1>
            <p className="hero-in d2" style={{ fontFamily: F, fontSize: "clamp(17px, 1.5vw, 20px)", color: C.dim, lineHeight: 1.6, maxWidth: 600, margin: "0 0 40px" }}>{d.heroP}</p>
            <div className="hero-in d3" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Button href="#leistungen" color={C.dark}>{d.ctaA}</Button>
              <Button href={track === "re" ? "#profil" : "#team"} variant="ghost">{d.ctaB}</Button>
            </div>
          </div>
          <div className="hero-visual hero-in d2" aria-hidden style={{ height: "min(62vh, 580px)", borderRadius: 24, overflow: "hidden", position: "relative" }}>
            <Picture name={track === "re" ? "re-hero-visual" : "ai-hero-visual"} widths={[960]} sizes="420px" priority parallax="0.1" style={{ position: "absolute", inset: 0, top: "-9%" }} />
          </div>
        </div>
        <dl className="stats-row hero-in d4">
          {d.stats.map((s) => (
            <div key={s.l}>
              <dt style={{ fontFamily: F, fontSize: "clamp(28px, 3vw, 44px)", fontWeight: 300, letterSpacing: "-0.03em", color: C.dark }}>{s.v}</dt>
              <dd style={{ fontFamily: F, fontSize: 13, color: C.dim, margin: "4px 0 0", lineHeight: 1.45 }}>{s.l}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </Panel>
  );
}

function ArticleFold({ t, track, lang }) {
  const [open, setOpen] = useState(false);
  return (
    <Panel tone="white" className="panel-flush">
      <div className={`article-fold ${open ? "is-open" : ""}`}><Article track={track} lang={lang} /></div>
      <div style={{ textAlign: "center", padding: "0 0 clamp(56px, 7vw, 88px)" }}>
        <Button variant="ghost" onClick={() => setOpen(!open)}>{open ? t.ui.closeArticle : t.ui.readArticle}</Button>
      </div>
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
        ? <Profiles id="team" label={d.teamLabel} title={d.teamTitle} intro={d.teamIntro} profiles={d.profiles} tc={tc} ch={at(k.team)} ui={t.ui} />
        : <Profiles id="profil" label={d.profileLabel} title={d.profileTitle} profiles={[d.profile]} tc={tc} ch={at(k.team)} ui={t.ui} />}
      {isTech && <Compliance c={d.comp} ch={at(k.comp)} />}
      <Expertise id={isTech ? "transformation" : "expertise"} d={d} tc={tc} ch={at(k.exp)}
        image={isTech ? { name: "ai-expertise-visual", widths: [800, 1600] } : { name: "re-expertise-reference-clean", widths: [800, 1280] }} />
      <Services d={d} tc={tc} ch={at(k.serv)} />
      <Network d={d} tc={tc} ch={at(k.net)} />
      <Process d={d} tc={tc} ch={at(k.proc)} />
      <ContactSection t={t} tc={tc} ch={at(k.contact)} />
      <Insights t={t} lang={lang} track={track} tc={tc} ch={at(k.insights)} />
      <ArticleFold t={t} track={track} lang={lang} />
    </main>
  );
}
