import PageLayout from '@/components/PageLayout';
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
      <PageLayout>
        <div className="min-h-screen bg-brand-black">
          <div className="pt-6 lg:pt-8">
            <AboutSection />
          </div>
          <Footer />
        </div>
      </PageLayout>
    </>
  );
};

export default About;
