import React from 'react';
import { Plus, Minus, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What smart home automation services do you offer in Dubai?',
    answer: 'We provide comprehensive home automation including smart lighting systems, climate & AC control, security & CCTV, home cinema, smart curtains & blinds, multi-room audio, voice control & AI assistants, and complete home integration throughout Dubai and UAE.',
  },
  {
    question: 'How long does smart home installation take in Dubai?',
    answer: 'Installation time varies based on system complexity. Basic lighting automation takes 1-2 days, while complete home integration can take 5-10 days. We provide detailed timelines during consultation and work efficiently to minimize disruption.',
  },
  {
    question: 'Do you provide warranty and support after installation?',
    answer: 'Yes! We offer comprehensive warranty coverage and 24/7 technical support. Our maintenance packages ensure your smart home systems operate perfectly year-round, with regular updates and proactive monitoring.',
  },
  {
    question: 'Can existing homes in Dubai be converted to smart homes?',
    answer: 'Absolutely! We specialize in retrofitting existing Dubai homes with smart automation systems. Our wireless solutions minimize construction work while delivering full smart home functionality without major renovations.',
  },
  {
    question: 'What brands and technologies do you use for smart homes?',
    answer: 'We partner with leading brands like Control4, Lutron, Crestron, and Sonos to ensure premium quality and reliability. All systems are carefully selected for Dubai\'s climate and integrated for seamless operation.',
  },
  {
    question: 'How much does home automation cost in Dubai?',
    answer: 'Costs vary based on home size and features selected. Basic smart lighting starts from AED 5,000, while complete home automation ranges from AED 25,000-100,000+. We provide detailed quotes after free consultation.',
  },
  {
    question: 'Do smart home systems work during Dubai power outages?',
    answer: 'Yes! We design systems with backup power integration and ensure critical functions like security and climate control continue operating during outages. Battery backup options are available for essential systems.',
  },
  {
    question: 'Can I control my smart home remotely while traveling?',
    answer: 'Definitely! Our systems include secure remote access, allowing you to monitor and control your Dubai home from anywhere worldwide. Receive alerts, adjust climate, check security cameras, and more via smartphone apps.',
  },
];

const FAQSection = () => {
  const handleCallClick = () => {
    window.open('tel:+971XXXXXXXXX', '_self');
  };

  return (
    <section className="section-container">
      <div className="text-center mb-16">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-subtitle">
          Get answers to common questions about smart home automation in Dubai. Don't see your question? Call us for personalized assistance.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card-gradient border border-border rounded-xl px-6"
            >
              <AccordionTrigger className="text-left hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <div className="bg-card-gradient p-8 rounded-2xl border border-border">
            <h3 className="text-2xl font-bold mb-4 text-gradient">Still Have Questions?</h3>
            <p className="text-muted-foreground mb-6">
              Our expert team is ready to answer all your questions about smart home automation in Dubai. Get personalized recommendations for your specific needs.
            </p>
            <Button onClick={handleCallClick} className="cta-primary">
              <Phone className="mr-2 h-5 w-5" />
              Call Our Experts Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;