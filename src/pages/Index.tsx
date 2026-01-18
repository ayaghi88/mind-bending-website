import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import BookSection from '@/components/BookSection';
import CurriculumSection from '@/components/CurriculumSection';
import AboutSection from '@/components/AboutSection';
import LinksSection from '@/components/LinksSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Amber Yaghi | Author, Speaker & Transformation Guide</title>
        <meta name="description" content="Amber Yaghi - Author of Mind Bending, creator of From Fake to Free curriculum. Empowering transformation through motivational storytelling and authentic living." />
        <link rel="canonical" href="https://amberyaghi.org/" />
        <meta property="og:title" content="Amber Yaghi | Author, Speaker & Transformation Guide" />
        <meta property="og:description" content="Bend your reality before it bends you. Mind Bending - Out Now" />
        <meta property="og:url" content="https://amberyaghi.org/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Amber Yaghi",
            "url": "https://amberyaghi.org",
            "jobTitle": "Author, Speaker",
            "description": "Author of Mind Bending and creator of From Fake to Free curriculum"
          })}
        </script>
      </Helmet>
      <div className="min-h-screen bg-brand-black">
        <Navigation />
        <HeroSection />
        <BookSection />
        <CurriculumSection />
        <AboutSection />
        <LinksSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
};

export default Index;
