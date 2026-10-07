import sharp from "sharp";
import { mkdir } from "node:fs/promises";

const outDir = "public/carousel";
await mkdir(outDir, { recursive: true });

const W = 960;
const H = 1200; // 4:5

const sources = [
  { in: "assets/product-photos/f9.jpeg", out: "1.webp", position: "centre" },
  { in: "assets/product-photos/f3.jpeg", out: "2.webp", position: "centre" },
  { in: "assets/product-photos/f4.jpeg", out: "3.webp", position: "centre" },
  { in: "assets/product-photos/f7.jpeg", out: "4.webp", position: "attention" },
];

for (const { in: input, out, position } of sources) {
  await sharp(input)
    .rotate()
    .resize(W, H, { fit: "cover", position })
    .normalise({ lower: 1, upper: 99 })
    .modulate({ saturation: 0.9, brightness: 1.04, hue: 4 })
    .linear(1.05, -6)
    .sharpen({ sigma: 0.6 })
    .webp({ quality: 82 })
    .toFile(`${outDir}/${out}`);
  console.log("wrote", out);
}
