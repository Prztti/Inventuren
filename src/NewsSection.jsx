import { useState } from "react";
import { techNews, reNews } from "./newsData";

const F = "\"Neue Haas Grotesk Display Pro\", Inter, sans-serif";

const C = {
  bg: "#F5F4F1",
  surface: "#ECEAE6",
  surfaceAlt: "#E4E2DD",
  border: "rgba(0,0,0,0.06)",
  dark: "#1A1A1A",
  dim: "rgba(26,26,26,0.45)",
  muted: "#8A919A",
  gold: "#9A7B42",
  goldText: "#B8924E",
  goldSoft: "rgba(154,123,66,0.12)",
  silver: "#8A9BA8",
  silverText: "#6B7F8E",
  silverSoft: "rgba(138,155,168,0.12)",
};

const LABELS = {
  en: {
    sectionLabel: "Research & Insights",
    sectionTitle: "News & Publications",
    sectionSub: "Curated articles, reports and market analyses across technology and real estate.",
    filterAll: "All",
    filter1: "2024–2026",
    filter2: "2022–2023",
    filter3: "2020–2021",
    readMore: "Read more →",
    noResults: "No articles found for this filter.",
  },
  de: {
    sectionLabel: "Forschung & Insights",
    sectionTitle: "News & Publikationen",
    sectionSub: "Kuratierte Artikel, Berichte und Marktanalysen aus Technologie und Immobilien.",
    filterAll: "Alle",
    filter1: "2024–2026",
    filter2: "2022–2023",
    filter3: "2020–2021",
    readMore: "Weiterlesen →",
    noResults: "Keine Artikel für diesen Filter gefunden.",
  },
  cn: {
    sectionLabel: "研究与洞察",
    sectionTitle: "新闻与出版物",
    sectionSub: "精选科技与房地产领域的文章、报告与市场分析。",
    filterAll: "全部",
    filter1: "2024–2026",
    filter2: "2022–2023",
    filter3: "2020–2021",
    readMore: "阅读更多 →",
    noResults: "未找到符合条件的文章。",
  },
};

function useWindowWidth() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  if (typeof window !== "undefined") {
    const handler = () => setWidth(window.innerWidth);
    // Attach once on first render
    if (!window.__newsSectionResizeAttached) {
      window.addEventListener("resize", handler);
      window.__newsSectionResizeAttached = true;
    }
  }
  return width;
}

function formatDate(dateStr) {
  const [year, month] = dateStr.split("-");
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  if (month) {
    return `${months[parseInt(month, 10) - 1]} ${year}`;
  }
  return year;
}

