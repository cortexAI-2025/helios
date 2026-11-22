export interface BodyData {
  id: string;
  name: string;
  nameFr: string;
  radius: number;
  color: string;
  semiMajorAxis: number;
  period: number;
  eccentricity: number;
  inclination: number;
  moons?: MoonData[];
  hasRings?: boolean;
  description: string;
  descriptionFr: string;
}

export interface MoonData {
  id: string;
  name: string;
  radius: number;
  color: string;
  distance: number;
  period: number;
}

export const SOLAR_SYSTEM: BodyData[] = [
  { id: "sun", name: "Sun", nameFr: "Soleil", radius: 5, color: "#FDB813", semiMajorAxis: 0, period: 0, eccentricity: 0, inclination: 0, description: "The central star of the Solar System.", descriptionFr: "L'étoile centrale du système solaire." },
  { id: "mercury", name: "Mercury", nameFr: "Mercure", radius: 0.4, color: "#8C7853", semiMajorAxis: 0.39, period: 0.24, eccentricity: 0.206, inclination: 7.0, description: "The smallest and innermost planet.", descriptionFr: "La plus petite planète et la plus proche du Soleil." },
  { id: "venus", name: "Venus", nameFr: "Vénus", radius: 0.95, color: "#E6C229", semiMajorAxis: 0.72, period: 0.62, eccentricity: 0.007, inclination: 3.4, description: "The hottest planet with a thick atmosphere.", descriptionFr: "La planète la plus chaude, avec une atmosphère dense." },
  { id: "earth", name: "Earth", nameFr: "Terre", radius: 1, color: "#2E86AB", semiMajorAxis: 1, period: 1, eccentricity: 0.017, inclination: 0, moons: [{ id: "moon", name: "Moon", radius: 0.27, color: "#C0C0C0", distance: 2.5, period: 27.3 }], description: "Our home planet.", descriptionFr: "Notre planète." },
  { id: "mars", name: "Mars", nameFr: "Mars", radius: 0.53, color: "#C1440E", semiMajorAxis: 1.52, period: 1.88, eccentricity: 0.093, inclination: 1.9, description: "The red planet.", descriptionFr: "La planète rouge." },
  { id: "jupiter", name: "Jupiter", nameFr: "Jupiter", radius: 2.5, color: "#D4A373", semiMajorAxis: 5.2, period: 11.86, eccentricity: 0.048, inclination: 1.3, moons: [{ id: "io", name: "Io", radius: 0.3, color: "#E8C547", distance: 3.5, period: 1.77 }, { id: "europa", name: "Europa", radius: 0.25, color: "#A8D5E5", distance: 4.5, period: 3.55 }, { id: "ganymede", name: "Ganymede", radius: 0.4, color: "#8B7355", distance: 5.5, period: 7.15 }, { id: "callisto", name: "Callisto", radius: 0.38, color: "#6B5B4F", distance: 6.5, period: 16.69 }], description: "The largest planet, with four major moons.", descriptionFr: "La plus grande planète, avec quatre grandes lunes." },
  { id: "saturn", name: "Saturn", nameFr: "Saturne", radius: 2.1, color: "#E8D5A3", semiMajorAxis: 9.58, period: 29.46, eccentricity: 0.054, inclination: 2.5, hasRings: true, description: "Famous for its extensive ring system.", descriptionFr: "Célèbre pour son système d'anneaux." },
  { id: "uranus", name: "Uranus", nameFr: "Uranus", radius: 1.6, color: "#4FD0E7", semiMajorAxis: 19.2, period: 84.01, eccentricity: 0.047, inclination: 0.8, description: "An ice giant tilted on its side.", descriptionFr: "Une géante de glace penchée sur le côté." },
  { id: "neptune", name: "Neptune", nameFr: "Neptune", radius: 1.55, color: "#3D5A80", semiMajorAxis: 30.05, period: 164.8, eccentricity: 0.009, inclination: 1.8, description: "The farthest major planet.", descriptionFr: "La planète majeure la plus éloignée." }
];
