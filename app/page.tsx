export default function HayaideHomepage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f7fff8_0%,#effcf1_45%,#ffffff_100%)] text-slate-800">
      <header className="sticky top-0 z-20 border-b border-emerald-100/80 bg-white/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <div className="text-2xl font-black tracking-tight text-emerald-700">HAYAIDE</div>
            <div className="text-xs text-emerald-600/80">AI for safer, smarter dispensing</div>
          </div>
          <nav className="hidden gap-6 text-sm font-medium md:flex">
            <a href="#about" className="transition hover:text-emerald-600">About</a>
            <a href="#solution" className="transition hover:text-emerald-600">Solution</a>
            <a href="#features" className="transition hover:text-emerald-600">Features</a>
            <a href="#contact" className="transition hover:text-emerald-600">Contact</a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-[-8rem] top-[-5rem] h-72 w-72 rounded-full bg-emerald-200/45 blur-3xl" />
          <div className="absolute right-[-6rem] top-20 h-80 w-80 rounded-full bg-lime-200/40 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-green-100/50 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div className="flex flex-col justify-center">
            <div className="mb-5 inline-flex w-fit items-center rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-xs font-semibold text-emerald-700 shadow-sm">
              Healthcare × Image Machine Learning
            </div>
            <h1 className="text-4xl font-black leading-tight text-slate-800 md:text-6xl">
              “見るだけ”で薬を判定する
              <br />
              調剤AI
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 md:text-lg">
              HAYAIDEは、画像機械学習を活用して調剤監査業務の効率化と安全性向上を支援するスタートアップです。
              スマートフォンやタブレットで撮影した画像から、医薬品の種類や混合状態を解析し、現場の負担軽減と医療DXを推進します。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-200 transition hover:-translate-y-0.5 hover:bg-emerald-500"
              >
                お問い合わせ
              </a>
              <a
                href="#solution"
                className="rounded-full border border-emerald-200 bg-white/85 px-6 py-3 text-sm font-semibold text-emerald-700 shadow-sm transition hover:bg-emerald-50"
              >
                サービスを見る
              </a>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-[0_16px_50px_rgba(16,185,129,0.10)] backdrop-blur">
              <div className="text-sm font-semibold text-emerald-600">Core Product</div>
              <div className="mt-2 text-2xl font-black text-slate-800">MIRERUDE</div>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                画像機械学習による調剤監査の自動化システム。錠剤・粉末の判定や混合比の推定を支援します。
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-[0_16px_50px_rgba(16,185,129,0.10)] backdrop-blur">
              <div className="text-sm font-semibold text-emerald-600">Strength</div>
              <div className="mt-2 text-2xl font-black text-slate-800">既存端末で導入可能</div>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                専用の大型装置を必要とせず、現場にあるスマートフォンやタブレットで運用可能です。
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/80 bg-white/90 p-6 shadow-[0_16px_50px_rgba(16,185,129,0.10)] backdrop-blur md:col-span-2">
              <div className="text-sm font-semibold text-emerald-600">Vision</div>
              <div className="mt-2 text-2xl font-black text-slate-800">専門家の技術を、誰でも使える形へ</div>
              <p className="mt-3 text-sm leading-8 text-slate-600">
                HAYAIDEは、画像解析と化学・医療現場の知見を組み合わせ、医薬品監査の高度化と標準化を目指します。
                北海道を起点に、地域医療の課題解決から全国展開まで見据えた事業を進めています。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold text-emerald-600">About HAYAIDE</div>
            <h2 className="mt-2 text-3xl font-black text-slate-800">HAYAIDEについて</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              HAYAIDEは、画像機械学習システムを活用した医療・化学分野向けアプリケーションの研究開発と社会実装を目指すチームです。
              調剤薬局の監査支援をはじめ、視覚情報から定量的な判断を引き出す新しい仕組みを提供します。
            </p>
          </div>
        </div>
      </section>

      <section id="solution" className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <div className="text-sm font-semibold text-emerald-600">Solution</div>
              <h2 className="mt-2 text-3xl font-black text-slate-800">MIRERUDE</h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                一包化された医薬品の内容確認や数量確認には、時間と集中力が必要です。MIRERUDEは、撮影画像から視覚情報を解析し、
                調剤内容の確認を支援することで、薬剤師の負担軽減と安全性向上を両立します。
              </p>
            </div>
            <div className="rounded-[2rem] border border-emerald-100 bg-white p-8 shadow-[0_16px_50px_rgba(16,185,129,0.08)]">
              <ul className="space-y-4 text-sm leading-7 text-slate-700">
                <li><span className="font-black text-emerald-600">01.</span> 錠剤・粉末の判定</li>
                <li><span className="font-black text-emerald-600">02.</span> 混合比推定への対応</li>
                <li><span className="font-black text-emerald-600">03.</span> スマホ・タブレットで運用可能</li>
                <li><span className="font-black text-emerald-600">04.</span> 継続的なモデル改善</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-sm font-semibold text-emerald-600">Why HAYAIDE</div>
          <h2 className="mt-2 text-3xl font-black text-slate-800">特長</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-[2rem] border border-emerald-100 bg-white p-6 shadow-[0_16px_50px_rgba(16,185,129,0.08)]">
              <h3 className="text-lg font-black text-slate-800">現場導入しやすい</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">既存デバイスで利用できるため、導入コストを抑えながら運用を始められます。</p>
            </div>
            <div className="rounded-[2rem] border border-emerald-100 bg-white p-6 shadow-[0_16px_50px_rgba(16,185,129,0.08)]">
              <h3 className="text-lg font-black text-slate-800">定量的に判断</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">視覚情報をもとに、従来は目視に頼っていた確認業務を定量的に支援します。</p>
            </div>
            <div className="rounded-[2rem] border border-emerald-100 bg-white p-6 shadow-[0_16px_50px_rgba(16,185,129,0.08)]">
              <h3 className="text-lg font-black text-slate-800">発展性が高い</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">監査支援に加え、在庫管理や服薬指導支援などへの拡張も見据えています。</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-4xl px-6 py-20">
        <div className="rounded-[2.2rem] border border-emerald-100 bg-white/95 p-8 shadow-[0_20px_60px_rgba(16,185,129,0.10)] md:p-12">
          <div className="text-sm font-semibold text-emerald-600">Contact</div>
          <h2 className="mt-2 text-3xl font-black text-slate-800">お問い合わせ</h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
            実証実験、共同研究、導入検討、取材のご相談など、お気軽にお問い合わせください。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-[1.5rem] bg-emerald-50 p-5">
              <div className="text-xs font-semibold text-emerald-600">Company</div>
              <div className="mt-1 font-bold text-slate-800">HAYAIDE</div>
            </div>
            <div className="rounded-[1.5rem] bg-emerald-50 p-5">
              <div className="text-xs font-semibold text-emerald-600">Email</div>
              <div className="mt-1 font-bold text-slate-800">contact@example.com</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-emerald-100 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>© HAYAIDE</div>
          <div className="text-emerald-700/80">Healthcare × Image Machine Learning</div>
        </div>
      </footer>
    </div>
  );
}
