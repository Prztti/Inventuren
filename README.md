# InVentures — Website

inventures.at — InVentures, a joint venture of David Brainin and Philip Kügler. Legal entity: Inside Holding & Real Estate GmbH.

## Local development

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build into dist/ (dist/404.html is a copy of index.html)
npm run preview    # serve the production build
```

## Deploy

Vercel builds and deploys every push to `main` automatically — a push to `main` is public within about a minute. Routing, redirects and security headers live in `vercel.json`.

## Structure

```
index.html               entry page (static meta tags; loads src/new2/main.jsx)
src/new2/                the site (React, React Router)
  content.js             all copy in English, German and Chinese
  data.js                track record, references, logos
  news.js                Insights: news items and article list
  Article.jsx            the two lead articles with their sources
  legalText.js           Impressum and privacy policy (German binding)
public/                  logos, optimised images (images/opt), robots.txt, sitemap.xml
assets-source/images/    original images (not deployed)
api/contact.js           contact form endpoint (inactive until RESEND_API_KEY, CONTACT_TO and CONTACT_FROM are set)
```

Old links: `/new2/*` and `/new/*` redirect to the same path on the root; `/#tech` and `/#re` lead to `/tech` and `/real-estate`.
