import Navigation from '@/components/Navigation';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Amber Yaghi | Transformational Speaker & Author</title>
        <meta name="description" content="Learn about Amber Yaghi's journey of transformation - from personal challenges to becoming an inspirational speaker and author of Mind Bending." />
        <link rel="canonical" href="https://amberyaghi.org/about" />
      </Helmet>
      <div className="min-h-screen bg-brand-black">
        <Navigation />
        <div className="pt-20">
          <AboutSection />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;
