// 玄関に載せる史実の記。武士が用いし刃、時代の名刀、名だたる刀工。
// いずれも広く知られた史実に拠る。造作の逸話は記さぬ。

export interface LoreImage {
  src: string;
  alt: string;
}

// ── 武士が佩きし刃（widely used by warriors of old）──
export interface WarriorBlade {
  name: string;
  reading: string;
  era: string;
  use: string;
  image: LoreImage;
}

export const warriorBlades: WarriorBlade[] = [
  {
    name: "太刀",
    reading: "tachi",
    era: "平安 ― 鎌倉",
    use: "刃を下に佩き、馬上より薙ぐ。平安より鎌倉の武士が主として帯びた、騎馬の大刀。",
    image: { src: "/images/tachi.jpg", alt: "太刀の全身" },
  },
  {
    name: "打刀",
    reading: "uchigatana",
    era: "室町 ― 江戸",
    use: "刃を上に差し、抜き打ちに応ず。徒歩の戦が増すとともに広まり、江戸の世に侍の魂と称された。",
    image: { src: "/images/katana.jpg", alt: "打刀の刀身" },
  },
  {
    name: "薙刀",
    reading: "naginata",
    era: "平安 ― 南北朝",
    use: "長柄の曲刃。僧兵の得物として鳴らし、後には武家の女の武芸としても伝わった。",
    image: { src: "/images/naginata.jpg", alt: "薙刀の刀身" },
  },
  {
    name: "槍",
    reading: "yari",
    era: "戦国",
    use: "直ぐなる穂を長柄に挿す。足軽の集団戦を制し、戦国の主兵となった。",
    image: { src: "/images/yari.jpg", alt: "槍の穂" },
  },
];

// ── 時代の名刀（the finest blade of its time）──
export const finestBlade = {
  name: "三日月宗近",
  reading: "Mikazuki Munechika",
  smith: "三条宗近",
  era: "平安時代",
  // 天下五剣 — 広く知られた史実
  body:
    "古来、最も名高き五振りを「天下五剣」と称する。中でも三日月宗近は、平安の刀工・三条宗近の作にして、刃に沿うて三日月なす打除けの美しさより、五剣随一と讃えられてきた。今、東京国立博物館の蔵する国宝にございます。",
  image: { src: "/images/masterpiece.jpg", alt: "名刀・三日月宗近の刀身" },
};

// ── 名だたる刀工と刀派（renowned smiths & schools — the makers of old）──
export interface Smith {
  name: string;
  reading: string;
  era: string;
  note: string;
  image: LoreImage;
}

export const smiths: Smith[] = [
  {
    name: "相州 正宗",
    reading: "Sōshū Masamune",
    era: "鎌倉時代",
    note: "相州伝を大成した、日本刀史上最も名高き刀工。沸の美をきわめた。",
    image: { src: "/images/smith-soshu.jpg", alt: "正宗の刀身" },
  },
  {
    name: "備前 長船",
    reading: "Bizen Osafune",
    era: "鎌倉 ― 室町",
    note: "備前国に興り、光忠・長光を輩出した、最大の作刀の地。数多の名刀を世に送った。",
    image: { src: "/images/smith-bizen.jpg", alt: "備前長船の刀身" },
  },
  {
    name: "美濃 孫六兼元",
    reading: "Magoroku Kanemoto",
    era: "室町 ― 戦国",
    note: "美濃関の刀工。「関の孫六」と謳われ、よく斬れる実用の刃で戦国に重んじられた。",
    image: { src: "/images/smith-mino.jpg", alt: "孫六兼元の刀身" },
  },
  {
    name: "千子 村正",
    reading: "Sengo Muramasa",
    era: "室町 ― 戦国",
    note: "伊勢の刀工。鋭利なるがゆえ、後に「妖刀」の伝説を負い、徳川に忌まれたと伝わる。",
    image: { src: "/images/smith-muramasa.jpg", alt: "村正の刀身" },
  },
];
