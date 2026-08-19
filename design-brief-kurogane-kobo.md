# 設計指示書 — 鎌倉の刃 (Kamakura no Ha)
## Design brief & build-agent prompt — a Japanese bladesmith's atelier

> **Name (chosen):** 鎌倉の刃 (Kamakura no Ha — "The Blade of Kamakura"). Use everywhere — nav logo, metadata `<title>`, OG tags, footer — with the romaji "Kamakura no Ha" set small beneath the seal mark. The name evokes the Kamakura period, the peak of Japanese swordsmithing; lean into that atmosphere, but see §6 (鍛冶場) on **not fabricating specific historical provenance.**

---

> **Companion doc:** content, terminology, and the curation decisions live in `content-spec-kamakura-no-ha.md`. Hand both to the build agent.

## 0. What this is (read first)

A **frontend-only Next.js App Router** site presenting a traditional Japanese swordsmith's atelier: its blades, its craft, its philosophy, and a path to **commission** a piece. The visitor should feel they have stepped through the shop curtain (暖簾) into a real workshop with centuries behind it — not a store, not a startup, not a museum gift shop.

**Hard constraint that shapes everything:** there is no backend. Therefore **this is not a store.** No cart, no checkout, no price-as-hero, no "購入" button that leads nowhere. Every blade leads to **御問合せ / 御誂え (inquiry / commission)** — a contact form. A smith takes commissions; a smith does not have a Buy Now button. This is the authentic answer *and* the technically honest one.

---

## 1. Non-negotiables (from the brief)

**Tech**
- Next.js **App Router** + TypeScript + Tailwind CSS. No Vite. No React Router.
- **Server Components by default.** `"use client"` only for genuinely interactive islands (see §7). The interactive blade diagram is the main client island; almost nothing else needs it.
- Static-friendly content: encyclopedia entries, journal posts, FAQ live as **MDX / typed data files in the repo**, statically generated. No CMS, no fetch-at-runtime.

**Language — the site is written in natural Japanese, Japanese-first**
- Every surface is Japanese: nav, headings, buttons, blade names & descriptions, about, journal, FAQ, contact, footer, **metadata (`<title>`, `<meta description>`, OG tags)**, and **error/empty/404 states**.
- **Do not write English and translate labels.** Write the copy in Japanese from the start, in the register of a humble, dignified craftsman (丁寧語・謙譲語). See §8 for register rules and example strings.
- Latin characters appear only where a Japanese reader would expect them: measurements (刃長 70.2 cm), years (慶応三年 / 1867), and the romaji under the logo. Nowhere else.

**Must NOT look like** (enforce actively): AI-generated site · generic restaurant · ecommerce template · startup landing page · Western luxury brand translated into Japanese.

**Avoid** (treat as build rules, not suggestions): gradients · glassmorphism · huge rounded cards · SaaS-style UI · overused animation · generic English-style marketing sections ("Elevate your…", "Trusted by", "Crafted with love", logo walls, two-CTA hero, testimonial carousels, stat counters).

---

## 2. The thesis (avoid the AI defaults on purpose)

AI-generated design clusters around three looks. One of them is **near-black background + a single bright vermilion/ember accent + a serif display face.** A "dark forge with ember highlights" lands *exactly* there and will read as AI slop no matter how good the code is. We deliberately do the opposite:

**The site is ink on paper — a swordsmith's record book (刀剣図録), not a dark-mode forge.**

- **Ground is paper** (生成り kinari), **type is ink** (墨 sumi). The blade sits on paper the way it does on a museum plate or in a smith's own catalogue.
- We **earn exactly one dark passage**: the 焼き入れ (quenching) section of the craft page, where fire lives in darkness. That is the *only* place the screen goes dark — and it's **藍鉄 indigo-black**, not generic black, because indigo (藍) is a native Japanese color. Boldness spent in one place.
- The **signature element** (the one thing this site is remembered by) is the **刃文 (hamon) hairline** — a single fine wavy rule, derived from a real hamon pattern (直刃 suguha / 湾れ notare), that recurs as the site's only divider and the through-line of the interactive diagram.

If a section starts to look like it could belong to any other subject, it's wrong. Pull every distinctive choice from the world of steel, fire, clay, and paper.

---

## 3. Palette (和色 — traditional color names, paper-first)

Use named CSS variables. Approximate hex; tune by eye. **Max 6 colors. 朱 (seal red) covers under 2% of any screen.**

| Token | 和色 | Hex (approx) | Use |
|---|---|---|---|
| `--kinari` | 生成り (undyed cloth) | `#E9E1CE` | primary page ground |
| `--sumi` | 墨 (ink) | `#211E1A` | primary text, mune/blade linework |
| `--keshizumi` | 消炭 (charcoal) | `#4A453E` | secondary text, captions |
| `--nibi` | 鈍色 (dull steel) | `#7C7E7A` | rules, blade grey, muted UI |
| `--ai` | 藍鉄 (indigo-iron) | `#232E36` | the single dark passage (焼き入れ), rare emphasis |
| `--shu` | 朱 (vermilion) | `#A83A29` | the seal / hanko mark only. Not a general accent. |

