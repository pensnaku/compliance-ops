# PRD — Compliance-Ops Marketing Site

**Status:** v1 · approved design, ready to build
**Owner:** Eedee Naku
**Repo purpose:** This folder is the working repo for the new company website. The Astro
project in `site/` implements the approved design. This PRD is the source of truth for
scope, copy, voice, and design tokens. A Claude Code session should be able to pick this
up and continue without further context.

---

## 1. What this company is

A hands-on compliance implementation firm ("compliance engineering" internally — see
voice rules before using that externally). GRC platforms (Vanta, Drata, Scytale, Kertos)
diagnose compliance gaps; consultancies write reports. This firm **builds the actual
fixes** — cloud infrastructure and code changes — and delivers every change for the
client's own team to review and approve. It never holds standing access to client
production systems.

- **Positioning line:** "Your compliance platform found the gaps. We close them."
- **Buyers:** CISOs, compliance leads, founders/COOs at mid-market companies (EU first,
  US/global too). NOT primarily developers.
- **Trust story (core differentiator, always present):** we build the fix → in a safe
  copy, never live → the client's team reviews and approves → evidence pack handed over
  → zero standing access, everything logged, every change reversible.
- **AI angle:** "AI drafts the work. A named specialist signs it." (speed + accountability)
- **Business model:** fixed-scope, fixed-price remediation sprints + monthly retainer.
  Entry offer (later page): a paid fixed-price assessment ("Blueprint") that produces a
  priced remediation backlog.

## 2. Brand

- **Name:** placeholder. Render as "Brandname" with the amber dotted-underline treatment
  wherever the real name goes. Candidates on file: TrueOps (trueops.io/.eu), TrueCheck
  (truecheck.com). Legal entity today: Vervana B.V. (Netherlands). Do not hardcode a
  final name; keep it in `src/config.ts`.
- **Logo:** hexagon-with-checkmark inline SVG (see design canvas / prototype), stroke
  style, green.
- **Font:** the brand font lives in `~/Pens/Vervana` (a Next.js project — look in
  `public/` or `src/` for font files). **Until that font is wired in**, use Google
  Fonts: `Instrument Serif` (display accents, italic) + `Schibsted Grotesk`
  (headings/body). All font choices go through CSS variables `--font-serif` /
  `--font-sans` in `src/styles/global.css` so the swap is a one-file change.
  When wiring the brand font: self-host as woff2 via `@font-face`, preload it, keep
  fallbacks with close metrics.

### Design tokens (approved — from the design canvas "Compliance Site Design")

```css
--bg: #faf9f6;          /* warm paper */
--bg-alt: #f3f1ec;      /* alternating section band */
--line: #e7e3db;        /* hairline borders */
--ink: #1c2430;         /* text */
--muted: #5c6672;       /* secondary text */
--faint: #8a919c;       /* captions */
--green: #0f5f4c;       /* accent — CTAs, accents, serif italics */
--green-dark: #0a4536;  /* hover */
--green-tint: #eef4f0;  /* highlighted cards */
--green-soft: #7ec8ab;  /* accents on dark */
--dark: #1c2430;        /* closing CTA band */
--amber: #b45309;       /* placeholder markers only — remove in production */
```

Aesthetic: light, warm, calm, premium professional-services. Serif italic green accents
on key phrases. Pill buttons. Hairlines, generous whitespace. **NOT a dev-tool look:**
no terminals, no monospace type, no dark-navy hero, no neon.

## 3. Voice rules (hard requirements)

Marketing copy must read for business buyers. **Banned in marketing copy:** engineer(s),
engineering, pull request, PR, merge/merged, Terraform, Kubernetes, codebase, staging,
branches, CI/CD, pipeline, production credentials, DevOps, WORM.
**Use instead:** "we build the fix", "your team reviews and approves", "a safe copy,
never live", "your live systems", "no standing access", "a named specialist",
"tamper-proof", "change record".
The technical substance stays — expressed in buyer language. Primary CTA everywhere:
**"Talk to a specialist"**. Never "book a demo", never "contact sales".
Tone: confident, plain, no fear-mongering, regulatory facts stated accurately
(see §5 — accuracy is a differentiator; the copy below is pre-checked, keep it).

