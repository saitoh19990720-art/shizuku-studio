import { ArrowUpRight } from "lucide-react";
import { works } from "../data";

// 淡色グラデのサムネ（実画面を偽装しない正直な見せ方）
const grads = [
  "linear-gradient(135deg, #DFF7FF 0%, #C9DBFF 100%)",
  "linear-gradient(135deg, #EEF4FF 0%, #DCE9FF 100%)",
  "linear-gradient(135deg, #CFEFFF 0%, #C9DBFF 100%)",
  "linear-gradient(135deg, #E6F5FF 0%, #DCE9FF 100%)",
  "linear-gradient(135deg, #DCE9FF 0%, #CFEFFF 100%)",
];

export function Works() {
  return (
    <section id="works" className="bg-white px-6 py-16 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-shell">
        <div className="flex flex-col gap-2">
          <p className="font-dm text-[14px] font-bold uppercase tracking-[0.08em] text-muted">
            {works.eyebrow}
          </p>
          <h2 className="font-mincho text-[28px] font-bold text-ink lg:text-[36px]">
            {works.title}
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {works.items.map((w) => (
            <a
              key={w.title}
              href={w.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-4"
            >
              <div
                className="relative flex aspect-[16/10] items-end overflow-hidden rounded-[24px] p-5 ring-1 ring-hair/50"
                style={{ background: grads[w.grad % grads.length] }}
              >
                {/* 作品名の頭文字を薄く（選択の痕跡・量産感を消す） */}
                <span className="pointer-events-none absolute -right-2 -top-6 font-mincho text-[120px] font-bold leading-none text-white/40">
                  {w.title.charAt(0)}
                </span>
                <span className="relative inline-flex size-9 items-center justify-center rounded-full bg-white/70 text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <ArrowUpRight size={18} />
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="w-fit rounded-full border border-hair px-3 py-1 font-gothic text-[11px] font-bold text-muted">
                  {w.tag}
                </span>
                <h3 className="font-mincho text-[20px] font-bold text-ink transition-colors group-hover:text-accent">
                  {w.title}
                </h3>
                <p className="font-gothic text-[13px] leading-[1.7] text-muted">{w.desc}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href={works.moreHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-[52px] w-full max-w-[342px] items-center justify-center gap-2 rounded-full border border-accent px-8 font-gothic text-[15px] font-bold text-accent transition-colors hover:bg-page"
          >
            {works.more}
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
