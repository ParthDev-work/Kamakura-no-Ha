import Link from "next/link";
import { BladeSilhouette } from "@/components/BladeSilhouette";
import { HamonDivider } from "@/components/HamonDivider";
import { BladePlate } from "@/components/BladePlate";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { blades } from "@/data/blades";

export default function Home() {
  return (
    <>
      {/* ── 一・主景 — 伝説の剣豪の一句（宮本武蔵『五輪書』） ── */}
      <section className="bg-ai text-kinari">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="grid md:grid-cols-[auto_1fr] gap-12 md:gap-16 items-center min-h-[82vh] py-20">
            {/* 縦書きの引用 */}
            <div className="order-2 md:order-1 flex md:justify-start justify-center">
              <figure className="tategaki tategaki-responsive rise">
                <blockquote>
                  <p className="font-brush text-3xl md:text-5xl leading-relaxed tracking-[0.12em]">
                    千日の稽古を鍛とし、
                    <br />
                    万日の稽古を練とす。
                  </p>
                </blockquote>
                <figcaption className="font-gothic text-xs md:mt-0 mt-6 md:ml-8 text-nibi tracking-ja">
                  宮本武蔵『五輪書』
                </figcaption>
              </figure>
            </div>

            {/* 大きな刃の線描 */}
            <div className="order-1 md:order-2 h-[42vh] md:h-[70vh] mx-auto">
              <BladeSilhouette className="h-full opacity-90" />
            </div>
          </div>
        </div>
      </section>

      {/* 銘 */}
      <section className="mx-auto max-w-6xl px-6 md:px-10 py-16 text-center">
        <p className="font-display text-2xl md:text-3xl tracking-[0.2em] text-sumi">
          鎌倉の刃
        </p>
        <p className="latin text-xs text-keshizumi mt-3">Kamakura no Ha</p>
        <p className="font-body text-base leading-loose tracking-ja text-keshizumi mt-8 max-w-2xl mx-auto">
          相州伝に連なる、刃と職人の家。玉鋼を鍛え、土を置き、火に問う。
          その営みと、生まれ出づる刃の数々を、ここに記します。
        </p>
      </section>

      <HamonDivider className="w-full" />

      {/* ── 二・日本刀の起源と意義 ── */}
      <section className="mx-auto max-w-6xl px-6 md:px-10 py-24">
        <h2 className="font-display text-3xl tracking-ja text-sumi mb-14">
          日本刀の起源と意義
        </h2>
        <div className="grid md:grid-cols-2 gap-14 items-start">
          <div className="space-y-8">
            <p className="font-body text-base leading-loose tracking-ja text-sumi">
              古、刃は直刀にございました。大陸より渡りし直の剣が、この国の戦と鍛えの中で、
              やがて反りを得る。馬上より薙ぐに適い、抜き打ちに冴える——湾刀の生まれし所以にございます。
            </p>
            <p className="font-body text-base leading-loose tracking-ja text-keshizumi">
              砂鉄より起こした玉鋼を、幾度も折り返して鍛え、硬き刃と粘る地とを一つに合わせる。
              土を置きて焼き入れれば、刃と地の境に白き刃文が立ち、その差が反りを定めます。
              飾りにあらず、理そのものが姿となって顕れる——これが日本刀の骨法にございます。
            </p>
            <blockquote className="border-l-2 border-shu pl-6">
              <p className="font-display text-xl leading-relaxed tracking-ja text-sumi">
                刀は、武士の魂。
              </p>
            </blockquote>
            <p className="font-body text-base leading-loose tracking-ja text-keshizumi">
              刃は、ただ斬るための道具にとどまりませぬ。持つ者の心を映し、家に伝わり、
              時に神に奉じられる。鍛冶の一槌に籠もる敬いと畏れこそ、この国が刃に見た意義にございます。
            </p>
            <p>
              <Link
                href="/takumi"
                className="font-gothic text-sm text-shu tracking-ja hover:underline underline-offset-4"
              >
                造りの工程を訪ねる →
              </Link>
            </p>
          </div>

          <div className="md:pt-2">
            <PhotoPlaceholder ratio="3 / 4" caption="写真 ― 鍛冶場の火（後日差替）" />
          </div>
        </div>
      </section>

      <HamonDivider className="w-full" />

      {/* ── 三・刀剣の種類 ── */}
      <section className="mx-auto max-w-6xl px-6 md:px-10 py-24">
        <div className="flex items-baseline justify-between mb-14">
          <h2 className="font-display text-3xl tracking-ja text-sumi">刀剣の種類</h2>
          <Link
            href="/token"
            className="font-gothic text-sm text-keshizumi hover:text-sumi tracking-ja"
          >
            すべて見る →
          </Link>
        </div>
        <div className="grid gap-x-12 gap-y-16 md:grid-cols-3">
          {blades.map((b) => (
            <BladePlate key={b.slug} blade={b} />
          ))}
        </div>
      </section>
    </>
  );
}
