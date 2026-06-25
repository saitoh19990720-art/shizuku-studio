import { about } from "../data";

export function About() {
  return (
    <section id="about" className="px-6 py-16 lg:px-10 lg:py-24">
      <div className="mx-auto grid max-w-shell gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        {/* 左：見出し＋ひとこと */}
        <div className="flex flex-col gap-4">
          <p className="font-dm text-[14px] font-bold uppercase tracking-[0.08em] text-muted">
            {about.eyebrow}
          </p>
          <h2 className="font-mincho text-[28px] font-bold leading-[1.4] text-ink lg:text-[36px]">
            {about.title}
          </h2>
          <p className="font-mincho text-[18px] font-medium leading-[1.6] text-accent lg:text-[20px]">
            {about.lead}
          </p>
        </div>

        {/* 右：本文＋使う道具 */}
        <div className="flex flex-col gap-8">
          <p className="font-gothic text-[15px] leading-[1.9] text-muted lg:text-[16px]">
            {about.body}
          </p>

          <div className="flex flex-col gap-5">
            <p className="font-dm text-[13px] font-bold uppercase tracking-[0.1em] text-ink">
              {about.stackTitle}
            </p>
            <div className="flex flex-col gap-4">
              {about.stack.map((g) => (
                <div key={g.group} className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-5">
                  <span className="w-[120px] shrink-0 font-dm text-[12px] font-medium text-muted">
                    {g.group}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {g.items.map((it) => (
                      <span
                        key={it}
                        className="rounded-full bg-page px-3 py-1 font-gothic text-[12px] font-bold text-accent ring-1 ring-hair/60"
                      >
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
