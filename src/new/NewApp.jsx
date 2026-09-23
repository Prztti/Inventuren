import { useEffect, useState } from "react";
import { Routes, Route, useLocation, useMatch } from "react-router-dom";
import { TX, HTML_LANG } from "./content";
import { C, F } from "./tokens";
import { useStack } from "./ui";
import { Nav, Footer, NotFound, ChapterRail } from "./Layout";
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
/* type scale: 8 fluid steps, mobile -> desktop (see T in tokens.js) */
:root{
  --font:${F};
  --t-xs:.75rem;
  --t-sm:.875rem;
  --t-base:clamp(1rem,.96rem + .18vw,1.0625rem);
  --t-lg:clamp(1.125rem,1.06rem + .3vw,1.25rem);
  --t-xl:clamp(1.25rem,1.14rem + .45vw,1.5rem);
  --t-2xl:clamp(1.75rem,1.4rem + 1.5vw,2.5rem);
  --t-3xl:clamp(2.125rem,1.55rem + 2.5vw,3.75rem);
  --t-4xl:clamp(2.75rem,1.7rem + 4.4vw,5rem);
}
*,*::before,*::after{box-sizing:border-box}
html{scroll-behavior:smooth;-webkit-text-size-adjust:100%;overflow-x:clip}
body{margin:0;background:${C.bg};color:${C.dark};font-family:var(--font);font-size:var(--t-base);line-height:1.6;overflow-x:clip;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-kerning:normal}
h1,h2,h3{text-wrap:balance}
p,li,dd{text-wrap:pretty}
button,input,select,textarea{font-family:inherit}
.t-display{font-size:var(--t-4xl);font-weight:500;letter-spacing:-.035em;line-height:1.02}
.t-h2{font-size:var(--t-3xl);font-weight:500;letter-spacing:-.03em;line-height:1.06}
.t-h3{font-size:var(--t-xl);font-weight:500;letter-spacing:-.012em;line-height:1.3}
.t-title{font-size:var(--t-lg);font-weight:500;letter-spacing:-.006em;line-height:1.35}
.t-stat{font-size:var(--t-2xl);font-weight:500;letter-spacing:-.025em;line-height:1.1;font-variant-numeric:lining-nums tabular-nums}
.t-lead{font-size:var(--t-lg);line-height:1.55;opacity:.74}
.t-body{font-size:var(--t-base);line-height:1.65}
.t-small{font-size:var(--t-sm);line-height:1.55}
.wordmark{font-family:var(--font);display:inline-flex;align-items:baseline;line-height:1;letter-spacing:-.025em;white-space:nowrap}
.wm-at{font-size:.5em;font-weight:500;color:${C.gold};margin-left:.08em;letter-spacing:0}
[aria-label="Cookie consent"],[aria-label="Cookie consent"] *{font-family:var(--font)!important}
[aria-label="Cookie consent"] a{color:${C.gold}!important}
::selection{background:${C.dark};color:#fff}
a:focus-visible,button:focus-visible,input:focus-visible,select:focus-visible,textarea:focus-visible{outline:2px solid ${C.silver};outline-offset:3px}
.sr-only{position:absolute!important;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0}
.cform input:focus,.cform select:focus,.cform textarea:focus{outline:none;border-bottom-color:${C.dark}!important}

/* reveal + hero entrance */
.reveal{opacity:0;transform:translate3d(0,28px,0);filter:blur(6px);transition:opacity 1s ${EASE},transform 1.1s ${EASE},filter 1s ${EASE}}
.reveal.is-in{opacity:1;transform:none;filter:none}
@keyframes heroIn{from{opacity:0;transform:translate3d(0,36px,0);filter:blur(8px)}to{opacity:1;transform:none;filter:none}}
.hero-in{animation:heroIn 1.3s ${EASE} both}
/* room for descenders (g, p, y): animated layers are clipped to the element box in some browsers */
.hero-in,.t-display{padding-bottom:.14em}
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
.logo-word{font-family:var(--font);font-size:var(--t-2xl);font-weight:500;letter-spacing:-.025em;color:#858B92;white-space:nowrap;transition:color .4s}
.logo-item:hover .logo-word{color:${C.dark}}
.logo-item img{transition:filter .4s,opacity .4s}
.logo-item:hover img{filter:none;opacity:1}

/* portraits */
.team-grid{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.05fr);gap:clamp(40px,6vw,96px);align-items:start}
.team-grid>.pair{position:sticky;top:110px}
.pair{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.bio{padding:22px 0;border-top:1px solid rgba(0,0,0,.1)}
.bio .facts{gap:16px}
.portrait img{transition:transform 1.4s cubic-bezier(.16,1,.3,1)}
.portrait:hover img{transform:scale(1.03)}
/* article fold */
.article-fold{position:relative;max-height:760px;overflow:hidden;transition:max-height .8s cubic-bezier(.16,1,.3,1)}
.article-fold::after{content:"";position:absolute;left:0;right:0;bottom:0;height:220px;background:linear-gradient(rgba(255,255,255,0),#fff 85%);pointer-events:none}
.article-fold.is-open{max-height:none}
.article-fold.is-open::after{display:none}
/* logo row */
.marquee-logos .logo-item{padding:0 clamp(28px,3.4vw,48px)}
.logo-item img{filter:grayscale(1) contrast(1.05);opacity:.62}
.logo-item img.raster{mix-blend-mode:multiply}
.logo-item img.dark{filter:grayscale(1) brightness(.55);opacity:.7}
.marquee-words .logo-word{font-size:var(--t-xl)}

/* chapter rail */
.rail{position:fixed;right:22px;top:50%;transform:translateY(-50%);z-index:90;display:flex;flex-direction:column;gap:2px;padding:10px 8px;border-radius:999px;background:rgba(245,244,241,.78);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);box-shadow:0 6px 24px -12px rgba(0,0,0,.35);opacity:0;pointer-events:none;transition:opacity .4s}
.rail.is-on{opacity:1;pointer-events:auto}
.rail-item{position:relative;display:flex;align-items:center;justify-content:center;width:30px;height:24px;text-decoration:none;font-family:var(--font);font-size:var(--t-xs);font-weight:600;font-variant-numeric:tabular-nums;color:${C.muted};border-radius:999px;transition:color .3s,background .3s}
.rail-item:hover,.rail-item.is-active{color:${C.dark}}
.rail-item.is-active{background:#fff}
.rail-name{position:absolute;right:40px;white-space:nowrap;font-size:var(--t-xs);font-weight:600;letter-spacing:.02em;color:${C.dark};background:rgba(255,255,255,.92);padding:5px 10px;border-radius:999px;box-shadow:0 4px 16px -8px rgba(0,0,0,.3);opacity:0;transform:translateX(6px);transition:opacity .3s,transform .3s;pointer-events:none}
.rail-item.is-active .rail-name,.rail-item:hover .rail-name{opacity:1;transform:none}
/* disclosure */
.disclose{display:inline-flex;align-items:center;gap:12px;font-family:var(--font);font-size:var(--t-sm);font-weight:600;color:${C.dark};background:none;border:none;border-bottom:1px solid rgba(0,0,0,.2);padding:6px 0;cursor:pointer;margin-bottom:12px}
.disclose-icon{font-size:18px;line-height:1;color:${C.muted}}

/* timeline */
.tl-legend{display:grid;grid-template-columns:1fr 64px 1fr;margin:0 0 28px;font-family:var(--font);font-size:var(--t-xs);letter-spacing:.12em;text-transform:uppercase;font-weight:600}
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

@media (max-width:1280px){
  .rail{display:none}
}
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
  .team-grid{grid-template-columns:minmax(0,1fr)}
  .team-grid>.pair{position:static}
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
@media (max-width:760px){ .t-h2,.t-display{hyphens:auto;-webkit-hyphens:auto} }
@media (max-width:560px){
  .bio .facts{grid-template-columns:minmax(0,1fr);gap:8px}
  .facts>div{display:flex;align-items:baseline;gap:14px}
  .facts>div>div:first-child{min-width:4.2em}
  .facts>div>div+div{margin-top:0!important}
}
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
    <div>
      <style>{CSS}</style>
      <ScrollManager />
      <Nav t={t} lang={lang} setLang={setLang} track={track} links={links} />
      <ChapterRail lang={lang} />
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
