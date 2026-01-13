
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) throw error;

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error: any) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or email directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-brand-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-brand-white mb-6 animate-fade-in">
              Ready to Transform?
            </h2>
            <p className="text-brand-white/80 text-lg animate-slide-in-left">
              Let's connect about speaking engagements, collaborations, or consultation opportunities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-slide-in-left">
              <Card className="bg-gray-900/50 border-brand-red/30">
                <CardHeader>
                  <CardTitle className="font-playfair text-xl text-brand-white flex items-center gap-2">
                    <Mail className="w-5 h-5 text-brand-red" />
                    Get in Touch
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="bg-brand-black/50 border-brand-red/30 text-brand-white placeholder:text-brand-white/50"
                        required
                      />
                    </div>
                    
                    <div>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="bg-brand-black/50 border-brand-red/30 text-brand-white placeholder:text-brand-white/50"
                        required
                      />
                    </div>
                    
                    <div>
                      <Input
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        className="bg-brand-black/50 border-brand-red/30 text-brand-white placeholder:text-brand-white/50"
                      />
                    </div>
                    
                    <div>
                      <Textarea
                        placeholder="Your message..."
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        className="bg-brand-black/50 border-brand-red/30 text-brand-white placeholder:text-brand-white/50 min-h-32"
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-brand-red hover:bg-brand-red/80 text-brand-white font-bold py-3 hover-glow"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            <div className="animate-slide-in-right">
              <div className="space-y-8">
                <div>
                  <h3 className="font-playfair text-xl text-brand-white mb-4">Speaking & Workshops</h3>
                  <p className="text-brand-white/80 leading-relaxed">
                    Book Amber for transformative speaking engagements that challenge audiences 
                    to question their reality and step into their authentic power.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-playfair text-xl text-brand-white mb-4">Personal Consulting</h3>
                  <p className="text-brand-white/80 leading-relaxed">
                    Work one-on-one with Amber to unlock your authentic potential and create 
                    lasting positive transformation in your life.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-playfair text-xl text-brand-white mb-4">Collaborations</h3>
                  <p className="text-brand-white/80 leading-relaxed">
                    Partner with Amber for innovative approaches to motivational storytelling 
                    and authentic personal development.
                  </p>
                </div>
                
                <div className="bg-brand-red/10 border border-brand-red/30 rounded-lg p-6">
                  <p className="text-brand-white font-semibold mb-2">Direct Contact:</p>
                  <a 
                    href="mailto:collab@amberyaghi.org"
                    className="text-brand-gold hover:text-brand-red transition-colors"
                  >
                    collab@amberyaghi.org
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
