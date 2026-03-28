import { Metadata } from 'next';
import Link from 'next/link';
import { getTreatmentsByCategory } from '@/lib/menu-data';
import { siteConfig } from '@/lib/site-config';
import { Breadcrumb } from '@/components/common/Breadcrumb';

export const metadata: Metadata = {
  title: 'アートメイク',
  description:
    '化石美容クリニックのアートメイクメニュー。眉・リップ・アイライン・ヘアラインのアートメイク施術をご紹介します。',
};

export default function ArtmakePage() {
  const items = getTreatmentsByCategory('artmake');

  return (
    <>
      <section className="bg-bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-4 text-center">
          <p className="font-serif text-sm tracking-widest text-accent mb-2">ART MAKE</p>
          <h1 className="font-serif text-2xl md:text-4xl font-semibold text-text-main">
            アートメイク
          </h1>
          <p className="text-sm text-text-sub mt-4 max-w-xl mx-auto leading-relaxed">
            水に濡れても落ちない、すっぴんでも美しい仕上がりを実現するメディカルアートメイク。
            当院では医師または看護師が施術を担当いたします。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1280px] px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((t) => (
            <Link
              key={t.slug}
              href={`/artmake/${t.slug}`}
              className="group block border border-border-main rounded-sm overflow-hidden hover:border-primary transition-colors"
            >
              <div className="aspect-[3/2] bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400 text-sm">600 × 400</span>
              </div>
              <div className="p-5">
                <h2 className="font-serif text-lg font-semibold text-text-main group-hover:text-primary transition-colors">
                  {t.name}
                </h2>
                {t.nameEn && (
                  <p className="text-xs text-text-sub mt-0.5">{t.nameEn}</p>
                )}
                <p className="text-sm text-text-sub mt-2 line-clamp-2 leading-relaxed">
                  {t.summary}
                </p>
                <p className="text-xs text-primary mt-3 font-medium">詳しく見る →</p>
              </div>
            </Link>
          ))}
        </div>

        {/* アートメイク専用電話 */}
        <div className="mt-12 p-6 bg-bg-secondary rounded-sm text-center">
          <p className="text-sm text-text-main mb-2">アートメイク専用ダイヤル</p>
          <a
            href={`tel:${siteConfig.phoneArtmake.replace(/-/g, '')}`}
            className="font-serif text-2xl text-primary font-semibold hover:text-primary-dark transition-colors"
          >
            {siteConfig.phoneArtmake}
          </a>
          <p className="text-xs text-text-sub mt-2">受付時間 10:00〜19:00（日祝休診）</p>
        </div>

        <div className="mt-8">
          <Breadcrumb items={[{ label: 'アートメイク' }]} />
        </div>
      </div>
    </>
  );
}
