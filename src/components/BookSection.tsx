
import { Button } from '@/components/ui/button';

const BookSection = () => {
  return (
    <section id="book" className="py-20 bg-brand-black">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <img 
              src="/lovable-uploads/5fb6cc22-2c17-40e1-b7bd-f54f323709bc.png" 
              alt="Mind Bending: The Quantum Reality Strategist by Amber Yaghi"
              className="w-full max-w-md mx-auto shadow-2xl border-glow rounded-lg"
            />
          </div>
          
          <div className="animate-slide-in-right">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-brand-white mb-6">
              Mind Bending
            </h2>
            <h3 className="font-playfair text-xl md:text-2xl text-brand-gold mb-6">
              The Quantum Reality Strategist
            </h3>
            
            <p className="text-brand-white text-lg mb-6 leading-relaxed">
              This isn't self-help. This is <span className="text-brand-red font-bold">Self-Wake-Up</span>.
            </p>
            
            <p className="text-brand-white/80 mb-8 leading-relaxed">
              Amber fuses metaphysics with street smarts, and quantum concepts with raw lived truth. 
              A revolutionary approach to reality manipulation that challenges everything you think you know.
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
              className="bg-brand-red hover:bg-brand-red/80 text-brand-white font-bold px-8 py-4 text-lg hover-glow border-2 border-brand-red"
              onClick={() => window.open('https://lulu.com', '_blank')}
            >
              Order on Lulu
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookSection;
