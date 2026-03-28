import Link from 'next/link';
import { HeroSection } from '@/components/sections/HeroSection';
import { CategorySection } from '@/components/sections/CategorySection';
import { CaseCarousel } from '@/components/sections/CaseCarousel';
import { InstagramFeed } from '@/components/sections/InstagramFeed';
import { siteConfig } from '@/lib/site-config';
import { getAllCases } from '@/lib/menu-data';
import { newsItems } from '@/lib/news-data';
import { campaigns } from '@/lib/campaign-data';
import { CategoryItem } from '@/types';

const categories: CategoryItem[] = [
  {
    title: '美容外科',
    titleEn: 'COSMETIC SURGERY',
    image: '/images/category-surgery.jpg',
    href: '/menu/surgery',
    description: '二重整形・目元の手術・糸リフトなど',
  },
  {
    title: '美容皮膚科',
    titleEn: 'COSMETIC DERMATOLOGY',
    image: '/images/category-dermatology.jpg',
    href: '/menu/dermatology',
    description: 'ヒアルロン酸・ピコレーザー・ダーマペンなど',
  },
  {
    title: 'アートメイク',
    titleEn: 'ART MAKEUP',
    image: '/images/category-artmake.jpg',
    href: '/artmake',
    description: '眉・リップ・アイライン・ヘアライン',
  },
];

