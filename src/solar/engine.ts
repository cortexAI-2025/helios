import type { BodyData } from "./data";

export function calculatePosition(
  body: BodyData,
  timeYears: number,
  visualScale: number = 10
): [number, number, number] {
  if (body.semiMajorAxis === 0) return [0, 0, 0];

  const meanAnomaly = (2 * Math.PI * timeYears) / body.period;
  const eccentricAnomaly = meanAnomaly + body.eccentricity * Math.sin(meanAnomaly);

  const x = body.semiMajorAxis * (Math.cos(eccentricAnomaly) - body.eccentricity);
  const y = body.semiMajorAxis * Math.sqrt(1 - body.eccentricity ** 2) * Math.sin(eccentricAnomaly);

  const incl = (body.inclination * Math.PI) / 180;
  const z = y * Math.sin(incl);
  const yOrb = y * Math.cos(incl);

  return [x * visualScale, z * visualScale * 0.3, yOrb * visualScale];
}

export function getMoonPosition(
  parentPos: [number, number, number],
  moon: { distance: number; period: number },
  timeDays: number
): [number, number, number] {
  const angle = (2 * Math.PI * timeDays) / moon.period;
  const dist = moon.distance * 0.8;
  return [
    parentPos[0] + Math.cos(angle) * dist,
    parentPos[1],
    parentPos[2] + Math.sin(angle) * dist,
  ];
}
