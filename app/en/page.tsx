import Image from "next/image";

export default function HayaideHomepageEn() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f7fff8_0%,#effcf1_45%,#ffffff_100%)] text-slate-800">
      <header className="sticky top-0 z-20 border-b border-emerald-100/80 bg-white/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-emerald-100">
              <Image
                src="/hayaide-logo.png"
                alt="HAYAIDE logo"
                fill
                className="object-contain p-1"
                priority
              />
            </div>
            <div>
              <div className="text-2xl font-black tracking-tight text-emerald-700">
                HAYAIDE
              </div>
              <div className="text-xs text-emerald-600/80">
                AI for safer, smarter dispensing
              </div>
            </div>
          </div>

          <nav className="hidden gap-6 text-sm font-medium md:flex">
            <a href="#about" className="transition hover:text-emerald-600">
              About
            </a>
            <a href="#solution" className="transition hover:text-emerald-600">
              Solution
            </a>
            <a href="#features" className="transition hover:text-emerald-600">
              Features
            </a>
            <a href="#case" className="transition hover:text-emerald-600">
              Case
            </a>
            <a href="#contact" className="transition hover:text-emerald-600">
              Contact
            </a>
            <a
              href="/"
              className="rounded-full border border-emerald-200 bg-white px-4 py-2 text-emerald-700 transition hover:bg-emerald-50"
            >
              日本語
            </a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-[-8rem] top-[-5rem] h-72 w-72 rounded-full bg-emerald-200/45 blur-3xl" />
          <div className="absolute right-[-6rem] top-20 h-80 w-80 rounded-full bg-lime-200/40 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-green-100/50 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:py-24">
          <div className="flex flex-col justify-center">
            <div className="mb-5 inline-flex w-fit items-center rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-xs font-semibold text-emerald-700 shadow-sm">
              Healthcare × Image Machine Learning
            </div>

            <h1 className="text-4xl font-black leading-tight text-slate-800 md:text-6xl">
              AI for
              <br />
              visual pharmaceutical inspection
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 md:text-lg">
              HAYAIDE is a startup developing image-based machine learning
              technologies to improve the efficiency and safety of dispensing
              inspection.
              By quantitatively analyzing images captured with smartphones or
              tablets, our system identifies pharmaceutical types and mixed
              states, transforming inspection workflows that have traditionally
              relied on visual judgment alone.
              We aim to reduce workload, minimize human error, and accelerate
              digital transformation in healthcare.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-200 transition hover:-translate-y-0.5 hover:bg-emerald-500"
              >
                Contact Us
              </a>
              <a
                href="#solution"
                className="rounded-full border border-emerald-200 bg-white/85 px-6 py-3 text-sm font-semibold text-emerald-700 shadow-sm transition hover:bg-emerald-50"
              >
                View Solution
              </a>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-[0_16px_50px_rgba(16,185,129,0.10)] backdrop-blur">
              <div className="text-sm font-semibold text-emerald-600">
                Core Product
              </div>
              <div className="mt-2 text-2xl font-black text-slate-800">
                MIRERUDE
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                An image-based machine learning system that supports automated
                dispensing inspection, including tablet and powder recognition
                as well as mixed-state estimation.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-[0_16px_50px_rgba(16,185,129,0.10)] backdrop-blur">
              <div className="text-sm font-semibold text-emerald-600">
                Strength
              </div>
              <div className="mt-2 text-2xl font-black text-slate-800">
                Deployable on existing devices
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                The system operates on smartphones and tablets already available
                in the workplace, without requiring dedicated large-scale
                hardware.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/80 bg-white/90 p-6 shadow-[0_16px_50px_rgba(16,185,129,0.10)] backdrop-blur md:col-span-2">
              <div className="text-sm font-semibold text-emerald-600">
                Vision
              </div>
              <div className="mt-2 text-2xl font-black text-slate-800">
                Turning expert skills into accessible tools
              </div>
              <p className="mt-3 text-sm leading-8 text-slate-600">
                HAYAIDE integrates image analysis with expertise from chemistry
                and healthcare to advance and standardize pharmaceutical
                inspection.
                By converting judgment processes that once depended on expert
                experience into reproducible digital workflows, we contribute to
                safer and higher-quality healthcare.
                Starting from Hokkaido, we aim to expand from solving local
                healthcare challenges to nationwide deployment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold text-emerald-600">
              About HAYAIDE
            </div>
            <h2 className="mt-2 text-3xl font-black text-slate-800">
              About Us
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              HAYAIDE develops and implements analytical technologies that fuse
              image-based machine learning with knowledge from chemistry and
              healthcare.
              We are particularly focused on advancing dispensing inspection in
              community pharmacies and creating new systems that derive
              quantitative judgment from visual information.
              Built on academic research, our goal is to translate these
              technologies into practical tools that solve real challenges in
              healthcare settings.
            </p>
          </div>
        </div>
      </section>

      <section id="solution" className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <div className="text-sm font-semibold text-emerald-600">
                Solution
              </div>
              <h2 className="mt-2 text-3xl font-black text-slate-800">
                MIRERUDE
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Inspection of one-dose packaged medicines requires both time and
                sustained attention.
                MIRERUDE supports this process by analyzing captured images to
                identify tablets and powders and to estimate mixed states,
                helping pharmacists verify dispensing results more efficiently.
                This approach reduces workload while improving inspection
                accuracy and consistency.
              </p>
            </div>

            <div className="rounded-[2rem] border border-emerald-100 bg-white p-8 shadow-[0_16px_50px_rgba(16,185,129,0.08)]">
              <ul className="space-y-4 text-sm leading-7 text-slate-700">
                <li>
                  <span className="font-black text-emerald-600">01.</span>{" "}
                  Tablet and powder recognition
                </li>
                <li>
                  <span className="font-black text-emerald-600">02.</span>{" "}
                  Support for mixed-state estimation
                </li>
                <li>
                  <span className="font-black text-emerald-600">03.</span>{" "}
                  Operable on smartphones and tablets
                </li>
                <li>
                  <span className="font-black text-emerald-600">04.</span>{" "}
                  Continuous model improvement
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-sm font-semibold text-emerald-600">
            Why HAYAIDE
          </div>
          <h2 className="mt-2 text-3xl font-black text-slate-800">Features</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-[2rem] border border-emerald-100 bg-white p-6 shadow-[0_16px_50px_rgba(16,185,129,0.08)]">
              <h3 className="text-lg font-black text-slate-800">
                Easy to deploy
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Because the system runs on existing smartphones and tablets, it
                can be introduced into workplaces with a low implementation
                barrier.
              </p>
            </div>

            <div className="rounded-[2rem] border border-emerald-100 bg-white p-6 shadow-[0_16px_50px_rgba(16,185,129,0.08)]">
              <h3 className="text-lg font-black text-slate-800">
                Quantitative decision support
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                By leveraging image data for quantitative evaluation, HAYAIDE
                transforms inspection workflows that have traditionally depended
                on manual visual checks and individual experience.
              </p>
            </div>

            <div className="rounded-[2rem] border border-emerald-100 bg-white p-6 shadow-[0_16px_50px_rgba(16,185,129,0.08)]">
              <h3 className="text-lg font-black text-slate-800">
                Highly expandable
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Through continuous model learning and improvement, the system
                can expand in both accuracy and scope, with future applications
                including inventory management and medication guidance support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="case" className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold text-emerald-600">
              Case Study / Proof of Concept
            </div>
            <h2 className="mt-2 text-3xl font-black text-slate-800">
              Demonstration and Validation
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              HAYAIDE is advancing the validation of image-based machine
              learning systems through demonstrations and collaborative research
              designed for real healthcare settings.
              Beyond algorithm development, we focus on implementation-ready
              design, including user interfaces, imaging conditions, prediction
              performance, and workflow integration.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-[2rem] border border-emerald-100 bg-white p-7 shadow-[0_16px_50px_rgba(16,185,129,0.08)]">
              <div className="text-sm font-semibold text-emerald-600">
                Demonstration
              </div>
              <h3 className="mt-2 text-xl font-black text-slate-800">
                Dispensing inspection support for pharmacy workflows
              </h3>
              <p className="mt-4 text-sm leading-8 text-slate-600">
                We are studying systems that support content and quantity checks
                of one-dose packaged medicines from captured images.
                The approach is being developed for diverse dosage forms,
                including tablets and powders, with the goal of reducing
                pharmacists&apos; workload while improving inspection accuracy.
              </p>
            </div>

            <div className="rounded-[2rem] border border-emerald-100 bg-white p-7 shadow-[0_16px_50px_rgba(16,185,129,0.08)]">
              <div className="text-sm font-semibold text-emerald-600">
                Research Basis
              </div>
              <h3 className="mt-2 text-xl font-black text-slate-800">
                Quantitative image-based analytical platform
              </h3>
              <p className="mt-4 text-sm leading-8 text-slate-600">
                Our platform is built on research demonstrating that visual
                differences in powder composition and mixed states can be
                translated into quantitative prediction.
                By extending this foundation to pharmaceutical inspection, we
                are developing next-generation support systems that are practical
                for real-world use.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-4xl px-6 py-20">
        <div className="rounded-[2.2rem] border border-emerald-100 bg-white/95 p-8 shadow-[0_20px_60px_rgba(16,185,129,0.10)] md:p-12">
          <div className="text-sm font-semibold text-emerald-600">Contact</div>
          <h2 className="mt-2 text-3xl font-black text-slate-800">
            Get in Touch
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
            We welcome inquiries regarding demonstration studies,
            collaborative research, implementation opportunities, and media
            coverage.
            Through partnerships with healthcare institutions, pharmacies, and
            companies, we aim to accelerate the social implementation of this
            technology.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-[1.5rem] bg-emerald-50 p-5">
              <div className="text-xs font-semibold text-emerald-600">
                Organization
              </div>
              <div className="mt-1 font-bold text-slate-800">HAYAIDE</div>
            </div>

            <div className="rounded-[1.5rem] bg-emerald-50 p-5">
              <div className="text-xs font-semibold text-emerald-600">
                Email
              </div>
              <a
                href="mailto:ide.yuki@icredd.hokudai.ac.jp"
                className="mt-1 block font-bold text-slate-800 transition hover:text-emerald-600"
              >
                ide.yuki@icredd.hokudai.ac.jp
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-emerald-100 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>© HAYAIDE</div>
          <div className="text-emerald-700/80">
            Healthcare × Image Machine Learning
          </div>
        </div>
      </footer>
    </div>
  );
}
