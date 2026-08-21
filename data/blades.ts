// 刀剣データ — 六つの種類を陳列。模擬価格（円）と造りの覚書を添える。
// すべての用語は content-spec §7 の語彙表に厳密に一致すること。造語は禁。

export type BladeCategory = "打刀" | "短刀" | "薙刀・槍" | "特殊";

export interface Blade {
  slug: string;
  /** 銘・品名 */
  mei: string;
  /** 読み（romaji, 補助表示のみ） */
  romaji: string;
  /** 分類 */
  bunrui: string;
  /** 絞り込み用の区分 */
  category: BladeCategory;
  /** 刃長（尺・寸と cm） */
  hacho: string;
  /** 反り */
  sori: string;
  /** 鋼 */
  hagane: string;
  /** 造り込み */
  tsukurikomi: string;
  /** 一行の由緒 */
  provenance: string;
  /** 詳細の一節（短く、事実に即して） */
  note: string;
  /** 造りの覚書（この一振り固有の見どころ） */
  makingNote: string;
  /** 模擬価格（円） */
  priceYen: number;
  /** 実写（/public/images 内。出典は public/images/CREDITS.md） */
  image: string;
  /** 画像の代替文（日本語） */
  imageAlt: string;
}

export const blades: Blade[] = [
  {
    slug: "tachi",
    mei: "太刀",
    romaji: "tachi",
    bunrui: "太刀",
    category: "打刀",
    hacho: "二尺六寸（約 78.8 cm）",
    sori: "腰反りの深き反り",
    hagane: "玉鋼",
    tsukurikomi: "三枚",
    provenance: "馬上に佩き、刃を下に向けて帯びる、古の大刀。",
    note: "二尺を優に超え、腰元で深く反る。騎馬の世に生まれ、佩き表を下に向けて帯びる。相州伝の面目たる一振り。",
    makingNote: "長寸ゆえ火造りに殊のほか手間を要し、腰反りは焼き入れの土取りで慎重に導く。地鉄の板目、よく詰みたり。",
    priceYen: 3800000,
    image: "/images/tachi.jpg",
    imageAlt: "拵に納めた太刀の全身",
  },
  {
    slug: "uchigatana",
    mei: "刀（打刀）",
    romaji: "katana",
    bunrui: "打刀",
    category: "打刀",
    hacho: "二尺三寸五分（約 71.2 cm）",
    sori: "相州伝の深き反り",
    hagane: "玉鋼",
    tsukurikomi: "甲伏せ",
    provenance: "腰に差し、抜き打ちの一閃を旨とす。",
    note: "二尺三寸五分。相州伝の深き反り。腰に差し、抜き打ちの一閃を旨とす。",
    makingNote: "甲伏せに軟鉄を包み、抜き打ちの衝きに耐えしむ。刃文は湾れを主とし、切先へ向けて冴えを増す。",
    priceYen: 2400000,
    image: "/images/katana.jpg",
    imageAlt: "黒地に映える打刀の刀身",
  },
  {
    slug: "wakizashi",
    mei: "脇差",
    romaji: "wakizashi",
    bunrui: "脇差",
    category: "打刀",
    hacho: "一尺六寸（約 48.5 cm）",
    sori: "浅めの反り",
    hagane: "玉鋼",
    tsukurikomi: "三枚",
    provenance: "打刀に添え、大小の一対をなす。",
    note: "一尺と二尺の間。打刀に添え、大小の一対をなす。狭き間合いを旨とす。",
    makingNote: "打刀と対をなすべく、地鉄の趣を揃えて鍛える。短寸ながら、三枚に組みて粘りを持たす。",
    priceYen: 1200000,
    image: "/images/wakizashi.jpg",
    imageAlt: "拵と共に据えた脇差",
  },
  {
    slug: "tanto",
    mei: "短刀",
    romaji: "tanto",
    bunrui: "短刀",
    category: "短刀",
    hacho: "九寸五分（約 28.8 cm）",
    sori: "内反り",
    hagane: "玉鋼",
    tsukurikomi: "甲伏せ",
    provenance: "懐に納め、間合いを詰めて突く。",
    note: "一尺に満たず。懐に納め、間合いを詰めて突く。",
    makingNote: "小振りゆえ一片の緩みも許されず、焼き入れの間合いは一瞬。内反りに、突きの用を宿す。",
    priceYen: 850000,
    image: "/images/tanto.jpg",
    imageAlt: "合口拵の短刀",
  },
  {
    slug: "naginata",
    mei: "薙刀",
    romaji: "naginata",
    bunrui: "薙刀",
    category: "薙刀・槍",
    hacho: "一尺八寸（約 54.5 cm）の刀身",
    sori: "先反りの強き反り",
    hagane: "玉鋼",
    tsukurikomi: "甲伏せ",
    provenance: "長柄に据え、薙ぎ払う曲刃。",
    note: "反り深き曲刃を長柄に据える。薙ぎ払いの一撃に、幅広の身をもって応える。",
    makingNote: "先へ向けて身幅を張り、先反りを強く取る。長柄との釣合いを見て、茎を長く仕立てる。",
    priceYen: 1600000,
    image: "/images/naginata.jpg",
    imageAlt: "鞘に納めた薙刀の刀身",
  },
  {
    slug: "yari",
    mei: "槍",
    romaji: "yari",
    bunrui: "槍",
    category: "薙刀・槍",
    hacho: "八寸（約 24.2 cm）の穂",
    sori: "反りなき直刃",
    hagane: "玉鋼",
    tsukurikomi: "三枚",
    provenance: "直ぐなる穂を柄に挿し、ひたすらに突く。",
    note: "反りを持たぬ直の穂。長柄に挿し、間合いの外より突き通す。",
    makingNote: "左右均しき稜を立て、真直ぐを命とする。焼き入れは反りを出さぬよう、土を薄く一様に置く。",
    priceYen: 980000,
    image: "/images/yari.jpg",
    imageAlt: "直ぐなる槍の穂",
  },
];

export function getBlade(slug: string): Blade | undefined {
  return blades.find((b) => b.slug === slug);
}

// 絞り込みの区分（静かなタグ）
export const bladeCategories: BladeCategory[] = [
  "打刀",
  "短刀",
  "薙刀・槍",
  "特殊",
];
