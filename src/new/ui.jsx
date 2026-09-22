import { useEffect, useRef, useState } from "react";
import { C, F, MAXW, SECTION_PAD } from "./tokens";

export function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || seen) return;
    if (typeof IntersectionObserver === "undefined") { setSeen(true); return; }
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); o.disconnect(); } }, { threshold });
    o.observe(el);
    return () => o.disconnect();
  }, [threshold, seen]);
  return [ref, seen];
}

export function Reveal({ children, delay = 0, style }) {
  const [ref, seen] = useInView();
  return (
    <div ref={ref} className="reveal" style={{ opacity: seen ? 1 : 0, transform: seen ? "none" : "translateY(14px)", transition: `opacity .55s ease ${delay}s, transform .55s ease ${delay}s`, ...style }}>
      {children}
    </div>
  );
}

export function Section({ id, bg = C.bg, children, style, inner }) {
  return (
    <section id={id} style={{ background: bg, padding: SECTION_PAD, position: "relative", ...style }}>
      <div style={{ maxWidth: MAXW, margin: "0 auto", position: "relative", ...inner }}>{children}</div>
    </section>
  );
}

export function Eyebrow({ children, color = C.silver, center }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: center ? "center" : "flex-start", gap: 10, marginBottom: 12 }}>
      <span aria-hidden style={{ width: 24, height: 1, background: color }} />
      <span style={{ fontFamily: F, fontSize: 11, letterSpacing: 2.6, textTransform: "uppercase", color, fontWeight: 600 }}>{children}</span>
      {center && <span aria-hidden style={{ width: 24, height: 1, background: color }} />}
    </div>
  );
}

export function H2({ children, style }) {
  return <h2 style={{ fontFamily: F, fontSize: "clamp(26px, 3.2vw, 40px)", fontWeight: 300, color: C.dark, letterSpacing: "-0.02em", lineHeight: 1.15, margin: "0 0 18px", maxWidth: 820, ...style }}>{children}</h2>;
}

export function Lead({ children, style }) {
  return <p style={{ fontFamily: F, fontSize: 16, color: C.dim, lineHeight: 1.75, maxWidth: 700, margin: "0 0 40px", ...style }}>{children}</p>;
}

export function Button({ href, onClick, children, color = C.silver, variant = "solid", ...rest }) {
  const base = { fontFamily: F, fontSize: 12, letterSpacing: 1.2, textTransform: "uppercase", fontWeight: 600, padding: "13px 26px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, cursor: "pointer", border: "1px solid transparent", transition: "opacity .2s, border-color .2s, color .2s" };
  const look = variant === "solid" ? { background: color, color: "#fff" } : { background: "transparent", color: C.text, borderColor: "rgba(0,0,0,0.14)" };
  const Tag = href ? "a" : "button";
  return <Tag href={href} onClick={onClick} className={`btn btn-${variant}`} style={{ ...base, ...look }} {...rest}>{children}</Tag>;
}

// Responsive image: WebP + JPEG fallback from /images/opt/<name>-<width>.(webp|jpg)
export function Picture({ name, widths, sizes = "100vw", alt = "", style, imgStyle, priority }) {
  const set = (ext) => widths.map((w) => `/images/opt/${name}-${w}.${ext} ${w}w`).join(", ");
  const largest = widths[widths.length - 1];
  return (
    <picture style={style}>
      <source type="image/webp" srcSet={set("webp")} sizes={sizes} />
      <img src={`/images/opt/${name}-${largest}.jpg`} srcSet={set("jpg")} sizes={sizes} alt={alt} loading={priority ? "eager" : "lazy"} fetchpriority={priority ? "high" : undefined} decoding="async" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", ...imgStyle }} />
    </picture>
  );
}

export function Wordmark({ size = 15, sub }) {
  return (
    <span style={{ display: "inline-flex", flexDirection: "column", lineHeight: 1 }}>
      <span style={{ display: "inline-flex", alignItems: "baseline", gap: 4 }}>
        <span style={{ fontFamily: F, fontSize: size, fontWeight: 500, color: C.silver, letterSpacing: size * 0.14 }}>IN</span>
        <span style={{ fontFamily: F, fontSize: size, fontWeight: 700, color: C.gold, letterSpacing: size * 0.16 }}>VENTURES</span>
        <span style={{ fontFamily: F, fontSize: size * 0.6, letterSpacing: 1.5, color: C.gold }}>.at</span>
      </span>
      {sub && <span className="wm-sub" style={{ fontFamily: F, fontSize: 8.5, letterSpacing: 1.2, color: C.goldDeep, textTransform: "uppercase", marginTop: 4, whiteSpace: "nowrap" }}>{sub}</span>}
    </span>
  );
}