## 4. Site structure (v1 scope = homepage; stubs for the rest)

Single homepage implementing the approved canvas, plus routing stubs for `/sprints`,
`/how-we-work`, `/regulations`, `/trust`, `/guides`. Sections in order:

1. **Nav:** logo+Brandname · Sprints · How we work · Regulations · Trust · [Talk to a specialist]
2. **Hero:** eyebrow "HANDS-ON COMPLIANCE" with rule line; H1 "Your compliance platform
   found the gaps." + serif italic green "We close them."; sub: "We don't hand you a
   report — we build the fix. Your team approves every change before it ships, and we
   never touch your live systems."; framework line "SOC 2 · ISO 27001 · GDPR · NIS2 ·
   DORA · EU AI ACT · MORE"; primary pill CTA + "How we work" text link; below a
   hairline: "WORKS WITH YOUR PLATFORM" → Scytale, Vanta, Drata, AWS, Azure, Google Cloud.
3. **Hero visual (right):** the "Change record #142 — Approved" evidence card (offset
   green-tint backdrop): three check rows — "NIS2 Art. 21(2) — tamper-proof audit logs /
   Records kept unaltered for 365 days", "Evidence pack attached / Ready for your auditor
   and your dashboard", "Reviewed and approved by your team / We never touch your live
   systems"; footer "Signed off by — A named specialist, accountable to you".
4. **Stats strip:** 3+ years inside compliance · 4 EU regimes covered · 0 standing access
   to your systems (serif numerals, hairline separators).
5. **The gap:** H2 "Everyone finds gaps. *We close them.*" + 3-node flow:
   "Your platform flags it (a failing control)" → "We build the fix (in a safe copy,
   never live)" [green tinted] → "Your team approves it (reviewed, approved, evidenced)".
6. **Remediation sprints** (bg-alt band): 6 cards, data-driven from `src/data/sprints.ts`:

   | Framework | Bullets | Price | Time |
   |---|---|---|---|
   | SOC 2 | Pass enterprise security reviews · Controls built, not just documented · Evidence ready for your auditor | from €20k | 4 weeks |
   | ISO 27001 | The globally recognised standard · Your security programme, implemented · Ready for the certification audit | from €25k | 6 weeks |
   | NIS2 | Tamper-proof audit logs · Incident-reporting readiness · Secure release and access controls | from €25k | 4–6 weeks |
   | DORA | Resilience to vendor outages · Safe, repeatable transactions · Failover that actually fails over | from €30k | 6 weeks |
   | GDPR | Encryption where it counts · Erasure that reaches every store · Data residency, enforced | from €25k | 4–6 weeks |
   | EU AI Act | AI decisions logged and traceable · Documentation regulators expect · Ready well before December 2027 | from €20k | 4–6 weeks |

   All prices are **placeholders — confirm before launch.**
   Retainer band (solid green): "Ongoing retainer — Controls kept green, evidence
   maintained, a specialist on call." — €5–12k / month (placeholder).
   "ALSO COVERED" strip: PCI DSS · HIPAA · ISO 42001 · ISO 27701 · Cyber Resilience Act ·
   TISAX — and whatever your customers ask for next.
7. **How we work:** H2 "How we work in your environment"; 5 numbered cards (serif italic
   numerals): Read-only discovery · A plan you approve first · Built away from your live
   systems · Your team reviews and approves · Evidence handed over. Guarantee pills:
   No standing access to your systems · Everything we do is logged · Every change
   reversible · You own everything we build. Line: "AI drafts the work. *A named
   specialist signs it.*" / "That's why sprints take weeks, not quarters."
