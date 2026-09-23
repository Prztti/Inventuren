import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { C, F, TRACK, MAXW } from "./tokens";
import { LANGS } from "./content";
import { Wordmark, Panel, Container, H2 } from "./ui";

function LangSwitch({ lang, setLang, tc }) {
  return (
    <div role="group" aria-label="Language" style={{ display: "flex", gap: 2 }}>
      {LANGS.map(([code, label]) => (
        <button key={code} type="button" aria-pressed={lang === code} onClick={() => setLang(code)}
          style={{ fontFamily: F, fontSize: 11, letterSpacing: 0.5, whiteSpace: "nowrap", fontWeight: lang === code ? 700 : 500, color: lang === code ? tc.at : C.dim, background: lang === code ? tc.as : "transparent", border: "none", padding: "6px 9px", cursor: "pointer" }}>
          {label}
        </button>
      ))}
    </div>
  );
}

export function Nav({ t, lang, setLang, track, links }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const tc = TRACK[track] || TRACK.tech;
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    h();
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);
  useEffect(() => setOpen(false), [track]);
  const solid = scrolled || open;
  const linkStyle = { fontFamily: F, fontSize: 14, letterSpacing: 0, color: C.text, textDecoration: "none", fontWeight: 500, whiteSpace: "nowrap" };

  return (
    <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: solid ? "rgba(245,244,241,0.82)" : "transparent", backdropFilter: solid ? "saturate(1.4) blur(20px)" : "none", WebkitBackdropFilter: solid ? "saturate(1.4) blur(20px)" : "none", borderBottom: scrolled ? `1px solid ${C.border}` : "1px solid transparent", transition: "background .4s, padding .4s", padding: scrolled ? "12px 0" : "22px 0" }}>
      <nav aria-label="Main" style={{ maxWidth: 1320, margin: "0 auto", padding: "0 clamp(20px, 5vw, 56px)", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, minWidth: 0 }}>
          <Link to="/" aria-label="InVentures" style={{ textDecoration: "none" }}><Wordmark size={15} sub={t.ui.entity} /></Link>
          {track && (
            <span className="track-pill" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "5px 8px 5px 12px", background: tc.as, borderRadius: 999 }}>
              <span aria-hidden style={{ width: 5, height: 5, borderRadius: "50%", background: tc.a }} />
              <span style={{ fontFamily: F, fontSize: 10, letterSpacing: 1.4, textTransform: "uppercase", color: tc.at, fontWeight: 700, whiteSpace: "nowrap" }}>{track === "re" ? t.ui.trackRe : t.ui.trackTech}</span>
              <Link to="/" aria-label={t.ui.switchTrack} title={t.ui.switchTrack} style={{ color: C.dim, fontSize: 12, textDecoration: "none", padding: "0 4px" }}>✕</Link>
            </span>
          )}
        </div>
        <div className="nav-desk" style={{ alignItems: "center", gap: 26 }}>
          {links.map(([id, label]) => <a key={id} href={`#${id}`} className="nav-link" style={linkStyle}>{label}</a>)}
          <span aria-hidden style={{ width: 1, height: 14, background: "rgba(0,0,0,0.12)" }} />
          <LangSwitch lang={lang} setLang={setLang} tc={tc} />
        </div>
        <div className="nav-mob" style={{ alignItems: "center", gap: 8 }}>
          <LangSwitch lang={lang} setLang={setLang} tc={tc} />
          <button type="button" aria-label={t.ui.menu} aria-expanded={open} onClick={() => setOpen(!open)} style={{ background: "none", border: "none", cursor: "pointer", padding: 8, display: "flex", flexDirection: "column", gap: 5 }}>
            {[0, 1, 2].map((i) => (
              <span key={i} style={{ width: 22, height: 2, background: C.dark, transition: "all .3s", opacity: open && i === 1 ? 0 : 1, transform: open ? (i === 0 ? "rotate(45deg) translate(5px,5px)" : i === 2 ? "rotate(-45deg) translate(5px,-5px)" : "none") : "none" }} />
            ))}
          </button>
        </div>
      </nav>
      {open && (
        <div className="nav-mob" style={{ flexDirection: "column", gap: 4, padding: "12px 20px 18px", borderTop: `1px solid ${C.border}` }}>
          {links.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)} style={{ ...linkStyle, fontSize: 15, textTransform: "none", padding: "8px 0" }}>{label}</a>)}
          {track && <Link to="/" onClick={() => setOpen(false)} style={{ fontFamily: F, fontSize: 14, color: tc.at, textDecoration: "none", paddingTop: 10, marginTop: 6, borderTop: `1px solid ${C.border}` }}>← {t.ui.back}</Link>}
        </div>
      )}
    </header>
  );
}

