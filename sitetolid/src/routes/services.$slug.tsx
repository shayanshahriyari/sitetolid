import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import tex1 from "@/assets/tex-1.jpg";
import tex2 from "@/assets/tex-2.jpg";
import tex3 from "@/assets/tex-3.jpg";
import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about.jpg";
import {
  DeliverableList,
  FaqList,
  PageHero,
  Panel,
  PricingCards,
  ProblemGrid,
  ProcessTimeline,
  RelatedProjects,
  StatsRow,
} from "@/components/site/Blocks";
import { CtaBand, PageShell, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/motion";
import { getService, pricing, services } from "@/lib/site-data";
import { getServiceExtra } from "@/lib/service-extras";
import { projectsForService } from "@/lib/portfolio";

const heroImages: Record<string, string> = {
  "web-design": heroImg,
  seo: tex1,
  "ui-ux": tex2,
  "digital-marketing": tex3,
  "banner-design": aboutImg,
  branding: tex2,
};

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { slug: params.slug, title: service.title, tagline: service.tagline, short: service.short };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "سرویس یافت نشد | سایت تولید" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${loaderData.title} | سایت تولید`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.short },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.tagline },
      ],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { slug } = Route.useParams();
  const service = getService(slug)!;
  const extra = getServiceExtra(slug);
  const packages = pricing.find((p) => p.serviceSlug === slug)?.packages ?? [];
  const related = projectsForService(slug);
  const others = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={`سرویس — ${service.title}`}
        title={service.title}
        gradientTitle={service.tagline}
        desc={extra.hero.desc}
        image={heroImages[slug] ?? heroImg}
        primary={{ to: "/contact", label: "شروع پروژه" }}
        secondary={{ to: "/portfolio", label: "نمونه‌کارها" }}
      />

      <section className="mt-28">
        <PageShell>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <SectionHeading eyebrow="چرا اهمیت دارد" title="مشکلی که حل می‌کنیم" desc={service.intro} />
            <Reveal variant="side" delay={120}>
              <Panel className="h-full">
                <h3 className="text-lg font-bold">در یک نگاه</h3>
                <ul className="mt-5 space-y-3 text-sm leading-8 text-muted-foreground">
                  {service.outcomes.map((o) => (
                    <li key={o.label} className="flex items-center justify-between gap-4">
                      <span>{o.label}</span>
                      <span className="font-bold text-gradient-brand">{o.value}</span>
                    </li>
                  ))}
                </ul>
              </Panel>
            </Reveal>
          </div>
          <ProblemGrid items={extra.problems} />
        </PageShell>
      </section>

      <section className="mt-32">
        <PageShell>
          <SectionHeading
            eyebrow="خروجی‌ها"
            title="چه چیزی تحویل می‌گیرید"
            desc="فهرست دقیق آنچه در پایان پروژه در اختیار شما قرار می‌گیرد."
          />
          <DeliverableList items={service.deliverables} />
        </PageShell>
      </section>

      <section className="mt-32">
        <PageShell>
          <SectionHeading eyebrow="فرآیند" title="مسیر اجرای پروژه" />
          <ProcessTimeline steps={service.process} />
        </PageShell>
      </section>

      <section className="mt-32">
        <PageShell>
          <SectionHeading eyebrow="چرا سایت تولید" title="تفاوت ما در این سرویس" />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {extra.why.map((w, i) => (
              <Reveal key={w.title} delay={i * 90}>
                <Panel className="h-full">
                  <h3 className="text-base font-bold">{w.title}</h3>
                  <p className="mt-3 text-sm leading-8 text-muted-foreground">{w.text}</p>
                </Panel>
              </Reveal>
            ))}
          </div>
        </PageShell>
      </section>

      <section className="mt-32">
        <PageShell>
          <SectionHeading
            eyebrow="نتایج"
            title="اعدادی که دنبالشان هستیم"
            desc="این اعداد میانگین پروژه‌های مشابه است و برای هر پروژه بر اساس داده واقعی به‌روزرسانی می‌شود."
          />
          <StatsRow items={service.outcomes} />
        </PageShell>
      </section>

      <RelatedProjects projects={related} />

      {packages.length ? (
        <section className="mt-32">
          <PageShell>
            <SectionHeading
              eyebrow="بسته‌ها"
              title="تعرفه این سرویس"
              desc="قیمت‌ها نقطه شروع هستند؛ بسته اختصاصی متناسب با نیاز شما هم تعریف می‌شود."
            />
            <PricingCards packages={packages} />
          </PageShell>
        </section>
      ) : null}

      <section className="mt-32">
        <PageShell>
          <SectionHeading eyebrow="سؤالات پرتکرار" title={`پرسش‌های رایج درباره ${service.title}`} />
          <FaqList items={service.faq} />
        </PageShell>
      </section>

      <section className="mt-32">
        <PageShell>
          <SectionHeading eyebrow="ادامه مسیر" title="سرویس‌های دیگر" />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {others.map((s, i) => (
              <Reveal key={s.slug} delay={i * 90}>
                <a
                  href={`/services/${s.slug}`}
                  className="group block h-full rounded-3xl hairline bg-surface/40 p-7 backdrop-blur transition-transform duration-700 [transition-timing-function:var(--ease-cinema)] hover:-translate-y-1"
                >
                  <h3 className="text-lg font-bold group-hover:text-brand-green">{s.title}</h3>
                  <p className="mt-3 text-sm leading-8 text-muted-foreground">{s.tagline}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-xs text-muted-foreground">
                    مشاهده
                    <ArrowLeft className="h-3.5 w-3.5" />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </PageShell>
      </section>

      <CtaBand title="آماده‌اید پروژه بعدی را شروع کنیم؟" />
    </>
  );
}
