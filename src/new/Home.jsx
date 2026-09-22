import { useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { C, F, TRACK } from "./tokens";
import { Picture } from "./ui";
import { TeamCards, Regulated, Timeline, Clients } from "./sections";
import { ContactSection } from "./Contact";

function TrackCard({ to, img, overlay, bar, eyebrow, label, sub, tags, cta }) {
  return (
    <Link to={to} className="track-card" style={{ position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 28, minHeight: "clamp(360px, 44vw, 480px)", padding: "clamp(28px, 4vw, 48px)", textDecoration: "none", color: "#fff" }}>
      <Picture {...img} sizes="(max-width: 760px) 100vw, 50vw" style={{ position: "absolute", inset: 0 }} />
      <div aria-hidden style={{ position: "absolute", inset: 0, background: overlay }} />
      <div aria-hidden style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: bar }} />
      <div style={{ position: "relative" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 24 }}>
          <span aria-hidden style={{ width: 20, height: 1, background: "rgba(255,255,255,0.7)" }} />
          <span style={{ fontFamily: F, fontSize: 10, letterSpacing: 2.6, textTransform: "uppercase", fontWeight: 600, color: "rgba(255,255,255,0.92)" }}>{eyebrow}</span>
        </div>
        <h2 style={{ fontFamily: F, fontSize: "clamp(26px, 3.4vw, 42px)", fontWeight: 300, lineHeight: 1.15, letterSpacing: "-0.02em", whiteSpace: "pre-line", margin: "0 0 16px", textShadow: "0 2px 18px rgba(0,0,0,0.4)" }}>{label}</h2>
        <p style={{ fontFamily: F, fontSize: 14, lineHeight: 1.65, color: "rgba(255,255,255,0.88)", maxWidth: 360, margin: 0 }}>{sub}</p>
      </div>
      <div style={{ position: "relative" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 22 }}>
          {tags.map((tag) => <span key={tag} style={{ fontFamily: F, fontSize: 10, letterSpacing: 0.8, textTransform: "uppercase", fontWeight: 700, padding: "5px 9px", background: "rgba(10,14,20,0.5)", border: "1px solid rgba(255,255,255,0.16)" }}>{tag}</span>)}
        </div>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: F, fontSize: 13, fontWeight: 700, letterSpacing: 0.4, background: "rgba(10,14,20,0.45)", padding: "9px 14px" }}>{cta} <span aria-hidden>→</span></span>
      </div>
    </Link>
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
      <section style={{ position: "relative", overflow: "hidden", background: C.bg, paddingBottom: "clamp(32px, 5vw, 56px)" }}>
        <div aria-hidden style={{ position: "absolute", inset: 0, opacity: 0.12 }}>
          <Picture name="hero-landing" widths={[800, 1600]} sizes="100vw" priority />
        </div>
        <div style={{ position: "relative", textAlign: "center", padding: "clamp(104px, 14vw, 132px) clamp(16px, 4vw, 40px) clamp(28px, 4vw, 40px)" }}>
          <h1 style={{ fontFamily: F, fontSize: "clamp(40px, 6vw, 78px)", fontWeight: 300, letterSpacing: "-0.03em", lineHeight: 1.02, margin: 0 }}>
            <span style={{ color: C.silver, fontWeight: 400 }}>In</span><span style={{ color: C.gold, fontWeight: 700 }}>Ventures</span>
          </h1>
          <p style={{ fontFamily: F, fontSize: 16, fontWeight: 600, color: C.dark, letterSpacing: 0.4, margin: "16px 0 0" }}>{h.brandSub}</p>
          <p style={{ fontFamily: F, fontSize: 15, color: C.dim, lineHeight: 1.7, maxWidth: 720, margin: "12px auto 0" }}>{h.brandP}</p>
          <p style={{ fontFamily: F, fontSize: "clamp(26px, 4vw, 46px)", fontWeight: 300, letterSpacing: "-0.025em", lineHeight: 1.1, margin: "26px 0 0" }}>
            <span style={{ color: C.dark }}>{h.claim[0]}</span>{" "}
            <span style={{ color: C.silver, fontWeight: 600 }}>{h.claim[1]}</span>{" "}
            <span style={{ color: C.gold }}>{h.claim[2]}</span>
          </p>
          <p style={{ fontFamily: F, fontSize: 14, color: C.dim, margin: "14px 0 0" }}>{h.selectTitle}</p>
          <p style={{ fontFamily: F, fontSize: 11, color: C.muted, letterSpacing: 1.2, textTransform: "uppercase", margin: "6px 0 0" }}>{h.selectSub}</p>
        </div>
        <div className="split" style={{ position: "relative", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(12px, 2vw, 20px)", maxWidth: 1200, margin: "0 auto", padding: "0 clamp(12px, 3vw, 40px)" }}>
          <TrackCard to="/tech" img={{ name: "hero-tech", widths: [800, 1400] }} overlay="linear-gradient(90deg, rgba(16,20,26,0.8) 0%, rgba(18,24,30,0.58) 45%, rgba(18,24,30,0.3) 100%)" bar={`linear-gradient(90deg, ${C.silverLine}, ${C.silver})`} eyebrow={t.ui.since15} {...h.tracks.tech} />
          <TrackCard to="/real-estate" img={{ name: "hero-re", widths: [800, 1280] }} overlay="linear-gradient(90deg, rgba(38,24,10,0.78) 0%, rgba(50,34,12,0.55) 45%, rgba(50,34,12,0.26) 100%)" bar={`linear-gradient(90deg, ${C.goldLine}, ${C.gold})`} eyebrow={t.ui.since06} {...h.tracks.re} />
        </div>
      </section>
      <TeamCards t={t} />
      <Regulated t={t} />
      <Timeline t={t} lang={lang} />
      <Clients t={t} scope="home" id="kunden" />
      <ContactSection t={t} tc={TRACK.tech} />
    </main>
  );
}
