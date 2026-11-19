import PageLayout from '@/components/PageLayout';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet-async';
import { Mail, ExternalLink } from 'lucide-react';

const AccidentalGroupie = () => (
  <>
    <Helmet>
      <title>The Accidental Groupie — Debut Novel by Amber Yaghi</title>
      <meta name="description" content="The Accidental Groupie, the upcoming debut novel by author and screenwriter Amber Yaghi. Reader updates, the official cover reveal, and Chapter One." />
      <link rel="canonical" href="https://amberyaghi.org/the-accidental-groupie" />
    </Helmet>
    <PageLayout>
      <main className="bg-background text-foreground">
        <section className="max-w-3xl mx-auto px-6 pt-12 md:pt-20 pb-12">
          <p className="text-primary font-semibold text-sm mb-5">Upcoming Debut Novel · Ember Core Studio</p>
          <h1 className="font-playfair font-bold text-4xl md:text-5xl leading-tight mb-6">The Accidental Groupie</h1>
          <p className="font-playfair italic text-xl md:text-2xl leading-relaxed mb-8">She never planned to be backstage. Now she can’t walk away.</p>
          <p className="text-muted-foreground text-lg leading-relaxed">Written by Amber Yaghi—author, screenwriter, and creator—<em>The Accidental Groupie</em> is a gripping, big-screen story currently in progress. Join the private reader list for exclusive updates, the official cover reveal, and a free advance copy of Chapter One.</p>
        </section>
        <section className="bg-muted/50 border-y border-border">
          <div className="max-w-3xl mx-auto px-6 py-12">
            <h2 className="font-playfair font-bold text-2xl mb-4">Get Chapter One Before Release Day</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">Receive the opening chapter straight to your inbox—plus behind-the-scenes updates from the page to the screen.</p>
            <Button asChild size="lg" className="h-auto min-h-11 whitespace-normal text-center">
              <a href="mailto:contact@amberyaghi.org?subject=The%20Accidental%20Groupie%20%E2%80%94%20Reader%20List&body=Please%20add%20me%20to%20the%20reader%20list%20for%20The%20Accidental%20Groupie%20and%20send%20Chapter%20One%20when%20available."><Mail /> Request Chapter One by Email</a>
            </Button>
          </div>
        </section>
        <section className="max-w-3xl mx-auto px-6 py-12">
          <h2 className="font-playfair font-bold text-2xl mb-6">About Amber Yaghi</h2>
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <img src="/lovable-uploads/amber-portrait-1.jpeg" alt="Amber Yaghi, author of The Accidental Groupie" className="w-32 aspect-[3/4] object-cover rounded-lg" loading="lazy" />
            <div>
              <p className="text-muted-foreground leading-relaxed mb-4">Amber is a writer, technologist, and storyteller crafting high-stakes, character-driven stories built for both readers and cinema. <em>The Accidental Groupie</em> will be published independently through Ember Core Studio.</p>
              <Button asChild variant="link" className="px-0"><a href="https://embercorestudio.org" target="_blank" rel="noopener noreferrer">Imprint: Ember Core Studio <ExternalLink /></a></Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </PageLayout>
  </>
);

export default AccidentalGroupie;