import type { Metadata } from "next";
import { HamonDivider } from "@/components/HamonDivider";

export const metadata: Metadata = {
  title: "鍛冶場",
  description:
    "相州伝に連なる鎌倉の鍛冶場。深き反りと冴えた刃文を旨とし、誂えの一振りに生涯を注ぎます。",
};

export default function KajibaPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 md:px-10 py-20">
      <h1 className="font-display text-4xl tracking-ja text-sumi">鍛冶場</h1>

      <div className="mt-14 space-y-10">
        <p className="font-body text-lg leading-loose tracking-ja text-sumi">
          鎌倉の地にて、相州伝の鍛冶を営んでおります。
        </p>

        <p className="font-body text-base leading-loose tracking-ja text-keshizumi">
          相州伝は、この鎌倉を中心に興った鍛えの流れにございます。
          深き反り、活きた刃文、そして頑健なる造り込み——その手法と美意識を受け継ぎ、
          日々、火に向かっております。
        </p>

        <p className="font-body text-base leading-loose tracking-ja text-keshizumi">
          名のある師の血を引くと申すつもりはございませぬ。
          いつ興ったと数え上げるつもりも、位を誇るつもりもございませぬ。
          ただ、この地に伝わる鍛えの理を、一つも損なわず次へ渡す——それが手前の務めと心得ております。
        </p>

        <blockquote className="border-l-2 border-shu pl-6 my-4">
          <p className="font-display text-xl leading-relaxed tracking-ja text-sumi">
            玉鋼を鍛え、土を置き、火に問う。
          </p>
        </blockquote>

        <p className="font-body text-base leading-loose tracking-ja text-keshizumi">
          一振りを打つに、幾日も要します。折り返し、火造り、土置き、焼き入れ、そして研ぎ。
          いずれの段も、手を抜けばそのまま刃に表れます。
          ゆえに、急がず、驕らず、ただ黙して槌を振るうのみにございます。
        </p>

        <p className="font-body text-base leading-loose tracking-ja text-keshizumi">
          手前どもは、刀のほか、他の職人の求めに応じて道具の鋼も鍛えております。
          一振りの御相談、心よりお待ち申し上げます。
        </p>
      </div>

      <HamonDivider className="w-full mt-20" />
    </section>
  );
}
