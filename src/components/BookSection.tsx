
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
            <lulu-buy-button
              buy-button-id="0e0159d4-0328-46cc-ba8d-2f24055f262f"
              variant="product-showcase"
            ></lulu-buy-button>
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
                <span className="text-brand-gold font-semibold">Formats:</span> Paperback, Hardcover & eBook
              </p>
              <p className="text-brand-white">
                <span className="text-brand-gold font-semibold">Available:</span> Amazon, Lulu, B&N, Walmart.com, eBay, Books-A-Million & more
              </p>
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookSection;
