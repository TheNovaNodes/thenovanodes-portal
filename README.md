---
module_type: Web Application / Portal
status: Active
protocol: HTTP / Next.js
primary_capability: Official Web Portal & Showcase for TheNovaNodes AI Agent Infrastructure
requires: Node.js >= 20
works_with: Next.js 16, React 19, Tailwind CSS v4, Framer Motion, Model Context Protocol
last_verified: 2026-09-10
---

# TheNovaNodes Portal 🌌

Official web portal and interactive architecture showcase for **TheNovaNodes** AI Agent Infrastructure Suite.

Built on **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**, designed in collaboration with **Google Stitch AI** adhering to the [`DESIGN.md`](./DESIGN.md) specification.

---

## Capabilities & Architecture 🏗️

- **Real-Time Cluster Observability:** Live pulse status indicators for cluster health and node availability.
- **Interactive MCP Matrix:** Direct exploration of core repositories:
  - [`mcp-router`](https://github.com/TheNovaNodes/mcp-router): Dynamic Protocol Gateway with sub-5ms latency.
  - [`agent-vault`](https://github.com/TheNovaNodes/agent-vault): Zero-Knowledge Credential Enclave.
  - [`google-jules-mcp`](https://github.com/TheNovaNodes/google-jules-mcp): Autonomous Consensus & Jules Swarm Mesh.
  - [`fxlab-landing`](https://github.com/TheNovaNodes/fxlab-landing): Edge Gateway & Webhook Ingress.
- **Terminal Simulator:** Quickstart CLI interaction with clipboard feedback.
- **Strict Design System:** Cyber Cyan (`#00F2FE`), Electric Violet (`#8B5CF6`), and Deep Void (`#070913`) aesthetics codified in [`DESIGN.md`](./DESIGN.md).

---

## Getting Started 🚀

### Prerequisites
- Node.js >= 20
- npm >= 10

### Development
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the portal.

### Testing
```bash
npm run test
```

### Production Build
```bash
npm run build
npm run start
```

---

## Security & Compliance 🛡️

- Strict Content-Security and Permissions-Policy headers configured in `next.config.ts`.
- Zero client-side master secrets exposure.
- All dependencies verified and audited.
