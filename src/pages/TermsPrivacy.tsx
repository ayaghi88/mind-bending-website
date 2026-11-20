import PageLayout from '@/components/PageLayout';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const TermsPrivacy = () => (
  <>
    <Helmet>
      <title>Terms &amp; Privacy | Amber Yaghi</title>
      <meta name="description" content="Website terms, email privacy, reader updates, analytics information, and privacy requests for Amber Yaghi's website." />
      <link rel="canonical" href="https://amberyaghi.org/terms-privacy" />
    </Helmet>
    <PageLayout>
      <main className="bg-background text-foreground min-h-screen">
        <div className="max-w-3xl mx-auto px-6 pt-12 md:pt-20 pb-16 space-y-10">
          <header>
            <h1 className="font-playfair font-bold text-4xl mb-4">Terms &amp; Privacy</h1>
            <p className="text-muted-foreground">Effective November 20, 2026 · Amber Yaghi · amberyaghi.org</p>
          </header>
          <section className="space-y-4">
            <h2 className="font-playfair font-bold text-2xl">Information you share</h2>
            <p>When you send an inquiry, we receive the name, email address, subject, selected services, and message you provide. Email requests also include any information you send through your own email provider. We use this information to respond, provide requested material, and manage our correspondence.</p>
            <p>Please do not send passwords, payment card details, medical records, or other sensitive personal information. Email is not guaranteed to be secure.</p>
          </section>
          <section className="space-y-4">
            <h2 className="font-playfair font-bold text-2xl">Email privacy &amp; reader updates</h2>
            <p>A contact inquiry or Chapter One request alone does not subscribe you to promotional emails. Reader updates are optional and require your request. You can withdraw that request at any time by replying “unsubscribe” or emailing contact@amberyaghi.org. We will stop optional updates when you opt out; we may still respond to requests you initiate.</p>
            <p>We do not sell email addresses. We share correspondence only with providers needed to operate the website and deliver email, or when required by law. Contact form messages are processed through our website hosting services and Resend, then delivered to Amber’s inbox. Email-only reader requests do not use an embedded MailerLite signup form.</p>
          </section>
          <section className="space-y-4">
            <h2 className="font-playfair font-bold text-2xl">Analytics, cookies &amp; external services</h2>
            <p>This website uses Google Analytics and Microsoft Clarity to understand visits and website interactions. These services may collect device and browser information, approximate location, page visits, interaction data, and online identifiers, and may use cookies or similar technologies. Clarity may record website interactions. You can manage cookies through your browser; blocking them may affect embedded services.</p>
            <p>Book purchases and embedded content are handled by third parties, including Lulu, Payhip, and GitHub. IMDb and Relay links open external websites. Their own privacy policies, purchase terms, and cookie practices apply. We do not receive your full payment card details through this website.</p>
            <p>Learn more from <a className="text-primary underline" href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google’s Privacy Policy</a>, <a className="text-primary underline" href="https://privacy.microsoft.com/privacystatement" target="_blank" rel="noopener noreferrer">Microsoft’s Privacy Statement</a>, and <a className="text-primary underline" href="https://www.lulu.com/privacy-policy" target="_blank" rel="noopener noreferrer">Lulu’s Privacy Policy</a>.</p>
          </section>
          <section className="space-y-4">
            <h2 className="font-playfair font-bold text-2xl">Retention &amp; your choices</h2>
            <p>Our policy is to retain correspondence only as needed to handle your request, maintain necessary business records, or meet legal obligations. Provider retention and backups may differ. Reasonable safeguards are used, but no online service can guarantee absolute security.</p>
            <p>Depending on where you live, you may have rights to access, correct, delete, or restrict use of your personal information, or withdraw consent. To make a request or ask about retention, email <a className="text-primary underline" href="mailto:contact@amberyaghi.org">contact@amberyaghi.org</a>. We may need to verify your identity and retain information where legally required. You may also contact your local data protection authority.</p>
            <p>The website is not intended to collect personal information from children under 13. If a child has submitted personal information, a parent or guardian can contact us to request removal.</p>
          </section>
          <section className="space-y-4">
            <h2 className="font-playfair font-bold text-2xl">Website terms</h2>
            <p>Content is provided for general informational and educational purposes, not individualized medical, mental health, legal, or financial advice. Outcomes are not guaranteed. Consult an appropriately qualified professional for advice about your circumstances.</p>
            <p>Writing, images, and other original materials remain the property of their respective owners. Do not reproduce or distribute them without permission, except where permitted by law. Do not misuse the website, submit unlawful content, or attempt unauthorized access.</p>
            <p>An inquiry does not create a service agreement or reserve a booking. Availability must be confirmed separately; app creation is currently fully booked. Purchase pricing, delivery, and refunds are governed by the seller’s terms shown at checkout. Nothing here limits rights you have under applicable law.</p>
          </section>
          <section className="space-y-4">
            <h2 className="font-playfair font-bold text-2xl">Changes &amp; contact</h2>
            <p>Updates to this notice will appear here with a revised effective date. For privacy questions, permissions, or website concerns, contact Amber Yaghi at <a className="text-primary underline" href="mailto:contact@amberyaghi.org">contact@amberyaghi.org</a>.</p>
          </section>
        </div>
      </main>
      <Footer />
    </PageLayout>
  </>
);

export default TermsPrivacy;