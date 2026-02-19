import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Author', path: '/author' },
    { label: 'Publishing Services', path: '/publishing' },
    { label: 'App Creation', path: '/apps' },
    { label: 'DNS & Tech Setup', path: '/dns-tech' },
    { label: 'Books', path: '/books' },
    { label: 'Speaking & Media', path: '/speaking' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-white shadow-md border-b border-border' : 'bg-white/80 backdrop-blur-md'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="font-playfair font-bold text-xl text-brand-white hover:text-brand-red transition-colors">
              AMBER YAGHI
            </Link>

            <div className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`text-sm transition-colors ${
                    location.pathname === item.path ? 'text-brand-red font-semibold' : 'text-brand-white/70 hover:text-brand-red'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-brand-white hover:text-brand-red"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Full-screen mobile menu overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white pt-20"
          >
            <div className="container mx-auto px-4 py-8">
              <div className="flex flex-col space-y-6">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={item.path}
                      className={`text-xl font-medium transition-colors block ${
                        location.pathname === item.path ? 'text-brand-red font-bold' : 'text-brand-white hover:text-brand-red'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
