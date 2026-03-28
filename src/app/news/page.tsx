import { Metadata } from 'next';
import Link from 'next/link';
import { newsItems } from '@/lib/news-data';
import { Breadcrumb } from '@/components/common/Breadcrumb';

export const metadata: Metadata = {
  title: 'お知らせ',
  description: '化石美容クリニックからのお知らせ一覧です。',
};

export default function NewsPage() {
  return (
    <>
      <section className="bg-bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-4 text-center">
          <p className="font-serif text-sm tracking-widest text-accent mb-2">NEWS</p>
          <h1 className="font-serif text-2xl md:text-4xl font-semibold text-text-main">
            お知らせ
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-[1280px] px-4 py-12 lg:py-16">
        {newsItems.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-text-sub text-sm">現在お知らせはありません。</p>
          </div>
        ) : (
          <div className="max-w-3xl divide-y divide-border-main">
            {newsItems.map((news) => (
              <Link
                key={news.id}
                href={`/news/${news.id}`}
                className="block py-4 hover:bg-bg-secondary transition-colors px-2 -mx-2"
              >
                <div className="flex items-center gap-3 mb-1">
                  <time className="text-xs text-text-sub">{news.date}</time>
                  <span className="text-xs bg-primary-light text-primary px-2 py-0.5 rounded-sm">
                    {news.category}
                  </span>
                </div>
                <p className="text-sm text-text-main">{news.title}</p>
              </Link>
            ))}
          </div>
        )}

        <div className="mt-8">
          <Breadcrumb items={[{ label: 'お知らせ' }]} />
        </div>
      </div>
    </>
  );
}
