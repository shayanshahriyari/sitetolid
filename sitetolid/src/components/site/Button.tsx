import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

const base =
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full text-sm font-semibold transition-all duration-500 [transition-timing-function:var(--ease-cinema)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variants = {
  primary:
    "bg-brand-gradient text-[oklch(0.16_0.02_285)] px-7 py-3.5 hover:-translate-y-0.5 glow-green",
  outline:
    "hairline bg-surface/50 px-7 py-3.5 text-foreground backdrop-blur hover:-translate-y-0.5 hover:bg-surface-2",
  ghost: "px-4 py-2 text-muted-foreground hover:text-foreground",
  solid:
    "bg-primary text-primary-foreground px-7 py-3.5 hover:-translate-y-0.5 glow-purple",
} as const;

type Variant = keyof typeof variants;

function Sheen() {
  return (
    <span className="pointer-events-none absolute inset-0 -z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
      <span className="absolute inset-y-0 w-1/3 bg-[linear-gradient(90deg,transparent,color-mix(in_oklab,white_45%,transparent),transparent)] [animation:sheen_1.1s_var(--ease-cinema)]" />
    </span>
  );
}

export function CtaLink({
  to,
  variant = "primary",
  className,
  children,
  ...rest
}: { to: string; variant?: Variant; className?: string; children: ReactNode } & Omit<
  ComponentProps<typeof Link>,
  "to" | "className" | "children"
>) {
  return (
    <Link to={to as never} className={cn(base, variants[variant], className)} {...rest}>
      <Sheen />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </Link>
  );
}

export function CtaButton({
  variant = "primary",
  className,
  children,
  ...rest
}: { variant?: Variant } & ComponentProps<"button">) {
  return (
    <button className={cn(base, variants[variant], className)} {...rest}>
      <Sheen />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
}
