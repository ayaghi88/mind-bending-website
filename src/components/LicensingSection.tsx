
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
    programType: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link
    const subject = encodeURIComponent('Curriculum Licensing Inquiry');
    const body = encodeURIComponent(`
Name: ${formData.name}
Organization: ${formData.organization}
Location: ${formData.location}
Program Type: ${formData.programType}

Message:
${formData.message}
    `);
    
    window.location.href = `mailto:collab@amberyaghi.org?subject=${subject}&body=${body}`;
    
    toast({
      title: "Inquiry Sent!",
      description: "Your licensing inquiry has been prepared. Please send the email to complete your request.",
    });
    
    // Reset form
    setFormData({
      name: '',
      organization: '',
      location: '',
      programType: '',
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
          <Card className="bg-gray-900/50 border-brand-red/30">
            <CardHeader className="text-center">
              <CardTitle className="font-playfair text-2xl md:text-3xl text-brand-white">
                License "From Fake to Free"
              </CardTitle>
              <CardDescription className="text-brand-white/80 text-lg">
                Transform your program with trauma-informed curriculum designed for real change.
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
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
                    placeholder="Organization Name"
                    value={formData.organization}
                    onChange={(e) => handleInputChange('organization', e.target.value)}
                    className="bg-brand-black/50 border-brand-red/30 text-brand-white placeholder:text-brand-white/50"
                    required
                  />
                </div>
                
                <div>
                  <Input
                    placeholder="Location (City, State)"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    className="bg-brand-black/50 border-brand-red/30 text-brand-white placeholder:text-brand-white/50"
                    required
                  />
                </div>
                
                <div>
                  <Select onValueChange={(value) => handleInputChange('programType', value)} required>
                    <SelectTrigger className="bg-brand-black/50 border-brand-red/30 text-brand-white">
                      <SelectValue placeholder="Type of Program" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 border-brand-red/30">
                      <SelectItem value="school" className="text-brand-white hover:bg-brand-red/20">Educational Institution</SelectItem>
                      <SelectItem value="rehabilitation" className="text-brand-white hover:bg-brand-red/20">Rehabilitation Center</SelectItem>
                      <SelectItem value="prison" className="text-brand-white hover:bg-brand-red/20">Prison/Correctional Facility</SelectItem>
                      <SelectItem value="shelter" className="text-brand-white hover:bg-brand-red/20">Shelter/Transitional Housing</SelectItem>
                      <SelectItem value="reentry" className="text-brand-white hover:bg-brand-red/20">Reentry Program</SelectItem>
                      <SelectItem value="other" className="text-brand-white hover:bg-brand-red/20">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Textarea
                    placeholder="Tell us about your program and how you'd like to use the curriculum..."
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="bg-brand-black/50 border-brand-red/30 text-brand-white placeholder:text-brand-white/50 min-h-32"
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-brand-red hover:bg-brand-red/80 text-brand-white font-bold py-4 text-lg hover-glow"
                >
                  Send Licensing Inquiry
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
