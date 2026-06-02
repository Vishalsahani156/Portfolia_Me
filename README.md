# Vishal Sahani — Portfolio

Personal developer portfolio showcasing my skills, projects, and experience as a **MERN Stack / Full-Stack Developer**.

**Live site:** [https://portfolia-me.vercel.app](https://portfolia-me.vercel.app)

---

## About

I build fast, accessible, and well-designed web applications — from polished UIs to reliable backends. This site is a single-page portfolio with smooth animations, responsive layout, and server-side rendering for strong SEO and first-load performance.

**Sections:** Hero · About · Skills · Projects · Experience · Services · Contact

---

## Tech stack

| Layer | Technologies |
|--------|----------------|
| **Framework** | [TanStack Start](https://tanstack.com/start) (React 19 + SSR) |
| **Routing** | [TanStack Router](https://tanstack.com/router) |
| **Styling** | Tailwind CSS v4, custom design tokens |
| **UI** | Radix UI, shadcn-style components |
| **Animation** | Framer Motion |
| **Build / Deploy** | Vite 7, Nitro (Vercel preset), Vercel |

Also used in projects and day-to-day work: **Node.js**, **TypeScript**, **MongoDB**, **Express**, **PostgreSQL**, **Socket.io**, **Docker**, **Git**

---

## Features

- Server-side rendering (SSR) on Vercel
- Responsive, mobile-first layout
- Section-based navigation with smooth scroll
- Animated hero with typing effect
- Project showcase, experience timeline, and contact section
- Accessible UI patterns (Radix primitives)

---

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) 20+ (22+ recommended)
- npm

### Install & run locally

```bash
git clone https://github.com/Vishalsahani156/Portfolia_Me.git
cd Portfolia_Me
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or the port shown in the terminal).

### Other scripts

```bash
npm run build    # Production build → .vercel/output
npm run preview  # Preview production build
npm run lint     # ESLint
npm run format   # Prettier
```

### Verify build before deploy

```bash
npm run build
ls .vercel/output/config.json .vercel/output/static .vercel/output/functions
```

---

## Deploy on Vercel

This app uses TanStack Start with SSR. Vercel needs Nitro’s **Vercel preset** (configured in `vite.config.ts`), not a static `dist/client` folder.

1. Push this repo to GitHub and [import it in Vercel](https://vercel.com/new).
2. **Framework preset:** Other (or auto-detect; `vercel.json` sets `framework: null`).
3. **Build command:** `npm run build` · **Install command:** `npm install`
4. Do **not** set Output Directory to `dist` or `public`. The build writes [Build Output API v3](https://vercel.com/docs/build-output-api/v3) artifacts to `.vercel/output`.
5. Remove any legacy `builds` / `routes` rewrites from an old Vercel project settings if you migrated from a static setup.

---

## Project structure

```
src/
├── components/portfolio/   # Page sections (Hero, About, Projects, …)
├── components/ui/          # Reusable UI primitives
├── routes/                 # TanStack Router file routes
├── lib/                    # Server config, utilities, error handling
├── server.ts               # Vercel/Nitro SSR entry (exports { fetch })
├── router.tsx
└── styles.css
```

---

## Connect

| | |
|---|---|
| **Portfolio** | [portfolia-me.vercel.app](https://portfolia-me.vercel.app) |
| **GitHub** | [@Vishalsahani156](https://github.com/Vishalsahani156) |
| **LinkedIn** | [vishal-sahani](https://www.linkedin.com/in/vishal-sahani-29b0862b1) |
| **X (Twitter)** | [@VishalS46912113](https://x.com/VishalS46912113) |

---

## License

This project is for personal portfolio use. Feel free to fork for learning; please don’t copy the content verbatim for your own portfolio.

---

Built with care by **Vishal Sahani** · [View live →](https://portfolia-me.vercel.app)
