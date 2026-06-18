import "./global.css";
import { Inter, Space_Grotesk } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

export const metadata = {
  title: `Tom Effernelli - Developer & Graphic Designer`,
  description: `My personal portfolio showcasing my development and graphic design work.`,
  keywords: ['Tom Effernelli', 'Developer', 'Portfolio', 'Graphic Designer', 'React', 'Next.js'],
  authors: [{ name: 'Tom Effernelli' }],
  creator: 'Tom Effernelli',
  openGraph: {
    title: 'Tom Effernelli - Developer & Graphic Designer',
    description: 'My personal portfolio showcasing my development and graphic design work.',
    url: 'https://tom-effernelli.vercel.app/',
    siteName: 'Tom Effernelli - Developer',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Tom Effernelli - Developer & Graphic Designer Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tom Effernelli - Developer & Graphic Designer',
    description: 'My personal portfolio showcasing my development and graphic design work.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.className} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
