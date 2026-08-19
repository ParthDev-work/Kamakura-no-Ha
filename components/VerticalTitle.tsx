// 縦書きの見出し（design-brief §4）。狭い画面では横書きへ穏やかに崩れる。

export function VerticalTitle({
  children,
  romaji,
  className = "",
}: {
  children: React.ReactNode;
  romaji?: string;
  className?: string;
}) {
  return (
    <div className={`flex items-start gap-3 ${className}`}>
      <h2 className="tategaki tategaki-responsive font-display text-2xl md:text-3xl tracking-ja text-sumi">
        {children}
      </h2>
      {romaji && (
        <span className="latin text-[11px] text-nibi mt-1 md:mt-0">
          {romaji}
        </span>
      )}
    </div>
  );
}
