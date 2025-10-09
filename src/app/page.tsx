'use client';
import AboutPreview from "@/components/AboutPreview";
import ContactSection from "@/components/ContactSection";
import FAQ from "@/components/FAQ";
import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import ServicesSection from "@/components/ServiceCard";
// import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function RiseXCreative() {
  return (
    <div className="bg-black min-h-screen">
   
      <HeroSection/>
      <AboutPreview/>
      <ServicesSection/>
      {/* <TeamSection/> */}
      <PortfolioSection/>
      <TestimonialsSection/>
      <FAQ/>
      <ContactSection/>
    
    </div>
  );
}