import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export function ThankYouSection() {
  return (
    <section aria-label="Thank you for being here" className="pt-14 sm:pt-20">
      <div className="mx-auto flex max-w-[620px] flex-col items-center px-6 py-2 text-center sm:px-10">
          <div className="flex items-center gap-3">
            <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
              <Image src="/logo.jpg" alt={siteConfig.brand} fill sizes="40px" className="object-cover" />
            </span>
            <p className="text-xs font-semibold tracking-[.16em] text-gold-deep uppercase">
              Thank you for being here
            </p>
          </div>
          <div className="mt-5 flex max-w-[52ch] flex-col gap-3.5 font-display text-[1.15rem] leading-snug text-ink italic sm:text-[1.3rem]">
            <p>
              What began with a cream introduced to me by someone I met in Pakistan has grown into
              something I am incredibly excited to share with you.
            </p>
            <p>
              Thank you for choosing Faith Éclat and for becoming part of the beginning of this
              journey.
            </p>
            <p className="font-medium text-gold-deep">This is only the beginning.</p>
            <p>
              As our little community grows, so will we — with more skincare, more products and
              more beautiful things to come.
            </p>
          </div>
      </div>
    </section>
  );
}
