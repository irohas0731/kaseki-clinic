import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { equipmentItems } from '@/lib/equipment-data';
import { treatments } from '@/lib/menu-data';
import { siteConfig } from '@/lib/site-config';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { PriceTable } from '@/components/ui/PriceTable';

export function generateStaticParams() {
  return equipmentItems.map((e) => ({ slug: e.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const item = equipmentItems.find((e) => e.slug === slug);
    if (!item) return { title: 'Not Found' };
    return {
      title: `${item.name}｜機器・製剤`,
      description: item.summary,
      openGraph: {
        title: `${item.name}｜${siteConfig.clinicName}`,
        description: item.summary,
      },
    };
  });
}

export default async function EquipmentDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = equipmentItems.find((e) => e.slug === slug);
  if (!item) notFound();

  const relatedTreatments = item.applicableTreatments
    .map((s) => treatments.find((t) => t.slug === s))
    .filter(Boolean);

  return (
    <>
      {/* ヘッダー画像 */}
      <section className="relative w-full aspect-[2/1] md:aspect-[1200/500] bg-gray-300 flex items-center justify-center">
        <span className="text-gray-500">1200 × 500</span>
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 text-white text-center px-4">
          <span className="text-xs tracking-widest mb-2 opacity-80">
            {item.type === 'device' ? 'DEVICE' : 'PRODUCT'}
          </span>
          <h1 className="font-serif text-2xl md:text-4xl font-semibold">{item.name}</h1>
          {item.nameEn && (
            <p className="font-serif text-sm tracking-wider mt-1 opacity-70">{item.nameEn}</p>
          )}
        </div>
      </section>

      <div className="mx-auto max-w-[1280px] px-4">
        {/* 概要 */}
        <section className="py-12 lg:py-16">
          <p className="text-sm md:text-base text-text-main leading-relaxed max-w-3xl">
            {item.description}
          </p>
        </section>

        {/* 画像 */}
        <section className="py-12 lg:py-16 border-t border-border-main">
          <div className="max-w-xl mx-auto aspect-square bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400">600 × 600</span>
          </div>
        </section>

        {/* 特徴 */}
        <section className="py-12 lg:py-16 border-t border-border-main">
          <h2 className="font-serif text-[22px] md:text-[28px] font-semibold text-text-main mb-8">
            特徴
          </h2>
          <ul className="space-y-3 max-w-3xl">
            {item.features.map((f, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-text-main">
                <span className="w-5 h-5 rounded-full bg-primary-light text-primary flex items-center justify-center flex-shrink-0 text-xs mt-0.5">
                  &#x2713;
                </span>
                {f}
              </li>
            ))}
          </ul>
        </section>

        {/* 料金 */}
        {item.pricing && item.pricing.length > 0 && (
          <section className="py-12 lg:py-16 border-t border-border-main">
            <h2 className="font-serif text-[22px] md:text-[28px] font-semibold text-text-main mb-8">
              料金
            </h2>
            <div className="max-w-3xl">
              <PriceTable items={item.pricing} />
            </div>
          </section>
        )}

        {/* リスク */}
        {item.risks && item.risks.length > 0 && (
          <section className="py-12 lg:py-16 border-t border-border-main">
            <h2 className="font-serif text-[22px] md:text-[28px] font-semibold text-text-main mb-8">
              リスク・副作用
            </h2>
            <ul className="space-y-2 max-w-3xl">
              {item.risks.map((r, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-text-sub">
                  <span className="text-red-400 mt-0.5">&#x25CF;</span>
                  {r}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* 対応施術 */}
        {relatedTreatments.length > 0 && (
          <section className="py-12 lg:py-16 border-t border-border-main">
            <h2 className="font-serif text-[22px] md:text-[28px] font-semibold text-text-main mb-8">
              対応施術
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedTreatments.map(
                (t) =>
                  t && (
                    <Link
                      key={t.slug}
                      href={`${t.category === 'artmake' ? '/artmake' : '/menu'}/${t.slug}`}
                      className="group flex gap-4 items-center p-4 border border-border-main rounded-sm hover:border-primary transition-colors"
                    >
                      <div className="w-16 h-16 bg-gray-200 flex items-center justify-center flex-shrink-0">
                        <span className="text-gray-400 text-[10px]">64×64</span>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-text-main group-hover:text-primary transition-colors">
                          {t.name}
                        </h3>
                        <p className="text-xs text-text-sub mt-1 line-clamp-1">{t.summary}</p>
                      </div>
                    </Link>
                  )
              )}
            </div>
          </section>
        )}

        {/* 予約導線 */}
        <section className="py-16 lg:py-20 border-t border-border-main text-center">
          <h2 className="font-serif text-xl md:text-2xl font-semibold text-text-main mb-4">
            ご予約・ご相談はこちら
          </h2>
          <p className="text-sm text-text-sub mb-8 max-w-lg mx-auto">
            {item.name}に関するご質問やご予約は、お電話・LINE・WEBから承っております。
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href={`tel:${siteConfig.phoneGeneral.replace(/-/g, '')}`}
              className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-md text-sm font-medium hover:bg-primary hover:text-white transition-colors"
            >
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
        </section>

        <Breadcrumb
          items={[
            { label: '機器・製剤', href: '/equipment' },
            { label: item.name },
          ]}
        />
      </div>
    </>
  );
}
