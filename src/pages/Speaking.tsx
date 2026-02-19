import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet-async';
import { Mic, Radio, Users, BookOpen } from 'lucide-react';

const Speaking = () => {
  const topics = [
    "Publishing & intellectual property",
    "Ethical technology and AI",
    "Creativity, authorship, and ownership",
    "Building digital platforms",
  ];

  const formats = [
    { icon: Mic, label: "Keynotes" },
    { icon: Users, label: "Panels" },
    { icon: Radio, label: "Podcasts & Interviews" },
    { icon: BookOpen, label: "Workshops" },
  ];

  return (
    <>
      <Helmet>
        <title>Speaking Engagements & Media | Amber Yaghi</title>
        <meta name="description" content="Book Amber Yaghi for speaking engagements, keynotes, panels, podcasts, interviews, and workshops on publishing, AI, and creative ownership." />
        <link rel="canonical" href="https://amberyaghi.org/speaking" />
      </Helmet>
      <div className="min-h-screen bg-brand-black">
        <Navigation />
        <div className="pt-24 pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="font-playfair font-black text-4xl md:text-5xl lg:text-6xl text-brand-white mb-6 animate-fade-in">
                Speaking Engagements & Interviews
              </h1>

              <p className="text-brand-white/80 text-lg md:text-xl leading-relaxed mb-12 animate-slide-in-left">
                Amber Yaghi is available for speaking engagements, interviews, podcasts, panels, and media appearances.
              </p>

              <div className="grid md:grid-cols-2 gap-12 mb-12">
                <div>
                  <h2 className="font-playfair font-bold text-2xl text-brand-white mb-6">Topics</h2>
                  <ul className="space-y-4">
                    {topics.map((topic) => (
                      <li key={topic} className="text-brand-white/80 text-lg flex items-center gap-3">
                        <span className="w-2 h-2 bg-brand-red rounded-full flex-shrink-0" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="font-playfair font-bold text-2xl text-brand-white mb-6">Formats</h2>
                  <div className="space-y-4">
                    {formats.map((f) => (
                      <div key={f.label} className="flex items-center gap-4 bg-secondary/50 border border-primary/20 rounded-lg p-4">
                        <f.icon className="w-6 h-6 text-brand-gold" />
                        <span className="text-brand-white text-lg">{f.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => window.location.href = '/contact'}
                  className="bg-brand-red hover:bg-brand-red/80 text-brand-white font-bold px-8 py-4 text-lg hover-glow border-2 border-brand-red"
                >
                  Book Amber for Speaking →
                </Button>
                <Button
                  onClick={() => window.location.href = '/contact'}
                  variant="outline"
                  className="border-brand-gold text-brand-gold hover:bg-brand-gold/10 font-bold px-8 py-4 text-lg"
                >
                  Request an Interview →
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

export default Speaking;
