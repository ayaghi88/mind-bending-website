import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useSearchParams } from 'react-router-dom';

const serviceOptions = [
  { id: 'publish', label: 'Publish a Book' },
  { id: 'app', label: 'App Creation' },
  { id: 'dns', label: 'DNS / Technical Setup' },
  { id: 'speaking', label: 'Speaking Engagement' },
  { id: 'media', label: 'Interview / Media Request' },
  { id: 'review', label: 'Leave a Review / Feedback' },
];

const Contact = () => {
  const [searchParams] = useSearchParams();
  const isReview = searchParams.get('review') === 'true';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: isReview ? 'Review / Feedback' : '',
    message: '',
    services: isReview ? ['review'] : [] as string[],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const toggleService = (id: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(id)
        ? prev.services.filter(s => s !== id)
        : [...prev.services, id],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const selectedServices = serviceOptions
      .filter(s => formData.services.includes(s.id))
      .map(s => s.label)
      .join(', ');

    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          ...formData,
          subject: formData.subject || 'New Inquiry',
          message: `Services requested: ${selectedServices || 'None specified'}\n\n${formData.message}`,
        },
      });
      if (error) throw error;
      toast({ title: "Inquiry Sent!", description: "Thank you! I'll get back to you soon." });
      setFormData({ name: '', email: '', subject: '', message: '', services: [] });
    } catch (error: any) {
      console.error('Error sending email:', error);
      toast({ title: "Error", description: "Failed to send. Please email amber@amberyaghi.org directly.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact & Book Me | Amber Yaghi</title>
        <meta name="description" content="Work with Amber Yaghi — inquire about publishing services, app creation, DNS setup, speaking engagements, or media requests." />
        <link rel="canonical" href="https://amberyaghi.org/contact" />
      </Helmet>
      <div className="min-h-screen bg-brand-black">
        <Navigation />
        <div className="pt-24 pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="font-playfair font-black text-4xl md:text-5xl text-brand-white mb-4 animate-fade-in">
                {isReview ? 'Leave a Review' : 'Work With Amber Yaghi'}
              </h1>
              <p className="text-brand-white/70 text-lg mb-12 animate-slide-in-left">
                {isReview
                  ? 'Have you read Mind Bending, used Lovable Learner, or worked with Amber? Share your experience below — your feedback means the world!'
                  : 'To inquire about publishing services, app creation, DNS setup, or speaking engagements, please use the form below.'}
              </p>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="animate-slide-in-left">
                  <Card className="bg-white border-border shadow-sm">
                    <CardHeader>
                      <CardTitle className="font-playfair text-xl text-brand-white flex items-center gap-2">
                        <Mail className="w-5 h-5 text-brand-red" />
                        Submit Inquiry
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <Input placeholder="Your Name" value={formData.name} onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))} className="bg-brand-black border-border text-brand-white placeholder:text-brand-white/40" required />
                        <Input type="email" placeholder="Your Email" value={formData.email} onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))} className="bg-brand-black border-border text-brand-white placeholder:text-brand-white/40" required />
                        <Input placeholder="Subject" value={formData.subject} onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))} className="bg-brand-black border-border text-brand-white placeholder:text-brand-white/40" />

                        <div className="space-y-3">
                          <p className="text-brand-white/60 text-sm font-semibold">I'm interested in:</p>
                          {serviceOptions.map((opt) => (
                            <div key={opt.id} className="flex items-center gap-3">
                              <Checkbox id={opt.id} checked={formData.services.includes(opt.id)} onCheckedChange={() => toggleService(opt.id)} className="border-brand-red/50 data-[state=checked]:bg-brand-red" />
                              <label htmlFor={opt.id} className="text-brand-white/70 text-sm cursor-pointer">{opt.label}</label>
                            </div>
                          ))}
                        </div>

                        <Textarea placeholder="Tell me about your project..." value={formData.message} onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))} className="bg-brand-black border-border text-brand-white placeholder:text-brand-white/40 min-h-32" required />

                        <Button type="submit" disabled={isSubmitting} className="w-full bg-brand-red hover:bg-brand-red/90 text-white font-bold py-3 hover-glow">
                          {isSubmitting ? (<><Loader2 className="w-4 h-4 mr-2 animate-spin" />Sending...</>) : 'Submit Inquiry →'}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>

                <div className="animate-slide-in-right space-y-8">
                  <div>
                    <h3 className="font-playfair text-xl text-brand-white mb-3">Direct Contact</h3>
                    <a href="mailto:amber@amberyaghi.org" className="text-brand-red hover:underline transition-colors text-lg block">
                      amber@amberyaghi.org
                    </a>
                    <a href="mailto:contact@amberyaghi.org" className="text-brand-red hover:underline transition-colors text-lg block">
                      contact@amberyaghi.org
                    </a>
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl text-brand-white mb-3">Connect</h3>
                    <div className="space-y-2">
                      <a href="https://facebook.com/authoramberyaghi" target="_blank" rel="noopener noreferrer" className="block text-brand-white/60 hover:text-brand-red transition-colors">Facebook</a>
                      <a href="https://tiktok.com/@authoramberyaghi" target="_blank" rel="noopener noreferrer" className="block text-brand-white/60 hover:text-brand-red transition-colors">TikTok</a>
                      <a href="https://x.com/amber_yaghi" target="_blank" rel="noopener noreferrer" className="block text-brand-white/60 hover:text-brand-red transition-colors">X (Twitter)</a>
                      <a href="https://github.com/ayaghi88" target="_blank" rel="noopener noreferrer" className="block text-brand-white/60 hover:text-brand-red transition-colors">GitHub</a>
                    </div>
                  </div>
                  <div className="bg-white border border-border rounded-lg p-6 shadow-sm">
                    <p className="text-brand-white/60 italic">
                      We'd love your feedback on our services, books, or apps. Don't hesitate to share your thoughts!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
