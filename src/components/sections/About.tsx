"use client";

import { ArrowUpRight, Check } from "lucide-react";
import { getFocusAreas } from "@/data/profile";
import { useLanguage } from "@/i18n";

export function About() {
  const { locale } = useLanguage();
  const focusAreas = getFocusAreas(locale);

  return (
    <section id="about" className="border-y border-[var(--border)] bg-[var(--surface-muted)] px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-[220px_1fr] md:gap-14">
          <div>
            <span className="font-mono text-xs tracking-[0.14em] text-[var(--accent)]">01 · POSITION</span>
            <h2 className="mt-4 font-serif text-3xl font-medium leading-tight text-[var(--foreground)]">
              {locale === "zh" ? "一个职业母题，两条证据路径" : "One career thesis, two evidence paths"}
            </h2>
          </div>

          <p className="max-w-3xl text-lg leading-8 text-[var(--muted)] [text-wrap:pretty]">
            {locale === "zh"
              ? "我的核心工作不是追逐工具，而是把复杂系统的边界、风险和反馈变得可验证。AI 研发效能负责缩短正确交付的路径，金融系统架构负责确保这条路径不会跨过一致性与资金风险的红线。"
              : "My work is not about chasing tools. It is about making the boundaries, risks, and feedback loops of complex systems verifiable. AI delivery shortens the path to correct outcomes, while financial architecture keeps that path inside consistency and risk boundaries."}
          </p>
        </div>

        <div className="mt-16 grid gap-px bg-[var(--border)] lg:grid-cols-[.92fr_1.08fr]">
          {focusAreas.map((area) => (
            <article
              key={area.id}
              className="bg-[var(--background)] p-7 md:p-10"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <span className="font-mono text-xs text-[var(--accent)]">PATH {area.index}</span>
                  <h3 className="mt-4 font-serif text-3xl font-medium leading-tight text-[var(--foreground)]">
                    {area.title}
                  </h3>
                  <p className="mt-3 text-sm font-medium text-[var(--accent)]">{area.kicker}</p>
                </div>
                <span className="font-serif text-5xl text-[var(--border-strong)]" aria-hidden="true">{area.index}</span>
              </div>

              <p className="mt-7 max-w-xl leading-7 text-[var(--muted)] [text-wrap:pretty]">{area.description}</p>

              <ul className="mt-8 space-y-3">
                {area.evidence.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-6 text-[var(--foreground)]">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-[var(--accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href={area.resumeHref}
                download
                className="mt-9 inline-flex min-h-10 items-center gap-2 text-sm font-medium text-[var(--accent)] transition-transform duration-200 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--background)]"
              >
                {area.resumeLabel}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
