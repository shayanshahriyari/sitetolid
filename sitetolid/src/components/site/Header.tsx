import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "./assets/logo.png";
import { ThemeToggle } from "./ThemeToggle";
import { CtaLink } from "./Button";
import { services } from "@/lib/site-data";

const nav = [
  { to: "/", label: "خانه" },
  { to: "/services", label: "خدمات", children: true },
  { to: "/portfolio", label: "نمونه‌کارها" },
  { to: "/articles", label: "مقالات" },
  { to: "/about", label: "درباره ما" },
  { to: "/contact", label: "تماس با ما" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 [transition-timing-function:var(--ease-cinema)] ${
        scrolled
          ? "border-b border-[var(--hairline)] bg-background/70 py-2 backdrop-blur-xl"
          : "border-b border-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 lg:px-8">
        <Link to="/" className="shrink-0">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <div key={item.to} className="group relative">
              <Link
                to={item.to}
                className="flex items-center gap-1 rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
                {item.children ? <ChevronDown className="h-3.5 w-3.5 opacity-60" /> : null}
              </Link>
              {item.children ? (
                <div className="invisible absolute end-0 top-full w-72 translate-y-2 pt-3 opacity-0 transition-all duration-500 [transition-timing-function:var(--ease-cinema)] group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="glass-panel rounded-2xl p-2">
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        to="/services/$slug"
                        params={{ slug: s.slug }}
                        className="block rounded-xl px-4 py-3 transition-colors hover:bg-surface-2"
                      >
                        <span className="block text-sm font-semibold">{s.title}</span>
                        <span className="mt-0.5 block text-xs leading-6 text-muted-foreground">
                          {s.tagline}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* <ThemeToggle /> */}
          <CtaLink to="/contact" className="hidden px-6 py-2.5 sm:inline-flex">
            ثبت سفارش
          </CtaLink>
          <button
            type="button"
            aria-label="منو"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full hairline bg-surface/60 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="mx-4 mt-3 lg:hidden">
          <div className="glass-panel rounded-3xl p-3">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-surface-2 hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <div className="grid grid-cols-2 gap-2 p-2">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  onClick={() => setOpen(false)}
                  className="rounded-xl bg-surface-2/60 px-3 py-2 text-xs text-muted-foreground"
                >
                  {s.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
