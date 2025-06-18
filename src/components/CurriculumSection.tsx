
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
              From Fake to Free
            </h2>
            <h3 className="font-playfair text-xl md:text-2xl text-brand-gold mb-6">
              The Realest Mindset Reset
            </h3>
            
            <p className="text-brand-white text-lg mb-6 leading-relaxed">
              A trauma-informed curriculum designed for real-world transformation.
            </p>
            
            <p className="text-brand-white/80 mb-6 leading-relaxed">
              Perfect for schools, rehabilitation centers, prisons, shelters, and reentry programs. 
              This curriculum meets people where they are and guides them to where they want to be.
            </p>
            
            <div className="space-y-2 mb-8 text-brand-white/80">
              <p>• Schools & Educational Programs</p>
              <p>• Rehabilitation Centers</p>
              <p>• Prison & Correctional Facilities</p>
              <p>• Shelters & Transitional Housing</p>
              <p>• Reentry Programs</p>
            </div>
            
            <Button 
              onClick={scrollToLicensing}
              className="bg-brand-gold hover:bg-brand-gold/80 text-brand-black font-bold px-8 py-4 text-lg hover-glow"
            >
              License Curriculum
            </Button>
          </div>
          
          <div className="animate-slide-in-right">
            <img 
              src="/lovable-uploads/7e36aae4-36b1-4d0d-9836-a57bd1410062.png" 
              alt="From Fake to Free: The Realest Mindset Reset curriculum"
              className="w-full max-w-md mx-auto shadow-2xl border-glow rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
