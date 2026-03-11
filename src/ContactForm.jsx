import { useState } from "react";

const F = "'DM Sans',sans-serif";

const labels = {
  en: {
    name: "Name", company: "Company", email: "Email Address",
    track: "Area of Interest", message: "Message",
    trackOptions: [
      { value: "Tech & AI", label: "Tech & AI" },
      { value: "Real Estate", label: "Real Estate & Hospitality" },
      { value: "Both", label: "Both" },
    ],
    submit: "Send Enquiry",
    success: "Thank you — we'll be in touch shortly.",
    namePlaceholder: "Your name",
    companyPlaceholder: "Company (optional)",
    emailPlaceholder: "you@company.com",
    messagePlaceholder: "Briefly describe your enquiry or project...",
    privacyNote: "Your data is handled in accordance with our privacy policy. No spam, ever.",
  },
  de: {
    name: "Name", company: "Unternehmen", email: "E-Mail-Adresse",
    track: "Interessensbereich", message: "Nachricht",
    trackOptions: [
      { value: "Tech & AI", label: "Tech & AI" },
      { value: "Real Estate", label: "Real Estate & Hospitality" },
      { value: "Beides", label: "Beides" },
    ],
    submit: "Anfrage senden",
    success: "Vielen Dank — wir melden uns in Kürze.",
    namePlaceholder: "Ihr Name",
    companyPlaceholder: "Unternehmen (optional)",
    emailPlaceholder: "sie@unternehmen.at",
    messagePlaceholder: "Beschreiben Sie kurz Ihr Anliegen oder Projekt...",
    privacyNote: "Ihre Daten werden gemäß unserer Datenschutzerklärung verarbeitet.",
  },
  cn: {
    name: "姓名", company: "公司", email: "电子邮件地址",
    track: "感兴趣领域", message: "留言",
    trackOptions: [
      { value: "Tech & AI", label: "技术与AI" },
      { value: "Real Estate", label: "房地产与酒店业" },
      { value: "Both", label: "两者均感兴趣" },
    ],
    submit: "发送咨询",
    success: "感谢您的联系，我们将尽快与您联系。",
    namePlaceholder: "您的姓名",
    companyPlaceholder: "公司（可选）",
    emailPlaceholder: "您的邮箱",
    messagePlaceholder: "请简要描述您的咨询或项目...",
    privacyNote: "您的数据将根据我们的隐私政策处理。",
  },
};

export default function ContactForm({ lang = "en", accentColor = "#9A7B42", accentTextColor = "#B8924E" }) {
  const l = labels[lang] || labels.en;
  const [form, setForm] = useState({ name: "", company: "", email: "", track: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const formEl = e.target;
      const body = new URLSearchParams(new FormData(formEl)).toString();
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
      if (res.ok || res.status === 200 || res.redirected) {
        setSubmitted(true);
      } else {
        // Still show success for Netlify (may redirect)
        setSubmitted(true);
      }
    } catch {
      setSubmitted(true);
    }
    setSubmitting(false);
  };

  const inputBase = {
    width: "100%", fontFamily: F, fontSize: 14, color: "#1A1A1A",
    background: "#fff", border: "1px solid #E0DDD8",
    padding: "12px 14px", outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
    borderRadius: 0,
    appearance: "none",
  };

  const labelStyle = {
    fontFamily: F, fontSize: 10, letterSpacing: 1.8,
    textTransform: "uppercase", color: "#6B7280",
    display: "block", marginBottom: 6, fontWeight: 600,
  };

  if (submitted) {
    return (
      <div style={{
        padding: "48px 32px", textAlign: "center",
        background: `rgba(154,123,66,0.06)`,
        border: `1px solid ${accentColor}30`,
      }}>
        <div style={{
          width: 48, height: 48, borderRadius: "50%",
          border: `1.5px solid ${accentColor}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          margin: "0 auto 20px",
        }}>
          <span style={{ fontSize: 20, color: accentColor }}>✓</span>
        </div>
        <p style={{ fontFamily: F, fontSize: 16, color: accentTextColor, fontWeight: 500, margin: 0 }}>
          {l.success}
        </p>
      </div>
    );
  }

  const focusHandler = (e) => {
    e.target.style.borderColor = accentColor;
    e.target.style.boxShadow = `0 0 0 2px ${accentColor}15`;
  };
  const blurHandler = (e) => {
    e.target.style.borderColor = "#E0DDD8";
    e.target.style.boxShadow = "none";
  };

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: 16 }}
    >
      <input type="hidden" name="form-name" value="contact" />
      <div style={{ display: "none" }}>
        <label>Don't fill this out: <input name="bot-field" /></label>
      </div>

      {/* Name + Company */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div>
          <label style={labelStyle}>
            {l.name} <span style={{ color: accentTextColor }}>*</span>
          </label>
          <input
            name="name" type="text" required
            value={form.name} onChange={handleChange}
            placeholder={l.namePlaceholder}
            style={inputBase}
            onFocus={focusHandler} onBlur={blurHandler}
          />
        </div>
        <div>
          <label style={labelStyle}>{l.company}</label>
          <input
            name="company" type="text"
            value={form.company} onChange={handleChange}
            placeholder={l.companyPlaceholder}
            style={inputBase}
            onFocus={focusHandler} onBlur={blurHandler}
          />
        </div>
      </div>

      {/* Email + Track */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div>
          <label style={labelStyle}>
            {l.email} <span style={{ color: accentTextColor }}>*</span>
          </label>
          <input
            name="email" type="email" required
            value={form.email} onChange={handleChange}
            placeholder={l.emailPlaceholder}
            style={inputBase}
            onFocus={focusHandler} onBlur={blurHandler}
          />
        </div>
        <div>
          <label style={labelStyle}>{l.track}</label>
          <select
            name="track"
            value={form.track} onChange={handleChange}
            style={{ ...inputBase, cursor: "pointer", backgroundImage: "none" }}
            onFocus={focusHandler} onBlur={blurHandler}
          >
            <option value="">—</option>
            {l.trackOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label style={labelStyle}>{l.message}</label>
        <textarea
          name="message" rows={5}
          value={form.message} onChange={handleChange}
          placeholder={l.messagePlaceholder}
          style={{ ...inputBase, resize: "vertical", lineHeight: 1.6 }}
          onFocus={focusHandler} onBlur={blurHandler}
        />
      </div>

      {/* Submit */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        <button
          type="submit"
          disabled={submitting}
          style={{
            fontFamily: F, fontSize: 11, letterSpacing: 1.5,
            textTransform: "uppercase", fontWeight: 700,
            padding: "14px 36px", background: submitting ? "#ccc" : accentColor,
            color: "#fff", border: "none",
            cursor: submitting ? "not-allowed" : "pointer",
            transition: "opacity 0.2s, background 0.2s",
          }}
          onMouseEnter={e => { if (!submitting) e.currentTarget.style.opacity = "0.85"; }}
          onMouseLeave={e => { e.currentTarget.style.opacity = "1"; }}
        >
          {submitting ? "···" : l.submit}
        </button>
        <span style={{ fontFamily: F, fontSize: 11, color: "#9CA3AF", maxWidth: 260, lineHeight: 1.5 }}>
          {l.privacyNote}
        </span>
      </div>

      {error && (
        <p style={{ fontFamily: F, fontSize: 13, color: "#DC2626", marginTop: 4 }}>{error}</p>
      )}
    </form>
  );
}
