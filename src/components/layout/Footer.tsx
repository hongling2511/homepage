"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Mail, Twitter, MessageCircle, X } from "lucide-react";
import { social } from "@/data/profile";
import { useLanguage } from "@/i18n";
import Image from "next/image";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Github,
  mail: Mail,
  twitter: Twitter,
  wechat: MessageCircle,
};

export function Footer() {
  const [showWeChatQR, setShowWeChatQR] = useState(false);
  const { t } = useLanguage();
  const year = new Date().getFullYear();
  const weChatId = social.find((s) => s.icon === "wechat")?.url || "";

  // 过滤掉 email
  const filteredSocial = social.filter((item) => item.icon !== "mail");

  return (
    <>
      <footer className="border-t border-[var(--border)] bg-[var(--background)]">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="text-sm text-[var(--muted)]">
              <span className="text-[var(--muted)]">$</span> echo &quot;{year} hongling. All rights reserved.&quot;
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4">
              {filteredSocial.map((item) => {
                const Icon = iconMap[item.icon];
                const isWeChat = item.icon === "wechat";

                if (isWeChat) {
                  return (
                    <button
                      key={item.name}
                      onClick={() => setShowWeChatQR(true)}
                      className="p-2 rounded-full text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--card)] transition-colors cursor-pointer"
                      aria-label={item.name}
                    >
                      {Icon && <Icon className="w-5 h-5" />}
                    </button>
                  );
                }

                return (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--card)] transition-colors"
                    aria-label={item.name}
                  >
                    {Icon && <Icon className="w-5 h-5" />}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </footer>

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
    </>
  );
}
