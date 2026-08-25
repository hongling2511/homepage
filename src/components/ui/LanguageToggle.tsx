"use client";

import { useLanguage } from "@/i18n";
import { Globe } from "lucide-react";

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  const toggleLocale = () => {
    setLocale(locale === "zh" ? "en" : "zh");
  };

  return (
    <button
      onClick={toggleLocale}
      className="flex h-10 min-w-10 cursor-pointer items-center justify-center gap-1.5 px-2 text-sm text-[var(--muted)] transition-colors duration-200 hover:text-[var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
      aria-label="Toggle language"
    >
      <Globe className="h-4 w-4" />
      <span className="font-mono text-xs font-medium">{locale === "zh" ? "EN" : "中"}</span>
    </button>
  );
}
