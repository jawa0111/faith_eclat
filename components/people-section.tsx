import { TestimonialCarousel } from "@/components/testimonial-carousel";

const peopleRows = [
  ["My mother.", "My sister."],
  ["My aunt.", "My friend."],
];

const reviews = [
  "Amazing product! I started using Faith Éclat cream recently and I'm genuinely impressed with the results. It absorbed well, non-sticky, and gave my skin a natural glow. I can see a visible difference in my skin tone. My skin is glowing like never before. No side effects for me — 100% satisfied. Thank you so much ❤️",
  "I've been using Faith Éclat Cream for a few months now, and I'm honestly so happy with the results! ❤️✨ My skin feels so soft, smooth, glowing, and brighter than before. I absolutely love how it makes my skin look and feel. Highly recommend this cream! 💕 I'll definitely be buying more in the future. 🥰✨",
];

export function PeopleSection() {
  return (
    <section aria-label="Real people. Real experiences." className="py-14 sm:py-20">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="border-l-2 border-gold px-6 py-2 text-left sm:px-10">
          <p className="text-xs font-semibold tracking-[.16em] text-gold-deep uppercase">
            Real people. Real experiences.
          </p>
          <p className="mt-3.5 max-w-[52ch] text-ink-soft">
            Before Faith Éclat became a brand, it was something shared among people close to me.
          </p>

          <div className="mt-6 flex flex-col gap-2">
            {peopleRows.map((row) => (
              <div key={row.join("-")} className="flex items-center gap-4">
                {row.map((person) => (
                  <span key={person} className="flex items-center gap-4">
                    <span aria-hidden className="text-[.7rem] text-gold/60">
                      ◆
                    </span>
                    <span className="font-display text-[1.15rem] italic text-gold-deep">
                      {person}
                    </span>
                  </span>
                ))}
              </div>
            ))}
          </div>

          <p className="mt-6 max-w-[52ch] text-ink-soft">
            Their honest experiences gave me the confidence to take the next step.
          </p>

          <p className="mt-6 text-ink-soft">Now we&apos;d love to hear yours. 🤍</p>
        </div>

        <TestimonialCarousel reviews={reviews} />
      </div>

      <p className="mt-8 max-w-[62ch] text-left text-sm text-ink-soft">
        Individual experiences can vary. Skincare results are not guaranteed to be identical for
        everyone.
      </p>
    </section>
  );
}
