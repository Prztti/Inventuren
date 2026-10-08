import { useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { C, F, T, LABEL, TRACK, GLASS } from "./tokens";
import { Picture, Panel, Container, Reveal, Eyebrow } from "./ui";
import { TeamCards, Regulated, References, Timeline, Clients } from "./sections";
import { H2, Words } from "./ui";
import { ContactSection } from "./Contact";
import HeroEditorial from "./HeroEditorial";

function TrackTile({ to, img, overlay, eyebrow, label, sub, tags, cta, delay }) {
  return (
    <Reveal delay={delay} style={{ height: "100%" }}>
      <Link to={to} className="track-tile" style={{ position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "flex-end", height: "100%", minHeight: "clamp(420px, 62vh, 640px)", padding: "clamp(24px, 3.4vw, 44px)", borderRadius: 20, textDecoration: "none", color: "#fff" }}>
        <div className="track-img" style={{ position: "absolute", inset: 0 }}><Picture {...img} sizes="(max-width: 760px) 100vw, 50vw" /></div>
        {/* the photo stays open at the top; a soft dimming at the bottom carries the white text */}
        <div aria-hidden style={{ position: "absolute", inset: 0, background: overlay }} />
        <div style={{ position: "relative" }}>
          <div style={{ ...LABEL, opacity: 0.9, marginBottom: 14 }}>{eyebrow}</div>
          <h2 style={{ fontSize: T.x2, fontWeight: 500, letterSpacing: "-0.018em", lineHeight: 1.08, whiteSpace: "pre-line", margin: "0 0 12px" }}>{label}</h2>
          <p className="t-body" style={{ opacity: 0.9, maxWidth: 420, margin: "0 0 24px" }}>{tags.join(" · ")}</p>
          {/* only the button is glass (a control), so the picture is not covered */}
          <span className="tile-cta glass glass-clear" style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: F, fontSize: T.sm, fontWeight: 600, padding: "13px 22px", borderRadius: GLASS.radius }}>{cta} <span aria-hidden className="arrow">→</span></span>
          <span className="sr-only">{sub}</span>
        </div>
      </Link>
    </Reveal>
  );
}

export default function Home({ t, lang }) {
  const h = t.home;
  const ch = h.chapters.map((name, i) => ({ n: String(i + 1).padStart(2, "0"), name }));
  const navigate = useNavigate();
  const { hash } = useLocation();
  // Old share links used #tech / #re on the overview — send them to the real routes.
  useEffect(() => {
    if (hash === "#tech") navigate("/tech", { replace: true });
    else if (hash === "#re") navigate("/real-estate", { replace: true });
  }, [hash, navigate]);

  return (
    <main>
      <HeroEditorial t={t} />

      <Panel id="bereiche" tone="white" className="panel-tight" chapter={ch[0]}>
        <Container wide>
          <Reveal><Eyebrow n={ch[0].n}>{ch[0].name}</Eyebrow></Reveal>
          <Reveal delay={0.05}><H2 style={{ marginBottom: 40 }}>{h.selectTitle}</H2></Reveal>
          <div className="split-tiles">
            <TrackTile to="/tech" img={{ name: "hero-tech", widths: [800, 1400] }} overlay="linear-gradient(180deg, rgba(14,18,24,0) 0%, rgba(14,18,24,0.05) 30%, rgba(14,18,24,0.5) 52%, rgba(14,18,24,0.8) 72%, rgba(14,18,24,0.92) 100%)" eyebrow={t.ui.since15} {...h.tracks.tech} />
            <TrackTile to="/real-estate" img={{ name: "hero-re", widths: [800, 1280] }} overlay="linear-gradient(180deg, rgba(34,22,8,0) 0%, rgba(34,22,8,0.05) 30%, rgba(34,22,8,0.5) 52%, rgba(34,22,8,0.8) 72%, rgba(34,22,8,0.92) 100%)" eyebrow={t.ui.since06} {...h.tracks.re} delay={0.1} />
          </div>
          <Reveal><div style={{ ...LABEL, color: C.muted, margin: "clamp(56px, 7vw, 88px) 0 24px" }}>{h.waysLabel}</div></Reveal>
          <div className="cols-3">
            {h.ways.map((w, i) => (
              <Reveal key={w.t} delay={i * 0.08} className="rule-top">
                <span className="t-small" style={{ fontWeight: 600, fontVariantNumeric: "tabular-nums", color: i === 2 ? C.goldDeep : C.silverInk }}>{String(i + 1).padStart(2, "0")}</span>
                <h3 className="t-h3" style={{ margin: "12px 0 8px" }}>{w.t}</h3>
                <p className="t-body" style={{ color: C.dim, margin: 0 }}><Words>{w.d}</Words></p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Panel>

      <Clients t={t} scope="home" id="kunden" title={ch[1].name} ch={ch[1]} tone="light" />
      <TeamCards t={t} ch={ch[2]} />
      <Regulated t={t} ch={ch[3]} />
      <References t={t} ch={ch[4]} />
      <Timeline t={t} lang={lang} ch={ch[5]} />
      <ContactSection t={t} tc={TRACK.tech} ch={ch[6]} philipFirst />
    </main>
  );
}
