import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center hero-gradient relative overflow-hidden py-24 pb-32">
      {/* Animated background shapes */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-brand-red/5 rounded-full blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl"
        animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-playfair font-black text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-brand-white mb-6 text-shadow-glow"
          >
            Build Ideas. Publish Authority. Create Impact.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-10"
          >
            <p className="text-brand-white/70 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Amber Yaghi offers professional publishing, app creation, and digital infrastructure services for authors, founders, and thought leaders — with transparent pricing and full ownership.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/publishing">
              <Button className="bg-brand-red hover:bg-brand-red/90 text-white font-bold px-8 py-4 text-lg hover-glow w-full sm:w-auto">
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
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="mt-12 max-w-2xl mx-auto px-4 z-10"
      >
        <blockquote className="text-center">
          <p className="text-brand-white/60 italic text-sm md:text-base">"Aim for betterment without losing sight of who you are. Your authentic self is your greatest strength."</p>
          <footer className="text-brand-gold text-sm mt-2">— Amber Yaghi</footer>
        </blockquote>
      </motion.div>
    </section>
  );
};

export default HeroSection;
