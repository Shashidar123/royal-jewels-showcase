import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/919876543210"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-card rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-colors"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle size={28} />
  </a>
);

export default WhatsAppButton;
