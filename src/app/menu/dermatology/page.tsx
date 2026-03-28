import { Metadata } from 'next';
import Link from 'next/link';
import { getTreatmentsByCategory } from '@/lib/menu-data';
import { Breadcrumb } from '@/components/common/Breadcrumb';

export const metadata: Metadata = {
  title: '美容皮膚科',
  description:
    '化石美容クリニックの美容皮膚科メニュー。ヒアルロン酸・ボトックス・レーザー治療など、切らない美容施術をご紹介します。',
};

export default function DermatologyPage() {
  const items = getTreatmentsByCategory('dermatology');

  return (
    <>
      <section className="bg-bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-4 text-center">
          <p className="font-serif text-sm tracking-widest text-accent mb-2">
            COSMETIC DERMATOLOGY
          </p>
          <h1 className="font-serif text-2xl md:text-4xl font-semibold text-text-main">
            美容皮膚科
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-[1280px] px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((t) => (
            <Link
              key={t.slug}
              href={`/menu/${t.slug}`}
              className="group block border border-border-main rounded-sm overflow-hidden hover:border-primary transition-colors"
            >
              <div className="aspect-[3/2] bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400 text-sm">600 × 400</span>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-text-main group-hover:text-primary transition-colors">
                  {t.name}
                </h3>
                {t.nameEn && (
                  <p className="text-xs text-text-sub mt-0.5">{t.nameEn}</p>
                )}
                <p className="text-xs text-text-sub mt-2 line-clamp-2 leading-relaxed">
                  {t.summary}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8">
          <Breadcrumb
            items={[
              { label: '施術をさがす', href: '/menu' },
              { label: '美容皮膚科' },
            ]}
          />
        </div>
      </div>
    </>
  );
}
