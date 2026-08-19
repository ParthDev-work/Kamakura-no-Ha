// 刃文の一本罫 — 本サイト唯一の仕切り、且つ通底の意匠（design-brief §2）。
// 直刃に湾れ（notare）を交えた、実在の刃文に倣う細き波の罫。

export function HamonDivider({
  className = "",
  ariaHidden = true,
}: {
  className?: string;
  ariaHidden?: boolean;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 1200 24"
      width="100%"
      height="24"
      preserveAspectRatio="none"
      role={ariaHidden ? "presentation" : "img"}
      aria-hidden={ariaHidden}
      focusable="false"
    >
      {/* 湾れ（notare）— なだらかな谷と、切先寄りの小乱れ */}
      <path
        d="M0 12
           C 60 12, 90 6, 140 6
           S 220 16, 300 15
           S 400 5, 480 8
           S 580 18, 660 14
           S 760 6, 840 9
           S 930 17, 1010 12
           S 1120 7, 1200 11"
        fill="none"
        stroke="var(--nibi)"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
