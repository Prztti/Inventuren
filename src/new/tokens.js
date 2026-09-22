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
  muted: "#7C838C",
  silver: "#6B7C8B",
  silverLine: "#8A96A3",
  silverSoft: "rgba(107,124,139,0.10)",
  gold: "#B8944B",
  goldDeep: "#8C6F36",
  goldLine: "#A88A4E",
  goldSoft: "rgba(184,148,75,0.12)",
};

export const TRACK = {
  tech: { a: C.silverLine, at: C.silver, as: C.silverSoft },
  re: { a: C.goldLine, at: C.goldDeep, as: C.goldSoft },
};

export const F = "'DM Sans', system-ui, sans-serif";
export const MAXW = 1100;
export const SECTION_PAD = "clamp(56px, 8vw, 96px) clamp(16px, 4vw, 40px)";
