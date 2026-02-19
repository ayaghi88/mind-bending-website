import PageLayout from '@/components/PageLayout';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const testimonials = [
  { quote: "Amber's work in Mind Bending is a masterclass in bridging quantum thinking with everyday reality. Her ability to distill complex ideas into actionable strategies is truly remarkable.", author: "Dr. Husam M. Yaghi", title: "PhD, Researcher & Technologist", rating: 5 },
  { quote: "This book changed the way I think about manifestation and personal growth. Amber writes with a rawness and authenticity you rarely find.", author: "Verified Reader", title: "Amazon Review", rating: 5 },
  { quote: "Mind Bending isn't just a book — it's a toolkit for rewiring your mindset. Practical, powerful, and unapologetically real.", author: "Verified Reader", title: "Amazon Review", rating: 5 },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className={`w-5 h-5 ${i < rating ? 'text-brand-gold fill-brand-gold' : 'text-brand-white/20'}`} />
    ))}
  </div>
);

const Reviews = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [selectedStar, setSelectedStar] = useState(0);
  const [submittedReviews, setSubmittedReviews] = useState<any[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  const fetchReviews = async () => {
    const { data } = await supabase.from('reviews').select('*').order('created_at', { ascending: false });
    if (data) setSubmittedReviews(data);
  };

  useEffect(() => { fetchReviews(); }, []);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();
    return () => { emblaApi.off('select', onSelect); };
  }, [emblaApi]);

  return (
    <>
      <Helmet>
        <title>Reviews & Testimonials | Amber Yaghi</title>
        <meta name="description" content="Read reviews and testimonials for Amber Yaghi's books including Mind Bending: The Quantum Reality Strategist. Leave your own rating and review." />
        <link rel="canonical" href="https://amberyaghi.org/reviews" />
      </Helmet>
      <PageLayout>
        <div className="min-h-screen bg-brand-black">
          <div className="pt-20 lg:pt-12 pb-20">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-16 text-center">
                  <h1 className="font-playfair font-black text-4xl md:text-5xl lg:text-6xl text-brand-white mb-4">Reviews & Testimonials</h1>
                  <p className="text-brand-white/60 text-lg md:text-xl max-w-2xl mx-auto">What readers, professionals, and reviewers are saying about Amber's work.</p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="flex flex-col items-center mb-16">
                  <div className="flex gap-1 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (<Star key={i} className="w-8 h-8 text-brand-gold fill-brand-gold" />))}
                  </div>
                  <p className="text-brand-white/50 text-sm">Based on reader reviews</p>
                </motion.div>

                <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-20">
                  <h2 className="font-playfair font-bold text-3xl text-brand-white mb-8">Featured Testimonials</h2>
                  <div className="relative">
                    <div className="overflow-hidden" ref={emblaRef}>
                      <div className="flex">
                        {testimonials.map((t, i) => (
                          <div key={i} className="flex-[0_0_100%] min-w-0 px-2 md:flex-[0_0_80%] lg:flex-[0_0_60%]">
                            <div className="bg-white/5 border border-brand-white/10 rounded-xl p-8 md:p-10 relative">
                              <Quote className="w-10 h-10 text-brand-red/30 absolute top-6 right-6" />
                              <StarRating rating={t.rating} />
                              <blockquote className="text-brand-white/80 text-lg leading-relaxed my-6 italic">"{t.quote}"</blockquote>
                              <div>
                                <p className="text-brand-white font-bold">{t.author}</p>
                                <p className="text-brand-white/50 text-sm">{t.title}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-4 mt-6">
                      <button onClick={scrollPrev} className="w-10 h-10 rounded-full border border-brand-white/20 flex items-center justify-center text-brand-white/60 hover:text-brand-white hover:border-brand-red transition" aria-label="Previous testimonial"><ChevronLeft className="w-5 h-5" /></button>
                      <div className="flex gap-2">
                        {testimonials.map((_, i) => (<button key={i} className={`w-2 h-2 rounded-full transition-all ${i === selectedIndex ? 'bg-brand-red w-6' : 'bg-brand-white/20'}`} onClick={() => emblaApi?.scrollTo(i)} aria-label={`Go to testimonial ${i + 1}`} />))}
                      </div>
                      <button onClick={scrollNext} className="w-10 h-10 rounded-full border border-brand-white/20 flex items-center justify-center text-brand-white/60 hover:text-brand-white hover:border-brand-red transition" aria-label="Next testimonial"><ChevronRight className="w-5 h-5" /></button>
                    </div>
                  </div>
                </motion.section>

                <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                  <h2 className="font-playfair font-bold text-3xl text-brand-white mb-8">Leave a Review</h2>
                  <form className="bg-white/5 border border-brand-white/10 rounded-xl p-8 md:p-10 space-y-8 max-w-2xl" onSubmit={async (e) => {
                    e.preventDefault();
                    setSubmitting(true);
                    const form = e.currentTarget;
                    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
                    const book = (form.elements.namedItem('book') as HTMLSelectElement).value;
                    const comment = (form.elements.namedItem('comment') as HTMLTextAreaElement).value;
                    const { error } = await supabase.from('reviews').insert({ name, book, rating: selectedStar, comment });
                    setSubmitting(false);
                    if (error) {
                      toast({ title: 'Error', description: 'Something went wrong. Please try again.', variant: 'destructive' });
                    } else {
                      toast({ title: 'Thank you!', description: 'Your review has been submitted.' });
                      setSelectedStar(0); setHoveredStar(0); form.reset(); fetchReviews();
                    }
                  }}>
                    <div>
                      <label className="block text-brand-white/80 text-sm font-semibold mb-3">Your Rating</label>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button key={star} type="button" onMouseEnter={() => setHoveredStar(star)} onMouseLeave={() => setHoveredStar(0)} onClick={() => setSelectedStar(star)} className="transition-transform hover:scale-110 focus:outline-none" aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}>
                            <Star className={`w-10 h-10 transition-colors ${star <= (hoveredStar || selectedStar) ? 'text-brand-gold fill-brand-gold' : 'text-brand-white/20'}`} />
                          </button>
                        ))}
                      </div>
                      {selectedStar > 0 && <p className="text-brand-gold text-sm mt-2 font-medium">{selectedStar} out of 5 stars</p>}
                    </div>
                    <div>
                      <label htmlFor="reviewer-name" className="block text-brand-white/80 text-sm font-semibold mb-2">Name</label>
                      <input type="text" id="reviewer-name" name="name" required placeholder="Your name" className="w-full rounded-lg border border-brand-white/10 bg-brand-black px-4 py-3 text-brand-white placeholder:text-brand-white/30 focus:outline-none focus:ring-2 focus:ring-brand-red/50 transition" />
                    </div>
                    <div>
                      <label htmlFor="book-title" className="block text-brand-white/80 text-sm font-semibold mb-2">Which book?</label>
                      <select id="book-title" name="book" required className="w-full rounded-lg border border-brand-white/10 bg-brand-black px-4 py-3 text-brand-white focus:outline-none focus:ring-2 focus:ring-brand-red/50 transition appearance-none">
                        <option value="">Select a book…</option>
                        <option value="Mind Bending: The Quantum Reality Strategist">Mind Bending: The Quantum Reality Strategist</option>
                        <option value="Business Grants Are FREE99">Business Grants Are FREE99</option>
                        <option value="Quick Inquiry Removal Guide">Quick Inquiry Removal Guide</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="review-comment" className="block text-brand-white/80 text-sm font-semibold mb-2">Your Review</label>
                      <textarea id="review-comment" name="comment" rows={5} required placeholder="Share your thoughts…" className="w-full rounded-lg border border-brand-white/10 bg-brand-black px-4 py-3 text-brand-white placeholder:text-brand-white/30 focus:outline-none focus:ring-2 focus:ring-brand-red/50 transition resize-none" />
                    </div>
                    <button type="submit" disabled={selectedStar === 0 || submitting} className="bg-brand-red hover:bg-brand-red/90 text-white font-bold px-8 py-3 rounded-lg text-lg transition hover-glow disabled:opacity-40 disabled:cursor-not-allowed">
                      {submitting ? 'Submitting…' : 'Submit Review →'}
                    </button>
                  </form>
                </motion.section>

                {submittedReviews.length > 0 && (
                  <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-20">
                    <h2 className="font-playfair font-bold text-3xl text-brand-white mb-8">Reader Reviews</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      {submittedReviews.map((review) => (
                        <div key={review.id} className="bg-white/5 border border-brand-white/10 rounded-xl p-6">
                          <StarRating rating={review.rating} />
                          <p className="text-brand-white/80 mt-3 mb-4 leading-relaxed">"{review.comment}"</p>
                          <div className="flex items-center justify-between">
                            <p className="text-brand-white font-semibold text-sm">{review.name}</p>
                            <p className="text-brand-white/40 text-xs">{review.book}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.section>
                )}

              </div>
            </div>
          </div>
          <Footer />
        </div>
      </PageLayout>
    </>
  );
};

export default Reviews;
