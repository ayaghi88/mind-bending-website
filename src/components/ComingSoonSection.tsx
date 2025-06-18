
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const ComingSoonSection = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleEmailSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Welcome to the Movement!",
        description: "You'll be the first to know when 'When I Realized I Was Fake AF' drops.",
      });
      setEmail('');
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-brand-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair font-bold text-3xl md:text-4xl text-brand-white mb-6 animate-fade-in">
            When I Realized I Was Fake AF
          </h2>
          
          <p className="text-brand-gold text-xl md:text-2xl mb-8 animate-slide-in-left">
            Coming Soon
          </p>
          
          <p className="text-brand-white/80 text-lg mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-in-right">
            The next evolution of radical self-honesty. Get updates, exclusive tools, 
            and early access to content that will challenge everything you think you know about yourself.
          </p>
          
          <form onSubmit={handleEmailSignup} className="max-w-md mx-auto animate-fade-in">
            <div className="flex gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-brand-black/50 border-brand-red/30 text-brand-white placeholder:text-brand-white/50"
                required
              />
              <Button 
                type="submit"
                className="bg-brand-red hover:bg-brand-red/80 text-brand-white font-bold hover-glow whitespace-nowrap"
              >
                Join the Movement
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ComingSoonSection;
