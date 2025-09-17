import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { id: 'hero', label: 'Home', href: '#hero' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'testimonials', label: 'Reviews', href: '#testimonials' },
  { id: 'faq', label: 'FAQ', href: '#faq' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Find active section
      const sections = navItems.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/971563412211?text=Hi! I\'m interested in your home automation services in Dubai. Please provide more information.', '_blank');
  };

  const handleCallClick = () => {
    window.open('tel:+971563412211', '_self');
  };

  return (
    <>
      <nav className={`navbar-container ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-content">
          {/* Logo */}
          <div className="navbar-logo">
            <img src='/logo.png' width={50} height={50} className="text-gradient font-bold text-xl"/>
              
            
          </div>

          {/* Desktop Navigation */}
          <div className="navbar-menu">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.href)}
                className={`navbar-link ${activeSection === item.id ? 'navbar-link-active' : ''}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="navbar-cta">
            <Button 
              onClick={handleCallClick}
              size="sm"
              className="cta-call text-sm px-4 py-2"
            >
              <Phone className="mr-1 h-4 w-4" />
              Call Now
            </Button>
            <Button 
              onClick={handleWhatsAppClick}
              size="sm"
              className="cta-whatsapp text-sm px-4 py-2"
            >
              <MessageCircle className="mr-1 h-4 w-4" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="navbar-mobile-toggle"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`navbar-mobile ${isOpen ? 'navbar-mobile-open' : ''}`}>
          <div className="navbar-mobile-content">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.href)}
                className={`navbar-mobile-link ${activeSection === item.id ? 'navbar-mobile-link-active' : ''}`}
              >
                {item.label}
              </button>
            ))}
            
            <div className="navbar-mobile-cta">
              <Button 
                onClick={handleCallClick}
                className="cta-call w-full mb-3"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now: +971563412211
              </Button>
              <Button 
                onClick={handleWhatsAppClick}
                className="cta-whatsapp w-full"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="navbar-spacer" />

    </>
  );
};

export default Navbar;