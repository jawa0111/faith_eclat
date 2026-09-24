export function SafetySection() {
  return (
    <section id="safety" aria-label="Your skin comes first" className="py-14 sm:py-20">
      <p className="text-xs font-semibold tracking-[.16em] text-gold-deep uppercase">
        Your skin comes first
      </p>

      <div className="mt-6 grid grid-cols-1 items-stretch gap-8 sm:grid-cols-2">
        <div className="flex h-full max-w-[62ch] flex-col gap-3.5 rounded-[20px] border border-rule bg-bg-card p-7 text-ink-soft shadow-[0_1px_2px_rgba(43,38,32,.06),0_8px_24px_-12px_rgba(43,38,32,.18)]">
          <p>Everyone&apos;s skin is different.</p>
          <p>
            Before your first use, patch-test the product, even if you have never experienced an
            allergy before.
          </p>
          <p>
            If you experience irritation or a suspected allergic reaction, discontinue use and
            seek appropriate medical advice.
          </p>
        </div>

        <div className="h-full rounded-[20px] border border-rule bg-bg-card p-7 shadow-[0_1px_2px_rgba(43,38,32,.06),0_8px_24px_-12px_rgba(43,38,32,.18)]">
          <h3 className="mb-3.5 font-display text-[1.15rem] font-medium">
            Product-related allergy returns
          </h3>
          <p className="text-[.92rem] text-ink-soft">
            If you experience a suspected allergic reaction and wish to request a return, medical
            documentation from a qualified healthcare professional will be required.
          </p>
          <p className="mt-3.5 text-[.92rem] font-semibold text-ink">
            No supporting medical documentation = no allergy-related return.
          </p>
        </div>
      </div>
    </section>
  );
}
