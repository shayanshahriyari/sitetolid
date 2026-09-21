import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import tex1 from "@/assets/tex-1.jpg";
import { PageHero } from "@/components/site/Blocks";
import { CtaBand, PageShell, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/motion";
import { articleAuthors, articleBodies } from "@/lib/articles-content";
import { articles } from "@/lib/site-data";

export const Route = createFileRoute("/articles/$slug")({
  loader: ({ params }) => {
    const article = articles.find((a) => a.slug === params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "مقاله یافت نشد | سایت تولید" }, { name: "robots", content: "noindex" }],
      };
    }
    const { article } = loaderData;
    return {
      meta: [
        { title: `${article.title} | ژورنال سایت تولید` },
        { name: "description", content: article.excerpt },
        { property: "og:title", content: article.title },
        { property: "og:description", content: article.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/articles/${article.slug}` },
      ],
      links: [{ rel: "canonical", href: `/articles/${article.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description: article.excerpt,
            inLanguage: "fa-IR",
            author: { "@type": "Person", name: articleAuthors[article.slug] ?? "تیم سایت تولید" },
            publisher: { "@type": "Organization", name: "سایت تولید" },
          }),
        },
      ],
    };
  },
  component: ArticleDetail,
});

function ArticleDetail() {
  const { article } = Route.useLoaderData();
  const body = articleBodies[article.slug] ?? [];
  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <PageHero
        compact
        eyebrow={article.category}
        title={article.title}
        desc={article.excerpt}
        image={tex1}
        meta={
          <p className="mt-7 text-xs text-muted-foreground">
            {articleAuthors[article.slug] ?? "تیم سایت تولید"} · {article.date} · {article.read} مطالعه
          </p>
        }
      />

      <section className="mt-20">
        <PageShell>
          <article className="mx-auto max-w-3xl">
            {body.map((block, i) => {
              if (block.type === "h2") {
                return (
                  <Reveal key={i} delay={40}>
                    <h2 className="mt-14 text-2xl font-extrabold leading-[1.6]">{block.text}</h2>
                  </Reveal>
                );
              }
              if (block.type === "quote") {
                return (
                  <Reveal key={i} delay={40}>
                    <blockquote className="mt-12 rounded-3xl hairline bg-surface/40 p-8 text-base leading-9 backdrop-blur">
                      <span className="text-gradient-brand">«</span>
                      {block.text}
                      <span className="text-gradient-brand">»</span>
                    </blockquote>
                  </Reveal>
                );
              }
              if (block.type === "list") {
                return (
                  <Reveal key={i} delay={40}>
                    <ul className="mt-8 space-y-3">
                      {block.items.map((it) => (
                        <li key={it} className="flex gap-3 text-sm leading-8 text-muted-foreground">
                          <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                );
              }
              return (
                <Reveal key={i} delay={40}>
                  <p className="mt-7 text-base leading-9 text-muted-foreground">{block.text}</p>
                </Reveal>
              );
            })}

            <Reveal>
              <div className="mt-16 border-t border-[var(--hairline)] pt-8">
                <Link
                  to="/articles"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  بازگشت به همه مقالات
                  <ArrowLeft className="h-4 w-4" strokeWidth={2} />
                </Link>
              </div>
            </Reveal>
          </article>
        </PageShell>
      </section>

      <section className="mt-32">
        <PageShell>
          <SectionHeading eyebrow="ادامه مطالعه" title="مقالات مرتبط" />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {related.map((a, i) => (
              <Reveal key={a.slug} delay={i * 90}>
                <Link
                  to="/articles/$slug"
                  params={{ slug: a.slug }}
                  className="group flex h-full flex-col justify-between rounded-3xl hairline bg-surface/40 p-7 backdrop-blur-xl transition-all duration-700 [transition-timing-function:var(--ease-cinema)] hover:-translate-y-1 hover:bg-surface/70"
                >
                  <div>
                    <span className="text-[0.7rem] tracking-[0.2em] text-brand-purple">
                      {a.category}
                    </span>
                    <h3 className="mt-4 text-base font-bold leading-8">{a.title}</h3>
                  </div>
                  <span className="mt-6 text-[0.7rem] text-muted-foreground">
                    {a.date} · {a.read}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </PageShell>
      </section>

      <CtaBand />
    </>
  );
}
