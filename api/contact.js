// Contact form endpoint (Vercel Node function).
// Inert until a mail provider is configured: without RESEND_API_KEY, CONTACT_TO and CONTACT_FROM
// it answers 503 and the form falls back to a prepared e-mail. Provider choice is still open
// (DSGVO: processor agreement, EU location) — swapping Resend for another API only touches send().

const LIMITS = { name: 200, company: 200, email: 320, topic: 120, message: 5000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const clean = (value, max) => String(value ?? "").replace(/\r/g, "").trim().slice(0, max);

async function send({ key, from, to }, data) {
  const text = [
    `Name: ${data.name}`,
    `Unternehmen: ${data.company || "—"}`,
    `E-Mail: ${data.email}`,
    `Bereich: ${data.topic || "—"}`,
    "",
    data.message || "—",
  ].join("\n");
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from, to: [to], reply_to: data.email, subject: `Anfrage inventures.at — ${data.topic || "Allgemein"}`, text }),
  });
  return res.ok;
}

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "method_not_allowed" });
  }
  let body = req.body;
  if (typeof body === "string") {
    try { body = JSON.parse(body); } catch { body = {}; }
  }
  body = body && typeof body === "object" ? body : {};

  // Honeypot: bots fill the hidden "website" field. Pretend success, send nothing.
  if (body.website) return res.status(200).json({ ok: true });

  const data = Object.fromEntries(Object.entries(LIMITS).map(([k, max]) => [k, clean(body[k], max)]));
  if (!data.name || !EMAIL_RE.test(data.email)) return res.status(400).json({ ok: false, error: "invalid_input" });

  const cfg = { key: process.env.RESEND_API_KEY, to: process.env.CONTACT_TO, from: process.env.CONTACT_FROM };
  if (!cfg.key || !cfg.to || !cfg.from) return res.status(503).json({ ok: false, error: "not_configured" });

  try {
    const sent = await send(cfg, data);
    return sent ? res.status(200).json({ ok: true }) : res.status(502).json({ ok: false, error: "send_failed" });
  } catch {
    return res.status(502).json({ ok: false, error: "send_failed" });
  }
}
