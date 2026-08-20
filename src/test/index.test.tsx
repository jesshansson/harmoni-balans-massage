import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Index from "@/pages/Index";
import { siteInfo, treatments } from "@/data/siteData";

const renderPage = () =>
  render(
    <MemoryRouter>
      <Index />
    </MemoryRouter>
  );

describe("Startsidan", () => {
  it("har exakt en h1 med företagsnamnet", () => {
    renderPage();
    const headings = screen.getAllByRole("heading", { level: 1 });
    expect(headings).toHaveLength(1);
    expect(headings[0]).toHaveTextContent(siteInfo.businessName);
  });

  it("visar huvudrubrikerna", () => {
    renderPage();
    expect(screen.getByRole("heading", { name: "Om mig", level: 2 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Behandlingar", level: 2 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Kontakt", level: 2 })).toBeInTheDocument();
  });

  it("länkar till Bokadirekt i ny flik", () => {
    renderPage();
    const bookingLinks = screen
      .getAllByRole("link")
      .filter((link) => link.getAttribute("href") === siteInfo.bookingUrl);
    expect(bookingLinks.length).toBeGreaterThan(1);
    for (const link of bookingLinks) {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", expect.stringContaining("noopener"));
      expect(link.textContent).toContain("ny flik");
    }
  });

  it("har en hoppa-till-innehållet-länk och main-landmark", () => {
    renderPage();
    expect(screen.getByRole("link", { name: "Hoppa till innehållet" })).toHaveAttribute(
      "href",
      "#huvudinnehall"
    );
    expect(screen.getByRole("main")).toHaveAttribute("id", "huvudinnehall");
  });

  it("renderar alla behandlingar från siteData", () => {
    renderPage();
    for (const treatment of treatments) {
      const headings = screen.getAllByRole("heading", { name: treatment.name, level: 3 });
      expect(headings.length).toBeGreaterThan(0);
    }
  });
});
