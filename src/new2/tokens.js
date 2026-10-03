// Design tokens for the /new site. CI colours per brand spec: silver #6B7C8B ("In"), gold #B8944B ("Ventures").
export const C = {
  bg: "#F5F4F1",
  surface: "#ECEAE6",
  surfaceAlt: "#E4E2DD",
  card: "#FFFFFF",
  warm: "#F7F6F3",
  line: "#E6E3DE",
  border: "rgba(0,0,0,0.07)",
  dark: "#1A1A1A",
  darkBg: "#1A1A1A", // CI dark: background of the dark sections
  onDark: "#F2F1EE", // text on dark surfaces
  text: "#2A2D31",
  dim: "#5F6670",
  muted: "#646B74",
  silver: "#6B7C8B",
  silverInk: "#566674",
  silverLine: "#8A96A3",
  silverSoft: "rgba(107,124,139,0.10)",
  gold: "#B8944B",
  goldText: "#9F7F3C",
  goldDeep: "#7A602C",
  goldLine: "#A88A4E",
  goldSoft: "rgba(184,148,75,0.12)",
};

// "#RRGGBB" + alpha -> "rgba(r,g,b,a)", so every glass value derives from a CI colour above
const rgba = (hex, a) => { const n = parseInt(hex.slice(1), 16); return `rgba(${n >> 16},${(n >> 8) & 255},${n & 255},${a})`; };

// Liquid Glass for the control layer only: navigation, buttons, pills, menus and cards over images.
// Body text, articles, legal texts and forms stay on solid surfaces.
// light = on light sections, dark = on dark sections, clear = over photos (they carry their own dimming).
// solid = fallback without backdrop-filter and for reduced transparency / increased contrast.
export const GLASS = {
  blur: "20px",
  saturate: "180%",
  radius: 999, // capsules
  radiusCard: 24, // menu surface, cards
  spring: "cubic-bezier(.34,1.56,.64,1)", // hover / press
  inset: rgba(C.card, 0.92), // nearly solid pill inside a bar (track pill), keeps its text legible over any content
  glow: { silver: rgba(C.silver, 0.28), gold: rgba(C.gold, 0.22) }, // soft light behind glass on dark surfaces
  light: {
    bg: rgba(C.bg, 0.72),
    solid: rgba(C.bg, 0.96),
    border: rgba(C.card, 0.75),
    edge: `inset 0 1px 0 ${rgba(C.card, 0.9)}`,
    shadow: `0 8px 28px -12px ${rgba(C.dark, 0.25)}, 0 1px 3px ${rgba(C.dark, 0.06)}`,
    sheen: rgba(C.card, 0.45),
    fg: C.text,
  },
  dark: {
    bg: rgba(C.darkBg, 0.66),
    solid: rgba(C.darkBg, 0.94),
    border: rgba(C.card, 0.16),
    edge: `inset 0 1px 0 ${rgba(C.card, 0.18)}`,
    shadow: `0 10px 30px -12px ${rgba(C.dark, 0.6)}`,
    sheen: rgba(C.card, 0.1),
    selected: rgba(C.card, 0.16), // chosen item inside a dark bar
    fg: C.onDark,
  },
  clear: {
    bg: rgba(C.darkBg, 0.3),
    solid: rgba(C.darkBg, 0.78),
    border: rgba(C.card, 0.26),
    edge: `inset 0 1px 0 ${rgba(C.card, 0.28)}`,
    shadow: `0 16px 40px -20px ${rgba(C.dark, 0.6)}`,
    sheen: rgba(C.card, 0.12),
    fg: C.card,
  },
};

export const TRACK = {
  tech: { a: C.silverLine, at: C.silverInk, as: C.silverSoft },
  re: { a: C.goldLine, at: C.goldDeep, as: C.goldSoft },
};

// One family for everything (Figtree, self-hosted). CJK falls back to the system fonts.
export const F = "'Figtree Variable', Figtree, system-ui, -apple-system, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif";

// Type scale: 8 fluid steps (mobile -> desktop), defined as CSS variables in NewApp.jsx.
// xs 12 · sm 14 · base 16–17 · lg 18–20 · xl 20–24 · x2 28–40 · x3 34–60 · x4 44–80
export const T = { xs: "var(--t-xs)", sm: "var(--t-sm)", base: "var(--t-base)", lg: "var(--t-lg)", xl: "var(--t-xl)", x2: "var(--t-2xl)", x3: "var(--t-3xl)", x4: "var(--t-4xl)" };
// Upper-case label: only for chapter labels above headings. The brand name never appears in upper case.
export const LABEL = { fontFamily: F, fontSize: T.xs, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", lineHeight: 1.4 };
// Meta label in normal case: names, form labels, footer links, tags, dates.
export const META = { fontFamily: F, fontSize: T.sm, fontWeight: 600, lineHeight: 1.4 };
export const MAXW = 1100;
export const SECTION_PAD = "clamp(56px, 8vw, 96px) clamp(16px, 4vw, 40px)";
