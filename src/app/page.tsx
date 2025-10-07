'use client';
import AboutPreview from "@/components/AboutPreview";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import ServicesSection from "@/components/ServiceCard";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhatsAppButton from "@/components/WhatsAppButton";


export default function RiseXCreative() {
  return (
    <div className="bg-black min-h-screen">
   
      <HeroSection/>
      <AboutPreview/>
      <ServicesSection/>
      <TeamSection/>
      <PortfolioSection/>
      <TestimonialsSection/>
      <ContactSection/>
    
      <WhatsAppButton/>
    </div>
  );
}