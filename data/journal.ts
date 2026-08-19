// 手記 — content-spec §5。v1 は一篇のみ。廃刀令→庖丁 の系譜を筆頭に。
// 長文・明朝本文・縦の引用。ブログではなく、鍛冶の手記として。

export interface JournalEssay {
  slug: string;
  title: string;
  /** 副題（無くともよい） */
  subtitle?: string;
  date: string; // 和暦・西暦の併記可
  /** 縦書きの引用に用いる一節 */
  pullQuote: string;
  /** 段落（日本語本文） */
  paragraphs: string[];
}

export const journal: JournalEssay[] = [
  {
    slug: "kara-katana-hocho-e",
    title: "刀から庖丁へ",
    subtitle: "廃刀令が遺したもの",
    date: "明治九年（一八七六）に始まる話",
    pullQuote: "鍛えの理は、刃の長さを問わぬ。",
    paragraphs: [
      "明治九年、廃刀令が布かれた。武士が刀を帯びる世は終わり、腰の一振りは無用のものとなった。多くの鍛冶が槌を措いた。",
      "されど、火を識り、鋼を識る手は、消えはしなかった。刀を鍛えた同じ理で、台所の刃を鍛える者が現れた。折り返し鍛錬で地鉄を練り、硬き鋼を軟らかき地鉄に合わせる。長さこそ違え、造り込みの心は一つである。",
      "牛刀、柳刃、出刃。これらの庖丁が世界に並びなき切れ味を持つのは、偶然ではない。刀を打った手が、その理をそのまま俎板の上へ移したからに他ならない。",
      "当工房が庖丁を一振りだけ列に加えるのは、この系譜を絶やさぬためである。刀を打つ手が、今日もなお生きている——その証として、柳刃を一つ、置いている。",
      "刃の用は移ろう。されど、玉鋼を鍛え、土を置き、火に問うという営みは、明治のあの日から今に至るまで、寸分も変わらぬ。",
    ],
  },
];

export function getEssay(slug: string): JournalEssay | undefined {
  return journal.find((e) => e.slug === slug);
}
