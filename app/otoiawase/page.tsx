import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "御問合せ",
  description:
    "御誂えの御相談を承ります。一振りの御相談、心よりお待ち申し上げます。",
};

export default async function OtoiawasePage({
  searchParams,
}: {
  searchParams: Promise<{ blade?: string }>;
}) {
  const { blade } = await searchParams;

  return (
    <section className="mx-auto max-w-3xl px-6 md:px-10 py-20">
      <header className="mb-14 max-w-xl">
        <h1 className="font-display text-4xl tracking-ja text-sumi">御問合せ</h1>
        <p className="font-body text-base leading-loose tracking-ja text-keshizumi mt-6">
          一振りの御相談、心よりお待ち申し上げます。
          御希望の品、御用途など、記せる限りをお認め頂ければ、追ってお返事差し上げます。
        </p>
      </header>

      <ContactForm defaultBlade={blade ?? ""} />
    </section>
  );
}
