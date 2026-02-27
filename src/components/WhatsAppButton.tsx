import { MessageCircle } from 'lucide-react';

const WHATSAPP_URL = "https://wa.me/556183740667?text=Olá! Vim pelo site do Josué Imports e gostaria de mais informações.";

interface WhatsAppButtonProps {
  text?: string;
  variant?: 'primary' | 'floating';
  className?: string;
}

const WhatsAppButton = ({ text = "Falar no WhatsApp", variant = 'primary', className = '' }: WhatsAppButtonProps) => {
  if (variant === 'floating') {
    return (
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp pulse-whatsapp transition-transform duration-200 hover:scale-110 ${className}`}
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-7 w-7 text-foreground" fill="currentColor" />
      </a>
    );
  }

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-lg bg-whatsapp px-6 py-3 font-sans font-semibold text-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[hsl(var(--whatsapp))/0.3] ${className}`}
    >
      <MessageCircle className="h-5 w-5" />
      {text}
    </a>
  );
};

export default WhatsAppButton;
