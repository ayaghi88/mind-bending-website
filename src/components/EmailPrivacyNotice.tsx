import { Link } from 'react-router-dom';

const EmailPrivacyNotice = () => (
  <p className="text-muted-foreground text-sm leading-relaxed">
    Your name, email, and message are used to respond to your request, not to subscribe you to marketing.
    Please don’t include sensitive personal information. Read our{' '}
    <Link to="/terms-privacy" className="text-primary underline underline-offset-4">Terms &amp; Privacy</Link>.
  </p>
);

export default EmailPrivacyNotice;