# Ryze.fit — Mobile App

Consumer-facing mobile-first web app for the Ryze.fit fitness operating system.

## Stack
- React 18 + Vite 5 (live-reload dev server)
- lucide-react icons
- No backend — mock data in `src/data/mock.js`

## Run
```
docker compose -f docker-compose.base44.yml up -d --build
```
Preview served on host port 3000 → Vite dev server (5173) inside the container.

## Structure
- `src/App.jsx` — shell + bottom-nav tab routing
- `src/screens/` — Home, Train, Coach (AI), Discover (marketplace), Profile
- `src/components/` — BottomNav, TopBar
- `src/data/mock.js` — all mock data
- `src/index.css` — design system (dark, lime accent)

## Verify
- Phone-frame mobile layout renders on desktop, full-bleed on mobile widths
- Bottom nav switches between the 5 tabs; AI Coach center FAB opens chat
- Workouts/classes/trainers scroll horizontally; Coach chat accepts input
