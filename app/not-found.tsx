import Link from "next/link";
import { HamonDivider } from "@/components/HamonDivider";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-6 md:px-10 py-32 text-center">
      <p className="font-gothic text-sm text-nibi tracking-ja latin">404</p>
      <h1 className="font-display text-3xl md:text-4xl tracking-ja text-sumi mt-6">
        その刃は、まだ打たれておりません。
      </h1>
      <div className="my-12">
        <HamonDivider className="w-full" />
      </div>
      <p className="font-body text-base leading-loose tracking-ja text-keshizumi">
        御探しの頁は見つかりませなんだ。玄関より、改めて御訪ね下さいませ。
      </p>
      <p className="mt-10">
        <Link
          href="/"
          className="inline-block font-gothic text-sm tracking-ja border border-sumi px-8 py-3 text-sumi hover:bg-sumi hover:text-kinari transition-colors"
        >
          玄関へ戻る
        </Link>
      </p>
    </section>
  );
}
