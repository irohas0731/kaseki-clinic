import { Metadata } from 'next';
import { siteConfig } from '@/lib/site-config';
import { Breadcrumb } from '@/components/common/Breadcrumb';

export const metadata: Metadata = {
  title: 'アクセス',
  description:
    '化石美容クリニックへのアクセス。住所・最寄駅・地図のご案内です。',
};

export default function AccessPage() {
  return (
    <>
      <section className="bg-bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-4 text-center">
          <p className="font-serif text-sm tracking-widest text-accent mb-2">ACCESS</p>
          <h1 className="font-serif text-2xl md:text-4xl font-semibold text-text-main">
            アクセス
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-[1280px] px-4 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* 地図プレースホルダー */}
          <div className="w-full lg:w-2/3">
            <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center rounded-sm">
              <span className="text-gray-400">Google Map Embed</span>
            </div>
          </div>

          {/* クリニック情報 */}
          <div className="w-full lg:w-1/3">
            <h2 className="font-serif text-lg font-semibold text-text-main mb-4">
              {siteConfig.clinicName}
            </h2>
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="font-semibold text-text-main">住所</dt>
                <dd className="text-text-sub mt-1">
                  {siteConfig.postalCode}
                  <br />
                  {siteConfig.address}
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-text-main">電話番号</dt>
                <dd className="text-text-sub mt-1">
                  一般診療：
                  <a
                    href={`tel:${siteConfig.phoneGeneral.replace(/-/g, '')}`}
                    className="text-primary hover:text-primary-dark transition-colors"
                  >
                    {siteConfig.phoneGeneral}
                  </a>
                  <br />
                  アートメイク：
                  <a
                    href={`tel:${siteConfig.phoneArtmake.replace(/-/g, '')}`}
                    className="text-primary hover:text-primary-dark transition-colors"
                  >
                    {siteConfig.phoneArtmake}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-text-main">診療時間</dt>
                <dd className="text-text-sub mt-1">
                  {siteConfig.hours
                    .filter((h) => h.time !== '休診')
                    .map((h) => `${h.day} ${h.time}`)
                    .join(' / ')}
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-text-main">休診日</dt>
                <dd className="text-text-sub mt-1">{siteConfig.closedDays}</dd>
              </div>
              <div>
                <dt className="font-semibold text-text-main">最寄り駅</dt>
                <dd className="text-text-sub mt-1">
                  地下鉄○○線「○○駅」○番出口 徒歩3分
                  <br />
                  地下鉄△△線「△△駅」△番出口 徒歩5分
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-8">
          <Breadcrumb items={[{ label: 'アクセス' }]} />
        </div>
      </div>
    </>
  );
}
