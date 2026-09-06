import type { Metadata, Viewport } from 'next';
import { profile } from '../content/profile';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(profile.site.url),
  title: profile.site.title,
  description: profile.site.description,
  keywords: [...profile.site.keywords],
  authors: [{ name: profile.person.name, url: profile.site.url }],
  creator: profile.person.name,
  alternates: { canonical: '/' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
  icons: { icon: profile.assets.icon, apple: profile.assets.icon },
  openGraph: {
    title: profile.site.title,
    description: profile.site.description,
    url: profile.site.url,
    siteName: profile.site.name,
    images: [{ url: profile.site.ogImage, width: 1729, height: 910, alt: `${profile.person.name} — ${profile.site.name}` }],
    type: 'website',
    locale: profile.site.locale,
  },
  twitter: {
    card: 'summary_large_image',
    title: profile.site.title,
    description: profile.site.description,
    images: [profile.site.ogImage],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: profile.site.themeColor,
  colorScheme: 'dark light',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang={profile.site.language}><head><link rel="preload" href="/fonts/roboto-serif-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" /></head><body>{children}</body></html>;
}
