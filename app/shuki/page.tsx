import type { Metadata } from "next";
import Link from "next/link";
import { journal } from "@/data/journal";

export const metadata: Metadata = {
  title: "手記",
  description: "鍛冶の手記。刀から庖丁へ受け継がれた理をはじめ、鋼と火をめぐる覚書。",
};

export default function ShukiPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 md:px-10 py-20">
      <header className="mb-16">
        <h1 className="font-display text-4xl tracking-ja text-sumi">手記</h1>
        <p className="font-body text-base leading-loose tracking-ja text-keshizumi mt-6">
          鍛冶の覚書にございます。ブログにあらず、火と鋼に向き合う日々の書き留めを、
          折にふれ綴っております。
        </p>
      </header>

      <ul className="divide-y divide-nibi/30">
        {journal.map((e) => (
          <li key={e.slug} className="py-8">
            <Link href={`/shuki/${e.slug}`} className="group block">
              <p className="font-gothic text-xs text-nibi tracking-ja mb-3 latin">
                {e.date}
              </p>
              <h2 className="font-display text-2xl tracking-ja text-sumi group-hover:text-shu transition-colors">
                {e.title}
                {e.subtitle && (
                  <span className="block font-body text-base text-keshizumi mt-2">
                    ― {e.subtitle}
                  </span>
                )}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
