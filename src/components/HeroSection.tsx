import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroSlide1 from '@/assets/hero-slide-1.jpg';
import heroSlide2 from '@/assets/hero-slide-2.jpg';
import heroSlide3 from '@/assets/hero-slide-3.jpg';

const slides = [
  {
    id: 1,
    image: heroSlide1,
    title: 'Transform Your Dubai Home Into A Smart Paradise',
    subtitle: 'Experience the future of living with our premium home automation solutions. From intelligent lighting to advanced security systems, we bring cutting-edge technology to your doorstep.',
  },
  {
    id: 2,
    image: heroSlide2,
    title: 'Advanced Security & Climate Control Systems',
    subtitle: 'Protect your family and optimize comfort with our state-of-the-art CCTV monitoring and automated climate control solutions designed for Dubai\'s unique environment.',
  },
  {
    id: 3,
    image: heroSlide3,
    title: 'Complete Home Entertainment & Voice Control',
    subtitle: 'Immerse yourself in luxury with multi-room audio, home cinema systems, and AI-powered voice assistants that respond to your every command.',
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/971XXXXXXXXX?text=Hi! I\'m interested in your home automation services in Dubai. Please provide more information.', '_blank');
  };

  const handleCallClick = () => {
    window.open('tel:+971XXXXXXXXX', '_self');
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`hero-slide absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="hero-content">
            <h1 className="hero-title">{slide.title}</h1>
            <p className="hero-subtitle">{slide.subtitle}</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleCallClick}
                className="cta-call text-lg px-8 py-4"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now: +971-XXX-XXXX
              </Button>
              
              <Button 
                onClick={handleWhatsAppClick}
                className="cta-whatsapp text-lg px-8 py-4"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
              </Button>
            </div>

            <div className="mt-12 text-center">
              <p className="text-sm text-muted-foreground mb-4">Trusted by 500+ Dubai Homes</p>
              <div className="flex justify-center gap-2">
                <span className="px-3 py-1 bg-primary/20 rounded-full text-xs text-primary">24/7 Support</span>
                <span className="px-3 py-1 bg-primary/20 rounded-full text-xs text-primary">Free Consultation</span>
                <span className="px-3 py-1 bg-primary/20 rounded-full text-xs text-primary">Lifetime Warranty</span>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/30 hover:bg-black/50 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/30 hover:bg-black/50 rounded-full transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide 
                ? 'bg-primary scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;