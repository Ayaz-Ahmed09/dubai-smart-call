import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock, WheatIcon, CalculatorIcon } from 'lucide-react';

const Footer = () => {
  const handleCallClick = () => {
    window.open('tel:+971563412211', '_self');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/971563412211?text=Hi! I\'m interested in your home automation services in Dubai.', '_blank');
  };

  const handleEmailClick = () => {
    window.open('mailto:info@alnoortechnicalservices.com', '_self');
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-gradient mb-6">Dubai Smart Homes</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Transform your Dubai home with premium automation solutions. Expert installation, 24/7 support, lifetime warranty.
            </p>
            <div className="flex gap-3">
              <a href="tel:+971563412211" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-call hover:bg-call/90 rounded-full flex items-center justify-center transition-colors"
                aria-label="Call us"
              >
                <Phone className="h-5 w-5 text-call-foreground" />
              </a>
              <a href="https://wa.me/971563412211" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-whatsapp hover:bg-whatsapp/90 rounded-full flex items-center justify-center transition-colors"
                aria-label="WhatsApp us"
              >
                <MessageCircle className="h-5 w-5 text-whatsapp-foreground" />
              </a>
              <button
                onClick={handleEmailClick}
                className="w-10 h-10 bg-accent hover:bg-accent/90 rounded-full flex items-center justify-center transition-colors"
                aria-label="Email us"
              >
                <Mail className="h-5 w-5 text-accent-foreground" />
              </button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-6 text-foreground">Our Services</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button onClick={handleCallClick} className="text-muted-foreground hover:text-primary transition-colors">
                  Smart Lighting Systems
                </button>
              </li>
              <li>
                <button onClick={handleCallClick} className="text-muted-foreground hover:text-primary transition-colors">
                  Climate & AC Control
                </button>
              </li>
              <li>
                <button onClick={handleCallClick} className="text-muted-foreground hover:text-primary transition-colors">
                  Smart Security & CCTV
                </button>
              </li>
              <li>
                <button onClick={handleCallClick} className="text-muted-foreground hover:text-primary transition-colors">
                  Home Cinema Systems
                </button>
              </li>
              <li>
                <button onClick={handleCallClick} className="text-muted-foreground hover:text-primary transition-colors">
                  Smart Curtains & Blinds
                </button>
              </li>
              <li>
                <button onClick={handleCallClick} className="text-muted-foreground hover:text-primary transition-colors">
                  Multi-Room Audio
                </button>
              </li>
              <li>
                <button onClick={handleCallClick} className="text-muted-foreground hover:text-primary transition-colors">
                  Voice Control Systems
                </button>
              </li>
              <li>
                <button onClick={handleCallClick} className="text-muted-foreground hover:text-primary transition-colors">
                  Complete Integration
                </button>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-semibold mb-6 text-foreground">Service Areas</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Dubai Marina</li>
              <li>Palm Jumeirah</li>
              <li>Downtown Dubai</li>
              <li>Jumeirah Beach Residence</li>
              <li>Arabian Ranches</li>
              <li>Dubai Hills Estate</li>
              <li>Emirates Hills</li>
              <li>Business Bay</li>
              <li>Dubai Investment Park</li>
              <li>All Dubai Areas</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-6 text-foreground">Contact Info</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:+971563412211" className="text-muted-foreground hover:text-primary transition-colors">
                    +971563412211
                  </a>
                  <p className="text-xs text-primary">24/7 Support</p>
                </div>
              </div>

              <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <CalculatorIcon className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:+971563412211" className="text-muted-foreground hover:text-primary transition-colors">
                    Instant Quote / Consultation / Response
                  </a>
                  <p className="text-xs text-primary">All Dubai</p>
                </div>
              </div>
               </div>

              <div className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <button onClick={handleEmailClick} className="text-muted-foreground hover:text-primary transition-colors">
                    info@alnoortechnicalservices.com
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground">Sun-Thu: 8AM-10PM</p>
                  <p className="text-muted-foreground">Fri-Sat: 9AM-8PM</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground">Dubai, UAE</p>
                  <p className="text-xs text-primary">All Emirates</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Dubai Smart Homes. All rights reserved. Licensed & Insured in UAE.
            </p>
            <div className="flex gap-6 text-sm">
              <button onClick={handleCallClick} className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </button>
              <button onClick={handleCallClick} className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </button>
              <button onClick={handleCallClick} className="text-muted-foreground hover:text-primary transition-colors">
                Warranty Info
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;