export function Footer({ t, track }) {
  const small = { fontFamily: F, fontSize: 11, letterSpacing: 1.1, textTransform: "uppercase", color: C.dim, textDecoration: "none", background: "none", border: "none", padding: 0, cursor: "pointer" };
  return (
    <footer style={{ position: "relative", zIndex: 50, background: C.bg, padding: "48px clamp(20px, 5vw, 56px) 40px" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto", display: "flex", flexDirection: "column", gap: 22 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 14 }}>
          <div>
            <Wordmark size={13} />
            <div style={{ fontFamily: F, fontSize: 12, color: C.dim, marginTop: 6 }}>{t.ui.entityLong}</div>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            {track !== "tech" && <Link to="/tech" style={{ ...small, fontSize: 11, color: C.silver, background: C.silverSoft, padding: "8px 14px", borderRadius: 999 }}>{t.ui.trackTech}</Link>}
            {track !== "re" && <Link to="/real-estate" style={{ ...small, fontSize: 11, color: C.goldDeep, background: C.goldSoft, padding: "8px 14px", borderRadius: 999 }}>{t.ui.trackRe}</Link>}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, paddingTop: 14, borderTop: `1px solid ${C.border}` }}>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
            <a href="/impressum" style={small}>{t.ui.imprint}</a>
            <a href="/datenschutz" style={small}>{t.ui.privacy}</a>
            <button type="button" onClick={() => window.dispatchEvent(new Event("open-consent"))} style={small}>{t.ui.cookies}</button>
          </div>
          <span style={{ fontFamily: F, fontSize: 11, color: C.dim }}>2006–2026 InVentures</span>
        </div>
      </div>
    </footer>
  );
}

export function NotFound({ t }) {
  return (
    <main>
      <Panel first tone="light" innerStyle={{ minHeight: "80svh", display: "flex", alignItems: "center" }}>
        <Container style={{ paddingTop: 120 }}>
          <div style={{ fontFamily: F, fontSize: 12, letterSpacing: 2.4, textTransform: "uppercase", color: C.silver, fontWeight: 600, marginBottom: 16 }}>404</div>
          <H2>{t.ui.notFoundTitle}</H2>
          <p style={{ fontFamily: F, fontSize: 18, color: C.dim, margin: "0 0 36px" }}>{t.ui.notFoundText}</p>
          <Link to="/" className="btn" style={{ fontFamily: F, fontSize: 14, fontWeight: 600, padding: "15px 28px", borderRadius: 999, background: C.dark, color: "#fff", textDecoration: "none" }}>← {t.ui.back}</Link>
        </Container>
      </Panel>
    </main>
  );
}

// Fixed chapter index on the right edge (desktop): shows where you are in the story.
export function ChapterRail({ lang }) {
  const { pathname } = useLocation();
  const [items, setItems] = useState([]);
  const [active, setActive] = useState(-1);
  useEffect(() => {
    let raf = 0;
    const els = () => [...document.querySelectorAll("[data-chapter-n]")];
    const collect = () => setItems(els().map((e) => ({ n: e.dataset.chapterN, name: e.dataset.chapterName, id: e.id })));
    const update = () => {
      raf = 0;
      const probe = window.innerHeight * 0.45;
      let idx = -1;
      els().forEach((e, i) => { if (e.getBoundingClientRect().top <= probe) idx = i; });
      setActive(idx);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    const t = setTimeout(() => { collect(); update(); }, 120);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { clearTimeout(t); window.removeEventListener("scroll", onScroll); if (raf) cancelAnimationFrame(raf); };
  }, [pathname, lang]);
  if (!items.length) return null;
  return (
    <nav aria-label="Chapters" className={`rail ${active >= 0 ? "is-on" : ""}`}>
      {items.map((it, i) => (
        <a key={it.n + it.id} href={`#${it.id}`} className={`rail-item ${i === active ? "is-active" : ""}`} aria-current={i === active ? "true" : undefined}>
          <span className="rail-name">{it.name}</span>
          <span className="rail-n">{it.n}</span>
        </a>
      ))}
    </nav>
  );
}
