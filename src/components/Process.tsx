import { process } from "../data";

export function Process() {
  return (
    <section id="process" className="border-y border-hair/60 bg-white px-6 py-16 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-shell">
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between lg:mb-14">
          <div className="flex flex-col gap-2">
            <p className="font-dm text-[14px] font-bold uppercase tracking-[0.08em] text-muted">
              {process.eyebrow}
            </p>
            <h2 className="font-mincho text-[28px] font-bold text-ink lg:text-[36px]">
              {process.title}
            </h2>
          </div>
          <p className="max-w-[280px] font-gothic text-[13px] leading-[1.7] text-muted sm:text-right">
            {process.caption}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
          {process.steps.map((s) => (
            <div key={s.n} className="flex flex-col gap-3 border-t border-hair pt-5">
              <span className="font-dm text-[13px] font-bold tracking-[0.1em] text-accent">
                {s.n}
              </span>
              <div className="flex flex-col gap-0.5">
                <span className="font-dm text-[16px] font-medium text-ink">{s.en}</span>
                <span className="font-mincho text-[15px] font-medium text-muted">{s.jp}</span>
              </div>
              <p className="font-gothic text-[13px] leading-[1.8] text-muted">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
