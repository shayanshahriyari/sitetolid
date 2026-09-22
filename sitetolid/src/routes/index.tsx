import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import tex1 from "@/assets/tex-1.jpg";
import tex2 from "@/assets/tex-2.jpg";
import tex3 from "@/assets/tex-3.jpg";

import { CtaLink } from "@/components/site/Button";
import { Parallax, Reveal, TextReveal, useScrollProgress } from "@/components/site/motion";
import { CtaBand, Eyebrow, PageShell, SectionHeading } from "@/components/site/Section";
import { articles, projects, services } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "سایت تولید | طراحی سایت، سئو و برندینگ سینمایی" },
      {
        name: "description",
        content:
          "سایت تولید؛ طراحی سایت اختصاصی، سئو، رابط کاربری، مارکتینگ، بنر و لوگو برای برندهای لوکس.",
      },
      { property: "og:title", content: "سایت تولید | سایت تولید" },
      {
        property: "og:description",
        content: "طراحی و رشد برندهای دیجیتال با کیفیت و تمرکز بر فروش.",
      },
    ],
  }),
  component: Home,
});

const texMap = [tex1, tex2, tex3, tex1, tex2, tex3];

function Hero() {
  return (
    <section className="relative -mt-24 flex min-h-[100svh] items-center overflow-hidden pt-24 grain">
      <Parallax strength={0.55} className="absolute inset-0 -z-20 scale-110">
        <img
          src={heroImg}
          alt="ترکیب‌بندی سینمایی از جریان نور سبز و بنفش برند سایت تولید"
          width={1920}
          height={1200}
          className="h-full w-full object-cover opacity-70 dark:opacity-80"
        />
      </Parallax>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,color-mix(in_oklab,var(--background)_82%,transparent),color-mix(in_oklab,var(--background)_60%,transparent)_45%,var(--background))]" />

      <PageShell>
        <div className="max-w-3xl py-24">
          <Reveal>
            <Eyebrow>سایت تولید — تهران</Eyebrow>
          </Reveal>

          <h1 className="mt-8 text-[2.6rem] font-black leading-[1.4] sm:text-6xl lg:text-[4.2rem] lg:leading-[1.35]">
            <TextReveal text="برند شما لایق" />
            <br />
            <TextReveal
              text="تجربه‌ای بی نظیر است"
              wordClassName="text-gradient-brand"
              delay={260}
            />
          </h1>

          <Reveal delay={520}>
            <p className="mt-8 max-w-xl text-base leading-9 text-muted-foreground sm:text-lg sm:leading-10">
              ما وب‌سایت، هویت بصری و کمپین‌هایی می‌سازیم که هم نفس‌گیر به‌نظر می‌رسند و هم
              بازدیدکننده را به مشتری تبدیل می‌کنند.
            </p>
          </Reveal>

          <Reveal delay={640}>
            <div className="mt-11 flex flex-wrap items-center gap-3">
              <CtaLink to="/contact">
                ثبت سفارش
                <ArrowLeft className="h-4 w-4" strokeWidth={2} />
              </CtaLink>
              <CtaLink to="/portfolio" variant="outline">
                مشاهده نمونه‌کارها
              </CtaLink>
            </div>
          </Reveal>

           {/* <Reveal delay={760}>
  <dl className="mt-16 flex w-full justify-between border-t border-[var(--hairline)] pt-8">
    {[
      { v: "۱۵۰", l: "پروژه تحویل‌شده" },
      { v: "۵ سال", l: "تجربه سایت تولید" },
      { v: "۹۶٪", l: "تمدید همکاری" },
    ].map((s) => (
      <div key={s.l} className="shrink-0 text-center">
        <dt className="whitespace-nowrap text-2xl font-extrabold text-gradient-brand sm:text-3xl">
          {s.v}
        </dt>

        <dd className="mt-5 whitespace-nowrap text-[9px] leading-6 text-muted-foreground">
          {s.l}
        </dd>
      </div>
    ))}
  </dl>
</Reveal>  */}
        </div>
      </PageShell>

    </section>
  );
}

