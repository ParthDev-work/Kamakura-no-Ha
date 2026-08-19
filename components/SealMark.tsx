// 朱の落款（hanko）。ロゴ及び足元に用いる唯一の朱。画面の 2% 未満（design-brief §3）。

export function SealMark({
  size = 40,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <span
      className={className}
      style={{
        display: "inline-flex",
        width: size,
        height: size,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--shu)",
        color: "var(--kinari)",
        fontFamily: "var(--font-display), serif",
        fontWeight: 700,
        fontSize: size * 0.56,
        lineHeight: 1,
        borderRadius: 2,
      }}
      aria-hidden="true"
    >
      刃
    </span>
  );
}
