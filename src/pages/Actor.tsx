import PageLayout from '@/components/PageLayout';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet-async';
import { ExternalLink, Play } from 'lucide-react';

const Actor = () => (
  <>
    <Helmet>
      <title>Amber Yaghi | Actor</title>
      <meta name="description" content="Amber Yaghi's acting work. View her IMDb profile and watch her first movie on Relay." />
      <link rel="canonical" href="https://amberyaghi.org/actor" />
    </Helmet>
    <PageLayout>
      <main className="min-h-screen bg-background text-foreground">
        <section className="max-w-4xl mx-auto px-6 pt-12 md:pt-20 pb-12">
          <p className="text-primary font-semibold mb-4">Actor</p>
          <h1 className="font-playfair font-bold text-4xl md:text-5xl mb-6">Amber Yaghi</h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">Amber is also an actress — follow her film work and check out her first movie.</p>
          <img src="/lovable-uploads/amber-portrait-1.jpeg" alt="Actress Amber Yaghi" className="w-full max-w-sm aspect-[1008/1043] object-cover rounded-lg" />
        </section>
        <section className="border-t border-border">
          <div className="max-w-4xl mx-auto px-6 py-12">
            <h2 className="font-playfair font-bold text-3xl mb-6">On Screen</h2>
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Button asChild size="lg"><a href="https://watchonrelay.com/app/t/ezwk-wgrm" target="_blank" rel="noopener noreferrer"><Play /> Watch Her First Movie</a></Button>
              <Button asChild variant="outline" size="lg"><a href="https://imdb.me/amberyaghi" target="_blank" rel="noopener noreferrer">IMDb Profile <ExternalLink /></a></Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </PageLayout>
  </>
);

export default Actor;