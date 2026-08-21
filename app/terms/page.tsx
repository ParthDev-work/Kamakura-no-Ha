import type { Metadata } from "next";
import Link from "next/link";
import { HamonDivider } from "@/components/HamonDivider";

export const metadata: Metadata = {
  title: "利用規約",
  description:
    "鎌倉の刃の閲覧及び御利用にあたっての規約。掲載内容、価格の表記、著作の権利などについて記します。",
};

export default function TermsPage() {
  const sections = [
    {
      h: "第一条（本規約について）",
      p: "本規約は、「鎌倉の刃」（以下「本サイト」と申します）の閲覧及び御利用の条件を定めるものにございます。本サイトを御利用いただいた時点で、本規約に御同意いただいたものといたします。",
    },
    {
      h: "第二条（掲載内容について）",
      p: "本サイトに記す刀剣の解説、工程、及び歴史に関する記述は、相州伝を中心とする一般の知識に基づくものにございます。特定の刀工の系譜や由緒を偽り、または保証するものではございませぬ。",
    },
    {
      h: "第三条（価格の表記について）",
      p: "本サイトに記す価格は、品の格を偲ぶための目安として掲げる参考の表記にございます。実際の御誂えの価格は、寸法・拵・御要望に応じて改めて御相談の上、定めさせていただきます。「籠に加える」の操作は品定めの覚えとしての表示にとどまり、売買の契約を結ぶものではございませぬ。",
    },
    {
      h: "第四条（御誂えの御相談）",
      p: "御誂えの御相談は、御問合せをもって承ります。御相談の成立、及び打ち始めの可否は、都度、当方の判断によるものといたします。",
    },
    {
      h: "第五条（著作の権利）",
      p: "本サイトに掲げる文章・意匠・写真その他一切の内容の権利は、当方または正当な権利者に帰属いたします。無断にて複製・転載・改変なさることは、御遠慮願います。",
    },
    {
      h: "第六条（免責）",
      p: "本サイトの内容には万全を期しておりますが、その完全性を保証するものではございませぬ。本サイトの御利用により生じた事柄につき、当方は責を負いかねます。何卒御了承ください。",
    },
    {
      h: "第七条（規約の変更）",
      p: "本規約は、必要に応じて改めることがございます。変更後の規約は、本サイトに掲げた時をもって効力を生じるものといたします。",
    },
  ];

  return (
    <section className="mx-auto max-w-3xl px-6 md:px-10 py-20">
      <header className="mb-14">
        <h1 className="font-display text-4xl tracking-ja text-sumi">利用規約</h1>
        <p className="latin text-sm text-keshizumi mt-2">Terms of Service</p>
      </header>

      <p className="font-body text-base leading-loose tracking-ja text-keshizumi mb-12">
        本サイトを御利用いただくにあたり、以下の規約に御目通しくださいますようお願い申し上げます。
      </p>

      <div className="space-y-12">
        {sections.map((s) => (
          <article key={s.h} className="border-b border-nibi/30 pb-10">
            <h2 className="font-display text-lg tracking-ja text-sumi mb-4">{s.h}</h2>
            <p className="font-body text-base leading-loose tracking-ja text-keshizumi">{s.p}</p>
          </article>
        ))}
      </div>

      <p className="font-body text-sm leading-loose tracking-ja text-keshizumi mt-12">
        本規約に関する御不明な点は、
        <Link href="/otoiawase" className="text-shu hover:underline underline-offset-4">
          御問合せ
        </Link>
        よりお尋ねください。
      </p>

      <HamonDivider className="w-full mt-20" />
    </section>
  );
}
