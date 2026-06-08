import PageLayout from '@/components/PageLayout';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet-async';
import { Globe, Mail, Server, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

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
      <PageLayout>
        <div className="min-h-screen bg-brand-black">
          <div className="pt-20 lg:pt-12 pb-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h1 className="font-playfair font-black text-4xl md:text-5xl lg:text-6xl text-brand-white mb-6 animate-fade-in">DNS & Technical Setup</h1>
                <div className="bg-brand-red/10 border border-brand-red/30 rounded-lg p-4 mb-8 animate-slide-in-left">
                  <p className="text-brand-red font-semibold text-lg">Currently booked up — not accepting new DNS / tech setup requests at this time.</p>
                </div>
                <p className="text-brand-white/70 text-lg md:text-xl leading-relaxed mb-12 animate-slide-in-left">Amber Yaghi offers technical setup services to help creators and businesses establish a reliable digital foundation.</p>
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                  {services.map((item) => (
                    <div key={item.title} className="bg-white border border-border rounded-lg p-6 shadow-sm animate-fade-in">
                      <item.icon className="w-8 h-8 text-brand-gold mb-4" />
                      <h3 className="font-playfair font-bold text-xl text-brand-white mb-2">{item.title}</h3>
                      <p className="text-brand-white/60">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <Link to="/contact"><Button className="bg-brand-red hover:bg-brand-red/90 text-white font-bold px-8 py-4 text-lg hover-glow">Request DNS Setup →</Button></Link>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </PageLayout>
    </>
  );
};

export default DNSTech;
