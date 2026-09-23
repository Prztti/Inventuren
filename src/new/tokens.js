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

export const TRACK = {
  tech: { a: C.silverLine, at: C.silverInk, as: C.silverSoft },
  re: { a: C.goldLine, at: C.goldDeep, as: C.goldSoft },
};

// One family for everything (Figtree, self-hosted). CJK falls back to the system fonts.
export const F = "'Figtree Variable', Figtree, system-ui, -apple-system, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif";

// Type scale: 8 fluid steps (mobile -> desktop), defined as CSS variables in NewApp.jsx.
// xs 12 · sm 14 · base 16–17 · lg 18–20 · xl 20–24 · x2 28–40 · x3 34–60 · x4 44–80
export const T = { xs: "var(--t-xs)", sm: "var(--t-sm)", base: "var(--t-base)", lg: "var(--t-lg)", xl: "var(--t-xl)", x2: "var(--t-2xl)", x3: "var(--t-3xl)", x4: "var(--t-4xl)" };
// Small caps label (eyebrows, meta labels, tags)
export const LABEL = { fontFamily: F, fontSize: T.xs, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", lineHeight: 1.4 };
export const MAXW = 1100;
export const SECTION_PAD = "clamp(56px, 8vw, 96px) clamp(16px, 4vw, 40px)";
