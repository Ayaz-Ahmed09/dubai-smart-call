import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/hooks/useScrollReveal';
import serviceLighting from '@/assets/service-lighting.jpg';
import serviceClimate from '@/assets/service-climate.jpg';
import serviceSecurity from '@/assets/service-security.jpg';
import serviceCinema from '@/assets/service-cinema.jpg';
import serviceCurtains from '@/assets/service-curtains.jpg';
import serviceAudio from '@/assets/service-audio.jpg';
import serviceVoice from '@/assets/service-voice.jpg';
import serviceIntegration from '@/assets/service-integration.jpg';

const services = [
  {
    id: 1,
    title: 'Smart Lighting Systems',
    description: 'Intelligent LED lighting with automated scheduling, mood settings, and energy-efficient controls. Transform any space with customizable ambiance and remote control capabilities.',
    image: serviceLighting,
    features: ['Automated scheduling', 'Energy efficient', 'Remote control', 'Mood lighting'],
  },
  {
    id: 2,
    title: 'Climate & AC Control',
    description: 'Advanced temperature management systems optimized for Dubai\'s climate. Smart thermostats, zone control, and automated cooling for maximum comfort and energy savings.',
    image: serviceClimate,
    features: ['Smart thermostats', 'Zone control', 'Energy optimization', 'Dubai climate ready'],
  },
  {
    id: 3,
    title: 'Smart Security & CCTV',
    description: 'Comprehensive security solutions with intelligent monitoring, facial recognition, and instant alerts. Protect your family with state-of-the-art surveillance technology.',
    image: serviceSecurity,
    features: ['24/7 monitoring', 'Facial recognition', 'Mobile alerts', 'Cloud storage'],
  },
  {
    id: 4,
    title: 'Home Cinema & Entertainment',
    description: 'Premium home theater experiences with automated projectors, immersive sound systems, and seamless streaming integration for the ultimate entertainment setup.',
    image: serviceCinema,
    features: ['4K projection', 'Surround sound', 'Streaming integration', 'Automated controls'],
  },
  {
    id: 5,
    title: 'Smart Curtains & Blinds',
    description: 'Motorized window treatments with scheduling, light sensors, and weather integration. Perfect for Dubai\'s intense sunlight and privacy requirements.',
    image: serviceCurtains,
    features: ['Motorized operation', 'Light sensors', 'Weather integration', 'Schedule control'],
  },
  {
    id: 6,
    title: 'Multi-Room Audio Systems',
    description: 'Wireless audio distribution throughout your home with synchronized playback, individual zone control, and high-fidelity sound quality in every room.',
    image: serviceAudio,
    features: ['Wireless distribution', 'Zone control', 'High-fidelity sound', 'Multi-source support'],
  },
  {
    id: 7,
    title: 'Voice Control & AI Assistants',
    description: 'Hands-free home control with advanced AI integration. Control all systems using natural voice commands in Arabic and English languages.',
    image: serviceVoice,
    features: ['Voice commands', 'AI integration', 'Multi-language', 'Natural speech'],
  },
  {
    id: 8,
    title: 'Complete Home Integration',
    description: 'Seamless integration of all smart systems into one unified platform. Central control, automation scenarios, and intelligent decision-making for your entire home.',
    image: serviceIntegration,
    features: ['Unified platform', 'Automation scenarios', 'Central control', 'Intelligent decisions'],
  },
];

const ServicesSection = () => {
  const handleCallClick = () => {
    window.open('tel:+971XXXXXXXXX', '_self');
  };

  return (
    <section className="section-container bg-background">
      <div className="text-center mb-16">
        <h2 className="section-title">Premium Smart Home Services</h2>
        <p className="section-subtitle">
          Transform your Dubai home with our comprehensive automation solutions. From intelligent lighting to complete system integration, we deliver cutting-edge technology with professional installation and lifetime support.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <ScrollReveal 
            key={service.id} 
            direction="up" 
            delay={index * 100}
            className="service-card p-6 group"
          >
            <div className="relative overflow-hidden rounded-xl mb-6">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
            <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{service.description}</p>

            <ul className="space-y-1 mb-6">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-sm text-muted-foreground">
                  <ArrowRight className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            <Button 
              onClick={handleCallClick}
              className="w-full cta-call"
            >
              <Phone className="mr-2 h-4 w-4" />
              Call for Installation
            </Button>
          </ScrollReveal>
        ))}
      </div>

      <div className="text-center mt-16">
        <div className="bg-card-gradient p-8 rounded-2xl border border-border">
          <h3 className="text-2xl font-bold mb-4 text-gradient">Need a Custom Solution?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Every home is unique. Our expert team designs personalized automation systems tailored to your lifestyle, preferences, and budget. Get a free consultation today.
          </p>
          <Button onClick={handleCallClick} className="cta-primary">
            <Phone className="mr-2 h-5 w-5" />
            Get Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;