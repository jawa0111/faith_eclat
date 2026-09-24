import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section
      id="top"
      aria-label="Introduction"
      className="flex min-h-[calc(100svh-56px)] flex-col items-center gap-5 pt-10 pb-8 text-center sm:min-h-0 sm:pt-20 sm:pb-16"
    >
      <span className="relative block aspect-square w-[min(220px,54vw)] motion-safe:animate-[rise_.6s_ease_both]">
        <Image src="/logo.jpg" alt={siteConfig.brand} fill sizes="220px" className="rounded-full object-contain" priority />
      </span>
      <h1
        className="text-balance font-display text-[clamp(2.4rem,6vw,3.6rem)] font-medium uppercase tracking-[.02em] motion-safe:animate-[rise_.6s_ease_both_.08s]"
      >
        {siteConfig.brand}
      </h1>
      <p className="font-display text-[clamp(1.15rem,2.4vw,1.5rem)] italic text-gold-deep motion-safe:animate-[rise_.6s_ease_both_.14s]">
        {siteConfig.tagline}
      </p>
      <p className="max-w-[46ch] text-ink-soft motion-safe:animate-[rise_.6s_ease_both_.2s]">
        Your skin. Your glow. Your confidence.
      </p>
      <div className="mt-auto pt-1.5 motion-safe:animate-[rise_.6s_ease_both_.26s] sm:mt-1.5 sm:pt-0">
        <a
          href="#product"
          className="rounded-full bg-ink px-6 py-3.5 text-[.95rem] font-semibold text-bg shadow-md transition hover:-translate-y-px hover:shadow-lg"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
}
