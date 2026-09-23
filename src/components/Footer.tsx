import { footer } from "../data";

export function Footer() {
  return (
    <footer className="bg-page px-6 pb-10 pt-16">
      <div className="mx-auto flex max-w-shell flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-1">
          <span className="font-dm text-[20px] font-bold text-ink">{footer.brand}</span>
          <span className="font-gothic text-[12px] text-muted">{footer.copyright}</span>
        </div>
        <div className="flex items-center gap-6">
          {footer.links.map((l) =>
            l.href ? (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-gothic text-[14px] font-bold text-muted transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {l.label}
              </a>
            ) : (
              <span key={l.label} className="font-gothic text-[14px] font-bold text-muted">
                {l.label}
              </span>
            ),
          )}
        </div>
      </div>
    </footer>
  );
}
