import { Link, useParams } from "react-router-dom";
import { C, F, T, TRACK } from "./tokens";
import { Panel, Container, Eyebrow, Reveal } from "./ui";
import { NewsRow, ArticleCard, newsFor } from "./sections";
import { articles } from "./news";
import Article from "./Article";
import { NotFound } from "./Layout";

// /insights — own articles first, then the external reports per area.
export function InsightsPage({ t, lang }) {
  const ix = t.insights;
  const groups = [["tech", t.ui.trackTech], ["re", t.ui.trackRe]];
  return (
    <main>
      <Panel first tone="light" innerStyle={{ padding: "clamp(120px, 14vw, 168px) 0 clamp(72px, 9vw, 112px)" }}>
        <Container>
          <Eyebrow>{ix.label}</Eyebrow>
          <h1 className="t-h2" style={{ margin: "0 0 20px", maxWidth: 900 }}>{ix.title}</h1>
          <p className="t-lead" style={{ margin: "0 0 56px", maxWidth: 680 }}>{ix.pageSub}</p>
          <div className="t-small" style={{ fontWeight: 600, color: C.muted, marginBottom: 16 }}>{ix.view} — {ix.viewSub}</div>
          <div className="split-2 tight" style={{ marginBottom: 72 }}>
            {articles.map((a) => <Reveal key={a.slug}><ArticleCard a={a} lang={lang} t={t} accent={TRACK[a.track].at} /></Reveal>)}
          </div>
          {groups.map(([track, label]) => (
            <section key={track} style={{ marginBottom: 56 }}>
              <h2 className="t-h3" style={{ margin: "0 0 12px", color: TRACK[track].at }}>{label}</h2>
              <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {newsFor(track).map((n) => <NewsRow key={n.id} n={n} lang={lang} t={t} accent={TRACK[track].at} />)}
              </ul>
            </section>
          ))}
        </Container>
      </Panel>
    </main>
  );
}

// /insights/:slug — one own article on its own page.
export function ArticlePage({ t, lang }) {
  const { slug } = useParams();
  const a = articles.find((x) => x.slug === slug);
  if (!a) return <NotFound t={t} />;
  return (
    <main>
      <Panel first tone="white" innerStyle={{ padding: "clamp(104px, 12vw, 140px) 0 0" }}>
        <Container style={{ maxWidth: 900 }}>
          <Link to="/insights" className="back-link" style={{ fontFamily: F, fontSize: T.sm, fontWeight: 500, color: C.dim, textDecoration: "none" }}>← {t.insights.back}</Link>
        </Container>
        <Article track={a.track} lang={lang} />
      </Panel>
    </main>
  );
}
