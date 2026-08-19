"use client";

// 買い物籠へ — 見た目のみ。押すと暫し「籠に加えました」に変わる（何も記録せず）。

import { useEffect, useRef, useState } from "react";

export function AddToCartButton({ label = "買い物籠へ入れる" }: { label?: string }) {
  const [added, setAdded] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  const onClick = () => {
    setAdded(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setAdded(false), 2200);
  };

  return (
    <button
      type="button"
      onClick={onClick}
      aria-live="polite"
      className={`font-gothic text-sm tracking-ja border px-10 py-4 transition-colors ${
        added
          ? "border-shu text-shu"
          : "border-sumi text-sumi hover:bg-sumi hover:text-kinari"
      }`}
    >
      {added ? "籠に加えました" : label}
    </button>
  );
}
