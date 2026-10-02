"use client";

import { useState } from "react";
import { ProductCarousel } from "./product-carousel";
import { product, siteConfig, whatsappOrderLink } from "@/lib/site-config";

export function ProductSection() {
  const [quantity, setQuantity] = useState(1);
  const total = product.price * quantity;

  const whatsappMessage = `Hi Faith Éclat! I'd like to order the ${product.name} (${product.weightGrams}g, ${product.currency} ${product.price.toLocaleString()}).\nQuantity: ${quantity}\nName: \nDelivery address: `;

  return (
    <section id="product" aria-label="Product" className="py-14 sm:py-20">
      <div className="grid grid-cols-1 items-center gap-8 sm:grid-cols-2 sm:gap-14">
        <div className="flex items-center justify-center">
          <ProductCarousel />
        </div>

        <div className="flex flex-col gap-3.5">
          <h2 className="text-balance font-display text-[clamp(1.7rem,3vw,2.2rem)] font-medium">
            {siteConfig.brand} — {product.name}
          </h2>

          <p className="font-display text-[1.4rem] font-medium [font-variant-numeric:tabular-nums]">
            {product.currency} {product.price.toLocaleString()}
          </p>

          <p className="flex items-center gap-1.5 text-sm text-ink-soft">
            🇵🇰 Imported from {product.origin}
          </p>

          <p className="max-w-[60ch] text-ink-soft">
            A skincare experience inspired by a personal discovery — created to complement your
            routine and leave your skin looking naturally radiant.
          </p>

          <div className="mt-1 flex items-center gap-3">
            <span className="text-sm font-medium text-ink-soft">Quantity</span>
            <div className="flex items-center rounded-full border border-rule">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-3.5 py-2 text-lg leading-none text-ink-soft transition hover:text-gold-deep"
                aria-label="Decrease quantity"
              >
                –
              </button>
              <span className="w-6 text-center text-sm font-semibold [font-variant-numeric:tabular-nums]">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.min(10, q + 1))}
                className="px-3.5 py-2 text-lg leading-none text-ink-soft transition hover:text-gold-deep"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
            <span className="text-sm text-ink-soft [font-variant-numeric:tabular-nums]">
              Total: {product.currency} {total.toLocaleString()}
            </span>
          </div>

          <div className="mt-2 flex flex-wrap gap-3">
            <a
              href={whatsappOrderLink(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-ink px-6 py-3.5 text-[.95rem] font-semibold text-bg shadow-md transition hover:-translate-y-px hover:shadow-lg"
            >
              Order on WhatsApp
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="rounded-full border border-rule px-6 py-3.5 text-[.95rem] font-semibold transition hover:border-gold hover:text-gold-deep"
            >
              Email us
            </a>
          </div>
          <p className="border-l-2 border-rule pl-3 text-sm text-ink-soft">
            Send us your name, contact number, quantity and delivery details on WhatsApp —
            we&apos;ll guide you through the next steps.
          </p>
        </div>
      </div>
    </section>
  );
}
