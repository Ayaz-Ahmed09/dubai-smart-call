import React from 'react';
import { Phone, MessageCircle, Clock, MapPin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const handleCallClick = () => {
    window.open('tel:+971XXXXXXXXX', '_self');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/971XXXXXXXXX?text=Hi! I\'m interested in your home automation services in Dubai. Please provide more information and schedule a consultation.', '_blank');
  };

  const handleEmailClick = () => {
    window.open('mailto:info@dubaiesmarthomes.com?subject=Smart Home Consultation Request&body=Hi, I\'m interested in learning more about your home automation services in Dubai. Please contact me to schedule a consultation.', '_self');
  };

  return (
    <section className="section-container bg-muted/30">
      <div className="text-center mb-16">
        <h2 className="section-title">Get Your Free Smart Home Consultation</h2>
        <p className="section-subtitle">
          Ready to transform your Dubai home? Contact our expert team today for a personalized consultation and detailed quote.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <div className="bg-card-gradient p-8 rounded-2xl border border-border">
            <h3 className="text-2xl font-bold mb-6 text-gradient">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Call Us Now</h4>
                  <p className="text-muted-foreground">+971-XXX-XXXX</p>
                  <p className="text-sm text-primary">24/7 Emergency Support</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">WhatsApp</h4>
                  <p className="text-muted-foreground">+971-XXX-XXXX</p>
                  <p className="text-sm text-primary">Instant Response</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-muted-foreground">info@dubaismarthomes.com</p>
                  <p className="text-sm text-primary">Detailed Inquiries</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Business Hours</h4>
                  <p className="text-muted-foreground">Sunday - Thursday: 8:00 AM - 10:00 PM</p>
                  <p className="text-muted-foreground">Friday - Saturday: 9:00 AM - 8:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Service Areas</h4>
                  <p className="text-muted-foreground">Dubai, Abu Dhabi, Sharjah</p>
                  <p className="text-sm text-primary">All Emirates Covered</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="space-y-8">
          <div className="bg-card-gradient p-8 rounded-2xl border border-border">
            <h3 className="text-2xl font-bold mb-6 text-gradient">Why Call Us Today?</h3>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-muted-foreground">Free on-site consultation and assessment</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-muted-foreground">Detailed quote with no hidden costs</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-muted-foreground">Expert recommendations for your home</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-muted-foreground">Same-day response guarantee</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-muted-foreground">Lifetime support and warranty</span>
              </li>
            </ul>

            <div className="space-y-4">
              <Button onClick={handleCallClick} className="w-full cta-call text-lg py-6">
                <Phone className="mr-2 h-5 w-5" />
                Call Now: +971-XXX-XXXX
              </Button>
              
              <Button onClick={handleWhatsAppClick} className="w-full cta-whatsapp text-lg py-6">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp for Instant Quote
              </Button>

              <Button onClick={handleEmailClick} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-6">
                <Mail className="mr-2 h-5 w-5" />
                Email for Detailed Info
              </Button>
            </div>
          </div>

          <div className="bg-primary/10 p-6 rounded-xl border border-primary/20">
            <h4 className="font-bold text-primary mb-2">🎯 Limited Time Offer</h4>
            <p className="text-sm text-foreground">
              Schedule your consultation this month and receive a FREE smart lighting starter package worth AED 2,500 with any complete home automation installation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;