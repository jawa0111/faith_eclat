import sharp from "sharp";

const SIZE = 1024; // 1:1 — the story section's image box is a square, not 4:5

await sharp("assets/product-photos/f8.jpeg")
  .rotate()
  .extract({ left: 0, top: 256, width: SIZE, height: SIZE })
  .normalise({ lower: 1, upper: 99 })
  .modulate({ saturation: 0.9, brightness: 1.04, hue: 4 })
  .linear(1.05, -6)
  .sharpen({ sigma: 0.6 })
  .webp({ quality: 82 })
  .toFile("public/story.webp");

console.log("wrote public/story.webp");
