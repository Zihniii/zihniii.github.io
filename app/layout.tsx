import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Zihni Aryanto | Business & Data Analyst Portfolio',
  description:
    'Information Systems student focused on data analytics, business analysis, strategic planning, digital transformation, and product development.',
  keywords: [
    'Business Analyst',
    'Data Analyst',
    'Strategic Planning',
    'Product Management',
    'Digital Transformation',
    'Portfolio',
    'Zihni Aryanto Putra Buana',
    'Information Systems',
    'ITS',
  ],
  authors: [{ name: 'Zihni Aryanto Putra Buana' }],
  creator: 'Zihni Aryanto Putra Buana',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Zihni Aryanto Putra Buana | Business & Data Analyst Portfolio',
    description:
      'Information Systems student focused on data analytics, business analysis, strategic planning, digital transformation, and product development.',
    siteName: 'Zihni Aryanto Putra Buana',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-white dark:bg-dark-bg text-primary dark:text-dark-text antialiased">
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
