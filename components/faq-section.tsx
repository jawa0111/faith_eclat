import Link from "next/link";

const faqs = [
  {
    q: "01. What is FAITH ÉCLAT Glow Cream?",
    a: "FAITH ÉCLAT Glow Cream is a night-use skincare cream created to become part of your evening skincare ritual and support a smooth, naturally radiant-looking complexion.",
  },
  {
    q: "02. How should I use it?",
    a: "After cleansing your face, apply a small amount to clean, dry skin and gently massage it in. A little goes a long way. FAITH ÉCLAT is intended for night-time use.",
  },
  {
    q: "03. Can I use it during the daytime?",
    a: "FAITH ÉCLAT Glow Cream is designed for night use. During the day, maintain your skin with your usual moisturizer and broad-spectrum sunscreen, especially when going outdoors.",
  },
  {
    q: "04. How much should I apply?",
    a: "You don't need a large amount. Start with a small amount and spread it gently over the skin. More product does not mean faster results.",
  },
  {
    q: "05. When will I see results?",
    a: "Every person's skin is different. Some people may notice changes sooner, while others may need more time and consistent use. Results are individual and cannot be guaranteed within a specific number of days.",
  },
  {
    q: "06. Do I need a patch test?",
    a: "Yes. We recommend performing a patch test before your first use, even if you have never experienced an allergy before. Apply a small amount to a discreet area such as the inner arm or behind the ear and monitor the area before applying it to your face.",
  },
  {
    q: "07. Can I use it with my other skincare products?",
    a: "It depends on the products and active ingredients in your routine. If you are already using strong skincare actives or prescription treatments, consult a qualified skincare professional or healthcare professional before introducing a new product.",
  },
  {
    q: "08. Can I stop using FAITH ÉCLAT?",
    a: "Yes. Skincare routines are personal. If you choose to stop using the product, continue with a simple routine that includes cleansing, moisturizing and daytime sun protection. Also natural skin care.",
  },
  {
    q: "09. Is FAITH ÉCLAT suitable for everyone?",
    a: "Individual skin types and sensitivities vary. We recommend checking the ingredient information and performing a patch test before use. If you have a known skin condition, severe sensitivity, or are undergoing treatment, seek professional advice before using a new skincare product.",
  },
  {
    q: "10. Where is FAITH ÉCLAT Glow Cream from?",
    a: "FAITH ÉCLAT Glow Cream is imported from Pakistan and made available to customers in Sri Lanka.",
  },
  {
    q: "11. How can I place an order?",
    a: "You can place your order through our available ordering channels. Simply provide your name, contact number, quantity and delivery details, and our team will guide you through the next steps.",
  },
  {
    q: "12. Do you deliver across Sri Lanka?",
    a: "We're still finalizing our full delivery coverage — message us on WhatsApp with your location and we'll confirm before you order.",
  },
  {
    q: "13. Can I return the product?",
    a: "Returns are accepted only where they meet our Return & Product Care Policy. Please read the policy before placing an order.",
    link: { href: "/terms#returns", label: "Read the Return & Product Care Policy" },
  },
];

export function FaqSection() {
  return (
    <section aria-label="Frequently asked questions" className="py-14 sm:py-20">
      <p className="text-xs font-semibold tracking-[.16em] text-gold-deep uppercase">
        FAITH ÉCLAT — Frequently Asked Questions
      </p>
      <div className="mt-5">
        {faqs.map((item, i) => (
          <details
            key={item.q}
            open={i === 0}
            className="group border-b border-rule py-4 first:border-t"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-display text-[1.05rem] font-medium marker:content-none [&::-webkit-details-marker]:hidden">
              {item.q}
              <span className="shrink-0 text-[1.3rem] text-gold-deep group-open:hidden">+</span>
              <span className="hidden shrink-0 text-[1.3rem] text-gold-deep group-open:inline">–</span>
            </summary>
            <p className="mt-2.5 max-w-[62ch] text-[.95rem] text-ink-soft">{item.a}</p>
            {item.link && (
              <Link
                href={item.link.href}
                className="mt-2 inline-block border-b border-rule text-[.9rem] text-gold-deep hover:border-gold"
              >
                {item.link.label}
              </Link>
            )}
          </details>
        ))}
      </div>
    </section>
  );
}
