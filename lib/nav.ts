// 全域ナビゲーション（design-brief §5）。href は romaji、表示は日本語。

export interface NavLink {
  href: string;
  label: string;
  romaji: string;
}

export const navLinks: NavLink[] = [
  { href: "/token", label: "刀剣", romaji: "Tōken" },
  { href: "/takumi", label: "匠の技", romaji: "Takumi no Waza" },
  { href: "/kajiba", label: "鍛冶場", romaji: "Kajiba" },
  { href: "/shuki", label: "手記", romaji: "Shuki" },
  { href: "/otoiawase", label: "御問合せ", romaji: "Otoiawase" },
];
