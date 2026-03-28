import type { Metadata } from 'next';
import { Noto_Sans_JP, Noto_Serif_JP } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { FloatingCTA } from '@/components/common/FloatingCTA';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-noto-sans-jp',
});

const notoSerifJP = Noto_Serif_JP({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  display: 'swap',
  variable: '--font-noto-serif-jp',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://kaseki-beauty.example.com'),
  title: {
    default: '化石美容クリニック | 大阪の美容外科・美容皮膚科・アートメイク',
    template: '%s | 化石美容クリニック',
  },
  description:
    '大阪市中央区の美容クリニック。二重整形・糸リフト・ヒアルロン酸注入・ピコレーザー・ダーマペン・アートメイクなど幅広い美容医療をご提供。丁寧なカウンセリングと確かな技術で、あなたの「なりたい自分」を実現します。',
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    siteName: '化石美容クリニック',
    images: [{ url: '/images/ogp.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${notoSerifJP.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
