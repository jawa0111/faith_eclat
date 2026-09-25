export const siteConfig = {
  brand: "Faith Éclat",
  tagline: "Glow with Confidence.",
  whatsappNumber: "94756296533",
  whatsappDisplay: "75 629 6533",
  email: "faitheclat.lk@gmail.com",
  instagramHandle: "@faitheclat.lk",
  instagramUrl: "https://www.instagram.com/faitheclat.lk/",
  facebookUrl: "https://www.facebook.com/share/1C2fBKZCbd/?mibextid=wwXIfr",
  tiktokHandle: "@faith.eclat",
  tiktokUrl: "https://www.tiktok.com/@faith.eclat",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
};

export const product = {
  id: "glow-cream-20g",
  name: "Glow Cream",
  weightGrams: 20,
  price: 3000,
  currency: "LKR",
  origin: "Pakistan",
};

export function whatsappOrderLink(message?: string) {
  const defaultMessage = `Hi Faith Éclat! I'd like to order the ${product.name} (${product.weightGrams}g, LKR ${product.price.toLocaleString()}).\nName: \nQuantity: \nDelivery address: `;
  const text = encodeURIComponent(message ?? defaultMessage);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
}
