import { useEffect, useState } from "react";
import { Routes, Route, useLocation, useMatch } from "react-router-dom";
import { TX, HTML_LANG } from "./content";
import { C, F } from "./tokens";
import { useStack } from "./ui";
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
      const t = setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 80);
      return () => clearTimeout(t);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

const EASE = "cubic-bezier(.16,1,.3,1)";
const CSS = `
*,*::before,*::after{box-sizing:border-box}
html{scroll-behavior:smooth;-webkit-text-size-adjust:100%;overflow-x:clip}
body{margin:0;background:${C.bg};color:${C.dark};font-family:${F};overflow-x:clip;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}
::selection{background:${C.dark};color:#fff}
a:focus-visible,button:focus-visible,input:focus-visible,select:focus-visible,textarea:focus-visible{outline:2px solid ${C.silver};outline-offset:3px}
.sr-only{position:absolute!important;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0}
.cform input:focus,.cform select:focus,.cform textarea:focus{outline:none;border-bottom-color:${C.dark}!important}

/* reveal + hero entrance */
.reveal{opacity:0;transform:translate3d(0,28px,0);filter:blur(6px);transition:opacity 1s ${EASE},transform 1.1s ${EASE},filter 1s ${EASE}}
.reveal.is-in{opacity:1;transform:none;filter:none}
@keyframes heroIn{from{opacity:0;transform:translate3d(0,36px,0);filter:blur(8px)}to{opacity:1;transform:none;filter:none}}
.hero-in{animation:heroIn 1.3s ${EASE} both}
.hero-in.d1{animation-delay:.12s}.hero-in.d2{animation-delay:.24s}.hero-in.d3{animation-delay:.36s}.hero-in.d4{animation-delay:.5s}

/* stacking panels: each sticks, the next one slides over it */
.panel{position:sticky;top:0;overflow:hidden;border-radius:32px 32px 0 0;box-shadow:0 -30px 60px -30px rgba(0,0,0,.28)}
.panel-first{border-radius:0;box-shadow:none}
.panel::after{content:"";position:absolute;inset:0;background:#0B0C0E;opacity:calc(var(--cover,0) * .38);pointer-events:none;border-radius:inherit}
.panel-inner{position:relative;padding:clamp(96px,12vw,168px) 0;transform:scale(calc(1 - var(--cover,0) * .045));transform-origin:50% 100%}
.panel-tight>.panel-inner{padding:clamp(64px,8vw,112px) 0}
.panel-flush>.panel-inner,.panel-first>.panel-inner{padding:0}
.tone-dark .display,.tone-dark h3{color:#F7F6F3}

/* layout primitives */
.duo{display:grid;grid-template-columns:1fr 1fr}
.duo-col{display:flex;flex-direction:column}
.duo-col:first-child{padding-right:clamp(32px,5vw,80px)}
.duo-col+.duo-col{padding-left:clamp(32px,5vw,80px);border-left:1px solid rgba(0,0,0,.1)}
.facts{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:24px}
.cols-3,.cols-4,.cols-5{display:grid;column-gap:clamp(28px,4vw,56px);row-gap:48px}
.cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}
.cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}
.cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}
.rule-top{border-top:1px solid rgba(0,0,0,.14);padding-top:22px}
.rule-light{border-top-color:rgba(255,255,255,.18)}
.split-2{display:grid;grid-template-columns:1fr 1fr;gap:clamp(40px,6vw,96px)}
.split-2.tight{gap:28px}
.split-tiles{display:grid;grid-template-columns:1fr 1fr;gap:20px}
.row-line{padding:16px 0;border-top:1px solid rgba(0,0,0,.1)}
.row-line:last-child{border-bottom:1px solid rgba(0,0,0,.1)}
.row-light{border-color:rgba(255,255,255,.12)!important}
.hero-grid{display:grid;grid-template-columns:minmax(0,1fr) 420px;gap:64px;align-items:center}
.stats-row{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:28px 40px;margin:clamp(56px,7vw,88px) 0 0;padding-top:28px;border-top:1px solid rgba(0,0,0,.12)}

/* interactions */
.btn:hover{transform:translateY(-1px)}
.btn .arrow,.text-link .arrow,.tile-cta .arrow,.news-row .arrow{display:inline-block;transition:transform .35s ${EASE}}
.btn:hover .arrow,.text-link:hover .arrow,.track-tile:hover .arrow,.news-row:hover .arrow{transform:translateX(5px)}
.btn-ghost:hover{background:${C.dark}!important;color:#fff!important;border-color:${C.dark}!important}
.nav-link,.u-link{background-image:linear-gradient(currentColor,currentColor);background-repeat:no-repeat;background-position:0 100%;background-size:0 1px;transition:background-size .4s ${EASE};padding-bottom:3px}
.nav-link:hover,.u-link:hover{background-size:100% 1px}
.track-tile .track-img img{transform:scale(1.02);transition:transform 1.4s ${EASE}}
.track-tile:hover .track-img img{transform:scale(1.08)}
.track-tile:hover .tile-cta{background:rgba(255,255,255,.26)!important}
.scroll-cue .cue-line{width:1px;height:48px;background:linear-gradient(${C.muted},transparent);transform-origin:top;animation:cue 2.2s ${EASE} infinite}
@keyframes cue{0%{transform:scaleY(0)}50%{transform:scaleY(1)}100%{transform:scaleY(1);opacity:0}}

/* services + news rows */
.service-row{display:grid;grid-template-columns:56px minmax(0,1fr) minmax(0,1.25fr);gap:32px;align-items:baseline;padding:34px 0;border-top:1px solid rgba(0,0,0,.1)}
.service-row:last-child{border-bottom:1px solid rgba(0,0,0,.1)}
.service-row h3{transition:transform .5s ${EASE}}
.service-row:hover h3{transform:translateX(8px)}
.news-row{display:grid;grid-template-columns:110px minmax(0,1fr) 28px;gap:24px;align-items:baseline;padding:26px 0;border-top:1px solid rgba(0,0,0,.1);text-decoration:none}
li:last-child>.news-row{border-bottom:1px solid rgba(0,0,0,.1)}
.news-row:hover>span:nth-child(2)>span:first-child{color:${C.silver}!important}

/* process */
.proc{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:28px;position:relative}
.proc::before{content:"";position:absolute;top:5px;left:0;right:0;height:1px;background:rgba(0,0,0,.14)}
.proc-dot{width:11px;height:11px;border-radius:50%;margin-bottom:24px;position:relative}

/* logo marquee */
.marquees{margin-top:8px}
.marquee{overflow:hidden;-webkit-mask-image:linear-gradient(90deg,transparent,#000 9%,#000 91%,transparent);mask-image:linear-gradient(90deg,transparent,#000 9%,#000 91%,transparent)}
.marquee+.marquee{margin-top:clamp(18px,2.4vw,30px)}
.marquee-track{display:flex;width:max-content;animation:marquee linear infinite}
.marquee-track.reverse{animation-direction:reverse}
.marquee:hover .marquee-track{animation-play-state:paused}
@keyframes marquee{from{transform:translate3d(0,0,0)}to{transform:translate3d(-50%,0,0)}}
.logo-item{flex:none;display:flex;align-items:center;padding:0 clamp(26px,3.6vw,52px)}
.logo-word{font-family:${F};font-size:clamp(22px,2.7vw,38px);font-weight:500;letter-spacing:-.025em;color:#A9AEB3;white-space:nowrap;transition:color .4s}
.logo-item:hover .logo-word{color:${C.dark}}
.logo-item img{filter:grayscale(1);opacity:.55;transition:filter .4s,opacity .4s}
.logo-item:hover img{filter:none;opacity:1}

/* timeline */
.tl-legend{display:grid;grid-template-columns:1fr 64px 1fr;margin:0 0 28px;font-family:${F};font-size:12px;letter-spacing:2px;text-transform:uppercase;font-weight:600}
.tl-legend>span:first-child{justify-self:end;padding-right:36px}
.tl-legend>span:last-child{padding-left:36px}
.tl-row{display:grid;grid-template-columns:1fr 64px 1fr;align-items:start}
.tl-left{padding:10px 36px 0 0}
.tl-right{padding:10px 0 0 36px}
.tl-spine{display:flex;flex-direction:column;align-items:center;align-self:stretch}
.tl-line{width:1px;flex:1;min-height:36px;background:rgba(0,0,0,.14)}
.tl-card{padding:0 0 36px}
.tl-card-david{text-align:right}
.tl-mob{display:none}
.tl-minor{width:11px;height:11px;border-radius:50%;margin-top:18px;flex-shrink:0}
.tl-row-joint{grid-template-rows:56px auto}
.tl-row-joint .tl-spine{grid-column:2;grid-row:1/span 2}
.tl-jcard{grid-column:1/-1;grid-row:2;justify-self:center;width:min(100%,640px);margin:6px 0 40px;text-align:center;background:${C.bg};position:relative;z-index:1;padding:22px 30px 24px;box-shadow:0 1px 0 rgba(0,0,0,.06),0 18px 40px -24px rgba(0,0,0,.25)}
.tl-jcard .tl-jlabel{justify-content:center}
.tl-jbar{position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,${C.gold},${C.silverLine})}
.tl-row-joint.is-final .tl-jcard{margin-bottom:0;padding:28px 36px 30px}

/* nav */
.nav-desk{display:flex}
.nav-mob{display:none}

@media (max-width:1120px){
  .nav-desk{display:none}
  .nav-mob{display:flex}
  .cols-4{grid-template-columns:repeat(2,minmax(0,1fr))}
  .cols-5{grid-template-columns:repeat(3,minmax(0,1fr))}
  .hero-grid{grid-template-columns:minmax(0,1fr) 300px;gap:40px}
  .proc{grid-template-columns:repeat(3,minmax(0,1fr));row-gap:40px}
  .proc::before{display:none}
}
@media (max-width:760px){
  .panel{position:relative!important;top:auto!important;border-radius:24px 24px 0 0;margin-top:-24px}
  .panel-first{margin-top:0}
  .panel::after{display:none}
  .panel-inner{transform:none!important}
  .duo,.split-2,.split-tiles,.cols-3,.cols-4{grid-template-columns:minmax(0,1fr)}
  .duo-col:first-child{padding:0 0 56px}
  .duo-col+.duo-col{padding:56px 0 0;border-left:none;border-top:1px solid rgba(0,0,0,.1)}
  .cols-5{grid-template-columns:repeat(2,minmax(0,1fr))}
  .hero-grid{grid-template-columns:minmax(0,1fr)}
  .hero-visual{display:none}
  .service-row{grid-template-columns:40px minmax(0,1fr);gap:8px 16px}
  .service-row>div{grid-column:2}
  .news-row{grid-template-columns:minmax(0,1fr) 24px;gap:6px 16px}
  .news-row>span:first-child{grid-column:1/-1}
  .proc{grid-template-columns:minmax(0,1fr)}
  .tl-legend{display:flex;justify-content:center;gap:24px;flex-wrap:wrap}
  .tl-legend>span{padding:0!important;justify-self:auto!important}
  .tl-legend>span:nth-child(2){display:none}
  .tl-row{grid-template-columns:48px minmax(0,1fr)}
  .tl-left,.tl-desk{display:none}
  .tl-right{padding:8px 0 0 18px}
  .tl-mob{display:block}
  .tl-card-david{text-align:left}
  .tl-row-joint{grid-template-rows:auto}
  .tl-row-joint .tl-spine{grid-column:1;grid-row:1}
  .tl-jcard{grid-column:2;grid-row:1;justify-self:stretch;width:auto;margin:4px 0 32px 18px;text-align:left;padding:18px 18px 20px}
  .tl-jcard .tl-jlabel{justify-content:flex-start}
  .track-pill{display:none!important}
}
@media (max-width:600px){ .wm-sub{display:none!important} }
@media (max-width:340px){ .facts{grid-template-columns:minmax(0,1fr)!important} }
@media (prefers-reduced-motion:reduce){
  html{scroll-behavior:auto}
  .reveal,.hero-in{opacity:1!important;transform:none!important;filter:none!important;transition:none!important;animation:none!important}
  .panel{position:relative!important;top:auto!important}
  .panel::after{display:none}
  .panel-inner{transform:none!important}
  .marquee{-webkit-mask-image:none;mask-image:none}
  .marquee-track{animation:none;flex-wrap:wrap;width:auto;row-gap:18px}
  .logo-item.dup{display:none}
  .track-tile .track-img img,.service-row h3,.btn .arrow{transition:none}
}
`;

export default function NewApp() {
  const [lang, setLangState] = useState(initialLang);
  const t = TX[lang];
  const tech = useMatch("/tech");
  const re = useMatch("/real-estate");
  const home = useMatch("/");
  const track = tech ? "tech" : re ? "re" : null;
  useStack();

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
