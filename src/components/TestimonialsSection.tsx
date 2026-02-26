import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Lucas Mendes',
    comment: 'Produto chegou rápido e original. Atendimento excelente!',
    initials: 'LM',
  },
  {
    name: 'Ana Souza',
    comment: 'Melhor preço que encontrei para o iPhone. Super recomendo a Josué Imports!',
    initials: 'AS',
  },
  {
    name: 'Rafael Costa',
    comment: 'Comprei meu Apple Watch e veio tudo perfeito. Vendedor muito atencioso.',
    initials: 'RC',
  },
];

const TestimonialsSection = () => {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <h2 className="mb-3 font-display text-3xl font-bold text-foreground sm:text-4xl">
            O que nossos <span className="text-gradient-gold">clientes</span> dizem
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 font-sans font-bold text-primary">
                  {t.initials}
                </div>
                <div>
                  <p className="font-sans font-semibold text-foreground">{t.name}</p>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">"{t.comment}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
