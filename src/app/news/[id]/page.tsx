import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { newsItems } from '@/lib/news-data';
import { Breadcrumb } from '@/components/common/Breadcrumb';

export function generateStaticParams() {
  return newsItems.map((n) => ({ id: n.id }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  return params.then(({ id }) => {
    const news = newsItems.find((n) => n.id === id);
    if (!news) return { title: 'Not Found' };
    return {
      title: news.title,
      description: news.content.slice(0, 120),
    };
  });
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const news = newsItems.find((n) => n.id === id);
  if (!news) notFound();

  return (
    <>
      <section className="bg-bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-4 text-center">
          <p className="font-serif text-sm tracking-widest text-accent mb-2">NEWS</p>
          <h1 className="font-serif text-xl md:text-3xl font-semibold text-text-main">
            {news.title}
          </h1>
          <div className="flex items-center justify-center gap-3 mt-3">
            <time className="text-xs text-text-sub">{news.date}</time>
            <span className="text-xs bg-primary-light text-primary px-2 py-0.5 rounded-sm">
              {news.category}
            </span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1280px] px-4 py-12 lg:py-16">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-sm max-w-none text-text-main leading-relaxed">
            <p>{news.content}</p>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary-dark transition-colors"
            >
              ← お知らせ一覧に戻る
            </Link>
          </div>
        </div>

        <div className="mt-8">
          <Breadcrumb
            items={[
              { label: 'お知らせ', href: '/news' },
              { label: news.title },
            ]}
          />
        </div>
      </div>
    </>
  );
}
