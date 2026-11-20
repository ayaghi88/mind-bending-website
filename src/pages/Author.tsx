import PageLayout from '@/components/PageLayout';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ExternalLink, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const Author = () => {
  const books = [
    { title: "Business Grants Are FREE99", formats: "eBook", amazonUrl: "https://www.amazon.com/Business-Grants-FREE99-Amber-Yaghi-ebook/dp/B0FF39R3YK" },
    { title: "Quick Inquiry Removal Guide", formats: "eBook", amazonUrl: "https://www.amazon.com/Quick-Inquiry-Removal-Guide-amber-ebook/dp/B09V1SD6W8" },
  ];

  return (
    <>
      <Helmet>
        <title>About the Author | Amber Yaghi</title>
        <meta name="description" content="Meet Amber Yaghi — author, publisher, app developer, AI strategist, and actress from Baker, Louisiana. Read her story, bibliography, and find her books worldwide." />
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
                            "jobTitle": ["Author", "App Developer", "AI Strategist", "Speaker", "Actress"],
              "description": "Amber Yaghi is a quantum disruptor, street scholar, and the unapologetic mind behind Mind Bending: The Quantum Reality Strategist.",
              "birthPlace": { "@type": "Place", "name": "Baker, Louisiana, United States" },
              "knowsAbout": ["Self-publishing","Book publishing services","App development","AI strategy","DNS setup","Motivational speaking","Writing","Identity work"],
              "sameAs": ["https://github.com/ayaghi88", "https://imdb.me/amberyaghi"],
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
                  <p className="text-brand-red font-semibold text-lg mb-6">Author · App Developer · AI Strategist · Speaker · Actress</p>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-4">Amber Yaghi is a quantum disruptor, street scholar, and the unapologetic mind behind <em>Mind Bending: The Quantum Reality Strategist</em>. Half Palestinian, half Black, and 100% her own lane, Amber blends metaphysics with real-world resilience to help people manifest, heal, and elevate. A high school dropout turned healthcare strategist and AI educator, she’s helped hundreds land jobs, rewrite their narratives, and monetize their mind.</p>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-4">Her book isn’t just paper — it’s power. It’s for the misjudged, the overlooked, the visionaries too bold for boxes.</p>
                  <p className="text-muted-foreground text-lg leading-relaxed">Amber is the founder of HUSHLA AI™, The 9 to 5 Dating Pool, Text Detox, Shrink &amp; Send, and a growing library of digital tools for healing, hustling, and higher thinking. With tattoos, trauma, and tenacity, she turns her pain into blueprints — and invites you to do the same.</p>
                </motion.div>

                {/* Bibliography */}
                <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-20">
                  <h2 className="font-playfair font-bold text-3xl text-brand-white mb-8">Bibliography</h2>
                  <div className="mb-8">
                    <lulu-buy-button buy-button-id="0e0159d4-0328-46cc-ba8d-2f24055f262f" variant="product-showcase"></lulu-buy-button>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
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
