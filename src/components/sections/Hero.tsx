"use client";

import { motion } from "framer-motion";
import { Terminal } from "@/components/ui/Terminal";
import { PulseIndicator } from "@/components/ui/PulseIndicator";
import { getProfile } from "@/data/profile";
import { useLanguage } from "@/i18n";
import { MapPin, ArrowDown, Download } from "lucide-react";

export function Hero() {
  const { t, locale } = useLanguage();
  const profile = getProfile(locale);

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Terminal title="~/hongling" className="mb-8">
            <div className="space-y-4">
              {/* Command line */}
              <div className="flex items-center gap-2">
                <span className="text-[var(--success)]">$</span>
                <span className="text-[var(--foreground)]">whoami</span>
                <span className="animate-blink text-[var(--accent)]">_</span>
              </div>

              {/* Name and title */}
              <div className="pl-4 space-y-2">
                <h1 className="text-3xl md:text-4xl font-bold text-[var(--foreground)]">
                  {profile.name}
                </h1>
                <p className="text-lg md:text-xl text-[var(--accent)]">
                  {profile.title}
                </p>
              </div>

              {/* Status */}
              <div className="flex items-center gap-2 pl-4">
                <span className="text-[var(--muted)]">&gt;</span>
                <span className="text-[var(--muted)]">{t.hero.statusLabel}:</span>
                <PulseIndicator status="online" />
                <span className="text-[var(--success)]">{t.hero.status}</span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 pl-4">
                <span className="text-[var(--muted)]">&gt;</span>
                <MapPin className="w-4 h-4 text-[var(--muted)]" />
                <span className="text-[var(--muted)]">{profile.location}</span>
              </div>

              {/* Experience */}
              <div className="flex items-center gap-2 pl-4">
                <span className="text-[var(--muted)]">&gt;</span>
                <span className="text-[var(--muted)]">{t.hero.experienceLabel}:</span>
                <span className="text-[var(--foreground)]">{profile.experience}</span>
              </div>

              {/* Summary */}
              <div className="pt-4 pl-4 border-t border-[var(--border)]">
                <p className="text-[var(--muted)] leading-relaxed">
                  {profile.summary}
                </p>
              </div>

              {/* Download Resume */}
              <div className="pt-4 pl-4">
                <a
                  href={locale === "zh" ? "/resume-zh.pdf" : "/resume-en.pdf"}
                  download={locale === "zh" ? "洪灵-简历.pdf" : "HongLing-Resume.pdf"}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--accent)] text-[var(--accent-foreground)] font-medium hover:opacity-90 transition-opacity"
                >
                  <Download className="w-4 h-4" />
                  {t.hero.downloadResume}
                </a>
              </div>
            </div>
          </Terminal>

          {/* Scroll indicator */}
          <motion.div
            className="flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <a
              href="#about"
              className="flex flex-col items-center gap-2 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            >
              <span className="text-sm">{t.hero.scrollDown}</span>
              <ArrowDown className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
