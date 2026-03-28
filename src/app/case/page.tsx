'use client';

import { useState } from 'react';
import { getAllCases } from '@/lib/menu-data';
import { BeforeAfter } from '@/components/ui/BeforeAfter';
import { Breadcrumb } from '@/components/common/Breadcrumb';

const filters = [
  { key: 'all', label: 'すべて' },
  { key: 'surgery', label: '美容外科' },
  { key: 'dermatology', label: '美容皮膚科' },
  { key: 'artmake', label: 'アートメイク' },
] as const;

type FilterKey = (typeof filters)[number]['key'];

export default function CasePage() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all');
  const allCases = getAllCases();

  const filtered =
    activeFilter === 'all'
      ? allCases
      : allCases.filter((c) => c.category === activeFilter);

  return (
    <>
      <section className="bg-bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-4 text-center">
          <p className="font-serif text-sm tracking-widest text-accent mb-2">CASE PHOTOS</p>
          <h1 className="font-serif text-2xl md:text-4xl font-semibold text-text-main">
            症例写真
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-[1280px] px-4 py-12 lg:py-16">
        {/* フィルター */}
        <div className="flex gap-2 mb-8 overflow-x-auto">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`px-4 py-2 text-sm rounded-sm whitespace-nowrap transition-colors ${
                activeFilter === f.key
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-text-sub hover:bg-gray-200'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="text-sm text-text-sub text-center py-12">
            該当する症例写真はありません。
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filtered.map((c) => (
              <div key={c.id}>
                <BeforeAfter
                  beforeImage={c.beforeImage}
                  afterImage={c.afterImage}
                  title={c.description}
                />
                <div className="mt-2 text-xs text-text-sub space-y-0.5">
                  <p>施術名：{c.treatmentName}</p>
                  <p>費用：{c.price}</p>
                  <p>リスク・副作用：{c.risks}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8">
          <Breadcrumb items={[{ label: '症例写真' }]} />
        </div>
      </div>
    </>
  );
}
