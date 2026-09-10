import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Home from "./page";

describe("TheNovaNodes Portal", () => {
  it("renders main headline and branding", () => {
    render(<Home />);
    expect(screen.getAllByText(/TheNovaNodes/i)[0]).toBeInTheDocument();
    expect(
      screen.getByText(/Modular AI Agent Infrastructure/i)
    ).toBeInTheDocument();
  });

  it("renders core infrastructure modules", () => {
    render(<Home />);
    expect(screen.getAllByText("mcp-router")[0]).toBeInTheDocument();
    expect(screen.getAllByText("agent-vault")[0]).toBeInTheDocument();
    expect(screen.getAllByText("google-jules-mcp")[0]).toBeInTheDocument();
    expect(screen.getAllByText("fxlab-landing")[0]).toBeInTheDocument();
  });

  it("renders architecture section and quickstart CLI command", () => {
    render(<Home />);
    expect(
      screen.getByText(/Zero-Trust Agent Mesh Architecture/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/npx @novanodes\/cluster init/i)
    ).toBeInTheDocument();
  });
});
