import React, { useEffect, useState } from 'react';

const PremiumInteractions = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Premium cursor effect for desktop
    const cursor = document.createElement('div');
    cursor.className = 'premium-cursor';
    document.body.appendChild(cursor);

    const updateCursor = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    const handleMouseEnter = () => cursor.classList.add('premium-cursor-hover');
    const handleMouseLeave = () => cursor.classList.remove('premium-cursor-hover');

    // Add cursor tracking
    document.addEventListener('mousemove', updateCursor);
    
    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    // Premium touch feedback for mobile
    const addTouchFeedback = () => {
      const touchElements = document.querySelectorAll('button, a, [role="button"], .service-card');
      
      touchElements.forEach(el => {
        el.addEventListener('touchstart', function(this: HTMLElement) {
          this.classList.add('premium-touch-active');
        }, { passive: true });
        
        el.addEventListener('touchend', function(this: HTMLElement) {
          setTimeout(() => {
            this.classList.remove('premium-touch-active');
          }, 150);
        }, { passive: true });
      });
    };

    addTouchFeedback();

    // Smooth parallax effect for hero section
    const heroElements = document.querySelectorAll('.hero-slide');
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.3;
      
      heroElements.forEach(el => {
        (el as HTMLElement).style.transform = `translate3d(0, ${rate}px, 0)`;
      });
    };

    // Use passive listeners for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('scroll', handleScroll);
      document.body.removeChild(cursor);
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  if (!mounted) return null;

  return (
    <>
      <style>{`
        /* Premium Cursor Effect */
        .premium-cursor {
          position: fixed;
          width: 20px;
          height: 20px;
          background: radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transition: transform 0.1s ease-out;
          opacity: 0;
        }

        @media (hover: hover) {
          .premium-cursor {
            opacity: 0.6;
          }
          
          .premium-cursor-hover {
            transform: scale(2);
            opacity: 0.8;
          }
        }

        /* Premium Touch Feedback */
        .premium-touch-active {
          transform: scale(0.95) !important;
          transition: transform 0.1s ease-out !important;
        }

        /* Enhanced Button Interactions */
        button, a, [role="button"] {
          position: relative;
          overflow: hidden;
        }

        button::before, a::before, [role="button"]::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: radial-gradient(circle, hsl(var(--primary) / 0.3) 0%, transparent 70%);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: width 0.4s ease, height 0.4s ease;
          pointer-events: none;
          z-index: 0;
        }

        button:hover::before, a:hover::before, [role="button"]:hover::before {
          width: 300px;
          height: 300px;
        }

        /* Service Card Premium Interactions */
        .service-card {
          position: relative;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform;
        }

        .service-card::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, 
            hsl(var(--primary) / 0.1) 0%, 
            transparent 50%, 
            hsl(var(--accent) / 0.1) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
          border-radius: inherit;
        }

        .service-card:hover::after {
          opacity: 1;
        }

        /* Smooth Scroll Enhancement */
        html {
          scroll-behavior: smooth;
        }

        /* Premium Loading States */
        .premium-loading {
          position: relative;
          overflow: hidden;
        }

        .premium-loading::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, 
            transparent 0%, 
            hsl(var(--primary) / 0.2) 50%, 
            transparent 100%);
          animation: premium-shimmer 1.5s infinite;
        }

        @keyframes premium-shimmer {
          0% { left: -100%; }
          100% { left: 100%; }
        }

        /* Mobile Optimizations */
        @media (max-width: 768px) {
          * {
            -webkit-tap-highlight-color: transparent;
          }
          
          button, a, [role="button"] {
            touch-action: manipulation;
          }
          
          .service-card:active {
            transform: scale(0.98);
          }
        }

        /* Reduce motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          .premium-cursor,
          .service-card,
          .premium-loading::before {
            animation: none !important;
            transition: none !important;
          }
          
          html {
            scroll-behavior: auto;
          }
        }
      `}</style>
    </>
  );
};

export default PremiumInteractions;