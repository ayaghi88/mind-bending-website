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
          "@type": "Person",
          "name": "Amber Yaghi",
          "url": "https://amberyaghi.org",
          "jobTitle": "Author, Publisher, Technologist, Speaker",
          "sameAs": ["https://github.com/ayaghi88","https://facebook.com/authoramberyaghi","https://tiktok.com/@authoramberyaghi","https://x.com/amber_yaghi"]
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
                  <p className="text-brand-red font-semibold text-lg mb-6">Author · Publisher · Creator · Technologist · Speaker</p>
                  <p className="text-brand-white/70 text-lg leading-relaxed mb-4">Who's to say who's qualified and who isn't? I entered the world with all odds against me &amp; still persevered.</p>
                  <p className="text-brand-white/70 leading-relaxed">A Baker, Louisiana native. I've been writing for as long as I can remember — poetry, love letters, journaling, you name it. I wrote an entire book of poems in middle school &amp; typed them up on my Brother's typewriter.</p>
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

                {/* Full Bio */}
                <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-20">
                  <div className="max-w-3xl mx-auto">
                    <div className="space-y-6 text-brand-white/75 leading-relaxed text-lg">
                      <p>Well into adulthood, whenever someone passed away, a classmate or old friend would reach out for me to write a poem for the person's obituary. I'd have it to them in no time, with the nicknames or special memories they'd requested I add. It made me feel worth something, to be able to author someone's going away poem or even be considered to do so!</p>
                      <p>Writing is what I was known for, before deciding who I wanted to be. It's the one skill I never had to learn; I was created for that purpose! My only God-given talent. Even as social media became popular over the years, I still remained an original creator. I'd share someone else's post, but I could never do the copy &amp; paste thing. I had to create my own, from the heart!</p>
                      <p>I entered the world a double minority. I'm covered in tattoos, self-expressive, super passionate, nonconforming, &amp; naturally loud. I'm a proud lame. I shockingly became a high school dropout after being an A/B honor roll student most of my life. My path did not look traditional, but it was intentional.</p>
                      <p>I entered the workforce as a healthcare worker, driven by a genuine love for helping people. From there, I expanded into becoming a self-published author, app developer, and AI strategist. When I published <em>Mind Bending: The Quantum Reality Strategist</em>, I created the tools and processes I wished existed along the way. That pushed me deeper into technology and innovation.</p>
                      <p className="font-semibold text-brand-white">Everything I build today sits at the intersection of writing, healthcare, technology, and identity work.</p>
                      <p>My Yaghi fam is my driving force. Legacy is the reason I create, the reason I build, and the reason I refuse to play small.</p>
                    </div>
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
