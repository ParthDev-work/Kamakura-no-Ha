import type { Metadata } from "next";
import Link from "next/link";
import { HamonDivider } from "@/components/HamonDivider";

export const metadata: Metadata = {
  title: "よくある御質問",
  description: "御誂え、手入れ、刀剣の所持など、よくお寄せいただく御質問にお答えいたします。",
};

export default function FAQPage() {
  const faqs = [
    {
      q: "御誂え（オーダー）の手順を教えてください。",
      a: "まずは「御問合せ」より、御希望の品（刀、脇差など）や御用途を記してお便りください。追って手前より御連絡差し上げ、細かな寸法や拵（こしらえ）の御要望を伺います。意匠が定まりましたら、打ち始めとなります。",
    },
    {
      q: "完成までにどのくらいの月日を要しますか。",
      a: "一振りを打ち、研ぎ上げ、拵を設えるまでには、およそ半年から一年ほどの月日を頂戴しております。手仕事ゆえ、時を早めることは適いませぬ。何卒ご容赦ください。",
    },
    {
      q: "素材には何を用いますか。",
      a: "古式に則り、たたら吹きにて得られた「玉鋼（たまはがね）」のみを用いております。これを幾度も折り返し鍛錬することで、強靭にして美しい地鉄が生まれます。",
    },
    {
      q: "手入れはどのようにすればよいですか。",
      a: "古い油を丁子油にて拭い去り、新たに薄く油を引くのが基本にございます。刀身には決して素手で触れず、湿気を避けて御納めください。季節の変わり目には、鞘から抜いて風を通すことをお勧めいたします。",
    },
    {
      q: "日本刀を所持するのに資格は要りますか。",
      a: "特別な資格は要りませぬが、美術刀剣としての「銃砲刀剣類登録証」が必要となります。手前どもの元を離れる刃にはすべて登録証をお付けしておりますので、御安心ください。名義変更の手続きのみ、お住まいの都道府県へお願いいたします。",
    },
  ];

  return (
    <section className="mx-auto max-w-3xl px-6 md:px-10 py-20">
      <header className="mb-14">
        <h1 className="font-display text-4xl tracking-ja text-sumi">よくある御質問</h1>
        <p className="latin text-sm text-keshizumi mt-2">Q/A</p>
      </header>

      <div className="space-y-12">
        {faqs.map((faq, index) => (
          <article key={index} className="border-b border-nibi/30 pb-10">
            <h2 className="font-display text-lg tracking-ja text-sumi mb-4 flex gap-4">
              <span className="text-shu">問.</span>
              <span>{faq.q}</span>
            </h2>
            <div className="font-body text-base leading-loose tracking-ja text-keshizumi flex gap-4">
              <span className="text-nibi">答.</span>
              <p>{faq.a}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="font-body text-sm text-keshizumi tracking-ja mb-6">
          その他、ご不明な点がございましたら、何なりとお尋ねください。
        </p>
        <Link
          href="/otoiawase"
          className="inline-block border border-sumi text-sumi font-gothic text-sm tracking-ja px-10 py-4 hover:bg-sumi hover:text-kinari transition-colors duration-300"
        >
          御問合せへ →
        </Link>
      </div>

      <HamonDivider className="w-full mt-24" />
    </section>
  );
}
