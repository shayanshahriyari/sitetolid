import logo from "@/assets/logo.png";
{export function Logo({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
<img
  src={logo}
  alt="Logo"
  width={66}
  height={34}
  aria-hidden="true"
  className="shrink-0 -translate-x-5"
/>
      <span className="text-lg font-extrabold tracking-tight">
        <span className="text-gradient-brand">سایت تولید</span>
      </span>
    </span>
  );
}