export default function HomePage() {
  const allCases = getAllCases();
  const latestNews = newsItems.slice(0, 3);
  const activeCampaigns = campaigns.filter((c) => new Date(c.endDate) >= new Date());

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['MedicalClinic', 'LocalBusiness'],
    name: siteConfig.clinicName,
    alternateName: siteConfig.clinicNameEn,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address,
      addressLocality: '大阪市中央区',
      addressRegion: '大阪府',
      postalCode: '540-0000',
      addressCountry: 'JP',
    },
    telephone: siteConfig.phoneGeneral,
    url: 'https://kaseki-beauty.example.com',
    medicalSpecialty: ['PlasticSurgery', 'Dermatology'],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <HeroSection
        fallbackImage="/images/hero-fallback.jpg"
        catchCopyJa="あなたの「なりたい」を、確かな技術で"
        catchCopyEn="Your Beauty, Our Expertise"
      />

      {/* Category */}
      <CategorySection categories={categories} />

      {/* Cases */}
      <CaseCarousel cases={allCases} maxDisplay={6} />

      {/* Instagram */}
      <InstagramFeed embedCode={siteConfig.instagramEmbedCode || undefined} />

      {/* Guide Banner */}
      <section className="py-20 lg:py-[120px] bg-primary-light">
        <div className="mx-auto max-w-[1280px] px-4 text-center">
          <p className="font-serif text-sm tracking-widest text-accent mb-2">FOR FIRST VISITORS</p>
          <h2 className="font-serif text-[22px] md:text-[28px] font-semibold text-text-main mb-4">
            初めての方へ
          </h2>
          <p className="text-text-sub max-w-xl mx-auto mb-8">
            当院が初めての方へ、ご予約からカウンセリング、施術までの流れや、当院の特徴をご案内いたします。
          </p>
          <Link
            href="/guide"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary-dark transition-colors"
          >
            詳しく見る
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
          </Link>
        </div>
      </section>

      {/* News */}
      {latestNews.length > 0 && (
        <section className="py-20 lg:py-[120px]">
          <div className="mx-auto max-w-[1280px] px-4">
            <div className="text-center mb-12">
              <p className="font-serif text-sm tracking-widest text-accent mb-2">NEWS</p>
              <h2 className="font-serif text-[22px] md:text-[28px] font-semibold text-text-main">お知らせ</h2>
            </div>
            <ul className="divide-y divide-border-main max-w-3xl mx-auto">
              {latestNews.map((news) => (
                <li key={news.id}>
                  <Link href={`/news/${news.id}`} className="block py-4 hover:bg-bg-sub transition-colors px-4 -mx-4">
                    <div className="flex items-start gap-4">
                      <time className="text-xs text-text-sub whitespace-nowrap mt-0.5">{news.date}</time>
                      <span className="text-[10px] px-2 py-0.5 bg-primary text-white rounded whitespace-nowrap">
                        {news.category}
                      </span>
                      <span className="text-sm text-text-main">{news.title}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="text-center mt-8">
              <Link
                href="/news"
                className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary-dark transition-colors font-medium"
              >
                お知らせ一覧へ
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Campaign */}
      {activeCampaigns.length > 0 && (
        <section className="py-20 lg:py-[120px] bg-bg-sub">
          <div className="mx-auto max-w-[1280px] px-4">
            <div className="text-center mb-12">
              <p className="font-serif text-sm tracking-widest text-accent mb-2">CAMPAIGN</p>
              <h2 className="font-serif text-[22px] md:text-[28px] font-semibold text-text-main">キャンペーン・特典</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {activeCampaigns.map((campaign) => (
                <Link key={campaign.id} href="/campaign" className="group block">
                  <div className="aspect-[3/1] bg-gray-200 flex items-center justify-center mb-3">
                    <span className="text-gray-400 text-sm">1200 × 400</span>
                  </div>
                  <h3 className="font-medium text-text-main group-hover:text-primary transition-colors">
                    {campaign.title}
                  </h3>
                  <p className="text-xs text-text-sub mt-1">
                    {campaign.startDate} 〜 {campaign.endDate}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Clinic Info */}
      <section className="py-20 lg:py-[120px]">
        <div className="mx-auto max-w-[1280px] px-4">
          <div className="text-center mb-12">
            <p className="font-serif text-sm tracking-widest text-accent mb-2">CLINIC</p>
            <h2 className="font-serif text-[22px] md:text-[28px] font-semibold text-text-main">クリニック情報</h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <table className="w-full text-sm">
              <tbody className="divide-y divide-border-main">
                <tr>
                  <th className="py-3 pr-4 text-left text-text-sub font-normal w-32">クリニック名</th>
                  <td className="py-3">{siteConfig.clinicName}</td>
                </tr>
                <tr>
                  <th className="py-3 pr-4 text-left text-text-sub font-normal">所在地</th>
                  <td className="py-3">{siteConfig.postalCode} {siteConfig.address}</td>
                </tr>
                <tr>
                  <th className="py-3 pr-4 text-left text-text-sub font-normal">一般予約</th>
                  <td className="py-3">
                    <a href={`tel:${siteConfig.phoneGeneral.replace(/-/g, '')}`} className="text-primary hover:text-primary-dark">
                      {siteConfig.phoneGeneral}
                    </a>
                  </td>
                </tr>
                <tr>
                  <th className="py-3 pr-4 text-left text-text-sub font-normal">アートメイク予約</th>
                  <td className="py-3">
                    <a href={`tel:${siteConfig.phoneArtmake.replace(/-/g, '')}`} className="text-primary hover:text-primary-dark">
                      {siteConfig.phoneArtmake}
                    </a>
                  </td>
                </tr>
                <tr>
                  <th className="py-3 pr-4 text-left text-text-sub font-normal align-top">診療時間</th>
                  <td className="py-3">
                    <div className="flex flex-wrap gap-x-4 gap-y-1">
                      {siteConfig.hours.map((h) => (
                        <span key={h.day}>
                          {h.day}：{h.time}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
                <tr>
                  <th className="py-3 pr-4 text-left text-text-sub font-normal">休診日</th>
                  <td className="py-3">{siteConfig.closedDays}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-primary">
        <div className="mx-auto max-w-[1280px] px-4 text-center text-white">
          <h2 className="font-serif text-xl md:text-2xl font-semibold mb-4">
            ご予約・お問い合わせ
          </h2>
          <p className="text-sm opacity-80 mb-8 max-w-lg mx-auto">
            カウンセリングのご予約は、お電話・LINE・WEBから承っております。お気軽にご相談ください。
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href={`tel:${siteConfig.phoneGeneral.replace(/-/g, '')}`}
              className="inline-flex items-center gap-2 px-6 py-3 border border-white text-white rounded-md text-sm font-medium hover:bg-white/10 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
              {siteConfig.phoneGeneral}
            </a>
            <a
              href={siteConfig.lineUrl}
              className="inline-flex items-center gap-2 px-6 py-3 bg-line text-white rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
            >
              LINE予約
            </a>
            <a
              href={siteConfig.webReserveUrl}
              className="inline-flex items-center gap-2 px-6 py-3 bg-cta text-white rounded-md text-sm font-medium hover:bg-cta-hover transition-colors"
            >
              WEB予約
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
