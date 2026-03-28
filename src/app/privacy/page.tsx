import { Metadata } from 'next';
import { siteConfig } from '@/lib/site-config';
import { Breadcrumb } from '@/components/common/Breadcrumb';

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  description: '化石美容クリニックのプライバシーポリシーです。',
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-4 text-center">
          <p className="font-serif text-sm tracking-widest text-accent mb-2">PRIVACY POLICY</p>
          <h1 className="font-serif text-2xl md:text-4xl font-semibold text-text-main">
            プライバシーポリシー
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-[1280px] px-4 py-12 lg:py-16">
        <div className="max-w-3xl prose prose-sm text-text-main">
          <section className="mb-8">
            <h2 className="font-serif text-lg font-semibold text-text-main mb-3">
              1. 個人情報の取得について
            </h2>
            <p className="text-sm text-text-sub leading-relaxed">
              {siteConfig.clinicName}（以下「当院」）は、適正かつ公正な手段により、診療に必要な範囲で患者さまの個人情報を取得いたします。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-lg font-semibold text-text-main mb-3">
              2. 個人情報の利用目的
            </h2>
            <p className="text-sm text-text-sub leading-relaxed mb-2">
              当院は、取得した個人情報を以下の目的で利用いたします。
            </p>
            <ul className="space-y-1 text-sm text-text-sub">
              <li>&#x2022; 診療・治療の提供</li>
              <li>&#x2022; 予約の管理・ご連絡</li>
              <li>&#x2022; 会計・医療費の請求</li>
              <li>&#x2022; 当院からのお知らせ・情報提供</li>
              <li>&#x2022; 医療の質の向上を目的とした症例研究（匿名化処理を行います）</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-lg font-semibold text-text-main mb-3">
              3. 個人情報の第三者提供
            </h2>
            <p className="text-sm text-text-sub leading-relaxed">
              当院は、法令に基づく場合を除き、患者さまの同意なく個人情報を第三者に提供いたしません。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-lg font-semibold text-text-main mb-3">
              4. 個人情報の安全管理
            </h2>
            <p className="text-sm text-text-sub leading-relaxed">
              当院は、個人情報の漏えい、滅失またはき損の防止その他の安全管理のために、必要かつ適切な措置を講じます。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-lg font-semibold text-text-main mb-3">
              5. 個人情報の開示・訂正・削除
            </h2>
            <p className="text-sm text-text-sub leading-relaxed">
              患者さまから個人情報の開示・訂正・削除のご請求があった場合は、本人確認を行った上で、合理的な範囲内で対応いたします。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-lg font-semibold text-text-main mb-3">
              6. Cookieの使用について
            </h2>
            <p className="text-sm text-text-sub leading-relaxed">
              当院のウェブサイトでは、利用状況の分析やサービスの改善を目的としてCookieを使用する場合があります。ブラウザの設定によりCookieを無効にすることも可能です。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-lg font-semibold text-text-main mb-3">
              7. お問い合わせ窓口
            </h2>
            <p className="text-sm text-text-sub leading-relaxed">
              個人情報の取扱いに関するお問い合わせは、下記までご連絡ください。
            </p>
            <p className="text-sm text-text-sub mt-2">
              {siteConfig.clinicName}
              <br />
              {siteConfig.address}
              <br />
              TEL: {siteConfig.phoneGeneral}
            </p>
          </section>

          <p className="text-xs text-text-sub">制定日：2024年1月1日</p>
        </div>

        <div className="mt-8">
          <Breadcrumb items={[{ label: 'プライバシーポリシー' }]} />
        </div>
      </div>
    </>
  );
}
