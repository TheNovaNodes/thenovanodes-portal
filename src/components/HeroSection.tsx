"use client";

import React, { useState } from "react";
import { Terminal, Copy, Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function HeroSection() {
  const [copied, setCopied] = useState(false);
  const { t } = useLanguage();
  const cliCommand = t.hero.cliCommand;

  const handleCopy = () => {
    navigator.clipboard.writeText(cliCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 pt-6 sm:pt-12 md:pt-20 pb-10 md:pb-16">
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-4 sm:space-y-6 md:space-y-8">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center space-x-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-slate-100 dark:bg-[#1c1f2a]/90 border border-slate-300 dark:border-[#3a494b]/60 shadow-inner max-w-[95vw]">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f2fe] opacity-80" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00f2fe]" />
          </span>
          <span className="text-[9.5px] sm:text-[11px] font-mono text-slate-800 dark:text-[#e0fdff] uppercase tracking-normal sm:tracking-widest font-semibold text-center leading-tight">
            {t.hero.eyebrow}
          </span>
        </div>

        {/* Headline */}
        <div className="space-y-2 sm:space-y-3">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight text-slate-900 dark:text-[#e0fdff]">
            {t.hero.headlinePrefix}{" "}
            <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#008ba3] dark:from-[#00f2fe] via-[#0284c7] dark:via-[#6ff6ff] to-[#7c3aed] dark:to-[#8b5cf6] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,242,254,0.25)]">
              {t.hero.headlineGradient}
            </span>
          </h1>
          <p className="text-base sm:text-xl md:text-2xl text-slate-700 dark:text-[#b9cacb] font-normal max-w-2xl mx-auto">
            {t.hero.subheadline}
          </p>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-base md:text-lg text-slate-600 dark:text-[#849495] max-w-3xl leading-relaxed">
          {t.hero.description}
        </p>

        {/* Action Row & CLI Pill */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full pt-1 sm:pt-2">
          {/* Primary Action Button */}
          <a
            href="#modules"
            className="w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 rounded-lg bg-[#00dce6] hover:bg-[#00f2fe] text-[#00373a] font-semibold flex items-center justify-center space-x-2 shadow-[0_0_20px_rgba(0,242,254,0.3)] hover:shadow-[0_0_28px_rgba(0,242,254,0.5)] transition-all duration-200 active:scale-[0.98] text-xs sm:text-base"
          >
            <Terminal className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>{t.hero.exploreBtn}</span>
          </a>

          {/* CLI Pill with Copy Interaction */}
          <div
            onClick={handleCopy}
            className="w-full sm:w-auto flex items-center justify-between space-x-2 sm:space-x-3 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-white dark:bg-[#1c1f2a]/90 border border-slate-300 dark:border-[#3a494b]/60 hover:border-[#00f2fe]/60 transition-colors group cursor-pointer shadow-sm"
          >
            <div className="flex items-center space-x-1.5 sm:space-x-2 font-mono text-xs sm:text-sm text-slate-800 dark:text-[#dfe2f1]">
              <span className="text-[#008ba3] dark:text-[#00f2fe] font-bold">$</span>
              <span className="text-slate-900 dark:text-[#e0fdff] font-medium tracking-tight">
                {cliCommand}
              </span>
            </div>
            <div className="flex items-center space-x-1.5 pl-2 border-l border-slate-200 dark:border-[#3a494b]/50">
              {copied ? (
                <div className="flex items-center space-x-1 text-[#059669] dark:text-[#10b981]">
                  <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span className="text-[10px] sm:text-[11px] font-mono uppercase font-semibold">
                    {t.hero.copied}
                  </span>
                </div>
              ) : (
                <Copy className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 dark:text-[#849495] group-hover:text-[#00f2fe] transition-colors" />
              )}
            </div>
          </div>
        </div>

        {/* Live Network Telemetry Strip */}
        <div id="telemetry" className="pt-2">
          <div className="inline-flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-1.5 px-4 sm:px-5 py-2 rounded-xl bg-white/80 dark:bg-[#0a0e18]/80 border border-slate-200 dark:border-[#3a494b]/30 text-[10px] sm:text-[11px] font-mono text-slate-700 dark:text-[#b9cacb] shadow-sm">
            <div className="flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#008ba3] dark:bg-[#00f2fe]" />
              <span>{t.hero.nodesCount}</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#059669] dark:bg-[#10b981]" />
              <span>{t.hero.meshUptime}</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7c3aed] dark:bg-[#8b5cf6]" />
              <span>{t.hero.consensusLatency}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
