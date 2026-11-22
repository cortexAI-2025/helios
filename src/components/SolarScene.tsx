import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Planet } from "./Planet";
import { SOLAR_SYSTEM } from "../solar/data";

interface SceneProps {
  time: number;
  visualScale: number;
  selectedId: string | null;
  onSelect: (id: string) => void;
  follow: boolean;
}

export function SolarScene({ time, visualScale, selectedId, onSelect, follow }: SceneProps) {
  return (
    <Canvas camera={{ position: [0, 30, 50], fov: 60 }} style={{ background: "#000011" }}>
      <ambientLight intensity={0.3} />
      <pointLight position={[0, 0, 0]} intensity={2} color="#FFF5E0" />
      <Stars radius={200} depth={50} count={3000} factor={4} saturation={0} fade speed={0.5} />
      {SOLAR_SYSTEM.map((body) => (
        <Planet
          key={body.id}
          body={body}
          time={time}
          visualScale={visualScale}
          onSelect={onSelect}
          selected={selectedId === body.id}
          follow={follow && selectedId === body.id}
        />
      ))}
      <OrbitControls enablePan enableZoom enableRotate makeDefault />
    </Canvas>
  );
}
