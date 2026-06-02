# Portfolio

Personal developer portfolio showcasing my skills, projects, and experience as a full-stack developer using modern web technologies.

## Deploy on Vercel

This app uses TanStack Start with SSR. Vercel needs Nitro’s **Vercel preset** (see `vite.config.ts`), not a static `dist/client` folder.

1. Push this repo to GitHub and import it in Vercel.
2. Use **Framework Preset: Other** (or leave auto-detect; `vercel.json` sets `framework: null`).
3. **Build command:** `npm run build` · **Install command:** `npm install`
4. Do **not** set Output Directory to `dist` or `public`. The build writes [Build Output API v3](https://vercel.com/docs/build-output-api/v3) files to `.vercel/output`.
5. Remove any legacy `builds` / `routes` rewrites from an old `vercel.json` in the Vercel dashboard.

Verify locally before pushing:

```bash
npm install
npm run build
ls .vercel/output/config.json .vercel/output/static .vercel/output/functions
```
