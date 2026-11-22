# Architecture technique

## Structure

- `src/solar/data.ts` : données des corps (périodes, distances, rayons visuels, lunes)
- `src/solar/engine.ts` : calculs de position (anomalie moyenne → position approximative)
- `src/components/Planet.tsx` : rendu d’un corps + lunes + anneaux
- `src/components/SolarScene.tsx` : scène Three.js
- `src/App.tsx` : état global (temps, vitesse, sélection, langue) et interface

## Séparation

- Moteur astronomique : calculs purs dans `engine.ts`
- Données : `data.ts`
- Rendu : composants React Three Fiber
- Interface : `App.tsx` + CSS

## Stack

- React 19 + TypeScript
- Vite
- Three.js + @react-three/fiber + @react-three/drei
