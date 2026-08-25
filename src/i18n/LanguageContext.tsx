"use client";

import { createContext, useContext, useEffect, useSyncExternalStore, ReactNode } from "react";
import { Locale, translations, Translations } from "./translations";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const localeEvent = "homepage-locale-change";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(localeEvent, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(localeEvent, callback);
  };
}

function getLocaleSnapshot(): Locale {
  const saved = localStorage.getItem("locale");
  if (saved === "zh" || saved === "en") return saved;
  return navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore<Locale>(subscribe, getLocaleSnapshot, () => "zh");

  useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
    document.title = locale === "zh"
      ? "洪灵 | AI 研发效能与金融系统技术负责人"
      : "Hong Ling | AI Delivery & Fintech Systems Lead";
  }, [locale]);

  const setLocale = (newLocale: Locale) => {
    localStorage.setItem("locale", newLocale);
    window.dispatchEvent(new Event(localeEvent));
  };

  const t = translations[locale];

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
