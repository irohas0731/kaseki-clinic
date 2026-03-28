import { Metadata } from 'next';
import Link from 'next/link';
import { getTreatmentsByCategory } from '@/lib/menu-data';
import { Breadcrumb } from '@/components/common/Breadcrumb';

export const metadata: Metadata = {
  title: '施術をさがす',
  description:
    '化石美容クリニックの施術メニュー一覧。美容外科・美容皮膚科・アートメイクの各施術をご紹介します。',
};

const categories = [
  {
    title: '美容外科',
    titleEn: 'COSMETIC SURGERY',
    href: '/menu/surgery',
    description: '二重整形・鼻整形・糸リフトなど、外科的アプローチによる美容施術',
    count: getTreatmentsByCategory('surgery').length,
  },
  {
    title: '美容皮膚科',
    titleEn: 'COSMETIC DERMATOLOGY',
    href: '/menu/dermatology',
    description: 'ヒアルロン酸・ボトックス・レーザー治療など、切らない美容施術',
    count: getTreatmentsByCategory('dermatology').length,
  },
  {
    title: 'アートメイク',
    titleEn: 'ART MAKE',
    href: '/artmake',
    description: '眉・リップ・アイラインなど、すっぴんでも美しい仕上がりを実現',
    count: getTreatmentsByCategory('artmake').length,
  },
];

export default function MenuPage() {
  return (
    <>
      {/* ヘッダー */}
      <section className="bg-bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-4 text-center">
          <p className="font-serif text-sm tracking-widest text-accent mb-2">MENU</p>
          <h1 className="font-serif text-2xl md:text-4xl font-semibold text-text-main">
            施術をさがす
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-[1280px] px-4 py-12 lg:py-16">
        {/* カテゴリカード */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="group block border border-border-main rounded-sm overflow-hidden hover:border-primary transition-colors"
            >
              <div className="aspect-[3/2] bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400 text-sm">600 × 400</span>
              </div>
              <div className="p-6">
                <p className="font-serif text-xs tracking-widest text-accent mb-1">
                  {cat.titleEn}
                </p>
                <h2 className="font-serif text-lg font-semibold text-text-main group-hover:text-primary transition-colors mb-2">
                  {cat.title}
                </h2>
                <p className="text-sm text-text-sub leading-relaxed mb-3">
                  {cat.description}
                </p>
                <p className="text-xs text-text-sub">{cat.count}件の施術</p>
              </div>
            </Link>
          ))}
        </div>

        {/* 全施術一覧リンク */}
        <section className="mt-16">
          <h2 className="font-serif text-xl font-semibold text-text-main mb-6">施術一覧</h2>
          {(['surgery', 'dermatology', 'artmake'] as const).map((category) => {
            const items = getTreatmentsByCategory(category);
            const label =
              category === 'surgery'
                ? '美容外科'
                : category === 'dermatology'
                  ? '美容皮膚科'
                  : 'アートメイク';
            const basePath = category === 'artmake' ? '/artmake' : '/menu';
            return (
              <div key={category} className="mb-8">
                <h3 className="text-sm font-semibold text-accent tracking-wider mb-3">{label}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {items.map((t) => (
                    <Link
                      key={t.slug}
                      href={`${basePath}/${t.slug}`}
                      className="flex items-center gap-3 p-3 border border-border-main rounded-sm hover:border-primary transition-colors group"
                    >
                      <div className="w-14 h-14 bg-gray-200 flex items-center justify-center flex-shrink-0">
                        <span className="text-gray-400 text-[8px]">56×56</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-text-main group-hover:text-primary transition-colors">
                          {t.name}
                        </p>
                        <p className="text-xs text-text-sub mt-0.5 line-clamp-1">{t.summary}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </section>

        <Breadcrumb items={[{ label: '施術をさがす' }]} />
      </div>
    </>
  );
}
