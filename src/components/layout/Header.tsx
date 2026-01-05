"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { PulseIndicator } from "@/components/ui/PulseIndicator";
import { useLanguage } from "@/i18n";

export function Header() {
  const { t } = useLanguage();

  const navItems = [
    { name: t.nav.about, href: "/#about" },
    { name: t.nav.skills, href: "/#skills" },
    { name: t.nav.projects, href: "/#projects" },
    { name: t.nav.experience, href: "/#experience" },
    { name: t.nav.blog, href: "/blog" },
    { name: t.nav.contact, href: "/#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/90 backdrop-blur-md border-b border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group px-3 py-1.5 rounded-full border border-[var(--border)] hover:border-[var(--accent)] transition-colors">
          <PulseIndicator status="online" />
          <span className="text-sm font-medium">
            <span className="text-[var(--muted)]">~/</span>
            <span className="text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors font-semibold">
              hongling
            </span>
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-1.5 text-sm text-[var(--muted)] hover:text-[var(--foreground)] rounded-full border border-[var(--border)] hover:border-[var(--accent)] transition-colors"
            >
              <span className="text-[var(--accent)]">$</span> {item.name}
            </Link>
          ))}
        </nav>

        {/* Controls */}
        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
