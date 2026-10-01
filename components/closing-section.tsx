import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export function ClosingSection() {
  return (
    <section aria-label="Sign-off" className="flex flex-col items-center gap-3 pb-14 text-center sm:pb-20">
      <span className="relative h-14 w-14 overflow-hidden rounded-full bg-bg-elevated shadow-[0_1px_2px_rgba(43,38,32,.06),0_8px_24px_-12px_rgba(43,38,32,.25)]">
        <Image src="/logo.webp" alt={siteConfig.brand} fill sizes="56px" className="object-cover" />
      </span>
      <p className="mt-1 font-display italic text-ink-soft">With love,</p>
      <p className="font-display text-[1.4rem] font-medium text-ink">{siteConfig.brand} 🤍</p>
      <p className="font-display text-[1.05rem] italic text-gold-deep">{siteConfig.tagline}</p>
    </section>
  );
}
