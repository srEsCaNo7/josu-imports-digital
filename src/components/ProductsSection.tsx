import { motion } from 'framer-motion';
import { Smartphone, Watch, Headphones, Monitor, Battery, Cable, Speaker, Gamepad2, Laptop } from 'lucide-react';
import catIphones from '@/assets/cat-iphones.png';
import catAndroid from '@/assets/cat-android.png';
import catWatches from '@/assets/cat-watches.png';
import catAccessories from '@/assets/cat-accessories.png';
import catNotebooks from '@/assets/cat-notebooks.png';
import catCaixas from '@/assets/cat-caixas.png';
import catPowerBanks from '@/assets/cat-powerbanks.png';
import catGamers from '@/assets/cat-gamers.png';


const catalogItems = [
  {
    title: 'iPhones',
    description: 'iPhone 15, 15 Pro, 15 Pro Max, iPhone 14, SE e toda a linha Apple. Modelos lacrados e com garantia.',
    image: catIphones,
    icon: Smartphone,
  },
  {
    title: 'Smartphones Android',
    description: 'Samsung Galaxy S24, A55, Xiaomi, Motorola, Poco e outras marcas líderes do mercado.',
    image: catAndroid,
    icon: Monitor,
  },
  {
    title: 'Smartwatches',
    description: 'Apple Watch Series 9, Ultra 2, Galaxy Watch, Amazfit e pulseiras inteligentes.',
    image: catWatches,
    icon: Watch,
  },
  {
    title: 'Fones e Áudio',
    description: 'AirPods Pro, Galaxy Buds, JBL, fones Bluetooth e caixas de som portáteis.',
    image: catAccessories,
    icon: Headphones,
  },
  {
    title: 'Notebooks',
    description: 'Notebooks de alto desempenho, modelos ultrafinos, gamers e profissionais.',
    image: catNotebooks,
    icon: Laptop,
  },
  {
    title: 'Caixas de Som',
    description: 'JBL, Harman Kardon, Marshall e outras marcas com qualidade de som premium.',
    image: catCaixas,
    icon: Speaker,
  },
  {
    title: 'Power Banks',
    description: 'Baterias portáteis de alta capacidade para manter seus dispositivos carregados.',
    image: catPowerBanks,
    icon: Battery,
  },
  {
    title: 'Acessórios Gamer',
    description: 'Controles, headsets, suportes e acessórios para elevar sua experiência gamer.',
    image: catGamers,
    icon: Gamepad2,
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
            Nosso <span className="text-gradient-gold">Catálogo</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Trabalhamos com as melhores marcas e produtos do mercado de tecnologia. Confira nossas categorias.
          </p>
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-2.5">
            <span className="text-sm font-semibold text-primary">📦 Também trabalhamos com atacado!</span>
            <span className="text-sm text-muted-foreground">Preços especiais para revendedores e lojistas.</span>
          </div>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {catalogItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-xl bg-card border border-border transition-all duration-300 hover:border-primary/50 hover:glow-gold-sm"
              >
                {item.image ? (
                  <div className="aspect-[4/3] overflow-hidden bg-secondary">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="flex aspect-[4/3] items-center justify-center bg-secondary/50">
                    <Icon className="h-16 w-16 text-primary/60 transition-colors duration-300 group-hover:text-primary" />
                  </div>
                )}
                <div className="p-5">
                  <h3 className="mb-1 flex items-center gap-2 font-display text-lg font-semibold text-foreground">
                    <Icon className="h-5 w-5 text-primary" />
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
