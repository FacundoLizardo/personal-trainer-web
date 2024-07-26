import NutritionalGuide from "@/components/NutritionalGuide/NutritionalGuide";
import Blog from "@/components/Blog";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import Background from "@/components/Background/Background";
import TrainingPlan from "@/components/TrainingPlan/TrainingPlan";

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Background />
      <Hero />
      <Features />
      <Video />
      <NutritionalGuide />
      <TrainingPlan />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
    </>
  );
}
