
import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-brand-black/95 backdrop-blur-sm border-b border-brand-red/20' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="font-playfair font-bold text-xl text-brand-white">
            AMBER YAGHI
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-brand-white hover:text-brand-red transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('book')}
              className="text-brand-white hover:text-brand-red transition-colors"
            >
              Book
            </button>
            <button 
              onClick={() => scrollToSection('curriculum')}
              className="text-brand-white hover:text-brand-red transition-colors"
            >
              Curriculum
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-brand-white hover:text-brand-red transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-brand-white hover:text-brand-red transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-brand-white hover:text-brand-red"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-brand-red/20">
            <div className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-brand-white hover:text-brand-red transition-colors text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('book')}
                className="text-brand-white hover:text-brand-red transition-colors text-left"
              >
                Book
              </button>
              <button 
                onClick={() => scrollToSection('curriculum')}
                className="text-brand-white hover:text-brand-red transition-colors text-left"
              >
                Curriculum
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-brand-white hover:text-brand-red transition-colors text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-brand-white hover:text-brand-red transition-colors text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
