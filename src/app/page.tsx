import CoursesSections from "@/compnents/CoursesSections";
import HeroSection from "@/compnents/HeroSection";
import InfiniteMovingCardsSection from "@/compnents/InfiniteMovingCardsSection";
import WhyChooseUsSection from "@/compnents/WhyChooseUsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CoursesSections/>
      <WhyChooseUsSection/>
      <InfiniteMovingCardsSection/>
    </>
  );
}
