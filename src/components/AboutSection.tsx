import React from 'react';
import { Shield, Award, Users, Clock, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  const handleCallClick = () => {
    window.open('tel:+971XXXXXXXXX', '_self');
  };

  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Award, value: '5 Years', label: 'Experience' },
    { icon: Shield, value: '100%', label: 'Satisfaction' },
    { icon: Clock, value: '24/7', label: 'Support' },
  ];

  return (
    <section className="section-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="section-title text-left mb-6">
            Dubai's Premier Smart Home Automation Specialists
          </h2>
          <div className="space-y-6 text-muted-foreground">
            <p className="text-lg leading-relaxed">
              Since 2019, we've been transforming Dubai homes into intelligent living spaces that adapt to your lifestyle. Our team of certified technicians specializes in cutting-edge home automation technologies, bringing you the future of smart living today.
            </p>
            <p>
              From luxury villas in Palm Jumeirah to modern apartments in Downtown Dubai, we've successfully automated over 500 homes across the UAE. Our expertise covers everything from basic smart lighting to complete home integration systems that learn and respond to your daily routines.
            </p>
            <p>
              We understand Dubai's unique climate challenges and lifestyle requirements, ensuring every installation is optimized for performance, energy efficiency, and the luxury standards you expect.
            </p>
          </div>
          
          <div className="mt-8">
            <Button onClick={handleCallClick} className="cta-primary">
              <Phone className="mr-2 h-5 w-5" />
              Schedule Consultation
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-card-gradient p-6 rounded-2xl border border-border text-center hover:bg-card hover:border-primary/20 transition-all duration-300"
            >
              <stat.icon className="h-8 w-8 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mt-20">
        <h3 className="text-3xl font-bold text-center mb-12 text-gradient">
          Why Dubai Residents Choose Us
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h4 className="text-xl font-semibold mb-3">Licensed & Insured</h4>
            <p className="text-muted-foreground">
              Fully licensed by Dubai Municipality with comprehensive insurance coverage for complete peace of mind.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <h4 className="text-xl font-semibold mb-3">Premium Quality</h4>
            <p className="text-muted-foreground">
              We use only top-tier brands and components, ensuring your smart home system delivers exceptional performance and longevity.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-primary" />
            </div>
            <h4 className="text-xl font-semibold mb-3">24/7 Support</h4>
            <p className="text-muted-foreground">
              Round-the-clock technical support and maintenance services to keep your smart home running perfectly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;