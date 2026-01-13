import { ExternalLink, Book, Calendar, FileText, Link2 } from 'lucide-react';

const LinksSection = () => {
  const links = [
    {
      title: "Speaker Profile",
      description: "View my speaking engagements and book me for your event",
      url: "https://app.eventraptor.com/speaker-profiles/amber-yaghi",
      icon: Calendar,
    },
    {
      title: "All My Links",
      description: "Connect with me across all platforms",
      url: "https://linktr.ee/ThisIsTheLinkInMyBio",
      icon: Link2,
    },
    {
      title: "Get Mind Bending on Amazon",
      description: "Order my book on Amazon",
      url: "https://amzn.to/4qsWj6B",
      icon: Book,
    },
    {
      title: "Media Kit",
      description: "Download my press kit and resources",
      url: "https://drive.google.com/file/d/1XPJAP-qpdzN14vX9DWzW1Y1lQaPzPTnv/view?usp=drivesdk",
      icon: FileText,
    },
  ];

  return (
    <section id="links" className="py-20 bg-brand-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair font-bold text-3xl md:text-4xl text-brand-white mb-4 animate-fade-in">
            Connect With Me
          </h2>
          <p className="text-brand-white/80 text-lg animate-slide-in-left">
            Explore more ways to engage with my work
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-900/50 border border-brand-gold/30 rounded-lg p-6 hover:border-brand-gold transition-all duration-300 hover:bg-gray-900/70 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-brand-red/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-brand-red/30 transition-colors">
                  <link.icon className="w-6 h-6 text-brand-red" />
                </div>
                <h3 className="font-playfair text-lg text-brand-white mb-2 group-hover:text-brand-gold transition-colors">
                  {link.title}
                </h3>
                <p className="text-brand-white/60 text-sm mb-3">
                  {link.description}
                </p>
                <ExternalLink className="w-4 h-4 text-brand-gold/60 group-hover:text-brand-gold transition-colors" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LinksSection;
