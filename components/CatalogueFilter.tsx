"use client";

// 刀剣の絞り込み — 四つの client island の一つ。
// 静かなタグ（打刀 / 短刀 / 薙刀・槍 / 特殊）。四つの固定頁ではない（design-brief 刀剣）。

import { useState } from "react";
import type { Blade, BladeCategory } from "@/data/blades";
import { bladeCategories } from "@/data/blades";
import { BladePlate } from "./BladePlate";

type Tag = "総て" | BladeCategory;

export function CatalogueFilter({ blades }: { blades: Blade[] }) {
  const [tag, setTag] = useState<Tag>("総て");

  const tags: Tag[] = ["総て", ...bladeCategories];
  const shown =
    tag === "総て" ? blades : blades.filter((b) => b.category === tag);

  return (
    <div>
      <div
        role="group"
        aria-label="区分で絞り込む"
        className="flex flex-wrap gap-x-6 gap-y-2 mb-12"
      >
        {tags.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTag(t)}
            aria-pressed={tag === t}
            className={`font-gothic text-sm tracking-ja transition-colors ${
              tag === t ? "text-shu" : "text-keshizumi hover:text-sumi"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {shown.length > 0 ? (
        <div className="grid gap-x-12 gap-y-16 md:grid-cols-3">
          {shown.map((b) => (
            <BladePlate key={b.slug} blade={b} />
          ))}
        </div>
      ) : (
        // 空の佇まい（in character）— content-spec §8
        <p className="font-display text-xl text-keshizumi tracking-ja py-16">
          ただ今、鍛えております。
        </p>
      )}
    </div>
  );
}
