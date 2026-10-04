import { useEffect, useRef, useState } from "react";
import { C, F } from "./tokens";

// Tech hero visual (approved 2026-10-03): a workflow as it looks in a ticket tool's workflow editor.
// Labels are English in every language (owner decision), so they live here and not in content.js.
const W = 520;
const H = 684;
const LINE = C.surfaceAlt; // node borders
const DOT = { open: "#C9C6C0", work: C.silver, wait: C.gold, done: C.dark }; // status categories, see legend

// [x, y, width, label, status, second line]
const NODES = [
  [191, 66, 138, "Request received", "open"],
  [195, 128, 130, "AI classification", "work"],
  [30, 200, 110, "GDPR check", "work"],
  [184, 200, 152, "AI Act classification", "work"],
  [380, 200, 110, "Permissions", "work"],
  [39, 364, 142, "Run automatically", "work"],
  [342, 364, 136, "Expert approval", "wait", "Four-eyes principle"],
  [205, 452, 110, "Execution", "work"],
  [415, 470, 90, "Rejected", "done"],
  [195, 528, 130, "Log & audit trail", "done"],
  [205, 596, 110, "Monitoring", "work"],
];

// transitions; the last point of each path carries the arrow
const EDGES = [
  "M260 98V125",
  "M85 176V197", "M260 176V197", "M435 176V197",
  "M85 232V250H435M435 232V250M260 232V261",
  "M216 296H110V361",
  "M110 396V430H230V449",
  "M380 408V430H290V449",
  "M260 484V525",
  "M460 408V467",
  "M460 502V544H328",
  "M260 560V593",
];

// transition names: [centre x, centre y, text, pill width, gold]
const LABELS = [
  [260, 113, "classify", 54], [350, 176, "check in parallel", 94], [350, 250, "all passed", 64],
  [163, 296, "low", 34], [357, 296, "high", 38, true], [335, 430, "approved", 62], [460, 434, "rejected", 56],
  [425, 82, "Needs info", 68, true], [104, 612, "Refine model", 78],
];

const LEGEND = [[28, "Open", "open"], [90, "In progress", "work"], [185, "Awaiting approval", "wait"], [310, "Done", "done"]];

// light pulses: the gold one takes the "high" branch through the approval, the silver one the "low" branch
const PULSES = [
  ["M260 82V296H410V386H380V430H290V468H260V612", C.gold, "rgba(184,148,75,0.22)", "0s"],
  ["M260 82V296H110V430H230V468H260V612", C.silver, "rgba(107,124,139,0.22)", "4.5s"],
];

const SUMMARY = "Workflow · AI requests: Request received → AI classification → GDPR check, AI Act classification, Permissions → Risk? low: Run automatically, high: Expert approval (Four-eyes principle) → Execution → Log & audit trail → Monitoring";

