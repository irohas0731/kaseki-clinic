import { Metadata } from 'next';
import Link from 'next/link';
import { getSurgerySubcategories } from '@/lib/menu-data';
import { Breadcrumb } from '@/components/common/Breadcrumb';

export const metadata: Metadata = {
  title: '美容外科',
  description:
    '化石美容クリニックの美容外科メニュー。二重整形・鼻整形・糸リフトなど、確かな技術で理想の仕上がりを実現します。',
};

export default function SurgeryPage() {
  const subcategories = getSurgerySubcategories();

  return (
    <>
      <section className="bg-bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-4 text-center">
          <p className="font-serif text-sm tracking-widest text-accent mb-2">
            COSMETIC SURGERY
          </p>
          <h1 className="font-serif text-2xl md:text-4xl font-semibold text-text-main">
            美容外科
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-[1280px] px-4 py-12 lg:py-16">
        {subcategories.map((group) => (
          <section key={group.subcategory} className="mb-12">
            <h2 className="font-serif text-lg font-semibold text-text-main mb-4 pb-2 border-b border-border-main">
              {group.subcategory}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {group.treatments.map((t) => (
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
          </section>
        ))}

        <Breadcrumb
          items={[
            { label: '施術をさがす', href: '/menu' },
            { label: '美容外科' },
          ]}
        />
      </div>
    </>
  );
}