8. **Trust** (bg-alt): H2 "Our own compliance, in public"; 6 status cards (dot + label +
   caption): ISO 27001 (amber dot, "certification in progress") · Indemnity and cyber
   insurance ("certificate on request") · Data processing agreement ("with SCCs where
   applicable") · Sub-processor list ("short and published") · Responsible disclosure
   ("security.txt published") · EU entity, EU data only ("registered in the Netherlands").
9. **Closing CTA** (dark band): eyebrow "STRAIGHT ANSWERS — NO SALES PITCH"; H2 "Bring us
   a finding. *We'll tell you how we'd fix it.*"; "Thirty minutes with the person who
   would actually do the work."; white pill "Book a call" → calendar link (placeholder).
10. **Footer:** nav links, legal links (Privacy, DPA, Sub-processors, security.txt),
    imprint: Vervana B.V. · Netherlands · KvK [PLACEHOLDER] · VAT [PLACEHOLDER] ·
    hello@[domain]. Note: KvK number on the site is a legal requirement in NL.

## 5. Regulatory copy — accuracy notes (do not "improve" these into being wrong)

- NIS2 incident clock is **24h early warning → 72h notification → 1-month report** (never
  say "24-hour notification"); obligations vary by member state.
- DORA applies to financial entities **since 17 Jan 2025**; it is outcome-based.
- EU AI Act high-risk obligations apply from **December 2027** (post-Omnibus); chatbot/
  content transparency and GPAI rules are already live. Frame as "prepare now", not panic.
- GDPR does **not** mandate EU-only hosting and prescribes no specific technique;
  "machine unlearning" is not a legal requirement. Erasure/encryption/residency are
  outcomes we implement.
- We are an implementation provider: certification/attestation stays with accredited
  auditors (say so in the footer).

## 6. Tech requirements

- **Stack:** Astro (v5, static output) + `@astrojs/sitemap`. Deploy target: **Vercel**
  (static; no adapter needed yet — add `@astrojs/vercel` + edge middleware only when geo
  goes in). Node 20+. No client framework; one small vanilla script for the mobile nav
  (and later the region toggle).
- **SEO:** semantic HTML, one `<h1>`; per-page `<title>`/description via `Base.astro`
  props; canonical URLs; OpenGraph tags; JSON-LD `Organization` + `ProfessionalService`;
  sitemap; robots.txt. Site URL placeholder in `src/config.ts` (domain TBD).
- **Content collections:** `src/content/guides/` (Markdown, schema: title, description,
  framework, pubDate, draft). One guide per framework is the SEO engine — titles on file:
  "NIS2 Article 21 → AWS, control by control", "Resilience patterns that survive your
  vendor's outage", "The right to erasure in a vector database". Guides are ungated.
  (Guides MAY use technical language — their audience is technical evaluators; the
  voice rules in §3 apply to marketing pages only.)
- **Geo-adaptive messaging (phase 2, spec'd now):** one URL, adapt in place, never
  redirect. Default = global copy (what gets indexed). EU signal → sub-headline stresses
  regulation/deadlines; US signal → stresses "unblock enterprise deals"/security reviews.
  Detection: Vercel edge geo header when adapter is added; fallback
  `Intl.DateTimeFormat().resolvedOptions().timeZone`; always a small persistent
  EU/US/Global toggle. No consent banner needed if nothing is stored/profiled.
- **Performance:** no external JS, system font fallbacks, preloaded fonts, images as SVG
  where possible. Lighthouse ≥ 95 across the board.

## 7. Placeholders to resolve before launch (marked with --amber in the UI)

1. Company/brand name (candidates: TrueOps, TrueCheck) + domain + logo final
2. All prices (sprints, retainer)
3. KvK number, VAT number, registered address
4. Calendar/booking link and hello@ email
5. Brand font from `~/Pens/Vervana` (then remove Google Fonts)
6. ISO 27001 target date on the trust card
7. Founder bio/photo (About section — not in v1 homepage; add with first case study)

## 8. Acceptance criteria for v1

- `npm run build` passes; static output deploys on Vercel untouched.
- Homepage matches the approved canvas (structure, tokens, copy) at 1440 and 390 widths;
  no horizontal scroll; nav collapses on mobile.
- Zero banned words (§3) anywhere on marketing pages — grep before shipping.
- All placeholder values visibly marked, none invented.
- Lighthouse: Performance/SEO/Accessibility/Best-practices ≥ 95.

## 9. Reference

- Approved design: Claude artifact "Compliance Site Design" (canvas with desktop hero,
  sections, mobile, and the two archived direction sketches).
- Earlier HTML prototype (superseded by the canvas but useful for section copy history):
  Claude artifact "vervana-site-prototype".
- Strategy context: positioning research, competitor teardown, pricing architecture, and
  regulatory fact-check live in the Cowork session "Vervana compliance pivot" (Aug 2026).
