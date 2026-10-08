import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { C, F, T, LABEL, META, TRACK, MAXW, GLASS } from "./tokens";
import { LANGS } from "./content";
import { Wordmark, Panel, Container, H2, Rich } from "./ui";

function LangSwitch({ lang, setLang, tc, onDark }) {
  return (
    <div role="group" aria-label="Language" style={{ display: "flex", gap: 2 }}>
      {LANGS.map(([code, label]) => {
        const on = lang === code;
        return (
          <button key={code} type="button" aria-pressed={on} onClick={() => setLang(code)}
            className="lang-btn" style={{ fontFamily: F, fontSize: T.xs, letterSpacing: "0.04em", whiteSpace: "nowrap", fontWeight: on ? 600 : 500, color: onDark ? C.onDark : on ? tc.at : C.text, background: on ? (onDark ? GLASS.dark.selected : tc.as) : "transparent", border: "none", padding: "6px 9px", cursor: "pointer", borderRadius: 999 }}>
            {label}
          </button>
        );
      })}
    </div>
  );
}

// Nav target: "/route" → route link, "id" → anchor on this page, "/#id" → anchor on the overview.
function NavLink({ to, children, style, className, onClick }) {
  if (to.startsWith("/")) return <Link to={to} className={className} style={style} onClick={onClick}>{children}</Link>;
  return <a href={`#${to}`} className={className} style={style} onClick={onClick}>{children}</a>;
}

// Dark content behind the bar: there the bar turns into dark glass, as Liquid Glass adapts to what it floats over.
const DARK_BEHIND = ".tone-dark, .track-tile, .portrait";

