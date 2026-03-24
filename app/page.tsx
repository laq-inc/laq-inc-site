export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl bg-slate-900 px-8 py-16 text-white shadow-lg md:px-12">
          <p className="text-sm tracking-[0.2em] text-slate-300 uppercase">
            LAQ Inc.
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
            株式会社LAQ
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
            Logic Architecture Quality を軸に、システム開発・Web制作・業務改善につながるデジタルソリューションを提供します。
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#services"
              className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:opacity-90"
            >
              事業内容を見る
            </a>
            <a
              href="/koukoku"
              className="rounded-2xl border border-slate-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              電子公告
            </a>
          </div>
        </div>

        <section id="services" className="mt-20 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">システム開発</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              業務システム、Webアプリケーション、バックエンド開発など、
              目的に合わせたシステムを設計・開発します。
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">Web制作</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              コーポレートサイト、サービスサイト、LPなど、
              分かりやすく信頼感のあるWebサイトを制作します。
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">業務支援</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              見積書作成支援、EC関連、各種業務ツールの企画・開発・改善を通じて、
              日々の業務効率化を支援します。
            </p>
          </div>
        </section>

      </section>
    </main>
  );
}