import { Airplay, PenTool, Sparkles, Workflow, Compass, type LucideIcon } from "lucide-react";
import { services } from "../data";

const iconMap: Record<string, LucideIcon> = {
  airplay: Airplay,
  "pen-tool": PenTool,
  sparkles: Sparkles,
  workflow: Workflow,
  compass: Compass,
};

export function Services() {
  return (
    <section
      id="services"
      className="rounded-t-[40px] bg-white px-6 py-16 lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-shell">
        <div className="flex flex-col gap-2">
          <p className="font-dm text-[14px] font-bold uppercase tracking-[0.08em] text-muted">
            {services.eyebrow}
          </p>
          <h2 className="font-mincho text-[28px] font-bold text-ink lg:text-[36px]">
            {services.title}
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {services.items.map((s) => {
            const Icon = iconMap[s.icon] ?? Sparkles;
            return (
              <div
                key={s.label}
                className="flex h-[140px] flex-col items-center justify-center gap-4 rounded-[20px] bg-white p-5 shadow-card ring-1 ring-hair/50"
              >
                <span className="flex size-12 items-center justify-center rounded-[16px] bg-page">
                  <Icon size={24} className="text-accent" strokeWidth={1.6} />
                </span>
                <p className="text-center font-gothic text-[14px] font-bold text-ink">
                  {s.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
