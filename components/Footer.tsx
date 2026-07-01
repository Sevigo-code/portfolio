import type { Dict } from "@/lib/i18n";

type FooterProps = { t: Dict["footer"] };

export default function Footer({ t }: FooterProps) {
  return (
    <footer className="border-t border-border px-6 py-8 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 font-mono text-xs text-muted md:flex-row">
        <span>{t.copyright}</span>
        <span>{t.made}</span>
      </div>
    </footer>
  );
}
