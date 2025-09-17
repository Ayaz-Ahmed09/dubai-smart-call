import { Phone, MessageCircle, ArrowUp } from "lucide-react";

export default function FloatingActions() {
  const call = () => window.open("tel:+971563412211", "_self");
  const whatsapp = () => window.open("https://wa.me/971563412211", "_blank");
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <button onClick={scrollTop} className="bg-[ var(--gradient-primary)] backdrop-blur-xl p-4 rounded-full ring-2 ring-orange-400" aria-label="Scroll to top">
        <ArrowUp className="h-6 w-6 text-white" />
      </button>
      <button onClick={call} className="floating-btn" aria-label="Call us now">
        <Phone className="h-6 w-6" />
      </button>
      <button onClick={whatsapp} className="floating-btn" aria-label="Chat on WhatsApp">
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  );
}
