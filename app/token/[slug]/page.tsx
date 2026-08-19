import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blades, getBlade } from "@/data/blades";
import { processStages } from "@/data/process";
import { formatYen } from "@/lib/format";
import { BladeDiagram } from "@/components/BladeDiagram";
import { AddToCartButton } from "@/components/AddToCartButton";
import { HamonDivider } from "@/components/HamonDivider";

export function generateStaticParams() {
  return blades.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blade = getBlade(slug);
  if (!blade) return { title: "その刃は見つかりませぬ" };
  return {
    title: blade.mei,
    description: `${blade.mei}　―　${blade.provenance}　刃長 ${blade.hacho}、${blade.hagane}、${blade.tsukurikomi}。${formatYen(
      blade.priceYen
    )}。`,
  };
}

export default async function BladeDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blade = getBlade(slug);
  if (!blade) notFound();

  const spec: [string, string, boolean?][] = [
    ["分類", blade.bunrui],
    ["刃長", blade.hacho, true],
    ["反り", blade.sori],
    ["鋼", blade.hagane],
    ["造り込み", blade.tsukurikomi],
  ];

  return (
    <article className="mx-auto max-w-5xl px-6 md:px-10 py-20">
      <p className="mb-8">
        <Link
          href="/token"
          className="font-gothic text-sm text-keshizumi hover:text-sumi tracking-ja"
        >
          ← 刀剣へ戻る
        </Link>
      </p>

      <header className="mb-16 max-w-2xl">
        <p className="font-gothic text-xs text-nibi tracking-ja mb-4">
          {blade.bunrui}
        </p>
        <h1 className="font-display text-4xl md:text-5xl tracking-ja text-sumi">
          {blade.mei}
          <span className="latin text-sm text-keshizumi ml-4 align-middle">
            {blade.romaji}
          </span>
        </h1>
        <p className="font-body text-lg leading-loose tracking-ja text-keshizumi mt-6">
          {blade.note}
        </p>
      </header>

      {/* 刀身図 — 対話の中心 */}
      <section aria-labelledby="zu" className="mb-20">
        <h2 id="zu" className="font-display text-xl tracking-ja text-sumi mb-6">
          刀身図
        </h2>
        <p className="font-body text-sm text-keshizumi mb-8 leading-relaxed">
          各部に触れ、または矢印キーにて辿れば、名を顕します。
        </p>
        <BladeDiagram />
      </section>

      <HamonDivider className="w-full" />

      {/* 造りの工程 — how it's made */}
      <section aria-labelledby="kotei" className="mt-16">
        <h2 id="kotei" className="font-display text-2xl tracking-ja text-sumi mb-4">
          造りの工程
        </h2>
        <p className="font-body text-sm leading-loose tracking-ja text-keshizumi mb-4">
          {blade.makingNote}
        </p>
        <p className="font-body text-xs leading-loose tracking-ja text-nibi mb-12">
          この一振りも、次の六つの段を経て仕上がります。
        </p>

        <ol className="space-y-8">
          {processStages.map((s) => (
            <li
              key={s.n}
              className={`grid grid-cols-[2.5rem_1fr] gap-5 ${
                s.dark ? "bg-ai text-kinari py-6 pr-6 -ml-2 pl-2" : ""
              }`}
            >
              <span
                className={`font-display text-xl ${s.dark ? "text-nibi" : "text-nibi"}`}
              >
                {s.n}
              </span>
              <div>
                <h3
                  className={`font-display text-lg tracking-ja ${
                    s.dark ? "text-kinari" : "text-sumi"
                  }`}
                >
                  {s.title}
                </h3>
                <p
                  className="font-body text-sm leading-loose tracking-ja mt-2"
                  style={{ color: s.dark ? "#D8CFBC" : "var(--keshizumi)" }}
                >
                  {s.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <HamonDivider className="w-full mt-16" />

      {/* 寸法・鋼 */}
      <section className="mt-16">
        <h2 className="font-display text-xl tracking-ja text-sumi mb-6">寸法と鋼</h2>
        <dl className="divide-y divide-nibi/30 max-w-md">
          {spec.map(([k, v, latin]) => (
            <div key={k} className="flex justify-between py-3">
              <dt className="font-gothic text-sm text-nibi tracking-ja">{k}</dt>
              <dd className={`font-body text-sm text-sumi ${latin ? "latin" : ""}`}>
                {v}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* 価格と買い物籠 */}
      <section className="mt-16 border-t border-nibi/40 pt-12">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
          <div>
            <p className="font-gothic text-xs text-nibi tracking-ja mb-2">価格（税込）</p>
            <p className="latin text-3xl text-sumi">{formatYen(blade.priceYen)}</p>
            <p className="font-body text-xs text-keshizumi mt-3 leading-relaxed">
              白鞘に納めての御渡しにございます。拵をお望みの折は別途承ります。
            </p>
          </div>
          <AddToCartButton />
        </div>
      </section>
    </article>
  );
}
