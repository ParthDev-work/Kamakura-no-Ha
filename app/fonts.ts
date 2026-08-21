import {
  Zen_Old_Mincho,
  Noto_Serif_JP,
  Zen_Kaku_Gothic_New,
  Klee_One,
  EB_Garamond,
} from "next/font/google";

// Display — Mincho with brush character (headings, hero, pull-quotes).
// Only 400 (headings/body render at 400) and 700 (bold/strong) are used.
export const zenOldMincho = Zen_Old_Mincho({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

// Body — long-form journal & craft copy
export const notoSerifJp = Noto_Serif_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

// Utility — tiny nav, captions, measurements (used sparingly, small)
export const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-gothic",
});

// Brush-accent alternative, for a single hero line
export const kleeOne = Klee_One({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
  variable: "--font-brush",
});

// Latin — a quiet oldstyle serif for measurements & years (never Inter/Helvetica)
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
  kleeOne.variable,
  ebGaramond.variable,
].join(" ");
