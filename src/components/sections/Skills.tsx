"use client";

import { skills } from "@/data/profile";
import { useLanguage } from "@/i18n";

type SkillKey = keyof typeof skills;

export function Skills() {
  const { t, locale } = useLanguage();
  const categories: { key: SkillKey; label: string }[] = [
    { key: "aiEngineering", label: t.skills.categories.aiEngineering },
    { key: "quality", label: t.skills.categories.quality },
    { key: "payments", label: t.skills.categories.payments },
    { key: "architecture", label: t.skills.categories.architecture },
    { key: "infrastructure", label: t.skills.categories.infrastructure },
  ];

  return (
    <section id="skills" className="border-y border-[var(--border)] bg-[var(--surface-muted)] px-5 py-24 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-[220px_1fr] md:gap-14">
          <div>
            <span className="font-mono text-xs tracking-[0.14em] text-[var(--accent)]">03 · SYSTEM</span>
            <h2 className="mt-4 font-serif text-3xl font-medium text-[var(--foreground)]">
              {locale === "zh" ? "能力不是清单，是可组合的系统" : "Capabilities form a system, not a list"}
            </h2>
          </div>

          <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
            {categories.map((category, index) => (
              <div key={category.key} className="grid gap-4 py-6 sm:grid-cols-[170px_1fr] sm:items-baseline">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-[var(--muted)]">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="font-medium text-[var(--foreground)]">{category.label}</h3>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {skills[category.key].map((skill) => (
                    <span key={skill} className="font-mono text-sm text-[var(--muted)]">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
