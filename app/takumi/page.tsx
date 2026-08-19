import type { Metadata } from "next";
import Link from "next/link";
import { HamonDivider } from "@/components/HamonDivider";
import { processStages } from "@/data/process";

export const metadata: Metadata = {
  title: "匠の技",
  description:
    "たたらと玉鋼に始まり、折り返し鍛錬、造り込み、火造り、土置き・焼き入れ、そして研ぎと拵へ。相州伝の六つの段と、その心。",
};

// content-spec §3 — 六つの段は data/process.ts に集約。五（焼き入れ）は暗き段として別に扱う。
const before = processStages.filter((s) => !s.dark && s.n !== "六");
const dark = processStages.find((s) => s.dark)!;
const last = processStages.find((s) => s.n === "六")!;

export default function TakumiPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 md:px-10 py-20">
        <h1 className="font-display text-4xl tracking-ja text-sumi">匠の技</h1>

        {/* 心 — philosophy（design-brief §6・content-spec §6） */}
        <div className="mt-12 space-y-8">
          <p className="font-body text-base leading-loose tracking-ja text-keshizumi">
            ものづくりとは、材と火とに向き合い、一つの手落ちも許さぬ営みにございます。
            職人は、己を語らず、ただ黙して槌を振るう。
          </p>
          <blockquote className="border-l-2 border-shu pl-6">
            <p className="font-display text-xl leading-relaxed tracking-ja text-sumi">
              研ぎは、心を研ぐ。
            </p>
          </blockquote>
          <p className="font-body text-base leading-loose tracking-ja text-keshizumi">
            砂鉄に宿る神を敬い、火を畏れ、鋼の声を聴く。
            こだわりとは、時をいとわず、ただ真に近づかんとする一途にございます。
          </p>
        </div>
      </section>

      <HamonDivider className="w-full" />

      {/* 工程 — 六つの段 */}
      <section className="mx-auto max-w-3xl px-6 md:px-10 py-20">
        <h2 className="font-display text-2xl tracking-ja text-sumi mb-4">鍛えの六つの段</h2>
        <p className="font-body text-sm leading-loose tracking-ja text-keshizumi mb-14">
          刃と地の境に白き刃文が立ち、その差が反りを生む。
          飾りにあらず、硬き刃と粘る棟の差こそが、刃文を描き、反りを与えるのでございます。
        </p>

        <ol className="space-y-14">
          {before.map((s) => (
            <li key={s.n} className="grid grid-cols-[3rem_1fr] gap-6">
              <span className="font-display text-2xl text-nibi">{s.n}</span>
              <div>
                <h3 className="font-display text-xl tracking-ja text-sumi">{s.title}</h3>
                <p className="font-body text-sm leading-loose tracking-ja text-keshizumi mt-3">
                  {s.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* 五 — 唯一の暗き段。焼き入れは闇の中にあり。藍鉄（--ai）。 */}
      <section className="bg-ai text-kinari py-24">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <div className="grid grid-cols-[3rem_1fr] gap-6">
            <span className="font-display text-2xl text-nibi">五</span>
            <div>
              <h3 className="font-display text-2xl tracking-ja text-kinari">
                {dark.title}
              </h3>
              <p
                className="font-body text-base leading-loose tracking-ja mt-6"
                style={{ color: "#D8CFBC" }}
              >
                {dark.body}
              </p>
              <p
                className="font-body text-sm leading-loose tracking-ja mt-6"
                style={{ color: "#A7A69C" }}
              >
                色を読み誤れば、鋼は割れる。ここばかりは、暗がりでなければ見えぬ。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 六 */}
      <section className="mx-auto max-w-3xl px-6 md:px-10 py-20">
        <ol>
          <li className="grid grid-cols-[3rem_1fr] gap-6">
            <span className="font-display text-2xl text-nibi">六</span>
            <div>
              <h3 className="font-display text-xl tracking-ja text-sumi">{last.title}</h3>
              <p className="font-body text-sm leading-loose tracking-ja text-keshizumi mt-3">
                {last.body}
              </p>
              <p className="font-body text-xs leading-loose tracking-ja text-nibi mt-4">
                鞘の漆は塗師の手を、柄の装いは金工の手を借ります。一振りは、幾つもの手を経て仕上がるのでございます。
              </p>
            </div>
          </li>
        </ol>
      </section>

      <HamonDivider className="w-full" />

      {/* 系譜 — 廃刀令 → 庖丁（content-spec §4） */}
      <section className="mx-auto max-w-3xl px-6 md:px-10 py-20">
        <h2 className="font-display text-2xl tracking-ja text-sumi mb-6">受け継がれし理</h2>
        <p className="font-body text-base leading-loose tracking-ja text-keshizumi">
          明治の廃刀令にて刀を帯びる世が終わったとき、鍛冶の手はその技を台所の刃へ移しました。
          刀を成した同じ折り返しと土取りが、牛刀・柳刃・出刃を、世に並びなき切れ味へと導いたのでございます。
        </p>
        <p className="mt-8">
          <Link
            href="/shuki/kara-katana-hocho-e"
            className="font-gothic text-sm text-shu tracking-ja hover:underline underline-offset-4"
          >
            手記「刀から庖丁へ」を読む →
          </Link>
        </p>
      </section>
    </>
  );
}
