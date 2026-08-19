# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# The single truth , you should never disobey
    1. You will never ever push or commit anything 
    2. Claude will not add itslef as any attirbute not as co-auther or anything anywhere not in commit history or anywhere , claude should not even mention itslef anywhere

## Project status

This is a **greenfield project — no code has been scaffolded yet.** The repository currently contains only two authoritative specification documents. The task is to build the site described in them.

- `design-brief-kurogane-kobo.md` — **how the site looks and behaves** (tech, palette, typography, layout, pages, motion, acceptance criteria).
- `content-spec-kamakura-no-ha.md` — **what content and terminology fills it** (blades, craft stages, glossary, verified copy strings, what is deliberately cut).

**Both are the source of truth. Read both fully before writing any code.** When a decision is ambiguous, the brief/spec wins over your own defaults. The specs are written in a mix of English (instructions to the build agent) and Japanese (verbatim copy to use).

## What is being built

**鎌倉の刃 (Kamakura no Ha)** — a frontend-only site for a traditional Japanese swordsmith's atelier. Japanese-first, editorial, "ink on paper" aesthetic. It presents blades, the craft, and a path to *commission* a piece. It is **not a store.**

## Tech stack (locked — do not substitute)

- **Next.js App Router** + **TypeScript** + **Tailwind CSS**. No Vite, no React Router, no Pages Router.
- **Server Components by default.** `"use client"` only for the four interactive islands: the 刀身図 blade-anatomy diagram (main island), the catalogue filter, the mobile 暖簾 menu, and the contact form.
- Content lives as **MDX / typed data files in the repo, statically generated.** No CMS, no backend, no fetch-at-runtime.
- Fonts loaded via `next/font` (Google Fonts).

### Commands (once scaffolded — standard Next.js)

```bash
npm run dev      # local dev server
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint (next lint)
```

There is no test suite defined in the briefs; verification is by the acceptance criteria (design brief §10, content spec §10), not automated tests.

## Hard constraints (easy to violate — enforce actively)

These are the rules a generic build will break. Treat them as build gates, not suggestions.

1. **Not a store.** No cart, no checkout, no price-as-hero, no 購入/Buy button. Every blade path ends in 御問合せ / 御誂え (inquiry / commission) — a contact form. Contact is frontend-only: `mailto:` or a form provider (Formspree / Web3Forms), no server route.

2. **Japanese-first copy.** Every surface is natural Japanese — including metadata (`<title>`, meta description, OG), 404, empty, and error states. Do **not** write English and translate. Register is a humble, dignified craftsman (丁寧語・謙譲語, 御 honorifics). Japanese punctuation only (、。「」). Latin characters appear only for measurements, years, and the romaji under the logo.

3. **Use verified copy verbatim.** Prefer the exact strings in content-spec §8 and design-brief §8 over agent-generated literary Japanese. **Zero invented terms** — every blade name, blade-anatomy label, and process term must match the content-spec §7 glossary exactly. Do not invent master names, founding dates, or provenance (content-spec §1) — evoke the Kamakura era, never forge a pedigree.

4. **"Ink on paper," not "dark forge."** Ground is paper (`--kinari`), text is ink (`--sumi`). The screen goes dark in **exactly one place**: the 焼き入れ (quenching) block on the 匠の技 page, in `--ai` indigo — not generic black. Max 6 palette tokens; 朱 (`--shu`) is the seal mark only, < 2% of any screen. See design-brief §3 for the named CSS variables.

5. **Signature element:** the 刃文 (hamon) hairline — a single fine wavy rule — is the site's only divider and the through-line of the diagram.

6. **Typography is Mincho.** Zen Old Mincho (display), Noto Serif JP (body), Zen Kaku Gothic New (small utility), EB Garamond (Latin). **Never Inter / Helvetica / system-sans** — that is the SaaS tell. Use 縦書き (`writing-mode: vertical-rl`) for the hero line, section titles, and pull-quotes, degrading to horizontal on narrow mobile.

7. **Banned as decoration:** gradients, glassmorphism, `box-shadow`, large rounded cards (border-radius ≤ 2px globally), parallax, scroll-jacking, stagger animations. Depth comes from 間 (negative space) and hairline rules. Honor `prefers-reduced-motion` everywhere.

8. **Must not look like:** an AI-generated site, generic restaurant, ecommerce template, startup landing page, or Western luxury brand translated into Japanese. No "Elevate your…", logo walls, two-CTA hero, testimonial carousels, or stat counters.

## Content curation principle

Content is **curated, not comprehensive** (content-spec §0, §9). Reference material covers ~40 knives, ~11 sword classes, a 12-step process, five regions — almost none of it appears. Depth is signalled by confident selection, not volume. Do not expand the catalogue or process back toward the full reference set. Adjacent crafts (wood, lacquer, paper) appear as **context sentences only, never sections.**

## v1 scope (ship this; defer the rest)

Home · 匠の技 (with the one dark 焼き入れ passage) · 刀剣 catalogue with **3** blades (刀 / 脇差 / 短刀) · **1** blade detail with the working interactive 刀身図 · **1** 手記 essay (the 廃刀令→庖丁 lineage piece) · 御問合せ form · footer · 404. Full nav, full metadata, all Japanese. P1/P2 items (FAQ, more essays, filtering polish, seasonal touches) are deferred — see design-brief §9.

## Global navigation (exact labels)

鎌倉の刃 (home) · 刀剣 (catalogue) · 匠の技 (craft & philosophy) · 鍛冶場 (about) · 手記 (journal) · 御問合せ (inquiry).

## Definition of done

The final test (design-brief §10): *would a Japanese speaker believe a real 刀鍛冶 built this — not a Western studio, not an AI?* Check work against both acceptance-criteria checklists (design-brief §10 and content-spec §10) before considering v1 complete.
