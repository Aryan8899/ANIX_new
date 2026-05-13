import Image from "next/image";
import Header from "@/Layout/Header";
import HeroSection from "@/main/HeroSection";
import WhyChooseUs from "@/main/WhyChooseUs";
import AboutUs from "@/main/AboutUs";
import ServicesSection from "@/main/ServicesSection";
import StartupLaunchpad from "@/main/StartupLaunchpad";
import HowItWorks from "@/main/HowItWorks";
import ClientTestimonials from "@/main/ClientTestimonials";
import TransparentPricing from "@/main/TransparentPricing";
import GetInTouch from "@/main/GetInTouch";
import Footer from "@/Layout/Fotter";

export default function Home() {
  return (
   <>
   <Header/>
   <HeroSection/>
   <WhyChooseUs/>
   <AboutUs/>
   <ServicesSection/>
   <StartupLaunchpad/>
   <HowItWorks/>
   <ClientTestimonials/>
   <TransparentPricing/>
   <GetInTouch/>
   <Footer/>
   </>
  );
}
