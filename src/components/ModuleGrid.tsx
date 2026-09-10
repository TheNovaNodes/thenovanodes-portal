"use client";

import React from "react";
import {
  Network,
  ShieldCheck,
  Boxes,
  Activity,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";

interface ModuleCardProps {
  name: string;
  category: string;
  badge: string;
  badgeColor: "emerald" | "violet" | "cyan";
  description: string;
  repoUrl: string;
  terminalHeader: string;
  terminalMetric: string;
  terminalRoute: { from: string; mid: string; to: string };
  payload: string;
  icon: React.ReactNode;
}

const modules: ModuleCardProps[] = [
  {
    name: "mcp-router",
    category: "DYNAMIC PROTOCOL GATEWAY",
    badge: "v2.1 ONLINE",
    badgeColor: "emerald",
    description:
      "Handles multiplexed Model Context Protocol streams, cross-agent RPC peer tunneling, and distributed semantic payload routing with guaranteed sub-5ms latency envelopes.",
    repoUrl: "https://github.com/TheNovaNodes/mcp-router",
    terminalHeader: "ROUTE_TOPOLOGY :: MCP_MESH",
    terminalMetric: "3.4ms latency",
    terminalRoute: {
      from: "agent://planner",
      mid: "router:multiplex",
      to: "agent://executor",
    },
    payload: '> payload: { "intent": "codegen", "consensus_quorum": 3 }',
    icon: <Network className="w-5 h-5 text-[#00f2fe]" />,
  },
  {
    name: "agent-vault",
    category: "ZERO-KNOWLEDGE CREDENTIAL ENCLAVE",
    badge: "agent-vault:kms",
    badgeColor: "violet",
    description:
      "Hardware-backed enclave security for autonomous workers. Orchestrates ephemeral token rotation, threshold signatures, and localized cryptographic delegation without exposing master keys.",
    repoUrl: "https://github.com/TheNovaNodes/agent-vault",
    terminalHeader: "ENCLAVE_STATE :: AES-256-GCM",
    terminalMetric: "KMS Locked",
    terminalRoute: {
      from: "enclave://kms",
      mid: "zkp:verify",
      to: "session_token::0x9f4a...e12d",
    },
    payload: "> zkp_proof: verified with 0-leakage enclave boundary [TTL: 42s]",
    icon: <ShieldCheck className="w-5 h-5 text-[#8b5cf6]" />,
  },
  {
    name: "google-jules-mcp",
    category: "AUTONOMOUS CONSENSUS & JULES MESH",
    badge: "jules-swarm:active",
    badgeColor: "emerald",
    description:
      "Coordinates decentralized multi-model swarm work units, raft-based decision quorums, and native Google Jules developer workspace automation bridges.",
    repoUrl: "https://github.com/TheNovaNodes/google-jules-mcp",
    terminalHeader: "CONSENSUS_ENGINE :: RAFT_QUORUM",
    terminalMetric: "9/9 Nodes Synced",
    terminalRoute: {
      from: "swarm://election",
      mid: "raft:quorum",
      to: "Leader Node [0x7A]",
    },
    payload: "> delegation: jules_workspace_task: #9941 dispatched",
    icon: <Boxes className="w-5 h-5 text-[#10b981]" />,
  },
  {
    name: "fxlab-landing",
    category: "EDGE GATEWAY & WEBHOOK INGRESS",
    badge: "fxlab-ingress:edge",
    badgeColor: "cyan",
    description:
      "Ultra-fast ingress proxy with dynamic edge rate-limiting, live bidirectional WebSocket telemetry pipelines, and unified admin observability for cluster operators.",
    repoUrl: "https://github.com/TheNovaNodes/fxlab-landing",
    terminalHeader: "INGRESS_PIPELINE :: REALTIME",
    terminalMetric: "64,210 req/sec",
    terminalRoute: {
      from: "ingress://edge",
      mid: "tls:1.3-0rtt",
      to: "ams-ix-01 [healthy]",
    },
    payload: "> 200 OK /api/v1/swarm/telemetry (0.4ms latency)",
    icon: <Activity className="w-5 h-5 text-[#00f2fe]" />,
  },
];

export function ModuleGrid() {
  return (
    <section id="modules" className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <span className="text-[11px] font-mono text-[#00f2fe] uppercase tracking-widest font-semibold">
            Modular Matrix
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-[#e0fdff] mt-1">
            Core Infrastructure Repositories
          </h2>
        </div>
        <p className="text-sm text-[#849495] max-w-md">
          Adopt modules independently or integrate into a unified mesh network.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {modules.map((m) => (
          <div
            key={m.name}
            className="relative group rounded-xl bg-[#0f131d]/85 backdrop-blur-md border border-[#3a494b]/40 p-6 md:p-8 flex flex-col justify-between overflow-hidden hover:border-[#00f2fe]/60 transition-all duration-300 shadow-lg hover:shadow-[0_0_24px_rgba(0,242,254,0.15)]"
          >
            {/* Top border accent highlight */}
            <div className="absolute top-0 inset-x-0 h-[1px] card-top-edge" />

            <div>
              {/* Header Info */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-[#1c1f2a] border border-[#3a494b]/50 flex items-center justify-center">
                    {m.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#e0fdff] flex items-center space-x-2">
                      <span>{m.name}</span>
                    </h3>
                    <p className="text-[10px] font-mono text-[#849495] tracking-wider uppercase">
                      {m.category}
                    </p>
                  </div>
                </div>

                <span
                  className={`px-2.5 py-1 rounded text-[11px] font-mono font-semibold tracking-wider uppercase border ${
                    m.badgeColor === "emerald"
                      ? "bg-[#10b981]/10 border-[#10b981]/30 text-[#10b981]"
                      : m.badgeColor === "violet"
                      ? "bg-[#8b5cf6]/10 border-[#8b5cf6]/30 text-[#8b5cf6]"
                      : "bg-[#00f2fe]/10 border-[#00f2fe]/30 text-[#00f2fe]"
                  }`}
                >
                  {m.badge}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-[#b9cacb] mb-6 leading-relaxed">
                {m.description}
              </p>
            </div>

            {/* Terminal Mini Code Block */}
            <div className="bg-[#0a0e18] rounded-lg border border-[#3a494b]/40 p-4 font-mono text-xs space-y-2">
              <div className="flex items-center justify-between text-[#849495] text-[11px] border-b border-[#3a494b]/30 pb-1.5 mb-2">
                <span>{m.terminalHeader}</span>
                <span className="text-[#00f2fe]">{m.terminalMetric}</span>
              </div>

              <div className="text-[#dfe2f1] flex items-center space-x-2 text-xs flex-wrap">
                <span className="text-[#00f2fe]">{m.terminalRoute.from}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#849495]" />
                <span className="text-[#8b5cf6]">{m.terminalRoute.mid}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#849495]" />
                <span className="text-[#10b981]">{m.terminalRoute.to}</span>
              </div>

              <div className="text-[#849495] text-[11px] pt-1 border-t border-[#3a494b]/20">
                {m.payload}
              </div>

              <div className="pt-2 flex justify-end">
                <a
                  href={m.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 text-xs text-[#00f2fe] hover:underline font-mono"
                >
                  <span>Inspect Source</span>
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
