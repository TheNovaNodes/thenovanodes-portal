"use client";

import React, { useState } from "react";
import { Cpu, Shield, Network, Zap, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function ArchitectureSection() {
  const [activeTab, setActiveTab] = useState<"routing" | "security" | "swarms">(
    "routing"
  );
  const { t } = useLanguage();

  const getCardIcon = (tab: "routing" | "security" | "swarms", index: number) => {
    if (tab === "routing") {
      if (index === 0) return <Network className="w-5 h-5 text-[#008ba3] dark:text-[#00f2fe]" />;
      if (index === 1) return <Shield className="w-5 h-5 text-[#7c3aed] dark:text-[#8b5cf6]" />;
      return <Zap className="w-5 h-5 text-[#059669] dark:text-[#10b981]" />;
    }
    if (tab === "security") {
      if (index === 0) return <Shield className="w-5 h-5 text-[#7c3aed] dark:text-[#8b5cf6]" />;
      if (index === 1) return <Cpu className="w-5 h-5 text-[#008ba3] dark:text-[#00f2fe]" />;
      return <CheckCircle2 className="w-5 h-5 text-[#059669] dark:text-[#10b981]" />;
    }
    // swarms
    if (index === 0) return <Cpu className="w-5 h-5 text-[#059669] dark:text-[#10b981]" />;
    if (index === 1) return <Network className="w-5 h-5 text-[#008ba3] dark:text-[#00f2fe]" />;
    return <Zap className="w-5 h-5 text-[#7c3aed] dark:text-[#8b5cf6]" />;
  };

  const getMetricColor = (tab: "routing" | "security" | "swarms", index: number) => {
    if (tab === "routing") {
      return index === 1 ? "text-[#008ba3] dark:text-[#00f2fe]" : "text-[#059669] dark:text-[#10b981]";
    }
    if (tab === "security") {
      if (index === 0) return "text-[#7c3aed] dark:text-[#8b5cf6]";
      if (index === 1) return "text-[#008ba3] dark:text-[#00f2fe]";
      return "text-[#059669] dark:text-[#10b981]";
    }
    // swarms
    if (index === 0) return "text-[#059669] dark:text-[#10b981]";
    if (index === 1) return "text-[#008ba3] dark:text-[#00f2fe]";
    return "text-[#7c3aed] dark:text-[#8b5cf6]";
  };

  const activeCards = t.architecture.cards[activeTab];

  return (
    <section
      id="architecture"
      className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 py-16"
    >
      <div className="rounded-2xl bg-white/95 dark:bg-[#0f131d]/90 border border-slate-200 dark:border-[#3a494b]/40 p-8 md:p-12 backdrop-blur-md relative overflow-hidden shadow-lg">
        <div className="absolute top-0 inset-x-0 h-[1px] card-top-edge" />

        <div className="max-w-3xl mb-8">
          <span className="text-[11px] font-mono text-[#008ba3] dark:text-[#00f2fe] uppercase tracking-widest font-semibold">
            {t.architecture.eyebrow}
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-[#e0fdff] mt-1">
            {t.architecture.title}
          </h2>
          <p className="text-slate-600 dark:text-[#849495] mt-2 text-sm md:text-base leading-relaxed">
            {t.architecture.description}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-3 mb-8 border-b border-slate-200 dark:border-[#3a494b]/30 pb-4">
          <button
            type="button"
            onClick={() => setActiveTab("routing")}
            className={`px-4 py-2 rounded-lg font-mono text-xs md:text-sm font-medium transition-all cursor-pointer ${
              activeTab === "routing"
                ? "bg-cyan-50 dark:bg-[#00f2fe]/20 text-[#008ba3] dark:text-[#00f2fe] border border-cyan-300 dark:border-[#00f2fe]/50 font-semibold"
                : "text-slate-600 dark:text-[#849495] hover:text-slate-900 dark:hover:text-[#e0fdff] bg-slate-100 dark:bg-[#1c1f2a]/50"
            }`}
          >
            {t.architecture.tabs.routing}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("security")}
            className={`px-4 py-2 rounded-lg font-mono text-xs md:text-sm font-medium transition-all cursor-pointer ${
              activeTab === "security"
                ? "bg-purple-50 dark:bg-[#8b5cf6]/20 text-[#7c3aed] dark:text-[#8b5cf6] border border-purple-300 dark:border-[#8b5cf6]/50 font-semibold"
                : "text-slate-600 dark:text-[#849495] hover:text-slate-900 dark:hover:text-[#e0fdff] bg-slate-100 dark:bg-[#1c1f2a]/50"
            }`}
          >
            {t.architecture.tabs.security}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("swarms")}
            className={`px-4 py-2 rounded-lg font-mono text-xs md:text-sm font-medium transition-all cursor-pointer ${
              activeTab === "swarms"
                ? "bg-emerald-50 dark:bg-[#10b981]/20 text-[#059669] dark:text-[#10b981] border border-emerald-300 dark:border-[#10b981]/50 font-semibold"
                : "text-slate-600 dark:text-[#849495] hover:text-slate-900 dark:hover:text-[#e0fdff] bg-slate-100 dark:bg-[#1c1f2a]/50"
            }`}
          >
            {t.architecture.tabs.swarms}
          </button>
        </div>

        {/* Dynamic Architecture Display */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {activeCards.map((card, idx) => (
            <div
              key={card.title}
              className="p-5 rounded-xl bg-slate-50 dark:bg-[#0a0e18] border border-slate-200 dark:border-[#3a494b]/40 space-y-3 shadow-sm hover:border-slate-300 dark:hover:border-[#3a494b]/70 transition-colors"
            >
              <div className="flex items-center space-x-2">
                {getCardIcon(activeTab, idx)}
                <h4 className="font-semibold text-sm text-slate-900 dark:text-[#e0fdff]">
                  {card.title}
                </h4>
              </div>
              <p className="text-xs text-slate-600 dark:text-[#849495] leading-relaxed">
                {card.description}
              </p>
              <div className={`font-mono text-[11px] ${getMetricColor(activeTab, idx)}`}>
                {card.metric}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
