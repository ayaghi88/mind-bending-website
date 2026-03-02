import PageLayout from '@/components/PageLayout';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ExternalLink, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const Author = () => {
  const books = [
    { title: "Mind Bending: The Quantum Reality Strategist", formats: "Paperback · Hardcover · eBook", amazonUrl: "https://amzn.to/4qsWj6B" },
    { title: "Business Grants Are FREE99", formats: "eBook", amazonUrl: "https://www.amazon.com/Business-Grants-FREE99-Amber-Yaghi-ebook/dp/B0FF39R3YK" },
    { title: "Quick Inquiry Removal Guide", formats: "eBook", amazonUrl: "https://www.amazon.com/Quick-Inquiry-Removal-Guide-amber-ebook/dp/B09V1SD6W8" },
  ];

  const retailers = [
    { name: "Amazon", url: "https://www.amazon.com/s?k=amber+yaghi" },
    { name: "Barnes & Noble", url: "https://www.barnesandnoble.com/s/amber+yaghi" },
    { name: "Lulu", url: "https://www.lulu.com/search?q=amber+yaghi" },
    { name: "Walmart.com", url: "https://www.walmart.com/ip/16828660779?sid=2bdcd3ab-8220-4390-ba8e-891671c8297a" },
    { name: "eBay", url: "https://www.ebay.com/sch/i.html?_nkw=mind+bending+the+quantum+reality+strategist&_sop=12" },
    { name: "Books-A-Million", url: "https://www.booksamillion.com/p/Mind-Bending/Amber-Yaghi/9781300224419" },
  ];

  return (
    <>
      <Helmet>
        <title>About the Author | Amber Yaghi</title>
        <meta name="description" content="Meet Amber Yaghi — author, publisher, app developer, and AI strategist from Baker, Louisiana. Read her story, bibliography, and find her books worldwide." />
        <link rel="canonical" href="https://amberyaghi.org/author" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "@id": "https://amberyaghi.org/#website",
              "url": "https://amberyaghi.org/",
              "name": "Amber Yaghi",
              "inLanguage": "en",
              "publisher": { "@id": "https://amberyaghi.org/#person" }
            },
            {
              "@type": "Person",
              "@id": "https://amberyaghi.org/#person",
              "name": "Amber Yaghi",
              "url": "https://amberyaghi.org/",
              "image": "https://amberyaghi.org/lovable-uploads/amber-photo-1.jpeg",
              "jobTitle": ["Author", "App Developer", "AI Strategist", "Speaker"],
              "description": "Amber Yaghi is a published author, app developer, AI strategist, and speaker from Baker, Louisiana. She builds human-centered tools and publishing solutions at the intersection of writing, healthcare, technology, and identity work.",
              "birthPlace": { "@type": "Place", "name": "Baker, Louisiana, United States" },
              "knowsAbout": ["Self-publishing","Book publishing services","App development","AI strategy","DNS setup","Motivational speaking","Writing","Identity work"],
              "sameAs": ["https://github.com/ayaghi88","https://facebook.com/authoramberyaghi","https://tiktok.com/@authoramberyaghi","https://x.com/amber_yaghi"],
              "mainEntityOfPage": { "@type": "WebPage", "@id": "https://amberyaghi.org/author" }
            }
          ]
        })}</script>
      </Helmet>
      <PageLayout>
        <div className="min-h-screen bg-brand-black">
          <div className="pt-20 lg:pt-12 pb-20">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">

                {/* Hero / Intro */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-20">
                  <h1 className="font-playfair font-black text-4xl md:text-5xl text-brand-white mb-4">Amber Yaghi</h1>
                  <p className="text-brand-red font-semibold text-lg mb-6">Author · App Developer · AI Strategist · Speaker</p>
                  <p className="text-brand-white/70 text-lg leading-relaxed mb-4">Amber Yaghi is a published author, app developer, AI strategist, and founder of Shrink And Send, Text Detox Alchemy, Lovable Learner, &amp; a plethora of digital tools. Best known for <em>Mind Bending: The Quantum Reality Strategist</em>, she creates trauma-informed curriculum, innovative digital tools, and technology solutions that blend writing, identity work, and human-centered design.</p>
                  <p className="text-brand-white/70 leading-relaxed mb-4">A native of Baker, Louisiana, Amber has been writing since childhood — from poetry and journals to full books — and has long been trusted to craft meaningful memorial and obituary poems. Her authentic voice and creative vision have made her a sought-after storyteller and speaker.</p>
                  <p className="text-brand-white/70 leading-relaxed mb-4">Driven by legacy and purpose, Amber builds and launches apps, helps authors publish with clarity and confidence, and offers expert services in publishing strategy, DNS setup, and digital brand development.</p>
                  <p className="text-brand-white/70 leading-relaxed">Today, everything Amber builds sits at the intersection of writing, healthcare, technology, and identity work — empowering individuals and organizations to evolve, create impact, and rewrite their narratives.</p>
                </motion.div>

                {/* Photo Gallery */}
                <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-20">
                  <h2 className="font-playfair font-bold text-3xl text-brand-white mb-8">Gallery</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { src: "/lovable-uploads/amber-photo-1.jpeg", alt: "Amber Yaghi portrait" },
                      { src: "/lovable-uploads/amber-photo-2.jpeg", alt: "Amber Yaghi casual" },
                      { src: "/lovable-uploads/amber-photo-3.jpeg", alt: "Amber Yaghi reading" },
                      { src: "/lovable-uploads/amber-photo-4.jpeg", alt: "Amber Yaghi professional" },
                    ].map((photo) => (
                      <img key={photo.src} src={photo.src} alt={photo.alt} className="rounded-xl shadow-lg w-full aspect-[3/4] object-cover" />
                    ))}
                  </div>
                </motion.section>


                {/* Bibliography */}
                <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-20">
                  <h2 className="font-playfair font-bold text-3xl text-brand-white mb-8">Bibliography</h2>
                  <div className="grid sm:grid-cols-3 gap-6">
                    {books.map((book) => (
                      <a key={book.title} href={book.amazonUrl} target="_blank" rel="noopener noreferrer" className="group bg-white border border-border rounded-xl p-6 hover:border-brand-red hover:shadow-md transition-all duration-300 block hover:-translate-y-1">
                        <BookOpen className="w-8 h-8 text-brand-red mb-4" />
                        <h3 className="font-playfair font-bold text-lg text-brand-white mb-2 group-hover:text-brand-red transition-colors">{book.title}</h3>
                        <p className="text-brand-white/50 text-sm mb-3">{book.formats}</p>
                        <span className="inline-flex items-center gap-1 text-brand-red text-sm font-semibold">View on Amazon <ExternalLink className="w-3 h-3" /></span>
                      </a>
                    ))}
                  </div>
                </motion.section>

                {/* Global Distribution */}
                <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-20">
                  <h2 className="font-playfair font-bold text-3xl text-brand-white mb-4">Global Distribution</h2>
                  <p className="text-brand-white/60 mb-8"><em>Mind Bending</em> is available worldwide through major retailers and global distribution networks.</p>
                  <div className="flex flex-wrap gap-3">
                    {retailers.map((r) => (
                      <a key={r.name} href={r.url} target="_blank" rel="noopener noreferrer" className="bg-white border border-border rounded-lg px-5 py-3 text-brand-white hover:border-brand-red hover:text-brand-red transition-all text-sm font-semibold">{r.name}</a>
                    ))}
                  </div>
                </motion.section>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/books"><Button className="bg-brand-red hover:bg-brand-red/90 text-white font-bold px-8 py-4 text-lg hover-glow">Explore All Books →</Button></Link>
                  <Link to="/contact"><Button variant="outline" className="border-brand-gold text-brand-gold hover:bg-brand-gold/10 font-bold px-8 py-4 text-lg">Get in Touch →</Button></Link>
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

export default Author;
