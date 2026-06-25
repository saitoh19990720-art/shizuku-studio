import { useState } from "react";
import { Menu, X } from "lucide-react";
import { site, nav } from "../data";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-hair/60 bg-page/80 backdrop-blur">
      <div className="mx-auto flex max-w-shell items-center justify-between px-6 py-4 lg:px-10">
        {/* ロゴ */}
        <a href="#top" className="flex flex-col leading-none">
          <span className="flex items-center gap-1">
            <span className="font-dm text-[18px] font-bold text-ink">{site.brand}</span>
            <span className="font-gothic text-[14px] text-muted">{site.brandMark}</span>
          </span>
          <span className="mt-1 font-gothic text-[10px] font-bold tracking-[0.12em] text-muted">
            {site.tagline}
          </span>
        </a>

        {/* PC ナビ */}
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="font-dm text-[14px] font-medium text-muted transition-colors hover:text-accent"
            >
              {n.label}
            </a>
          ))}
        </nav>

        {/* スマホ ハンバーガー */}
        <button
          type="button"
          aria-label="メニュー"
          onClick={() => setOpen((v) => !v)}
          className="text-accent md:hidden"
        >
          {open ? <Menu size={24} className="hidden" /> : null}
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* スマホ展開メニュー */}
      {open && (
        <nav className="flex flex-col gap-1 border-t border-hair/60 px-6 pb-4 pt-2 md:hidden">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-2 py-3 font-gothic text-[15px] font-bold text-ink hover:bg-white"
            >
              {n.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
