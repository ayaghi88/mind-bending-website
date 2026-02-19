import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet-async';
import { CheckCircle } from 'lucide-react';

const Publishing = () => {
  const included = [
    "Print & eBook formatting",
    "Custom cover design",
    "ISBN & publishing guidance",
    "Publishing setup via Lulu or KDP",
    "Global distribution enrollment",
    "Metadata optimization",
    "One-on-one publishing strategy session",
  ];

  const scrollToContact = () => {
    window.location.href = '/contact';
  };

  return (
    <>
      <Helmet>
        <title>Publishing Services | Amber Yaghi</title>
        <meta name="description" content="Professional book publishing services by Amber Yaghi. Author-first publishing with transparent pricing, custom cover design, formatting, and global distribution." />
        <link rel="canonical" href="https://amberyaghi.org/publishing" />
      </Helmet>
      <div className="min-h-screen bg-brand-black">
        <Navigation />
        <div className="pt-24 pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="font-playfair font-black text-4xl md:text-5xl lg:text-6xl text-brand-white mb-6 animate-fade-in">
                Publishing Services
              </h1>

              <p className="text-brand-white/70 text-lg md:text-xl leading-relaxed mb-8 animate-slide-in-left">
                Amber Yaghi provides professional, author-first publishing services designed for writers who want high-quality results without giving up ownership or royalties.
              </p>

              <p className="text-brand-white/70 text-lg leading-relaxed mb-12">
                We offer a single, transparent publishing package that includes formatting, custom cover design, global distribution setup, and personalized guidance throughout the publishing process.
              </p>

              <div className="bg-white border border-border rounded-lg p-8 mb-12 shadow-sm animate-slide-in-right">
                <h2 className="font-playfair font-bold text-2xl md:text-3xl text-brand-white mb-6">
                  What's Included
                </h2>
                <ul className="space-y-4">
                  {included.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-brand-white/80 text-lg">
                      <CheckCircle className="w-5 h-5 text-brand-gold flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-brand-red/5 to-brand-gold/5 border border-brand-red/20 rounded-lg p-8 mb-12">
                <h2 className="font-playfair font-bold text-2xl text-brand-white mb-4">
                  The Amber Yaghi Signature Publishing Package
                </h2>
                <p className="text-brand-red text-3xl font-bold mb-4">$3,000 <span className="text-lg font-normal text-brand-white/60">(one-time)</span></p>
                <p className="text-brand-white/60 mb-6">
                  Optional add-ons available: ISBNs, editing coordination, apps, websites, speaking kits.
                </p>
                <div className="bg-white border border-brand-gold/30 rounded-lg p-4">
                  <p className="text-brand-gold font-semibold">✦ Trust Statement</p>
                  <p className="text-brand-white/80 mt-2">
                    Authors retain 100% copyright and receive 100% of royalties. No royalties are taken by Amber Yaghi.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={scrollToContact} className="bg-brand-red hover:bg-brand-red/90 text-white font-bold px-8 py-4 text-lg hover-glow">
                  Start Publishing →
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Publishing;
