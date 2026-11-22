import { describe, it, expect } from "vitest";
import { calculatePosition } from "../solar/engine";
import { SOLAR_SYSTEM } from "../solar/data";

describe("orbital calculations", () => {
  it("places the Sun at origin", () => {
    const sun = SOLAR_SYSTEM[0];
    const pos = calculatePosition(sun, 1);
    expect(pos[0]).toBeCloseTo(0);
    expect(pos[1]).toBeCloseTo(0);
    expect(pos[2]).toBeCloseTo(0);
  });

  it("moves Earth away from origin", () => {
    const earth = SOLAR_SYSTEM.find((b) => b.id === "earth")!;
    const pos = calculatePosition(earth, 0.25);
    expect(Math.hypot(pos[0], pos[2])).toBeGreaterThan(0);
  });
});
