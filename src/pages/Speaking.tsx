import PageLayout from '@/components/PageLayout';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet-async';
import { Mic, Radio, Users, BookOpen, ExternalLink, Award, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Speaking = () => {
  const topics = [
    "Publishing & intellectual property",
    "Ethical technology and AI",
    "Creativity, authorship, and ownership",
    "Building digital platforms",
    "Transformational Methods",
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
      <PageLayout>
        <div className="min-h-screen bg-brand-black">
          <div className="pt-20 lg:pt-12 pb-20">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <h1 className="font-playfair font-black text-4xl md:text-5xl lg:text-6xl text-brand-white mb-6 animate-fade-in">Speaking Engagements & Interviews</h1>
                <p className="text-brand-white/70 text-lg md:text-xl leading-relaxed mb-12 animate-slide-in-left">Amber Yaghi is available for speaking engagements, interviews, podcasts, panels, and media appearances.</p>

                {/* Past Speaking Engagement Photo */}
                <div className="mb-12 animate-fade-in">
                  <div className="bg-white rounded-xl shadow-md border border-border overflow-hidden">
                    <img src="/lovable-uploads/speaking-engagement.jpeg" alt="Amber Yaghi featured as a speaker at a past speaking engagement alongside other authors and speakers" className="w-full object-cover max-h-[500px]" />
                    <div className="p-6">
                      <p className="text-brand-white/70 text-sm">Amber Yaghi presenting <strong>"Transformational Methods from Amber Yaghi"</strong> at a past speaking engagement alongside fellow authors and speakers.</p>
                      <a href="https://app.eventraptor.com/speaker-profiles/amber-yaghi" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-brand-red hover:underline mt-3 font-semibold">View Full Speaker Profile & Past Engagements <ExternalLink className="w-4 h-4" /></a>
                    </div>
                  </div>
                </div>

                {/* Google Knowledge Panel */}
                <div className="mb-12 bg-white rounded-xl shadow-md border border-border p-6 animate-fade-in">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-red/10 rounded-full flex items-center justify-center flex-shrink-0"><Star className="w-6 h-6 text-brand-red" /></div>
                    <div>
                      <h3 className="font-playfair font-bold text-xl text-brand-white mb-2">Google Knowledge Panel</h3>
                      <p className="text-brand-white/70 mb-3">Amber Yaghi is recognized with a <strong>Google Knowledge Panel</strong>, verifying her notability as a published author, speaker, and technologist.</p>
                      <a href="https://share.google/llNPWJQQPlVc5ZzPI" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-brand-red hover:underline font-semibold">View Google Knowledge Panel <ExternalLink className="w-4 h-4" /></a>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 mb-12">
                  <div>
                    <h2 className="font-playfair font-bold text-2xl text-brand-white mb-6">Topics</h2>
                    <ul className="space-y-4">
                      {topics.map((topic) => (
                        <li key={topic} className="text-brand-white/70 text-lg flex items-center gap-3">
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
                        <div key={f.label} className="flex items-center gap-4 bg-white border border-border rounded-lg p-4 shadow-sm">
                          <f.icon className="w-6 h-6 text-brand-red" />
                          <span className="text-brand-white text-lg">{f.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* TED Talk Nomination CTA */}
                <div className="mb-12 bg-gradient-to-br from-brand-red/5 to-brand-gold/5 border-2 border-brand-red/30 rounded-xl p-8 text-center animate-fade-in">
                  <Award className="w-12 h-12 text-brand-red mx-auto mb-4" />
                  <h2 className="font-playfair font-bold text-2xl md:text-3xl text-brand-white mb-4">🌟 Nominate Amber for a TED Talk! 🌟</h2>
                  <p className="text-brand-white/70 text-lg mb-4 max-w-2xl mx-auto">Amber's transformational message about authenticity, mind-bending, and ethical technology deserves a global stage. Your nomination can help make that happen — it only takes a minute!</p>
                  <p className="text-brand-gold font-semibold mb-6">Every nomination counts. Help amplify a voice that inspires change.</p>
                  <a href="https://speaker-nominations.ted.com" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-brand-red hover:bg-brand-red/90 text-white font-bold px-10 py-5 text-lg hover-glow">Nominate Amber for TED →</Button>
                  </a>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact"><Button className="bg-brand-red hover:bg-brand-red/90 text-white font-bold px-8 py-4 text-lg hover-glow">Book Amber for Speaking →</Button></Link>
                  <Link to="/contact"><Button variant="outline" className="border-brand-gold text-brand-gold hover:bg-brand-gold/10 font-bold px-8 py-4 text-lg">Request an Interview →</Button></Link>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </PageLayout>
    </>
  );
};

export default Speaking;
