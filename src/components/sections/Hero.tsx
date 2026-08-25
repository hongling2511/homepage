"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { getFocusAreas, getProfile } from "@/data/profile";
import { useLanguage } from "@/i18n";

export function Hero() {
  const { t, locale } = useLanguage();
  const profile = getProfile(locale);
  const focusAreas = getFocusAreas(locale);
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden px-5 pb-24 pt-32 md:px-8 md:pb-32 md:pt-40">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[minmax(0,1.22fr)_minmax(320px,.78fr)] lg:items-end">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.2, 0, 0, 1] }}
        >
          <div className="mb-8 flex items-center gap-3 font-mono text-xs tracking-[0.14em] text-[var(--muted)]">
            <span className="h-px w-10 bg-[var(--accent)]" aria-hidden="true" />
            {profile.eyebrow}
          </div>

          <h1 className="max-w-4xl font-serif text-[clamp(2.7rem,7vw,5.8rem)] font-medium leading-[1.06] text-[var(--foreground)] [text-wrap:balance]">
            {profile.statement}
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)] [text-wrap:pretty]">
            {profile.summary}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[var(--muted)]">
            <span className="font-medium text-[var(--foreground)]">{profile.title}</span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[var(--accent)]" />
              {profile.location}
            </span>
          </div>

          <a
            href="#about"
            className="mt-12 inline-flex min-h-10 items-center gap-2 text-sm font-medium text-[var(--accent)] transition-[transform,color] duration-200 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--background)]"
          >
            {t.hero.scrollDown}
            <ArrowDown className="h-4 w-4" />
          </a>
        </motion.div>

        <motion.aside
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: reduceMotion ? 0 : 0.12, ease: [0.2, 0, 0, 1] }}
          className="bg-[var(--surface)] p-6 shadow-[var(--shadow-paper)] md:p-8"
          aria-label={t.hero.resumeDesk}
        >
          <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
            <span className="font-mono text-xs tracking-[0.12em] text-[var(--muted)]">{t.hero.resumeDesk}</span>
            <span className="font-mono text-xs text-[var(--accent)]">2 PDF</span>
          </div>

          <div className="divide-y divide-[var(--border)]">
            {focusAreas.map((area) => (
              <a
                key={area.id}
                href={area.resumeHref}
                download
                className="group flex min-h-28 items-start justify-between gap-5 py-6 transition-[transform,color] duration-200 active:scale-[0.985] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--surface)]"
              >
                <span>
                  <span className="mb-2 block font-mono text-xs text-[var(--accent)]">{area.index}</span>
                  <span className="block font-serif text-xl font-medium leading-snug text-[var(--foreground)]">
                    {area.title}
                  </span>
                  <span className="mt-2 block text-sm leading-6 text-[var(--muted)]">{area.kicker}</span>
                </span>
                <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-[var(--muted)] transition-[transform,color] duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--accent)]" />
              </a>
            ))}
          </div>

          <div className="mt-2 flex items-center gap-3 border-t border-[var(--border)] pt-5 text-xs text-[var(--muted)]">
            <span className="h-2 w-2 rounded-full bg-[var(--success)]" aria-hidden="true" />
            {t.hero.status}
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
