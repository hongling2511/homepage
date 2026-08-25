"use client";

import { getProjects } from "@/data/profile";
import { useLanguage } from "@/i18n";

export function Projects() {
  const { locale } = useLanguage();
  const projects = getProjects(locale);

  const trackLabel = (track: "efficiency" | "architecture" | "both") => {
    if (locale === "zh") return track === "efficiency" ? "研发效能" : track === "architecture" ? "金融架构" : "共同证据";
    return track === "efficiency" ? "AI delivery" : track === "architecture" ? "Fintech architecture" : "Shared proof";
  };

  return (
    <section id="projects" className="px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-[220px_1fr] md:gap-14">
          <div>
            <span className="font-mono text-xs tracking-[0.14em] text-[var(--accent)]">02 · EVIDENCE</span>
            <h2 className="mt-4 font-serif text-3xl font-medium text-[var(--foreground)]">
              {locale === "zh" ? "用机制与结果说话" : "Mechanisms and outcomes over claims"}
            </h2>
          </div>

          <div className="border-t border-[var(--border)]">
            {projects.map((project, index) => (
              <article
                key={project.name}
                className="grid gap-6 border-b border-[var(--border)] py-9 lg:grid-cols-[minmax(220px,.7fr)_minmax(0,1.3fr)] lg:gap-12"
              >
                <div>
                  <div className="mb-5 flex items-center gap-3 font-mono text-xs text-[var(--muted)]">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <span className="h-px w-8 bg-[var(--border-strong)]" aria-hidden="true" />
                    <span className="text-[var(--accent)]">{trackLabel(project.track)}</span>
                  </div>
                  <h3 className="font-serif text-2xl font-medium leading-tight text-[var(--foreground)]">{project.name}</h3>
                  <p className="mt-3 text-sm font-medium text-[var(--accent)]">{project.role}</p>
                  <p className="mt-2 font-mono text-xs text-[var(--muted)]">{project.period}</p>
                </div>

                <div>
                  <p className="max-w-2xl leading-7 text-[var(--muted)] [text-wrap:pretty]">{project.description}</p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-3">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="border-t border-[var(--border)] pt-3 text-sm leading-6 text-[var(--foreground)]">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="font-mono text-xs text-[var(--muted)]">{tech}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
