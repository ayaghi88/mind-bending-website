import PageLayout from '@/components/PageLayout';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet-async';
import { Smartphone, BookOpen, Brain, Mic, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

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
      <PageLayout>
        <div className="min-h-screen bg-brand-black">
          <div className="pt-20 lg:pt-12 pb-20">
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

                {/* App Hub */}
                <div className="bg-white border border-border rounded-lg p-8 mb-12 shadow-sm">
                  <h2 className="font-playfair font-bold text-2xl md:text-3xl text-brand-white mb-6">App Hub: Embercore Studio</h2>
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <p className="text-brand-white/70 text-lg leading-relaxed mb-4">The central home for all created apps and digital tools. Explore the complete collection of applications built for authors, educators, and creators.</p>
                      <Button onClick={() => window.open('https://embercorestudio.org', '_blank')} className="bg-brand-red hover:bg-brand-red/90 text-white font-bold px-6 py-3 hover-glow">Visit Embercore Studio →</Button>
                    </div>
                  </div>
                </div>

                {/* Featured App: Lovable Learner */}
                <div className="bg-white border border-border rounded-lg p-8 mb-12 shadow-sm">
                  <h2 className="font-playfair font-bold text-2xl md:text-3xl text-brand-white mb-6">Featured App: Lovable Learner</h2>
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div><img src="/lovable-uploads/lovablelearner-screenshot.jpeg" alt="Lovable Learner — app for neurodivergent minds" className="w-full max-w-sm mx-auto rounded-lg shadow-2xl border-glow" /></div>
                    <div>
                      <p className="text-brand-white/70 text-lg leading-relaxed mb-4">A completely free learning platform built for neurodivergent minds. Every lesson is visual, structured, and adapted to how each learner best understands.</p>
                      <Button onClick={() => window.open('https://www.lovablelearner.com', '_blank')} className="bg-brand-red hover:bg-brand-red/90 text-white font-bold px-6 py-3 hover-glow">Visit Lovable Learner →</Button>
                    </div>
                  </div>
                </div>

                {/* Featured App: Shrink & Send */}
                <div className="bg-white border border-border rounded-lg p-8 mb-12 shadow-sm">
                  <h2 className="font-playfair font-bold text-2xl md:text-3xl text-brand-white mb-6">Featured App: Shrink & Send</h2>
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div><img src="/lovable-uploads/shrinkandsend-screenshot.jpeg" alt="Shrink & Send — Professional file compression and delivery" className="w-full max-w-sm mx-auto rounded-lg shadow-2xl border-glow" /></div>
                    <div>
                      <p className="text-brand-white/70 text-lg leading-relaxed mb-4">Professional delivery made simple. Compress multiple files and deliver them via secure email — without ever shrinking your standards.</p>
                      <Button onClick={() => window.open('https://www.shrinkandsend.com', '_blank')} className="bg-brand-red hover:bg-brand-red/90 text-white font-bold px-6 py-3 hover-glow">Visit Shrink & Send →</Button>
                    </div>
                  </div>
                </div>

                {/* Featured App: Text Detox */}
                <div className="bg-white border border-border rounded-lg p-8 mb-12 shadow-sm">
                  <h2 className="font-playfair font-bold text-2xl md:text-3xl text-brand-white mb-6">Featured App: Text Detox™</h2>
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div><img src="/lovable-uploads/textdetox-screenshot.jpeg" alt="Text Detox — Clean, format, and export your text" className="w-full max-w-sm mx-auto rounded-lg shadow-2xl border-glow" /></div>
                    <div>
                      <p className="text-brand-white/70 text-lg leading-relaxed mb-4">Transform your messy text into clean, publishing-ready content. Clean up, auto-format, and quick export in seconds.</p>
                      <Button onClick={() => window.open('https://www.textdetoxalchemy.com', '_blank')} className="bg-brand-red hover:bg-brand-red/90 text-white font-bold px-6 py-3 hover-glow">Visit Text Detox →</Button>
                    </div>
                  </div>
                </div>

                {/* GitHub Sponsor Card */}
                <div className="bg-white border border-border rounded-lg p-8 mb-12 shadow-sm flex flex-col items-center">
                  <h2 className="font-playfair font-bold text-2xl md:text-3xl text-brand-white mb-6">Support My Work</h2>
                  <iframe src="https://github.com/sponsors/ayaghi88/card" title="Sponsor ayaghi88" height="225" width="100%" style={{ border: 0, maxWidth: '600px' }} />
                </div>

                <div className="bg-brand-black border border-border rounded-lg p-6 mb-8">
                  <p className="text-brand-white/60 text-center italic">We'd love to hear your feedback! If you've used Lovable Learner or any of our apps, please share your review or suggestions.</p>
                </div>

                <Link to="/contact">
                  <Button className="bg-brand-red hover:bg-brand-red/90 text-white font-bold px-8 py-4 text-lg hover-glow">Discuss an App Project →</Button>
                </Link>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </PageLayout>
    </>
  );
};

export default AppCreation;
