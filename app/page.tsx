import Link from "next/link";
import Image from "next/image";
import { HamonDivider } from "@/components/HamonDivider";
import { BladePlate } from "@/components/BladePlate";
import { blades } from "@/data/blades";
import { warriorBlades, finestBlade, smiths } from "@/data/lore";

export default function Home() {
  return (
    <>
      {/* ── 一・主景 — 伝説の剣豪の一句（宮本武蔵『五輪書』） ── */}
      <section className="bg-ai text-kinari relative overflow-hidden">
        {/* 背景の実写 — 薄暗く、刃の質感を伝える */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="鍛え上げた刀身の輝き"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40 kenburns"
          />
          <div className="absolute inset-0 bg-ai/60" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 md:px-10">
          <div className="flex flex-col items-center justify-center min-h-[82vh] py-20 text-center">
            {/* 引用 — 横書きで堂々と中央に */}
            <figure className="rise max-w-3xl">
              <blockquote>
                <p className="font-brush text-3xl md:text-5xl lg:text-6xl leading-relaxed md:leading-relaxed tracking-[0.12em]">
                  千日の稽古を鍛とし、
                  <br />
                  万日の稽古を練とす。
                </p>
              </blockquote>
              <figcaption className="font-gothic text-xs md:text-sm mt-8 text-nibi tracking-ja">
                宮本武蔵『五輪書』
              </figcaption>
            </figure>

            {/* 銘 */}
            <div className="mt-16 rise" style={{ animationDelay: "0.3s" }}>
              <p className="font-display text-2xl md:text-3xl tracking-[0.2em] text-kinari">
                鎌倉の刃
              </p>
              <p className="latin text-xs text-nibi mt-2">Kamakura no Ha</p>
            </div>
          </div>
        </div>
      </section>

      {/* 導入 */}
      <section className="mx-auto max-w-6xl px-6 md:px-10 py-16 text-center">
        <p className="font-body text-base leading-loose tracking-ja text-keshizumi max-w-2xl mx-auto">
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

          {/* 実写 — 鍛冶場の火 */}
          <div className="md:pt-2">
            <div className="relative aspect-[3/4] overflow-hidden border border-nibi/40">
              <Image
                src="/images/origin.jpg"
                alt="鍛冶場にて赤々と灼ける鋼"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <p className="font-gothic text-[10px] text-nibi mt-2 tracking-ja">
              写真 ― 鍛冶場の火
            </p>
          </div>
        </div>
      </section>

      <HamonDivider className="w-full" />

      {/* ── 三・武士が佩きし刃 ── */}
      <section className="mx-auto max-w-6xl px-6 md:px-10 py-24">
        <h2 className="font-display text-3xl tracking-ja text-sumi mb-6">
          武士が佩きし刃
        </h2>
        <p className="font-body text-sm leading-loose tracking-ja text-keshizumi mb-14 max-w-2xl">
          時代を経て、武士は戦場と流儀に応じて刃を選んだ。
          ここに、古の戦に最も広く用いられた四つの刃を記す。
        </p>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {warriorBlades.map((wb) => (
            <article key={wb.name} className="group">
              <div className="relative aspect-[4/3] overflow-hidden border border-nibi/40 bg-ai">
                <Image
                  src={wb.image.src}
                  alt={wb.image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="pt-4">
                <h3 className="font-display text-xl tracking-ja text-sumi">
                  {wb.name}
                  <span className="latin text-xs text-keshizumi ml-2 align-middle">
                    {wb.reading}
                  </span>
                </h3>
                <p className="font-gothic text-[10px] text-nibi tracking-ja mt-1">
                  {wb.era}
                </p>
                <p className="font-body text-sm text-keshizumi mt-2 leading-relaxed">
                  {wb.use}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <HamonDivider className="w-full" />

      {/* ── 四・時代の名刀 ── */}
      <section className="mx-auto max-w-6xl px-6 md:px-10 py-24">
        <h2 className="font-display text-3xl tracking-ja text-sumi mb-6">
          時代の名刀
        </h2>
        <p className="font-body text-sm leading-loose tracking-ja text-keshizumi mb-14 max-w-2xl">
          千年の時を超え、今なお語り継がれる一振り。
        </p>
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div className="relative aspect-[4/3] overflow-hidden border border-nibi/40 bg-ai">
            <Image
              src={finestBlade.image.src}
              alt={finestBlade.image.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-2xl md:text-3xl tracking-ja text-sumi">
                {finestBlade.name}
              </h3>
              <p className="latin text-sm text-keshizumi mt-1">
                {finestBlade.reading}
              </p>
            </div>
            <dl className="space-y-2">
              <div className="flex gap-4">
                <dt className="font-gothic text-xs text-nibi tracking-ja min-w-[3rem]">
                  刀工
                </dt>
                <dd className="font-body text-sm text-sumi">
                  {finestBlade.smith}
                </dd>
              </div>
              <div className="flex gap-4">
                <dt className="font-gothic text-xs text-nibi tracking-ja min-w-[3rem]">
                  時代
                </dt>
                <dd className="font-body text-sm text-sumi">
                  {finestBlade.era}
                </dd>
              </div>
            </dl>
            <p className="font-body text-base leading-loose tracking-ja text-keshizumi">
              {finestBlade.body}
            </p>
          </div>
        </div>
      </section>

      <HamonDivider className="w-full" />

      {/* ── 五・名だたる刀工と刀派 ── */}
      <section className="mx-auto max-w-6xl px-6 md:px-10 py-24">
        <h2 className="font-display text-3xl tracking-ja text-sumi mb-6">
          名だたる刀工と刀派
        </h2>
        <p className="font-body text-sm leading-loose tracking-ja text-keshizumi mb-14 max-w-2xl">
          刃の歴史は、鍛えた者の名と共にある。その技と魂を後の世に伝えた、四つの名を記す。
        </p>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {smiths.map((s) => (
            <article key={s.name} className="group">
              <div className="relative aspect-[4/3] overflow-hidden border border-nibi/40 bg-ai">
                <Image
                  src={s.image.src}
                  alt={s.image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="pt-4">
                <h3 className="font-display text-xl tracking-ja text-sumi">
                  {s.name}
                </h3>
                <p className="latin text-xs text-keshizumi mt-0.5">
                  {s.reading}
                </p>
                <p className="font-gothic text-[10px] text-nibi tracking-ja mt-1">
                  {s.era}
                </p>
                <p className="font-body text-sm text-keshizumi mt-2 leading-relaxed">
                  {s.note}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <HamonDivider className="w-full" />

      {/* ── 六・刀剣の種類（製品一覧）── */}
      <section className="mx-auto max-w-6xl px-6 md:px-10 py-24">
        <div className="flex items-baseline justify-between mb-14">
          <h2 className="font-display text-3xl tracking-ja text-sumi">
            刀剣の種類
          </h2>
        </div>
        <div className="grid gap-x-12 gap-y-16 md:grid-cols-3">
          {blades.map((b) => (
            <BladePlate key={b.slug} blade={b} />
          ))}
        </div>

        {/* すべての刀剣を見る — View Products */}
        <div className="mt-20 text-center">
          <Link
            href="/token"
            className="inline-block border border-sumi text-sumi font-gothic text-sm tracking-ja px-10 py-4 hover:bg-sumi hover:text-kinari transition-colors duration-300"
          >
            すべての刀剣を見る →
          </Link>
        </div>
      </section>
    </>
  );
}
