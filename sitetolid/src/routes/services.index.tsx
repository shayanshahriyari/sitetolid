import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { PageHero, StatsRow } from "@/components/site/Blocks";
import { CtaBand, PageShell, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/motion";
import { services } from "@/lib/site-data";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "خدمات سایت تولید | طراحی سایت، سئو، برندینگ" },
      {
        name: "description",
        content:
          "شش سرویس تخصصی سایت تولید: طراحی سایت، سئو، طراحی رابط و تجربه کاربری، دیجیتال مارکتینگ، طراحی بنر و برندینگ.",
      },
      { property: "og:title", content: "خدمات  سایت تولید" },
      {
        property: "og:description",
        content: "از معماری دیجیتال تا رشد ارگانیک؛ خدماتی که برای فروش طراحی شده‌اند.",
      },
    ],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <>
      <PageHero
        eyebrow="خدمات"
        title="هر سرویس، یک"
        gradientTitle="موتور رشد مستقل"
        desc="ما شش تخصص را زیر یک سقف جمع کرده‌ایم تا مسیر برند شما از اولین طرح تا رشد پایدار، بدون شکاف طی شود."
        image={heroImg}
        primary={{ to: "/contact", label: "مشاوره رایگان" }}
        secondary={{ to: "/portfolio", label: "نمونه‌کارها" }}
      />

      <section className="mt-28">
        <PageShell>
          <SectionHeading
            eyebrow="تخصص‌ها"
            title="سرویس‌های ما"
            desc="روی هر سرویس کلیک کنید تا فرآیند، خروجی‌ها، تعرفه‌ها و نمونه‌کارهای مرتبط را ببینید."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 80}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl hairline bg-surface/40 p-8 backdrop-blur transition-transform duration-700 [transition-timing-function:var(--ease-cinema)] hover:-translate-y-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <span className="pointer-events-none absolute inset-x-8 -top-px h-px bg-[linear-gradient(90deg,transparent,color-mix(in_oklab,var(--brand-green)_65%,transparent),transparent)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                  <span className="text-xs font-semibold tracking-[0.2em] text-brand-purple">
                    {`۰${i + 1}`}
                  </span>
                  <h3 className="mt-4 text-2xl font-bold transition-colors duration-500 group-hover:text-brand-green">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-brand-cyan">{s.tagline}</p>
                  <p className="mt-4 flex-1 text-sm leading-8 text-muted-foreground">{s.short}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold transition-transform duration-500 group-hover:-translate-x-1">
                    جزئیات سرویس
                    <ArrowLeft className="h-4 w-4" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-20">
            <StatsRow
              items={[
                { value: "۱۲۰+", label: "پروژه تحویل‌شده" },
                { value: "۹ سال", label: "تجربه سایت تولید" },
                { value: "۹۶٪", label: "رضایت کارفرمایان" },
              ]}
            />
          </div>
        </PageShell>
      </section>

      <CtaBand />
    </>
  );
}
