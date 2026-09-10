"use client";

import React, { useState } from "react";
import { Cpu, Shield, Network, Zap, CheckCircle2 } from "lucide-react";

export function ArchitectureSection() {
  const [activeTab, setActiveTab] = useState<"routing" | "security" | "swarms">(
    "routing"
  );

  return (
    <section
      id="architecture"
      className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 py-16"
    >
      <div className="rounded-2xl bg-[#0f131d]/90 border border-[#3a494b]/40 p-8 md:p-12 backdrop-blur-md relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-[1px] card-top-edge" />

        <div className="max-w-3xl mb-8">
          <span className="text-[11px] font-mono text-[#00f2fe] uppercase tracking-widest font-semibold">
            Decoupled Topology
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-[#e0fdff] mt-1">
            Zero-Trust Agent Mesh Architecture
          </h2>
          <p className="text-[#849495] mt-2 text-sm md:text-base leading-relaxed">
            TheNovaNodes separates the orchestrator, credential enclaves, and tool
            gateways into independent micro-runtimes communicating over high-speed
            MCP streams.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-3 mb-8 border-b border-[#3a494b]/30 pb-4">
          <button
            type="button"
            onClick={() => setActiveTab("routing")}
            className={`px-4 py-2 rounded-lg font-mono text-xs md:text-sm font-medium transition-all cursor-pointer ${
              activeTab === "routing"
                ? "bg-[#00f2fe]/20 text-[#00f2fe] border border-[#00f2fe]/50"
                : "text-[#849495] hover:text-[#e0fdff] bg-[#1c1f2a]/50"
            }`}
          >
            01. Multiplexed Routing
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("security")}
            className={`px-4 py-2 rounded-lg font-mono text-xs md:text-sm font-medium transition-all cursor-pointer ${
              activeTab === "security"
                ? "bg-[#8b5cf6]/20 text-[#8b5cf6] border border-[#8b5cf6]/50"
                : "text-[#849495] hover:text-[#e0fdff] bg-[#1c1f2a]/50"
            }`}
          >
            02. Enclave Security
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("swarms")}
            className={`px-4 py-2 rounded-lg font-mono text-xs md:text-sm font-medium transition-all cursor-pointer ${
              activeTab === "swarms"
                ? "bg-[#10b981]/20 text-[#10b981] border border-[#10b981]/50"
                : "text-[#849495] hover:text-[#e0fdff] bg-[#1c1f2a]/50"
            }`}
          >
            03. Autonomous Swarms
          </button>
        </div>

        {/* Dynamic Architecture Display */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {activeTab === "routing" && (
            <>
              <div className="p-5 rounded-xl bg-[#0a0e18] border border-[#3a494b]/40 space-y-3">
                <div className="flex items-center space-x-2 text-[#00f2fe]">
                  <Network className="w-5 h-5" />
                  <h4 className="font-semibold text-sm">Unified MCP Gateway</h4>
                </div>
                <p className="text-xs text-[#849495] leading-relaxed">
                  Single HTTP/SSE multiplexer on port 8090 routes agent calls to
                  underlying daemons without port collision or process leaks.
                </p>
                <div className="font-mono text-[11px] text-[#10b981]">
                  ✓ Sub-5ms stream latency
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#0a0e18] border border-[#3a494b]/40 space-y-3">
                <div className="flex items-center space-x-2 text-[#8b5cf6]">
                  <Shield className="w-5 h-5" />
                  <h4 className="font-semibold text-sm">Granular ACL Matrix</h4>
                </div>
                <p className="text-xs text-[#849495] leading-relaxed">
                  Strict agent filtering ensures only authorized bots can access
                  sensitive tools like DNS renewal, mailbox writes, or code deployment.
                </p>
                <div className="font-mono text-[11px] text-[#00f2fe]">
                  ✓ Zero-trust caller authentication
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#0a0e18] border border-[#3a494b]/40 space-y-3">
                <div className="flex items-center space-x-2 text-[#10b981]">
                  <Zap className="w-5 h-5" />
                  <h4 className="font-semibold text-sm">Hot-Reload Multiplexing</h4>
                </div>
                <p className="text-xs text-[#849495] leading-relaxed">
                  Add, update, or decommission MCP servers on the fly without
                  restarting active agent conversation sessions.
                </p>
                <div className="font-mono text-[11px] text-[#10b981]">
                  ✓ 99.99% uptime availability
                </div>
              </div>
            </>
          )}

          {activeTab === "security" && (
            <>
              <div className="p-5 rounded-xl bg-[#0a0e18] border border-[#3a494b]/40 space-y-3">
                <div className="flex items-center space-x-2 text-[#8b5cf6]">
                  <Shield className="w-5 h-5" />
                  <h4 className="font-semibold text-sm">Ephemeral Bearer Tokens</h4>
                </div>
                <p className="text-xs text-[#849495] leading-relaxed">
                  Access keys rotate automatically with strict time-to-live envelopes,
                  preventing token leakage even during malicious code inspection.
                </p>
                <div className="font-mono text-[11px] text-[#8b5cf6]">
                  ✓ Enclave memory isolation
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#0a0e18] border border-[#3a494b]/40 space-y-3">
                <div className="flex items-center space-x-2 text-[#00f2fe]">
                  <Cpu className="w-5 h-5" />
                  <h4 className="font-semibold text-sm">Zero-Trace Auditing</h4>
                </div>
                <p className="text-xs text-[#849495] leading-relaxed">
                  Every tool execution logs an immutable audit event into encrypted
                  WAL SQLite, allowing forensic tracking of agent actions.
                </p>
                <div className="font-mono text-[11px] text-[#00f2fe]">
                  ✓ Cryptographic event proofs
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#0a0e18] border border-[#3a494b]/40 space-y-3">
                <div className="flex items-center space-x-2 text-[#10b981]">
                  <CheckCircle2 className="w-5 h-5" />
                  <h4 className="font-semibold text-sm">Deadlock Protection</h4>
                </div>
                <p className="text-xs text-[#849495] leading-relaxed">
                  Mandatory kernel-level SIGKILL timeouts on network operations
                  eliminate hung subprocesses and resource exhaustion.
                </p>
                <div className="font-mono text-[11px] text-[#10b981]">
                  ✓ Hardened SIGKILL guards
                </div>
              </div>
            </>
          )}

          {activeTab === "swarms" && (
            <>
              <div className="p-5 rounded-xl bg-[#0a0e18] border border-[#3a494b]/40 space-y-3">
                <div className="flex items-center space-x-2 text-[#10b981]">
                  <Cpu className="w-5 h-5" />
                  <h4 className="font-semibold text-sm">Google Jules Delegation</h4>
                </div>
                <p className="text-xs text-[#849495] leading-relaxed">
                  Offload heavy cloud refactoring and test-driven development to
                  asynchronous Google Jules cloud workers via native MCP tools.
                </p>
                <div className="font-mono text-[11px] text-[#10b981]">
                  ✓ Multi-hour async tasks
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#0a0e18] border border-[#3a494b]/40 space-y-3">
                <div className="flex items-center space-x-2 text-[#00f2fe]">
                  <Network className="w-5 h-5" />
                  <h4 className="font-semibold text-sm">Raft Consensus Gates</h4>
                </div>
                <p className="text-xs text-[#849495] leading-relaxed">
                  Critical infrastructure changes require multi-agent quorum confirmation
                  before commits or deployments are dispatched.
                </p>
                <div className="font-mono text-[11px] text-[#00f2fe]">
                  ✓ Multi-model validation
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#0a0e18] border border-[#3a494b]/40 space-y-3">
                <div className="flex items-center space-x-2 text-[#8b5cf6]">
                  <Zap className="w-5 h-5" />
                  <h4 className="font-semibold text-sm">Red Team Self-Audits</h4>
                </div>
                <p className="text-xs text-[#849495] leading-relaxed">
                  Autonomous quarantine and code verification loops run before PRs
                  reach the ZaVLab approval gate.
                </p>
                <div className="font-mono text-[11px] text-[#8b5cf6]">
                  ✓ Pre-push lint & race checks
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
