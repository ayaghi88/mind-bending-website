import { ExternalLink, Book, Calendar, FileText, Link2, Github, Heart, Award, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const LinksSection = () => {
  const links = [
    {
      title: "Speaker Profile",
      description: "View past speaking engagements and book me for your event",
      url: "https://app.eventraptor.com/speaker-profiles/amberyaghi",
      icon: Calendar,
    },
    {
      title: "All My Links",
      description: "AI tools, Amazon author page, books, and more",
      url: "https://linker.ee/ThisIsTheLinkInMyBio",
      icon: Link2,
    },
    {
      title: "Get Mind Bending on Amazon",
      description: "Order my book on Amazon",
      url: "https://amzn.to/4qsWj6B",
      icon: Book,
    },
    {
      title: "Free 21-Day Journal",
      description: "Download your Quantum Reality Master Journal",
      url: "https://drive.google.com/file/d/1XPJAP-qpdzN14vX9DWzW1Y1lQaPzPTnv/view?usp=drivesdk",
      icon: FileText,
    },
    {
      title: "GitHub",
      description: "Check out my projects and open source work",
      url: "https://github.com/ayaghi88",
      icon: Github,
    },
    {
      title: "Sponsor Me on GitHub",
      description: "Support my open source work",
      url: "https://github.com/sponsors/ayaghi88",
      icon: Heart,
      isSponsor: true,
    },
    {
      title: "Nominate for TED Talk",
      description: "Help amplify a voice that inspires change!",
      url: "https://speaker-nominations.ted.com",
      icon: Award,
    },
    {
      title: "AI Academy for Kids",
      description: "Learn AI through stories, games & projects — ages 7–16",
      url: "https://ai-academy.me",
      icon: GraduationCap,
    },
  ];

  return (
    <section id="links" className="py-20 bg-brand-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-playfair font-bold text-3xl md:text-4xl text-brand-white mb-4"
          >
            Connect With Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-brand-white/60 text-lg"
          >
            Explore more ways to engage with my work
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {links.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              {'isSponsor' in link && link.isSponsor ? (
                <div className="bg-white border border-border rounded-lg p-6 hover:border-brand-red hover:shadow-md transition-all duration-300 h-full flex flex-col items-center justify-center">
                  <iframe
                    src="https://github.com/sponsors/ayaghi88/card"
                    title="Sponsor ayaghi88"
                    height="225"
                    width="100%"
                    style={{ border: 0, maxWidth: '600px' }}
                  />
                </div>
              ) : (
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white border border-border rounded-lg p-6 hover:border-brand-red hover:shadow-md transition-all duration-300 block h-full hover:-translate-y-1"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-brand-red/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-brand-red/20 transition-colors">
                      <link.icon className="w-6 h-6 text-brand-red" />
                    </div>
                    <h3 className="font-playfair text-lg text-brand-white mb-2 group-hover:text-brand-red transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-brand-white/60 text-sm mb-3">
                      {link.description}
                    </p>
                    <ExternalLink className="w-4 h-4 text-brand-red/40 group-hover:text-brand-red transition-colors" />
                  </div>
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LinksSection;
