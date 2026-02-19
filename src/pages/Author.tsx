import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ExternalLink, BookOpen, Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const testimonials = [
  {
    quote: "Amber's work in Mind Bending is a masterclass in bridging quantum thinking with everyday reality. Her ability to distill complex ideas into actionable strategies is truly remarkable.",
    author: "Dr. Husam M. Yaghi",
    title: "PhD, Researcher & Technologist",
    rating: 5,
  },
  {
    quote: "This book changed the way I think about manifestation and personal growth. Amber writes with a rawness and authenticity you rarely find.",
    author: "Verified Reader",
    title: "Amazon Review",
    rating: 5,
  },
  {
    quote: "Mind Bending isn't just a book — it's a toolkit for rewiring your mindset. Practical, powerful, and unapologetically real.",
    author: "Verified Reader",
    title: "Amazon Review",
    rating: 5,
  },
];

const Author = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();
    return () => { emblaApi.off('select', onSelect); };
  }, [emblaApi]);
  const books = [
    {
      title: "Mind Bending: The Quantum Reality Strategist",
      formats: "Paperback · Hardcover · eBook",
      amazonUrl: "https://amzn.to/4qsWj6B",
    },
    {
      title: "Business Grants Are FREE99",
      formats: "eBook",
      amazonUrl: "https://www.amazon.com/s?k=amber+yaghi+business+grants",
    },
    {
      title: "Quick Inquiry Removal Guide",
      formats: "eBook",
      amazonUrl: "https://www.amazon.com/s?k=amber+yaghi+quick+inquiry+removal",
    },
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
          "sameAs": [
            "https://github.com/ayaghi88",
            "https://facebook.com/authoramberyaghi",
            "https://tiktok.com/@authoramberyaghi",
            "https://x.com/amber_yaghi"
          ]
        })}</script>
      </Helmet>
      <div className="min-h-screen bg-brand-black">
        <Navigation />
        <div className="pt-24 pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">

              {/* Hero / Intro */}
              <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <img
                    src="/lovable-uploads/amber-portrait-2.jpeg"
                    alt="Amber Yaghi — author portrait"
                    className="rounded-xl shadow-lg w-full object-cover max-h-[550px]"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                >
                  <h1 className="font-playfair font-black text-4xl md:text-5xl text-brand-white mb-4">
                    Amber Yaghi
                  </h1>
                  <p className="text-brand-red font-semibold text-lg mb-6">
                    Author · Publisher · Creator · Technologist · Speaker
                  </p>
                  <p className="text-brand-white/70 text-lg leading-relaxed mb-4">
                    Who's to say who's qualified and who isn't? I entered the world with all odds against me &amp; still persevered.
                  </p>
                  <p className="text-brand-white/70 leading-relaxed">
                    A Baker, Louisiana native. I've been writing for as long as I can remember — poetry, love letters, journaling, you name it. I wrote an entire book of poems in middle school &amp; typed them up on my Brother's typewriter.
                  </p>
                </motion.div>
              </div>

              {/* Video */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-20"
              >
                <div className="max-w-2xl mx-auto">
                  <video
                    src="/lovable-uploads/amber-video.mp4"
                    controls
                    playsInline
                    className="w-full rounded-xl shadow-lg"
                    poster="/lovable-uploads/amber-portrait-2.jpeg"
                  />
                </div>
              </motion.section>

              {/* Full Bio */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-20"
              >
                <div className="grid md:grid-cols-3 gap-12 items-start">
                  <div className="md:col-span-2 space-y-6 text-brand-white/75 leading-relaxed text-lg">
                    <p>
                      Well into adulthood, whenever someone passed away, a classmate or old friend would reach out for me to write a poem for the person's obituary. I'd have it to them in no time, with the nicknames or special memories they'd requested I add. It made me feel worth something, to be able to author someone's going away poem or even be considered to do so!
                    </p>
                    <p>
                      Writing is what I was known for, before deciding who I wanted to be. It's the one skill I never had to learn; I was created for that purpose! My only God-given talent. Even as social media became popular over the years, I still remained an original creator. I'd share someone else's post, but I could never do the copy &amp; paste thing. I had to create my own, from the heart!
                    </p>
                    <p>
                      I entered the world a double minority. I'm covered in tattoos, self-expressive, super passionate, nonconforming, &amp; naturally loud. I'm a proud lame. I shockingly became a high school dropout after being an A/B honor roll student most of my life. My path did not look traditional, but it was intentional.
                    </p>
                    <p>
                      I entered the workforce as a healthcare worker, driven by a genuine love for helping people. From there, I expanded into becoming a self-published author, app developer, and AI strategist. When I published <em>Mind Bending: The Quantum Reality Strategist</em>, I created the tools and processes I wished existed along the way. That pushed me deeper into technology and innovation.
                    </p>
                    <p className="font-semibold text-brand-white">
                      Everything I build today sits at the intersection of writing, healthcare, technology, and identity work.
                    </p>
                    <p>
                      My Yaghi fam is my driving force. Legacy is the reason I create, the reason I build, and the reason I refuse to play small.
                    </p>
                  </div>

                  <div className="flex justify-center">
                    <img
                      src="/lovable-uploads/amber-portrait-1.jpeg"
                      alt="Amber Yaghi"
                      className="rounded-xl shadow-lg w-full max-w-[300px] object-cover"
                    />
                  </div>
                </div>
              </motion.section>

              {/* Bibliography */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-20"
              >
                <h2 className="font-playfair font-bold text-3xl text-brand-white mb-8">Bibliography</h2>
                <div className="grid sm:grid-cols-3 gap-6">
                  {books.map((book) => (
                    <a
                      key={book.title}
                      href={book.amazonUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-white border border-border rounded-xl p-6 hover:border-brand-red hover:shadow-md transition-all duration-300 block hover:-translate-y-1"
                    >
                      <BookOpen className="w-8 h-8 text-brand-red mb-4" />
                      <h3 className="font-playfair font-bold text-lg text-brand-white mb-2 group-hover:text-brand-red transition-colors">
                        {book.title}
                      </h3>
                      <p className="text-brand-white/50 text-sm mb-3">{book.formats}</p>
                      <span className="inline-flex items-center gap-1 text-brand-red text-sm font-semibold">
                        View on Amazon <ExternalLink className="w-3 h-3" />
                      </span>
                    </a>
                  ))}
                </div>
              </motion.section>

              {/* Global Distribution */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-20"
              >
                <h2 className="font-playfair font-bold text-3xl text-brand-white mb-4">Global Distribution</h2>
                <p className="text-brand-white/60 mb-8">
                  <em>Mind Bending</em> is available worldwide through major retailers and global distribution networks.
                </p>
                <div className="flex flex-wrap gap-3">
                  {retailers.map((r) => (
                    <a
                      key={r.name}
                      href={r.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white border border-border rounded-lg px-5 py-3 text-brand-white hover:border-brand-red hover:text-brand-red transition-all text-sm font-semibold"
                    >
                      {r.name}
                    </a>
                  ))}
                </div>
              </motion.section>

              {/* Testimonials Carousel */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-20"
              >
                <h2 className="font-playfair font-bold text-3xl text-brand-white mb-8">What Readers Are Saying</h2>
                <div className="relative">
                  <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                      {testimonials.map((t, i) => (
                        <div key={i} className="flex-[0_0_100%] min-w-0 px-2 md:flex-[0_0_80%] lg:flex-[0_0_60%]">
                          <div className="bg-white/5 border border-brand-white/10 rounded-xl p-8 md:p-10 relative">
                            <Quote className="w-10 h-10 text-brand-red/30 absolute top-6 right-6" />
                            <div className="flex gap-1 mb-4">
                              {Array.from({ length: t.rating }).map((_, s) => (
                                <Star key={s} className="w-5 h-5 text-brand-gold fill-brand-gold" />
                              ))}
                            </div>
                            <blockquote className="text-brand-white/80 text-lg leading-relaxed mb-6 italic">
                              "{t.quote}"
                            </blockquote>
                            <div>
                              <p className="text-brand-white font-bold">{t.author}</p>
                              <p className="text-brand-white/50 text-sm">{t.title}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Controls */}
                  <div className="flex items-center justify-center gap-4 mt-6">
                    <button
                      onClick={scrollPrev}
                      className="w-10 h-10 rounded-full border border-brand-white/20 flex items-center justify-center text-brand-white/60 hover:text-brand-white hover:border-brand-red transition"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <div className="flex gap-2">
                      {testimonials.map((_, i) => (
                        <button
                          key={i}
                          className={`w-2 h-2 rounded-full transition-all ${i === selectedIndex ? 'bg-brand-red w-6' : 'bg-brand-white/20'}`}
                          onClick={() => emblaApi?.scrollTo(i)}
                          aria-label={`Go to testimonial ${i + 1}`}
                        />
                      ))}
                    </div>
                    <button
                      onClick={scrollNext}
                      className="w-10 h-10 rounded-full border border-brand-white/20 flex items-center justify-center text-brand-white/60 hover:text-brand-white hover:border-brand-red transition"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.section>

              {/* Rating & Review */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-20"
              >
                <h2 className="font-playfair font-bold text-3xl text-brand-white mb-8">Leave a Review</h2>
                <form
                  name="author-reviews"
                  method="POST"
                  data-netlify="true"
                  className="bg-white/5 border border-brand-white/10 rounded-xl p-8 space-y-6 max-w-2xl"
                >
                  <input type="hidden" name="form-name" value="author-reviews" />

                  <div>
                    <label className="block text-brand-white/80 text-sm font-semibold mb-3">Your Rating</label>
                    <div className="flex gap-1" id="star-rating">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <label key={star} className="cursor-pointer group">
                          <input
                            type="radio"
                            name="rating"
                            value={star}
                            required
                            className="sr-only peer"
                          />
                          <Star className="w-8 h-8 text-brand-white/20 peer-checked:text-brand-gold peer-checked:fill-brand-gold group-hover:text-brand-gold group-hover:fill-brand-gold transition-colors" />
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="reviewer-name" className="block text-brand-white/80 text-sm font-semibold mb-2">Name</label>
                    <input
                      type="text"
                      id="reviewer-name"
                      name="name"
                      required
                      placeholder="Your name"
                      className="w-full rounded-lg border border-brand-white/10 bg-brand-black px-4 py-3 text-brand-white placeholder:text-brand-white/30 focus:outline-none focus:ring-2 focus:ring-brand-red/50 transition"
                    />
                  </div>

                  <div>
                    <label htmlFor="review-comment" className="block text-brand-white/80 text-sm font-semibold mb-2">Comment</label>
                    <textarea
                      id="review-comment"
                      name="comment"
                      rows={4}
                      required
                      placeholder="Share your thoughts…"
                      className="w-full rounded-lg border border-brand-white/10 bg-brand-black px-4 py-3 text-brand-white placeholder:text-brand-white/30 focus:outline-none focus:ring-2 focus:ring-brand-red/50 transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-brand-red hover:bg-brand-red/90 text-white font-bold px-8 py-3 rounded-lg text-lg transition hover-glow"
                  >
                    Submit Review →
                  </button>
                </form>
              </motion.section>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/books">
                  <Button className="bg-brand-red hover:bg-brand-red/90 text-white font-bold px-8 py-4 text-lg hover-glow">
                    Explore All Books →
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="border-brand-gold text-brand-gold hover:bg-brand-gold/10 font-bold px-8 py-4 text-lg">
                    Get in Touch →
                  </Button>
                </Link>
              </div>

            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Author;
