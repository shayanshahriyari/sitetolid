import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, Check, ChevronDown, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { CtaLink } from "./Button";
import { Eyebrow, PageShell, SectionHeading } from "./Section";
import { Parallax, Reveal, TextReveal } from "./motion";
import type { Pkg } from "@/lib/site-data";
import type { Project } from "@/lib/portfolio";

/** Cinematic hero used by every inner page. */
export function PageHero({
  eyebrow,
  title,
  gradientTitle,
  desc,
  image,
  primary,
  secondary,
  meta,
  compact,
}: {
  eyebrow: string;
  title: string;
  gradientTitle?: string;
  desc: string;
  image: string;
  primary?: { to: string; label: string };
  secondary?: { to: string; label: string };
  meta?: ReactNode;
  compact?: boolean;
}) {
  return (
    <section
      className={cn(
        "relative -mt-24 flex items-center overflow-hidden pt-24 grain",
        compact ? "min-h-[70svh]" : "min-h-[86svh]",
      )}
    >
      <Parallax strength={0.45} className="absolute inset-0 -z-20 scale-110">
        <img
          src={image}
          alt=""
          aria-hidden="true"
          loading="eager"
          className="h-full w-full object-cover opacity-60 dark:opacity-75"
        />
      </Parallax>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,color-mix(in_oklab,var(--background)_86%,transparent),color-mix(in_oklab,var(--background)_64%,transparent)_45%,var(--background))]" />

      <PageShell>
        <div className="max-w-3xl py-24">
          <Reveal>
            <Eyebrow>{eyebrow}</Eyebrow>
          </Reveal>
          <h1 className="mt-8 text-[2.3rem] font-black leading-[1.4] sm:text-5xl lg:text-[3.6rem] lg:leading-[1.32]">
            <TextReveal text={title} />
            {gradientTitle ? (
              <>
                <br />
                <TextReveal text={gradientTitle} wordClassName="text-gradient-brand" delay={240} />
              </>
            ) : null}
          </h1>
          <Reveal delay={180}>
            <p className="mt-7 max-w-xl text-base leading-9 text-muted-foreground sm:text-lg sm:leading-10">
              {desc}
            </p>
          </Reveal>
          {meta ? <Reveal delay={240}>{meta}</Reveal> : null}
          {primary || secondary ? (
            <Reveal delay={300}>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                {primary ? (
                  <CtaLink to={primary.to}>
                    {primary.label}
                    <ArrowLeft className="h-4 w-4" strokeWidth={2} />
                  </CtaLink>
                ) : null}
                {secondary ? (
                  <CtaLink to={secondary.to} variant="outline">
                    {secondary.label}
                  </CtaLink>
                ) : null}
              </div>
            </Reveal>
          ) : null}
        </div>
      </PageShell>
    </section>
  );
}

export function Panel({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "glass-panel group relative overflow-hidden rounded-3xl p-7 transition-transform duration-700 [transition-timing-function:var(--ease-cinema)] hover:-translate-y-1",
        className,
      )}
    >
      <span className="pointer-events-none absolute inset-x-6 -top-px h-px bg-[linear-gradient(90deg,transparent,color-mix(in_oklab,var(--brand-green)_60%,transparent),transparent)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
      {children}
    </div>
  );
}

export function ProblemGrid({
  items,
}: {
  items: { title: string; text: string }[];
}) {
  return (
    <div className="mt-14 grid gap-5 sm:grid-cols-2">
      {items.map((it, i) => (
        <Reveal key={it.title} delay={i * 90}>
          <Panel className="h-full">
            <span className="text-xs font-semibold tracking-[0.2em] text-brand-purple">
              {String(i + 1).padStart(2, "۰")}
            </span>
            <h3 className="mt-4 text-lg font-bold">{it.title}</h3>
            <p className="mt-3 text-sm leading-8 text-muted-foreground">{it.text}</p>
          </Panel>
        </Reveal>
      ))}
    </div>
  );
}

