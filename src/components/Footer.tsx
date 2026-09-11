"use client";

import React from "react";
import { Network, GitBranch } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-100/90 dark:bg-[#0a0e18] border-t border-slate-200 dark:border-[#3a494b]/30 relative z-10 mt-auto transition-colors duration-200">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-6 md:px-12 max-w-[1440px] mx-auto py-8 gap-4">
        {/* Brand & Copyright */}
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
          <div className="flex items-center space-x-2">
            <Network className="w-4 h-4 text-[#008ba3] dark:text-[#00f2fe]" />
            <span className="text-base font-semibold text-slate-900 dark:text-[#e0fdff]">
              TheNovaNodes
            </span>
          </div>
          <span className="hidden sm:inline text-slate-300 dark:text-[#3a494b]">|</span>
          <p className="text-xs text-slate-500 dark:text-[#849495]">
            © {new Date().getFullYear()} {t.footer.copyright}
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono">
          <a
            href="https://github.com/TheNovaNodes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 dark:text-[#b9cacb] hover:text-[#008ba3] dark:hover:text-[#00f2fe] transition-colors flex items-center space-x-1"
          >
            <GitBranch className="w-3.5 h-3.5" />
            <span>{t.footer.github}</span>
          </a>
          <a
            href="https://github.com/TheNovaNodes/TheNovaNodes#architecture"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 dark:text-[#b9cacb] hover:text-[#008ba3] dark:hover:text-[#00f2fe] transition-colors"
          >
            {t.footer.architecture}
          </a>
          <a
            href="https://github.com/TheNovaNodes/mcp-router"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 dark:text-[#b9cacb] hover:text-[#008ba3] dark:hover:text-[#00f2fe] transition-colors"
          >
            {t.footer.mcpRouter}
          </a>
          <a
            href="https://github.com/TheNovaNodes/agent-vault"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 dark:text-[#b9cacb] hover:text-[#008ba3] dark:hover:text-[#00f2fe] transition-colors"
          >
            {t.footer.agentVault}
          </a>
        </div>
      </div>
    </footer>
  );
}
