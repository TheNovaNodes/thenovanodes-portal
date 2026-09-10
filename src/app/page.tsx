import React from "react";
import { TopNav } from "@/components/TopNav";
import { HeroSection } from "@/components/HeroSection";
import { ModuleGrid } from "@/components/ModuleGrid";
import { ArchitectureSection } from "@/components/ArchitectureSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopNav />
      <main className="flex-1">
        <HeroSection />
        <ModuleGrid />
        <ArchitectureSection />
      </main>
      <Footer />
    </div>
  );
}
