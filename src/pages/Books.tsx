import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet-async';
import { Star } from 'lucide-react';

const Books = () => {
  const retailers = [
    { name: "Amazon", url: "https://www.amazon.com/s?k=amber+yaghi+mind+bending" },
    { name: "Barnes & Noble", url: "https://www.barnesandnoble.com/s/amber+yaghi" },
    { name: "Lulu", url: "https://www.lulu.com/shop/amber-yaghi/mind-bending-the-quantum-reality-strategist/paperback/product-45ympe6.html" },
    { name: "Books-A-Million", url: "https://www.booksamillion.com/search?query=amber+yaghi" },
  ];

  return (
    <>
      <Helmet>
        <title>Books by Amber Yaghi | Mind Bending</title>
        <meta name="description" content="Explore books by Amber Yaghi including Mind Bending: The Quantum Reality Strategist. Available on Amazon, Barnes & Noble, Lulu, and Books-A-Million." />
        <link rel="canonical" href="https://amberyaghi.org/books" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Book",
            "name": "Mind Bending: The Quantum Reality Strategist",
            "author": { "@type": "Person", "name": "Amber Yaghi" },
            "bookFormat": "Paperback",
            "url": "https://amberyaghi.org/books"
          })}
        </script>
      </Helmet>
      <div className="min-h-screen bg-brand-black">
        <Navigation />
        <div className="pt-24 pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h1 className="font-playfair font-black text-4xl md:text-5xl lg:text-6xl text-brand-white mb-6 animate-fade-in">
                Books by Amber Yaghi
              </h1>
              <p className="text-brand-white/70 text-lg md:text-xl leading-relaxed mb-12 animate-slide-in-left">
                Explore published works focused on insight, clarity, and intellectual ownership.
              </p>

              {/* Featured Book */}
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div className="animate-slide-in-left">
                  <img
                    src="/lovable-uploads/306fefdf-2cf7-4ab6-a6b2-755e7339112a.png"
                    alt="Mind Bending: The Quantum Reality Strategist by Amber Yaghi"
                    className="w-full max-w-md mx-auto shadow-2xl border-glow rounded-lg"
                  />
                </div>

                <div className="animate-slide-in-right">
                  <h2 className="font-playfair font-bold text-3xl md:text-4xl text-brand-white mb-4">
                    Mind Bending
                  </h2>
                  <h3 className="font-playfair text-xl md:text-2xl text-brand-gold mb-6">
                    The Quantum Reality Strategist
                  </h3>

                  <p className="text-brand-white/70 mb-6 leading-relaxed text-lg">
                    Transform your reality while staying authentically <span className="text-brand-red font-bold">YOU</span>.
                    Amber combines quantum concepts with practical wisdom, helping you create positive change
                    without compromising your authentic self.
                  </p>

                  <div className="space-y-2 mb-8">
                    <p className="text-brand-white">
                      <span className="text-brand-gold font-semibold">Format:</span> Paperback
                    </p>
                    <p className="text-brand-white">
                      <span className="text-brand-gold font-semibold">Available:</span> Amazon, B&N, Lulu, Books-A-Million & more
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3 mb-8">
                    {retailers.map((r) => (
                      <Button
                        key={r.name}
                        variant="outline"
                        onClick={() => window.open(r.url, '_blank')}
                        className="border-brand-red/50 text-brand-white hover:bg-brand-red/10"
                      >
                        {r.name}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Review Request */}
              <div className="bg-white border border-border rounded-lg p-8 text-center shadow-sm">
                <Star className="w-8 h-8 text-brand-gold mx-auto mb-4" />
                <h3 className="font-playfair font-bold text-2xl text-brand-white mb-4">
                  Have you read Mind Bending?
                </h3>
                <p className="text-brand-white/60 text-lg mb-6">
                  We'd love to hear your thoughts! Leave a review on your favorite platform or share your feedback directly.
                </p>
                <Button
                  onClick={() => window.location.href = '/contact?review=true'}
                  className="bg-brand-red hover:bg-brand-red/90 text-white font-bold px-8 py-4 text-lg hover-glow"
                >
                  Share Your Review →
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Books;
