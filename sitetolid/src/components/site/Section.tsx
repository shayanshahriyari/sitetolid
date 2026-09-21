import type { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal, TextReveal } from "./motion";
import { CtaLink } from "./Button";

export function Eyebrow({ children }: { children: ReactNode }) {
  // return (
  //   <span className="inline-flex items-center gap-2 rounded-full hairline bg-surface/50 px-4 py-1.5 text-[0.7rem] font-medium tracking-[0.18em] text-muted-foreground backdrop-blur">
  //     <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
  //     {children}
  //   </span>
  // );
}

export function SectionHeading({
  eyebrow,
  title,
  desc,
  align = "start",
  className,
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
  align?: "start" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-10xl mx-auto text-center",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
      ) : null}
      <h2 className="mt-6 text-3xl font-extrabold leading-[1.5] sm:text-4xl lg:text-[2.9rem]">
        <TextReveal text={title} />
      </h2>
      {desc ? (
        <Reveal delay={120}>
          <p className="mt-5 text-base leading-9 text-muted-foreground">{desc}</p>
        </Reveal>
      ) : null}
    </div>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return <div className="mx-auto max-w-7xl px-5 lg:px-8">{children}</div>;
}

export function CtaBand({
  title = "آماده‌اید پروژه‌تان را شروع کنیم؟",
  desc = "یک جلسه مشاوره رایگان بگیرید؛ در ۳۰ دقیقه مسیر، زمان و بودجه واقعی پروژه شما را شفاف می‌کنیم.",
}: {
  title?: string;
  desc?: string;
}) {
  return (
    <section className="relative mt-32">
      <PageShell>
        <Reveal variant="scale">
          <div className="aurora grain relative overflow-hidden rounded-[2.5rem] hairline bg-surface/40 px-6 py-20 text-center backdrop-blur-xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-[1.55] sm:text-[2.6rem]">
              {title}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-9 text-muted-foreground">
              {desc}
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <CtaLink to="/contact">
                درخواست مشاوره
                <ArrowLeft className="h-4 w-4" strokeWidth={2} />
              </CtaLink>
              {/* <CtaLink to="/services" variant="outline">
                مشاهده خدمات
              </CtaLink> */}
            </div>
          </div>
        </Reveal>
      </PageShell>
    </section>
  );
}
