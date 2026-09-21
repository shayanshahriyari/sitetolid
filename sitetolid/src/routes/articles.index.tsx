import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Search } from "lucide-react";
import tex2 from "@/assets/tex-2.jpg";
import { PageHero } from "@/components/site/Blocks";
import { CtaBand, PageShell, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/motion";
import { articles } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/articles/")({
  head: () => ({
    meta: [
      { title: "مقالات | سایت تولید" },
      {
        name: "description",
        content:
          "مقالات تخصصی سایت تولید درباره طراحی سایت، تایپوگرافی فارسی، سئو، تجربه کاربری و رشد برند؛ برگرفته از تجربه پروژه‌های واقعی.",
      },
      { property: "og:title", content: " سایت تولید" },
      {
        property: "og:description",
        content: "آموخته‌های ما از پروژه‌های واقعی طراحی، سئو و برندینگ.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/articles" },
    ],
    links: [{ rel: "canonical", href: "/articles" }],
  }),
  component: ArticlesIndex,
});

const categories = ["همه", ...Array.from(new Set(articles.map((a) => a.category)))];

function ArticlesIndex() {
  const [cat, setCat] = useState("همه");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const term = q.trim();
    return articles.filter(
      (a) =>
        (cat === "همه" || a.category === cat) &&
        (term === "" || a.title.includes(term) || a.excerpt.includes(term)),
    );
  }, [cat, q]);

  const featured = articles[0];

  return (
    <>
      <PageHero
        eyebrow="ژورنال"
        title="آنچه در مسیر"
        gradientTitle="یاد گرفته‌ایم"
        desc="اینجا تجربه های واقعی سایت تولید و حوزه وب را می نویسیم،هر مقاله از دل پروژه بیرون آمده است."
        image={tex2}
        primary={{ to: "/contact", label: "مشاوره رایگان" }}
        secondary={{ to: "/services", label: "خدمات ما" }}
      />

      {/* {featured ? (
        <section className="mt-24">
          <PageShell>
            <SectionHeading eyebrow="مقاله منتخب" title="پیشنهاد امروز" />
            <Reveal>
              <Link
                to="/articles/$slug"
                params={{ slug: featured.slug }}
                className="group mt-12 block overflow-hidden rounded-[2.5rem] hairline bg-surface/40 p-8 backdrop-blur-xl transition-all duration-700 [transition-timing-function:var(--ease-cinema)] hover:-translate-y-1 hover:bg-surface/70 sm:p-12"
              >
                <span className="text-[0.7rem] tracking-[0.2em] text-brand-purple">
                  {featured.category}
                </span>
                <h3 className="mt-5 max-w-2xl text-2xl font-extrabold leading-[1.6] sm:text-3xl">
                  {featured.title}
                </h3>
                <p className="mt-5 max-w-2xl text-sm leading-8 text-muted-foreground">
                  {featured.excerpt}
                </p>
                <span className="mt-8 block text-[0.7rem] text-muted-foreground">
                  {featured.date} · {featured.read}
                </span>
              </Link>
            </Reveal>
          </PageShell>
        </section>
      ) : null} */}

      <section className="mt-32">
        <PageShell>
          <SectionHeading eyebrow="آرشیو" title="به زودی مقالات مرتبط در اینجا بارگذاری خواهد شد" />

          {/* <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div role="tablist" aria-label="فیلتر موضوع" className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  type="button"
                  role="tab"
                  aria-selected={cat === c}
                  onClick={() => setCat(c)}
                  className={cn(
                    "rounded-full px-4 py-2 text-xs transition-all duration-500 [transition-timing-function:var(--ease-cinema)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    cat === c
                      ? "bg-brand-gradient text-[oklch(0.16_0.02_285)] font-semibold"
                      : "hairline bg-surface/40 text-muted-foreground hover:text-foreground",
                  )}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="relative w-full lg:w-72">
              <Search className="pointer-events-none absolute inset-y-0 end-4 my-auto h-4 w-4 text-muted-foreground" />
              <label htmlFor="articles-search" className="sr-only">
                جست‌وجوی مقاله
              </label>
              <input
                id="articles-search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="جست‌وجو در مقالات…"
                className="w-full rounded-full hairline bg-surface/40 px-5 py-3 pe-11 text-sm backdrop-blur outline-none transition-colors focus:bg-surface-2 focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
          </div> */}

          {/* <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((a, i) => (
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
                    <p className="mt-3 text-xs leading-7 text-muted-foreground">{a.excerpt}</p>
                  </div>
                  <span className="mt-6 text-[0.7rem] text-muted-foreground">
                    {a.date} · {a.read}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div> */}

          {filtered.length === 0 ? (
            <Reveal>
              <p className="mt-16 text-center text-sm text-muted-foreground">
                مقاله‌ای با این فیلتر پیدا نشد.
              </p>
            </Reveal>
          ) : null}
        </PageShell>
      </section>

      <CtaBand
        title="سؤالی از تیم ما دارید؟"
        desc="اگر نیاز به مشاوره دارید با ما در ارتباط باشید."
      />
    </>
  );
}
