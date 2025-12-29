"use client";

import { motion } from "framer-motion";
import { getProjects } from "@/data/profile";
import { useLanguage } from "@/i18n";
import { Calendar, ExternalLink } from "lucide-react";

export function Projects() {
  const { t, locale } = useLanguage();
  const projects = getProjects(locale);

  return (
    <section id="projects" className="py-20 px-4">
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
            <h2 className="text-2xl font-bold">find ./projects -type f</h2>
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group p-6 rounded-lg border border-[var(--border)] bg-[var(--card)] hover:border-[var(--accent)] transition-colors"
              >
                {/* Project header */}
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-sm text-[var(--accent)]">{project.role}</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-[var(--muted)] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Period */}
                <div className="flex items-center gap-2 text-sm text-[var(--muted)] mb-3">
                  <Calendar className="w-4 h-4" />
                  {project.period.replace("至今", t.experience.present)}
                </div>

                {/* Description */}
                <p className="text-sm text-[var(--muted)] mb-4">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-1 mb-4">
                  {project.highlights.map((highlight, hIndex) => (
                    <li
                      key={hIndex}
                      className="text-sm text-[var(--foreground)] flex items-start gap-2"
                    >
                      <span className="text-[var(--success)] mt-1">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--border)]">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded bg-[var(--background)] text-[var(--muted)]"
                    >
                      {tech}
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
