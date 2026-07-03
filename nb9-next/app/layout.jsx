import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
  display: 'swap',
  variable: '--font-inter',
});

const description =
  'Naked By 9 — guitar-driven indie rock from Kingston, Ontario. Debut single "Losing You" out now. Music, tour dates, videos, and contact.';

export const metadata = {
  metadataBase: new URL('https://nakedbyninemusic.com'),
  title: 'Naked By 9 | Official Band Website',
  description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Naked By 9',
    description,
    url: '/',
    siteName: 'Naked By 9',
    type: 'website',
    locale: 'en_CA',
    images: [
      {
        url: '/images/hero.jpg',
        width: 6000,
        height: 4000,
        alt: 'Naked By 9',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Naked By 9',
    description,
    images: ['/images/hero.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
