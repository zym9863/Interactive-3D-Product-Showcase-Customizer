[English](./README.md) | [简体中文](./README_zh.md)

# Interactive 3D Product Showcase & Customizer

This project demonstrates an interactive 3D product showcase and customizer using Three.js and Vite.

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start development server:

   ```bash
   npm run dev
   ```

3. Open your browser at `http://localhost:5173`

## Build & Deploy

To build for production (for deployment to Netlify, Vercel, etc.):

```bash
npm run build
```

The output will be in the `dist/` directory. You can preview the production build locally with:

```bash
npm run preview
```

Deploy the contents of the `dist/` folder to your preferred static hosting service.

## Features

- Orbit controls for scene navigation
- Sample cube with adjustable scale and color
- Sample GLTF model loader with adjustable scale via GUI

## Tech Stack

- Three.js
- Vite
- lil-gui
