"use client";

import Link from "next/link";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useLanguage } from "@/i18n";

export function Header() {
  const { locale } = useLanguage();
  const navItems = locale === "zh"
    ? [
        { name: "定位", href: "/#about" },
        { name: "证据", href: "/#projects" },
        { name: "经历", href: "/#experience" },
        { name: "写作", href: "/blog" },
      ]
    : [
        { name: "Position", href: "/#about" },
        { name: "Evidence", href: "/#projects" },
        { name: "Timeline", href: "/#experience" },
        { name: "Writing", href: "/blog" },
      ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border)] bg-[color:var(--background-alpha)]">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-[var(--foreground)] focus:px-4 focus:py-2 focus:text-[var(--background)]">
        Skip to main content
      </a>
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5 md:px-8">
        <Link
          href="/"
          className="flex min-h-10 items-center gap-3 font-serif text-lg font-medium text-[var(--foreground)] transition-colors duration-200 hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
        >
          <span className="flex h-8 w-8 items-center justify-center bg-[var(--foreground)] font-mono text-xs text-[var(--background)]">HL</span>
          <span>洪灵</span>
        </Link>

        <div className="flex items-center gap-2">
          <nav className="mr-3 hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex min-h-10 items-center px-3 text-sm text-[var(--muted)] transition-colors duration-200 hover:text-[var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
