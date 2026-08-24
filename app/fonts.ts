import localFont from "next/font/local";
import { EB_Garamond } from "next/font/google";

// Japanese fonts are self-hosted, subset to only the ~1,300 glyphs this site renders
// (regenerate with scripts/subset-fonts.py). This collapses ~140 unicode-range font
// requests (~2.7MB) from next/font/google down to three small woff2 files. Only
// weight 400 is used sitewide (no bold/strong anywhere), so one face per family.

// Only the display face is preloaded. The three subset woff2 files are ~650KB
// together; on a throttled mobile link, preloading all three puts that weight on
// the critical path and delays first paint. The display face carries the
// above-the-fold hero, so preloading it alone keeps the hero in-brand from the
// first paint; body and gothic load on demand (display:swap shows the
// Mincho/Gothic fallback meanwhile), keeping ~412KB off the critical path.

// Display — Mincho with brush character (headings, hero, pull-quotes)
export const zenOldMincho = localFont({
  src: "./_fonts/ZenOldMincho-Regular.subset.woff2",
  weight: "400",
  display: "swap",
  preload: true,
  fallback: ["YuMincho", "Hiragino Mincho ProN", "serif"],
  variable: "--font-display",
});

// Body — long-form journal & craft copy
export const notoSerifJp = localFont({
  src: "./_fonts/NotoSerifJP-Regular.subset.woff2",
  weight: "400",
  display: "swap",
  preload: false,
  fallback: ["YuMincho", "Hiragino Mincho ProN", "serif"],
  variable: "--font-body",
});

// Utility — tiny nav, captions, measurements (used sparingly, small)
export const zenKakuGothicNew = localFont({
  src: "./_fonts/ZenKakuGothicNew-Regular.subset.woff2",
  weight: "400",
  display: "swap",
  preload: false,
  fallback: ["YuGothic", "Hiragino Kaku Gothic ProN", "sans-serif"],
  variable: "--font-gothic",
});

// Latin — a quiet oldstyle serif for measurements & years (never Inter/Helvetica).
// Latin-only, so next/font/google is cheap here (a couple of small requests).
export const ebGaramond = EB_Garamond({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-latin",
});

export const fontVariables = [
  zenOldMincho.variable,
  notoSerifJp.variable,
  zenKakuGothicNew.variable,
  ebGaramond.variable,
].join(" ");
