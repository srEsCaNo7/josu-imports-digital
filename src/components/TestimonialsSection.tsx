import { motion } from "framer-motion";
import { Star } from "lucide-react";
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
    image: "/public/feedback1.png",
  },
  {
    image: "/public/feedback2.png",
  },
  {
    image: "/public/feedback3.png",
  },
  {
    image: "/public/feedback4.png",
  },
  {
    image: "/public/feedback5.png",
  },
  {
    image: "/public/feedback6.png",
  },
  {
    image: "/public/feedback7.png",
  },
  {
    image: "/public/feedback8.png",
  },
  {
    image: "/public/feedback10.png",
  },
  {
    image: "/public/feedback11.png",
  },
  {
    image: "/public/feedback12.png",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24">
      <div className="container px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-3 font-display text-3xl font-bold text-foreground sm:text-4xl">
            O que nossos <span className="text-gradient-gold">clientes</span> dizem
          </h2>
        </motion.div>

        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((t) => (
                <CarouselItem
      
                  className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <div className="glass rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300 h-full flex flex-col">
                    {t.image ? (
                      <div className="w-full">
                        <img
                          src={t.image}
                          className="w-full object-contain"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-11 h-11 rounded-full gold-gradient flex items-center justify-center text-sm font-bold text-primary-foreground shrink-0">
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
                      </div>
                    )}
                    {t.image && (
                      <div className="p-4 border-t border-border">
                        <p className="font-semibold text-foreground text-sm">{t.name}</p>
                        <div className="flex gap-0.5 mt-1">
                          {[...Array(5)].map((_, j) => (
                            <Star key={j} className="w-3.5 h-3.5 fill-primary text-primary" />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex -left-4 bg-card border-border text-foreground hover:bg-primary hover:text-primary-foreground" />
            <CarouselNext className="hidden sm:flex -right-4 bg-card border-border text-foreground hover:bg-primary hover:text-primary-foreground" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;