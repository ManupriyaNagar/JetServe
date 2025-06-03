import AboutUs from "@/components/Hero/AboutUs";
import CategoriesSection from "@/components/Hero/CategoriesSection";
import CourseCard1 from "@/components/Hero/CourseCard";
import HeroSection from "@/components/Hero/HeroSection";
import ScrollingFeatures from "@/components/Hero/ScrollingFeature";
import WhyChooseUs from "@/components/Hero/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <HeroSection/>
    <ScrollingFeatures/>
    <CategoriesSection/>
    <AboutUs/>
    <CourseCard1/>
    <WhyChooseUs/>
    <h1> hello lets start jet aviation</h1>
    </>
  );
}
