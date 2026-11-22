# HELIOS

Simulateur interactif du système solaire (reconstruction pédagogique).

**Note importante** : les sources originales n’ont pas été récupérées dans la session ou le workspace accessible. Cette version est une reconstruction fondée sur la description des fonctionnalités demandées, et non une récupération de code antérieur.

## Fonctionnalités

- Visualisation 3D interactive (Three.js / React Three Fiber)
- Navigation caméra (rotation, zoom, pan)
- Simulation temporelle avec contrôle de vitesse et inversion
- Sélection des astres et fiche d’information (FR/EN)
- Saturne et ses anneaux
- Jupiter et ses quatre grandes lunes
- Échelle visuelle ajustable
- Interface responsive

## Installation

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Limitations

- Orbites : approximations képlériennes simplifiées (pas d’éphémérides de précision).
- Pas de textures NASA, pas de visite guidée avancée, pas de création d’astres fictifs dans cette version de base.
- Modèle pédagogique uniquement.

## Licence

MIT (voir LICENSE).