export default function TechFlow() {
  const ref = useRef(null);
  const [reduce] = useState(() => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  // the pulses only run while the graphic is on screen
  useEffect(() => {
    const svg = ref.current;
    if (reduce || !svg || !("IntersectionObserver" in window)) return undefined;
    const io = new IntersectionObserver(([e]) => (e.isIntersecting ? svg.unpauseAnimations() : svg.pauseAnimations()));
    io.observe(svg);
    return () => io.disconnect();
  }, [reduce]);

  return (
    <svg ref={ref} viewBox={`-16 -10 ${W + 32} ${H + 36}`} preserveAspectRatio="xMaxYMid meet" role="img" aria-label={SUMMARY} lang="en" fontFamily={F}>
      <defs>
        <pattern id="tf-dots" width="16" height="16" patternUnits="userSpaceOnUse"><circle cx="1.5" cy="1.5" r="1" fill="rgba(26,26,26,0.10)" /></pattern>
        <marker id="tf-a" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto"><path d="M0 .5L9 5L0 9.5Z" fill={C.silverLine} /></marker>
        <marker id="tf-ag" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto"><path d="M0 .5L9 5L0 9.5Z" fill={C.gold} /></marker>
        <filter id="tf-card" x="-10%" y="-10%" width="120%" height="125%"><feDropShadow dx="0" dy="10" stdDeviation="12" floodColor={C.dark} floodOpacity="0.07" /></filter>
        <filter id="tf-node" x="-10%" y="-20%" width="120%" height="160%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" floodColor={C.dark} floodOpacity="0.08" /></filter>
        <clipPath id="tf-clip"><rect width={W} height={H} rx="20" /></clipPath>
      </defs>

      {/* the tool window: title bar, dotted canvas, legend bar */}
      <rect width={W} height={H} rx="20" fill={C.card} filter="url(#tf-card)" />
      <g clipPath="url(#tf-clip)">
        <rect y="44" width={W} height="596" fill="url(#tf-dots)" />
        <rect width={W} height="44" fill={C.warm} />
        <rect y="640" width={W} height="44" fill={C.warm} />
        <path d={`M0 44H${W}M0 640H${W}`} stroke={C.line} />
      </g>
      <rect x=".5" y=".5" width={W - 1} height={H - 1} rx="19.5" fill="none" stroke={C.line} />
      {[22, 36, 50].map((cx) => <circle key={cx} cx={cx} cy="22" r="4" fill={C.line} />)}
      <text x="68" y="26.5" fill={C.dark} fontSize="12.5" fontWeight="600">Workflow · AI requests</text>
      <rect x="440" y="12" width="62" height="20" rx="10" fill={C.silverSoft} />
      <circle cx="451" cy="22" r="3" fill={C.silver} />
      <text x="459" y="26" fill={C.silverInk} fontSize="10.5" fontWeight="600">Active</text>

      {/* transitions under the nodes */}
      <g fill="none" stroke={C.silverLine} strokeWidth="1.3">
        <path d="M260 160V176M85 176H435" />
        {EDGES.map((d) => <path key={d} d={d} markerEnd="url(#tf-a)" />)}
        <path d="M205 612H12V144H192" strokeDasharray="4 4" markerEnd="url(#tf-a)" />
      </g>
      <g fill="none" stroke={C.gold} strokeWidth="1.3">
        <path d="M304 296H410V361" markerEnd="url(#tf-ag)" />
        <path d="M478 380H507V82H332" strokeDasharray="4 4" markerEnd="url(#tf-ag)" />
      </g>

      {/* pulses run along the transitions and slip under the nodes; with reduced motion one stands still */}
      {reduce
        ? <g><circle cx="410" cy="334" r="7" fill={PULSES[0][2]} /><circle cx="410" cy="334" r="3.2" fill={C.gold} /></g>
        : PULSES.map(([path, fill, halo, begin]) => (
          <g key={path} opacity="0">
            <circle r="7" fill={halo} /><circle r="3.2" fill={fill} />
            <animateMotion dur="9s" begin={begin} repeatCount="indefinite" path={path} />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.06;.92;1" dur="9s" begin={begin} repeatCount="indefinite" />
          </g>
        ))}

      <g fontSize="10" textAnchor="middle">
        {LABELS.map(([x, y, s, w, gold]) => (
          <g key={s}>
            <rect x={x - w / 2} y={y - 8.5} width={w} height="17" rx="8.5" fill={C.card} stroke={gold ? "rgba(184,148,75,0.6)" : C.line} />
            <text x={x} y={y + 3.5} fill={gold ? C.goldDeep : C.dim}>{s}</text>
          </g>
        ))}
      </g>

      {/* status nodes; the dot shows the status category */}
      <g filter="url(#tf-node)">
        {NODES.map(([x, y, w, s, st, sub]) => <rect key={s} x={x} y={y} width={w} height={sub ? 44 : 32} rx="8" fill={st === "wait" ? "#FCF8EF" : C.card} stroke={st === "wait" ? "rgba(184,148,75,0.7)" : LINE} />)}
        <path d="M260 264L304 296L260 328L216 296Z" fill={C.card} stroke={C.silverLine} />
      </g>
      <g fontSize="11.5" fontWeight="600" fill={C.text}>
        {NODES.map(([x, y, , s, st, sub]) => (
          <g key={s}>
            <circle cx={x + 15} cy={y + 16} r="4" fill={DOT[st]} />
            <text x={x + 25} y={y + 20}>{s}</text>
            {sub && <text x={x + 25} y={y + 34} fontSize="10" fontWeight="500" fill={C.goldDeep}>{sub}</text>}
          </g>
        ))}
        <text x="260" y="300" textAnchor="middle">Risk?</text>
      </g>

      <g fontSize="10.5" fill={C.dim}>
        {LEGEND.map(([x, s, st]) => <g key={s}><circle cx={x} cy="662" r="4" fill={DOT[st]} /><text x={x + 10} y="666">{s}</text></g>)}
      </g>
    </svg>
  );
}
