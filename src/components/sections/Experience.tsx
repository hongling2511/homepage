"use client";

import { motion } from "framer-motion";
import { getExperience } from "@/data/profile";
import { useLanguage } from "@/i18n";
import { Building2, Calendar } from "lucide-react";

export function Experience() {
  const { t, locale } = useLanguage();
  const experience = getExperience(locale);

  return (
    <section id="experience" className="py-20 px-4 bg-[var(--card)]">
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
            <h2 className="text-2xl font-bold">git log --oneline career</h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-[var(--border)]" />

            {/* Experience items */}
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative pl-12"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-[var(--accent)] flex items-center justify-center">
                    <Building2 className="w-4 h-4 text-[var(--accent-foreground)]" />
                  </div>

                  {/* Content */}
                  <div className="p-6 rounded-lg border border-[var(--border)] bg-[var(--background)]">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-[var(--foreground)]">
                        {exp.company}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-[var(--muted)]">
                        <Calendar className="w-4 h-4" />
                        {exp.period.replace("至今", t.experience.present)}
                      </div>
                    </div>
                    <p className="text-[var(--accent)] font-medium mb-2">
                      {exp.role}
                    </p>
                    <p className="text-sm text-[var(--muted)]">{exp.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
