
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-brand-black relative">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/d736a145-7f83-420a-987d-524be025f744.png')] bg-cover bg-center opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair font-bold text-3xl md:text-4xl text-brand-white mb-8 animate-fade-in">
            From misunderstood to mission-driven.
          </h2>
          
          <div className="animate-slide-in-left">
            <p className="text-brand-white text-lg md:text-xl mb-8 leading-relaxed">
              Amber Yaghi is an author, trauma-informed curriculum creator, and founder of 
              <span className="text-brand-gold font-semibold"> Soul Tech Systems</span>.
            </p>
            
            <p className="text-brand-white/80 text-base md:text-lg mb-8 leading-relaxed max-w-3xl mx-auto">
              Born from lived experience and forged through transformation, Amber's work bridges 
              the gap between street wisdom and quantum consciousness. Her approach isn't theoretical—it's 
              practical, raw, and designed for people who've been through the fire and are ready to rise.
            </p>
            
            <p className="text-brand-white/80 text-base md:text-lg mb-12 leading-relaxed max-w-3xl mx-auto">
              As a Black and Arab author, Amber brings a unique perspective to personal transformation, 
              combining metaphysical principles with real-world application for communities that traditional 
              self-help has failed to reach.
            </p>
          </div>

          {/* Testimonial Block */}
          <div className="animate-slide-in-right bg-brand-red/10 border border-brand-red/30 rounded-lg p-8 max-w-2xl mx-auto">
            <blockquote>
              <p className="text-brand-white text-lg italic mb-4 leading-relaxed">
                "Amber fuses metaphysics with street smarts, and quantum concepts with raw lived truth. 
                Highly recommended for those ready to disrupt, ascend, and rewrite everything."
              </p>
              <footer className="text-brand-gold font-semibold">
                — Dr. Husam M. Yaghi
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
