"use client";

import React, { useState } from "react";
import { Network, Rocket, GitBranch, Check } from "lucide-react";

export function TopNav() {
  const [copied, setCopied] = useState(false);

  const handleDeployClick = () => {
    navigator.clipboard.writeText("npx @novanodes/cluster init");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <header className="bg-[#0b0f19]/85 backdrop-blur-md sticky top-0 z-50 border-b border-[#3a494b]/30">
      <div className="flex justify-between items-center w-full px-6 md:px-12 max-w-[1440px] mx-auto h-16">
        {/* Brand & Status Pill */}
        <div className="flex items-center space-x-4">
          <a href="#" className="flex items-center space-x-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-[#1c1f2a] border border-[#3a494b]/50 flex items-center justify-center text-[#00f2fe] group-hover:border-[#00f2fe]/80 transition-colors shadow-[0_0_12px_rgba(0,242,254,0.2)]">
              <Network className="w-4 h-4 text-[#00f2fe]" />
            </div>
            <span className="text-lg font-semibold tracking-tight text-[#e0fdff]">
              TheNovaNodes
            </span>
          </a>

          {/* Pulse Badge */}
          <div className="hidden sm:flex items-center space-x-2 px-2.5 py-1 rounded-full bg-[#1c1f2a]/80 border border-[#3a494b]/40">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]" />
            </span>
            <span className="text-[11px] font-mono font-semibold text-[#10b981] tracking-wider uppercase">
              v1.4.2 Cluster Online
            </span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm">
          <a
            href="#modules"
            className="text-[#00f2fe] border-b-2 border-[#00f2fe] pb-1 font-medium transition-colors"
          >
            Modules
          </a>
          <a
            href="#architecture"
            className="text-[#b9cacb] hover:text-[#e0fdff] transition-colors pb-1"
          >
            Architecture
          </a>
          <a
            href="#telemetry"
            className="text-[#b9cacb] hover:text-[#e0fdff] transition-colors pb-1"
          >
            Telemetry
          </a>
          <a
            href="https://github.com/TheNovaNodes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#b9cacb] hover:text-[#e0fdff] transition-colors pb-1 flex items-center space-x-1"
          >
            <span>GitHub Org</span>
          </a>
        </nav>

        {/* Trailing Actions */}
        <div className="flex items-center space-x-3">
          <a
            href="https://github.com/TheNovaNodes/TheNovaNodes"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-[#3a494b]/50 text-[#b9cacb] hover:text-[#e0fdff] hover:border-[#849495] transition-colors text-xs font-mono"
          >
            <GitBranch className="w-3.5 h-3.5" />
            <span>Profile</span>
          </a>

          <button
            type="button"
            onClick={handleDeployClick}
            className="bg-[#00f2fe] text-[#00373a] hover:bg-[#00dce6] px-4 py-2 rounded-lg text-sm font-semibold flex items-center space-x-2 transition-all duration-200 shadow-[0_0_16px_rgba(0,242,254,0.35)] active:scale-[0.98] cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-[#00373a]" />
                <span>Command Copied!</span>
              </>
            ) : (
              <>
                <Rocket className="w-4 h-4 text-[#00373a]" />
                <span>Deploy Cluster</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
