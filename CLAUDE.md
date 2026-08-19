# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# The single truth , you should never disobey
    1. You will never ever push or commit anything 
    2. Claude will not add itslef as any attirbute not as co-auther or anything anywhere not in commit history or anywhere , claude should not even mention itslef anywhere

## Project status

The Next.js app is **scaffolded and building** (see `app/`, `components/`, `data/`, `lib/`). It has been rebuilt to the user's revised direction (below).

The two markdown docs — `design-brief-kurogane-kobo.md` and `content-spec-kamakura-no-ha.md` — are **reference for aesthetics and terminology only, NOT a binding contract.** The user has explicitly said the original spec was "just for understanding." Where the spec conflicts with the revised direction below (e.g. the spec's "not a store / no prices / no cart"), **the revised direction wins.** Still lean on the docs for the 和色 palette, the §7 blade/anatomy/process glossary (use exact kanji, no invented terms), and verified Japanese copy strings.

## What is being built

**鎌倉の刃 (Kamakura no Ha)** — a frontend-only, Japanese-first site: a **"home of blades & craftsmanship"** showcase with a visual, museum-exhibition feel. The narrative: a homepage **hero quote from a legendary master** (Miyamoto Musashi, 五輪書) → **knowledge of the blade** (origin & importance) → **blade types** → a blade detail page showing **how it is made**, a **mock price in yen (¥)**, and a **visual-only Add-to-cart button** (shows "籠に加えました", tracks nothing — no real cart/checkout).

## Tech stack (locked — do not substitute)

- **Next.js App Router** + **TypeScript** + **Tailwind CSS**. No Vite, no React Router, no Pages Router.
- **Server Components by default.** `"use client"` only for the interactive islands: the 刀身図 blade-anatomy diagram (main island), the catalogue filter, the mobile 暖簾 menu, the Add-to-cart button, and the contact form.
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

1. **Showcase with mock commerce (revised).** Each blade detail page shows a **mock yen price** (`lib/format.ts` → `formatYen`) and a **visual-only Add-to-cart button** (`components/AddToCartButton.tsx`). Do NOT build real checkout, payment, a persistent cart, or a cart page/badge unless asked. The 御問合せ contact page remains (frontend-only `mailto:`, no server route) but is no longer the mandatory endpoint for every blade. The homepage hero is a **quote**, not a price — prices live on catalogue/detail surfaces.

2. **Japanese-first copy.** Every surface is natural Japanese — including metadata (`<title>`, meta description, OG), 404, empty, and error states. Do **not** write English and translate. Register is a humble, dignified craftsman (丁寧語・謙譲語, 御 honorifics). Japanese punctuation only (、。「」). Latin characters appear only for measurements, years, and the romaji under the logo.

3. **Use verified copy verbatim.** Prefer the exact strings in content-spec §8 and design-brief §8 over agent-generated literary Japanese. **Zero invented terms** — every blade name, blade-anatomy label, and process term must match the content-spec §7 glossary exactly. Do not invent master names, founding dates, or provenance (content-spec §1) — evoke the Kamakura era, never forge a pedigree.

4. **Paper-and-ink identity, more visual.** Ground is paper (`--kinari`), text is ink (`--sumi`); keep the 和色 palette tokens (design-brief §3) as the identity. The user asked for a **more visual / photographic** feel, so `--ai` indigo may now be used for dramatic bands (the hero, the 焼き入れ stage) rather than exactly one place. Real photos are not yet available — `components/PhotoPlaceholder.tsx` marks photo-ready slots (swap for `next/image` when assets land in `/public`).

5. **Signature element:** the 刃文 (hamon) hairline — a single fine wavy rule — is the site's only divider and the through-line of the diagram.

6. **Typography is Mincho.** Zen Old Mincho (display), Noto Serif JP (body), Zen Kaku Gothic New (small utility), EB Garamond (Latin). **Never Inter / Helvetica / system-sans** — that is the SaaS tell. Use 縦書き (`writing-mode: vertical-rl`) for the hero line, section titles, and pull-quotes, degrading to horizontal on narrow mobile.

7. **Restraint still applies:** avoid glassmorphism, decorative `box-shadow`, large rounded cards (border-radius ≤ 2px globally), parallax, scroll-jacking, and stagger animations. Depth comes from 間 (negative space) and hairline rules. Honor `prefers-reduced-motion` everywhere. (Larger imagery and full-bleed bands are now welcome — this is a visual showcase.)

8. **Must not look like:** an AI-generated site, a generic startup landing page, or a Western luxury brand translated into Japanese. It *is* now a blade shop/showcase, so product plates with prices are expected — just keep the craft-catalogue (図録) register, not a SaaS one. No "Elevate your…", logo walls, testimonial carousels, or stat counters.

## Content curation principle

Still **curated, not comprehensive** — depth by confident selection, not volume. The catalogue now carries **6 blade types** (太刀 / 打刀 / 脇差 / 短刀 / 薙刀 / 槍) in `data/blades.ts`, each with a mock `priceYen` and a `makingNote`. Keep terms exact to the content-spec §7 glossary; do not balloon toward the full ~40-item reference set.

## Current structure

Home (hero quote → 日本刀の起源と意義 → 刀剣の種類 grid) · 刀剣 catalogue (`/token`, 6 plates + quiet category filter) · blade detail (`/token/[slug]`: 刀身図 → 造りの工程 → price + Add-to-cart) · 匠の技 (craft, one dark 焼き入れ passage, sources `data/process.ts`) · 鍛冶場 (about) · 手記 (journal, 1 essay) · 御問合せ (contact) · 404 / error. Shared data in `data/` (`blades`, `anatomy`, `process`, `journal`); helpers in `lib/` (`nav`, `format`).

## Global navigation (exact labels)

鎌倉の刃 (home) · 刀剣 (catalogue) · 匠の技 (craft & philosophy) · 鍛冶場 (about) · 手記 (journal) · 御問合せ (inquiry).

## Definition of done

The feel test still holds: *would a Japanese reader believe a real 刀鍛冶's house built this — not a Western studio, not an AI?* Use the design-brief §10 / content-spec §10 checklists as aesthetic guidance only — the store/no-price items there are **superseded** by the revised showcase-with-mock-commerce direction above.
