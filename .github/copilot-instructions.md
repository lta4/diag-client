## Purpose

This file guides automated coding agents (and maintainers) when making changes in this Create React App repository.

Keep edits small, run the dev server and build, and prefer progressive, non-destructive changes.

## Quick facts

- Project: React (Create React App)
- Location: repository root contains `package.json`, `README.md`, `public/`, and `src/`
- Important npm scripts (from `package.json`):
  - `npm install` — install dependencies
  - `npm start` — run dev server
  - `npm run build` — production build into `build/`
  - `npm test` — run tests

Environment:
- This project uses CRA env vars. Any client-visible env var must be prefixed with `REACT_APP_`.
- Songkick widget id: set `REACT_APP_SONGKICK_ID` in `.env.development` and `.env.production`.

## Safety & pre-edit checklist

Before making edits, an agent should:

1. Read the user's full request and the files you'll change. Do not assume intent.
2. Run `npm install` if node modules are missing.
3. Start the dev server (`npm start`) and reproduce the issue/feature locally.
4. After edits, run `npm run build` to catch compile/runtime bundling errors.
5. Run `npm test` (if tests exist) and verify no new failing tests.
6. Do not commit secrets or env values. If an env var is needed, instruct the user to add it to `.env*` files.

If any step fails and you cannot fix it locally, report the exact error and stack trace and stop.

## Project conventions & hotspots

- Styling: per-component CSS files live next to components under `src/components/**` and pages under `src/pages/**`.
- Lazy media pattern: `src/components/FeaturedMix/FeaturedMix.jsx` uses a poster→iframe lazy-load pattern. Follow this pattern for heavy embeds.
- Persistent audio UI: `src/components/StickyPlayer/StickyPlayer.jsx` manages the mini-player and global playback state.
- Visuals: `src/components/Visualizer/Visualizer.jsx` and canvas-based particles exist; these can be CPU-heavy—respect `prefers-reduced-motion` and throttle animations.
- Songkick: the Songkick widget injects DOM and inline styles. Prefer the wrapper/host component approach (or set the anchor in `public/index.html`) and use the provided `REACT_APP_SONGKICK_ID` env var.
- Contact form: uses Formspree (`@formspree/react`) — consent checkbox is enforced in the component.

Key files to consider when changing UI or embeds:

- `src/pages/Video/Video.jsx` — main video/hero page, FeaturedMix and overlays
- `src/components/FeaturedMix/FeaturedMix.jsx`
- `src/components/StickyPlayer/StickyPlayer.jsx`
- `src/components/Visualizer/Visualizer.jsx`
- `src/pages/LinkTree/LinkTree.jsx`
- `src/pages/Gallery/Gallery.jsx`
- `public/index.html` — static html anchor for some third-party embeds

## Editing guidelines for agents

- Make the minimal necessary change to fix the issue or implement the feature.
- Preserve existing coding style and CSS organization. Avoid large automated reformatting.
- If adding a dependency, prefer well-maintained, small libraries and update `package.json` accordingly.
- Add or update a small test for functional changes where feasible (unit or smoke test).
- Ensure accessibility: keyboard focus, ARIA labels for interactive elements, and `prefers-reduced-motion` support.

## PR checklist for agents

- Dev server runs and the feature reproduces locally.
- `npm run build` completes with no errors.
- `npm test` passes (or documented reason for skipping).
- No client-visible secrets introduced.
- Update `README.md` if developer-facing instructions changed (scripts, env vars, deployment).
- Provide a concise PR description explaining why the change was needed and how it was verified.

## Common pitfalls

- Songkick/third-party embeds: they may add inline styles and unexpected wrappers. Use a wrapper host element or the static `public/index.html` anchor to avoid brittle runtime DOM overrides.
- Visual canvas code can be CPU-heavy on mobile. Respect reduced-motion and throttle animation loops.
- Do not assume tests or linters beyond CRA defaults exist; run the build to validate changes.

## If you need help

See `README.md` for more context and deployment notes. If a change could have cross-cutting impact (player state, routing, global CSS vars), ask a human reviewer.

---

Requirements coverage for this task:

- Create or update `.github/copilot-instructions.md` with project-specific guidance — Done (this file).