function NewsCard({ article, tc, lx, mob }) {
  const [hovered, setHovered] = useState(false);
  const [imgErr, setImgErr] = useState(false);

  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "flex",
        flexDirection: "column",
        background: hovered ? C.surface : "#EAEAE6",
        border: `1px solid ${hovered ? tc.a : C.border}`,
        textDecoration: "none",
        transition: "border-color 0.2s, background 0.2s, box-shadow 0.2s",
        boxShadow: hovered ? "0 4px 24px rgba(0,0,0,0.07)" : "none",
        overflow: "hidden",
        cursor: "pointer",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      {!imgErr && (
        <div
          style={{
            width: "100%",
            height: 160,
            overflow: "hidden",
            flexShrink: 0,
            background: C.surfaceAlt,
          }}
        >
          <img
            src={article.image}
            alt={article.title}
            onError={() => setImgErr(true)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              transition: "transform 0.3s",
              transform: hovered ? "scale(1.04)" : "scale(1)",
            }}
          />
        </div>
      )}

      {/* Content */}
      <div style={{ padding: "16px 18px 20px", flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Source badge + date */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 10,
            gap: 8,
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              fontFamily: F,
              fontSize: 9,
              letterSpacing: 1.5,
              textTransform: "uppercase",
              color: tc.at,
              background: tc.as,
              padding: "3px 8px",
              fontWeight: 600,
              whiteSpace: "nowrap",
              maxWidth: 180,
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {article.source}
          </span>
          <span
            style={{
              fontFamily: F,
              fontSize: 10,
              color: C.dim,
              letterSpacing: 0.3,
              whiteSpace: "nowrap",
            }}
          >
            {formatDate(article.date)}
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            fontFamily: F,
            fontSize: 13,
            fontWeight: 600,
            color: C.dark,
            lineHeight: 1.45,
            marginBottom: 8,
            flex: 1,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {article.title}
        </div>

        {/* Summary — 2 lines */}
        <p
          style={{
            fontFamily: F,
            fontSize: 11,
            color: C.dim,
            lineHeight: 1.65,
            margin: "0 0 14px",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {article.summary}
        </p>

        {/* Read more */}
        <span
          style={{
            fontFamily: F,
            fontSize: 10,
            letterSpacing: 0.8,
            fontWeight: 600,
            color: hovered ? tc.at : C.muted,
            transition: "color 0.2s",
            textTransform: "uppercase",
          }}
        >
          {lx.readMore}
        </span>
      </div>
    </a>
  );
}

export default function NewsSection({ track, lang }) {
  const lx = LABELS[lang] || LABELS.en;
  const width = useWindowWidth();
  const mob = width < 640;

  const tc = track === "tech"
    ? { a: C.silver, at: C.silverText, as: C.silverSoft }
    : { a: C.gold, at: C.goldText, as: C.goldSoft };

  const articles = track === "tech" ? techNews : reNews;

  const FILTERS = [
    { key: "all", label: lx.filterAll, test: () => true },
    { key: "recent", label: lx.filter1, test: (a) => a.year >= 2024 },
    { key: "mid", label: lx.filter2, test: (a) => a.year >= 2022 && a.year <= 2023 },
    { key: "early", label: lx.filter3, test: (a) => a.year >= 2020 && a.year <= 2021 },
  ];

  const [activeFilter, setActiveFilter] = useState("all");
  const filtered = articles.filter(
    FILTERS.find((f) => f.key === activeFilter).test
  );

  return (
    <div
      style={{
        background: C.bg,
        padding: mob ? "48px 20px" : "80px 40px",
      }}
    >
      <div style={{ maxWidth: 1060, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: 40 }}>
          <span
            style={{
              fontFamily: F,
              fontSize: 10,
              letterSpacing: 2.5,
              textTransform: "uppercase",
              color: tc.at,
              fontWeight: 600,
              display: "block",
              marginBottom: 10,
            }}
          >
            {lx.sectionLabel}
          </span>
          <h2
            style={{
              fontFamily: F,
              fontSize: "clamp(22px, 3vw, 34px)",
              fontWeight: 300,
              color: C.dark,
              marginBottom: 10,
              letterSpacing: "-0.02em",
            }}
          >
            {lx.sectionTitle}
          </h2>
          <p
            style={{
              fontFamily: F,
              fontSize: 14,
              color: C.dim,
              lineHeight: 1.7,
              maxWidth: 540,
              margin: 0,
            }}
          >
            {lx.sectionSub}
          </p>
        </div>

        {/* Filter tabs */}
        <div
          style={{
            display: "flex",
            gap: mob ? 6 : 8,
            marginBottom: 32,
            flexWrap: "wrap",
          }}
        >
          {FILTERS.map((f) => {
            const active = activeFilter === f.key;
            return (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                style={{
                  fontFamily: F,
                  fontSize: 10,
                  letterSpacing: 1.2,
                  textTransform: "uppercase",
                  fontWeight: 600,
                  padding: "6px 14px",
                  border: `1px solid ${active ? tc.a : C.border}`,
                  background: active ? tc.as : "transparent",
                  color: active ? tc.at : C.dim,
                  cursor: "pointer",
                  transition: "all 0.18s",
                  outline: "none",
                }}
                onMouseEnter={(e) => {
                  if (!active) {
                    e.currentTarget.style.borderColor = tc.a;
                    e.currentTarget.style.color = tc.at;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!active) {
                    e.currentTarget.style.borderColor = C.border;
                    e.currentTarget.style.color = C.dim;
                  }
                }}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <p style={{ fontFamily: F, fontSize: 13, color: C.dim }}>{lx.noResults}</p>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: mob ? "1fr" : "repeat(2, 1fr)",
              gap: mob ? 16 : 20,
            }}
          >
            {filtered.map((article) => (
              <NewsCard
                key={article.id}
                article={article}
                tc={tc}
                lx={lx}
                mob={mob}
              />
            ))}
          </div>
        )}

        {/* Bottom accent bar */}
        <div
          style={{
            marginTop: 40,
            padding: "14px 20px",
            background: C.surfaceAlt,
            border: `1px solid ${C.border}`,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 10,
          }}
        >
          <span style={{ fontFamily: F, fontSize: 11, color: C.dim }}>
            {filtered.length} {lang === "de" ? "Artikel" : lang === "cn" ? "篇文章" : "articles"}{" "}
            · {lang === "de" ? "Quellen: " : lang === "cn" ? "来源：" : "Sources: "}
            {track === "tech"
              ? "McKinsey, Gartner, Harvard Business Review, BCG, Deloitte, OECD"
              : "CBRE, JLL, Savills, Knight Frank, PwC, EHL Immobilien"}
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 5, height: 5, borderRadius: "50%", background: tc.a }} />
            <span
              style={{
                fontFamily: F,
                fontSize: 9,
                color: tc.at,
                letterSpacing: 1.5,
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              {track === "tech"
                ? lang === "de" ? "Technologie & KI" : lang === "cn" ? "技术与人工智能" : "Tech & AI"
                : lang === "de" ? "Immobilien" : lang === "cn" ? "房地产" : "Real Estate"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
