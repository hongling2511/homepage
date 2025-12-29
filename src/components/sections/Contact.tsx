"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getProfile, social } from "@/data/profile";
import { Terminal } from "@/components/ui/Terminal";
import { useLanguage } from "@/i18n";
import { Mail, Github, Send, MapPin, Twitter, MessageCircle, X } from "lucide-react";
import Image from "next/image";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Github,
  mail: Mail,
  twitter: Twitter,
  wechat: MessageCircle,
};

export function Contact() {
  const [showWeChatQR, setShowWeChatQR] = useState(false);
  const { t, locale } = useLanguage();
  const profile = getProfile(locale);
  const weChatId = social.find((s) => s.icon === "wechat")?.url || "";

  // 过滤掉 email，只显示其他社交链接
  const filteredSocial = social.filter((item) => item.icon !== "mail");

  return (
    <section id="contact" className="py-20 px-4">
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
            <h2 className="text-2xl font-bold">{t.contact.title}</h2>
          </div>

          <Terminal title="contact" className="max-w-2xl mx-auto">
            <div className="space-y-4">
              {/* Greeting */}
              <div>
                <span className="text-[var(--muted)]">{t.contact.greeting}</span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <span className="text-[var(--success)]">$</span>
                <span className="text-[var(--muted)]">{t.contact.emailLabel}:</span>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-[var(--accent)] hover:underline flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  {profile.email}
                </a>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3">
                <span className="text-[var(--success)]">$</span>
                <span className="text-[var(--muted)]">{t.contact.locationLabel}:</span>
                <span className="text-[var(--foreground)] flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {profile.location}
                </span>
              </div>

              {/* Social links */}
              <div className="pt-4 border-t border-[var(--border)]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[var(--success)]">$</span>
                  <span className="text-[var(--muted)]">{t.contact.socialLabel}</span>
                </div>
                <div className="flex gap-4 pl-6 flex-wrap">
                  {filteredSocial.map((item) => {
                    const Icon = iconMap[item.icon];
                    const isWeChat = item.icon === "wechat";

                    if (isWeChat) {
                      return (
                        <button
                          key={item.name}
                          onClick={() => setShowWeChatQR(true)}
                          className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors cursor-pointer"
                        >
                          {Icon && <Icon className="w-5 h-5" />}
                          <span>{item.name}</span>
                        </button>
                      );
                    }

                    return (
                      <a
                        key={item.name}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                      >
                        {Icon && <Icon className="w-5 h-5" />}
                        <span>{item.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* CTA */}
              <div className="pt-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--accent-secondary)] text-[var(--accent-secondary-foreground)] font-medium hover:opacity-90 transition-opacity"
                >
                  <Send className="w-5 h-5" />
                  {t.contact.sendEmail}
                </a>
              </div>
            </div>
          </Terminal>
        </motion.div>
      </div>

      {/* WeChat QR Code Modal */}
      <AnimatePresence>
        {showWeChatQR && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowWeChatQR(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.3 }}
              className="relative bg-[var(--card)] rounded-2xl p-6 shadow-2xl max-w-sm w-full border border-[var(--border)]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setShowWeChatQR(false)}
                className="absolute top-4 right-4 p-1 rounded-full hover:bg-[var(--border)] transition-colors"
              >
                <X className="w-5 h-5 text-[var(--muted)]" />
              </button>

              {/* Header */}
              <div className="text-center mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--success)]/10 text-[var(--success)] text-sm mb-3">
                  <MessageCircle className="w-4 h-4" />
                  <span>WeChat</span>
                </div>
                <h3 className="text-lg font-semibold text-[var(--foreground)]">{t.contact.wechat.title}</h3>
              </div>

              {/* QR Code */}
              <div className="bg-white rounded-xl p-4 mb-4">
                <div className="relative aspect-square w-full">
                  <Image
                    src="/wechat-qr.png"
                    alt="WeChat QR Code"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* WeChat ID */}
              <div className="text-center">
                <p className="text-sm text-[var(--muted)] mb-2">{t.contact.wechat.searchHint}</p>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(weChatId);
                    alert(t.contact.wechat.copied);
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--accent)]/10 text-[var(--accent)] hover:bg-[var(--accent)]/20 transition-colors"
                >
                  <span className="font-mono font-medium">{weChatId}</span>
                  <span className="text-xs">{t.contact.wechat.copyHint}</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
