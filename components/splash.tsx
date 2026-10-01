"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

const AUTO_DISMISS_MS = 2200;
const EXIT_MS = 600;

type Phase = "visible" | "leaving" | "hidden";

export function Splash() {
  const [phase, setPhase] = useState<Phase>("visible");

  useEffect(() => {
    if (phase !== "visible") return;
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => setPhase("leaving"), AUTO_DISMISS_MS);
    return () => clearTimeout(timer);
  }, [phase]);

  useEffect(() => {
    if (phase !== "leaving") return;
    const timer = setTimeout(() => {
      setPhase("hidden");
      document.body.style.overflow = "";
    }, EXIT_MS);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [phase]);

  function dismiss() {
    if (phase === "visible") setPhase("leaving");
  }

  if (phase === "hidden") return null;

  const leaving = phase === "leaving";

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`${siteConfig.brand} — tap to continue`}
      onClick={dismiss}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && dismiss()}
      className={`fixed inset-0 z-50 flex cursor-pointer items-center justify-center overflow-hidden bg-bg transition-all ease-in motion-reduce:transition-none ${
        leaving ? "pointer-events-none opacity-0 duration-[600ms]" : "opacity-100 duration-300"
      }`}
    >
      <div
        aria-hidden
        className={`absolute h-[min(560px,120vw)] w-[min(560px,120vw)] rounded-full bg-gold/25 blur-[64px] motion-safe:animate-[glow-pulse_3.2s_ease-in-out_infinite] motion-reduce:animate-none ${
          leaving ? "scale-90 opacity-0 transition-all duration-[600ms]" : ""
        }`}
      />

      <div
        className={`relative aspect-square w-[min(380px,78vw)] overflow-hidden rounded-full bg-bg-elevated drop-shadow-[0_18px_48px_rgba(36,31,26,.25)] transition-all ease-out ${
          leaving
            ? "scale-110 opacity-0 duration-[550ms]"
            : "scale-100 opacity-100 duration-300 motion-safe:animate-[splash-in_1s_cubic-bezier(.22,1.4,.44,1)_both] motion-reduce:animate-none"
        }`}
      >
        <Image
          src="/logo.webp"
          alt={`${siteConfig.brand} — ${siteConfig.tagline}`}
          fill
          priority
          sizes="380px"
          className="object-contain"
        />
      </div>
    </div>
  );
}
