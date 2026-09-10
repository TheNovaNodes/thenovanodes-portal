import React from "react";
import { Network, GitBranch } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0a0e18] border-t border-[#3a494b]/30 relative z-10 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-6 md:px-12 max-w-[1440px] mx-auto py-8 gap-4">
        {/* Brand & Copyright */}
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
          <div className="flex items-center space-x-2">
            <Network className="w-4 h-4 text-[#00f2fe]" />
            <span className="text-base font-semibold text-[#e0fdff]">
              TheNovaNodes
            </span>
          </div>
          <span className="hidden sm:inline text-[#3a494b]">|</span>
          <p className="text-xs text-[#849495]">
            © {new Date().getFullYear()} TheNovaNodes Foundation. High-Throughput Autonomous AI Agent Mesh Architecture.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono">
          <a
            href="https://github.com/TheNovaNodes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#b9cacb] hover:text-[#00f2fe] transition-colors flex items-center space-x-1"
          >
            <GitBranch className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <a
            href="https://github.com/TheNovaNodes/TheNovaNodes#architecture"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#b9cacb] hover:text-[#00f2fe] transition-colors"
          >
            Architecture
          </a>
          <a
            href="https://github.com/TheNovaNodes/mcp-router"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#b9cacb] hover:text-[#00f2fe] transition-colors"
          >
            mcp-router
          </a>
          <a
            href="https://github.com/TheNovaNodes/agent-vault"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#b9cacb] hover:text-[#00f2fe] transition-colors"
          >
            agent-vault
          </a>
        </div>
      </div>
    </footer>
  );
}
