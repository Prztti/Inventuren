import { useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { C, F, TRACK } from "./tokens";
import { Picture, Panel, Container, Reveal, Eyebrow } from "./ui";
import { TeamCards, Regulated, Timeline, Clients } from "./sections";
import { ContactSection } from "./Contact";

function TrackTile({ to, img, overlay, eyebrow, label, sub, tags, cta, delay }) {
  return (
    <Reveal delay={delay} style={{ height: "100%" }}>
      <Link to={to} className="track-tile" style={{ position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "flex-end", height: "100%", minHeight: "clamp(420px, 62vh, 640px)", padding: "clamp(28px, 4vw, 52px)", borderRadius: 20, textDecoration: "none", color: "#fff" }}>
        <div className="track-img" style={{ position: "absolute", inset: 0 }}><Picture {...img} sizes="(max-width: 760px) 100vw, 50vw" /></div>
        <div aria-hidden style={{ position: "absolute", inset: 0, background: overlay }} />
        <div style={{ position: "relative" }}>
          <div style={{ fontFamily: F, fontSize: 12, letterSpacing: 2.4, textTransform: "uppercase", fontWeight: 600, opacity: 0.85, marginBottom: 16 }}>{eyebrow}</div>
          <h2 style={{ fontFamily: F, fontSize: "clamp(34px, 4.4vw, 60px)", fontWeight: 300, lineHeight: 1.02, letterSpacing: "-0.035em", whiteSpace: "pre-line", margin: "0 0 16px" }}>{label}</h2>
          <p style={{ fontFamily: F, fontSize: 15, lineHeight: 1.6, opacity: 0.82, maxWidth: 420, margin: "0 0 28px" }}>{tags.join(" · ")}</p>
          <span className="tile-cta" style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: F, fontSize: 14, fontWeight: 600, padding: "13px 22px", borderRadius: 999, background: "rgba(255,255,255,0.14)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.28)" }}>{cta} <span aria-hidden className="arrow">→</span></span>
          <span className="sr-only">{sub}</span>
        </div>
      </Link>
    </Reveal>
  );
}

export default function Home({ t, lang }) {
  const h = t.home;
  const navigate = useNavigate();
  const { hash } = useLocation();
  // Old share links used #tech / #re on the overview — send them to the real routes.
  useEffect(() => {
    if (hash === "#tech") navigate("/tech", { replace: true });
    else if (hash === "#re") navigate("/real-estate", { replace: true });
  }, [hash, navigate]);

  return (
    <main>
      <Panel first tone="light" className="hero" innerStyle={{ minHeight: "100svh", display: "flex", alignItems: "center" }}>
        <div aria-hidden style={{ position: "absolute", inset: 0, opacity: 0.16, overflow: "hidden" }}>
          <Picture name="hero-landing" widths={[800, 1600]} sizes="100vw" priority parallax="0.25" style={{ position: "absolute", inset: 0, top: "-9%" }} />
        </div>
        <div aria-hidden style={{ position: "absolute", inset: 0, background: `linear-gradient(180deg, rgba(245,244,241,0) 55%, ${C.bg} 100%)` }} />
        <Container style={{ textAlign: "center", paddingTop: 120, paddingBottom: 96 }}>
          <h1 className="hero-in" style={{ fontFamily: F, fontSize: "clamp(58px, 11vw, 168px)", fontWeight: 300, letterSpacing: "-0.055em", lineHeight: 0.92, margin: 0 }}>
            <span style={{ color: C.silver, fontWeight: 300 }}>In</span><span style={{ color: C.gold, fontWeight: 600 }}>Ventures</span>
          </h1>
          <p className="hero-in d1" style={{ fontFamily: F, fontSize: "clamp(16px, 1.6vw, 20px)", fontWeight: 600, letterSpacing: 0.2, margin: "28px 0 0" }}>{h.brandSub}</p>
          <p className="hero-in d2" style={{ fontFamily: F, fontSize: "clamp(16px, 1.5vw, 19px)", color: C.dim, lineHeight: 1.6, maxWidth: 720, margin: "14px auto 0" }}>{h.brandP}</p>
          <p className="hero-in d3" style={{ fontFamily: F, fontSize: "clamp(26px, 3.4vw, 46px)", fontWeight: 300, letterSpacing: "-0.03em", margin: "40px 0 0" }}>
            <span>{h.claim[0]}</span>{" "}<span style={{ color: C.silver, fontWeight: 500 }}>{h.claim[1]}</span>{" "}<span style={{ color: C.gold }}>{h.claim[2]}</span>
          </p>
          <a href="#bereiche" className="hero-in d4 scroll-cue" aria-label={h.selectSub} style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 10, marginTop: 56, fontFamily: F, fontSize: 12, letterSpacing: 2, textTransform: "uppercase", color: C.muted, textDecoration: "none" }}>
            {h.selectSub}<span aria-hidden className="cue-line" />
          </a>
        </Container>
      </Panel>

      <Panel id="bereiche" tone="white" className="panel-tight">
        <Container wide>
          <Reveal>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 16, flexWrap: "wrap", marginBottom: 28 }}>
              <Eyebrow style={{ marginBottom: 0 }}>{h.selectTitle}</Eyebrow>
            </div>
          </Reveal>
          <div className="split-tiles">
            <TrackTile to="/tech" img={{ name: "hero-tech", widths: [800, 1400] }} overlay="linear-gradient(180deg, rgba(14,18,24,0.1) 0%, rgba(14,18,24,0.35) 45%, rgba(14,18,24,0.85) 100%)" eyebrow={t.ui.since15} {...h.tracks.tech} />
            <TrackTile to="/real-estate" img={{ name: "hero-re", widths: [800, 1280] }} overlay="linear-gradient(180deg, rgba(34,22,8,0.1) 0%, rgba(34,22,8,0.35) 45%, rgba(34,22,8,0.85) 100%)" eyebrow={t.ui.since06} {...h.tracks.re} delay={0.1} />
          </div>
        </Container>
      </Panel>

      <Clients t={t} scope="home" id="kunden" />
      <TeamCards t={t} />
      <Regulated t={t} />
      <Timeline t={t} lang={lang} />
      <ContactSection t={t} tc={TRACK.tech} />
    </main>
  );
}
