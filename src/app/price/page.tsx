'use client';

import { useState } from 'react';
import { treatments } from '@/lib/menu-data';
import { PriceTable } from '@/components/ui/PriceTable';
import { Breadcrumb } from '@/components/common/Breadcrumb';

const tabs = [
  { key: 'all', label: 'すべて' },
  { key: 'surgery', label: '美容外科' },
  { key: 'dermatology', label: '美容皮膚科' },
  { key: 'artmake', label: 'アートメイク' },
] as const;

type TabKey = (typeof tabs)[number]['key'];

export default function PricePage() {
  const [activeTab, setActiveTab] = useState<TabKey>('all');

  const filtered =
    activeTab === 'all'
      ? treatments
      : treatments.filter((t) => t.category === activeTab);

  return (
    <>
      <section className="bg-bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-4 text-center">
          <p className="font-serif text-sm tracking-widest text-accent mb-2">PRICE</p>
          <h1 className="font-serif text-2xl md:text-4xl font-semibold text-text-main">料金</h1>
          <p className="text-sm text-text-sub mt-3">
            表示価格はすべて税込です。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1280px] px-4 py-12 lg:py-16">
        {/* タブ */}
        <div className="flex gap-2 mb-8 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 text-sm rounded-sm whitespace-nowrap transition-colors ${
                activeTab === tab.key
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-text-sub hover:bg-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 料金テーブル */}
        <div className="space-y-10">
          {filtered.map((t) => (
            <div key={t.slug}>
              <h2 className="font-semibold text-text-main mb-3">{t.name}</h2>
              <PriceTable items={t.pricing} />
            </div>
          ))}
        </div>

        <p className="text-xs text-text-sub mt-8 leading-relaxed">
          ※ 上記は目安料金です。患者さまの状態やご希望により変動する場合がございます。
          <br />
          ※ 初診料・カウンセリング料は無料です。
          <br />
          ※ モニター価格のご用意もございます。詳しくはカウンセリング時にお問い合わせください。
        </p>

        <div className="mt-8">
          <Breadcrumb items={[{ label: '料金' }]} />
        </div>
      </div>
    </>
  );
}
