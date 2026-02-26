import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_URL = "https://wa.me/SEUNUMEROAQUI?text=Olá! Vim pelo site da Josué Imports e gostaria de mais informações.";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 bg-gradient-gold opacity-95" />
      <div className="container relative z-10 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-3 font-display text-3xl font-bold text-primary-foreground sm:text-4xl md:text-5xl">
            Garanta seu iPhone hoje mesmo!
          </h2>
          <p className="mb-8 font-sans text-lg font-medium text-primary-foreground/80">
            ⚡ Estoque limitado! Aproveite antes que acabe.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-xl bg-background px-8 py-4 font-sans text-lg font-bold text-foreground transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <MessageCircle className="h-6 w-6" />
            Chamar no WhatsApp Agora
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
