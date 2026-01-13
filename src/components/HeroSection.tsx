
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-playfair font-black text-4xl md:text-6xl lg:text-7xl text-brand-white mb-6 animate-fade-in text-shadow-glow">
            Transform Your Reality, Stay True to You.
          </h1>
          
          <div className="mb-8 animate-slide-in-left">
            <h2 className="font-playfair text-xl md:text-2xl lg:text-3xl text-brand-gold mb-4">
              Motivational & Transformational Consulting
            </h2>
            <p className="text-brand-white font-bold text-lg md:text-xl">
              Speaking Life Into Your Authentic Journey
            </p>
          </div>

          <div className="animate-slide-in-right">
            <Button onClick={scrollToContact} className="bg-brand-red hover:bg-brand-red/80 text-brand-white font-bold px-8 py-4 text-lg hover-glow border-2 border-brand-red">
              Work With Me
            </Button>
          </div>
        </div>
      </div>

      {/* Inspiring Quote */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 max-w-2xl mx-auto px-4 animate-fade-in">
        <blockquote className="text-center">
          <p className="text-brand-white italic text-sm md:text-base opacity-80">"Aim for betterment without losing sight of who you are. Your authentic self is your greatest strength."</p>
          <footer className="text-brand-gold text-sm mt-2">— Amber Yaghi</footer>
        </blockquote>
      </div>
    </section>
  );
};

export default HeroSection;
