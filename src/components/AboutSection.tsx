
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-brand-black relative">      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-brand-white mb-8 animate-fade-in">
              From storytelling to transformation—authenticity is the key.
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="animate-slide-in-left">
              <p className="text-brand-white text-lg md:text-xl mb-8 leading-relaxed">
                Amber Yaghi is a <span className="text-brand-gold font-semibold">mind-bending practitioner and teacher</span>, 
                transformational speaker, and author who specializes in helping people discover and fully own their true self and voice.
              </p>
              
              <p className="text-brand-white/70 text-base md:text-lg mb-8 leading-relaxed">
                Through powerful speaking engagements and authentic storytelling, Amber empowers individuals to embrace their 
                authenticity without compromise. She teaches revolutionary approaches to using AI for healing and personal transformation, 
                combining cutting-edge technology with timeless wisdom about self-discovery.
              </p>
              
              <div className="bg-brand-gold/10 border border-brand-gold/30 rounded-lg p-6 mb-8">
                <h3 className="font-playfair text-xl text-brand-gold mb-4">Core Strengths & Expertise</h3>
                <ul className="text-brand-white/80 space-y-3">
                  <li className="flex items-start">
                    <span className="text-brand-gold mr-2">•</span>
                    <span><strong className="text-brand-gold">Mind-Bending Practice & Teaching:</strong> Helping others control their reality through consciousness work</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-gold mr-2">•</span>
                    <span><strong className="text-brand-gold">Authenticity Speaking:</strong> Powerful engagements focused on discovering and owning your true voice</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-gold mr-2">•</span>
                    <span><strong className="text-brand-gold">Encouraging Authenticity:</strong> Inspiring others to break free from societal expectations and be genuinely themselves</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-gold mr-2">•</span>
                    <span><strong className="text-brand-gold">AI for Healing:</strong> Teaching innovative ways to leverage artificial intelligence for personal healing and growth</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="animate-slide-in-right flex justify-center">
              <img 
                src="/lovable-uploads/f49dd82d-c63c-4ff9-80fc-e237939be689.png" 
                alt="Amber Yaghi - Mind-Bending Teacher and Transformational Speaker"
                className="w-full max-w-sm rounded-lg shadow-2xl border-glow"
              />
            </div>
          </div>
            
          <div className="text-center mb-12">
            <div className="bg-brand-gold/10 border border-brand-gold/30 rounded-lg p-8 max-w-4xl mx-auto">
              <h3 className="font-playfair text-2xl text-brand-gold mb-6">My Mission: Authenticity & Transformation</h3>
              <p className="text-brand-white/80 text-lg leading-relaxed mb-4">
                As a Black and Arab practitioner, I bring unique perspectives to mind-bending and personal transformation. 
                I've learned that <span className="text-brand-gold font-semibold">once you master mind-bending, you control your entire reality</span>.
              </p>
              <p className="text-brand-white/80 text-lg leading-relaxed">
                My work focuses on inspiring others who struggle to be true to themselves out of fear of judgment. 
                Through speaking engagements, AI-assisted healing techniques, and authentic storytelling, I help people 
                break free from limitations and <span className="text-brand-gold font-semibold">claim what's rightfully theirs when they're bold enough to pursue it</span>.
              </p>
            </div>
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
