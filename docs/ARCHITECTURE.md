# 🌌 TheNovaNodes Web Portal — Architecture Specification

```
Module:         thenovanodes-portal
Version:        1.0.0
Author:         TheNovaNodes Foundation
Classification: Autonomous AI Agent Ecosystem Showcase & Gateway
Status:         Production Ready (Stitch AI Codified)
```

---

## 1. System Topology Overview 🌐

`thenovanodes-portal` serves as the official public entrypoint and interactive architectural showcase for **TheNovaNodes** autonomous multi-agent infrastructure suite.

```mermaid
graph TD
    Client["🌐 Client Browser (Desktop / Mobile)"] -->|HTTPS / TLS 1.3| Edge["⚡ Edge Ingress / Cloudflare Proxy"]
    Edge -->|HTTP/2 Proxy :3000| NextServer["🚀 Next.js 16 Production Runtime (Node.js 22 / Turbopack)"]
    
    subgraph Core Mesh Ecosystem
        NextServer -.->|Showcase Link| AntigravityAgent["Pure Go Swarm Engine (antigravity-telegram-agent)"]
        NextServer -.->|Showcase Link| MCPRouter["Dynamic Protocol Gateway (mcp-router :8090)"]
        NextServer -.->|Showcase Link| AgentVault["ZK Credential Enclave (agent-vault :8086)"]
        NextServer -.->|Showcase Link| GoogleJules["Asynchronous Jules Worker (google-jules-mcp)"]
    end

    subgraph Autonomous Bot Administration
        NovaBot["🧠 Nova (NovaNodes_brobot)"] -->|Account Supremacy & CI/CD| NextServer
        ZaVLab["👤 ЗавЛаб"] -->|Architectural Direction & Approvals| NovaBot
    end
```

---

## 2. Component Hierarchy & Layout 🏗️

The portal is architectured around pure React 19 server/client boundaries with decoupled provider abstractions:

```mermaid
graph TD
    RootLayout["app/layout.tsx (Server Component)"] --> ThemeProv["ThemeProvider (next-themes)"]
    ThemeProv --> LangProv["LanguageProvider (useSyncExternalStore)"]
    
    LangProv --> TopNav["components/TopNav.tsx (Client)"]
    LangProv --> MainContent["main (Page Container)"]
    LangProv --> Footer["components/Footer.tsx (Client)"]
    
    TopNav --> LangToggle["Globe EN/RU Switcher"]
    TopNav --> ThemeToggle["Sun/Moon Theme Switcher"]
    TopNav --> DeployCTA["npx @novanodes/cluster init CTA"]
    
    MainContent --> Hero["components/HeroSection.tsx (Client)"]
    MainContent --> Modules["components/ModuleGrid.tsx (Client)"]
    MainContent --> Architecture["components/ArchitectureSection.tsx (Client)"]
    
    Modules --> AgentCard["antigravity-telegram-agent Card"]
    Modules --> MCPCard["mcp-router Card"]
    Modules --> VaultCard["agent-vault Card"]
    Modules --> JulesCard["google-jules-mcp Card"]
    
    Architecture --> TabRouting["01. Multiplexed Routing Tab"]
    Architecture --> TabSecurity["02. Enclave Security Tab"]
    Architecture --> TabSwarms["03. Autonomous Swarms Tab"]
```

---

## 3. Hydration-Safe Bilingual Localization & Theme Engine 🧠

To guarantee zero hydration mismatch warnings between server static generation (`○ /`) and client dynamic preferences, state synchronization follows the strict `useSyncExternalStore` contract:

```mermaid
sequenceDiagram
    autonumber
    participant Server as Next.js SSG / SSR
    participant Browser as Browser Client
    participant Store as LanguageStore (useSyncExternalStore)
    participant DOM as Hydrated DOM Tree

    Server->>Browser: Send pre-rendered HTML (Default "en")
    Note over Browser: DOM painted, suppressHydrationWarning active
    Browser->>Store: Initialize LanguageProvider
    Store->>Browser: Read localStorage["novanodes_lang"] / navigator.language
    alt Persisted Language is "ru"
        Store-->>DOM: Reactive re-render with Russian Translations
        Note over DOM: Smooth seamless swap, zero flicker
    else Persisted Language is "en" or empty
        Store-->>DOM: Maintain English dictionary
    end
    Browser->>Store: User clicks LanguageToggle (EN <-> RU)
    Store->>Browser: Update localStorage["novanodes_lang"] & emitChange()
    Store-->>DOM: Re-render UI components across entire mesh
```

---

## 4. Design System Specification (Stitch AI) 🎨

Adhering strictly to [`DESIGN.md`](../DESIGN.md):

* **Cyber Cyan (`#00F2FE`):** Primary highlight for routing nodes, interactive terminal badges, active links, and pulse rings.
* **Electric Violet (`#8B5CF6`):** Secondary enclave accent for cryptographic modules (`agent-vault`) and KMS state.
* **Kinetic Emerald (`#10B981`):** Consensus status and cluster health indicator (`Cluster Online`, `99.99% Mesh Uptime`).
* **Deep Void (`#070913` / `#0A0E18`):** Ultra-dark high-contrast terminal background minimizing eye fatigue for autonomous operators.
* **Light Palette:** Clean high-contrast developer slate theme with smooth 200ms transition curves.

---

## 5. Security Enclave & Quality Gates 🛡️

* **HTTP Security Envelopes (`next.config.ts`):**
  * `Content-Security-Policy`: Restricts scripts, styles, object types, and restricts frame embedding (`frame-ancestors 'none'`).
  * `Strict-Transport-Security`: Enforces TLS with `max-age=63072000; includeSubDomains; preload`.
  * `X-Content-Type-Options: nosniff`.
  * `X-Frame-Options: DENY`.
  * `Referrer-Policy: strict-origin-when-cross-origin`.
  * `Permissions-Policy: camera=(), microphone=(), geolocation=()`.
  * `X-Powered-By`: Stripped to prevent server fingerprinting.

* **Autonomous Quality Gate CI (`.github/workflows/ci.yml`):**
  * **Gate 1:** ESLint 9 Flat Config + `eslint-config-next/core-web-vitals` (0 warnings tolerance).
  * **Gate 2:** Vitest automated test suite (`src/app/page.test.tsx`).
  * **Gate 3:** Turbopack Production Compilation (`next build`).
  * **Git Flow Blood Rule:** All changes deployed strictly via PRs with ЗавЛаб approval.
