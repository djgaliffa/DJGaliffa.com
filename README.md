# DJGaliffa.com

The official website and digital press kit for DJ Galiffa: Pittsburgh Steelers
pregame DJ, open-format performer, and live entertainer available for national
bookings.

## Local development

This project uses Node.js 22 and pnpm.

```bash
pnpm install
pnpm run dev
```

Open `http://localhost:3000`.

## Verification

```bash
pnpm run build
pnpm run build:netlify
pnpm run lint
node --test tests/rendered-html.test.mjs
```

## Deployment

Netlify builds the standard Next.js application with the settings in
`netlify.toml`. The project is intentionally isolated from other DJ Galiffa
properties with its own GitHub repository and Netlify project.
