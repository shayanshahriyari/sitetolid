import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Mail, Phone, Send } from "lucide-react";
import { Logo } from "./Logo";
import { services } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="relative mt-32 overflow-hidden border-t border-[var(--hairline)]">
      <div className="pointer-events-none absolute inset-x-0 -top-40 h-80 bg-[radial-gradient(50%_60%_at_50%_100%,color-mix(in_oklab,var(--brand-purple)_22%,transparent),transparent_70%)]" />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-8 text-muted-foreground">
              سایت تولید؛ طراحی، توسعه و رشد برندهایی که می‌خواهند در فضای دیجیتال جدی
            گرفته شوند.
          </p>
          <div className="mt-6 flex gap-2">
  {[
    {
      icon: Instagram,
      link: "https://instagram.com/sitetolid",
    },

    {
      icon: Send,
      link: "https://t.me/ShayanShahriyari",
    },
  ].map(({ icon: Icon, link }, i) => (
    <a
      key={i}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="grid h-10 w-10 place-items-center rounded-full hairline bg-surface/50 text-muted-foreground transition-colors hover:text-brand-green"
    >
      <Icon className="h-4 w-4" strokeWidth={1.6} />
    </a>
  ))}
</div>
        </div>

        <div>
          <h3 className="text-sm font-bold">خدمات</h3>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="transition-colors hover:text-foreground"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold">شرکت</h3>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li><Link to="/about" className="transition-colors hover:text-foreground">درباره ما</Link></li>
            <li><Link to="/portfolio" className="transition-colors hover:text-foreground">نمونه‌کارها</Link></li>
            <li><Link to="/articles" className="transition-colors hover:text-foreground">مقالات</Link></li>
            <li><Link to="/contact" className="transition-colors hover:text-foreground">درخواست همکاری</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold">ارتباط</h3>
          <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-brand-green" strokeWidth={1.6} />
              09125032180
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-brand-green" strokeWidth={1.6} />
              09337691940
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-brand-cyan" strokeWidth={1.6} />
              sitetolid@gmail.com
            </li>
            <li className="leading-8">تهران</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--hairline)]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-muted-foreground sm:flex-row lg:px-8">
          <span>© ۱۴۰۵ سایت تولید — تمامی حقوق محفوظ است.</span>
        </div>
      </div>
    </footer>
  );
}
