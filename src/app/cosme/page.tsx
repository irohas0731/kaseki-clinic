'use client';

import { useState } from 'react';
import { cosmeItems } from '@/lib/cosme-data';
import { Breadcrumb } from '@/components/common/Breadcrumb';

const categories = [
  { key: 'all', label: 'すべて' },
  { key: 'skincare', label: 'スキンケア' },
  { key: 'makeup', label: 'メイクアップ' },
  { key: 'supplement', label: 'サプリメント' },
  { key: 'other', label: 'その他' },
] as const;

type CatKey = (typeof categories)[number]['key'];

export default function CosmePage() {
  const [activeCat, setActiveCat] = useState<CatKey>('all');

  const filtered =
    activeCat === 'all'
      ? cosmeItems
      : cosmeItems.filter((c) => c.category === activeCat);

  return (
    <>
      <section className="bg-bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-4 text-center">
          <p className="font-serif text-sm tracking-widest text-accent mb-2">COSME</p>
          <h1 className="font-serif text-2xl md:text-4xl font-semibold text-text-main">コスメ</h1>
          <p className="text-sm text-text-sub mt-3">
            医師が厳選したドクターズコスメ・サプリメントをご紹介します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1280px] px-4 py-12 lg:py-16">
        {/* フィルター */}
        <div className="flex gap-2 mb-8 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCat(cat.key)}
              className={`px-4 py-2 text-sm rounded-sm whitespace-nowrap transition-colors ${
                activeCat === cat.key
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-text-sub hover:bg-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="border border-border-main rounded-sm overflow-hidden"
            >
              <div className="aspect-square bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400">400 × 400</span>
              </div>
              <div className="p-4">
                {item.brand && (
                  <p className="text-xs text-text-sub mb-1">{item.brand}</p>
                )}
                <h2 className="text-sm font-semibold text-text-main">{item.name}</h2>
                <p className="text-primary font-medium text-sm mt-1">{item.price}</p>
                <p className="text-xs text-text-sub mt-2 leading-relaxed line-clamp-3">
                  {item.description}
                </p>
                {item.ecUrl && (
                  <a
                    href={item.ecUrl}
                    className="inline-block mt-3 text-xs text-primary hover:text-primary-dark transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    オンライン購入 →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Breadcrumb items={[{ label: 'コスメ' }]} />
        </div>
      </div>
    </>
  );
}
