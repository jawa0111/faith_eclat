"use client";

import { useEffect, useState } from "react";

const AUTO_ADVANCE_MS = 5000;

export function TestimonialCarousel({ reviews }: { reviews: string[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || reviews.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % reviews.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [paused, reviews.length]);

  return (
    <div
      className="relative mx-auto w-full max-w-[400px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        aria-hidden
        className="absolute inset-x-6 top-4 h-full origin-bottom rounded-[22px] border border-rule bg-bg-card/70"
        style={{ transform: "rotate(-8deg)" }}
      />
      <div
        aria-hidden
        className="absolute inset-x-3 top-2 h-full origin-bottom rounded-[22px] border border-rule bg-bg-card/85"
        style={{ transform: "rotate(6deg)" }}
      />

      <div className="relative overflow-hidden rounded-[22px] border border-rule bg-bg-elevated shadow-[0_1px_2px_rgba(43,38,32,.06),0_8px_24px_-12px_rgba(43,38,32,.18)]">
        {reviews.map((review, i) => (
          <div
            key={review}
            aria-hidden={i !== index}
            className={`flex min-h-[380px] flex-col justify-center gap-4 p-8 transition-opacity duration-700 ease-out motion-reduce:transition-none ${
              i === index
                ? "relative opacity-100"
                : "pointer-events-none absolute inset-0 opacity-0"
            }`}
          >
            <span
              aria-hidden
              className="pointer-events-none absolute top-3 right-5 font-display text-[4rem] leading-none text-gold/25"
            >
              &rdquo;
            </span>

            <div className="flex gap-0.5 text-gold-deep" aria-hidden>
              {Array.from({ length: 5 }).map((_, star) => (
                <svg key={star} viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
                  <path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.6l-5.9 3 1.3-6.6-4.9-4.6 6.6-.8L12 2.5z" />
                </svg>
              ))}
            </div>

            <p className="font-display text-[1.05rem] leading-snug text-ink italic">{review}</p>
          </div>
        ))}
      </div>

      {reviews.length > 1 && (
        <div className="relative mt-5 flex items-center justify-center gap-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show review ${i + 1}`}
              aria-current={i === index}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-5 bg-gold-deep" : "w-2 bg-gold/35"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
