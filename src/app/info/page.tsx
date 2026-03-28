import { Metadata } from 'next';
import { siteConfig } from '@/lib/site-config';
import { Breadcrumb } from '@/components/common/Breadcrumb';

export const metadata: Metadata = {
  title: '診察案内',
  description:
    '化石美容クリニックの診察案内。診療時間・休診日・ご予約方法・お支払い方法についてご案内します。',
};

export default function InfoPage() {
  return (
    <>
      <section className="bg-bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-4 text-center">
          <p className="font-serif text-sm tracking-widest text-accent mb-2">INFORMATION</p>
          <h1 className="font-serif text-2xl md:text-4xl font-semibold text-text-main">
            診察案内
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-[1280px] px-4 py-12 lg:py-16">
        {/* 診療時間 */}
        <section className="mb-12">
          <h2 className="font-serif text-xl font-semibold text-text-main mb-6">診療時間</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm max-w-2xl">
              <thead>
                <tr className="border-b-2 border-primary">
                  {siteConfig.hours.map((h) => (
                    <th key={h.day} className="py-3 px-4 text-center font-semibold text-text-main">
                      {h.day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border-main">
                  {siteConfig.hours.map((h) => (
                    <td
                      key={h.day}
                      className={`py-3 px-4 text-center text-sm ${
                        h.time === '休診'
                          ? 'text-red-400'
                          : 'text-text-main'
                      }`}
                    >
                      {h.time === '休診' ? '×' : h.time}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-sub mt-3">
            休診日：{siteConfig.closedDays}
          </p>
        </section>

        {/* ご予約方法 */}
        <section className="mb-12 border-t border-border-main pt-12">
          <h2 className="font-serif text-xl font-semibold text-text-main mb-6">ご予約方法</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl">
            <div className="p-6 bg-bg-secondary rounded-sm text-center">
              <h3 className="font-semibold text-text-main mb-2">お電話</h3>
              <p className="text-sm text-text-sub mb-3">一般診療</p>
              <a
                href={`tel:${siteConfig.phoneGeneral.replace(/-/g, '')}`}
                className="text-primary font-semibold hover:text-primary-dark transition-colors"
              >
                {siteConfig.phoneGeneral}
              </a>
              <p className="text-sm text-text-sub mt-3">アートメイク専用</p>
              <a
                href={`tel:${siteConfig.phoneArtmake.replace(/-/g, '')}`}
                className="text-primary font-semibold hover:text-primary-dark transition-colors"
              >
                {siteConfig.phoneArtmake}
              </a>
            </div>
            <div className="p-6 bg-bg-secondary rounded-sm text-center">
              <h3 className="font-semibold text-text-main mb-2">LINE</h3>
              <p className="text-sm text-text-sub mb-3">24時間受付</p>
              <a
                href={siteConfig.lineUrl}
                className="inline-block px-6 py-2 bg-line text-white rounded-md text-sm hover:opacity-90 transition-opacity"
              >
                LINE予約
              </a>
            </div>
            <div className="p-6 bg-bg-secondary rounded-sm text-center">
              <h3 className="font-semibold text-text-main mb-2">WEB予約</h3>
              <p className="text-sm text-text-sub mb-3">24時間受付</p>
              <a
                href={siteConfig.webReserveUrl}
                className="inline-block px-6 py-2 bg-cta text-white rounded-md text-sm hover:bg-cta-hover transition-colors"
              >
                WEB予約
              </a>
            </div>
          </div>
        </section>

        {/* お支払い方法 */}
        <section className="mb-12 border-t border-border-main pt-12">
          <h2 className="font-serif text-xl font-semibold text-text-main mb-6">お支払い方法</h2>
          <div className="max-w-3xl">
            <ul className="space-y-2">
              {[
                '現金',
                'クレジットカード（VISA / Mastercard / JCB / AMEX / Diners）',
                '医療ローン（最大60回まで分割可能）',
                'デビットカード',
                'QRコード決済（PayPay / LINE Pay）',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-text-main">
                  <span className="text-primary mt-0.5">&#x2022;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 持ち物 */}
        <section className="mb-12 border-t border-border-main pt-12">
          <h2 className="font-serif text-xl font-semibold text-text-main mb-6">
            ご来院時のお持ち物
          </h2>
          <ul className="space-y-2 max-w-3xl">
            {[
              '身分証明書（初診の方）',
              '保険証（一部保険適用の施術の場合）',
              'お薬手帳（服用中のお薬がある方）',
              '紹介状（他院からの紹介の場合）',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-text-main">
                <span className="text-primary mt-0.5">&#x2022;</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <Breadcrumb items={[{ label: '診察案内' }]} />
      </div>
    </>
  );
}
