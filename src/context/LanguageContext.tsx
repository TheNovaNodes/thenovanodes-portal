"use client";

import React, {
  createContext,
  useContext,
  useState,
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

const emptySubscribe = () => () => {};

function getStorageItem(key: string): string | null {
  try {
    if (typeof window !== "undefined" && window.localStorage) {
      return window.localStorage.getItem(key);
    }
  } catch {
    // Storage access might be restricted or unavailable
  }
  return null;
}

function setStorageItem(key: string, value: string): void {
  try {
    if (typeof window !== "undefined" && window.localStorage) {
      window.localStorage.setItem(key, value);
    }
  } catch {
    // Storage access might be restricted or unavailable
  }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const [language, setLanguageState] = useState<Language>("en");

  // Read persisted preference if on client
  const clientLanguage = isClient
    ? (getStorageItem("novanodes_lang") as Language | null) ||
      (typeof navigator !== "undefined" && navigator.language.startsWith("ru")
        ? "ru"
        : "en")
    : "en";

  const activeLanguage: Language = language || clientLanguage;

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    setStorageItem("novanodes_lang", lang);
  }, []);

  const toggleLanguage = useCallback(() => {
    const next = activeLanguage === "en" ? "ru" : "en";
    setLanguage(next);
  }, [activeLanguage, setLanguage]);

  const t = translations[activeLanguage];

  return (
    <LanguageContext.Provider
      value={{
        language: activeLanguage,
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
