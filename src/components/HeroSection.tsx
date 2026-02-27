import { motion } from 'framer-motion';
import WhatsAppButton from './WhatsAppButton';
import heroDevices from '@/assets/hero-devices.png';
import logo from '@/assets/logo.png';

const HeroSection = () => {
  const scrollToProducts = () => {
    document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-dark">
      {/* Subtle grid texture */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(hsl(var(--gold) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--gold) / 0.3) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      {/* Top navigation bar with logo */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-20 flex items-center justify-center py-6 "
      >
        <img src={logo} alt="Josué Imports" className="h-16 w-auto sm:h-20" />
      </motion.nav>

      <div className="container relative z-10 flex flex-col items-center justify-center px-4 pb-20 pt-10 ">
        
        <div className='flex flex-col lg:flex-row-reverse items-center gap-4'> 
          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="-mb-2 w-full max-w-3xl -mt-20"
          >
            <img
              src={heroDevices}
              alt="iPhone e Apple Watch - Josué Imports"
              className="w-full float-animation lg:ml-10"
              loading="eager"
            />
          </motion.div>

          <div className='lg:flex lg:flex-col lg:items-center lg:justify-center'>
            {/* Headlines */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-4 max-w-3xl text-center font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Tecnologia Premium com os{' '}
              <span className="text-gradient-gold">Melhores Preços</span> do Mercado
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-10 max-w-xl text-center font-sans text-base text-muted-foreground sm:text-lg"
            >
              iPhones, Smartphones, Relógios e Eletrônicos Importados com Qualidade e Garantia.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col items-center gap-4 sm:flex-row"
            >
              <WhatsAppButton />
              <button
                onClick={scrollToProducts}
                className="inline-flex items-center gap-2 rounded-lg border border-primary/50 px-6 py-3 font-sans font-semibold text-primary transition-all duration-300 hover:bg-primary/10 hover:border-primary"
              >
                Ver Produtos
              </button>
            </motion.div>
          </div>
        </div>


        
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
