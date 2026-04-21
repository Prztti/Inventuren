import { useState, useEffect } from "react";

const STORAGE_KEY = "inventures-consent-v1";
const F = "'DM Sans', sans-serif";

const TX = {
  en: {
    text: "We use cookies to operate this website. Some are technically necessary; others help us analyse traffic. See our ",
    privacy: "Privacy Policy",
    and: " and ",
    imprint: "Imprint",
    forDetails: ".",
    settings: "Settings",
    necessary: "Only necessary",
    acceptAll: "Accept all",
    settingsTitle: "Cookie settings",
    categories: {
      essential: { label: "Necessary", desc: "Required for core website functions. Cannot be disabled." },
      analytics: { label: "Analytics", desc: "Helps us understand how visitors interact with the site (anonymised)." },
      marketing: { label: "Marketing", desc: "Used to personalise ads and track conversions across sites." },
    },
    saveSelection: "Save selection",
  },
  de: {
    text: "Wir verwenden Cookies, um diese Website zu betreiben. Einige sind technisch notwendig; andere helfen uns, den Traffic zu analysieren. Weitere Informationen in unserer ",
    privacy: "Datenschutzerklärung",
    and: " und im ",
    imprint: "Impressum",
    forDetails: ".",
    settings: "Einstellungen",
    necessary: "Nur notwendige",
    acceptAll: "Alle akzeptieren",
    settingsTitle: "Cookie-Einstellungen",
    categories: {
      essential: { label: "Notwendig", desc: "Für grundlegende Website-Funktionen erforderlich. Kann nicht deaktiviert werden." },
      analytics: { label: "Analyse", desc: "Hilft uns zu verstehen, wie Besucher die Website nutzen (anonymisiert)." },
      marketing: { label: "Marketing", desc: "Für personalisierte Werbung und Conversion-Tracking auf anderen Websites." },
    },
    saveSelection: "Auswahl speichern",
  },
  cn: {
    text: "我们使用 Cookie 来运营本网站。部分 Cookie 为技术必要项，其他 Cookie 帮助我们分析访问流量。详情请参阅我们的",
    privacy: "隐私政策",
    and: "与",
    imprint: "法律声明",
    forDetails: "。",
    settings: "设置",
    necessary: "仅必要项",
    acceptAll: "接受全部",
    settingsTitle: "Cookie 设置",
    categories: {
      essential: { label: "必要", desc: "网站核心功能所必需，无法停用。" },
      analytics: { label: "分析", desc: "帮助我们了解访客如何与网站互动（已匿名化）。" },
      marketing: { label: "营销", desc: "用于在其他网站上投放个性化广告及转化追踪。" },
    },
    saveSelection: "保存选择",
  },
};

function loadConsent() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function saveConsent(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  window.dispatchEvent(new CustomEvent("consent-changed", { detail: data }));
}

