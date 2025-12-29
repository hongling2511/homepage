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
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[var(--border)] hover:border-[var(--accent)] text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
      aria-label="Toggle language"
    >
      <Globe className="w-4 h-4" />
      <span className="font-medium">{locale === "zh" ? "EN" : "中"}</span>
    </button>
  );
}
