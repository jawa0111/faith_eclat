import sharp from "sharp";

const W = 960;
const H = 1200; // 4:5, matches the carousel crop/grade so it reads as one shoot

await sharp("assets/product-photos/f6.jpeg")
  .rotate()
  .resize(W, H, { fit: "cover", position: "centre" })
  .normalise({ lower: 1, upper: 99 })
  .modulate({ saturation: 0.9, brightness: 1.04, hue: 4 })
  .linear(1.05, -6)
  .sharpen({ sigma: 0.6 })
  .jpeg({ quality: 90, chromaSubsampling: "4:4:4" })
  .toFile("public/story.jpg");

console.log("wrote public/story.jpg");
