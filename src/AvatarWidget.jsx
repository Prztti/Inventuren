import { useState, useEffect, useRef } from "react";

const API = "https://inventures-avatar.vercel.app";

export default function AvatarWidget({ lang = "en" }) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [leadMode, setLeadMode] = useState(false);
  const [email, setEmail] = useState("");
  const bottomRef = useRef(null);

  const greeting =
    lang === "de"
      ? "Hallo! Ich bin der InVentures Assistent. Wie kann ich Ihnen helfen?"
      : "Hello! I'm the InVentures Assistant. How can I help you today?";

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ role: "assistant", content: greeting }]);
    }
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function send() {
    if (!input.trim()) return;
    const userMsg = { role: "user", content: input };
    const newHistory = [...messages, userMsg];
    setMessages(newHistory);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(`${API}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input, language: lang, history: messages }),
      });
      const text = await res.text();
      setMessages([...newHistory, { role: "assistant", content: text }]);

      // Check if response asks for email
      if (text.toLowerCase().includes("email") || text.toLowerCase().includes("e-mail")) {
        setLeadMode(true);
      }
    } catch {
      setMessages([...newHistory, { role: "assistant", content: "Sorry, something went wrong. Please email us at info@inventures.at" }]);
    }
    setLoading(false);
  }

  async function submitLead() {
    if (!email.includes("@")) return;
    await fetch(`${API}/api/lead`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, message: "Lead from inventures.at widget", language: lang }),
    });
    setMessages(prev => [...prev, {
      role: "assistant",
      content: lang === "de"
        ? `Danke! Wir melden uns innerhalb von 24h bei ${email}.`
        : `Thank you! We'll reach out within 24 hours at ${email}.`
    }]);
    setLeadMode(false);
    setEmail("");
  }

  const gold = "#9A7B42";

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          position: "fixed", bottom: 28, right: 28, zIndex: 9999,
          width: 56, height: 56, borderRadius: "50%",
          background: gold, border: "none", cursor: "pointer",
          boxShadow: "0 4px 20px rgba(154,123,66,0.45)",
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "transform 0.2s",
        }}
        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.08)"}
        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
        aria-label="InVentures Assistant"
      >
        {open ? (
          <svg width="20" height="20" fill="white" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12" stroke="white" strokeWidth="2.5" strokeLinecap="round"/></svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C6.48 2 2 6.03 2 11c0 2.7 1.23 5.12 3.2 6.8L4 22l4.4-1.47A10.1 10.1 0 0012 21c5.52 0 10-4.03 10-9S17.52 2 12 2z" fill="white"/>
          </svg>
        )}
      </button>

      {/* Chat Panel */}
      {open && (
        <div style={{
          position: "fixed", bottom: 96, right: 28, zIndex: 9998,
          width: 360, maxHeight: 520,
          background: "#0f0f0f", borderRadius: 16,
          boxShadow: "0 8px 40px rgba(0,0,0,0.5)",
          display: "flex", flexDirection: "column",
          fontFamily: "sans-serif", overflow: "hidden",
          border: "1px solid rgba(154,123,66,0.3)",
        }}>
          {/* Header */}
          <div style={{ padding: "14px 18px", borderBottom: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: gold, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, color: "white" }}>IV</div>
            <div>
              <div style={{ color: "#fff", fontSize: 14, fontWeight: 600 }}>InVentures Assistant</div>
              <div style={{ color: "#9A7B42", fontSize: 11 }}>● Online</div>
            </div>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: "auto", padding: "14px 16px", display: "flex", flexDirection: "column", gap: 10 }}>
            {messages.map((m, i) => (
              <div key={i} style={{ display: "flex", justifyContent: m.role === "user" ? "flex-end" : "flex-start" }}>
                <div style={{
                  maxWidth: "82%", padding: "9px 13px", borderRadius: m.role === "user" ? "14px 14px 2px 14px" : "14px 14px 14px 2px",
                  background: m.role === "user" ? gold : "rgba(255,255,255,0.07)",
                  color: "#fff", fontSize: 13, lineHeight: 1.5,
                }}>
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div style={{ display: "flex", gap: 4, padding: "6px 4px" }}>
                {[0,1,2].map(i => <span key={i} style={{ width: 7, height: 7, borderRadius: "50%", background: gold, animation: `bounce 1s ${i*0.2}s infinite`, display: "inline-block" }}/>)}
              </div>
            )}
            <div ref={bottomRef}/>
          </div>

          {/* Lead email capture */}
          {leadMode && (
            <div style={{ padding: "10px 16px", background: "rgba(154,123,66,0.08)", borderTop: "1px solid rgba(154,123,66,0.2)", display: "flex", gap: 8 }}>
              <input
                value={email} onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com"
                onKeyDown={e => e.key === "Enter" && submitLead()}
                style={{ flex: 1, padding: "8px 12px", borderRadius: 8, border: "1px solid rgba(154,123,66,0.4)", background: "#1a1a1a", color: "#fff", fontSize: 13, outline: "none" }}
              />
              <button onClick={submitLead} style={{ padding: "8px 14px", borderRadius: 8, background: gold, border: "none", color: "#fff", fontWeight: 600, cursor: "pointer", fontSize: 13 }}>Send</button>
            </div>
          )}

          {/* Input */}
          <div style={{ padding: "12px 16px", borderTop: "1px solid rgba(255,255,255,0.07)", display: "flex", gap: 8 }}>
            <input
              value={input} onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && send()}
              placeholder={lang === "de" ? "Nachricht..." : "Ask me anything..."}
              style={{ flex: 1, padding: "9px 13px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.06)", color: "#fff", fontSize: 13, outline: "none" }}
            />
            <button onClick={send} disabled={loading || !input.trim()} style={{ padding: "9px 14px", borderRadius: 10, background: input.trim() ? gold : "rgba(154,123,66,0.3)", border: "none", color: "#fff", cursor: input.trim() ? "pointer" : "default", transition: "background 0.2s" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M2 12L22 2 12 22 10 14 2 12z"/></svg>
            </button>
          </div>
        </div>
      )}

      <style>{`@keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}`}</style>
    </>
  );
}
