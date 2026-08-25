"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Github, Mail, MessageCircle, X } from "lucide-react";
import { getProfile } from "@/data/profile";
import { useLanguage } from "@/i18n";

export function Contact() {
  const { locale } = useLanguage();
  const profile = getProfile(locale);
  const [showWeChat, setShowWeChat] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <section id="contact" className="border-t border-[var(--border)] bg-[var(--foreground)] px-5 py-24 text-[var(--background)] md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <span className="font-mono text-xs tracking-[0.14em] text-[var(--on-dark-muted)]">06 · CONTACT</span>
        <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <h2 className="max-w-4xl font-serif text-[clamp(2.6rem,6vw,5.2rem)] font-medium leading-[1.05] [text-wrap:balance]">
              {locale === "zh" ? "如果岗位需要把 AI 变成工程能力，我们可以聊聊。" : "If the role needs AI to become an engineering capability, let’s talk."}
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--on-dark-muted)]">
              {locale === "zh" ? "现居中山，接受大湾区机会。欢迎讨论研发效能、质量工程、金融支付与复杂系统架构。" : "Based in Zhongshan and open to Greater Bay Area roles across AI delivery, quality engineering, payments, and distributed architecture."}
            </p>
          </div>

          <div className="flex flex-col items-start gap-3 lg:items-end">
            <a href={`mailto:${profile.email}`} className="inline-flex min-h-11 items-center gap-2 bg-[var(--background)] px-5 text-sm font-medium text-[var(--foreground)] transition-transform duration-200 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--background)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--foreground)]">
              <Mail className="h-4 w-4" />
              {profile.email}
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <div className="flex items-center gap-2">
              <a href="https://github.com/hongling2511" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex h-11 w-11 items-center justify-center text-[var(--on-dark-muted)] transition-colors duration-200 hover:text-[var(--background)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--background)]">
                <Github className="h-5 w-5" />
              </a>
              <button onClick={() => setShowWeChat(true)} aria-label="WeChat" className="flex h-11 w-11 cursor-pointer items-center justify-center text-[var(--on-dark-muted)] transition-colors duration-200 hover:text-[var(--background)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--background)]">
                <MessageCircle className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showWeChat && (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/65 p-5"
            onClick={() => setShowWeChat(false)}
          >
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="relative w-full max-w-sm bg-[var(--background)] p-7 text-[var(--foreground)] shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <button onClick={() => setShowWeChat(false)} aria-label="Close WeChat QR" className="absolute right-3 top-3 flex h-10 w-10 cursor-pointer items-center justify-center text-[var(--muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]">
                <X className="h-5 w-5" />
              </button>
              <h3 className="font-serif text-2xl font-medium">WeChat</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">h594396193</p>
              <div className="mt-6 bg-white p-4">
                <Image src="/wechat-qr.png" alt="洪灵的微信二维码" width={320} height={320} className="h-auto w-full" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
