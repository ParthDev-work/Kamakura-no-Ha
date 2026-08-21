"use client";

// 暖簾（のれん）— 小画面のナビゲーション。四つの client island の一つ。
import { useEffect, useState } from "react";
import Link from "next/link";
import { navLinks } from "@/lib/nav";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  // 開いている間は本体のスクロールを止める
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Esc で閉じる
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="品書きを開く"
        aria-expanded={open}
        className="font-gothic text-sm text-sumi px-2 py-1 tracking-ja"
      >
        品書
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50"
          role="dialog"
          aria-modal="true"
          aria-label="品書き"
        >
          {/* 暖簾が下りるように現れる */}
          <div
            className="absolute inset-0 bg-kinari"
            style={{ animation: "ha-rise 0.5s ease both" }}
          />
          <div className="relative h-full flex flex-col px-8 pt-8">
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="品書きを閉じる"
                className="font-gothic text-sm text-sumi px-2 py-1 tracking-ja"
              >
                閉じる
              </button>
            </div>
            <ul className="flex-1 flex flex-col justify-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-3xl text-sumi tracking-ja"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
