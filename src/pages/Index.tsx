import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import KeywordsSection from '@/components/KeywordsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingCallButton from '@/components/FloatingCallButton';
import PremiumInteractions from '@/components/PremiumInteractions';
import { ScrollReveal } from '@/hooks/useScrollReveal';

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <PremiumInteractions />
      
      <section id="hero">
        <HeroSection />
      </section>
      
      <ScrollReveal direction="up" delay={100}>
        <section id="services">
          <ServicesSection />
        </section>
      </ScrollReveal>
      
      <ScrollReveal direction="up" delay={200}>
        <section id="about">
          <AboutSection />
        </section>
      </ScrollReveal>
      
      <ScrollReveal direction="left" delay={100}>
        <section id="testimonials">
          <TestimonialsSection />
        </section>
      </ScrollReveal>
      
      <ScrollReveal direction="up" delay={150}>
        <section id="faq">
          <FAQSection />
        </section>
      </ScrollReveal>
      
      <ScrollReveal direction="fade" delay={100}>
        <KeywordsSection />
      </ScrollReveal>
      
      <ScrollReveal direction="up" delay={100}>
        <section id="contact">
          <ContactSection />
        </section>
      </ScrollReveal>
      
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;
