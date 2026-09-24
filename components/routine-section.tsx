"use client";

import { useLayoutEffect, useRef, useState, type ReactNode, type RefObject } from "react";

const remedies = ["🌿 Aloe vera gel", "🍯 Chickpea flour + honey", "🍅 Tomato + honey", "🥭 Papaya"];

function StepColumn({
  n,
  icon,
  heading,
  children,
  cardRef,
  cardHeight,
}: {
  n: number;
  icon: string;
  heading: string;
  children: ReactNode;
  cardRef?: RefObject<HTMLDivElement | null>;
  cardHeight?: number;
}) {
  return (
    <div
      ref={cardRef}
      className="flex h-auto flex-col rounded-[16px] border border-rule bg-bg-card p-4 lg:overflow-hidden"
      style={cardHeight ? { height: `${cardHeight}px` } : undefined}
    >
      <div className="flex items-center gap-2 text-[.7rem] font-semibold tracking-[.14em] text-gold-deep uppercase">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold text-[.65rem] font-semibold text-bg [font-variant-numeric:tabular-nums]">
          {n}
        </span>
        Step {n}
      </div>
      <div className="mt-2.5 flex items-center gap-2">
        <span className="text-[1.1rem] leading-none">{icon}</span>
        <h3 className="font-display text-[1rem] font-medium">{heading}</h3>
      </div>
      <div
        className={`routine-scrollbar mt-2 flex flex-col gap-2 overflow-y-auto text-[.87rem] leading-relaxed text-ink-soft ${
          cardHeight ? "min-h-0 flex-1" : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export function RoutineSection() {
  const stepThreeRef = useRef<HTMLDivElement>(null);
  const [cardHeight, setCardHeight] = useState<number>();

  useLayoutEffect(() => {
    let frame = 0;

    const measureStepThree = () => {
      setCardHeight(undefined);
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (window.matchMedia("(min-width: 1024px)").matches && stepThreeRef.current) {
          setCardHeight(stepThreeRef.current.offsetHeight);
        }
      });
    };

    measureStepThree();
    window.addEventListener("resize", measureStepThree);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", measureStepThree);
    };
  }, []);

  return (
    <section aria-label="Your Faith Éclat routine" className="py-10 sm:py-14">
      <p className="text-xs font-semibold tracking-[.16em] text-gold-deep uppercase">
        Your Faith Éclat routine
      </p>

      <div className="mt-6 grid grid-cols-1 items-start gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <StepColumn n={1} icon="🧴" heading="Patch test" cardHeight={cardHeight}>
          <p>
            Before applying it to your face, apply a small amount to your hand or behind your
            ear. Give your skin time to respond. If everything feels comfortable, you can begin
            using it as directed.
          </p>
        </StepColumn>

        <StepColumn n={2} icon="🌙" heading="Night" cardHeight={cardHeight}>
          <p>Faith Éclat is used at night.</p>
          <p>
            Start with a small amount — around{" "}
            <span className="font-medium text-ink">3–4 tiny drops / a small pea-sized amount</span>{" "}
            — and gently blend it into your skin using your fingertips.
          </p>
          <p>
            <strong className="text-ink">More cream does not mean faster results.</strong> A
            little is enough.
          </p>
        </StepColumn>

        <StepColumn
          n={3}
          icon="☀️"
          heading="The next day — protect your skin"
          cardRef={stepThreeRef}
          cardHeight={cardHeight}
        >
          <p>When you wake up, maintaining your skin during the day is important.</p>
          <p>If you&apos;re going outside:</p>
          <p>
            <strong className="text-ink">Moisturizer → Sunscreen → Makeup</strong> or anything
            else you normally like to apply.
          </p>
          <p>Sunscreen is especially important when you&apos;re outdoors, so don&apos;t skip it. 🤍</p>
        </StepColumn>

        <StepColumn n={4} icon="🏠" heading="If you're staying indoors" cardHeight={cardHeight}>
          <p>
            You can keep your daytime routine simple and include gentle, natural skincare that
            works well for your skin.
          </p>
          <p>
            For example, you can use natural aloe vera gel twice a week for 10–15 minutes, then
            wash it off.
          </p>
          <p>You can also explore simple options such as:</p>
          <ul className="flex flex-wrap gap-1.5">
            {remedies.map((r) => (
              <li
                key={r}
                className="rounded-full border border-rule px-2.5 py-1 text-[.72rem] text-ink-soft"
              >
                {r}
              </li>
            ))}
          </ul>
          <p>Always patch-test anything new before putting it on your face.</p>
        </StepColumn>
      </div>

      <p className="mt-8 text-center text-sm text-ink-soft">
        <strong className="text-ink">Glow needs maintenance</strong> — Faith Éclat = night use;
        daytime = maintain and protect your skin. 🤍
      </p>
    </section>
  );
}
