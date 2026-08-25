"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n";

export function Footer() {
  const { locale } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[var(--foreground)] px-5 pb-10 text-[var(--background)] md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 pt-8 text-xs text-[var(--on-dark-muted)] sm:flex-row sm:items-center sm:justify-between">
        <span>© {year} Hong Ling</span>
        <span>{locale === "zh" ? "判断边界，建立反馈，交付结果。" : "Define boundaries, build feedback, deliver outcomes."}</span>
        <Link href="/blog" className="min-h-10 py-2 transition-colors duration-200 hover:text-[var(--background)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--background)]">
          {locale === "zh" ? "技术写作" : "Technical writing"}
        </Link>
      </div>
    </footer>
  );
}
