// 刀身各部 — content-spec §7。刀身図（interactive diagram）の注記に用いる。
// term / reading / 短い説明。造語は禁。

export interface AnatomyPart {
  id: string;
  term: string;
  reading: string;
  gloss: string;
  /** 説明（日本語、一〜二文） */
  desc: string;
  /** SVG 上の注記点（viewBox 0 0 1000 220 座標系） */
  x: number;
  y: number;
}

export const anatomyParts: AnatomyPart[] = [
  {
    id: "kissaki",
    term: "切先",
    reading: "kissaki",
    gloss: "point",
    desc: "刃の先端。焼き入れの冴えが最も表れる処。",
    x: 928,
    y: 96,
  },
  {
    id: "hamon",
    term: "刃文",
    reading: "hamon",
    gloss: "temper line",
    desc: "土置きと焼き入れが遺す、刃と地の境の白き文様。",
    x: 560,
    y: 138,
  },
  {
    id: "shinogi",
    term: "鎬",
    reading: "shinogi",
    gloss: "ridge",
    desc: "刀身の稜線。地と刃を分かつ峰筋。",
    x: 470,
    y: 104,
  },
  {
    id: "mune",
    term: "棟",
    reading: "mune",
    gloss: "spine",
    desc: "刃の背。土を厚く置き、柔らかく残す処。",
    x: 360,
    y: 88,
  },
  {
    id: "sori",
    term: "反り",
    reading: "sori",
    gloss: "curvature",
    desc: "焼き入れの差が生む曲がり。相州伝は深く反る。",
    x: 470,
    y: 60,
  },
  {
    id: "habaki",
    term: "鎺",
    reading: "habaki",
    gloss: "collar",
    desc: "刃と柄の間に嵌める金具。刀身を鞘に留める。",
    x: 232,
    y: 120,
  },
  {
    id: "tsuba",
    term: "鍔",
    reading: "tsuba",
    gloss: "guard",
    desc: "手を護る鍔。拵の顔ともなる。",
    x: 196,
    y: 150,
  },
  {
    id: "tsuka",
    term: "柄",
    reading: "tsuka",
    gloss: "hilt",
    desc: "握りの部分。鮫皮を巻き、糸で締める。",
    x: 96,
    y: 150,
  },
  {
    id: "mekugi",
    term: "目釘",
    reading: "mekugi",
    gloss: "retaining peg",
    desc: "柄と茎を留める竹の釘。一本が刀身を支える。",
    x: 120,
    y: 176,
  },
];
