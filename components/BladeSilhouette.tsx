// 墨の線描（装飾）。縦横いずれかで用いる。反りは相州伝に倣い深く。

export function BladeSilhouette({
  className = "",
  horizontal = false,
}: {
  className?: string;
  horizontal?: boolean;
}) {
  if (horizontal) {
    // 横位置 — 幅広の帯に。柄を左、切先を右へ。
    return (
      <svg
        className={className}
        viewBox="0 0 900 200"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="一刀の線描"
      >
        {/* 棟（背）*/}
        <path
          d="M170 108 C 400 70, 640 72, 860 88"
          fill="none"
          stroke="var(--sumi)"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        {/* 刃 */}
        <path
          d="M170 140 C 400 128, 640 112, 860 92"
          fill="none"
          stroke="var(--sumi)"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path d="M860 88 L 860 92" stroke="var(--sumi)" strokeWidth="1.4" />
        {/* 鎬筋 */}
        <path
          d="M175 118 C 400 94, 640 90, 856 90"
          fill="none"
          stroke="var(--nibi)"
          strokeWidth="0.8"
        />
        {/* 刃文（湾れ）*/}
        <path
          d="M195 134 C 300 126, 380 130, 470 124 S 620 126, 710 118 S 820 108, 850 100"
          fill="none"
          stroke="var(--nibi)"
          strokeWidth="0.7"
          strokeDasharray="2 5"
        />
        {/* 鎺・柄 */}
        <rect x="150" y="106" width="16" height="38" fill="none" stroke="var(--sumi)" strokeWidth="1.1" />
        <line x1="120" y1="116" x2="120" y2="170" stroke="var(--sumi)" strokeWidth="1.4" />
        <rect x="20" y="124" width="98" height="20" fill="none" stroke="var(--sumi)" strokeWidth="1.2" />
      </svg>
    );
  }

  // 縦位置 — 紙上に立てる。
  return (
    <svg
      className={className}
      viewBox="0 0 200 900"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="紙の上に置かれた一刀の線描"
    >
      <path
        d="M112 40 C 96 220, 86 430, 84 640 C 83 720, 86 780, 92 840"
        fill="none"
        stroke="var(--sumi)"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M112 40 C 128 60, 134 120, 132 210 C 128 430, 118 630, 112 760 C 110 800, 106 824, 100 842"
        fill="none"
        stroke="var(--sumi)"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M112 40 C 116 44, 118 50, 120 56"
        fill="none"
        stroke="var(--sumi)"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M104 70 C 96 240, 90 440, 90 640 C 90 720, 92 780, 96 828"
        fill="none"
        stroke="var(--nibi)"
        strokeWidth="0.8"
      />
      <path
        d="M122 120 C 116 200, 126 280, 120 360 C 114 440, 124 520, 118 600 C 112 680, 120 740, 112 790"
        fill="none"
        stroke="var(--nibi)"
        strokeWidth="0.7"
        strokeDasharray="1 4"
      />
      <path d="M84 840 L 116 840" stroke="var(--sumi)" strokeWidth="1.4" strokeLinecap="round" />
      <rect x="90" y="846" width="20" height="44" fill="none" stroke="var(--sumi)" strokeWidth="1.2" />
    </svg>
  );
}