- No gradients anywhere. If a surface needs depth, it comes from **ma (間, negative space)** and hairline rules, not shadows. `box-shadow` is banned as decoration.
- Optional: a **very subtle** washi paper grain on `--kinari` (low-opacity SVG/noise). Subtle or skip — overdone paper texture is its own cliché.

---

## 4. Typography (the personality lives here)

**Display (headings, hero, pull-quotes):** a Mincho (明朝体) with brush character — **Zen Old Mincho** (elegant, high-contrast, traditional). Brush-accent alternative for a single hero line: **Klee One**. Load via `next/font` (Google Fonts).

**Body:** **Noto Serif JP** (Mincho). Long-form journal and craft copy set here.

**Utility (tiny nav, captions, measurements):** **Zen Kaku Gothic New** — a refined Gothic, used *sparingly* and small.

**Latin (measurements, years):** a quiet oldstyle serif — **EB Garamond**. **Never Inter / Helvetica / system-sans** anywhere; that's the SaaS tell.

Typesetting discipline:
- Japanese body: `line-height` ~1.9–2.0, `letter-spacing` ~0.04em. Japanese needs air.
- Use Japanese punctuation: 、。「」— never `,` `.` `""` in Japanese text.
- **縦書き (vertical text, `writing-mode: vertical-rl`)** for: the hero line, section eyebrows/titles, and pull-quotes. This is the single most authentically-Japanese, hardest-to-fake move on the site. Ensure it degrades to horizontal on narrow mobile where it would overflow, and that Latin/numbers inside vertical text use `text-orientation: upright` or `text-combine-upright` appropriately.

---

## 5. Layout & structure

Principles: **ma (間)** — generous emptiness is the primary tool, content breathes; **asymmetry** — off-center, print-like compositions, not centered hero stacks; **editorial, not app** — this reads like an exhibition catalogue (図録), not a dashboard. Border-radius ≤ 2px globally (effectively square). One accent, used like a seal.

**Global nav (縦書き or small horizontal Gothic):**

