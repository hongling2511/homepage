"use client";

import { getEducation, getExperience } from "@/data/profile";
import { useLanguage } from "@/i18n";

export function Experience() {
  const { locale } = useLanguage();
  const experience = getExperience(locale);
  const education = getEducation(locale);

  return (
    <section id="experience" className="px-5 py-24 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-[220px_1fr] md:gap-14">
          <div>
            <span className="font-mono text-xs tracking-[0.14em] text-[var(--accent)]">04 · TIMELINE</span>
            <h2 className="mt-4 font-serif text-3xl font-medium text-[var(--foreground)]">
              {locale === "zh" ? "从可靠服务到交付体系" : "From reliable services to delivery systems"}
            </h2>
          </div>

          <div>
            <ol className="border-t border-[var(--border)]">
              {experience.map((item, index) => (
                <li key={item.company} className="grid gap-3 border-b border-[var(--border)] py-7 sm:grid-cols-[130px_1fr_auto] sm:items-baseline sm:gap-6">
                  <span className="font-mono text-xs text-[var(--muted)]">{item.period}</span>
                  <span>
                    <span className="font-serif text-xl font-medium text-[var(--foreground)]">{item.company}</span>
                    <span className="mt-1 block text-sm text-[var(--accent)]">{item.role}</span>
                  </span>
                  <span className="max-w-xs text-sm leading-6 text-[var(--muted)] sm:text-right">{item.desc}</span>
                  <span className="sr-only">{index + 1}</span>
                </li>
              ))}
            </ol>

            <div className="mt-12 grid gap-6 border-t border-[var(--border)] pt-7 sm:grid-cols-2">
              {education.map((item) => (
                <div key={item.school}>
                  <h3 className="font-serif text-lg font-medium text-[var(--foreground)]">{item.school}</h3>
                  <p className="mt-2 text-sm text-[var(--muted)]">{item.degree} · {item.major}</p>
                  <p className="mt-1 font-mono text-xs text-[var(--muted)]">{item.period}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
