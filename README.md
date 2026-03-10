# INVENTURES.ai — Website

InVentures GmbH

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Deploy to Vercel (Step by Step)

### 1. GitHub Repository erstellen

```bash
cd inventures-site
git init
git add .
git commit -m "Initial commit"
```

Auf github.com ein neues Repository erstellen (z.B. `inventures-website`), dann:

```bash
git remote add origin https://github.com/DEIN-USERNAME/inventures-website.git
git branch -M main
git push -u origin main
```

### 2. Vercel verbinden

1. Gehe zu **vercel.com** und erstelle einen Account (GitHub-Login)
2. Klicke **"Add New Project"**
3. Importiere das GitHub-Repository `inventures-website`
4. Vercel erkennt Vite automatisch — klicke **"Deploy"**
5. In ca. 30 Sekunden ist die Seite live unter `inventures-website.vercel.app`

### 3. Custom Domain (inventures.ai) verbinden

1. In Vercel: Project Settings → Domains → `inventures.ai` eingeben
2. Vercel zeigt dir DNS-Eintraege an (A-Record oder CNAME)
3. Bei deinem Domain-Registrar (wo du inventures.ai gekauft hast):
   - **Option A (empfohlen):** A-Record auf `76.76.21.21` setzen
   - **Option B:** CNAME auf `cname.vercel-dns.com` setzen
4. Warte 5–30 Minuten bis DNS propagiert
5. SSL-Zertifikat wird automatisch erstellt

### 4. Aenderungen deployen

Jede Aenderung die du auf GitHub pushst wird automatisch deployed:

```bash
git add .
git commit -m "Update"
git push
```

Vercel baut und deployed automatisch in ca. 30 Sekunden.

## Projektstruktur

```
inventures-site/
├── index.html          ← HTML-Einstiegspunkt
├── package.json        ← Dependencies & Scripts
├── vite.config.js      ← Vite Konfiguration
├── public/
│   └── favicon.svg     ← Browser-Icon
└── src/
    ├── main.jsx        ← React Entry Point
    └── App.jsx         ← Die gesamte Website
```
