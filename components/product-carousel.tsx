"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

const slides = [
  { src: "/carousel/1.webp", alt: "Faith Éclat Glow Cream jar lit dramatically on a bed of moss" },
  { src: "/carousel/2.webp", alt: "Faith Éclat Glow Cream jar, closed, resting on natural grass" },
  { src: "/carousel/3.webp", alt: "Four Faith Éclat Glow Cream jars in silver and black lid finishes" },
  { src: "/carousel/4.webp", alt: "Faith Éclat Glow Cream jars styled outdoors among greenery" },
];

const AUTO_ADVANCE_MS = 4000;

export function ProductCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((i: number) => {
    setIndex((i + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, AUTO_ADVANCE_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused]);

  return (
    <div
      className="relative w-full max-w-[380px] overflow-hidden rounded-[28px] shadow-[0_1px_2px_rgba(43,38,32,.06),0_8px_24px_-12px_rgba(43,38,32,.18)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative aspect-[4/5] w-full">
        <div
          className="flex h-full w-full transition-transform duration-700 ease-out motion-reduce:transition-none"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div key={slide.src} className="relative h-full w-full shrink-0">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="(min-width: 640px) 380px, 90vw"
                className="object-cover"
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={() => goTo(index - 1)}
        aria-label="Previous photo"
        className="absolute left-1 top-1/2 flex h-11 w-9 -translate-y-1/2 items-center justify-center text-bg/70 transition hover:text-bg"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 drop-shadow-[0_1px_3px_rgba(0,0,0,.55)]">
          <path d="M15 5l-7 7 7 7" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => goTo(index + 1)}
        aria-label="Next photo"
        className="absolute right-1 top-1/2 flex h-11 w-9 -translate-y-1/2 items-center justify-center text-bg/70 transition hover:text-bg"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 drop-shadow-[0_1px_3px_rgba(0,0,0,.55)]">
          <path d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute inset-x-0 bottom-4 flex items-center justify-center gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Show photo ${i + 1}`}
            aria-current={i === index}
            className={`h-2 rounded-full shadow-[0_1px_2px_rgba(0,0,0,.35)] transition-all ${
              i === index ? "w-5 bg-bg/80" : "w-2 bg-bg/35"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
