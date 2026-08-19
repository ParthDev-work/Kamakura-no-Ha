import type { Metadata } from "next";
import { CatalogueFilter } from "@/components/CatalogueFilter";
import { blades } from "@/data/blades";

export const metadata: Metadata = {
  title: "刀剣",
  description:
    "太刀・打刀・脇差・短刀・薙刀・槍。相州伝に鍛えし刃の数々を、種類ごとに陳列いたします。",
};

export default function TokenPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 md:px-10 py-20">
      <header className="mb-16 max-w-2xl">
        <h1 className="font-display text-4xl tracking-ja text-sumi">刀剣</h1>
        <p className="font-body text-base leading-loose tracking-ja text-keshizumi mt-6">
          太刀より槍まで、相州伝に鍛えし刃の数々を陳列いたします。
          いずれも玉鋼より起こしたもの。名を選び、その造りと姿を御覧じ下さいませ。
        </p>
      </header>

      <CatalogueFilter blades={blades} />
    </section>
  );
}
