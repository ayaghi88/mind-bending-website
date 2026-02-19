import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet-async';
import { Smartphone, BookOpen, Brain, Mic, Globe } from 'lucide-react';

const AppCreation = () => {
  const useCases = [
    { icon: BookOpen, title: "Companion apps for books", desc: "Extend your book's reach with interactive digital experiences." },
    { icon: Brain, title: "Educational or AI-powered tools", desc: "Build smart tools that teach, adapt, and engage learners." },
    { icon: Mic, title: "Content hubs for authors and speakers", desc: "Centralize your content, audience, and brand in one platform." },
    { icon: Globe, title: "Simple web or mobile applications", desc: "Custom-built apps tailored to your goals and audience." },
  ];

  return (
    <>
      <Helmet>
        <title>App Creation & Digital Products | Amber Yaghi</title>
        <meta name="description" content="Custom app creation and digital product development by Amber Yaghi. Companion apps for books, AI-powered tools, and content hubs for authors and speakers." />
        <link rel="canonical" href="https://amberyaghi.org/apps" />
      </Helmet>
      <div className="min-h-screen bg-brand-black">
        <Navigation />
        <div className="pt-24 pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="font-playfair font-black text-4xl md:text-5xl lg:text-6xl text-brand-white mb-6 animate-fade-in">
                App Creation & Digital Products
              </h1>

              <p className="text-brand-white/70 text-lg md:text-xl leading-relaxed mb-12 animate-slide-in-left">
                Amber Yaghi designs and deploys custom applications and digital tools for authors, educators, and creators. Apps can be built as standalone products or as companions to books, courses, or speaking engagements.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {useCases.map((item) => (
                  <div key={item.title} className="bg-white border border-border rounded-lg p-6 shadow-sm animate-fade-in">
                    <item.icon className="w-8 h-8 text-brand-red mb-4" />
                    <h3 className="font-playfair font-bold text-xl text-brand-white mb-2">{item.title}</h3>
                    <p className="text-brand-white/60">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Featured App: Lovable Learner */}
              <div className="bg-white border border-border rounded-lg p-8 mb-12 shadow-sm">
                <h2 className="font-playfair font-bold text-2xl md:text-3xl text-brand-white mb-6">
                  Featured App: Lovable Learner
                </h2>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <img
                      src="/lovable-uploads/lovablelearner-screenshot.jpeg"
                      alt="Lovable Learner — app for neurodivergent minds"
                      className="w-full max-w-sm mx-auto rounded-lg shadow-2xl border-glow"
                    />
                  </div>
                  <div>
                    <p className="text-brand-white/70 text-lg leading-relaxed mb-4">
                      The 1st app tailored to teach neurodivergent people according to their specific learning needs. No walls of text — just clear, visual, step-by-step learning.
                    </p>
                    <Button
                      onClick={() => window.open('https://www.lovablelearner.com', '_blank')}
                      className="bg-brand-red hover:bg-brand-red/90 text-white font-bold px-6 py-3 hover-glow"
                    >
                      Visit Lovable Learner →
                    </Button>
                  </div>
                </div>
              </div>

              <div className="bg-brand-black border border-border rounded-lg p-6 mb-8">
                <p className="text-brand-white/60 text-center italic">
                  We'd love to hear your feedback! If you've used Lovable Learner or any of our apps, please share your review or suggestions.
                </p>
              </div>

              <Button
                onClick={() => window.location.href = '/contact'}
                className="bg-brand-red hover:bg-brand-red/90 text-white font-bold px-8 py-4 text-lg hover-glow"
              >
                Discuss an App Project →
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AppCreation;
