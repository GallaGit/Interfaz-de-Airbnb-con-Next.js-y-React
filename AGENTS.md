<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Cursor Cloud specific instructions

This repo is a Next.js 16 + React 19 app (TypeScript, Tailwind CSS v4, App Router, `src/` dir) — an Airbnb-style interface. Source lives under `src/app/`.

Standard commands (see `package.json` scripts):
- Run (dev): `npm run dev` — serves on `http://localhost:3000` with hot reload.
- Lint: `npm run lint` (ESLint via `eslint-config-next`).
- Build: `npm run build` (uses Turbopack).
- Start (prod build): `npm run start`.

Notes:
- The startup update script runs `npm install`, so dependencies are already installed; just start the dev server.
- There are no automated test suites configured yet (no `test` script).
