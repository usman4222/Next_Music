import CoursesSections from "@/compnents/CoursesSections";
import HeroSection from "@/compnents/HeroSection";
import InfiniteMovingCardsSection from "@/compnents/InfiniteMovingCardsSection";
import Instructor from "@/compnents/Instructor";
import WhyChooseUsSection from "@/compnents/WhyChooseUsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CoursesSections/>
      <WhyChooseUsSection/>
      <InfiniteMovingCardsSection/>
      <Instructor/>
    </>
  );
}
