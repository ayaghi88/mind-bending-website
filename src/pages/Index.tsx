import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import BookSection from '@/components/BookSection';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Amber Yaghi | Publisher, Creator, Technologist & Speaker</title>
        <meta name="description" content="Amber Yaghi offers professional publishing, app creation, and digital infrastructure services for authors, founders, and thought leaders — with transparent pricing and full ownership." />
        <link rel="canonical" href="https://amberyaghi.org/" />
        <meta property="og:title" content="Amber Yaghi | Build Ideas. Publish Authority. Create Impact." />
        <meta property="og:description" content="Professional publishing, app creation, and digital services for authors and thought leaders." />
        <meta property="og:url" content="https://amberyaghi.org/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Amber Yaghi",
            "url": "https://amberyaghi.org",
            "jobTitle": "Publisher, Creator, Technologist, Speaker",
            "description": "Publisher, creator, and technologist providing ethical, transparent publishing and digital services for authors and thought leaders.",
            "email": "amber@amberyaghi.org",
            "sameAs": [
              "https://facebook.com/authoramberyaghi",
              "https://tiktok.com/@authoramberyaghi",
              "https://x.com/amber_yaghi"
            ]
          })}
        </script>
      </Helmet>
      <div className="min-h-screen bg-brand-black">
        <Navigation />
        <HeroSection />
        <BookSection />

        {/* Services Overview */}
        <section className="py-20 bg-gradient-to-br from-brand-black to-secondary">
          <div className="container mx-auto px-4">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-brand-white text-center mb-12">
              What I Offer
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { title: "Publishing Services", desc: "Author-first publishing with transparent pricing and full ownership.", link: "/publishing" },
                { title: "App Creation", desc: "Custom apps and digital tools for authors, educators, and creators.", link: "/apps" },
                { title: "Speaking & Media", desc: "Keynotes, panels, podcasts, and workshops on publishing, AI, and ownership.", link: "/speaking" },
              ].map((s) => (
                <Link key={s.title} to={s.link} className="bg-secondary/50 border border-primary/20 rounded-lg p-6 hover:border-brand-red/50 transition-colors group">
                  <h3 className="font-playfair font-bold text-xl text-brand-white mb-3 group-hover:text-brand-red transition-colors">{s.title}</h3>
                  <p className="text-brand-white/70 mb-4">{s.desc}</p>
                  <span className="text-brand-gold text-sm font-semibold">Learn more →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews CTA */}
        <section className="py-16 bg-brand-black">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-playfair font-bold text-2xl md:text-3xl text-brand-white mb-4">
              Share Your Experience
            </h2>
            <p className="text-brand-white/70 text-lg mb-6 max-w-2xl mx-auto">
              Have you read Mind Bending, used Lovable Learner, or worked with Amber? We'd love to hear your review and feedback.
            </p>
            <Link to="/contact">
              <Button className="bg-brand-red hover:bg-brand-red/80 text-brand-white font-bold px-8 py-4 text-lg hover-glow border-2 border-brand-red">
                Leave a Review →
              </Button>
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Index;
