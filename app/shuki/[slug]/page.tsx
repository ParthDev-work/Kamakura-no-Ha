import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { journal, getEssay } from "@/data/journal";
import { HamonDivider } from "@/components/HamonDivider";

export function generateStaticParams() {
  return journal.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const essay = getEssay(slug);
  if (!essay) return { title: "その手記は見つかりませぬ" };
  return {
    title: essay.subtitle ? `${essay.title} ― ${essay.subtitle}` : essay.title,
    description: essay.paragraphs[0],
  };
}

export default async function EssayPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const essay = getEssay(slug);
  if (!essay) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 md:px-10 py-20">
      <p className="mb-10">
        <Link
          href="/shuki"
          className="font-gothic text-sm text-keshizumi hover:text-sumi tracking-ja"
        >
          ← 手記へ戻る
        </Link>
      </p>

      <header className="mb-16">
        <p className="font-gothic text-xs text-nibi tracking-ja mb-4 latin">
          {essay.date}
        </p>
        <h1 className="font-display text-4xl md:text-5xl tracking-ja text-sumi leading-tight">
          {essay.title}
        </h1>
        {essay.subtitle && (
          <p className="font-body text-lg text-keshizumi mt-4">― {essay.subtitle}</p>
        )}
      </header>

      {/* 縦の引用（design-brief §4・content-spec §5） */}
      <div className="my-16 flex justify-center">
        <blockquote className="tategaki tategaki-responsive border-shu md:border-r-2 md:pr-6">
          <p className="font-display text-2xl md:text-3xl leading-relaxed tracking-[0.1em] text-sumi">
            {essay.pullQuote}
          </p>
        </blockquote>
      </div>

      <div className="space-y-8">
        {essay.paragraphs.map((p, i) => (
          <p
            key={i}
            className="font-body text-base md:text-lg leading-loose tracking-ja text-sumi"
          >
            {p}
          </p>
        ))}
      </div>

      <HamonDivider className="w-full mt-20" />
    </article>
  );
}
