const points = [
  {
    title: "A natural-looking glow",
    body: "Faith Éclat is designed around the idea of a glow that still looks like you. Not an overly pale or artificial-looking finish. Just a fresh, naturally radiant appearance that complements your skin.",
    icon: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 4v2M12 18v2M4 12h2M18 12h2" />
      </>
    ),
  },
  {
    title: "Less is more",
    body: "You don't need to cover your skin in cream. A small amount is enough. Consistency matters more than quantity.",
    icon: (
      <>
        <path d="M12 3v18M6 8l6-5 6 5M6 16l6 5 6-5" />
      </>
    ),
  },
  {
    title: "A routine, not a quick fix",
    body: "Beautiful-looking skin is also about how you care for it every day. Faith Éclat works best when paired with a consistent skincare routine, moisturization and sun protection.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" />
      </>
    ),
  },
];

export function WhySection() {
  return (
    <section aria-label="Why Faith Éclat" className="py-14 sm:py-20">
      <p className="text-xs font-semibold tracking-[.16em] text-gold-deep uppercase">
        Why Faith Éclat?
      </p>
      <div className="mt-6 grid grid-cols-1 gap-7 sm:grid-cols-3">
        {points.map((point) => (
          <div key={point.title} className="flex flex-col gap-2.5">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              className="h-[30px] w-[30px] text-ink"
            >
              {point.icon}
            </svg>
            <h3 className="font-display text-[1.15rem] font-medium">{point.title}</h3>
            <p className="text-sm text-ink-soft">{point.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
