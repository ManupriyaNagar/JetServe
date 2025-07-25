import AboutUs from "@/components/Hero/AboutUs";
import CategoriesSection from "@/components/Hero/CategoriesSection";
import ContactUsSection from "@/components/Hero/ContactUsSection";
import CourseCard1 from "@/components/Hero/CourseCard";
import HeroSection from "@/components/Hero/HeroSection";
import ScrollingFeatures from "@/components/Hero/ScrollingFeature";
import ScrollingPromotions from "@/components/Hero/ScrollingPromotions";
import TestimonialsSection from "@/components/Hero/TestimonialsSection";
import WhyChooseUs from "@/components/Hero/WhyChooseUs";
import AcademyCard from '@/components/Hero/AcademyCard';
import CHPLCadetProgram from '@/components/Hero/CHPLCadetProgram';
import Image from "next/image";
import SuccessMarquee from "@/components/Hero/SuccessMarquee";
import InstagramTestimonials from "@/components/Hero/InstaTesti";

export default function Home() {
  return (
    <>
    <HeroSection/>
    <ScrollingFeatures/>
    <CategoriesSection/>
    <SuccessMarquee/>
    <AboutUs/>
    <CourseCard1/>
    <WhyChooseUs/>
    <AcademyCard/>
    <TestimonialsSection/>
    <CHPLCadetProgram/>
    <ScrollingPromotions/>
    <InstagramTestimonials/>
    <ContactUsSection/>


    </>
  );
}
