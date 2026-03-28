'use client';

import { useState } from 'react';
import { treatments } from '@/lib/menu-data';
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

        {/* 統一料金テーブル */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-primary">
                <th className="py-3 text-left font-semibold text-text-main">施術名</th>
                <th className="py-3 text-left font-semibold text-text-main pl-4">メニュー</th>
                <th className="py-3 text-right font-semibold text-text-main w-36">料金（税込）</th>
                <th className="py-3 text-left font-semibold text-text-main pl-4">備考</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((t) =>
                t.pricing.map((item, i) => (
                  <tr
                    key={`${t.slug}-${i}`}
                    className="border-b border-border-main"
                  >
                    {/* 施術名: 各施術の最初の行のみ表示、rowSpanで結合 */}
                    {i === 0 && (
                      <td
                        className="py-3 text-text-main font-medium align-top pr-4"
                        rowSpan={t.pricing.length}
                      >
                        {t.name}
                      </td>
                    )}
                    <td className="py-3 text-text-main pl-4">{item.name}</td>
                    <td className="py-3 text-right text-primary font-medium whitespace-nowrap">
                      {item.price}
                    </td>
                    <td className="py-3 text-text-sub text-xs pl-4">{item.note || ''}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
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
