import { MessageCircle, Instagram } from 'lucide-react';
import logo from '@/assets/logo.webp';

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-10">
      <div className="container flex flex-col items-center gap-6 px-4 text-center">
        <img src={logo} alt="Josué Imports" className="h-16 w-auto" />
        <div className="flex items-center gap-5">
          <a
            href="https://wa.me/556183740667?text=Olá! Vim pelo site do Josué Imports e gostaria de mais informações."
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-whatsapp transition-transform duration-200 hover:scale-110"
            aria-label="WhatsApp"
          >
            <MessageCircle className="h-5 w-5 text-foreground" />
          </a>
          <a
            href="https://www.instagram.com/josueimportss/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-all duration-200 hover:scale-110 hover:border-primary"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5 text-muted-foreground" />
          </a>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Josué Imports. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
