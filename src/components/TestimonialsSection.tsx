import { motion } from "framer-motion";
import { Star, ImagePlus } from "lucide-react";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";


const testimonials = [
  {
    name: "Mariana Silva",
    text: "Comprei meu iPhone e chegou rápido, tudo original. Atendimento excelente!",
    initials: "MS",
    image: '@/assets/feedbacks/feedback1.png'
  },
  {
    name: "Lucas Mendes",
    text: "Melhor loja de importados que já comprei. Preço justo e produto de qualidade.",
    initials: "LM",
  },
  {
    name: "Ana Beatriz",
    text: "Meu Apple Watch veio perfeito. Recomendo de olhos fechados!",
    initials: "AB",
  },
  {
    name: "Rafael Costa",
    text: "Atendimento personalizado no WhatsApp, tiraram todas as minhas dúvidas. Super confiável!",
    initials: "RC",
  },
];

// Placeholder array for feedback images — replace with real screenshot URLs
const feedbackImages: string[] = [
  // Add your real feedback screenshot URLs here, e.g.:
  // "/feedbacks/feedback1.jpg",
  // "/feedbacks/feedback2.jpg",
];

const TestimonialsSection = () => {
  const [images, setImages] = useState<string[]>(feedbackImages);

  return (
    <section className="py-24">
      <div className="container px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
            O que nossos <span className="gold-text">clientes</span> dizem
          </h2>
        </motion.div>

        {/* Feedback Images Carousel */}
        {images.length > 0 && (
          <motion.div
            className="mb-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Carousel
              opts={{ align: "center", loop: true }}
              plugins={[Autoplay({ delay: 4000, stopOnInteraction: true })]}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {images.map((src, i) => (
                  <CarouselItem
                    key={i}
                    className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                  >
                    <div className="glass rounded-xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300">
                      <img
                        src={src}
                        alt={`Feedback de cliente ${i + 1}`}
                        className="w-full h-auto object-cover"
                        loading="lazy"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex -left-4 bg-card border-border text-foreground hover:bg-primary hover:text-primary-foreground" />
              <CarouselNext className="hidden sm:flex -right-4 bg-card border-border text-foreground hover:bg-primary hover:text-primary-foreground" />
            </Carousel>
          </motion.div>
        )}

        {/* Placeholder when no images */}
        {images.length === 0 && (
          <motion.div
            className="mb-16 max-w-2xl mx-auto glass rounded-xl p-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <ImagePlus className="w-12 h-12 text-primary mx-auto mb-4" />
            <p className="text-muted-foreground text-sm">
              Em breve, prints reais dos nossos clientes aparecerão aqui!
            </p>
          </motion.div>
        )}

        {/* Text testimonials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="glass rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-full gold-gradient flex items-center justify-center text-sm font-bold text-primary-foreground">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">"{t.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;