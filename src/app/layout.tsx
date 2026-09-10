import type { Metadata } from "next";
import { Geist, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TheNovaNodes — Modular AI Agent Infrastructure",
  description:
    "Unified Routing, Zero-Trust Secret Vaults, High-Speed Model Context Protocol Gateways, and Verifiable Autonomous Agent Consensus.",
  keywords: [
    "AI Agents",
    "Model Context Protocol",
    "MCP",
    "TheNovaNodes",
    "mcp-router",
    "agent-vault",
    "google-jules",
    "Next.js",
  ],
  authors: [{ name: "TheNovaNodes Foundation" }],
  openGraph: {
    title: "TheNovaNodes — Modular AI Agent Infrastructure",
    description:
      "Enterprise suite of high-throughput MCP gateways, consensus engines, and zero-trust secret vaults.",
    url: "https://thenovanodes.github.io",
    siteName: "TheNovaNodes",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${inter.variable} ${jetbrainsMono.variable} bg-[#0a0e18] text-[#dfe2f1] antialiased min-h-screen flex flex-col relative overflow-x-hidden selection:bg-[#00f2fe] selection:text-[#0a0e18]`}
      >
        <div className="fixed inset-0 telemetry-grid pointer-events-none z-0" />
        <div className="fixed inset-0 cosmic-radial pointer-events-none z-0" />
        {children}
      </body>
    </html>
  );
}
