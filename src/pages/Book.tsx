import PageLayout from '@/components/PageLayout';
import BookSection from '@/components/BookSection';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const Book = () => {
  return (
    <>
      <Helmet>
        <title>Mind Bending Book | Amber Yaghi</title>
        <meta name="description" content="Discover Mind Bending by Amber Yaghi - a transformational guide to breaking free from limiting beliefs and unlocking your authentic potential." />
        <link rel="canonical" href="https://amberyaghi.org/book" />
      </Helmet>
      <PageLayout>
        <div className="min-h-screen bg-brand-black">
          <div className="pt-6 lg:pt-8">
            <BookSection />
          </div>
          <Footer />
        </div>
      </PageLayout>
    </>
  );
};

export default Book;
