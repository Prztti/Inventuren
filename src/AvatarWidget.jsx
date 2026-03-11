import { useState } from "react";

const AVATAR_URL = "https://inventures-avatar.vercel.app";
const gold = "#9A7B42";

export default function AvatarWidget({ lang = "en" }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          position: "fixed", bottom: 28, right: 28, zIndex: 9999,
          width: 58, height: 58, borderRadius: "50%",
          background: gold, border: "none", cursor: "pointer",
          boxShadow: "0 4px 24px rgba(154,123,66,0.5)",
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "transform 0.2s, box-shadow 0.2s",
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.08)"; e.currentTarget.style.boxShadow = "0 6px 32px rgba(154,123,66,0.65)"; }}
        onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 4px 24px rgba(154,123,66,0.5)"; }}
        aria-label="InVentures Assistant"
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C6.48 2 2 6.03 2 11c0 2.7 1.23 5.12 3.2 6.8L4 22l4.4-1.47A10.1 10.1 0 0012 21c5.52 0 10-4.03 10-9S17.52 2 12 2z" fill="white"/>
          </svg>
        )}
      </button>

      {/* Avatar Panel (iframe) */}
      {open && (
        <div style={{
          position: "fixed", bottom: 100, right: 28, zIndex: 9998,
          width: 400, height: 560,
          borderRadius: 20,
          boxShadow: "0 12px 50px rgba(0,0,0,0.55)",
          overflow: "hidden",
          border: "1px solid rgba(154,123,66,0.35)",
          animation: "slideUp 0.2s ease-out",
        }}>
          <iframe
            src={`${AVATAR_URL}/embed?lang=${lang}&v=3`}
            width="100%"
            height="100%"
            style={{ border: "none", display: "block" }}
            allow="microphone; camera; autoplay"
            title="InVentures Assistant"
          />
        </div>
      )}

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
