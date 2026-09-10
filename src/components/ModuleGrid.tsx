"use client";

import React from "react";
import {
  Network,
  ShieldCheck,
  Boxes,
  Activity,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function ModuleGrid() {
  const { t } = useLanguage();

  const modules = [
    {
      name: "mcp-router",
      category: t.modules.items.mcpRouter.category,
      badge: t.modules.items.mcpRouter.badge,
      badgeColor: "emerald" as const,
      description: t.modules.items.mcpRouter.description,
      repoUrl: "https://github.com/TheNovaNodes/mcp-router",
      terminalHeader: t.modules.items.mcpRouter.terminalHeader,
      terminalMetric: t.modules.items.mcpRouter.terminalMetric,
      terminalRoute: {
        from: "agent://planner",
        mid: "router:multiplex",
        to: "agent://executor",
      },
      payload: t.modules.items.mcpRouter.payload,
      icon: <Network className="w-5 h-5 text-[#008ba3] dark:text-[#00f2fe]" />,
    },
    {
      name: "agent-vault",
      category: t.modules.items.agentVault.category,
      badge: t.modules.items.agentVault.badge,
      badgeColor: "violet" as const,
      description: t.modules.items.agentVault.description,
      repoUrl: "https://github.com/TheNovaNodes/agent-vault",
      terminalHeader: t.modules.items.agentVault.terminalHeader,
      terminalMetric: t.modules.items.agentVault.terminalMetric,
      terminalRoute: {
        from: "enclave://kms",
        mid: "zkp:verify",
        to: "session_token::0x9f4a...e12d",
      },
      payload: t.modules.items.agentVault.payload,
      icon: <ShieldCheck className="w-5 h-5 text-[#7c3aed] dark:text-[#8b5cf6]" />,
    },
    {
      name: "google-jules-mcp",
      category: t.modules.items.googleJules.category,
      badge: t.modules.items.googleJules.badge,
      badgeColor: "emerald" as const,
      description: t.modules.items.googleJules.description,
      repoUrl: "https://github.com/TheNovaNodes/google-jules-mcp",
      terminalHeader: t.modules.items.googleJules.terminalHeader,
      terminalMetric: t.modules.items.googleJules.terminalMetric,
      terminalRoute: {
        from: "swarm://election",
        mid: "raft:quorum",
        to: "Leader Node [0x7A]",
      },
      payload: t.modules.items.googleJules.payload,
      icon: <Boxes className="w-5 h-5 text-[#059669] dark:text-[#10b981]" />,
    },
    {
      name: "fxlab-landing",
      category: t.modules.items.fxlabLanding.category,
      badge: t.modules.items.fxlabLanding.badge,
      badgeColor: "cyan" as const,
      description: t.modules.items.fxlabLanding.description,
      repoUrl: "https://github.com/TheNovaNodes/fxlab-landing",
      terminalHeader: t.modules.items.fxlabLanding.terminalHeader,
      terminalMetric: t.modules.items.fxlabLanding.terminalMetric,
      terminalRoute: {
        from: "ingress://edge",
        mid: "tls:1.3-0rtt",
        to: "ams-ix-01 [healthy]",
      },
      payload: t.modules.items.fxlabLanding.payload,
      icon: <Activity className="w-5 h-5 text-[#008ba3] dark:text-[#00f2fe]" />,
    },
  ];

  return (
    <section id="modules" className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <span className="text-[11px] font-mono text-[#008ba3] dark:text-[#00f2fe] uppercase tracking-widest font-semibold">
            {t.modules.eyebrow}
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-[#e0fdff] mt-1">
            {t.modules.title}
          </h2>
        </div>
        <p className="text-sm text-slate-600 dark:text-[#849495] max-w-md">
          {t.modules.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {modules.map((m) => (
          <div
            key={m.name}
            className="relative group rounded-xl bg-white/95 dark:bg-[#0f131d]/85 backdrop-blur-md border border-slate-200 dark:border-[#3a494b]/40 p-6 md:p-8 flex flex-col justify-between overflow-hidden hover:border-[#00f2fe]/60 transition-all duration-300 shadow-md dark:shadow-lg hover:shadow-[0_0_24px_rgba(0,242,254,0.15)]"
          >
            {/* Top border accent highlight */}
            <div className="absolute top-0 inset-x-0 h-[1px] card-top-edge" />

            <div>
              {/* Header Info */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-[#1c1f2a] border border-slate-300 dark:border-[#3a494b]/50 flex items-center justify-center">
                    {m.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-[#e0fdff] flex items-center space-x-2">
                      <span>{m.name}</span>
                    </h3>
                    <p className="text-[10px] font-mono text-slate-500 dark:text-[#849495] tracking-wider uppercase">
                      {m.category}
                    </p>
                  </div>
                </div>

                <span
                  className={`px-2.5 py-1 rounded text-[11px] font-mono font-semibold tracking-wider uppercase border ${
                    m.badgeColor === "emerald"
                      ? "bg-emerald-50 dark:bg-[#10b981]/10 border-emerald-300 dark:border-[#10b981]/30 text-emerald-700 dark:text-[#10b981]"
                      : m.badgeColor === "violet"
                      ? "bg-purple-50 dark:bg-[#8b5cf6]/10 border-purple-300 dark:border-[#8b5cf6]/30 text-purple-700 dark:text-[#8b5cf6]"
                      : "bg-cyan-50 dark:bg-[#00f2fe]/10 border-cyan-300 dark:border-[#00f2fe]/30 text-cyan-700 dark:text-[#00f2fe]"
                  }`}
                >
                  {m.badge}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-600 dark:text-[#b9cacb] mb-6 leading-relaxed">
                {m.description}
              </p>
            </div>

            {/* Terminal Mini Code Block */}
            <div className="bg-[#0d1117] dark:bg-[#0a0e18] rounded-lg border border-slate-800 dark:border-[#3a494b]/40 p-4 font-mono text-xs space-y-2">
              <div className="flex items-center justify-between text-slate-400 dark:text-[#849495] text-[11px] border-b border-slate-800 dark:border-[#3a494b]/30 pb-1.5 mb-2">
                <span>{m.terminalHeader}</span>
                <span className="text-[#00f2fe]">{m.terminalMetric}</span>
              </div>

              <div className="text-[#dfe2f1] flex items-center space-x-2 text-xs flex-wrap">
                <span className="text-[#00f2fe]">{m.terminalRoute.from}</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                <span className="text-[#8b5cf6]">{m.terminalRoute.mid}</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                <span className="text-[#10b981]">{m.terminalRoute.to}</span>
              </div>

              <div className="text-slate-400 dark:text-[#849495] text-[11px] pt-1 border-t border-slate-800/80 dark:border-[#3a494b]/20">
                {m.payload}
              </div>

              <div className="pt-2 flex justify-end">
                <a
                  href={m.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 text-xs text-[#00f2fe] hover:underline font-mono"
                >
                  <span>{t.modules.inspectSource}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
