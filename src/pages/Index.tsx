import React from 'react';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import KeywordsSection from '@/components/KeywordsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingCallButton from '@/components/FloatingCallButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <FAQSection />
      <KeywordsSection />
      <ContactSection />
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;
