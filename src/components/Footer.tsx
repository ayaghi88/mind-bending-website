import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-border py-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-3 gap-8 mb-8"
        >
          <div>
            <h3 className="font-playfair font-bold text-xl text-brand-white mb-2">AMBER YAGHI</h3>
            <p className="text-brand-red text-sm mb-4">Publisher • Creator • Technologist • Speaker</p>
            <p className="text-brand-white/60 text-sm">
              Ethical, transparent publishing and digital services for authors and thought leaders.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-brand-white mb-3">Services</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/publishing" className="text-brand-white/60 hover:text-brand-red transition-colors text-sm">Publishing</Link>
              <Link to="/apps" className="text-brand-white/60 hover:text-brand-red transition-colors text-sm">Apps</Link>
              <Link to="/speaking" className="text-brand-white/60 hover:text-brand-red transition-colors text-sm">Speaking</Link>
              <Link to="/contact" className="text-brand-white/60 hover:text-brand-red transition-colors text-sm">Contact</Link>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold text-brand-white mb-3">Connect</h4>
            <div className="flex flex-col space-y-2">
              <a href="mailto:amber@amberyaghi.org" className="text-brand-white/60 hover:text-brand-red transition-colors text-sm">amber@amberyaghi.org</a>
              <a href="https://facebook.com/authoramberyaghi" target="_blank" rel="noopener noreferrer" className="text-brand-white/60 hover:text-brand-red transition-colors text-sm">Facebook</a>
              <a href="https://tiktok.com/@authoramberyaghi" target="_blank" rel="noopener noreferrer" className="text-brand-white/60 hover:text-brand-red transition-colors text-sm">TikTok</a>
              <a href="https://x.com/amber_yaghi" target="_blank" rel="noopener noreferrer" className="text-brand-white/60 hover:text-brand-red transition-colors text-sm">X (Twitter)</a>
              <a href="https://github.com/ayaghi88" target="_blank" rel="noopener noreferrer" className="text-brand-white/60 hover:text-brand-red transition-colors text-sm">GitHub</a>
              <a href="https://linker.ee/ThisIsTheLinkInMyBio" target="_blank" rel="noopener noreferrer" className="text-brand-white/60 hover:text-brand-red transition-colors text-sm">All My Links</a>
            </div>
          </div>
        </motion.div>

        <div className="border-t border-border pt-6 text-center text-brand-white/40 text-sm">
          <p>Publishing • Apps • Speaking • Contact</p>
          <p className="mt-1">&copy; {new Date().getFullYear()} Amber Yaghi. All rights reserved. Soul Tech Systems</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
