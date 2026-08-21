import type { Metadata } from "next";
import Link from "next/link";
import { HamonDivider } from "@/components/HamonDivider";

export const metadata: Metadata = {
  title: "個人情報保護方針",
  description:
    "鎌倉の刃における個人情報の取扱いについて。御問合せに際して頂戴する情報の扱いを記します。",
};

export default function PrivacyPage() {
  const sections = [
    {
      h: "一、個人情報の取得について",
      p: "手前どもは、御問合せや御誂えの御相談に際し、御芳名・御連絡先・御用向きなど、御対応に必要な限りの情報を頂戴いたします。御本人の同意なく、それ以外の情報をみだりに取得することはございませぬ。",
    },
    {
      h: "二、利用の目的",
      p: "頂戴した情報は、御問合せへの御返答、御誂えの御相談、及びそれに付随する御連絡のためにのみ用います。当初の目的の範囲を超えて用いることはございませぬ。",
    },
    {
      h: "三、第三者への提供",
      p: "法令に基づく場合を除き、御本人の同意なく、頂戴した個人情報を第三者へ提供することはございませぬ。",
    },
    {
      h: "四、安全の管理",
      p: "頂戴した情報が漏洩・滅失・毀損などなきよう、相応の注意をもって管理いたします。不要となりました情報は、速やかに廃棄いたします。",
    },
    {
      h: "五、御照会・訂正・削除",
      p: "御自身の情報の御照会、訂正、または削除を御希望の際は、御問合せよりお申し付けください。御本人であることを確かめました上で、速やかに対応いたします。",
    },
  ];

  return (
    <section className="mx-auto max-w-3xl px-6 md:px-10 py-20">
      <header className="mb-14">
        <h1 className="font-display text-4xl tracking-ja text-sumi">個人情報保護方針</h1>
        <p className="latin text-sm text-keshizumi mt-2">Privacy Policy</p>
      </header>

      <p className="font-body text-base leading-loose tracking-ja text-keshizumi mb-12">
        鎌倉の刃（以下「当方」と申します）は、御客様よりお預かりする個人情報を大切に扱うことを、
        営みの心得といたしております。その取扱いの方針を、以下に記します。
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
        本方針に関する御不明な点は、
        <Link href="/otoiawase" className="text-shu hover:underline underline-offset-4">
          御問合せ
        </Link>
        よりお尋ねください。
      </p>

      <HamonDivider className="w-full mt-20" />
    </section>
  );
}
