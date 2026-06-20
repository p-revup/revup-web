import { Analytics } from '@vercel/analytics/next';
import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Geist_Mono } from 'next/font/google';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
  subsets: ['latin'],
  display: 'swap'
});
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

const SITE_URL = 'https://revup-initiative.org';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'RevUp Initiative — Empowering Young People to Lead and Live Purposefully',
    template: '%s | RevUp Initiative'
  },
  description:
    'RevUp Initiative empowers young people through leadership development, mentorship, skills acquisition, and impact-driven opportunities that help them discover purpose and transform their communities.',
  keywords: [
    'youth empowerment',
    'leadership development',
    'mentorship',
    'nonprofit',
    'youth movement',
    'skills acquisition',
    'community impact',
    'RevUp Initiative'
  ],
  authors: [{ name: 'RevUp Initiative' }],
  creator: 'RevUp Initiative',
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: 'RevUp Initiative — Empowering Young People to Lead and Live Purposefully',
    description:
      'Join a global movement raising a generation of purpose-driven leaders who create meaningful impact and inspire positive change.',
    siteName: 'RevUp Initiative',
    images: [
      {
        url: '/hero-youth-leaders.png',
        width: 1200,
        height: 630,
        alt: 'Young leaders of the RevUp Initiative movement'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RevUp Initiative — Empowering Young People to Lead and Live Purposefully',
    description:
      'Join a global movement raising a generation of purpose-driven leaders who create meaningful impact.',
    images: ['/hero-youth-leaders.png']
  },
  generator: 'v0.app'
};

export const viewport: Viewport = {
  themeColor: '#121212',
  colorScheme: 'dark'
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'NGO',
  name: 'RevUp Initiative',
  url: SITE_URL,
  slogan: 'Empowering Young People to Lead and Live Purposefully',
  description:
    'To empower young people through leadership development, mentorship, skills acquisition, and impact-driven opportunities that help them discover purpose and transform their communities.',
  sameAs: [
    'https://twitter.com/revupinitiative',
    'https://instagram.com/revupinitiative',
    'https://linkedin.com/company/revupinitiative'
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  );
}
