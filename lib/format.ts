// 円建ての表示（模擬価格）。￥2,400,000 の体裁。
const yen = new Intl.NumberFormat("ja-JP", {
  style: "currency",
  currency: "JPY",
  maximumFractionDigits: 0,
});

export function formatYen(n: number): string {
  return yen.format(n);
}
