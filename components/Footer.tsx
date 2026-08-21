import Link from "next/link";
import { navLinks } from "@/lib/nav";
import { SealMark } from "./SealMark";
import { HamonDivider } from "./HamonDivider";

export function Footer() {
  return (
    <footer className="mt-24">
      <HamonDivider className="w-full" />
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-14">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div className="flex items-center gap-3">
            <SealMark size={34} />
            <span className="flex flex-col leading-none">
              <span className="font-display text-lg tracking-ja">鎌倉の刃</span>
              <span className="latin text-[10px] text-keshizumi mt-1">
                Kamakura no Ha
              </span>
            </span>
          </div>

          <nav aria-label="足元" className="md:flex-1 md:flex md:justify-center">
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-gothic text-xs text-keshizumi hover:text-sumi transition-colors tracking-ja"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="font-gothic text-xs text-keshizumi leading-loose md:text-right">
            <p>所在地　神奈川県鎌倉市</p>
            <p>
              営業時間　午前十時 ― 午後五時
              <span className="latin"> (10:00–17:00)</span>
            </p>
            <p>定休日　水曜</p>
          </div>
        </div>

        <nav
          aria-label="案内"
          className="mt-12 pt-8 border-t border-nibi/20 flex flex-wrap items-center gap-x-6 gap-y-3"
        >
          <Link
            href="/about"
            className="font-gothic text-[11px] text-keshizumi hover:text-sumi transition-colors tracking-ja"
          >
            鎌倉の刃について
          </Link>
          <Link
            href="/privacy"
            className="font-gothic text-[11px] text-keshizumi hover:text-sumi transition-colors tracking-ja"
          >
            個人情報保護方針
          </Link>
          <Link
            href="/terms"
            className="font-gothic text-[11px] text-keshizumi hover:text-sumi transition-colors tracking-ja"
          >
            利用規約
          </Link>
          <Link
            href="/faq"
            className="font-gothic text-[11px] text-keshizumi hover:text-sumi transition-colors tracking-ja"
          >
            よくある御質問
          </Link>
        </nav>

        <p className="font-gothic text-[10px] text-nibi mt-8 tracking-ja">
          © 鎌倉の刃
        </p>
      </div>
    </footer>
  );
}
