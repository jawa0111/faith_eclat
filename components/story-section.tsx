import Image from "next/image";

export function StorySection() {
  return (
    <section id="story" aria-label="Our story" className="py-10 sm:py-14">
      <div className="grid grid-cols-1 items-center gap-8 sm:grid-cols-2 sm:gap-10">
        <div className="order-2 sm:order-1">
          <p className="text-xs font-semibold tracking-[.16em] text-gold-deep uppercase">
            The story behind Faith Éclat
          </p>
          <h2 className="mt-1.5 text-balance font-display text-[clamp(1.4rem,2.4vw,1.75rem)] font-medium">
            It started with a discovery.
          </h2>
          <div className="mt-3.5 flex flex-col gap-2 text-[.9rem] leading-normal text-ink sm:text-[.95rem]">
            <p>Faith Éclat wasn&apos;t created from a business idea.</p>
            <p>It started with a personal experience.</p>
            <p>
              During my time in Pakistan, I became friends with a Pakistani family in my
              neighbourhood. One of the women introduced me to this cream and showed me how she
              used it.
            </p>
            <p>I decided to try it for myself.</p>
            <p>
              I was pleasantly surprised by the way my skin looked and felt, especially the
              appearance of pigmentation and pimple marks.
            </p>
            <p>Then I shared it with the women in my family.</p>
            <blockquote className="my-0.5 border-l-[3px] border-gold pl-4 font-display text-[clamp(1rem,1.8vw,1.25rem)] font-medium leading-snug text-gold-deep italic">
              &ldquo;My mother, sister, aunt and a close friend tried it too — and their
              experiences encouraged me to share it beyond my own family.&rdquo;
            </blockquote>
            <p className="font-semibold text-ink">That little discovery became Faith Éclat.</p>
            <p>And now, I&apos;m bringing that experience to you. 🤍</p>
          </div>
        </div>

        <div className="order-1 sm:order-2">
          <div className="relative aspect-square w-full max-w-[420px] mx-auto overflow-hidden rounded-[24px] shadow-[0_1px_2px_rgba(43,38,32,.06),0_8px_24px_-12px_rgba(43,38,32,.18)] sm:max-w-none">
            <Image
              src="/story.jpg"
              alt="Faith Éclat Glow Cream jars, the beginning of the story"
              fill
              sizes="(min-width: 640px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
