// 品の陳列 — 種類ごとの札。実写を大きく見せ、名・分類・価格を添える。

import Link from "next/link";
import Image from "next/image";
import type { Blade } from "@/data/blades";
import { formatYen } from "@/lib/format";

export function BladePlate({ blade }: { blade: Blade }) {
  return (
    <article className="group">
      <Link href={`/token/${blade.slug}`} className="block">
        {/* 実写（写真差替済）*/}
        <div className="relative aspect-[4/3] border border-nibi/40 bg-ai overflow-hidden">
          <Image
            src={blade.image}
            alt={blade.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <span className="absolute left-3 top-2.5 z-10 font-gothic text-[10px] text-kinari/90 tracking-ja bg-ai/70 px-2 py-0.5">
            {blade.bunrui}
          </span>
        </div>

        <div className="pt-5">
          <h3 className="font-display text-2xl tracking-ja text-sumi group-hover:text-shu transition-colors">
            {blade.mei}
            <span className="latin text-xs text-keshizumi ml-3 align-middle">
              {blade.romaji}
            </span>
          </h3>
          <p className="font-body text-sm text-keshizumi mt-3 leading-relaxed">
            {blade.provenance}
          </p>
          <div className="mt-5 flex items-baseline justify-between border-t border-nibi/30 pt-4">
            <span className="latin text-lg text-sumi">{formatYen(blade.priceYen)}</span>
            <span className="font-gothic text-xs text-shu tracking-ja group-hover:underline underline-offset-4">
              詳しく見る →
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
