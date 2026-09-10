"use client";

import React, { useState } from "react";
import { Terminal, Copy, Check, Activity, Shield, Cpu } from "lucide-react";

export function HeroSection() {
  const [copied, setCopied] = useState(false);
  const cliCommand = "npx @novanodes/cluster init";

  const handleCopy = () => {
    navigator.clipboard.writeText(cliCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 pt-12 md:pt-20 pb-16">
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6 md:space-y-8">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-[#1c1f2a]/90 border border-[#3a494b]/60 shadow-inner">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f2fe] opacity-80" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00f2fe]" />
          </span>
          <span className="text-[11px] font-mono text-[#e0fdff] uppercase tracking-widest font-semibold">
            Autonomous Multi-Agent Mesh Protocol
          </span>
        </div>

        {/* Headline */}
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight text-[#e0fdff]">
            TheNovaNodes <span className="text-[#849495] font-light">—</span>{" "}
            <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#00f2fe] via-[#6ff6ff] to-[#8b5cf6] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,242,254,0.25)]">
              Modular AI Agent Infrastructure
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-[#b9cacb] font-normal max-w-2xl mx-auto">
            Unified Routing, Secret Vaults, Consensus Engines
          </p>
        </div>

        {/* Description */}
        <p className="text-base md:text-lg text-[#849495] max-w-3xl leading-relaxed">
          Engineered for zero-trust microsecond agent orchestration. Execute
          multi-tenant Model Context Protocol pipelines, decentralized ZK
          credential rotation, and distributed verifiable agent consensus at
          planetary scale.
        </p>

        {/* Action Row & CLI Pill */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full pt-2">
          {/* Primary Action Button */}
          <a
            href="#modules"
            className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-[#00f2fe] text-[#00373a] font-semibold flex items-center justify-center space-x-2 shadow-[0_0_20px_rgba(0,242,254,0.3)] hover:shadow-[0_0_28px_rgba(0,242,254,0.5)] transition-all duration-200 active:scale-[0.98]"
          >
            <Terminal className="w-5 h-5" />
            <span>Explore Core Repos</span>
          </a>

          {/* CLI Pill with Copy Interaction */}
          <div
            onClick={handleCopy}
            className="w-full sm:w-auto flex items-center justify-between space-x-3 px-4 py-3 rounded-lg bg-[#1c1f2a]/90 border border-[#3a494b]/60 hover:border-[#00f2fe]/40 transition-colors group cursor-pointer"
          >
            <div className="flex items-center space-x-2 font-mono text-xs md:text-sm text-[#dfe2f1]">
              <span className="text-[#00f2fe]">$</span>
              <span className="text-[#e0fdff] font-medium tracking-tight">
                {cliCommand}
              </span>
            </div>
            <div className="flex items-center space-x-1.5 pl-2 border-l border-[#3a494b]/50">
              {copied ? (
                <div className="flex items-center space-x-1 text-[#10b981]">
                  <Check className="w-4 h-4" />
                  <span className="text-[11px] font-mono uppercase font-semibold">
                    COPIED
                  </span>
                </div>
              ) : (
                <Copy className="w-4 h-4 text-[#849495] group-hover:text-[#00f2fe] transition-colors" />
              )}
            </div>
          </div>
        </div>

        {/* Live Network Telemetry Strip */}
        <div className="pt-2">
          <div className="inline-flex flex-wrap items-center justify-center gap-x-6 gap-y-2 px-5 py-2 rounded-xl bg-[#0a0e18]/80 border border-[#3a494b]/30 text-[11px] font-mono text-[#b9cacb]">
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f2fe]" />
              <span>14,280 ACTIVE NODES</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
              <span>99.99% MESH UPTIME</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6]" />
              <span>&lt;11.8ms P99 CONSENSUS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
