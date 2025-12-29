"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/profile";
import { useLanguage } from "@/i18n";

const skillIcons = {
  languages: "💻",
  frameworks: "🏗️",
  middleware: "⚡",
  databases: "🗄️",
  cloudNative: "☁️",
  practices: "🎯",
  dataAI: "🤖",
  security: "🔐",
} as const;

type SkillKey = keyof typeof skills;

export function Skills() {
  const { t } = useLanguage();

  const skillCategories: { key: SkillKey; label: string; icon: string }[] = [
    { key: "languages", label: t.skills.categories.languages, icon: skillIcons.languages },
    { key: "frameworks", label: t.skills.categories.frameworks, icon: skillIcons.frameworks },
    { key: "middleware", label: t.skills.categories.middleware, icon: skillIcons.middleware },
    { key: "databases", label: t.skills.categories.databases, icon: skillIcons.databases },
    { key: "cloudNative", label: t.skills.categories.cloudNative, icon: skillIcons.cloudNative },
    { key: "practices", label: t.skills.categories.practices, icon: skillIcons.practices },
    { key: "dataAI", label: t.skills.categories.dataAI, icon: skillIcons.dataAI },
    { key: "security", label: t.skills.categories.security, icon: skillIcons.security },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-[var(--card)]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section title */}
          <div className="flex items-center gap-3 mb-8">
            <span className="text-[var(--success)]">$</span>
            <h2 className="text-2xl font-bold">{t.skills.title}</h2>
          </div>

          {/* Skills grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
                className="p-4 rounded-lg border border-[var(--border)] bg-[var(--background)]"
              >
                <h3 className="text-sm font-semibold text-[var(--accent)] mb-3 flex items-center gap-2">
                  <span>{category.icon}</span>
                  {category.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills[category.key].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm rounded-full bg-[var(--card)] border border-[var(--border)] text-[var(--foreground)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
