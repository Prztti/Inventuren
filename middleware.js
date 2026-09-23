// Vercel Routing Middleware: password gate for the preview areas under /new and /new2.
// Only these paths are matched; the live site is never touched.
// Password: env PREVIEW_PASSWORD if set, otherwise the one whose SHA-256 hash is below.

export const config = {
  matcher: ["/new", "/new/:path*", "/new2", "/new2/:path*"],
};

const DEFAULT_PASSWORD_SHA256 =
  "2cf4f74a13d81f1a4b201ed6111071179d46103f0bdfda4d0dc331869cb85bc4";

async function sha256Hex(value) {
  const data = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

function passwordFromHeader(header) {
  if (!header || !header.startsWith("Basic ")) return null;
  try {
    const decoded = atob(header.slice(6).trim());
    const i = decoded.indexOf(":");
    return i === -1 ? null : decoded.slice(i + 1);
  } catch {
    return null;
  }
}

export default async function middleware(request) {
  const given = passwordFromHeader(request.headers.get("authorization"));
  if (given !== null) {
    const envPassword =
      typeof process !== "undefined" && process.env ? process.env.PREVIEW_PASSWORD : undefined;
    const expected = envPassword ? await sha256Hex(envPassword) : DEFAULT_PASSWORD_SHA256;
    if ((await sha256Hex(given)) === expected) return; // continue to the static files
  }
  return new Response("Passwort erforderlich / Password required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="InVentures Preview", charset="UTF-8"',
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}
