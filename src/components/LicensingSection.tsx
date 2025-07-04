
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const LicensingSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    location: '',
    serviceType: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link
    const subject = encodeURIComponent('Transformational Consulting Inquiry');
    const body = encodeURIComponent(`
Name: ${formData.name}
Organization: ${formData.organization}
Location: ${formData.location}
Service Type: ${formData.serviceType}

Message:
${formData.message}
    `);
    
    window.location.href = `mailto:collab@amberyaghi.org?subject=${subject}&body=${body}`;
    
    toast({
      title: "Inquiry Sent!",
      description: "Your consultation inquiry has been prepared. Please send the email to complete your request.",
    });
    
    // Reset form
    setFormData({
      name: '',
      organization: '',
      location: '',
      serviceType: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section id="licensing" className="py-20 bg-brand-black">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="bg-gray-900/50 border-brand-gold/30">
            <CardHeader className="text-center">
              <CardTitle className="font-playfair text-2xl md:text-3xl text-brand-white">
                Work With Amber
              </CardTitle>
              <CardDescription className="text-brand-white/80 text-lg">
                Ready to transform your life or organization while staying authentically you?
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="bg-brand-black/50 border-brand-gold/30 text-brand-white placeholder:text-brand-white/50"
                    required
                  />
                </div>
                
                <div>
                  <Input
                    placeholder="Organization Name (if applicable)"
                    value={formData.organization}
                    onChange={(e) => handleInputChange('organization', e.target.value)}
                    className="bg-brand-black/50 border-brand-gold/30 text-brand-white placeholder:text-brand-white/50"
                  />
                </div>
                
                <div>
                  <Input
                    placeholder="Location (City, State)"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    className="bg-brand-black/50 border-brand-gold/30 text-brand-white placeholder:text-brand-white/50"
                    required
                  />
                </div>
                
                <div>
                  <Select onValueChange={(value) => handleInputChange('serviceType', value)} required>
                    <SelectTrigger className="bg-brand-black/50 border-brand-gold/30 text-brand-white">
                      <SelectValue placeholder="Type of Service" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 border-brand-gold/30">
                      <SelectItem value="individual" className="text-brand-white hover:bg-brand-gold/20">Individual Consulting</SelectItem>
                      <SelectItem value="speaking" className="text-brand-white hover:bg-brand-gold/20">Motivational Speaking</SelectItem>
                      <SelectItem value="workshop" className="text-brand-white hover:bg-brand-gold/20">Workshop/Training</SelectItem>
                      <SelectItem value="coaching" className="text-brand-white hover:bg-brand-gold/20">Life Coaching</SelectItem>
                      <SelectItem value="storytelling" className="text-brand-white hover:bg-brand-gold/20">Storytelling Training</SelectItem>
                      <SelectItem value="other" className="text-brand-white hover:bg-brand-gold/20">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Textarea
                    placeholder="Tell me about your goals and how I can help you stay true to yourself while achieving transformation..."
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="bg-brand-black/50 border-brand-gold/30 text-brand-white placeholder:text-brand-white/50 min-h-32"
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-brand-gold hover:bg-brand-gold/80 text-brand-black font-bold py-4 text-lg hover-glow"
                >
                  Start Your Transformation Journey
                </Button>
              </form>
              
              <p className="text-brand-white/60 text-sm text-center mt-4">
                Inquiries sent to: collab@amberyaghi.org
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LicensingSection;
