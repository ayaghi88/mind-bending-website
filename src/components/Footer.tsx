
const Footer = () => {
  return (
    <footer className="bg-brand-black border-t border-brand-red/20 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="mb-4">
            <h3 className="font-playfair font-bold text-xl text-brand-white">
              AMBER YAGHI
            </h3>
            <p className="text-brand-gold text-sm">
              Reality Strategist • Author • Curriculum Creator
            </p>
          </div>
          
          <div className="flex justify-center items-center space-x-6 mb-4">
            <a 
              href="mailto:collab@amberyaghi.org"
              className="text-brand-white/80 hover:text-brand-red transition-colors"
            >
              collab@amberyaghi.org
            </a>
          </div>
          
          <div className="text-brand-white/60 text-sm">
            <p>&copy; 2024 Amber Yaghi. All rights reserved.</p>
            <p className="mt-1">Soul Tech Systems</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
