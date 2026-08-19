import type { Metadata } from "next";
import "./globals.css";
import { fontVariables } from "./fonts";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://kamakura-no-ha.example"),
  title: {
    default: "鎌倉の刃 — 相州伝の刀鍛冶",
    template: "%s ｜ 鎌倉の刃",
  },
  description:
    "鎌倉に伝わる相州伝の刀鍛冶。玉鋼を鍛え、土を置き、火に問う。一刀に、生涯を注ぐ。御誂えの御相談を承ります。",
  openGraph: {
    title: "鎌倉の刃 — 相州伝の刀鍛冶",
    description: "玉鋼を鍛え、土を置き、火に問う。一刀に、生涯を注ぐ。",
    locale: "ja_JP",
    type: "website",
    siteName: "鎌倉の刃",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={fontVariables}>
      <body className="min-h-screen flex flex-col">
        <a
          href="#honbun"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-sumi focus:text-kinari focus:px-4 focus:py-2 font-gothic text-sm"
        >
          本文へ進む
        </a>
        <Nav />
        <main id="honbun" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
