"use client";

import React, { useState, useSyncExternalStore } from "react";
import {
  Network,
  Rocket,
  GitBranch,
  Check,
  Sun,
  Moon,
  Globe,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/context/LanguageContext";

const emptySubscribe = () => () => {};

export function TopNav() {
  const [copied, setCopied] = useState(false);
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
  const { theme, setTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  const handleDeployClick = () => {
    navigator.clipboard.writeText("npx @novanodes/cluster init");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const isDark = mounted ? theme === "dark" : true;

  return (
    <header className="bg-white/90 dark:bg-[#0b0f19]/85 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200 dark:border-[#3a494b]/30 transition-colors duration-200">
      <div className="flex justify-between items-center w-full px-6 md:px-12 max-w-[1440px] mx-auto h-16">
        {/* Brand & Status Pill */}
        <div className="flex items-center space-x-4">
          <a href="#" className="flex items-center space-x-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-[#1c1f2a] border border-slate-300 dark:border-[#3a494b]/50 flex items-center justify-center text-[#008ba3] dark:text-[#00f2fe] group-hover:border-[#00f2fe]/80 transition-colors shadow-[0_0_12px_rgba(0,242,254,0.2)]">
              <Network className="w-4 h-4 text-[#008ba3] dark:text-[#00f2fe]" />
            </div>
            <span className="text-lg font-semibold tracking-tight text-slate-900 dark:text-[#e0fdff]">
              TheNovaNodes
            </span>
          </a>

          {/* Pulse Badge */}
          <div className="hidden sm:flex items-center space-x-2 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-[#1c1f2a]/80 border border-slate-300 dark:border-[#3a494b]/40">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]" />
            </span>
            <span className="text-[11px] font-mono font-semibold text-[#059669] dark:text-[#10b981] tracking-wider uppercase">
              {t.nav.clusterOnline}
            </span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm">
          <a
            href="#modules"
            className="text-[#008ba3] dark:text-[#00f2fe] border-b-2 border-[#008ba3] dark:border-[#00f2fe] pb-1 font-medium transition-colors"
          >
            {t.nav.modules}
          </a>
          <a
            href="#architecture"
            className="text-slate-600 dark:text-[#b9cacb] hover:text-slate-900 dark:hover:text-[#e0fdff] transition-colors pb-1"
          >
            {t.nav.architecture}
          </a>
          <a
            href="#telemetry"
            className="text-slate-600 dark:text-[#b9cacb] hover:text-slate-900 dark:hover:text-[#e0fdff] transition-colors pb-1"
          >
            {t.nav.telemetry}
          </a>
          <a
            href="https://github.com/TheNovaNodes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 dark:text-[#b9cacb] hover:text-slate-900 dark:hover:text-[#e0fdff] transition-colors pb-1 flex items-center space-x-1"
          >
            <span>{t.nav.githubOrg}</span>
          </a>
        </nav>

        {/* Trailing Controls: Language, Theme, Deploy */}
        <div className="flex items-center space-x-2.5 sm:space-x-3">
          {/* Language Switcher */}
          <button
            type="button"
            onClick={toggleLanguage}
            title={t.nav.toggleLanguage}
            className="flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg border border-slate-300 dark:border-[#3a494b]/50 text-slate-700 dark:text-[#b9cacb] hover:text-slate-900 dark:hover:text-[#e0fdff] hover:border-[#00f2fe]/60 bg-slate-50 dark:bg-[#1c1f2a]/60 transition-colors text-xs font-mono font-medium cursor-pointer"
          >
            <Globe className="w-3.5 h-3.5 text-[#008ba3] dark:text-[#00f2fe]" />
            <span className={language === "en" ? "font-bold text-[#008ba3] dark:text-[#00f2fe]" : "opacity-60"}>
              EN
            </span>
            <span className="opacity-40">/</span>
            <span className={language === "ru" ? "font-bold text-[#008ba3] dark:text-[#00f2fe]" : "opacity-60"}>
              RU
            </span>
          </button>

          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            title={t.nav.toggleTheme}
            aria-label={t.nav.toggleTheme}
            className="p-1.5 rounded-lg border border-slate-300 dark:border-[#3a494b]/50 text-slate-700 dark:text-[#b9cacb] hover:text-slate-900 dark:hover:text-[#e0fdff] hover:border-[#00f2fe]/60 bg-slate-50 dark:bg-[#1c1f2a]/60 transition-colors cursor-pointer"
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-[#eab308] hover:rotate-45 transition-transform" />
            ) : (
              <Moon className="w-4 h-4 text-[#6366f1] hover:-rotate-12 transition-transform" />
            )}
          </button>

          {/* Profile Shortcut */}
          <a
            href="https://github.com/TheNovaNodes/TheNovaNodes"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-slate-300 dark:border-[#3a494b]/50 text-slate-700 dark:text-[#b9cacb] hover:text-slate-900 dark:hover:text-[#e0fdff] hover:border-[#849495] transition-colors text-xs font-mono"
          >
            <GitBranch className="w-3.5 h-3.5" />
            <span>{t.nav.profile}</span>
          </a>

          {/* Deploy Action */}
          <button
            type="button"
            onClick={handleDeployClick}
            className="bg-[#00dce6] hover:bg-[#00f2fe] text-[#00373a] px-3.5 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold flex items-center space-x-2 transition-all duration-200 shadow-[0_0_16px_rgba(0,242,254,0.35)] active:scale-[0.98] cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-[#00373a]" />
                <span>{t.nav.commandCopied}</span>
              </>
            ) : (
              <>
                <Rocket className="w-4 h-4 text-[#00373a]" />
                <span className="hidden sm:inline">{t.nav.deployCluster}</span>
                <span className="sm:hidden">Deploy</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
