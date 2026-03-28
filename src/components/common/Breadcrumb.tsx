import Link from 'next/link';
import { BreadcrumbItem } from '@/types';

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://kaseki-beauty.example.com/' },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.label,
        ...(item.href ? { item: `https://kaseki-beauty.example.com${item.href}` } : {}),
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="パンくずリスト" className="bg-bg-sub py-3">
        <div className="mx-auto max-w-[1280px] px-4">
          <ol className="flex flex-wrap items-center gap-1 text-xs text-text-sub">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                ホーム
              </Link>
            </li>
            {items.map((item, index) => (
              <li key={index} className="flex items-center gap-1">
                <span aria-hidden="true">&gt;</span>
                {item.href ? (
                  <Link href={item.href} className="hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <span aria-current="page">{item.label}</span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}
