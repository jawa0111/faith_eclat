import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { ProductSection } from "@/components/product-section";
import { StorySection } from "@/components/story-section";
import { WhySection } from "@/components/why-section";
import { RoutineSection } from "@/components/routine-section";
import { PeopleSection } from "@/components/people-section";
import { SafetySection } from "@/components/safety-section";
import { ReminderSection } from "@/components/reminder-section";
import { ThankYouSection } from "@/components/thank-you-section";
import { ClosingSection } from "@/components/closing-section";
import { FaqSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[1120px] px-5 sm:px-8">
        <Hero />
        <ProductSection />
        <StorySection />
        <WhySection />
        <RoutineSection />
        <PeopleSection />
        <SafetySection />
        <ReminderSection />
        <ThankYouSection />
        <ClosingSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
