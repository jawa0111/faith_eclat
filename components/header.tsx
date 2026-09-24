import Link from "next/link";
import Image from "next/image";
import { siteConfig, whatsappOrderLink } from "@/lib/site-config";

export function Header() {
  return (
    <header className="sticky top-0 z-40 flex items-center justify-between gap-2 border-b border-rule bg-bg/90 px-4 py-2.5 backdrop-blur-md sm:gap-3 sm:px-8 sm:py-3">
      <Link href="#top" className="flex items-center gap-1.5 sm:gap-2.5">
        <span className="relative block h-6 w-6 shrink-0 overflow-hidden rounded-full bg-bg-elevated sm:h-[30px] sm:w-[30px]">
          <Image src="/logo.jpg" alt="" fill sizes="30px" className="object-cover" />
        </span>
        <span className="font-display text-[.8rem] font-medium whitespace-nowrap uppercase tracking-[.04em] text-ink sm:text-[1.05rem] sm:tracking-[.08em]">
          {siteConfig.brand}
        </span>
      </Link>
      <a
        href={whatsappOrderLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0 rounded-full bg-ink px-3.5 py-2 text-xs font-semibold whitespace-nowrap text-bg shadow-md transition hover:-translate-y-px hover:shadow-lg sm:px-5 sm:py-2.5 sm:text-sm"
      >
        Order on WhatsApp
      </a>
    </header>
  );
}
