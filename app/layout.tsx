import "./globals.css";
import { Noto_Sans_JP } from "next/font/google";
import Link from "next/link";

const noto = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata = {
  title: "株式会社LAQ",
  description: "株式会社LAQの公式サイト",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${noto.className} bg-slate-50 text-slate-900`}>
        
        {/* ヘッダー */}
        <header className="border-b border-slate-200 bg-white">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-lg font-bold">
              LAQ Inc.
            </Link>

            <nav className="flex gap-6 text-sm">
              <Link href="/">トップ</Link>
              <Link href="/koukoku">電子公告</Link>
            </nav>
          </div>
        </header>

        {/* メイン */}
        <main className="min-h-[calc(100vh-160px)]">
          {children}
        </main>

        {/* フッター */}
        <footer className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-slate-600">
            
            <div className="flex flex-col gap-4 md:flex-row md:justify-between">
              
              {/* 左 */}
              <div>
                <p className="font-semibold text-slate-900">株式会社LAQ</p>
              </div>

              {/* 右（リンク） */}
              <div className="flex gap-6">
                <Link href="/" className="hover:underline">
                  トップ
                </Link>
                <Link href="/koukoku" className="hover:underline">
                  電子公告
                </Link>
              </div>
            </div>

            {/* 下段 */}
            <div className="mt-6 border-t border-slate-100 pt-4 text-xs text-slate-400">
              © 2026 LAQ Inc. All Rights Reserved.
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}