import { createFileRoute } from "@tanstack/react-router";
import aboutImg from "@/assets/about.jpg";
import { PageHero, Panel, ProcessTimeline, StatsRow } from "@/components/site/Blocks";
import { CtaBand, PageShell, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/motion";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "درباره ما | سایت تولید" },
      {
        name: "description",
        content:
          "سایت تولید تیمی از طراحان، توسعه‌دهندگان و استراتژیست‌های دیجیتال در تهران که برندهای بلندپرواز را با کیفیت سینمایی می‌سازند.",
      },
      { property: "og:title", content: "درباره سایت تولید" },
      {
        property: "og:description",
        content: "داستان، ارزش‌ها و روش کار تیمی که تجربه‌های دیجیتال ماندگار می‌سازد.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  {
    title: "شناخت قبل از طراحی",
    text: "قبل از ساخت، کسب‌وکار، مخاطب و هدف شما را می‌شناسیم تا هر تصمیم طراحی دلیل مشخصی داشته باشد",
  },
  {
    title: "زیبایی در کنار عملکرد",
    text: "ظاهر حرفه‌ای مهم است؛ اما سرعت، تجربه کاربری و عملکرد سایت را فدای زیبایی نمی‌کنیم.",
  },
  {
    title: "آماده برای رشد",
    text: "سایت را با ساختاری اصولی و قابل توسعه می‌سازیم تا بتواند همزمان با رشد کسب‌وکار شما، رشد کند.",
  },
  {
    title: "همکاری بلندمدت",
    text: "بعد از تحویل سایت کنار نمی‌کشیم؛ برای پشتیبانی، بهینه‌سازی و توسعه، مسیر همکاری را ادامه می‌دهیم.",
  },
];

const team = [
  { name: "سارا مهرآیین", role: "مدیر خلاقیت", note: "۱۱ سال طراحی برند و هویت بصری" },
  { name: "نیما رستگار", role: "سرپرست توسعه", note: "معماری وب پرسرعت و مقیاس‌پذیر" },
  { name: "الهام کاویانی", role: "استراتژیست رشد", note: "سئو، محتوا و کمپین‌های داده‌محور" },
  { name: "پویا صدرا", role: "طراح تجربه کاربری", note: "پژوهش کاربر و سیستم‌های طراحی" },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="درباره ما"
        title="درباره سایت تولید"
        gradientTitle="بیشتر بدانید"
        desc="تیم ما در «سایت تولید» متشکل از متخصصانی در حوزه طراحی سایت، سئو و بازاریابی دیجیتال است که با ترکیب خلاقیت، تجربه و دانش فنی، راهکارهایی متناسب با نیاز هر کسب‌وکار طراحی و اجرا می‌کنند. هدف ما ساختن وب‌سایت‌هایی است که علاوه بر ظاهر حرفه‌ای، عملکردی سریع، تجربه کاربری مناسب و زیرساختی آماده برای رشد در فضای آنلاین داشته باشند."
        image={aboutImg}
        primary={{ to: "/contact", label: "گفت‌وگو با ما" }}
        // secondary={{ to: "/portfolio", label: "نمونه‌کارها" }}
      />

      {/* <section className="mt-24">
        <PageShell>
          <SectionHeading
            eyebrow="داستان ما"
            title="از یک میز کوچک تا استودیویی در قلب تهران"
            desc="اولین پروژه ما بازطراحی سایت یک گالری هنری بود؛ بودجه کم، انتظار زیاد. همان پروژه به ما یاد داد که طراحی خوب فقط زیبا نیست، باید کار کند."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              {
                h: "۱۳۹۶ — آغاز",
                p: "دو نفر، یک اتاق و تمرکز بر طراحی وب‌سایت برای کسب‌وکارهای خلاق.",
              },
              {
                h: "۱۴۰۰ — گسترش",
                p: "اضافه شدن تیم سئو و مارکتینگ؛ خدمات ما از طراحی به رشد کامل برند رسید.",
              },
              {
                h: "۱۴۰۵ — امروز",
                p: "بیش از ۱۴۰ پروژه در ۱۴ صنعت، با تیمی چندتخصصی و فرآیندی آزموده.",
              },
            ].map((item, i) => (
              <Reveal key={item.h} delay={i * 110}>
                <Panel className="h-full">
                  <h3 className="text-lg font-bold text-gradient-brand">{item.h}</h3>
                  <p className="mt-4 text-sm leading-8 text-muted-foreground">{item.p}</p>
                </Panel>
              </Reveal>
            ))}
          </div>
        </PageShell>
      </section> */}

      <section className="mt-32">
        <PageShell>
          <SectionHeading eyebrow="ارزش‌ها" title="چهار اصلی که کنارشان نمی‌گذاریم" />
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 90}>
                <Panel className="h-full">
                  {/* <span className="text-xs font-semibold tracking-[0.2em] text-brand-purple">
                    {String(i + 1).padStart(2, "۰")}
                  </span> */}
                  <h3 className="mt-4 text-lg font-bold">{v.title}</h3>
                  <p className="mt-3 text-sm leading-8 text-muted-foreground">{v.text}</p>
                </Panel>
              </Reveal>
            ))}
          </div>
        </PageShell>
      </section>

      <section className="mt-32">
        <PageShell>
          <SectionHeading
            eyebrow="روش کار"
            title="فرآیندی که ابهام را حذف می‌کند"
            desc="هر پروژه از چهار مرحله مشخص عبور می‌کند تا شما همیشه بدانید در کدام نقطه ایستاده‌اید."
          />
          <ProcessTimeline
            steps={[
              { step: "۰۱", title: "شناخت", text: "جلسه استراتژی، تحلیل بازار و تعریف شاخص موفقیت." },
              { step: "۰۲", title: "طراحی", text: "زبان بصری اختصاصی و ساختار تجربه کاربری." },
              { step: "۰۳", title: "ساخت", text: "توسعه اختصاصی، تست کارایی و انتشار مطمئن." },
              { step: "۰۴", title: "رشد", text: "پایش داده، بهینه‌سازی مستمر و توسعه مرحله‌ای." },
            ]}
          />
        </PageShell>
      </section>

      <section className="mt-32">
        <PageShell>
          <SectionHeading eyebrow="تیم" title="طراحی و پیاده سازی سایت شما با سایت تولید" />
          {/* <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 90}>
                <Panel className="h-full text-center">
                  <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-brand-gradient text-lg font-black text-[oklch(0.16_0.02_285)]">
                    {m.name.slice(0, 1)}
                  </span>
                  <h3 className="mt-5 text-base font-bold">{m.name}</h3>
                  <p className="mt-2 text-xs tracking-[0.12em] text-brand-purple">{m.role}</p>
                  <p className="mt-3 text-xs leading-7 text-muted-foreground">{m.note}</p>
                </Panel>
              </Reveal>
            ))}
          </div> */}

          <div className="mt-20">
            <StatsRow
              items={[
                { value: "۱۵۰", label: "پروژه تحویل‌شده" },
                { value: "۵ سال", label: "تجربه سایت" },
                { value: "۹۶٪", label: "تمدید همکاری" },
              ]}
            />
          </div>
        </PageShell>
      </section>

      <CtaBand
        title="نمی دانید از کجا شروع کنید؟"
        desc="یک جلسه کوتاه کافی است تا بفهمیم سایت تولید تیم درست برای پروژه شماست یا نه."
      />
    </>
  );
}
