
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-brand-black relative">      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair font-bold text-3xl md:text-4xl text-brand-white mb-8 animate-fade-in">
            From storytelling to transformation—authenticity is the key.
          </h2>
          
          <div className="animate-slide-in-left">
            <p className="text-brand-white text-lg md:text-xl mb-8 leading-relaxed">
              Amber Yaghi is a motivational consultant, transformational speaker, and author who believes in 
              <span className="text-brand-gold font-semibold"> the power of authentic growth</span>.
            </p>
            
            <p className="text-brand-white/80 text-base md:text-lg mb-8 leading-relaxed max-w-3xl mx-auto">
              Through storytelling and truth-based approaches, Amber helps people discover their authentic selves 
              while pursuing positive transformation. Her work spans from product reviews for those seeking their 
              niche to life-changing consultations for those ready to embrace their true potential.
            </p>
            
            <p className="text-brand-white/80 text-base md:text-lg mb-12 leading-relaxed max-w-3xl mx-auto">
              As a Black and Arab consultant, Amber brings unique perspectives to personal development, 
              combining practical wisdom with motivational insights that speak to diverse communities 
              seeking authentic transformation.
            </p>
          </div>

          {/* Testimonial Block */}
          <div className="animate-slide-in-right bg-brand-gold/10 border border-brand-gold/30 rounded-lg p-8 max-w-2xl mx-auto">
            <blockquote>
              <p className="text-brand-white text-lg italic mb-4 leading-relaxed">
                "Amber's approach to transformation is refreshing—she helps you grow while staying true to who you are. 
                Her storytelling ability and authentic insights create lasting positive change."
              </p>
              <footer className="text-brand-gold font-semibold">
                — Client Testimonial
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
