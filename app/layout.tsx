import type { Metadata } from 'next';
import './globals.css';
import SkipToContent from '@/components/skip-to-content';

export const metadata: Metadata = {
  title: 'Roxelence — Digital Design & Software Studio',
  description:
    'Roxelence is an independent digital design and software development studio. We combine considered design with practical engineering to build websites, ecommerce storefronts, and custom software.',
  keywords: [
    'Digital Studio India',
    'Website Design & Engineering',
    'Ecommerce Development',
    'Custom Web Applications',
    'Next.js Studio',
    'UI/UX Design',
    'Roxelence',
  ],
  authors: [{ name: 'Roxelence Studio' }],
  openGraph: {
    title: 'Roxelence — Digital Design & Software Studio',
    description:
      'We combine considered design with practical engineering to build websites, ecommerce storefronts, and custom software.',
    url: 'https://roxelence.com',
    siteName: 'Roxelence',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body id="top" className="bg-bg-warm text-ink antialiased selection:bg-ink selection:text-lime-accent">
        <SkipToContent />
        {children}
      </body>
    </html>
  );
}
