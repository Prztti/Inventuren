import { Link } from "react-router-dom";
import { C, F, TRACK } from "./tokens";
import { Reveal, Picture, Button } from "./ui";
import { Clients, Profiles, Compliance, Expertise, Services, Network, Process, Insights } from "./sections";
import { ContactSection } from "./Contact";
import Article from "./Article";

function Hero({ t, d, track, tc }) {
  return (
    <section style={{ minHeight: "min(100vh, 900px)", display: "flex", alignItems: "center", background: "linear-gradient(160deg, #F0EEE9 0%, #EAE8E3 30%, #F2F0EB 60%, #F5F3EF 100%)", position: "relative", overflow: "hidden" }}>
      <div aria-hidden style={{ position: "absolute", top: "-25%", right: "-15%", width: "70%", height: "120%", background: `radial-gradient(ellipse, ${tc.as} 0%, transparent 60%)`, pointerEvents: "none" }} />
      <div className="hero-grid" style={{ maxWidth: 1100, margin: "0 auto", padding: "clamp(104px, 13vw, 140px) clamp(16px, 4vw, 40px) clamp(48px, 6vw, 80px)", position: "relative", width: "100%", display: "grid", gridTemplateColumns: "minmax(0, 1fr) 380px", gap: 40, alignItems: "center" }}>
        <div>
          <Reveal>
            <Link to="/" style={{ fontFamily: F, fontSize: 12, letterSpacing: 0.8, color: tc.at, border: `1px solid ${tc.a}66`, padding: "7px 14px", marginBottom: 28, display: "inline-flex", gap: 6, textDecoration: "none" }}>← {t.ui.back}</Link>
          </Reveal>
          <Reveal>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
              <span aria-hidden style={{ width: 24, height: 1, background: tc.a }} />
              <span style={{ fontFamily: F, fontSize: 11, letterSpacing: 2.6, textTransform: "uppercase", color: tc.at, fontWeight: 600 }}>{track === "re" ? t.ui.since06 : t.ui.since15}</span>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 style={{ fontFamily: F, fontSize: "clamp(34px, 4.6vw, 60px)", fontWeight: 300, color: C.dark, lineHeight: 1.12, letterSpacing: "-0.025em", margin: "0 0 24px" }}>
              <span style={{ display: "block" }}>{d.h1[0]}</span>
              <span style={{ display: "block", color: C.silver, fontWeight: 600 }}>{d.h1[1]}</span>
              <span style={{ display: "block", color: C.gold }}>{d.h1[2]}</span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}><p style={{ fontFamily: F, fontSize: 17, color: C.dim, lineHeight: 1.7, maxWidth: 560, margin: "0 0 34px" }}>{d.heroP}</p></Reveal>
          <Reveal delay={0.18}>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Button href="#leistungen" color={tc.at}>{d.ctaA}</Button>
              <Button href={track === "re" ? "#profil" : "#team"} variant="ghost">{d.ctaB}</Button>
            </div>
          </Reveal>
          <Reveal delay={0.24}>
            <dl className="stats" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "18px 40px", margin: "clamp(36px, 5vw, 56px) 0 0", maxWidth: 560 }}>
              {d.stats.map((s) => (
                <div key={s.l}>
                  <dt style={{ fontFamily: F, fontSize: 24, fontWeight: 700, color: tc.at }}>{s.v}</dt>
                  <dd style={{ fontFamily: F, fontSize: 11, letterSpacing: 1.1, textTransform: "uppercase", color: C.dim, margin: "4px 0 0", fontWeight: 500, lineHeight: 1.45 }}>{s.l}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
        <Reveal delay={0.16}>
          <div className="hero-visual" aria-hidden style={{ height: 520, WebkitMaskImage: "radial-gradient(ellipse 78% 88% at 50% 52%, black 48%, rgba(0,0,0,0.7) 65%, rgba(0,0,0,0.2) 80%, transparent 100%)", maskImage: "radial-gradient(ellipse 78% 88% at 50% 52%, black 48%, rgba(0,0,0,0.7) 65%, rgba(0,0,0,0.2) 80%, transparent 100%)" }}>
            <Picture name={track === "re" ? "re-hero-visual" : "ai-hero-visual"} widths={[960]} sizes="380px" imgStyle={{ objectFit: "contain" }} priority />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function Track({ t, lang, track }) {
  const d = t[track];
  const tc = TRACK[track];
  const isTech = track === "tech";
  return (
    <main>
      <Hero t={t} d={d} track={track} tc={tc} />
      <Clients t={t} scope={track} title={d.partnerTitle} id="partner" />
      {isTech
        ? <Profiles id="team" label={d.teamLabel} title={d.teamTitle} intro={d.teamIntro} profiles={d.profiles} tc={tc} />
        : <Profiles id="profil" label={d.profileLabel} profiles={[d.profile]} tc={tc} />}
      {isTech && <Compliance c={d.comp} />}
      <Expertise id={isTech ? "transformation" : "expertise"} d={d} tc={tc}
        image={isTech ? { name: "ai-expertise-visual", widths: [800, 1600] } : { name: "re-expertise-reference-clean", widths: [800, 1280] }} />
      <Services d={d} tc={tc} />
      <Network d={d} tc={tc} />
      <Process d={d} tc={tc} />
      <ContactSection t={t} tc={tc} />
      <Insights t={t} lang={lang} track={track} tc={tc} />
      <Article track={track} lang={lang} />
    </main>
  );
}
