import { useEffect, useRef } from 'react';
import PageLayout from '@/components/PageLayout';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet-async';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Books = () => {
  const payhipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Remove any existing payhip scripts to allow re-initialization
    const existingScripts = document.querySelectorAll('script[src*="payhip.com/embed-page"]');
    existingScripts.forEach(s => s.remove());

    const script = document.createElement('script');
    script.src = 'https://payhip.com/embed-page.js?v=' + Date.now();
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      try { document.body.removeChild(script); } catch (e) {}
    };
  }, []);

  const mindBendingRetailers = [
    { name: "Amazon", url: "https://www.amazon.com/s?k=amber+yaghi+mind+bending" },
    { name: "Barnes & Noble", url: "https://www.barnesandnoble.com/s/amber+yaghi" },
    { name: "Lulu", url: "https://www.lulu.com/shop/amber-yaghi/mind-bending-the-quantum-reality-strategist/paperback/product-45ympe6.html" },
    { name: "Walmart", url: "https://www.walmart.com/ip/16828660779?sid=2bdcd3ab-8220-4390-ba8e-891671c8297a" },
    { name: "Books-A-Million", url: "https://www.booksamillion.com/p/Mind-Bending/Amber-Yaghi/9781300224419" },
    { name: "eBay", url: "https://www.ebay.com/sch/i.html?_nkw=mind+bending+the+quantum+reality+strategist&_sop=12" },
  ];

  return (
    <>
      <Helmet>
        <title>Published Works by Amber Yaghi | Mind Bending & More</title>
        <meta name="description" content="Books by Amber Yaghi: Mind Bending (paperback, hardcover & eBook), Business Grants Are FREE99 (eBook), and Quick Inquiry Removal Guide (eBook). Available on Amazon, B&N, Lulu, Walmart, eBay & more." />
        <link rel="canonical" href="https://amberyaghi.org/books" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Person",
                "@id": "https://amberyaghi.org/#amber-yaghi",
                "name": "Amber Yaghi",
                "url": "https://amberyaghi.org",
                "sameAs": [
                  "https://www.amazon.com/stores/author/B0FF39R3YK",
                  "https://www.lulu.com/shop/amber-yaghi"
                ]
              },
              {
                "@type": "Book",
                "name": "Mind Bending: The Quantum Reality Strategist",
                "author": { "@type": "Person", "@id": "https://amberyaghi.org/#amber-yaghi", "name": "Amber Yaghi" },
                "isbn": "9781300224419",
                "bookFormat": ["Paperback", "Hardcover", "EBook"],
                "url": "https://amberyaghi.org/books",
                "publisher": { "@type": "Organization", "name": "Amber Yaghi" },
                "offers": [
                  { "@type": "Offer", "url": "https://www.amazon.com/s?k=amber+yaghi+mind+bending", "seller": { "@type": "Organization", "name": "Amazon" } },
                  { "@type": "Offer", "url": "https://www.lulu.com/shop/amber-yaghi/mind-bending-the-quantum-reality-strategist/paperback/product-45ympe6.html", "seller": { "@type": "Organization", "name": "Lulu" } }
                ]
              },
              {
                "@type": "Book",
                "name": "Business Grants Are FREE99",
                "author": { "@type": "Person", "@id": "https://amberyaghi.org/#amber-yaghi", "name": "Amber Yaghi" },
                "bookFormat": "EBook",
                "url": "https://www.amazon.com/Business-Grants-FREE99-Amber-Yaghi-ebook/dp/B0FF39R3YK",
                "offers": { "@type": "Offer", "url": "https://www.amazon.com/Business-Grants-FREE99-Amber-Yaghi-ebook/dp/B0FF39R3YK", "seller": { "@type": "Organization", "name": "Amazon" } }
              },
              {
                "@type": "Book",
                "name": "Quick Inquiry Removal Guide",
                "author": { "@type": "Person", "@id": "https://amberyaghi.org/#amber-yaghi", "name": "Amber Yaghi" },
                "bookFormat": "EBook",
                "url": "https://www.amazon.com/Quick-Inquiry-Removal-Guide-amber-ebook/dp/B09V1SD6W8",
                "offers": { "@type": "Offer", "url": "https://www.amazon.com/Quick-Inquiry-Removal-Guide-amber-ebook/dp/B09V1SD6W8", "seller": { "@type": "Organization", "name": "Amazon" } }
              }
            ]
          })}
        </script>
      </Helmet>
      <PageLayout>
        <div className="min-h-screen bg-brand-black">
          <div className="pt-20 lg:pt-12 pb-20">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <h1 className="font-playfair font-black text-4xl md:text-5xl lg:text-6xl text-brand-white mb-6 animate-fade-in">
                  Published Works
                </h1>
                <p className="text-brand-white/70 text-lg md:text-xl leading-relaxed mb-12 animate-slide-in-left">
                  Explore published works by Amber Yaghi — focused on insight, clarity, and intellectual ownership.
                </p>

                {/* Featured Book: Mind Bending */}
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
                        <span className="text-brand-gold font-semibold">ISBN:</span> 978-1-300-22441-9
                      </p>
                      <p className="text-brand-white">
                        <span className="text-brand-gold font-semibold">Formats:</span> Paperback, Hardcover & eBook
                      </p>
                      <p className="text-brand-white">
                        <span className="text-brand-gold font-semibold">Available:</span> Amazon, B&N, Lulu, Walmart.com, eBay, Books-A-Million & more (global distribution)
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-3 mb-8">
                      {mindBendingRetailers.map((r) => (
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

                {/* Additional Books */}
                <h2 className="font-playfair font-bold text-2xl md:text-3xl text-brand-white mb-8">
                  More Books by Amber
                </h2>
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                  <div className="bg-white border border-border rounded-lg p-6 shadow-sm">
                    <h3 className="font-playfair font-bold text-xl text-brand-white mb-2">
                      Business Grants Are FREE99
                    </h3>
                    <p className="text-brand-gold text-sm font-semibold mb-4">eBook · ASIN: B0FF39R3YK</p>
                    <p className="text-brand-white/60 mb-6 leading-relaxed">
                      A practical guide to finding and securing free business grants. Learn where to look, how to apply, and how to maximize your chances of funding — without spending a dime.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => window.open('https://www.amazon.com/Business-Grants-FREE99-Amber-Yaghi-ebook/dp/B0FF39R3YK', '_blank')}
                      className="border-brand-red/50 text-brand-white hover:bg-brand-red/10"
                    >
                      View on Amazon
                    </Button>
                  </div>

                  <div className="bg-white border border-border rounded-lg p-6 shadow-sm">
                    <h3 className="font-playfair font-bold text-xl text-brand-white mb-2">
                      Quick Inquiry Removal Guide
                    </h3>
                    <p className="text-brand-gold text-sm font-semibold mb-4">eBook · ASIN: B09V1SD6W8</p>
                    <p className="text-brand-white/60 mb-6 leading-relaxed">
                      A step-by-step guide to removing hard inquiries from your credit report quickly and effectively. Take control of your credit and financial future.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => window.open('https://www.amazon.com/Quick-Inquiry-Removal-Guide-amber-ebook/dp/B09V1SD6W8', '_blank')}
                      className="border-brand-red/50 text-brand-white hover:bg-brand-red/10"
                    >
                      View on Amazon
                    </Button>
                  </div>
                </div>

                {/* Payhip Embed */}
                <div className="mb-16" ref={payhipRef}>
                  <div className="payhip-embed-page" data-key="CYUwG"></div>
                </div>

                {/* Review Request */}
                <div className="bg-white border border-border rounded-lg p-8 text-center shadow-sm">
                  <Star className="w-8 h-8 text-brand-gold mx-auto mb-4" />
                  <h3 className="font-playfair font-bold text-2xl text-brand-white mb-4">
                    Have you read one of Amber's books?
                  </h3>
                  <p className="text-brand-white/60 text-lg mb-6">
                    We'd love to hear your thoughts! Leave a review on your favorite platform or share your feedback directly.
                  </p>
                  <Link to="/contact?review=true">
                    <Button className="bg-brand-red hover:bg-brand-red/90 text-white font-bold px-8 py-4 text-lg hover-glow">
                      Share Your Review →
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </PageLayout>
    </>
  );
};

export default Books;
