import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import catIphones from '@/assets/cat-iphones.png';
import catAndroid from '@/assets/cat-android.png';
import catWatches from '@/assets/cat-watches.png';
import catAccessories from '@/assets/cat-accessories.png';

const WHATSAPP_URL = "https://wa.me/SEUNUMEROAQUI?text=Olá! Vim pelo site da Josué Imports e gostaria de mais informações.";

const products = [
  {
    title: 'iPhones',
    description: 'Os modelos mais recentes com garantia e procedência.',
    image: catIphones,
    icon: '📱',
  },
  {
    title: 'Smartphones Android',
    description: 'Samsung, Xiaomi e mais com os melhores preços.',
    image: catAndroid,
    icon: '📲',
  },
  {
    title: 'Smartwatches',
    description: 'Apple Watch, Galaxy Watch e mais opções premium.',
    image: catWatches,
    icon: '⌚',
  },
  {
    title: 'Eletrônicos e Acessórios',
    description: 'Fones, carregadores e acessórios originais.',
    image: catAccessories,
    icon: '🎧',
  },
];

const ProductsSection = () => {
  return (
    <section id="produtos" className="relative py-20 sm:py-28">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <h2 className="mb-3 font-display text-3xl font-bold text-foreground sm:text-4xl">
            Nossos <span className="text-gradient-gold">Produtos</span>
          </h2>
          <p className="text-muted-foreground">Encontre o que há de melhor em tecnologia importada.</p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, i) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-card border border-border transition-all duration-300 hover:border-primary/50 hover:glow-gold-sm"
            >
              <div className="aspect-square overflow-hidden bg-secondary">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="mb-1 font-display text-lg font-semibold text-foreground">
                  {product.icon} {product.title}
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">{product.description}</p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-whatsapp px-4 py-2 text-sm font-semibold text-foreground transition-all duration-300 hover:scale-105"
                >
                  <MessageCircle className="h-4 w-4" />
                  Solicitar no WhatsApp
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
