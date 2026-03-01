import type {Metadata} from 'next';
import './globals.css'; // Global styles
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://lifeportplus.com'), // Replace with actual domain
  title: {
    default: '연금저축 완벽 가이드 - 직장인 연말정산 절세 팁',
    template: '%s | 연금저축 가이드'
  },
  description: '직장인 연말정산을 위한 연금저축 세액공제 한도, 펀드 vs 보험 비교, 그리고 중도해지 가산세 리스크에 대한 완벽 가이드입니다.',
  keywords: '연말정산, 연금저축, 연금저축펀드, 세액공제, IRP, 가산세, 중도해지, 노후준비',
  openGraph: {
    title: '연금저축 완벽 가이드 - 13월의 월급 만들기',
    description: '연금저축 세액공제 한도, 펀드 vs 보험 비교, 중도해지 리스크 완벽 정리.',
    url: '/',
    siteName: 'Pension Savings Guide',
    images: [
      {
        url: 'https://lifeportplus.com/thumb.jpg',
        width: 1200,
        height: 630,
        alt: '안정적인 노후를 준비하며 걷는 노부부의 모습',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },

  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  'name': '연금저축 완벽 가이드',
  'url': 'https://lifeportplus.com',
  'description': '직장인 연말정산을 위한 연금저축 세액공제 한도 및 가이드'
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ko">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning className="bg-gray-50 text-gray-900 antialiased pt-16 min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow w-full max-w-6xl mx-auto p-4 md:p-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
