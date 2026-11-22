import { useState, useEffect, useCallback } from "react";
import { SolarScene } from "./components/SolarScene";
import { SOLAR_SYSTEM } from "./solar/data";
import "./App.css";

type Lang = "en" | "fr";

export default function App() {
  const [time, setTime] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [playing, setPlaying] = useState(true);
  const [reverse, setReverse] = useState(false);
  const [visualScale, setVisualScale] = useState(8);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [lang, setLang] = useState<Lang>("fr");
  const [follow, setFollow] = useState(false);

  useEffect(() => {
    if (!playing) return;
    const interval = setInterval(() => {
      setTime((t) => t + (reverse ? -1 : 1) * speed * 0.01);
    }, 50);
    return () => clearInterval(interval);
  }, [playing, speed, reverse]);

  const selected = SOLAR_SYSTEM.find((b) => b.id === selectedId);

  const t = useCallback(
    (en: string, fr: string) => (lang === "fr" ? fr : en),
    [lang]
  );

  return (
    <div className="app">
      <header>
        <h1>HELIOS</h1>
        <p>{t("Interactive Solar System Simulator", "Simulateur interactif du système solaire")}</p>
        <button onClick={() => setLang(lang === "fr" ? "en" : "fr")}>
          {lang === "fr" ? "EN" : "FR"}
        </button>
      </header>

      <div className="main">
        <div className="canvas-container">
          <SolarScene
            time={time}
            visualScale={visualScale}
            selectedId={selectedId}
            onSelect={setSelectedId}
            follow={follow}
          />
        </div>

        <aside className="panel">
          <div className="controls">
            <button onClick={() => setPlaying(!playing)}>{playing ? t("Pause", "Pause") : t("Play", "Lecture")}</button>
            <button onClick={() => setReverse(!reverse)}>{reverse ? t("Forward", "Avant") : t("Reverse", "Arrière")}</button>
            <label>
              {t("Speed", "Vitesse")}
              <input type="range" min={0.1} max={10} step={0.1} value={speed} onChange={(e) => setSpeed(parseFloat(e.target.value))} />
              <span>{speed.toFixed(1)}x</span>
            </label>
            <label>
              {t("Visual scale", "Échelle visuelle")}
              <input type="range" min={4} max={20} step={0.5} value={visualScale} onChange={(e) => setVisualScale(parseFloat(e.target.value))} />
            </label>
            <button onClick={() => setFollow(!follow)}>
              {follow ? t("Free camera", "Caméra libre") : t("Follow selected", "Suivre sélection")}
            </button>
            <button onClick={() => { setTime(0); setSelectedId(null); }}>
              {t("Reset", "Réinitialiser")}
            </button>
          </div>

          {selected && (
            <div className="info">
              <h2>{lang === "fr" ? selected.nameFr : selected.name}</h2>
              <p>{lang === "fr" ? selected.descriptionFr : selected.description}</p>
              <ul>
                <li>{t("Period", "Période")} : {selected.period} {t("years", "ans")}</li>
                <li>{t("Distance", "Distance")} : {selected.semiMajorAxis} AU</li>
                {selected.moons && <li>{t("Moons", "Lunes")} : {selected.moons.map((m) => m.name).join(", ")}</li>}
                {selected.hasRings && <li>{t("Has rings", "Possède des anneaux")}</li>}
              </ul>
            </div>
          )}

          <div className="list">
            <h3>{t("Bodies", "Corps")}</h3>
            {SOLAR_SYSTEM.map((b) => (
              <button key={b.id} className={selectedId === b.id ? "active" : ""} onClick={() => setSelectedId(b.id)}>
                {lang === "fr" ? b.nameFr : b.name}
              </button>
            ))}
          </div>
        </aside>
      </div>

      <footer>
        <small>
          {t(
            "Educational model — not a high-precision ephemeris. Orbits are simplified Keplerian approximations.",
            "Modèle pédagogique — pas une éphéméride de haute précision. Les orbites sont des approximations képlériennes simplifiées."
          )}
        </small>
      </footer>
    </div>
  );
}
