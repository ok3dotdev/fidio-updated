import '../styles/globals.scss';
import '../styles/features/tailwind.css';

import { Lexend } from 'next/font/google';
import Analytics from '@/components/Analytics';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/provider';
import BrowseHeader from '@/components/Layouts/browse/BrowseHeader';
import BrowseFooter from '@/components/Layouts/browse/BrowseFooter';
import HeadSEO from '@/customModules/features/head-seo';
import { siteData } from '@/customModules/features/seo-data';
import { cn } from '@/lib/utils';

const lexend = Lexend({ subsets: ['latin'] });

export const metadata = {
  title: 'Fidio Inc. - ENJOY YOUR BEST AFRICAN MUSICAL CONCERTS',
  description:
    'Enjoy Your Best African Musical Concerts At The Comfort Of Your Home',
  icons: {
    icon: '/img/internal/group4.png',
    shortcut: '/img/internal/group4.png',
    apple: '/img/internal/group4.png',
  },
  openGraph: {
    title: 'Fidio Inc. - ENJOY YOUR BEST AFRICAN MUSICAL CONCERTS',
    description:
      'Enjoy Your Best African Musical Concerts At The Comfort Of Your Home',
    url: 'https://www.fidio.ca/',
    siteName: 'Fidio Inc.',
    images: [
      {
        url: '/img/internal/group4.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fidio Inc. - ENJOY YOUR BEST AFRICAN MUSICAL CONCERTS',
    description:
      'Enjoy Your Best African Musical Concerts At The Comfort Of Your Home',
    images: ['/img/internal/group4.png'],
  },
  alternates: {
    canonical: 'https://www.fidio.ca/',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${lexend.className} antialiased`}>
        <Analytics />
        <div className={cn('relative h-full', 'bg-dashBg px-2')}>
          <BrowseHeader className='absolute' />
          {children}
          <BrowseFooter />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