export function DeliverableList({ items }: { items: string[] }) {
  return (
    <ul className="mt-14 grid gap-4 sm:grid-cols-2">
      {items.map((d, i) => (
        <Reveal as="li" key={d} delay={i * 70}>
          <div className="flex items-start gap-3 rounded-2xl hairline bg-surface/40 p-5 backdrop-blur transition-colors duration-500 hover:bg-surface-2">
            <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-gradient text-[oklch(0.16_0.02_285)]">
              <Check className="h-3.5 w-3.5" strokeWidth={3} />
            </span>
            <span className="text-sm leading-8">{d}</span>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}

export function ProcessTimeline({
  steps,
}: {
  steps: { step: string; title: string; text: string }[];
}) {
  return (
    <ol className="relative mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {steps.map((s, i) => (
        <Reveal as="li" key={s.step} delay={i * 110}>
          <div className="relative h-full rounded-3xl hairline bg-surface/40 p-7 backdrop-blur">
            <span className="text-3xl font-black text-gradient-brand">{s.step}</span>
            <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
            <p className="mt-3 text-sm leading-8 text-muted-foreground">{s.text}</p>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}

export function StatsRow({ items }: { items: { value: string; label: string }[] }) {
  return (
    <div className="mt-14 grid gap-5 sm:grid-cols-3">
      {items.map((o, i) => (
        <Reveal key={o.label} delay={i * 100}>
          <div className="aurora relative overflow-hidden rounded-3xl hairline bg-surface/40 p-8 text-center backdrop-blur-xl">
            <div className="text-4xl font-black text-gradient-brand sm:text-5xl">{o.value}</div>
            <div className="mt-3 text-sm text-muted-foreground">{o.label}</div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function PricingCards({ packages }: { packages: Pkg[] }) {
  return (
    <div className="mt-14 grid gap-6 lg:grid-cols-3">
      {packages.map((p, i) => (
        <Reveal key={p.name} delay={i * 110}>
          <div
            className={cn(
              "relative flex h-full flex-col rounded-3xl p-8 backdrop-blur transition-transform duration-700 [transition-timing-function:var(--ease-cinema)] hover:-translate-y-1",
              p.featured
                ? "glass-panel glow-purple ring-1 ring-[color-mix(in_oklab,var(--brand-purple)_45%,transparent)]"
                : "hairline bg-surface/40",
            )}
          >
            {p.featured ? (
              <span className="absolute -top-3 start-8 inline-flex items-center gap-1 rounded-full bg-brand-gradient px-3 py-1 text-[0.7rem] font-bold text-[oklch(0.16_0.02_285)]">
                <Sparkles className="h-3 w-3" strokeWidth={2.4} />
                پیشنهاد ما
              </span>
            ) : null}
            <h3 className="text-xl font-bold">{p.name}</h3>
            <p className="mt-2 text-xs leading-7 text-muted-foreground">{p.note}</p>
            <ul className="mt-7 flex-1 space-y-3 text-sm text-muted-foreground">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2 leading-8">
                  <Check className="mt-2 h-3.5 w-3.5 shrink-0 text-brand-green" strokeWidth={3} />
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-baseline gap-2">
              <span className="text-3xl font-black">{p.price}</span>
              {p.price !== "استعلامی" ? (
                <span className="text-xs text-muted-foreground"></span>
              ) : null}
            </div>
            <CtaLink
              to="/contact"
              variant={p.featured ? "primary" : "outline"}
              className="mt-8 w-full"
            >
              درخواست این بسته
            </CtaLink>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="mt-14 space-y-3">
      {items.map((f, i) => (
        <Reveal key={f.q} delay={i * 80}>
          <details className="group rounded-2xl hairline bg-surface/40 px-6 py-5 backdrop-blur transition-colors duration-500 open:bg-surface-2">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              {f.q}
              <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-500 group-open:rotate-180" />
            </summary>
            <p className="mt-4 text-sm leading-9 text-muted-foreground">{f.a}</p>
          </details>
        </Reveal>
      ))}
    </div>
  );
}

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <Reveal delay={index * 90}>
      <Link
        to="/portfolio/$slug"
        params={{ slug: project.slug }}
        className="group block overflow-hidden rounded-3xl hairline bg-surface/40 backdrop-blur transition-transform duration-700 [transition-timing-function:var(--ease-cinema)] hover:-translate-y-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={project.cover}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[1400ms] [transition-timing-function:var(--ease-cinema)] group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,color-mix(in_oklab,var(--background)_88%,transparent),transparent_60%)]" />
          <span className="absolute bottom-4 start-4 rounded-full hairline bg-background/70 px-3 py-1 text-[0.7rem] backdrop-blur">
            {project.metric}
          </span>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between gap-3 text-xs text-muted-foreground">
            <span>{project.category}</span>
            <span>{project.year}</span>
          </div>
          <h3 className="mt-3 text-lg font-bold transition-colors duration-500 group-hover:text-brand-green">
            {project.title}
          </h3>
          <span className="mt-4 inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-transform duration-500 group-hover:-translate-x-1">
            مشاهده پروژه
            <ArrowLeft className="h-3.5 w-3.5" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

export function RelatedProjects({
  projects,
  title = "نمونه‌کارهای مرتبط",
  eyebrow = "پرتفولیو",
}: {
  projects: Project[];
  title?: string;
  eyebrow?: string;
}) {
  if (!projects.length) return null;
  return (
    <section className="mt-32">
      <PageShell>
        <SectionHeading eyebrow={eyebrow} title={title} />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </PageShell>
    </section>
  );
}
