import React from 'react';
import { Star, Quote, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    name: 'Ahmed Al Mansouri',
    location: 'Palm Jumeirah Villa',
    rating: 5,
    text: 'Exceptional service! They transformed our villa into a smart home paradise. The lighting automation and climate control work flawlessly. Highly recommended for anyone in Dubai.',
    service: 'Complete Home Automation',
  },
  {
    name: 'Sarah Johnson',
    location: 'Downtown Dubai Apartment',
    rating: 5,
    text: 'Professional installation and amazing support. The smart security system gives us peace of mind, and the voice control features are incredibly convenient.',
    service: 'Security & Voice Control',
  },
  {
    name: 'Mohammad bin Rashid',
    location: 'Jumeirah Beach Residence',
    rating: 5,
    text: 'Outstanding quality and attention to detail. The home cinema system exceeded our expectations. The team was professional and completed everything on time.',
    service: 'Home Cinema & Entertainment',
  },
  {
    name: 'Emily Rodriguez',
    location: 'Arabian Ranches',
    rating: 5,
    text: 'Love our smart curtains and multi-room audio! Perfect for Dubai weather. The automated blinds protect our furniture from sun damage while maintaining the view.',
    service: 'Smart Curtains & Audio',
  },
];

const TestimonialsSection = () => {
  const handleCallClick = () => {
    window.open('tel:+971XXXXXXXXX', '_self');
  };

  return (
    <section className="section-container bg-muted/30">
      <div className="text-center mb-16">
        <h2 className="section-title">What Our Dubai Clients Say</h2>
        <p className="section-subtitle">
          Don't just take our word for it. Here's what homeowners across Dubai are saying about their smart home transformation experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="bg-card-gradient p-8 rounded-2xl border border-border relative"
          >
            <Quote className="h-8 w-8 text-primary/30 absolute top-4 right-6" />
            
            <div className="flex items-center mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-primary fill-current" />
              ))}
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              "{testimonial.text}"
            </p>

            <div className="border-t border-border pt-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-primary font-medium">{testimonial.service}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <div className="bg-card-gradient p-8 rounded-2xl border border-border max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-gradient">Ready to Join Our Happy Clients?</h3>
          <p className="text-muted-foreground mb-6">
            Experience the same exceptional service and quality that has made us Dubai's most trusted home automation company.
          </p>
          <Button onClick={handleCallClick} className="cta-primary">
            <Phone className="mr-2 h-5 w-5" />
            Get Your Free Quote Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;