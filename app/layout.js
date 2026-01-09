import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import StructuredData from '@/components/seo/StructuredData';
import { generateOrganizationSchema } from '@/utils/seo';
import siteMeta from '@/content/siteMeta.json';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  metadataBase: new URL(siteMeta.siteUrl),
  title: {
    default: siteMeta.defaultTitle,
    template: `%s | ${siteMeta.siteName}`,
  },
  description: siteMeta.defaultDescription,
  keywords: siteMeta.keywords,
  authors: [{ name: siteMeta.siteName }],
  creator: siteMeta.siteName,
  publisher: siteMeta.siteName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteMeta.siteUrl,
    siteName: siteMeta.siteName,
    title: siteMeta.defaultTitle,
    description: siteMeta.defaultDescription,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMeta.defaultTitle,
    description: siteMeta.defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({ children }) {
  const organizationSchema = generateOrganizationSchema();

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <StructuredData data={organizationSchema} />
      </head>
      <body>
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
