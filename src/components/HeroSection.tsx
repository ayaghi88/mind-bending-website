
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToBook = () => {
    const element = document.getElementById('book');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/5fb6cc22-2c17-40e1-b7bd-f54f323709bc.png')] bg-cover bg-center opacity-20"></div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-playfair font-black text-4xl md:text-6xl lg:text-7xl text-brand-white mb-6 animate-fade-in text-shadow-glow">
            Bend your reality before it bends you.
          </h1>
          
          <div className="mb-8 animate-slide-in-left">
            <h2 className="font-playfair text-xl md:text-2xl lg:text-3xl text-brand-gold mb-4">
              Mind Bending: The Quantum Reality Strategy
            </h2>
            <p className="text-brand-red font-bold text-lg md:text-xl">
              — Out Now
            </p>
          </div>

          <div className="animate-slide-in-right">
            <Button 
              onClick={scrollToBook}
              className="bg-brand-red hover:bg-brand-red/80 text-brand-white font-bold px-8 py-4 text-lg hover-glow border-2 border-brand-red"
            >
              Buy the Book
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Quote */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 max-w-2xl mx-auto px-4 animate-fade-in">
        <blockquote className="text-center">
          <p className="text-brand-white italic text-sm md:text-base opacity-80">
            "Amber fuses metaphysics with street smarts, and quantum concepts with raw lived truth. 
            Highly recommended for those ready to disrupt, ascend, and rewrite everything."
          </p>
          <footer className="text-brand-gold text-sm mt-2">
            — Dr. Husam M. Yaghi
          </footer>
        </blockquote>
      </div>
    </section>
  );
};

export default HeroSection;