/** Cinematic sticky service showcase driven by scroll progress. */
function ServiceShowcase() {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();
  const active = Math.min(services.length - 1, Math.floor(progress * services.length));

  return (
    <section className="mt-32">
      <PageShell>
        <SectionHeading
          eyebrow="خدمات"
          title="شش تخصص، یک استاندارد"
          desc="هر سرویس با تیم اختصاصی و فرآیندی شفاف اجرا می‌شود؛ از اولین جلسه تا اولین فروش."
        />
      </PageShell>

      { <div ref={ref} className="relative mt-16">
        <PageShell>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr]">
            <div className="hidden lg:block">
              <div className="sticky top-32 aspect-4/5 overflow-hidden rounded-[2rem] hairline shadow-cinema">
                {services.map((s, i) => (
                  <img
                    key={s.slug}
                    src={texMap[i]}
                    alt={s.title}
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="absolute inset-0 h-full w-full object-cover transition-all duration-1000 [transition-timing-function:var(--ease-cinema)]"
                    style={{
                      opacity: i === active ? 1 : 0,
                      transform: i === active ? "scale(1)" : "scale(1.1)",
                    }}
                  />
                ))}
                <div className="absolute inset-0 bg-[linear-gradient(to_top,color-mix(in_oklab,var(--background)_88%,transparent),transparent_58%)]" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  { <p className="text-xs tracking-[0.22em] text-muted-foreground">
                    {String(active).padStart(2, "۰")}
                  </p> }
                   { <p className="mt-3 text-2xl font-extrabold">{services[active]?.title}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{services[active]?.tagline}</p> } 
                </div>
              </div>
            </div> }
{
            <ul className="space-y-4">
              {services.map((s, i) => (
                <Reveal as="li" key={s.slug} delay={i * 60}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="group block overflow-hidden rounded-[1.75rem] hairline bg-surface/40 p-7 backdrop-blur-xl transition-all duration-700 [transition-timing-function:var(--ease-cinema)] hover:-translate-y-1 hover:bg-surface/70 hover:glow-green"
                  >
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        { <span className="text-xs tracking-[0.22em] text-muted-foreground">
                          { {String(i).padStart(2, "۰")} }
                        </span> }
                        <h3 className="mt-3 text-xl font-extrabold">{s.title}</h3>
                        <p className="mt-3 max-w-md text-sm leading-8 text-muted-foreground">
                          {s.short}
                        </p>
                      </div>
                      <span className="mt-2 grid h-11 w-11 shrink-0 place-items-center rounded-full hairline bg-background/40 transition-all duration-700 group-hover:bg-brand-gradient group-hover:text-[oklch(0.16_0.02_285)]">
                        <ArrowLeft className="h-4 w-4" strokeWidth={2} />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </ul>
          </div> }
        </PageShell>
      </div>
    </section>
  );
}

function Journey() {
  const steps = [
    { t: "کشف", d: "با شناخت کسب‌وکار و مخاطب شروع می‌کنیم." },
    { t: "خدمات", d: "راهکار دقیق متناسب با هدف انتخاب می‌شود." },
    { t: "نمونه‌کار", d: "نمونه‌های واقعی و نتایج قابل سنجش را می‌بینید." },
    { t: "تعرفه", d: "بسته شفاف و بدون هزینه پنهان انتخاب می‌کنید." },
    { t: "سفارش", d: "پروژه شروع می‌شود و شما در جریان هر مرحله هستید." },
  ];

  return (
    <section className="relative mt-32 overflow-hidden py-20 aurora">
      <PageShell>
        <SectionHeading
          eyebrow="مسیر همکاری"
          title="از اولین نگاه تا اولین فروش"
          align="center"
        />
        <ol className="mt-16 grid gap-5 md:grid-cols-5">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.t} delay={i * 110} variant="up">
              <div className="h-full rounded-3xl hairline bg-surface/45 p-6 backdrop-blur-xl">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-gradient text-xs font-bold text-[oklch(0.16_0.02_285)]">
                  {i + 1}
                </span>
                <h3 className="mt-5 text-base font-bold">{s.t}</h3>
                <p className="mt-3 text-xs leading-7 text-muted-foreground">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </PageShell>
      
    </section>
  );
}

function WorkPreview() {
  return (
    <section className="mt-32">
      <PageShell>
        {/* <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="نمونه‌کارها" title="کارهایی که از آن‌ها حرف می‌زنند" />
          <CtaLink to="/portfolio" variant="outline" className="px-6 py-3">
            همه پروژه‌ها
          </CtaLink>
        </div> */}

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {projects.slice(0, 3).map((p, i) => (
            <Reveal key={p.title} delay={i * 120} variant="scale">
              <Link
                to="/portfolio"
                // className="group relative block aspect-4/5 overflow-hidden rounded-[1.75rem] hairline shadow-cinema"
              >
                {/* <img
                  src={texMap[i]}
                  alt={p.title}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover transition-transform duration-[1400ms] [transition-timing-function:var(--ease-cinema)] group-hover:scale-110"
                /> */}
                {/* <div className="absolute inset-0 bg-[linear-gradient(to_top,color-mix(in_oklab,var(--background)_92%,transparent),transparent_60%)]" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <p className="text-[0.7rem] tracking-[0.2em] text-brand-green">{p.category}</p>
                  <h3 className="mt-3 text-lg font-extrabold">{p.title}</h3>
                  <p className="mt-2 text-xs text-muted-foreground">{p.metric}</p>
                </div> */}
              </Link>
            </Reveal>
          ))}
        </div>
      </PageShell>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="mt-32">
      <PageShell>
        <Reveal variant="scale">
          <figure className="relative overflow-hidden rounded-[2.5rem] hairline bg-surface/40 px-8 py-16 text-center backdrop-blur-xl sm:px-20">
            <Sparkles className="mx-auto h-6 w-6 text-brand-cyan" strokeWidth={1.4} />
            <blockquote className="mx-auto mt-8 max-w-3xl text-xl font-semibold leading-[2.4rem] sm:text-2xl sm:leading-[3rem]">
              «سایت تولید فقط یک سایت زیبا تحویل نداد؛ کل مسیر فروش ما را بازطراحی کرد. سه ماه بعد،
              درخواست‌های ورودی‌مان دو برابر شده بود.»
            </blockquote>
            <figcaption className="mt-8 text-sm text-muted-foreground">
              سارا کاویانی — مدیر بازاریابی، گروه آرکا
            </figcaption>
          </figure>
        </Reveal>
      </PageShell>
    </section>
  );
}

function Journal() {
  return (
    <section className="mt-32">
      <PageShell>
        <div className="flex flex-wrap items-end justify-between gap-6">
          {/* <SectionHeading eyebrow="ژورنال" title="آنچه یاد گرفته‌ایم" />
          <CtaLink to="/articles" variant="outline" className="px-6 py-3">
            همه مقالات
          </CtaLink> */}
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {articles.slice(0, 3).map((a, i) => (
            <Reveal key={a.slug} delay={i * 100}>
              <Link
                to="/articles"
                // className="group flex h-full flex-col justify-between rounded-3xl hairline bg-surface/40 p-7 backdrop-blur-xl transition-all duration-700 [transition-timing-function:var(--ease-cinema)] hover:-translate-y-1 hover:bg-surface/70"
              >
                {/* <div>
                  <span className="text-[0.7rem] tracking-[0.2em] text-brand-purple">
                    {a.category}
                  </span>
                  <h3 className="mt-4 text-base font-bold leading-8">{a.title}</h3>
                  <p className="mt-3 text-xs leading-7 text-muted-foreground">{a.excerpt}</p>
                </div> */}
                {/* <span className="mt-6 text-[0.7rem] text-muted-foreground">
                  {a.date} · {a.read}
                </span> */}
              </Link>
            </Reveal>
          ))}
        </div>
      </PageShell>
    </section>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <ServiceShowcase />
      <Journey />
      <WorkPreview />
      <Testimonial />
      <Journal />
      <CtaBand />
    </>
  );
}
