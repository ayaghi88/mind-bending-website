import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet-async';
import { Globe, Mail, Server, Wrench } from 'lucide-react';

const DNSTech = () => {
  const services = [
    { icon: Globe, title: "Domain & DNS configuration", desc: "Get your domain properly configured and pointing where it needs to go." },
    { icon: Server, title: "Website connection and verification", desc: "Google verification, SSL setup, and platform connections handled." },
    { icon: Mail, title: "Email and hosting setup guidance", desc: "Professional email setup and hosting configuration support." },
    { icon: Wrench, title: "Platform integrations and troubleshooting", desc: "Connect your tools and fix what isn't working." },
  ];

  return (
    <>
      <Helmet>
        <title>DNS & Technical Setup | Amber Yaghi</title>
        <meta name="description" content="DNS configuration, website setup, email hosting, and technical troubleshooting services by Amber Yaghi for creators and businesses." />
        <link rel="canonical" href="https://amberyaghi.org/dns-tech" />
      </Helmet>
      <div className="min-h-screen bg-brand-black">
        <Navigation />
        <div className="pt-24 pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="font-playfair font-black text-4xl md:text-5xl lg:text-6xl text-brand-white mb-6 animate-fade-in">
                DNS & Technical Setup
              </h1>

              <p className="text-brand-white/80 text-lg md:text-xl leading-relaxed mb-12 animate-slide-in-left">
                Amber Yaghi offers technical setup services to help creators and businesses establish a reliable digital foundation.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {services.map((item) => (
                  <div key={item.title} className="bg-secondary/50 border border-primary/20 rounded-lg p-6 animate-fade-in">
                    <item.icon className="w-8 h-8 text-brand-gold mb-4" />
                    <h3 className="font-playfair font-bold text-xl text-brand-white mb-2">{item.title}</h3>
                    <p className="text-brand-white/70">{item.desc}</p>
                  </div>
                ))}
              </div>

              <Button
                onClick={() => window.location.href = '/contact'}
                className="bg-brand-red hover:bg-brand-red/80 text-brand-white font-bold px-8 py-4 text-lg hover-glow border-2 border-brand-red"
              >
                Request DNS Setup →
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default DNSTech;
