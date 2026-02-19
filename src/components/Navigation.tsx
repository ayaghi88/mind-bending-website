import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Author', path: '/author' },
  { label: 'Published Works', path: '/books' },
  { label: 'Publishing Services', path: '/publishing' },
  { label: 'App Creation', path: '/apps' },
  { label: 'DNS & Tech Setup', path: '/dns-tech' },
  { label: 'Speaking & Media', path: '/speaking' },
  { label: 'Reviews', path: '/reviews' },
  { label: 'Contact', path: '/contact' },
];

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Desktop left sidebar */}
      <aside className="hidden lg:flex fixed top-0 left-0 h-screen w-56 bg-card border-r border-border flex-col z-50">
        <div className="p-6 border-b border-border">
          <Link to="/" className="font-playfair font-bold text-lg text-foreground hover:text-primary transition-colors">
            AMBER YAGHI
          </Link>
        </div>
        <nav className="flex-1 py-4 overflow-y-auto">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className={`block px-6 py-3 text-sm font-medium transition-colors border-l-4 ${
                location.pathname === item.path
                  ? 'border-primary bg-primary/10 text-primary font-semibold'
                  : 'border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/50 hover:border-primary/30'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Mobile top bar */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-card border-b border-border">
        <div className="flex items-center justify-between px-4 py-4">
          <Link to="/" className="font-playfair font-bold text-lg text-foreground hover:text-primary transition-colors">
            AMBER YAGHI
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="text-foreground hover:text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-card pt-20 lg:hidden"
          >
            <div className="px-4 py-6">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04 }}
                >
                  <Link
                    to={item.path}
                    className={`block px-4 py-3 text-lg font-medium transition-colors border-l-4 ${
                      location.pathname === item.path
                        ? 'border-primary text-primary font-bold'
                        : 'border-transparent text-foreground hover:text-primary hover:border-primary/30'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
