import { hero } from "../data";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* 淡いガラスの差し色（意図的な賭け：均一じゃない密度をつくる） */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-24 h-[420px] w-[420px] rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(223,247,255,0.9), rgba(201,219,255,0.4) 55%, transparent 72%)",
        }}
      />
      <div className="relative mx-auto max-w-shell px-6 pb-16 pt-14 lg:px-10 lg:pb-24 lg:pt-24">
        <div className="flex max-w-[640px] flex-col gap-5">
          <h1 className="font-mincho text-[44px] font-bold leading-[1.2] tracking-[0.01em] lg:text-[68px]">
            {hero.titleLead}
            <span className="text-accent">{hero.titleAccent}</span>
          </h1>
          <p className="font-mincho text-[20px] font-medium leading-[1.5] text-ink lg:text-[24px]">
            {hero.sub}
          </p>
          <p className="max-w-[520px] font-gothic text-[15px] leading-[1.8] text-muted lg:text-[16px]">
            {hero.body}
          </p>

          <div className="mt-3 flex flex-col gap-3 sm:flex-row">
            <a
              href="#works"
              className="inline-flex h-[52px] items-center justify-center rounded-full bg-accent px-8 font-gothic text-[15px] font-bold text-white transition-opacity hover:opacity-90"
            >
              {hero.primary}
            </a>
            <a
              href="#contact"
              className="inline-flex h-[52px] items-center justify-center rounded-full border border-accent px-8 font-gothic text-[15px] font-bold text-accent transition-colors hover:bg-white"
            >
              {hero.secondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
