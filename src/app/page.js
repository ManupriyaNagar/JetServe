import AboutUs from "@/components/Hero/AboutUs";
import CategoriesSection from "@/components/Hero/CategoriesSection";
import ContactUsSection from "@/components/Hero/ContactUsSection";
import CourseCard1 from "@/components/Hero/CourseCard";
import HeroSection from "@/components/Hero/HeroSection";
import ScrollingFeatures from "@/components/Hero/ScrollingFeature";
import ScrollingPromotions from "@/components/Hero/ScrollingPromotions";
import TestimonialsSection from "@/components/Hero/TestimonialsSection";
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
    <TestimonialsSection/>
    <ScrollingPromotions/>
    <ContactUsSection/>

    </>
  );
}
