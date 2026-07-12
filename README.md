# Portfolio Website

Personal portfolio site for Dmytro Mai, built with Next.js and Sanity CMS.

## Tech Stack

- **Next.js 16** — App Router, ISR, edge OG image generation
- **Sanity** — headless CMS with an embedded studio at `/studio`
- **Tailwind CSS 4** — styling via CSS variables with dark/light theme support
- **Motion** — scroll-triggered animations
- **Playwright** — end-to-end smoke tests
- **Lighthouse CI** — automated performance/accessibility audits

## Getting Started

```bash
pnpm install
pnpm dev
```

Requires environment variables:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=<your-project-id>
NEXT_PUBLIC_SANITY_DATASET=production
```

## Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start dev server |
| `pnpm build` | Production build |
| `pnpm lint` | Run ESLint |
| `pnpm test:e2e` | Run Playwright tests |
| `make gen` | Regenerate Sanity types |
