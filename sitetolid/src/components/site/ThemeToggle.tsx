import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("arivan-theme");
    const isDark = stored ? stored === "dark" : true;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("arivan-theme", next ? "dark" : "light");
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "روشن کردن حالت روز" : "فعال‌سازی حالت شب"}
      className="group relative grid h-10 w-10 place-items-center rounded-full hairline bg-surface/60 backdrop-blur transition-colors hover:bg-surface-2"
    >
      <Sun
        className="absolute h-[18px] w-[18px] text-brand-green transition-all duration-700 [transition-timing-function:var(--ease-cinema)] rotate-0 scale-100 opacity-100 dark:-rotate-90 dark:scale-0 dark:opacity-0"
        strokeWidth={1.6}
      />
      <Moon
        className="absolute h-[18px] w-[18px] text-brand-purple transition-all duration-700 [transition-timing-function:var(--ease-cinema)] rotate-90 scale-0 opacity-0 dark:rotate-0 dark:scale-100 dark:opacity-100"
        strokeWidth={1.6}
      />
    </button>
  );
}
