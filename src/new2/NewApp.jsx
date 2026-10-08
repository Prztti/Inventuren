import { useEffect, useState } from "react";
import { Routes, Route, useLocation, useMatch } from "react-router-dom";
import { TX, HTML_LANG } from "./content";
import { C, F, GLASS as G } from "./tokens";
import { useStack } from "./ui";
import { Nav, Footer, NotFound } from "./Layout";
import Home from "./Home";
import Track from "./Track";
import LegalPage from "./Legal";
import { InsightsPage, ArticlePage } from "./Insights";

const LANG_KEY = "inventures-lang";

function initialLang() {
  try {
    const q = new URLSearchParams(window.location.search).get("lang");
    if (q && TX[q]) return q;
    const saved = window.localStorage.getItem(LANG_KEY);
    if (saved && TX[saved]) return saved;
  } catch { /* storage unavailable */ }
  const nav = (navigator.language || "en").toLowerCase();
  return nav.startsWith("de") ? "de" : "en";
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
/* type scale: 8 fluid steps, mobile -> desktop (see T in tokens.js); tracking set for DM Sans */
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
.t-display{font-size:var(--t-4xl);font-weight:500;letter-spacing:-.028em;line-height:1.02}
.t-h2{font-size:var(--t-3xl);font-weight:500;letter-spacing:-.022em;line-height:1.06}
.t-h3{font-size:var(--t-xl);font-weight:500;letter-spacing:-.008em;line-height:1.3}
.t-title{font-size:var(--t-lg);font-weight:500;letter-spacing:-.006em;line-height:1.35}
.t-stat{font-size:var(--t-2xl);font-weight:500;letter-spacing:-.018em;line-height:1.1;font-variant-numeric:lining-nums tabular-nums}
.t-lead{font-size:var(--t-lg);line-height:1.55;opacity:.74}
.t-body{font-size:var(--t-base);line-height:1.65}
.t-small{font-size:var(--t-sm);line-height:1.55}
.sup{font-size:.56em;vertical-align:.62em;line-height:0;margin-left:.06em;letter-spacing:.01em}
.wordmark{font-family:var(--font);display:inline-flex;align-items:baseline;line-height:1;letter-spacing:-.025em;white-space:nowrap}
.wm-at{font-size:.5em;font-weight:500;color:${C.gold};margin-left:.08em;letter-spacing:0}
/* legal pages */
.legal-row{display:grid;grid-template-columns:220px minmax(0,1fr);gap:4px 24px;padding:8px 0}
.article-card{transition:transform .5s ${EASE},box-shadow .5s ${EASE}}
.article-card:hover{transform:translateY(-2px)}
.article-card:hover .arrow{transform:translateX(5px)}
::selection{background:${C.dark};color:#fff}
a:focus-visible,button:focus-visible,input:focus-visible,select:focus-visible,textarea:focus-visible{outline:2px solid ${C.silver};outline-offset:3px}
/* touch targets of at least 44 px without changing the look */
.hit,.text-link,.back-link,.disclose{position:relative}
.hit::after,.text-link::after,.back-link::after,.disclose::after{content:"";position:absolute;left:50%;top:50%;width:max(100%,44px);height:max(100%,44px);transform:translate(-50%,-50%)}
.sr-only{position:absolute!important;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0}
.cform input:focus,.cform select:focus,.cform textarea:focus{outline:none;border-bottom-color:${C.dark}!important}

/* reveal + hero entrance */
/* short and calm: no blur, a small rise, 0.6 s */
.reveal{opacity:0;transform:translate3d(0,12px,0);transition:opacity .6s ${EASE},transform .6s ${EASE}}
.reveal.is-in{opacity:1;transform:none}
/* text that builds up: the whole text is there as a faint shadow from the start, so readers see that more is
   coming, and the words light up one after another once the block is in view (see Words in ui.jsx) */
.w{display:inline-block}
.words .w{opacity:.16;transition:opacity .45s ${EASE}}
.words.is-on .w{opacity:1;transition-delay:calc(var(--wait,0s) + var(--d,0s))}
.hero-in.words-load{animation:none}
@keyframes heroIn{from{opacity:0;transform:translate3d(0,12px,0)}to{opacity:1;transform:none}}
.hero-in{animation:heroIn .7s ${EASE} both}
/* room for descenders (g, p, y): animated layers are clipped to the element box in some browsers */
.hero-in,.t-display{padding-bottom:.14em}
.hero-in.d1{animation-delay:.06s}.hero-in.d2{animation-delay:.12s}.hero-in.d3{animation-delay:.18s}.hero-in.d4{animation-delay:.24s}

/* stacking panels: each sticks, the next one slides over it */
.panel{position:sticky;top:0;overflow:hidden;overflow:clip;border-radius:32px 32px 0 0;box-shadow:0 -30px 60px -30px rgba(0,0,0,.28)}
.panel-first{border-radius:0;box-shadow:none}
.panel::after{content:"";position:absolute;inset:0;background:#0B0C0E;opacity:calc(var(--cover,0) * .14);pointer-events:none;border-radius:inherit}
.panel-inner{position:relative;padding:clamp(96px,12vw,168px) 0}
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
.hero-grid-flow{grid-template-columns:minmax(0,1fr) minmax(0,540px)}
.hero-flow svg{display:block;width:100%;height:auto;max-height:min(78vh,720px)}
/* figure labels: long German compounds carry soft hyphens in the copy; this only prevents overflow */
.facts .t-small,.stats-row dd{overflow-wrap:break-word}
.stats-row{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:28px 40px;margin:clamp(56px,7vw,88px) 0 0;padding-top:28px;border-top:1px solid rgba(0,0,0,.12)}

/* interactions */
.btn:hover{transform:translateY(-1px)}
.btn .arrow,.text-link .arrow,.tile-cta .arrow,.news-row .arrow{display:inline-block;transition:transform .35s ${EASE}}
.btn:hover .arrow,.text-link:hover .arrow,.track-tile:hover .arrow,.news-row:hover .arrow{transform:translateX(5px)}
.btn-ghost:hover{background:var(--btn-fill,${C.dark})!important;color:#fff!important;border-color:var(--btn-fill,${C.dark})!important}
.u-link{background-image:linear-gradient(currentColor,currentColor);background-repeat:no-repeat;background-position:0 100%;background-size:0 1px;transition:background-size .4s ${EASE};padding-bottom:3px}
.u-link:hover{background-size:100% 1px}
.track-tile .track-img img{transform:scale(1.02);transition:transform 1.4s ${EASE}}
.track-tile:hover .track-img img{transform:scale(1.08)}
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
.marquee-track{display:flex;width:max-content;will-change:transform}
.logo-item{flex:none;display:flex;align-items:center;padding:0 clamp(26px,3.6vw,52px)}
.logo-word{font-family:var(--font);font-size:var(--t-2xl);font-weight:500;letter-spacing:-.025em;color:${C.muted};white-space:nowrap;transition:color .4s}
.logo-item:hover .logo-word{color:${C.dark}}
.logo-item img{transition:filter .4s,opacity .4s}
.logo-item:hover img{filter:none;opacity:1}

/* portraits */
.team-grid{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.05fr);gap:clamp(40px,6vw,96px);align-items:start}
.team-grid>.pair{position:sticky;top:110px}
.pair{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.pair figure{transition:opacity .6s ${EASE},filter .6s ${EASE}}
.pair figure.is-dim{opacity:.32;filter:grayscale(1)}
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
.logo-item{padding:0 clamp(26px,3.2vw,46px);min-height:44px}
.logo-item img{filter:grayscale(1) contrast(1.05);opacity:.62}
.logo-item img.raster{mix-blend-mode:multiply}
.logo-item img.dark{filter:grayscale(1) brightness(.55);opacity:.7}
.marquees .logo-word{font-size:var(--t-xl)}

/* disclosure: a glass capsule (surface from .glass) */
.disclose{display:inline-flex;align-items:center;gap:12px;font-family:var(--font);font-size:var(--t-sm);font-weight:600;color:${C.dark};padding:9px 16px;border-radius:999px;cursor:pointer;margin-bottom:12px}
.disclose-icon{font-size:18px;line-height:1;color:${C.muted}}

/* timeline */
.tl-legend{display:grid;grid-template-columns:1fr 64px 1fr;margin:0 0 28px;font-family:var(--font);font-size:var(--t-sm);font-weight:600}
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
/* the lanes are named in the legend; the name per entry is shown only in the single-column phone layout */
.tl-left .tl-name,.tl-desk .tl-name{display:none}
.tl-minor{width:11px;height:11px;border-radius:50%;margin-top:18px;flex-shrink:0}
.tl-row-joint{grid-template-rows:56px auto}
.tl-row-joint .tl-spine{grid-column:2;grid-row:1/span 2}
.tl-jcard{grid-column:1/-1;grid-row:2;justify-self:center;width:min(100%,640px);margin:6px 0 40px;text-align:center;background:${C.bg};position:relative;z-index:1;padding:22px 30px 24px;box-shadow:0 1px 0 rgba(0,0,0,.06),0 18px 40px -24px rgba(0,0,0,.25)}
.tl-jcard .tl-jlabel{justify-content:center}
.tl-jbar{position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,${C.gold},${C.silverLine})}
.tl-row-joint.is-final .tl-jcard{margin-bottom:0;padding:28px 36px 30px}

/* Liquid Glass (values: GLASS in tokens.js). A solid surface first; glass only where backdrop-filter works. */
.glass{--g-bg:${G.light.bg};--g-solid:${G.light.solid};--g-border:${G.light.border};--g-edge:${G.light.edge};--g-shadow:${G.light.shadow};--g-sheen:${G.light.sheen};--g-rim:${G.light.rim};--g-glint:${G.light.glint};background-color:var(--g-solid);border:1px solid var(--g-border);box-shadow:var(--g-edge),var(--g-shadow)}
.glass.glass-dark{--g-bg:${G.dark.bg};--g-solid:${G.dark.solid};--g-border:${G.dark.border};--g-edge:${G.dark.edge};--g-shadow:${G.dark.shadow};--g-sheen:${G.dark.sheen};--g-rim:${G.dark.rim};--g-glint:${G.dark.glint}}
.glass.glass-prominent{--g-bg:${G.prominent.bg};--g-solid:${G.prominent.solid};--g-border:${G.prominent.border};--g-edge:${G.prominent.edge};--g-shadow:${G.prominent.shadow};--g-sheen:${G.prominent.sheen};--g-rim:${G.prominent.rim};--g-glint:${G.prominent.glint}}
.glass.glass-clear{--g-bg:${G.clear.bg};--g-solid:${G.clear.solid};--g-border:${G.clear.border};--g-edge:${G.clear.edge};--g-shadow:${G.clear.shadow};--g-sheen:${G.clear.sheen};--g-rim:${G.clear.rim};--g-glint:${G.clear.glint}}
/* the edge catches light: a gradient rim drawn over the border (strongest top left, like a lens) */
.glass{position:relative}
.glass::before{content:"";position:absolute;inset:-1px;border-radius:inherit;padding:1px;background:var(--g-rim);-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask:linear-gradient(#000 0 0) content-box exclude,linear-gradient(#000 0 0);pointer-events:none}
@supports ((-webkit-backdrop-filter:blur(1px)) or (backdrop-filter:blur(1px))){
  .glass{background-color:var(--g-bg);-webkit-backdrop-filter:blur(${G.blur}) saturate(${G.saturate});backdrop-filter:blur(${G.blur}) saturate(${G.saturate})}
}
@media (prefers-reduced-transparency:reduce),(prefers-contrast:more){
  .glass{background-color:var(--g-solid);-webkit-backdrop-filter:none;backdrop-filter:none}
  .glass::before,.scroll-edge{display:none}
}
/* liquid feedback, only on glass: a soft spring and a light sheen on hover, a short squeeze on press */
.glass-press,.tile-cta{transition:transform .5s ${G.spring},background-color .3s,border-color .3s,box-shadow .3s}
@media (hover:hover){
  /* a highlight follows the pointer across glass (--mx/--my set in NewApp) */
  .glass-press:hover{transform:translateY(-1px) scale(1.03);background-image:radial-gradient(140px circle at var(--mx,50%) var(--my,0%),var(--g-glint),transparent 70%),linear-gradient(var(--g-sheen),var(--g-sheen))}
  .nav-bar:hover{background-image:radial-gradient(240px circle at var(--mx,50%) var(--my,50%),var(--g-sheen),transparent 70%)}
  .track-tile:hover .tile-cta{transform:translateY(-1px) scale(1.03);background-image:linear-gradient(var(--g-sheen),var(--g-sheen))}
}
/* press: glass gives a little, like a liquid surface */
.glass-press:active{transform:scale(.96);transition-duration:.15s}
.track-tile:active .tile-cta{transform:scale(.97);transition-duration:.15s}
@media (prefers-reduced-motion:reduce){
  .nav-bar,.nav-bar>nav,.nav-lens,.nav-menu{transition:none!important}
  .glass-press,.glass-press:hover,.glass-press:active,.tile-cta,.track-tile:hover .tile-cta,.track-tile:active .tile-cta{transform:none!important;transition:background-color .2s!important}
}

/* nav: a floating glass bar with space to the edges; light or dark glass depending on what is behind it */
.nav-shell{position:fixed;top:0;left:0;right:0;z-index:100;padding:12px clamp(12px,3vw,24px) 0;pointer-events:none}
.nav-bar{max-width:1320px;margin:0 auto;pointer-events:auto;border-radius:${G.radius}px;transition:border-radius .35s ${EASE},background-color .3s,border-color .3s,box-shadow .3s}
.nav-bar.is-open{border-radius:${G.radiusCard}px}
.nav-bar{transition:border-radius .35s ${EASE},max-width .6s ${EASE},background-color .3s,border-color .3s,box-shadow .3s}
.nav-bar>nav{transition:padding .6s ${EASE}}
@media (min-width:1121px){
  .nav-bar.is-compact{max-width:1040px}
  .nav-bar.is-compact>nav{padding-top:3px;padding-bottom:3px}
}
/* scroll edge effect: content under the floating bar softens, so the bar stays distinct (HIG scroll views) */
.scroll-edge{position:fixed;top:0;left:0;right:0;height:92px;pointer-events:none;opacity:0;transition:opacity .4s;-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);-webkit-mask-image:linear-gradient(#000 35%,transparent);mask-image:linear-gradient(#000 35%,transparent)}
.scroll-edge.is-on{opacity:1}
/* glass lens that glides to the hovered link (concentric with the bar: a capsule inside a capsule) */
.nav-lens{position:absolute;left:0;top:50%;height:36px;margin-top:-18px;border-radius:999px;background:var(--g-sheen);box-shadow:inset 0 1px 0 var(--g-sheen),0 2px 10px -4px rgba(0,0,0,.18);pointer-events:none;transition:transform .5s ${G.spring},width .5s ${G.spring},opacity .25s}
.nav-desk .nav-link{position:relative;z-index:1}
/* phone menu grows open instead of appearing */
.nav-menu{display:grid;grid-template-rows:0fr;transition:grid-template-rows .45s ${EASE}}
.nav-menu.is-open{grid-template-rows:1fr}
@media (min-width:1121px){.nav-menu{display:none}}
.nav-bar>nav{display:flex;justify-content:space-between;align-items:center;gap:16px;padding:6px 6px 6px 20px}
.nav-link{padding:9px 14px;border-radius:999px;transition:background-color .25s}
.nav-desk{display:flex}
.nav-mob{display:none}

@media (max-width:1120px){
  .nav-desk{display:none}
  .nav-mob{display:flex}
  .cols-4{grid-template-columns:repeat(2,minmax(0,1fr))}
  .cols-5{grid-template-columns:repeat(3,minmax(0,1fr))}
  .hero-grid{grid-template-columns:minmax(0,1fr) 300px;gap:40px}
  .hero-grid-flow{grid-template-columns:minmax(0,1fr);gap:56px}
  .hero-flow{max-width:560px}
  .hero-flow svg{max-height:none}
  .proc{grid-template-columns:repeat(3,minmax(0,1fr));row-gap:40px}
  .proc::before{display:none}
}
@media (max-width:760px){
  .panel{position:relative!important;top:auto!important;border-radius:24px 24px 0 0;margin-top:-24px}
  .panel-first{margin-top:0}
  .panel::after{display:none}
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
  .tl-jcard .tl-jlabel{justify-content:flex-start;flex-direction:column;gap:2px}
  .track-pill{display:none!important}
  .legal-row{grid-template-columns:minmax(0,1fr)}
  .lang-btn{min-height:44px;min-width:40px}
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
  .reveal,.hero-in,.w{opacity:1!important;transform:none!important;transition:none!important;animation:none!important}
  .panel{position:relative!important;top:auto!important}
  .panel::after{display:none}
  .marquee{-webkit-mask-image:none;mask-image:none}
  .marquee-track{animation:none;flex-wrap:wrap;width:auto;row-gap:18px}
  .logo-item.dup{display:none}
  .track-tile .track-img img,.service-row h3,.btn .arrow,.pair figure{transition:none}
}
`;

export default function NewApp() {
  const [lang, setLangState] = useState(initialLang);
  const t = TX[lang];
  const tech = useMatch("/tech");
  const re = useMatch("/real-estate");
  const home = useMatch("/");
  const insights = useMatch("/insights/*");
  const imprint = useMatch("/impressum");
  const privacy = useMatch("/datenschutz");
  const track = tech ? "tech" : re ? "re" : null;
  const page = track || (home ? "home" : insights ? "insights" : imprint ? "impressum" : privacy ? "datenschutz" : "notFound");
  useStack();

  // Liquid Glass reacts to the pointer: the hovered glass element gets its position as --mx / --my for a moving highlight.
  useEffect(() => {
    if (!window.matchMedia("(hover: hover)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const onMove = (e) => {
      const el = e.target.closest?.(".glass-press, .nav-bar");
      if (!el) return;
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${Math.round(e.clientX - r.left)}px`);
      el.style.setProperty("--my", `${Math.round(e.clientY - r.top)}px`);
    };
    document.addEventListener("pointermove", onMove, { passive: true });
    return () => document.removeEventListener("pointermove", onMove);
  }, []);

  const setLang = (l) => {
    setLangState(l);
    try { window.localStorage.setItem(LANG_KEY, l); } catch { /* storage unavailable */ }
  };

  // Title, description and canonical per page and language (canonical points at the future public URL).
  const { pathname } = useLocation();
  useEffect(() => {
    document.documentElement.lang = HTML_LANG[lang];
    document.title = t.meta[page] || t.meta.notFound;
    const desc = t.meta.desc[page] || t.meta.desc.home;
    document.querySelector('meta[name="description"]')?.setAttribute("content", desc);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", desc);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", document.title);
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", `https://inventures.at${pathname === "/" ? "/" : pathname}`);
  }, [lang, page, pathname, t]);

  // Other pages reuse the overview menu; its anchors then point back to the overview.
  const links = track ? t[track].nav : home ? t.homeNav : t.homeNav.map(([id, label]) => [id.startsWith("/") ? id : `/#${id}`, label]);

  return (
    <div>
      <style>{CSS}</style>
      <ScrollManager />
      <Nav t={t} lang={lang} setLang={setLang} track={track} links={links} />
      <Routes>
        <Route path="/" element={<Home t={t} lang={lang} />} />
        <Route path="/tech" element={<Track key="tech" t={t} lang={lang} track="tech" />} />
        <Route path="/real-estate" element={<Track key="re" t={t} lang={lang} track="re" />} />
        <Route path="/insights" element={<InsightsPage t={t} lang={lang} />} />
        <Route path="/insights/:slug" element={<ArticlePage t={t} lang={lang} />} />
        <Route path="/impressum" element={<LegalPage kind="impressum" lang={lang} />} />
        <Route path="/datenschutz" element={<LegalPage kind="datenschutz" lang={lang} />} />
        <Route path="*" element={<NotFound t={t} />} />
      </Routes>
      <Footer t={t} track={track} />
    </div>
  );
}
