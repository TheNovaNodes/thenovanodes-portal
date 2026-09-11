import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import Home from "./page";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/providers/ThemeProvider";

function renderWithProviders(ui: React.ReactElement) {
  return render(
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <LanguageProvider>{ui}</LanguageProvider>
    </ThemeProvider>
  );
}

describe("TheNovaNodes Portal", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it("renders main headline and branding in default English", () => {
    renderWithProviders(<Home />);
    expect(screen.getAllByText(/TheNovaNodes/i)[0]).toBeInTheDocument();
    expect(
      screen.getByText(/Modular AI Agent Infrastructure/i)
    ).toBeInTheDocument();
  });

  it("renders core infrastructure modules", () => {
    renderWithProviders(<Home />);
    expect(screen.getAllByText("mcp-router")[0]).toBeInTheDocument();
    expect(screen.getAllByText("agent-vault")[0]).toBeInTheDocument();
    expect(screen.getAllByText("google-jules-mcp")[0]).toBeInTheDocument();
    expect(screen.getAllByText("fxlab-landing")[0]).toBeInTheDocument();
  });

  it("renders architecture section and quickstart CLI command", () => {
    renderWithProviders(<Home />);
    expect(
      screen.getByText(/Zero-Trust Agent Mesh Architecture/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/npx @novanodes\/cluster init/i)
    ).toBeInTheDocument();
  });

  it("toggles language between English and Russian", () => {
    renderWithProviders(<Home />);

    // Check English initial state
    expect(screen.getByText(/Core Infrastructure Repositories/i)).toBeInTheDocument();

    // Find and click language toggle button
    const langBtn = screen.getByTitle(/switch language/i);
    fireEvent.click(langBtn);

    // Verify Russian texts appear
    expect(screen.getByText(/Ключевые Репозитории Инфраструктуры/i)).toBeInTheDocument();
    expect(screen.getByText(/Модульная Архитектура AI-Агентов/i)).toBeInTheDocument();

    // Toggle back to English
    fireEvent.click(langBtn);
    expect(screen.getByText(/Core Infrastructure Repositories/i)).toBeInTheDocument();
  });

  it("persists and restores language preference from localStorage", () => {
    localStorage.setItem("novanodes_lang", "ru");
    renderWithProviders(<Home />);
    expect(
      screen.getByText(/Ключевые Репозитории Инфраструктуры/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Модульная Архитектура AI-Агентов/i)
    ).toBeInTheDocument();
  });

  it("renders theme toggle button and handles click", () => {
    renderWithProviders(<Home />);
    const themeBtn = screen.getByTitle(/toggle theme/i);
    expect(themeBtn).toBeInTheDocument();
    fireEvent.click(themeBtn);
  });
});

