
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const BookSection = () => {
  return (
    <section id="book" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img 
              src="/lovable-uploads/306fefdf-2cf7-4ab6-a6b2-755e7339112a.png" 
              alt="Mind Bending: The Quantum Reality Strategist by Amber Yaghi"
              className="w-full max-w-md mx-auto shadow-2xl border-glow rounded-lg hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-brand-white mb-6">
              Mind Bending
            </h2>
            <h3 className="font-playfair text-xl md:text-2xl text-brand-gold mb-6">
              The Quantum Reality Strategist
            </h3>
            
            <p className="text-brand-white text-lg mb-6 leading-relaxed">
              Transform your reality while staying authentically <span className="text-brand-red font-bold">YOU</span>.
            </p>
            
            <p className="text-brand-white/70 mb-8 leading-relaxed">
              Amber combines quantum concepts with practical wisdom, helping you create positive change 
              without compromising your authentic self. A revolutionary approach to personal transformation 
              that honors who you truly are.
            </p>
            
            <div className="space-y-4 mb-8">
              <p className="text-brand-white">
                <span className="text-brand-gold font-semibold">Format:</span> Paperback
              </p>
              <p className="text-brand-white">
                <span className="text-brand-gold font-semibold">Available:</span> Now on Lulu
              </p>
            </div>
            
            <Button 
              className="bg-brand-red hover:bg-brand-red/90 text-white font-bold px-8 py-4 text-lg hover-glow"
              onClick={() => window.open('https://www.lulu.com/shop/amber-yaghi/mind-bending-the-quantum-reality-strategist/paperback/product-45ympe6.html?page=1&pageSize=4&fbclid=PAQ0xDSwLBTctleHRuA2FlbQIxMQABp1HiuN2i5D44l3qRisORNdFhumGI5tNJh8Hh7KaanDlaFmo-LvRJ1kHo4sYf_aem_1S9f3Shgwmr7rToRCCYqhQ', '_blank')}
            >
              Order on Lulu
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookSection;
