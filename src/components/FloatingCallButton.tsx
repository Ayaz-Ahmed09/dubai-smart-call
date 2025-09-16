import React from 'react';
import { Phone } from 'lucide-react';

const FloatingCallButton = () => {
  const handleCallClick = () => {
    window.open('tel:+971XXXXXXXXX', '_self');
  };

  return (
    <button
      onClick={handleCallClick}
      className="floating-call"
      aria-label="Call us now"
    >
      <Phone className="h-6 w-6" />
    </button>
  );
};

export default FloatingCallButton;