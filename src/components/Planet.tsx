import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { type BodyData, type MoonData } from "../solar/data";
import { calculatePosition, getMoonPosition } from "../solar/engine";

interface PlanetProps {
  body: BodyData;
  time: number;
  visualScale: number;
  onSelect: (id: string) => void;
  selected: boolean;
  follow: boolean;
}

export function Planet({ body, time, visualScale, onSelect, selected }: PlanetProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const pos = useMemo(() => calculatePosition(body, time, visualScale), [body, time, visualScale]);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.position.set(...pos);
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group>
      <mesh
        ref={meshRef}
        position={pos}
        onClick={(e) => {
          e.stopPropagation();
          onSelect(body.id);
        }}
      >
        <sphereGeometry args={[body.radius * (selected ? 1.15 : 1), 32, 32]} />
        <meshStandardMaterial
          color={body.color}
          emissive={body.id === "sun" ? body.color : "#000000"}
          emissiveIntensity={body.id === "sun" ? 0.8 : 0}
        />
      </mesh>
      {body.hasRings && (
        <mesh position={pos} rotation={[Math.PI / 2.2, 0, 0]}>
          <ringGeometry args={[body.radius * 1.4, body.radius * 2.2, 64]} />
          <meshStandardMaterial color="#C9B896" side={THREE.DoubleSide} transparent opacity={0.7} />
        </mesh>
      )}
      {body.moons?.map((moon) => (
        <Moon
          key={moon.id}
          moon={moon}
          parentPos={pos}
          timeDays={time * 365.25}
          onSelect={() => onSelect(body.id)}
        />
      ))}
    </group>
  );
}

function Moon({
  moon,
  parentPos,
  timeDays,
  onSelect,
}: {
  moon: MoonData;
  parentPos: [number, number, number];
  timeDays: number;
  onSelect: () => void;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const pos = useMemo(
    () => getMoonPosition(parentPos, moon, timeDays),
    [parentPos, moon, timeDays]
  );

  useFrame(() => {
    if (meshRef.current) meshRef.current.position.set(...pos);
  });

  return (
    <mesh ref={meshRef} position={pos} onClick={(e) => { e.stopPropagation(); onSelect(); }}>
      <sphereGeometry args={[moon.radius * 0.4, 16, 16]} />
      <meshStandardMaterial color={moon.color} />
    </mesh>
  );
}
