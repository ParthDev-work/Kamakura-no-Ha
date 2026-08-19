// 写真差替の枠。実写を /public に置き次第、この枠を next/image に差し替える。
// 紙の色味に沈めた無地の面。かすかな注記のみ。

export function PhotoPlaceholder({
  ratio = "4 / 3",
  caption = "写真 ― 後日差替",
  className = "",
}: {
  ratio?: string;
  caption?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative w-full border border-nibi/30 overflow-hidden ${className}`}
      style={{
        aspectRatio: ratio,
        backgroundColor: "color-mix(in srgb, var(--kinari) 82%, var(--nibi))",
      }}
      aria-hidden="true"
    >
      {/* 対角の細線で「枠」であることを示す */}
      <svg
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 100 75"
      >
        <line x1="0" y1="0" x2="100" y2="75" stroke="var(--nibi)" strokeWidth="0.2" opacity="0.4" />
        <line x1="100" y1="0" x2="0" y2="75" stroke="var(--nibi)" strokeWidth="0.2" opacity="0.4" />
      </svg>
      <span className="absolute left-3 bottom-3 font-gothic text-[10px] text-keshizumi tracking-ja">
        {caption}
      </span>
    </div>
  );
}
