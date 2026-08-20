import { describe, expect, it } from "vitest";
import { aboutMe, contactInfo, siteInfo, treatments } from "@/data/siteData";

describe("siteData", () => {
  it("har giltig bokningslänk till Bokadirekt", () => {
    expect(siteInfo.bookingUrl).toMatch(/^https:\/\/www\.bokadirekt\.se\//);
  });

  it("har verifierade företagsuppgifter", () => {
    expect(siteInfo.businessName).toBe("Harmoni och Balans");
    expect(aboutMe.name).toBe("Annica Hansson");
    expect(contactInfo.address).toContain("Stockholm");
    expect(contactInfo.phone.length).toBeGreaterThan(6);
    expect(contactInfo.email).toContain("@");
  });

  it("har unika id:n", () => {
    const ids = treatments.map((t) => t.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("har komplett och giltig data per behandling", () => {
    for (const treatment of treatments) {
      expect(treatment.name.trim()).not.toBe("");
      expect(treatment.duration.trim()).not.toBe("");
      expect(treatment.price).toMatch(/kr/);
      expect(treatment.description.trim().length).toBeGreaterThan(20);
      expect(treatment.icon.trim()).not.toBe("");
      expect(["standard", "fotmassage"]).toContain(treatment.group);
    }
  });

  it("har behandlingar i båda grupperna", () => {
    expect(treatments.filter((t) => t.group === "standard").length).toBeGreaterThan(0);
    expect(treatments.filter((t) => t.group === "fotmassage").length).toBeGreaterThan(0);
  });
});
