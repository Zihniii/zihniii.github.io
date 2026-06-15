# Zihni Aryanto Putra Buana — Portfolio

A premium personal portfolio website for internship applications in Business Analysis, Data Analytics, Strategic Planning, Product Management, Digital Transformation, and Product Growth.

Built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**. Static export compatible for GitHub Pages deployment.

## Sections

1. **Hero** — Who I am, what I do, why read further
2. **About** — Narrative on analytical thinking and business problem solving
3. **Analytics Projects** — Consulting-style case studies with Problem → Analysis → Solution → Impact
4. **Product Projects** — Product-driven projects emphasizing ownership and decision-making
5. **Skills** — Analytics, Business, Technical, and Tools categories
6. **Experience** — Timeline layout (editable)
7. **Achievements** — Competition results and recognition
8. **Contact** — Email, LinkedIn, GitHub

## Quick Start

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Generates static site in `out/` directory.

## GitHub Pages Deployment

1. Push to `main` branch (GitHub Actions auto-deploys)
2. Or manually: `npm run build` then deploy `out/` folder
3. Set `NEXT_PUBLIC_BASE_PATH=/repo-name` if deploying to a subdirectory

## Customization

- **Personal info**: Update components in `components/`
- **Experience**: Edit `components/Experience.tsx`
- **Resume**: Place `resume.pdf` in `public/` and update link in `components/Hero.tsx`
- **Colors**: Edit `tailwind.config.ts`
