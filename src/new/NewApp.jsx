import { useEffect, useState } from "react";
import { Routes, Route, useLocation, useMatch } from "react-router-dom";
import { TX, HTML_LANG } from "./content";
import { C, F } from "./tokens";
import { Nav, Footer, NotFound } from "./Layout";
import Home from "./Home";
import Track from "./Track";
import CookieConsent from "../CookieConsent";

const LANG_KEY = "inventures-lang";

function initialLang() {
  try {
    const q = new URLSearchParams(window.location.search).get("lang");
    if (q && TX[q]) return q;
    const saved = window.localStorage.getItem(LANG_KEY);
    if (saved && TX[saved]) return saved;
  } catch { /* storage unavailable */ }
  const nav = (navigator.language || "en").toLowerCase();
  return nav.startsWith("de") ? "de" : nav.startsWith("zh") ? "cn" : "en";
}

// Scroll to top on route change, or to the #anchor once the new page has rendered.
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash && hash.length > 1) {
      const id = decodeURIComponent(hash.slice(1));
      const t = setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 60);
      return () => clearTimeout(t);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

const CSS = `
*,*::before,*::after{box-sizing:border-box}
html{scroll-behavior:smooth;-webkit-text-size-adjust:100%}
body{margin:0;background:${C.bg};color:${C.dark};font-family:${F};overflow-x:hidden;-webkit-font-smoothing:antialiased}
section[id]{scroll-margin-top:76px}
::selection{background:${C.silverLine};color:#fff}
a:focus-visible,button:focus-visible,input:focus-visible,select:focus-visible,textarea:focus-visible{outline:2px solid ${C.silver};outline-offset:2px}
input:focus,select:focus,textarea:focus{outline:none;border-color:${C.silverLine}!important;box-shadow:0 0 0 3px rgba(107,124,139,.15)}
.g2{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}
.g3{display:grid;grid-template-columns:repeat(3,minmax(0,1fr))}
.g4{display:grid;grid-template-columns:repeat(4,minmax(0,1fr))}
.g5{display:grid;grid-template-columns:repeat(5,minmax(0,1fr))}
.hover-line{transition:border-color .2s}
.hover-line:hover{border-color:var(--hover)!important}
.nav-link:hover{color:${C.dark}!important}
.btn:hover{opacity:.88}
.btn-ghost:hover{border-color:${C.silver}!important;color:${C.silver}!important}
.track-card{transition:transform .35s cubic-bezier(.4,0,.2,1)}
.track-card:hover{transform:translateY(-3px)}
.news:hover h3{color:${C.silver}!important}
.clamp3{display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}
.field-col+.field-col{padding-left:20px!important;border-left:1px solid rgba(0,0,0,.08)}
.tl-row{display:grid;grid-template-columns:1fr 56px 1fr;align-items:start;margin:0 0 6px}
.tl-left{padding:6px 24px 0 0;text-align:right}
.tl-right{padding:6px 0 0 24px}
.tl-spine{display:flex;flex-direction:column;align-items:center;align-self:stretch}
.tl-line{width:1px;flex:1;min-height:24px;margin-top:2px;background:linear-gradient(to bottom,rgba(184,148,75,.45),rgba(184,148,75,.18))}
.tl-mob{display:none}
.tl-l .tl-card{border-right:2px solid rgba(184,148,75,.45)!important}
.tl-r .tl-card{border-left:2px solid rgba(184,148,75,.45)!important}
.proc{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:14px;position:relative}
.proc::before{content:"";position:absolute;top:28px;left:10%;right:10%;height:2px;background:linear-gradient(90deg,${C.silverLine},${C.gold});opacity:.25}
.proc-step{position:relative;text-align:center}
.proc-dot{width:56px;height:56px;border-radius:50%;border:2px solid;background:${C.bg};display:flex;align-items:center;justify-content:center;margin:0 auto 14px;position:relative;z-index:1}
.nav-desk{display:flex}
.nav-mob{display:none}
@media (max-width:1120px){
  .nav-desk{display:none}
  .nav-mob{display:flex}
  .g4{grid-template-columns:repeat(2,minmax(0,1fr))}
  .g5{grid-template-columns:repeat(3,minmax(0,1fr))}
  .field-col:nth-child(3){padding-left:0!important;border-left:none!important}
  .hero-grid{grid-template-columns:minmax(0,1fr) 280px!important}
}
@media (max-width:760px){
  .g2,.g3,.g4{grid-template-columns:minmax(0,1fr)}
  .g5{grid-template-columns:repeat(2,minmax(0,1fr))}
  .field-col,.field-col+.field-col{padding-left:0!important;border-left:none!important}
  .split{grid-template-columns:minmax(0,1fr)!important}
  .hero-grid{grid-template-columns:minmax(0,1fr)!important}
  .hero-visual{display:none}
  .tl-row{grid-template-columns:44px minmax(0,1fr)}
  .tl-left{display:none}
  .tl-right{padding:4px 0 0 14px}
  .tl-mob{display:block}
  .tl-card{border-left:2px solid rgba(184,148,75,.45)!important;border-right:1px solid rgba(184,148,75,.18)!important}
  .proc{grid-template-columns:minmax(0,1fr);gap:22px}
  .proc::before{display:none}
  .proc-step{display:flex;gap:14px;text-align:left}
  .proc-dot{margin:0;flex-shrink:0}
  .track-pill{display:none!important}
}
@media (max-width:600px){
  .wm-sub{display:none!important}
}
@media (max-width:420px){
  .facts{grid-template-columns:minmax(0,1fr)!important}
  .stats{grid-template-columns:minmax(0,1fr)!important}
}
@media (prefers-reduced-motion:reduce){
  html{scroll-behavior:auto}
  .reveal{opacity:1!important;transform:none!important;transition:none!important}
  .track-card,.hover-line{transition:none}
}
`;

export default function NewApp() {
  const [lang, setLangState] = useState(initialLang);
  const t = TX[lang];
  const tech = useMatch("/tech");
  const re = useMatch("/real-estate");
  const home = useMatch("/");
  const track = tech ? "tech" : re ? "re" : null;

  const setLang = (l) => {
    setLangState(l);
    try { window.localStorage.setItem(LANG_KEY, l); } catch { /* storage unavailable */ }
  };

  useEffect(() => {
    document.documentElement.lang = HTML_LANG[lang];
    document.title = track ? t.meta[track] : home ? t.meta.home : t.meta.notFound;
  }, [lang, track, home, t]);

  const links = track ? t[track].nav : home ? t.homeNav : [];

  return (
    <div style={{ fontFamily: F }}>
      <style>{CSS}</style>
      <ScrollManager />
      <Nav t={t} lang={lang} setLang={setLang} track={track} links={links} />
      <Routes>
        <Route path="/" element={<Home t={t} lang={lang} />} />
        <Route path="/tech" element={<Track key="tech" t={t} lang={lang} track="tech" />} />
        <Route path="/real-estate" element={<Track key="re" t={t} lang={lang} track="re" />} />
        <Route path="*" element={<NotFound t={t} />} />
      </Routes>
      <Footer t={t} track={track} />
      <CookieConsent lang={lang} />
    </div>
  );
}