| Japanese | romaji | meaning |
|---|---|---|
| 鎌倉の刃 | Kamakura no Ha | home / logo (with 朱 seal mark) |
| 刀剣 | Tōken | the blades (catalogue) |
| 匠の技 | Takumi no Waza | the craft & philosophy |
| 鍛冶場 | Kajiba | the atelier (about the smith) |
| 手記 | Shuki | journal (the smith's notes) |
| 御問合せ | Otoiawase | inquiry / commission |

---

## 6. Pages

**玄関 — Home (the entrance)**
- Vertical hero: one blade against paper, generous ma, a single 縦書き calligraphic line (e.g. 「一刀に、生涯を注ぐ。」). No two-CTA button row.
- A quiet passage introducing the philosophy (ものづくり / 職人). A few featured blades as museum plates (not cards). A hamon hairline leads down to 匠の技.

**刀剣 — Catalogue**
- Restrained grid of **plates**, not ecommerce cards: blade name (刀 / 脇差 / 短刀 / 薙刀 / 槍 / 鎧通し …), one line of provenance, material (玉鋼), 刃長. No price as hero. CTA per plate: 御誂えの御相談 (discuss a commission).
- Filter by category as quiet tags — 打刀 / 短刀 / 薙刀・槍 / 特殊 — not four hardcoded pages.
- Empty state (in character): 「ただ今、鍛えております。」

**刀剣詳細 — Blade detail (the interactive centerpiece)**
- The **刀身図 (interactive anatomy diagram)** — the site's main `"use client"` island. Hover/tap SVG parts to reveal terms: 切先 (kissaki) · 刃文 (hamon) · 鎬 (shinogi) · 棟 (mune) · 反り (sori) · 鎺 (habaki) · 鍔 (tsuba) · 柄 (tsuka) · 目釘 (mekugi). Keyboard-navigable, `prefers-reduced-motion` respected.
- Below: material, forging notes, dimensions, and a single 御問合せ CTA.

**匠の技 — The craft & philosophy** (long-form, editorial)
- Philosophy: **ものづくり (monozukuri)**, **職人の心 (shokunin ethos)**, **研ぎは瞑想 (togi as meditation)**, **素材の神を敬う (respect for the kami in iron sand and fire)**.
- Process: 玉鋼 (tamahagane) & たたら (tatara) → 折り返し鍛錬 (folding & purifying) → **土置き・焼き入れ (clay tempering / differential hardening → 刃文)**. Note the lineage: Meiji sword ban → master smiths turned to kitchen knives (牛刀 gyūto, 柳刃 yanagiba).
- **This page holds the one dark passage:** the 焼き入れ block goes `--ai` indigo-black with fire imagery. Everything else stays paper.

**鍛冶場 — About the atelier**
- The smith's lineage and vow, in first person, humble register. No stock founder photos, no "our mission" marketing block.
- **Evoke the Kamakura sword-making heritage atmospherically; do NOT fabricate specific provenance** — no invented founding dates, no imperial/shogunal endorsement, no borrowing a real historical master's name. Atmosphere, not a forged pedigree.

**手記 — Journal**
- Long-form Japanese posts framed as the smith's notes, not a "blog." Your myth-busting content lives here — rewritten as Japanese essays (e.g. 忍者は本当に直刀を使ったのか / 妖刀村正の伝説), not translated English clickbait.

**よくある御質問 — FAQ** · commission process, timelines, materials, care (手入れ), legality.

**御問合せ — Contact / commission**
- A quiet form (お名前 / 御連絡先 / 御希望の一振り / 御用件). **Frontend-only options:** `mailto:` submission, or a form provider (Formspree / Web3Forms) — no server route. State clearly which you chose.

**Footer** · seal-like logo mark (朱), 縦書き or quiet horizontal nav, a single hamon hairline divider, 所在地 / 営業時間 in Japanese.

**404 / error / empty** · in character, in Japanese. E.g. 404: 「その刃は、まだ打たれておりません。」

---

## 7. Interactivity & motion

- `"use client"` islands, minimal: the **刀身図 diagram**, the **catalogue filter**, the **mobile 暖簾 menu**, the **contact form**. Everything else stays a Server Component.
- Motion is near-silent: at most a slow fade/rise on scroll-in, one Ken-Burns drift on a single hero image. **No parallax, no bouncing, no stagger circus, no scroll-jacking.** Honor `prefers-reduced-motion` everywhere.
- Quality floor, unannounced: responsive to mobile, visible keyboard focus rings, alt text in Japanese, WCAG AA contrast checked (verify `--keshizumi`/`--nibi` on `--kinari`, and text on `--ai`).

---

## 8. Japanese copy discipline (the part that's easiest to fail)

An agent will produce stiff, translated-sounding Japanese unless forced not to. Rules:
- **Write Japanese-first**, in the humble-yet-dignified register of a craftsman (丁寧語, 御 honorifics, 謙譲語 for the smith's own work). The atelier speaks modestly about itself.
- Prefer native words over katakana-English where one exists (御問合せ not コンタクト, 一振り／品 not アイテム, 御誂え not オーダー).
- Japanese punctuation only (、。「」). No exclamation-mark marketing.
- Have a fluent reader pass over final copy before launch — treat AI Japanese as a draft.

**Example strings (usable, demonstrate the register):**
- Hero: 「一刀に、生涯を注ぐ。」 / 「鉄と火と、静けさ。」
- Philosophy line: 「玉鋼を鍛え、土を置き、火に問う。」
- Commission CTA: 「一振りを、お誂え。」 / 「御誂えの御相談」
- Catalogue empty: 「ただ今、鍛えております。」
- 404: 「その刃は、まだ打たれておりません。」
- Contact intro: 「一振りの御相談、心よりお待ち申し上げます。」

---

## 9. Scope — ship v1, defer the rest

**v1 (done-when defined below):** Home · 匠の技 (with the earned dark 焼き入れ passage) · 刀剣 catalogue with **3** blades · **1** blade detail with the working interactive 刀身図 · **1** 手記 essay · 御問合せ form · footer · 404. Full nav, full metadata, all Japanese.

**P1 (after v1):** remaining blade categories · FAQ · 2–3 more 手記 essays · catalogue filtering polish.

**P2:** seasonal (季節感) touches · print/図録 export · richer diagram states.

---

## 10. Acceptance criteria (done-when)

- [ ] All copy is **natural, Japanese-first** Japanese (not translated-English syntax); a fluent reader would not flag it as machine-made.
- [ ] Hero line **and** section titles use 縦書き vertical text; it degrades gracefully on mobile.
- [ ] Palette ≤ 6 tokens; **paper is the ground, ink is the text**; 朱 covers < 2% of any screen; the only dark passage is 焼き入れ in 藍鉄.
- [ ] **Zero** cart / checkout / price-as-hero. Every blade path ends in 御問合せ / 御誂え.
- [ ] Mincho display face loaded (Zen Old Mincho / Klee One); **no Inter / Helvetica / system-sans** present.
- [ ] `border-radius ≤ 2px` globally; **no `box-shadow` used decoratively**; no gradients; no glassmorphism.
- [ ] The **刀身図** is the primary `"use client"` island; the rest of the site is Server Components. It's keyboard-navigable and respects reduced motion.
- [ ] Metadata, 404, and empty states are all in Japanese.
- [ ] The **hamon hairline** appears as the site's signature divider/through-line.
- [ ] Final test: *would a Japanese speaker believe a real 刀鍛冶 built this — not a Western studio, not an AI?* If not, it isn't done.
