import Link from "next/link";
import { navLinks } from "@/lib/nav";
import { SealMark } from "./SealMark";
import { MobileMenu } from "./MobileMenu";

export function Nav() {
  return (
    <header className="border-b border-nibi/40">
      <nav
        aria-label="全域"
        className="mx-auto max-w-6xl px-6 md:px-10 h-20 flex items-center justify-between"
      >
        {/* ロゴ — 朱の落款に、下に小さく romaji */}
        <Link href="/" className="flex items-center gap-3" aria-label="鎌倉の刃 — 玄関へ">
          <SealMark size={38} />
          <span className="flex flex-col leading-none">
            <span className="font-display text-xl tracking-ja text-sumi">鎌倉の刃</span>
            <span className="latin text-[10px] text-keshizumi mt-1 tracking-wide">
              Kamakura no Ha
            </span>
          </span>
        </Link>

        {/* 横並びの小さなゴシック（design-brief §5）— 中・大画面 */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-gothic text-sm text-keshizumi hover:text-sumi transition-colors tracking-ja"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* 暖簾（mobile menu）— 小画面のみ */}
        <MobileMenu />
      </nav>
    </header>
  );
}
