"use client";

import React, {
  createContext,
  useContext,
  useSyncExternalStore,
  useCallback,
} from "react";
import { Language, translations, Translations } from "@/i18n/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LANGUAGE_KEY = "novanodes_lang";
let memoryLanguage: Language | null = null;
const listeners = new Set<() => void>();

function emitChange() {
  listeners.forEach((listener) => listener());
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  const onStorage = (e: StorageEvent) => {
    if (e.key === LANGUAGE_KEY) {
      callback();
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("storage", onStorage);
  }
  return () => {
    listeners.delete(callback);
    if (typeof window !== "undefined") {
      window.removeEventListener("storage", onStorage);
    }
  };
}

function getClientLanguage(): Language {
  if (typeof window === "undefined") return "en";

  try {
    const stored = window.localStorage.getItem(LANGUAGE_KEY);
    if (stored === "en" || stored === "ru") {
      return stored;
    }
  } catch {
    if (memoryLanguage) return memoryLanguage;
  }

  if (memoryLanguage) return memoryLanguage;

  if (
    typeof navigator !== "undefined" &&
    navigator.language &&
    navigator.language.startsWith("ru")
  ) {
    return "ru";
  }

  return "en";
}

function getServerLanguage(): Language {
  return "en";
}

function persistLanguage(lang: Language): void {
  try {
    if (typeof window !== "undefined" && window.localStorage) {
      window.localStorage.setItem(LANGUAGE_KEY, lang);
    }
  } catch {
    memoryLanguage = lang;
  }
  emitChange();
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const language = useSyncExternalStore(
    subscribe,
    getClientLanguage,
    getServerLanguage
  );

  const setLanguage = useCallback((lang: Language) => {
    persistLanguage(lang);
  }, []);

  const toggleLanguage = useCallback(() => {
    const next = language === "en" ? "ru" : "en";
    persistLanguage(next);
  }, [language]);

  const t = translations[language];

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    return {
      language: "en" as const,
      setLanguage: () => {},
      toggleLanguage: () => {},
      t: translations.en,
    };
  }
  return context;
}
