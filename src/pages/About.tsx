import Navigation from '@/components/Navigation';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Amber Yaghi | Author, Publisher & Speaker</title>
        <meta name="description" content="Learn about Amber Yaghi — author of Mind Bending, Business Grants Are FREE99, and Quick Inquiry Removal Guide. Transformational speaker, publisher, and technologist." />
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
