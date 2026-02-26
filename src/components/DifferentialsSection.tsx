import { motion } from 'framer-motion';
import { ShieldCheck, Truck, Lock, CreditCard, Phone } from 'lucide-react';

const differentials = [
  { icon: ShieldCheck, title: 'Produtos Originais', description: 'Garantia de autenticidade em todos os produtos.' },
  { icon: Truck, title: 'Envio Rápido', description: 'Entrega ágil para todo o Brasil.' },
  { icon: Lock, title: 'Compra Segura', description: 'Transações protegidas e confiáveis.' },
  { icon: CreditCard, title: 'Facilidade no Pagamento', description: 'Diversas formas de pagamento disponíveis.' },
  { icon: Phone, title: 'Atendimento Personalizado', description: 'Suporte exclusivo via WhatsApp.' },
];

const DifferentialsSection = () => {
  return (
    <section className="relative py-20 sm:py-28 bg-card">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <h2 className="mb-3 font-display text-3xl font-bold text-foreground sm:text-4xl">
            Por que escolher a{' '}
            <span className="text-gradient-gold">Josué Imports</span>?
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {differentials.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col items-center rounded-xl border border-border bg-background p-6 text-center transition-all duration-300 hover:border-primary/40 hover:glow-gold-sm"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <item.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-2 font-sans text-sm font-bold text-foreground">{item.title}</h3>
              <p className="text-xs text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