export function Nav({ t, lang, setLang, track, links }) {
  const [open, setOpen] = useState(false);
  const [onDark, setOnDark] = useState(false);
  const [scrolled, setScrolled] = useState(false); // content runs under the bar: scroll edge effect
  const [compact, setCompact] = useState(false); // scrolling down: the bar minimises (HIG tab bars), scrolling up restores it
  const [lens, setLens] = useState(null); // glass lens that glides to the hovered link
  const { pathname } = useLocation();
  const tc = TRACK[track] || TRACK.tech;
  useEffect(() => {
    let raf = 0;
    let lastY = window.scrollY;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      setScrolled(y > 8);
      if (y < 160 || y < lastY - 6) setCompact(false);
      else if (y > lastY + 6) setCompact(true);
      if (Math.abs(y - lastY) > 6) lastY = y;
      // What is behind the bar: probe three points along its middle line.
      const dark = [0.2, 0.5, 0.8].filter((f) => {
        const el = document.elementsFromPoint(window.innerWidth * f, 36).find((e) => !e.closest("header"));
        return el && el.closest(DARK_BEHIND);
      }).length;
      setOnDark(dark >= 2);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);
  useEffect(() => setOpen(false), [track]);
  const ink = onDark ? { text: C.onDark, line: GLASS.dark.border } : { text: C.text, line: C.border };
  const linkStyle = { fontFamily: F, fontSize: T.sm, color: ink.text, textDecoration: "none", fontWeight: 500, whiteSpace: "nowrap" };

  return (
    <header className="nav-shell">
      <div aria-hidden className={`scroll-edge ${scrolled ? "is-on" : ""}`} />
      <div className={`nav-bar glass ${onDark ? "glass-dark" : ""} ${open ? "is-open" : ""} ${compact && !open ? "is-compact" : ""}`}>
        <nav aria-label="Main">
          <div style={{ display: "flex", alignItems: "center", gap: 14, minWidth: 0 }}>
            <Link to="/" aria-label="InVentures" className="hit" style={{ textDecoration: "none", display: "inline-flex" }}><Wordmark size={22} /></Link>
            {track && (
              <span className="track-pill" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "5px 8px 5px 12px", background: `linear-gradient(${tc.as}, ${tc.as}), ${GLASS.inset}`, borderRadius: 999 }}>
                <span aria-hidden style={{ width: 5, height: 5, borderRadius: "50%", background: tc.a }} />
                <span style={{ ...META, color: tc.at, whiteSpace: "nowrap" }}>{track === "re" ? t.ui.trackRe : t.ui.trackTech}</span>
                <Link to="/" aria-label={t.ui.switchTrack} title={t.ui.switchTrack} className="hit" style={{ color: C.dim, fontSize: 12, textDecoration: "none", padding: "0 4px" }}>✕</Link>
              </span>
            )}
          </div>
          <div className="nav-desk" style={{ alignItems: "center", gap: 2, position: "relative" }}
            onMouseOver={(e) => { const a = e.target.closest(".nav-link"); if (a) setLens({ x: a.offsetLeft, w: a.offsetWidth }); }}
            onMouseLeave={() => setLens((l) => l && { ...l, off: true })}>
            <span aria-hidden className="nav-lens" style={lens ? { transform: `translateX(${lens.x}px)`, width: lens.w, opacity: lens.off ? 0 : 1 } : { opacity: 0 }} />
            {links.map(([id, label]) => <NavLink key={id} to={id} className="nav-link" style={linkStyle}>{label}</NavLink>)}
            <span aria-hidden style={{ width: 1, height: 14, background: ink.line, margin: "0 10px" }} />
            <LangSwitch lang={lang} setLang={setLang} tc={tc} onDark={onDark} />
          </div>
          <div className="nav-mob" style={{ alignItems: "center" }}>
            <button type="button" aria-label={t.ui.menu} aria-expanded={open} onClick={() => setOpen(!open)} style={{ background: "none", border: "none", cursor: "pointer", width: 44, height: 44, padding: 11, display: "flex", flexDirection: "column", justifyContent: "center", gap: 5 }}>
              {[0, 1, 2].map((i) => (
                <span key={i} style={{ width: 22, height: 2, background: onDark ? C.onDark : C.dark, transition: "all .3s", opacity: open && i === 1 ? 0 : 1, transform: open ? (i === 0 ? "rotate(45deg) translate(5px,5px)" : i === 2 ? "rotate(-45deg) translate(5px,-5px)" : "none") : "none" }} />
              ))}
            </button>
          </div>
        </nav>
        {/* phone menu: grows out of the same glass surface */}
        <div className={`nav-menu ${open ? "is-open" : ""}`} inert={open ? undefined : ""}>
          <div style={{ minHeight: 0, overflow: "hidden" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 4, padding: "4px 20px 18px", borderTop: `1px solid ${ink.line}` }}>
            {links.map(([id, label]) => <NavLink key={id} to={id} onClick={() => setOpen(false)} style={{ ...linkStyle, fontSize: T.lg, padding: "10px 0" }}>{label}</NavLink>)}
            {track && <Link to="/" onClick={() => setOpen(false)} style={{ fontFamily: F, fontSize: T.base, fontWeight: 500, color: onDark ? C.onDark : tc.at, textDecoration: "none", paddingTop: 10, marginTop: 6, borderTop: `1px solid ${ink.line}` }}>← {t.ui.back}</Link>}
            {/* on small screens the language choice lives in the menu, so the bar keeps only logo and menu */}
            <div style={{ paddingTop: 12, marginTop: 6, borderTop: `1px solid ${ink.line}` }}><div style={{ marginLeft: -9 }}><LangSwitch lang={lang} setLang={setLang} tc={tc} onDark={onDark} /></div></div>
          </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export function Footer({ t, track }) {
  const small = { ...META, color: C.dim, textDecoration: "none", background: "none", border: "none", padding: 0, cursor: "pointer" };
  const pill = { ...META, textDecoration: "none", padding: "8px 14px", borderRadius: GLASS.radius }; // glass capsules to the two areas
  return (
    <footer style={{ position: "relative", zIndex: 50, background: C.bg, padding: "48px clamp(20px, 5vw, 56px) 40px" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto", display: "flex", flexDirection: "column", gap: 22 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 14 }}>
          <div>
            <Wordmark size={20} />
            <div className="t-small" style={{ color: C.dim, marginTop: 8 }}><Rich text={t.ui.entityLong} /></div>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            {track !== "tech" && <Link to="/tech" className="hit glass glass-press" style={{ ...pill, color: C.silverInk }}>{t.ui.trackTech}</Link>}
            {track !== "re" && <Link to="/real-estate" className="hit glass glass-press" style={{ ...pill, color: C.goldDeep }}>{t.ui.trackRe}</Link>}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, paddingTop: 14, borderTop: `1px solid ${C.border}` }}>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
            <Link to="/impressum" className="hit" style={small}>{t.ui.imprint}</Link>
            <Link to="/datenschutz" className="hit" style={small}>{t.ui.privacy}</Link>
            <Link to="/insights" className="hit" style={small}>{t.insights.label}</Link>
          </div>
          <span className="t-small" style={{ color: C.dim }}>2006–2026 InVentures</span>
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
          <div style={{ ...LABEL, color: C.silverInk, marginBottom: 16 }}>404</div>
          <H2>{t.ui.notFoundTitle}</H2>
          <p className="t-lead" style={{ margin: "0 0 36px" }}>{t.ui.notFoundText}</p>
          <Link to="/" className="btn" style={{ fontFamily: F, fontSize: T.sm, fontWeight: 600, padding: "15px 28px", borderRadius: 999, background: C.dark, color: "#fff", textDecoration: "none" }}>← {t.ui.back}</Link>
        </Container>
      </Panel>
    </main>
  );
}
