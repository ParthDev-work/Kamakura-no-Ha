import type { Metadata } from "next";
import Link from "next/link";
import { HamonDivider } from "@/components/HamonDivider";

export const metadata: Metadata = {
  title: "鎌倉の刃について",
  description:
    "鎌倉の刃は、相州伝に連なる刃と職人の家にございます。所在、営みの心得、御案内をここに記します。",
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 md:px-10 py-20">
      <header className="mb-14">
        <h1 className="font-display text-4xl tracking-ja text-sumi">鎌倉の刃について</h1>
        <p className="latin text-sm text-keshizumi mt-2">About</p>
      </header>

      <div className="space-y-10">
        <p className="font-body text-lg leading-loose tracking-ja text-sumi">
          「鎌倉の刃」は、相州伝に連なる刃と職人の家にございます。
        </p>

        <p className="font-body text-base leading-loose tracking-ja text-keshizumi">
          鎌倉の地に伝わる鍛えの理を旨とし、玉鋼を鍛え、土を置き、火に問う——
          その営みと、生まれ出づる刃の数々を、この場に記しております。
          太刀より槍に至るまで、用と美を兼ね備えた一振りを御覧に入れます。
        </p>

        <p className="font-body text-base leading-loose tracking-ja text-keshizumi">
          名のある師の血を引くと申すつもりはございませぬ。
          ただ、この地に伝わる鍛えの心を一つも損なわず次へ渡す——それを務めと心得ております。
          鍛えの理と工程については、
          <Link href="/kajiba" className="text-shu hover:underline underline-offset-4">
            鍛冶場
          </Link>
          および
          <Link href="/takumi" className="text-shu hover:underline underline-offset-4">
            匠の技
          </Link>
          に詳しく記しております。
        </p>

        <div className="border-t border-nibi/30 pt-10">
          <h2 className="font-display text-2xl tracking-ja text-sumi mb-8">御案内</h2>
          <dl className="space-y-5">
            <div className="flex gap-6">
              <dt className="font-gothic text-xs text-nibi tracking-ja min-w-[5rem]">所在地</dt>
              <dd className="font-body text-sm text-sumi">神奈川県鎌倉市</dd>
            </div>
            <div className="flex gap-6">
              <dt className="font-gothic text-xs text-nibi tracking-ja min-w-[5rem]">営業時間</dt>
              <dd className="font-body text-sm text-sumi">
                午前十時 ― 午後五時<span className="latin"> （10:00–17:00）</span>
              </dd>
            </div>
            <div className="flex gap-6">
              <dt className="font-gothic text-xs text-nibi tracking-ja min-w-[5rem]">定休日</dt>
              <dd className="font-body text-sm text-sumi">水曜</dd>
            </div>
            <div className="flex gap-6">
              <dt className="font-gothic text-xs text-nibi tracking-ja min-w-[5rem]">御用向き</dt>
              <dd className="font-body text-sm text-sumi">
                御誂え・御相談は
                <Link href="/otoiawase" className="text-shu hover:underline underline-offset-4">
                  御問合せ
                </Link>
                よりお申し付けください。
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <HamonDivider className="w-full mt-20" />
    </section>
  );
}
