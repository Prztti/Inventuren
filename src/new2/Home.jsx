import { useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { C, F, T, LABEL, TRACK } from "./tokens";
import { Picture, Panel, Container, Reveal, Eyebrow, Wordmark, Button, TextLink } from "./ui";
import { TeamCards, Regulated, References, Timeline, Clients } from "./sections";
import { H2 } from "./ui";
import { ContactSection } from "./Contact";

function TrackTile({ to, img, overlay, eyebrow, label, sub, tags, cta, delay }) {
  return (
    <Reveal delay={delay} style={{ height: "100%" }}>
      <Link to={to} className="track-tile" style={{ position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "flex-end", height: "100%", minHeight: "clamp(420px, 62vh, 640px)", padding: "clamp(28px, 4vw, 52px)", borderRadius: 20, textDecoration: "none", color: "#fff" }}>
        <div className="track-img" style={{ position: "absolute", inset: 0 }}><Picture {...img} sizes="(max-width: 760px) 100vw, 50vw" /></div>
        <div aria-hidden style={{ position: "absolute", inset: 0, background: overlay }} />
        <div style={{ position: "relative" }}>
          <div style={{ ...LABEL, opacity: 0.9, marginBottom: 16 }}>{eyebrow}</div>
          <h2 className="t-h2" style={{ lineHeight: 1.02, whiteSpace: "pre-line", margin: "0 0 16px" }}>{label}</h2>
          <p className="t-body" style={{ opacity: 0.86, maxWidth: 420, margin: "0 0 28px" }}>{tags.join(" · ")}</p>
          <span className="tile-cta" style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: F, fontSize: T.sm, fontWeight: 600, padding: "13px 22px", borderRadius: 999, background: "rgba(255,255,255,0.14)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.28)" }}>{cta} <span aria-hidden className="arrow">→</span></span>
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
      <Panel first tone="light" className="hero" innerStyle={{ minHeight: "100svh", display: "flex", alignItems: "center" }}>
        <div aria-hidden style={{ position: "absolute", inset: 0, opacity: 0.16, overflow: "hidden" }}>
          <Picture name="hero-landing" widths={[800, 1600]} sizes="100vw" priority parallax="0.25" style={{ position: "absolute", inset: 0, top: "-9%" }} />
        </div>
        <div aria-hidden style={{ position: "absolute", inset: 0, background: `linear-gradient(180deg, rgba(245,244,241,0) 55%, ${C.bg} 100%)` }} />
        <Container style={{ textAlign: "center", paddingTop: 120, paddingBottom: 96 }}>
          <div className="hero-in" aria-hidden style={{ lineHeight: 0.9 }}>
            <Wordmark size="clamp(48px, 8vw, 104px)" at={false} style={{ letterSpacing: "-0.04em" }} />
          </div>
          <p className="hero-in d1" style={{ fontSize: T.lg, fontWeight: 500, margin: "18px 0 0" }}>
            <span>{h.claim[0]}</span>{" "}<span style={{ color: C.silver }}>{h.claim[1]}</span>{" "}<span style={{ color: C.goldText }}>{h.claim[2]}</span>
          </p>
          <h1 className="hero-in d2 t-h2" style={{ margin: "clamp(32px, 5vw, 48px) auto 0", maxWidth: 920 }}>{h.h1}</h1>
          <p className="hero-in d3 t-lead" style={{ maxWidth: 640, margin: "20px auto 0" }}>{h.brandP}</p>
          <div className="hero-in d4" style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginTop: 36 }}>
            <Button to="/tech" color="#4A5866">{h.tracks.tech.label}</Button>
            <Button to="/real-estate" color={C.goldDeep}>{h.tracks.re.label.replace("\n", " ")}</Button>
          </div>
          <div className="hero-in d4" style={{ marginTop: 22 }}><TextLink href="#kontakt">{t.ui.discuss}</TextLink></div>
        </Container>
      </Panel>

      <Panel id="bereiche" tone="white" className="panel-tight" chapter={ch[0]}>
        <Container wide>
          <Reveal><Eyebrow n={ch[0].n}>{ch[0].name}</Eyebrow></Reveal>
          <Reveal delay={0.05}><H2 style={{ marginBottom: 40 }}>{h.selectTitle}</H2></Reveal>
          <div className="split-tiles">
            <TrackTile to="/tech" img={{ name: "hero-tech", widths: [800, 1400] }} overlay="linear-gradient(180deg, rgba(14,18,24,0.1) 0%, rgba(14,18,24,0.35) 45%, rgba(14,18,24,0.85) 100%)" eyebrow={t.ui.since15} {...h.tracks.tech} />
            <TrackTile to="/real-estate" img={{ name: "hero-re", widths: [800, 1280] }} overlay="linear-gradient(180deg, rgba(34,22,8,0.1) 0%, rgba(34,22,8,0.35) 45%, rgba(34,22,8,0.85) 100%)" eyebrow={t.ui.since06} {...h.tracks.re} delay={0.1} />
          </div>
          <Reveal><div style={{ ...LABEL, color: C.muted, margin: "clamp(56px, 7vw, 88px) 0 24px" }}>{h.waysLabel}</div></Reveal>
          <div className="cols-3">
            {h.ways.map((w, i) => (
              <Reveal key={w.t} delay={i * 0.08} className="rule-top">
                <span className="t-small" style={{ fontWeight: 600, fontVariantNumeric: "tabular-nums", color: i === 2 ? C.goldDeep : C.silverInk }}>{String(i + 1).padStart(2, "0")}</span>
                <h3 className="t-h3" style={{ margin: "12px 0 8px" }}>{w.t}</h3>
                <p className="t-body" style={{ color: C.dim, margin: 0 }}>{w.d}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Panel>

      <Clients t={t} scope="home" id="kunden" title={ch[1].name} ch={ch[1]} />
      <TeamCards t={t} ch={ch[2]} />
      <Regulated t={t} ch={ch[3]} />
      <References t={t} ch={ch[4]} />
      <Timeline t={t} lang={lang} ch={ch[5]} />
      <ContactSection t={t} tc={TRACK.tech} ch={ch[6]} />
    </main>
  );
}
