"use client";

import { motion } from "framer-motion";
import { getProfile, getEducation } from "@/data/profile";
import { useLanguage } from "@/i18n";
import { GraduationCap, Calendar } from "lucide-react";

export function About() {
  const { t, locale } = useLanguage();
  const profile = getProfile(locale);
  const education = getEducation(locale);

  return (
    <section id="about" className="py-20 px-4">
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
            <h2 className="text-2xl font-bold">{t.about.title}</h2>
          </div>

          {/* About content */}
          <div className="space-y-8">
            {/* Summary card */}
            <div className="p-6 rounded-lg border border-[var(--border)] bg-[var(--card)]">
              <h3 className="text-lg font-semibold text-[var(--accent)] mb-4">
                {t.about.aboutMe}
              </h3>
              <p className="text-[var(--foreground)] leading-relaxed">
                {profile.summary}
              </p>
            </div>

            {/* Education */}
            <div className="p-6 rounded-lg border border-[var(--border)] bg-[var(--card)]">
              <h3 className="text-lg font-semibold text-[var(--accent)] mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5" />
                {t.about.education}
              </h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row md:items-center justify-between gap-2 pb-4 border-b border-[var(--border)] last:border-0 last:pb-0"
                  >
                    <div>
                      <h4 className="font-semibold text-[var(--foreground)]">
                        {edu.school}
                      </h4>
                      <p className="text-[var(--muted)]">
                        {edu.degree} · {edu.major}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[var(--muted)]">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg border border-[var(--border)] bg-[var(--card)] text-center">
                <div className="text-3xl font-bold text-[var(--accent)]">10+</div>
                <div className="text-sm text-[var(--muted)]">{t.about.highlights.experience}</div>
              </div>
              <div className="p-4 rounded-lg border border-[var(--border)] bg-[var(--card)] text-center">
                <div className="text-3xl font-bold text-[var(--accent)]">{locale === "zh" ? "3亿+" : "300M+"}</div>
                <div className="text-sm text-[var(--muted)]">{t.about.highlights.users}</div>
              </div>
              <div className="p-4 rounded-lg border border-[var(--border)] bg-[var(--card)] text-center">
                <div className="text-3xl font-bold text-[var(--accent)]">30%+</div>
                <div className="text-sm text-[var(--muted)]">{t.about.highlights.improvement}</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
