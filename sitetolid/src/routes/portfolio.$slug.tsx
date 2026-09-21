import { createFileRoute, notFound } from "@tanstack/react-router";
import {
  PageHero,
  Panel,
  ProcessTimeline,
  RelatedProjects,
  StatsRow,
} from "@/components/site/Blocks";
import { CtaBand, PageShell, SectionHeading } from "@/components/site/Section";
import { Parallax, Reveal } from "@/components/site/motion";
import { getProject, projects } from "@/lib/portfolio";

export const Route = createFileRoute("/portfolio/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { title: project.title, overview: project.overview, category: project.category };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "پروژه یافت نشد | سایت تولید" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${loaderData.title} | نمونه‌کار سایت تولید`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.overview },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.overview },
      ],
    };
  },
  component: ProjectDetail,
});

function ProjectDetail() {
  const { slug } = Route.useParams();
  const project = getProject(slug)!;
  const related = projects.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={`${project.category} — ${project.year}`}
        title={project.title}
        desc={project.overview}
        image={project.cover}
        primary={{ to: "/contact", label: "پروژه مشابه دارید؟" }}
        secondary={{ to: "/portfolio", label: "همه نمونه‌کارها" }}
        meta={
          <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4 text-sm">
            <div>
              <dt className="text-xs text-muted-foreground">کارفرما</dt>
              <dd className="mt-1 font-semibold">{project.client}</dd>
            </div>
            <div>
              <dt className="text-xs text-muted-foreground">صنعت</dt>
              <dd className="mt-1 font-semibold">{project.industry}</dd>
            </div>
            <div>
              <dt className="text-xs text-muted-foreground">سال</dt>
              <dd className="mt-1 font-semibold">{project.year}</dd>
            </div>
          </dl>
        }
      />

      <section className="mt-24">
        <PageShell>
          <Reveal variant="scale">
            <div className="grain relative overflow-hidden rounded-[2.5rem] hairline">
              <Parallax strength={0.2} className="scale-110">
                <img
                  src={project.gallery[0] ?? project.cover}
                  alt={`نمای اصلی پروژه ${project.title}`}
                  loading="lazy"
                  className="aspect-[16/9] w-full object-cover"
                />
              </Parallax>
            </div>
          </Reveal>
        </PageShell>
      </section>

      <section className="mt-28">
        <PageShell>
          <div className="grid gap-10 lg:grid-cols-2">
            <Reveal>
              <Panel className="h-full">
                <h2 className="text-2xl font-bold">چالش</h2>
                <p className="mt-5 text-sm leading-9 text-muted-foreground">{project.challenge}</p>
              </Panel>
            </Reveal>
            <Reveal delay={120}>
              <Panel className="h-full">
                <h2 className="text-2xl font-bold">استراتژی</h2>
                <p className="mt-5 text-sm leading-9 text-muted-foreground">{project.strategy}</p>
              </Panel>
            </Reveal>
          </div>
        </PageShell>
      </section>

      <section className="mt-32">
        <PageShell>
          <SectionHeading eyebrow="فرآیند" title="مسیر اجرای پروژه" />
          <ProcessTimeline steps={project.process} />
        </PageShell>
      </section>

      <section className="mt-32">
        <PageShell>
          <SectionHeading eyebrow="خدمات" title="آنچه انجام دادیم" />
          <ul className="mt-12 flex flex-wrap gap-3">
            {project.servicesProvided.map((s, i) => (
              <Reveal as="li" key={s} delay={i * 70}>
                <span className="inline-flex rounded-full hairline bg-surface/50 px-5 py-2.5 text-sm backdrop-blur">
                  {s}
                </span>
              </Reveal>
            ))}
          </ul>
        </PageShell>
      </section>

      <section className="mt-32">
        <PageShell>
          <SectionHeading eyebrow="نتایج" title="خروجی قابل اندازه‌گیری" />
          <StatsRow items={project.results} />
        </PageShell>
      </section>

      <section className="mt-32">
        <PageShell>
          <SectionHeading eyebrow="گالری" title="نگاهی از نزدیک" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {project.gallery.map((g, i) => (
              <Reveal key={g + i} variant="scale" delay={i * 100} className={i === 0 ? "md:col-span-2" : ""}>
                <img
                  src={g}
                  alt={`تصویر ${i + 1} از پروژه ${project.title}`}
                  loading="lazy"
                  className="aspect-[16/10] w-full rounded-3xl object-cover hairline"
                />
              </Reveal>
            ))}
          </div>
        </PageShell>
      </section>

      <RelatedProjects projects={related} title="پروژه‌های دیگر" eyebrow="ادامه تماشا" />

      <CtaBand />
    </>
  );
}
