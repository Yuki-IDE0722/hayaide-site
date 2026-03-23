export default function HayaideHomepage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-20 border-b bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <div className="text-2xl font-bold tracking-tight">HAYAIDE</div>
            <div className="text-xs text-slate-500">AI for safer, smarter dispensing</div>
          </div>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#about" className="hover:text-slate-600">About</a>
            <a href="#solution" className="hover:text-slate-600">Solution</a>
            <a href="#features" className="hover:text-slate-600">Features</a>
            <a href="#contact" className="hover:text-slate-600">Contact</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
        <div className="flex flex-col justify-center">
          <div className="mb-4 inline-block w-fit rounded-full border px-3 py-1 text-xs text-slate-600">
            Healthcare × Image Machine Learning
          </div>
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            “見るだけ”で薬を判定する
            <br />
            調剤AI
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 md:text-lg">
            HAYAIDEは、画像機械学習を活用して調剤監査業務の効率化と安全性向上を支援するスタートアップです。
            スマートフォンやタブレットで撮影した画像から、医薬品の種類や混合状態を解析し、現場の負担軽減と医療DXを推進します。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
            >
              お問い合わせ
            </a>
            <a
              href="#solution"
              className="rounded-2xl border px-5 py-3 text-sm font-medium transition hover:bg-slate-50"
            >
              サービスを見る
            </a>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border p-6 shadow-sm">
            <div className="text-sm text-slate-500">Core Product</div>
            <div className="mt-2 text-2xl font-semibold">MIRERUDE</div>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              画像機械学習による調剤監査の自動化システム。錠剤・粉末の判定や混合比の推定を支援します。
            </p>
          </div>
          <div className="rounded-3xl border p-6 shadow-sm">
            <div className="text-sm text-slate-500">Strength</div>
            <div className="mt-2 text-2xl font-semibold">既存端末で導入可能</div>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              専用の大型装置を必要とせず、現場にあるスマートフォンやタブレットで運用可能です。
            </p>
          </div>
          <div className="rounded-3xl border p-6 shadow-sm md:col-span-2">
            <div className="text-sm text-slate-500">Vision</div>
            <div className="mt-2 text-2xl font-semibold">専門家の技術を、誰でも使える形へ</div>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              HAYAIDEは、画像解析と化学・医療現場の知見を組み合わせ、医薬品監査の高度化と標準化を目指します。
              北海道を起点に、地域医療の課題解決から全国展開まで見据えた事業を進めています。
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <div className="text-sm font-medium text-slate-500">About HAYAIDE</div>
            <h2 className="mt-2 text-3xl font-bold">HAYAIDEについて</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              HAYAIDEは、画像機械学習システムを活用した医療・化学分野向けアプリケーションの研究開発と社会実装を目指すチームです。
              調剤薬局の監査支援をはじめ、視覚情報から定量的な判断を引き出す新しい仕組みを提供します。
            </p>
          </div>
        </div>
      </section>

      <section id="solution" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <div className="text-sm font-medium text-slate-500">Solution</div>
            <h2 className="mt-2 text-3xl font-bold">MIRERUDE</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              一包化された医薬品の内容確認や数量確認には、時間と集中力が必要です。MIRERUDEは、撮影画像から視覚情報を解析し、
              調剤内容の確認を支援することで、薬剤師の負担軽減と安全性向上を両立します。
            </p>
          </div>
          <div className="rounded-3xl border p-8 shadow-sm">
            <ul className="space-y-4 text-sm leading-6 text-slate-700">
              <li><span className="font-semibold">01.</span> 錠剤・粉末の判定</li>
              <li><span className="font-semibold">02.</span> 混合比推定への対応</li>
              <li><span className="font-semibold">03.</span> スマホ・タブレットで運用可能</li>
              <li><span className="font-semibold">04.</span> 継続的なモデル改善</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="features" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-sm font-medium text-slate-500">Why HAYAIDE</div>
          <h2 className="mt-2 text-3xl font-bold">特長</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">現場導入しやすい</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                既存デバイスで利用できるため、導入コストを抑えながら運用を始められます。
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">定量的に判断</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                視覚情報をもとに、従来は目視に頼っていた確認業務を定量的に支援します。
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">発展性が高い</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                監査支援に加え、在庫管理や服薬指導支援などへの拡張も見据えています。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-4xl px-6 py-20">
        <div className="rounded-[2rem] border p-8 shadow-sm md:p-12">
          <div className="text-sm font-medium text-slate-500">Contact</div>
          <h2 className="mt-2 text-3xl font-bold">お問い合わせ</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            実証実験、共同研究、導入検討、取材のご相談など、お気軽にお問い合わせください。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-5">
              <div className="text-xs text-slate-500">Company</div>
              <div className="mt-1 font-medium">HAYAIDE</div>
            </div>
            <div className="rounded-2xl bg-slate-50 p-5">
              <div className="text-xs text-slate-500">Email</div>
              <div className="mt-1 font-medium">contact@example.com</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>© HAYAIDE</div>
          <div>Healthcare × Image Machine Learning</div>
        </div>
      </footer>
    </div>
  );
}
