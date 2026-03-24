export const metadata = {
  title: "電子公告 | 株式会社LAQ",
};

export default function KoukokuPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="rounded-3xl bg-slate-900 px-8 py-12 text-white shadow-md">
          <p className="text-sm tracking-[0.2em] text-slate-300 uppercase">
            Electronic Public Notice
          </p>
          <h1 className="mt-3 text-3xl font-bold md:text-4xl">
            電子公告
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-200 md:text-base">
            当社の公告は、会社法その他関係法令に基づき、本ページに掲載します。
          </p>
        </div>

        <div className="mt-8 space-y-6">
          {/* 公告一覧 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">公告事項</h2>
            <p className="mt-3 text-sm text-slate-600">
              現在、掲載すべき公告はありません。
            </p>
          </div>

          {/* 会社情報 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">会社情報</h2>

            <dl className="mt-4 space-y-3 text-sm text-slate-700">
              <div className="flex flex-col gap-1 sm:flex-row">
                <dt className="w-36 font-medium text-slate-900">会社名</dt>
                <dd>株式会社LAQ</dd>
              </div>

              <div className="flex flex-col gap-1 sm:flex-row">
                <dt className="w-36 font-medium text-slate-900">公告方法</dt>
                <dd>電子公告</dd>
              </div>

              <div className="flex flex-col gap-1 sm:flex-row">
                <dt className="w-36 font-medium text-slate-900">公告掲載URL</dt>
                <dd>
                  <a
                    href="https://laq-inc.jp/koukoku"
                    className="underline underline-offset-4"
                  >
                    https://laq-inc.jp/koukoku
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          {/* 注意書き */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs leading-6 text-slate-500">
              なお、やむを得ない事由により電子公告による公告をすることができない場合は、
              官報に掲載する方法により公告を行います。
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}