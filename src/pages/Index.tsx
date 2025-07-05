
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import BookSection from '@/components/BookSection';
import CurriculumSection from '@/components/CurriculumSection';
import AboutSection from '@/components/AboutSection';
import LicensingSection from '@/components/LicensingSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-brand-black">
      <Navigation />
      <HeroSection />
      <BookSection />
      <CurriculumSection />
      <AboutSection />
      <LicensingSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
