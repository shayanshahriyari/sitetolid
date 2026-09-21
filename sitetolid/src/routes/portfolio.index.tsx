import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import tex3 from "@/assets/tex-3.jpg";
import { PageHero, ProjectCard, StatsRow } from "@/components/site/Blocks";
import { CtaBand, PageShell, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/motion";
import { projectCategories, projects } from "@/lib/portfolio";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/portfolio/")({
  head: () => ({
    meta: [
      { title: "نمونه‌کارها | سایت تولید" },
      {
        name: "description",
        content:
          "پروژه‌های منتخب سایت تولید در طراحی سایت، برندینگ، سئو و تجربه کاربری؛ همراه با نتایج واقعی هر پروژه.",
      },
      { property: "og:title", content: "نمونه‌کارهای سایت تولید" },
      { property: "og:description", content: "روایت پروژه‌هایی که برای برندها نتیجه ساختند." },
    ],
  }),
  component: PortfolioIndex,
});

function PortfolioIndex() {
  const [cat, setCat] = useState("همه");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const term = q.trim();
    return projects.filter(
      (p) =>
        (cat === "همه" || p.category === cat) &&
        (term === "" ||
          p.title.includes(term) ||
          p.client.includes(term) ||
          p.industry.includes(term)),
    );
  }, [cat, q]);

  return (
    <>
      <PageHero
        eyebrow="نمونه‌کارها"
        title="پروژه های انجام شده"
        gradientTitle="توسط سایت تولید"
        desc=""
        image={tex3}
        primary={{ to: "/contact", label: "مشاوره رایگان" }}
        secondary={{ to: "/services", label: "خدمات ما" }}
      />


      <section className="mt-32">
        <PageShell>
      <SectionHeading eyebrow="آرشیو" title="به زودی نمونه کارهای مرتبط در اینجا بارگذاری خواهد شد" />
      </PageShell>
      </section>

      {/* <section className="mt-24">
        <PageShell>
          <SectionHeading eyebrow="آرشیو" title="پروژه‌های منتخب" />

          <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div role="tablist" aria-label="فیلتر دسته‌بندی" className="flex flex-wrap gap-2">
              {projectCategories.map((c) => (
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
              <label htmlFor="portfolio-search" className="sr-only">
                جست‌وجوی پروژه
              </label>
              <input
                id="portfolio-search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="جست‌وجو در پروژه‌ها…"
                className="w-full rounded-full hairline bg-surface/40 px-5 py-3 pe-11 text-sm backdrop-blur outline-none transition-colors focus:bg-surface-2 focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>

          {filtered.length === 0 ? (
            <Reveal>
              <p className="mt-16 text-center text-sm text-muted-foreground">
                پروژه‌ای با این فیلتر پیدا نشد.
              </p>
            </Reveal>
          ) : null}

          <div className="mt-20">
            <StatsRow
              items={[
                { value: "۱۲۰+", label: "پروژه تحویل‌شده" },
                { value: "۱۴", label: "صنعت مختلف" },
                { value: "۹۶٪", label: "همکاری ادامه‌دار" },
              ]}
            />
          </div>
        </PageShell>
      </section> */}

      <CtaBand />
    </>
  );
}
