import Navigation from '@/components/Navigation';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Amber Yaghi | Speaking & Collaborations</title>
        <meta name="description" content="Connect with Amber Yaghi for speaking engagements, workshops, personal consulting, and collaboration opportunities." />
        <link rel="canonical" href="https://amberyaghi.org/contact" />
      </Helmet>
      <div className="min-h-screen bg-brand-black">
        <Navigation />
        <div className="pt-20">
          <ContactSection />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
