import "@fontsource-variable/newsreader/opsz.css";
import { C, F, SERIF } from "./tokens";
import { Panel, Container, Button } from "./ui";

// Very faint paper grain: a small SVG noise tile (a data: URI, allowed by the CSP), multiplied onto the background.
const GRAIN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

const CSS = `
.hv-a-grain{position:absolute;inset:0;background-image:${GRAIN};background-size:180px;opacity:.06;mix-blend-mode:multiply;pointer-events:none}
.hv-a-grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));column-gap:clamp(16px,2vw,32px);align-items:end}
.hv-a-rule{grid-column:1/-1;width:56px;height:1px;background:${C.gold};margin-bottom:clamp(28px,4vh,44px)}
.hv-a-h1{grid-column:1/-1;margin:0 0 clamp(28px,4.5vh,44px);font-family:${SERIF};font-weight:380;font-size:clamp(3.3rem,1.4rem + 7.6vw,8.75rem);line-height:.98;letter-spacing:-.022em;color:${C.dark};padding-bottom:.06em}
/* compact: the subline sits right under the headline on the left, the actions share its row on the right */
.hv-a-sub{grid-column:1/6;margin:0;font-family:${F};font-size:var(--t-xl);font-weight:400;line-height:1.45;color:${C.text}}
.hv-a-actions{grid-column:6/13;justify-self:end;display:flex;align-items:center;justify-content:flex-end;flex-wrap:wrap;gap:12px;position:relative}
/* soft silver and gold light behind the glass capsules, so the glass has something to pick up */
.hv-a-actions::before{content:"";position:absolute;inset:-36px -48px;z-index:0;pointer-events:none;background:radial-gradient(closest-side at 62% 50%,${C.silverSoft},transparent),radial-gradient(closest-side at 88% 50%,${C.goldSoft},transparent)}
.hv-a-actions>*{position:relative}
@media (max-width:1100px){
  .hv-a-sub{grid-column:1/-1;margin:0 0 32px;max-width:36ch}
  .hv-a-actions{grid-column:1/-1;justify-self:start;justify-content:flex-start}
}
@media (max-width:900px){
  .hv-a-sub{margin:0 0 32px 16%;padding-left:18px;border-left:1px solid ${C.gold}}
}
@media (max-width:560px){
  .hv-a-sub{margin-left:12%}
  .hv-a-actions{justify-self:stretch;flex-direction:column;align-items:stretch;gap:16px}
  .hv-a-actions .btn{justify-content:center}
}
`;

// Overview hero ("Editorial", chosen 2026-10-03): no image, warm paper, a very large serif headline;
// subline and actions share one row below.
export default function HeroEditorial({ t }) {
  const h = t.home;
  const x = h.hero;
  return (
    <Panel first tone="light" className="hero hv-a" style={{ background: C.warm }} innerStyle={{ minHeight: "100svh", display: "flex" }}>
      <style>{CSS}</style>
      <div aria-hidden className="hv-a-grain" />
      <Container wide style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: "clamp(112px, 16vh, 160px)", paddingBottom: "clamp(56px, 9vh, 96px)" }}>
        <div className="hv-a-grid">
          <span aria-hidden className="hv-a-rule hero-in" />
          <h1 className="hv-a-h1 hero-in d1">{x.h1}</h1>
          <p className="hv-a-sub hero-in d2">{x.sub}</p>
          <div className="hv-a-actions hero-in d3">
            <Button href="#kontakt">{t.ui.discuss}</Button>
            <Button to="/tech" variant="glass" tint={C.silverInk}>{h.tracks.tech.label}</Button>
            <Button to="/real-estate" variant="glass" tint={C.goldDeep}>{h.tracks.re.label.replace("\n", " ")}</Button>
          </div>
        </div>
      </Container>
    </Panel>
  );
}
