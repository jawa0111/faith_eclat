import type { Metadata } from "next";
import { Fraunces, Work_Sans } from "next/font/google";
import { Splash } from "@/components/splash";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  axes: ["opsz"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Faith Éclat — Glow with Confidence",
  description:
    "Faith Éclat Glow Cream — a night skincare ritual imported from Pakistan. Shop online, learn the routine, and order with confidence.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-theme="light" className={`${fraunces.variable} ${workSans.variable}`}>
      <body className="min-h-full overflow-x-clip font-body text-[16px] leading-relaxed text-ink bg-bg antialiased">
        <Splash />
        {children}
      </body>
    </html>
  );
}