export default function CookieConsent({ lang = "en" }) {
  const t = TX[lang] || TX.en;
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const [slideIn, setSlideIn] = useState(false);

  useEffect(() => {
    const existing = loadConsent();
    if (!existing) {
      setVisible(true);
      setTimeout(() => setSlideIn(true), 50);
    }

    const onOpen = () => {
      setShowSettings(true);
      setVisible(true);
      setTimeout(() => setSlideIn(true), 50);
    };
    window.addEventListener("open-consent", onOpen);
    return () => window.removeEventListener("open-consent", onOpen);
  }, []);

  function dismiss() {
    setSlideIn(false);
    setTimeout(() => setVisible(false), 300);
  }

  function handleAcceptAll() {
    saveConsent({ essential: true, analytics: true, marketing: true, timestamp: new Date().toISOString(), version: 1 });
    dismiss();
  }

  function handleNecessaryOnly() {
    saveConsent({ essential: true, analytics: false, marketing: false, timestamp: new Date().toISOString(), version: 1 });
    dismiss();
  }

  function handleSaveSelection() {
    saveConsent({ essential: true, analytics, marketing, timestamp: new Date().toISOString(), version: 1 });
    dismiss();
  }

  if (!visible) return null;

  const bannerStyle = {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 9999,
    background: "rgba(26,26,26,0.97)",
    backdropFilter: "blur(18px)",
    WebkitBackdropFilter: "blur(18px)",
    borderTop: "1px solid rgba(255,255,255,0.08)",
    padding: "20px 24px",
    transform: slideIn ? "translateY(0)" : "translateY(100%)",
    transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
  };

  const linkStyle = {
    color: "#B8924E",
    textDecoration: "none",
    fontWeight: 500,
  };

  const btnBase = {
    fontFamily: F,
    fontSize: 12,
    letterSpacing: 0.5,
    cursor: "pointer",
    padding: "9px 18px",
    border: "none",
    whiteSpace: "nowrap",
    transition: "all 0.2s",
  };

  return (
    <div style={bannerStyle} role="dialog" aria-label="Cookie consent">
      <div style={{ maxWidth: 1060, margin: "0 auto" }}>
        {!showSettings ? (
          /* Default view */
          <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 16, justifyContent: "space-between" }}>
            <p style={{ fontFamily: F, fontSize: 13, color: "rgba(255,255,255,0.75)", lineHeight: 1.6, margin: 0, maxWidth: 640, flex: "1 1 300px" }}>
              {t.text}
              <a href="/datenschutz" style={linkStyle}>{t.privacy}</a>
              {t.and}
              <a href="/impressum" style={linkStyle}>{t.imprint}</a>
              {t.forDetails}
            </p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", flexShrink: 0 }}>
              <button
                onClick={() => setShowSettings(true)}
                style={{ ...btnBase, background: "transparent", color: "rgba(255,255,255,0.55)", border: "1px solid rgba(255,255,255,0.15)" }}
              >
                {t.settings}
              </button>
              <button
                onClick={handleNecessaryOnly}
                style={{ ...btnBase, background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.4)" }}
              >
                {t.necessary}
              </button>
              <button
                onClick={handleAcceptAll}
                style={{ ...btnBase, background: "#9A7B42", color: "#fff", border: "1px solid #9A7B42" }}
              >
                {t.acceptAll}
              </button>
            </div>
          </div>
        ) : (
          /* Settings view */
          <div>
            <div style={{ fontFamily: F, fontSize: 13, fontWeight: 600, color: "#fff", letterSpacing: 0.5, marginBottom: 16 }}>
              {t.settingsTitle}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
              {/* Necessary — always on */}
              <ToggleRow
                label={t.categories.essential.label}
                desc={t.categories.essential.desc}
                checked={true}
                disabled={true}
              />
              <ToggleRow
                label={t.categories.analytics.label}
                desc={t.categories.analytics.desc}
                checked={analytics}
                onChange={setAnalytics}
              />
              <ToggleRow
                label={t.categories.marketing.label}
                desc={t.categories.marketing.desc}
                checked={marketing}
                onChange={setMarketing}
              />
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <button
                onClick={handleNecessaryOnly}
                style={{ ...btnBase, background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.4)" }}
              >
                {t.necessary}
              </button>
              <button
                onClick={handleSaveSelection}
                style={{ ...btnBase, background: "#9A7B42", color: "#fff", border: "1px solid #9A7B42" }}
              >
                {t.saveSelection}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ToggleRow({ label, desc, checked, disabled, onChange }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      gap: 16, padding: "10px 14px",
      background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)",
    }}>
      <div style={{ flex: 1 }}>
        <div style={{ fontFamily: F, fontSize: 12, fontWeight: 600, color: "#fff", marginBottom: 2 }}>{label}</div>
        <div style={{ fontFamily: F, fontSize: 11, color: "rgba(255,255,255,0.5)", lineHeight: 1.5 }}>{desc}</div>
      </div>
      <label style={{ position: "relative", display: "inline-block", width: 36, height: 20, flexShrink: 0, cursor: disabled ? "not-allowed" : "pointer" }}>
        <input
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={e => onChange && onChange(e.target.checked)}
          style={{ opacity: 0, width: 0, height: 0, position: "absolute" }}
        />
        <span style={{
          position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
          borderRadius: 10,
          background: checked ? "#9A7B42" : "rgba(255,255,255,0.15)",
          transition: "background 0.2s",
        }} />
        <span style={{
          position: "absolute", top: 3, left: checked ? 19 : 3, width: 14, height: 14,
          borderRadius: "50%", background: "#fff",
          transition: "left 0.2s",
        }} />
      </label>
    </div>
  );
}
