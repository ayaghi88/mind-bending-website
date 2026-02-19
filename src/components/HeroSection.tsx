import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-playfair font-black text-4xl md:text-6xl lg:text-7xl text-brand-white mb-6 animate-fade-in text-shadow-glow">
            Build Ideas. Publish Authority. Create Impact.
          </h1>

          <div className="mb-10 animate-slide-in-left">
            <p className="text-brand-white/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Amber Yaghi offers professional publishing, app creation, and digital infrastructure services for authors, founders, and thought leaders — with transparent pricing and full ownership.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-right">
            <Link to="/publishing">
              <Button className="bg-brand-red hover:bg-brand-red/80 text-brand-white font-bold px-8 py-4 text-lg hover-glow border-2 border-brand-red w-full sm:w-auto">
                Publish Your Book
              </Button>
            </Link>
            <Link to="/speaking">
              <Button variant="outline" className="border-brand-gold text-brand-gold hover:bg-brand-gold/10 font-bold px-8 py-4 text-lg w-full sm:w-auto">
                Book Amber for Speaking
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-brand-white/30 text-brand-white hover:bg-brand-white/10 font-bold px-8 py-4 text-lg w-full sm:w-auto">
                Work With Me
              </Button>
            </Link>
          </div>
        </div>
      </div>

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
