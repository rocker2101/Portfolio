import type { Metadata } from 'next';
import './globals.css';
import SmoothScroll from '@/components/smooth-scroll';

export const metadata: Metadata = {
  title: 'Roxelence — Digital Products Studio',
  description:
    'Roxelence helps startups and growing businesses design and develop websites, ecommerce experiences and custom software that are fast, reliable and built for the long run.',
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
    title: 'Roxelence — Digital Products Studio',
    description:
      'We build digital experiences that work. Fast, reliable websites, ecommerce flagships, and custom software.',
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
      <body id="top" className="bg-[#070807] text-white antialiased selection:bg-[#d4f455] selection:text-[#070807]">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
