import { useEffect, useRef, useState } from 'react';

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale';
}

export const useScrollReveal = (options: ScrollRevealOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true,
    delay = 0,
    duration = 600,
    direction = 'up'
  } = options;

  const elementRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!triggerOnce || !hasTriggered)) {
          setTimeout(() => {
            setIsVisible(true);
            setHasTriggered(true);
          }, delay);
        } else if (!triggerOnce && !entry.isIntersecting) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce, delay, hasTriggered]);

  const getTransform = () => {
    if (isVisible) return 'translate3d(0, 0, 0) scale(1)';
    
    switch (direction) {
      case 'up':
        return 'translate3d(0, 40px, 0) scale(0.95)';
      case 'down':
        return 'translate3d(0, -40px, 0) scale(0.95)';
      case 'left':
        return 'translate3d(40px, 0, 0) scale(0.95)';
      case 'right':
        return 'translate3d(-40px, 0, 0) scale(0.95)';
      case 'scale':
        return 'translate3d(0, 0, 0) scale(0.8)';
      default:
        return 'translate3d(0, 40px, 0) scale(0.95)';
    }
  };

  const style = {
    opacity: isVisible ? 1 : 0,
    transform: getTransform(),
    transition: `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
    willChange: 'transform, opacity',
  };

  return { ref: elementRef, style, isVisible };
};

// Component wrapper for easy use
interface ScrollRevealProps extends ScrollRevealOptions {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  as = 'div',
  ...options
}) => {
  const { ref, style } = useScrollReveal(options);
  const Component = as as any;

  return (
    <Component
      ref={ref}
      className={className}
      style={style}
    >
      {children}
    </Component>
  );
};