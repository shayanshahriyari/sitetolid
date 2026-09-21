import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import tex3 from "@/assets/tex-3.jpg";
import { PageHero, Panel } from "@/components/site/Blocks";
import { CtaButton } from "@/components/site/Button";
import { PageShell, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/motion";
import { services } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "تماس با ما | سایت تولید" },
      {
        name: "description",
        content:
          "برای مشاوره رایگان، دریافت پیش‌فاکتور یا شروع پروژه با سایت تولید تماس بگیرید؛ تهران، خیابان ولیعصر، برج نگین.",
      },
      { property: "og:title", content: "تماس با سایت تولید" },
      {
        property: "og:description",
        content: "فرم درخواست پروژه، شماره تماس و نشانی سایت تولید در تهران.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const channels = [
  { Icon: Phone, title: "تلفن", value: "۰۹۳۳۷۶۹۱۹۴۰",shomareexafi2:"۰۹۱۲۵۰۳۲۱۸۰" , note: "شنبه تا چهارشنبه، ۹ تا ۲۱" },
  { Icon: Mail, title: "ایمیل", value: "sitetolid@gmail.com", note: "پاسخ حداکثر تا ۱ ساعت" },
  // { Icon: MapPin, title: "نشانی", value: "تهران، ولیعصر، برج نگین", note: "طبقه ۱۴، واحد ۱۴۰۵" },
  { Icon: Clock, title: "جلسه حضوری",shomareexafi2:"۰۹۱۲۵۰۳۲۱۸۰", values: "۰۹۳۳۷۶۹۱۹۴۰", value: "با تعیین وقت قبلی", note: "امکان جلسه آنلاین هم فراهم است" },
];

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        compact
        eyebrow="تماس با ما"
        title="وقتشه ایده‌تون رو به"
        gradientTitle="واقعیت تبدیل کنید"
        desc="از طراحی یک سایت جدید تا بهینه‌سازی، سئو و توسعه حضور دیجیتال کسب‌وکارتان، کافی است نیازتان را با ما مطرح کنید. اطلاعات پروژه را ارسال کنید تا بعد از بررسی، مسیر اجرا، زمان‌بندی و هزینه را شفاف با شما در میان بگذاریم."
        image={tex3}
      />

      <section className="mt-24">
        <PageShell>
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <Reveal>
              <div className="glass-panel rounded-[2.5rem] p-8 sm:p-10">
                <SectionHeading eyebrow="فرم درخواست" title="شروع گفت‌وگو" />
                <form
                  className="mt-10 grid gap-5 sm:grid-cols-2"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                >
                  <div className="sm:col-span-1">
                    <label htmlFor="c-name" className="mb-2 block text-xs text-muted-foreground">
                      نام و نام خانوادگی
                    </label>
                    <input
                      id="c-name"
                      name="name"
                      required
                      placeholder="مثلاً سارا مهرآیین"
                      className="w-full rounded-2xl hairline bg-surface/40 px-5 py-3 text-sm backdrop-blur outline-none transition-colors focus:bg-surface-2 focus-visible:ring-2 focus-visible:ring-ring"
                    />
                  </div>

                  <div className="sm:col-span-1">
                    <label htmlFor="c-phone" className="mb-2 block text-xs text-muted-foreground">
                      شماره تماس
                    </label>
                    <input
                      id="c-phone"
                      name="phone"
                      required
                      inputMode="tel"
                      placeholder="۰۰۰۰ ۰۰۰ ۰۹۱۲"
                      className="w-full rounded-2xl hairline bg-surface/40 px-5 py-3 text-sm backdrop-blur outline-none transition-colors focus:bg-surface-2 focus-visible:ring-2 focus-visible:ring-ring"
                    />
                  </div>

                  <div className="sm:col-span-1">
                    <label htmlFor="c-email" className="mb-2 block text-xs text-muted-foreground">
                      ایمیل
                    </label>
                    <input
                      id="c-email"
                      name="email"
                      type="email"
                      placeholder="name@company.com"
                      className="w-full rounded-2xl hairline bg-surface/40 px-5 py-3 text-sm backdrop-blur outline-none transition-colors focus:bg-surface-2 focus-visible:ring-2 focus-visible:ring-ring"
                    />
                  </div>

                  <div className="sm:col-span-1">
                    <label htmlFor="c-service" className="mb-2 block text-xs text-muted-foreground">
                      خدمت مورد نیاز
                    </label>
                    <select
                      id="c-service"
                      name="service"
                      defaultValue=""
                      className="w-full rounded-2xl hairline bg-surface/40 px-5 py-3 text-sm backdrop-blur outline-none transition-colors focus:bg-surface-2 focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <option value="" disabled>
                        انتخاب کنید
                      </option>
                      {services.map((s) => (
                        <option key={s.slug} value={s.slug}>
                          {s.title}
                        </option>
                      ))}
                      <option value="other">موضوع دیگر</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="c-budget" className="mb-2 block text-xs text-muted-foreground">
                      بازه بودجه (اختیاری)
                    </label>
                    <input
                      id="c-budget"
                      name="budget"
                      placeholder="مثلاً ۲۰۰ تا ۴۰۰ میلیون ریال"
                      className="w-full rounded-2xl hairline bg-surface/40 px-5 py-3 text-sm backdrop-blur outline-none transition-colors focus:bg-surface-2 focus-visible:ring-2 focus-visible:ring-ring"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="c-message" className="mb-2 block text-xs text-muted-foreground">
                      توضیح پروژه
                    </label>
                    <textarea
                      id="c-message"
                      name="message"
                      required
                      rows={5}
                      placeholder="کوتاه بنویسید چه چیزی می‌خواهید بسازید و چه هدفی دارید."
                      className="w-full rounded-2xl hairline bg-surface/40 px-5 py-4 text-sm leading-8 backdrop-blur outline-none transition-colors focus:bg-surface-2 focus-visible:ring-2 focus-visible:ring-ring"
                    />
                  </div>

                  <div className="sm:col-span-2 flex flex-wrap items-center gap-4">
                    <CtaButton type="submit">
                      ارسال درخواست
                      <Send className="h-4 w-4" strokeWidth={2} />
                    </CtaButton>
                    <p className="text-xs leading-7 text-muted-foreground">
                      {sent
                        ? "پیام شما ثبت شد؛ همکاران ما به‌زودی تماس می‌گیرند."
                        : "اطلاعات شما محرمانه می‌ماند و فقط برای بررسی پروژه استفاده می‌شود."}
                    </p>
                  </div>
                </form>
              </div>
            </Reveal>

            <div className="grid content-start gap-5">
              {channels.map((c, i) => (
                <Reveal key={c.title} delay={i * 90}>
                  <Panel className="h-full">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl hairline bg-surface/60 text-brand-green">
                      <c.Icon className="h-5 w-5" strokeWidth={1.6} />
                    </span>
                    <h3 className="mt-5 text-sm font-bold">{c.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{c.value}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{c.values}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{c.shomareezafi}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{c.shomareexafi2}</p>
                    <p className="mt-2 text-xs leading-7 text-muted-foreground">{c.note}</p>
                  </Panel>
                </Reveal>
              ))}
            </div>
          </div>
        </PageShell>
      </section>

      <section className="mt-32">
        <PageShell>
          <SectionHeading
            eyebrow="پرسش‌های رایج"
            title="قبل از تماس، این‌ها را بدانید"
            desc="پاسخ به برخی سوالات شما دوستان عزیز"
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {[
              {
                q: "برای شروع همکاری چه اطلاعاتی باید ارسال کنم؟",
                a: "کافی است در فرم تماس، نوع خدمات موردنیاز، توضیح کوتاهی درباره کسب‌وکار و نیازتان و راه ارتباطی خود را وارد کنید. اگر جزئیات بیشتری درباره پروژه دارید، می‌توانید آن را هم اضافه کنید تا بررسی دقیق‌تری انجام شود.",
              },
              {
                q: "هزینه طراحی سایت یا خدمات شما چقدر است؟",
                a: "هزینه هر پروژه با توجه به نوع خدمات، امکانات، حجم کار و نیازهای اختصاصی آن تعیین می‌شود. بعد از بررسی درخواست شما، یک برآورد شفاف متناسب با پروژه ارائه می‌کنیم.",
              },
              {
                q: "طراحی سایت چقدر زمان می‌برد؟",
                a: "زمان اجرا به نوع سایت و امکانات موردنیاز بستگی دارد. پس از مشخص شدن نیازمندی‌های پروژه، زمان‌بندی تقریبی اجرا را قبل از شروع همکاری با شما مشخص می‌کنیم.",
              },
              {
                q: "آیا امکان طراحی سایت اختصاصی وجود دارد؟",
                a: "بله. می‌توانیم سایت را متناسب با نیاز، هویت بصری و اهداف کسب‌وکار شما طراحی و پیاده‌سازی کنیم؛ از ساختار صفحات و تجربه کاربری گرفته تا امکانات اختصاصی موردنیاز.",
              },
               {
                q: "آیا بعد از طراحی سایت، خدمات سئو و پشتیبانی هم ارائه می‌دهید؟",
                a: "بله. در صورت نیاز، خدمات سئو، بهینه‌سازی، پشتیبانی و توسعه سایت نیز قابل ارائه است تا سایت بعد از راه‌اندازی هم بتواند به‌صورت مستمر رشد و بهبود پیدا کند.",
              },
               {
                q: "آیا قبل از شروع پروژه می‌توانم نمونه‌کارها را ببینم؟",
                a: "بله. نمونه‌کارهای مرتبط با نوع کسب‌وکار و پروژه شما قابل بررسی هستند تا قبل از شروع همکاری، دید بهتری نسبت به سبک طراحی و کیفیت اجرای پروژه داشته باشید.",
              },

            ].map((item, i) => (
              <Reveal key={item.q} delay={i * 90}>
                <Panel className="h-full">
                  <h3 className="text-base font-bold">{item.q}</h3>
                  <p className="mt-3 text-sm leading-8 text-muted-foreground">{item.a}</p>
                </Panel>
              </Reveal>
            ))}
          </div>
        </PageShell>
      </section>
    </>
  );
}
