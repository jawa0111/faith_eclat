import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="flex flex-col items-center gap-3.5 py-12 text-center text-[.88rem] text-ink-soft sm:pb-14">
      <span className="relative block h-9 w-9 overflow-hidden rounded-full bg-bg-elevated">
        <Image src="/logo.jpg" alt="" fill sizes="36px" className="object-cover" />
      </span>
      <div className="flex flex-wrap justify-center gap-4.5">
        <span>🇱🇰 Sri Lanka</span>
        <a
          href={`https://wa.me/${siteConfig.whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="border-b border-rule hover:border-gold"
        >
          WhatsApp: {siteConfig.whatsappDisplay}
        </a>
        <a href={`mailto:${siteConfig.email}`} className="border-b border-rule hover:border-gold">
          {siteConfig.email}
        </a>
        <a
          href={siteConfig.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="border-b border-rule hover:border-gold"
        >
          Instagram: {siteConfig.instagramHandle}
        </a>
      </div>
      <Link href="/terms" className="border-b border-rule text-[.8rem] hover:border-gold">
        Terms &amp; Conditions
      </Link>
    </footer>
  );
}
