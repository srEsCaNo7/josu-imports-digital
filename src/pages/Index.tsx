import HeroSection from '@/components/HeroSection';
import ProductsSection from '@/components/ProductsSection';
import DifferentialsSection from '@/components/DifferentialsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import TestimonialsSection from '@/components/TestimonialsSection';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ProductsSection />
      <DifferentialsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
      <WhatsAppButton variant="floating" />
    </main>
  );
};

export default Index;
