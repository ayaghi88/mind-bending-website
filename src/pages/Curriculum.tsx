import Navigation from '@/components/Navigation';
import CurriculumSection from '@/components/CurriculumSection';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const Curriculum = () => {
  return (
    <>
      <Helmet>
        <title>From Fake to Free Program | Amber Yaghi</title>
        <meta name="description" content="Join Amber Yaghi's From Fake to Free program - motivational storytelling that empowers transformation and authentic living." />
        <link rel="canonical" href="https://amberyaghi.org/curriculum" />
      </Helmet>
      <div className="min-h-screen bg-brand-black">
        <Navigation />
        <div className="pt-20">
          <CurriculumSection />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Curriculum;
