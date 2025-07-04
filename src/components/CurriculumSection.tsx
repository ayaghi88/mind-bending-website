
import { Button } from '@/components/ui/button';

const CurriculumSection = () => {
  const scrollToLicensing = () => {
    const element = document.getElementById('licensing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="curriculum" className="py-20 bg-gradient-to-br from-brand-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-brand-white mb-6">
              Transformational Consulting
            </h2>
            <h3 className="font-playfair text-xl md:text-2xl text-brand-gold mb-6">
              Authentic Growth & Life Empowerment
            </h3>
            
            <p className="text-brand-white text-lg mb-6 leading-relaxed">
              Motivational consulting designed to speak life into your journey while honoring your authentic self.
            </p>
            
            <p className="text-brand-white/80 mb-6 leading-relaxed">
              Perfect for individuals, organizations, schools, and communities ready to embrace positive change. 
              My approach helps you aim for betterment without losing sight of who you truly are.
            </p>
            
            <div className="space-y-2 mb-8 text-brand-white/80">
              <p>• Individual Transformational Consulting</p>
              <p>• Motivational Speaking & Workshops</p>
              <p>• Authentic Leadership Development</p>
              <p>• Personal Growth Coaching</p>
              <p>• Truth-Based Storytelling Training</p>
            </div>
            
            <Button 
              onClick={scrollToLicensing}
              className="bg-brand-gold hover:bg-brand-gold/80 text-brand-black font-bold px-8 py-4 text-lg hover-glow"
            >
              Work With Me
            </Button>
          </div>
          
          <div className="animate-slide-in-right">
            <div className="w-full max-w-md mx-auto p-8 bg-gradient-to-br from-brand-red/20 to-brand-gold/20 rounded-lg border border-brand-gold/30">
              <h4 className="font-playfair text-2xl text-brand-white mb-4 text-center">My Mission</h4>
              <p className="text-brand-white/90 text-center leading-relaxed">
                To help you transform your reality while staying authentically you. 
                Growth doesn't mean losing yourself—it means becoming more of who you truly are.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
