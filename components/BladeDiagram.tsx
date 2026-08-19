"use client";

// 刀身図 — 本サイト主たる client island（design-brief §6・§7）。
// SVG の各部を hover / tap / キーボードで辿り、用語を顕す。
// キーボード可、prefers-reduced-motion 尊重、日本語の代替文。

import { useRef, useState } from "react";
import { anatomyParts } from "@/data/anatomy";

const VB_W = 1000;
const VB_H = 220;

export function BladeDiagram() {
  const [activeId, setActiveId] = useState<string>(anatomyParts[0].id);
  const btnRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const active = anatomyParts.find((p) => p.id === activeId) ?? anatomyParts[0];

  const focusByIndex = (i: number) => {
    const n = anatomyParts.length;
    const idx = ((i % n) + n) % n;
    const part = anatomyParts[idx];
    setActiveId(part.id);
    btnRefs.current[part.id]?.focus();
  };

  const onKey = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      focusByIndex(index + 1);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      focusByIndex(index - 1);
    }
  };

  return (
    <div>
      <div
        className="relative w-full border border-nibi/40 bg-kinari"
        style={{ aspectRatio: `${VB_W} / ${VB_H}` }}
      >
        <svg
          viewBox={`0 0 ${VB_W} ${VB_H}`}
          width="100%"
          height="100%"
          role="img"
          aria-label="刀身の各部を示す図。下の一覧、または矢印キーで各部を辿れます。"
          className="absolute inset-0"
        >
          {/* 棟（背）*/}
          <path
            d="M250 112 C 480 78, 720 80, 940 92"
            fill="none"
            stroke="var(--sumi)"
            strokeWidth="1.4"
          />
          {/* 刃（刃先）*/}
          <path
            d="M250 146 C 480 132, 720 118, 940 96"
            fill="none"
            stroke="var(--sumi)"
            strokeWidth="1.4"
          />
          {/* 切先を結ぶ */}
          <path d="M940 92 L 940 96" stroke="var(--sumi)" strokeWidth="1.4" />
          {/* 鎬筋 */}
          <path
            d="M255 122 C 480 100, 720 96, 936 94"
            fill="none"
            stroke="var(--nibi)"
            strokeWidth="0.8"
          />
          {/* 刃文（湾れ）*/}
          <path
            d="M270 140 C 360 132, 420 136, 500 130 S 640 132, 720 124 S 860 116, 930 104"
            fill="none"
            stroke="var(--nibi)"
            strokeWidth="0.8"
            strokeDasharray="2 5"
          />
          {/* 鎺 */}
          <rect
            x="228"
            y="110"
            width="18"
            height="40"
            fill="none"
            stroke="var(--sumi)"
            strokeWidth="1.1"
          />
          {/* 鍔 */}
          <line
            x1="196"
            y1="120"
            x2="196"
            y2="176"
            stroke="var(--sumi)"
            strokeWidth="1.4"
          />
          {/* 柄 */}
          <rect
            x="40"
            y="138"
            width="150"
            height="22"
            fill="none"
            stroke="var(--sumi)"
            strokeWidth="1.2"
          />
          {/* 目釘 */}
          <circle
            cx="120"
            cy="149"
            r="3.4"
            fill="none"
            stroke="var(--sumi)"
            strokeWidth="1"
          />

          {/* 引出し線と活性点 */}
          {anatomyParts.map((p) => {
            const on = p.id === active.id;
            return (
              <g key={p.id} aria-hidden="true">
                <circle
                  cx={p.x}
                  cy={p.y}
                  r={on ? 5 : 3}
                  fill={on ? "var(--shu)" : "var(--nibi)"}
                />
              </g>
            );
          })}
        </svg>

        {/* 対話用の当たり — HTML ボタンを百分率で重ねる（キーボード可） */}
        {anatomyParts.map((p, i) => (
          <button
            key={p.id}
            ref={(el) => {
              btnRefs.current[p.id] = el;
            }}
            type="button"
            onMouseEnter={() => setActiveId(p.id)}
            onFocus={() => setActiveId(p.id)}
            onClick={() => setActiveId(p.id)}
            onKeyDown={(e) => onKey(e, i)}
            aria-pressed={p.id === active.id}
            aria-label={`${p.term}（${p.reading}）`}
            className="absolute -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-sm"
            style={{
              left: `${(p.x / VB_W) * 100}%`,
              top: `${(p.y / VB_H) * 100}%`,
            }}
          >
            <span className="sr-only">{p.term}</span>
          </button>
        ))}
      </div>

      {/* 顕れる用語 */}
      <div
        aria-live="polite"
        className="mt-6 border-l-2 border-shu pl-5 min-h-[5.5rem]"
      >
        <p className="font-display text-2xl tracking-ja text-sumi">
          {active.term}
          <span className="latin text-sm text-keshizumi ml-3">
            {active.reading}
          </span>
        </p>
        <p className="font-body text-[15px] text-keshizumi mt-2 leading-relaxed">
          {active.desc}
        </p>
      </div>

      {/* 各部の一覧（図に頼らぬ辿り方も残す）*/}
      <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
        {anatomyParts.map((p, i) => (
          <li key={p.id}>
            <button
              type="button"
              onClick={() => setActiveId(p.id)}
              onKeyDown={(e) => onKey(e, i)}
              className={`font-gothic text-sm tracking-ja transition-colors ${
                p.id === active.id
                  ? "text-shu"
                  : "text-keshizumi hover:text-sumi"
              }`}
            >
              {p.term}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
