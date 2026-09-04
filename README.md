# compliance-ops

The new company website (working name pending — see `PRD.md` §2).

- **`PRD.md`** — the source of truth: positioning, approved design tokens, copy, voice
  rules, framework data, SEO/geo specs, placeholders, acceptance criteria. **Read it
  first.**
- **`site/`** — the Astro project implementing the approved design.

## Quick start

```bash
cd site
npm install
npm run dev      # local dev server
npm run build    # static build (deploys to Vercel as-is)
```

## Current state

- Homepage fully implemented per the approved design canvas; stub pages for
  /sprints, /how-we-work, /regulations, /trust, /guides.
- Guides content collection wired (`site/src/content/guides/`) — empty, first three
  guide titles are in the PRD.
- Brand font: NOT yet wired. The font lives in `~/Pens/Vervana` (look in `public/` or
  `src/`); swap instructions in `site/src/styles/global.css` and PRD §2.
- Everything undecided is centralised in `site/src/config.ts` and marked with the
  amber `.ph` class in the UI. Grep for `PLACEHOLDER` before launch.

## Voice rule (enforced)

Marketing copy contains no engineering jargon — see PRD §3 for the banned-word list.
Before shipping copy changes: `grep -riE "engineer|pull request|terraform|kubernetes|merge|staging|pipeline|credential" site/src/components site/src/pages`
should return nothing on marketing pages.
