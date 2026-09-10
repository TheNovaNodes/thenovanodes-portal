---
name: "TheNovaNodes Portal Agent Rules"
description: "Directives and architecture for the official TheNovaNodes Portal"
trigger: "always_on"
---
# TheNovaNodes Web Portal

- **Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Framer Motion, Lucide React.
- **Brand Identity:** Defined strictly in `DESIGN.md` (Cyber Cyan `#00F2FE`, Electric Violet `#8B5CF6`, Kinetic Emerald `#10B981`, Deep Void `#070913`).
- **Engineering Standards:**
  - Zero-broken links, zero-hallucinated endpoints.
  - Interactive components with accessible ARIA attributes.
  - Type-safe components and unit tests via Vitest.
  - Strict Git Flow (NEVER push directly to main without PR and ZaVLab approval).
