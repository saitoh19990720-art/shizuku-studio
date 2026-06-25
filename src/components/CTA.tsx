import { cta } from "../data";

export function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden px-6 py-24 lg:py-32">
      {/* 淡色グラデ＋ガラスの差し色（画像に頼らない・軽い） */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 60% at 50% 0%, #DFF7FF 0%, #EEF4FF 45%, #F0F7FF 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-0 h-[360px] w-[360px] rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(201,219,255,0.8), transparent 70%)" }}
      />

      <div className="relative mx-auto flex max-w-[760px] flex-col items-center gap-10 text-center">
        <h2 className="font-mincho text-[28px] font-bold leading-[1.4] text-ink sm:text-[34px] lg:text-[40px]">
          {cta.title}
        </h2>
        <a
          href={cta.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-[52px] w-full max-w-[420px] items-center justify-center rounded-full bg-accent px-8 font-gothic text-[15px] font-bold text-white transition-opacity hover:opacity-90"
        >
          {cta.button}
        </a>
      </div>
    </section>
  );
}
