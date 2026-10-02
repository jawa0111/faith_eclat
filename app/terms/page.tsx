import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { siteConfig } from "@/lib/site-config";

const clauses = [
  {
    title: "1. Product Information",
    body: [
      "We aim to present our products, photographs, descriptions, prices and other information as accurately as possible.",
      "Product appearance may vary slightly depending on lighting, photography and display settings.",
    ],
  },
  {
    title: "2. Skincare & Individual Results",
    body: [
      "Skincare results differ from person to person. FAITH ÉCLAT does not guarantee a particular result, timeframe or change in skin tone, pigmentation, marks or appearance.",
      "Our product descriptions are intended to provide general information and should not be interpreted as medical advice.",
    ],
  },
  {
    title: "3. Patch Testing",
    body: [
      "Customers are strongly encouraged to perform a patch test before first use.",
      "If irritation, discomfort or an unexpected reaction occurs, discontinue use and seek appropriate professional advice.",
    ],
  },
  {
    title: "4. Ingredients & Personal Sensitivity",
    body: [
      "Customers are responsible for reviewing the product's ingredient information and considering known allergies or sensitivities before use.",
      "If you have concerns about a particular ingredient or your skin condition, consult a qualified healthcare professional.",
    ],
  },
  {
    title: "5. Orders",
    body: [
      "An order is considered confirmed only after the required order details have been received and confirmation has been provided by FAITH ÉCLAT.",
      "We reserve the right to decline or cancel an order where necessary, including in cases of incorrect information, stock limitations or suspected fraudulent activity.",
    ],
  },
  {
    title: "6. Pricing & Payment",
    body: [
      "All displayed prices are stated in Sri Lankan Rupees (LKR) unless otherwise specified.",
      "The current listed price of FAITH ÉCLAT Glow Cream is LKR 2,990 for 20g. Prices may change, but any confirmed order will be handled according to the price communicated at the time of confirmation.",
    ],
  },
  {
    title: "7. Delivery",
    body: [
      "Delivery times may vary depending on location, courier availability, weather, public holidays and circumstances outside our control.",
      "Customers are responsible for providing an accurate delivery address and contact number.",
    ],
  },
  {
    title: "8. Returns & Product Concerns",
    id: "returns",
    body: [
      "We want every customer to receive their product in proper condition.",
      "If you believe your product has arrived damaged, incorrect or has another legitimate product-related issue, contact us as soon as possible with your order details and relevant photographs/evidence.",
      "For an alleged allergic reaction, customers should discontinue use and seek appropriate medical advice. Where a return is requested on this basis, supporting documentation may be required.",
    ],
  },
  {
    title: "9. Used or Opened Products",
    body: [
      "For hygiene and product-safety reasons, opened or used products may not be eligible for return except where required by applicable law or where FAITH ÉCLAT confirms otherwise.",
    ],
  },
  {
    title: "10. Website Content",
    body: [
      "All website content—including the FAITH ÉCLAT name, logo, photographs, designs, written content and branding—is intended for FAITH ÉCLAT and may not be copied, reproduced or used commercially without permission.",
    ],
  },
  {
    title: "11. Privacy",
    body: [
      "Any personal information provided when placing an order, such as your name, phone number and delivery address, will be handled in accordance with our Privacy Policy.",
    ],
  },
  {
    title: "12. Changes to These Terms",
    body: [
      "FAITH ÉCLAT may update these Terms & Conditions when necessary. The latest version published on this website will apply to future orders.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[760px] px-5 py-14 sm:px-8 sm:py-20">
        <p className="text-xs font-semibold tracking-[.16em] text-gold-deep uppercase">
          {siteConfig.brand} — Terms &amp; Conditions
        </p>
        <h1 className="mt-1.5 text-balance font-display text-[clamp(1.7rem,3vw,2.2rem)] font-medium">
          Welcome to FAITH ÉCLAT
        </h1>
        <p className="mt-5 max-w-[66ch] text-ink-soft">
          By browsing our website or purchasing from FAITH ÉCLAT, you agree to the terms outlined
          below. We have written these terms to keep your experience clear, transparent and
          comfortable.
        </p>

        <div className="mt-10 flex flex-col gap-9">
          {clauses.map((clause) => (
            <div key={clause.title} id={clause.id}>
              <h2 className="font-display text-[1.1rem] font-medium">{clause.title}</h2>
              <div className="mt-2 flex flex-col gap-2">
                {clause.body.map((paragraph) => (
                  <p key={paragraph} className="max-w-[62ch] text-[.95rem] text-ink-soft">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}

          <div>
            <h2 className="font-display text-[1.1rem] font-medium">13. Contact</h2>
            <p className="mt-2 max-w-[62ch] text-[.95rem] text-ink-soft">
              For questions regarding an order, product or these Terms &amp; Conditions:
            </p>
            <p className="mt-3 font-display text-[1.05rem] font-medium">{siteConfig.brand}</p>
            <p className="font-display italic text-gold-deep">{siteConfig.tagline} ✨</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
