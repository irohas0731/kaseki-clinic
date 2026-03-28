import { Metadata } from 'next';
import { campaigns } from '@/lib/campaign-data';
import { Breadcrumb } from '@/components/common/Breadcrumb';

export const metadata: Metadata = {
  title: 'キャンペーン・特典',
  description:
    '化石美容クリニックのキャンペーン・特典情報。お得な施術プランをご紹介します。',
};

function isActive(endDate: string) {
  return new Date(endDate) >= new Date();
}

export default function CampaignPage() {
  const active = campaigns.filter((c) => isActive(c.endDate));
  const ended = campaigns.filter((c) => !isActive(c.endDate));

  return (
    <>
      <section className="bg-bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-4 text-center">
          <p className="font-serif text-sm tracking-widest text-accent mb-2">CAMPAIGN</p>
          <h1 className="font-serif text-2xl md:text-4xl font-semibold text-text-main">
            キャンペーン・特典
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-[1280px] px-4 py-12 lg:py-16">
        {/* 開催中 */}
        {active.length > 0 && (
          <section className="mb-12">
            <h2 className="font-serif text-xl font-semibold text-text-main mb-6">開催中</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {active.map((c) => (
                <div
                  key={c.id}
                  className="border border-border-main rounded-sm overflow-hidden"
                >
                  <div className="aspect-[2/1] bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400">600 × 300</span>
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-text-sub mb-1">
                      {c.startDate} 〜 {c.endDate}
                    </p>
                    <h3 className="font-semibold text-text-main mb-2">{c.title}</h3>
                    <p className="text-sm text-text-sub leading-relaxed">{c.description}</p>
                    <p className="text-xs text-text-sub mt-3">※ {c.notes}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 終了済み */}
        {ended.length > 0 && (
          <section>
            <h2 className="font-serif text-xl font-semibold text-text-main mb-6">終了済み</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 opacity-60">
              {ended.map((c) => (
                <div
                  key={c.id}
                  className="border border-border-main rounded-sm overflow-hidden"
                >
                  <div className="aspect-[2/1] bg-gray-200 flex items-center justify-center relative">
                    <span className="text-gray-400">600 × 300</span>
                    <span className="absolute top-2 right-2 bg-gray-600 text-white text-xs px-2 py-1 rounded">
                      終了
                    </span>
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-text-sub mb-1">
                      {c.startDate} 〜 {c.endDate}
                    </p>
                    <h3 className="font-semibold text-text-main mb-2">{c.title}</h3>
                    <p className="text-sm text-text-sub leading-relaxed">{c.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="mt-8">
          <Breadcrumb items={[{ label: 'キャンペーン・特典' }]} />
        </div>
      </div>
    </>
  );
}
