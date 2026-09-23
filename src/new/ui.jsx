import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { C, F, MAXW } from "./tokens";

export function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || seen) return;
    if (typeof IntersectionObserver === "undefined") { setSeen(true); return; }
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); o.disconnect(); } }, { threshold, rootMargin: "0px 0px -8% 0px" });
    o.observe(el);
    return () => o.disconnect();
  }, [threshold, seen]);
  return [ref, seen];
}

// Fade + rise + un-blur when the element enters the viewport.
export function Reveal({ children, delay = 0, style, as: Tag = "div", className = "" }) {
  const [ref, seen] = useInView();
  return (
    <Tag ref={ref} className={`reveal ${seen ? "is-in" : ""} ${className}`} style={{ transitionDelay: `${delay}s`, ...style }}>
      {children}
    </Tag>
  );
}

// Full-width block that sticks while the next panel slides over it (see useStack).
const TONES = {
  light: { bg: C.bg, fg: C.dark },
  white: { bg: "#FFFFFF", fg: C.dark },
  warm: { bg: "#EFEDE8", fg: C.dark },
  dark: { bg: "#15171A", fg: "#F2F1EE" },
};
export function Panel({ id, tone = "light", children, first, style, innerStyle, className = "" }) {
  const t = TONES[tone];
  return (
    <section id={id} className={`panel ${first ? "panel-first" : ""} tone-${tone} ${className}`} style={{ background: t.bg, color: t.fg, ...style }}>
      <div className="panel-inner" style={innerStyle}>{children}</div>
    </section>
  );
}

export function Container({ children, style, wide }) {
  return <div style={{ maxWidth: wide ? 1320 : MAXW, margin: "0 auto", padding: "0 clamp(20px, 5vw, 56px)", position: "relative", ...style }}>{children}</div>;
}

export function Eyebrow({ children, color = C.silver, center, style }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: center ? "center" : "flex-start", gap: 10, marginBottom: 20, ...style }}>
      <span aria-hidden style={{ width: 6, height: 6, borderRadius: "50%", background: color }} />
      <span style={{ fontFamily: F, fontSize: 12, letterSpacing: 2.4, textTransform: "uppercase", color, fontWeight: 600 }}>{children}</span>
    </div>
  );
}

export function H2({ children, style }) {
  return <h2 className="display" style={{ fontFamily: F, fontSize: "clamp(34px, 5vw, 68px)", fontWeight: 300, letterSpacing: "-0.035em", lineHeight: 1.04, margin: "0 0 24px", maxWidth: 980, ...style }}>{children}</h2>;
}

export function Lead({ children, style }) {
  return <p style={{ fontFamily: F, fontSize: "clamp(17px, 1.5vw, 20px)", lineHeight: 1.6, maxWidth: 720, margin: "0 0 56px", opacity: 0.72, ...style }}>{children}</p>;
}

export function TextLink({ href, children, color = C.dark, onClick }) {
  return (
    <a href={href} onClick={onClick} className="text-link" style={{ fontFamily: F, fontSize: 15, fontWeight: 600, color, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 10 }}>
      <span>{children}</span><span aria-hidden className="arrow">→</span>
    </a>
  );
}

export function Button({ href, onClick, children, color = C.dark, variant = "solid", ...rest }) {
  const base = { fontFamily: F, fontSize: 14, fontWeight: 600, letterSpacing: 0.2, padding: "15px 28px", borderRadius: 999, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 10, cursor: "pointer", border: "1px solid transparent", transition: "transform .25s, background .25s, color .25s, border-color .25s" };
  const look = variant === "solid" ? { background: color, color: "#fff" } : { background: "transparent", color: "inherit", borderColor: "currentColor" };
  const Tag = href ? "a" : "button";
  return <Tag href={href} onClick={onClick} className={`btn btn-${variant}`} style={{ ...base, ...look }} {...rest}>{children}<span aria-hidden className="arrow">→</span></Tag>;
}

// Responsive image: WebP + JPEG fallback from /images/opt/<name>-<width>.(webp|jpg)
export function Picture({ name, widths, sizes = "100vw", alt = "", style, imgStyle, priority, parallax }) {
  const set = (ext) => widths.map((w) => `/images/opt/${name}-${w}.${ext} ${w}w`).join(", ");
  const largest = widths[widths.length - 1];
  return (
    <picture style={style}>
      <source type="image/webp" srcSet={set("webp")} sizes={sizes} />
      <img src={`/images/opt/${name}-${largest}.jpg`} srcSet={set("jpg")} sizes={sizes} alt={alt} loading={priority ? "eager" : "lazy"} fetchpriority={priority ? "high" : undefined} decoding="async" data-parallax={parallax} style={{ display: "block", width: "100%", height: parallax ? "118%" : "100%", objectFit: "cover", willChange: parallax ? "transform" : undefined, ...imgStyle }} />
    </picture>
  );
}

export function Wordmark({ size = 15, sub, light }) {
  return (
    <span style={{ display: "inline-flex", flexDirection: "column", lineHeight: 1 }}>
      <span style={{ display: "inline-flex", alignItems: "baseline", gap: 4 }}>
        <span style={{ fontFamily: F, fontSize: size, fontWeight: 500, color: light ? "#B9C3CC" : C.silver, letterSpacing: size * 0.14 }}>IN</span>
        <span style={{ fontFamily: F, fontSize: size, fontWeight: 700, color: C.gold, letterSpacing: size * 0.16 }}>VENTURES</span>
        <span style={{ fontFamily: F, fontSize: size * 0.6, letterSpacing: 1.5, color: C.gold }}>.at</span>
      </span>
      {sub && <span className="wm-sub" style={{ fontFamily: F, fontSize: 8.5, letterSpacing: 1.2, color: C.goldDeep, textTransform: "uppercase", marginTop: 4, whiteSpace: "nowrap" }}>{sub}</span>}
    </span>
  );
}

// Scroll choreography: sticky stacking panels (each panel sticks; tall ones at their bottom edge),
// a dimming overlay while the next panel slides over, and image parallax. Disabled for reduced motion.
export function useStack() {
  const { pathname } = useLocation();
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let panels = [];
    let parallax = [];
    let raf = 0;
    const frame = () => {
      raf = 0;
      if (reduce) return;
      const vh = window.innerHeight;
      const nextTops = panels.map((p, i) => (panels[i + 1] ? panels[i + 1].getBoundingClientRect().top : vh));
      const pTops = parallax.map((el) => el.parentElement.getBoundingClientRect().top);
      panels.forEach((p, i) => p.style.setProperty("--cover", Math.min(1, Math.max(0, 1 - nextTops[i] / vh)).toFixed(3)));
      parallax.forEach((el, i) => { el.style.transform = `translate3d(0, ${(-pTops[i] * parseFloat(el.dataset.parallax)).toFixed(1)}px, 0)`; });
    };
    const measure = () => {
      panels = [...document.querySelectorAll(".panel")];
      parallax = [...document.querySelectorAll("[data-parallax]")];
      const vh = window.innerHeight;
      const tops = panels.map((p) => Math.min(0, vh - p.offsetHeight));
      panels.forEach((p, i) => { p.style.top = `${tops[i]}px`; p.style.zIndex = String(i + 1); });
      frame();
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(frame); };
    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(() => requestAnimationFrame(measure)) : null;
    const start = setTimeout(() => { measure(); if (ro) panels.forEach((p) => ro.observe(p)); }, 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      clearTimeout(start);
      if (raf) cancelAnimationFrame(raf);
      if (ro) ro.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
    };
  }, [pathname]);
}
