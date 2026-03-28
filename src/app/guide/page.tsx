import { Metadata } from 'next';
import { siteConfig } from '@/lib/site-config';
import { Breadcrumb } from '@/components/common/Breadcrumb';

export const metadata: Metadata = {
  title: '初めての方へ',
  description:
    '化石美容クリニックが初めての方へ。当院の理念、施術の流れ、カウンセリングのご案内です。',
};

const steps = [
  {
    num: '01',
    title: 'ご予約',
    desc: 'お電話・LINE・WEB予約フォームからご予約をお願いいたします。ご不明な点がございましたらお気軽にお問い合わせください。',
  },
  {
    num: '02',
    title: 'ご来院・受付',
    desc: 'ご予約のお時間までにご来院ください。初診の方は問診票のご記入をお願いしております。',
  },
  {
    num: '03',
    title: 'カウンセリング',
    desc: '経験豊富な医師が丁寧にカウンセリングを行い、お悩みやご希望をお伺いいたします。シミュレーションや費用のご説明も行います。',
  },
  {
    num: '04',
    title: '施術',
    desc: 'カウンセリング内容に基づき施術を行います。施術内容により、当日施術または後日のご予約となります。',
  },
  {
    num: '05',
    title: 'アフターケア',
    desc: '施術後の注意事項をご説明し、必要に応じて処方を行います。ダウンタイム中のサポートもお任せください。',
  },
  {
    num: '06',
    title: '経過観察',
    desc: '施術内容に応じて経過観察のためのご来院をお願いしております。気になることがあればいつでもご相談ください。',
  },
];

export default function GuidePage() {
  return (
    <>
      {/* ヘッダー */}
      <section className="bg-bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-4 text-center">
          <p className="font-serif text-sm tracking-widest text-accent mb-2">GUIDE</p>
          <h1 className="font-serif text-2xl md:text-4xl font-semibold text-text-main">
            初めての方へ
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-[1280px] px-4">
        {/* 当院の理念 */}
        <section className="py-12 lg:py-16">
          <h2 className="font-serif text-xl md:text-2xl font-semibold text-text-main mb-6">
            当院の理念
          </h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2 aspect-[3/2] bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400">600 × 400</span>
            </div>
            <div className="w-full md:w-1/2">
              <p className="text-sm text-text-main leading-relaxed mb-4">
                化石美容クリニックは「患者さまお一人おひとりに寄り添った美容医療」を理念に掲げています。
              </p>
              <p className="text-sm text-text-sub leading-relaxed">
                美容医療は、外見だけでなく内面からの自信にもつながる大切な医療です。
                だからこそ、確かな技術と丁寧なカウンセリングで、皆さまの「なりたい自分」の実現をお手伝いいたします。
                どんな些細なご不安やご質問でも、お気軽にご相談ください。
              </p>
            </div>
          </div>
        </section>

        {/* 選ばれる理由 */}
        <section className="py-12 lg:py-16 border-t border-border-main">
          <h2 className="font-serif text-xl md:text-2xl font-semibold text-text-main mb-8">
            当院が選ばれる理由
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: '経験豊富な医師',
                desc: '形成外科専門医・美容外科認定医など、確かな資格と豊富な経験を持つ医師が担当いたします。',
              },
              {
                title: '丁寧なカウンセリング',
                desc: '初回は30分以上のカウンセリング時間を確保。ご希望をしっかりお伺いし、最適な施術プランをご提案します。',
              },
              {
                title: '充実のアフターケア',
                desc: '施術後の経過観察やアフターフォローも責任を持って対応。ダウンタイム中のご不安にも迅速にお答えします。',
              },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 bg-bg-secondary rounded-sm">
                <div className="w-16 h-16 mx-auto bg-primary-light rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary font-serif text-lg font-semibold">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="font-semibold text-text-main mb-2">{item.title}</h3>
                <p className="text-sm text-text-sub leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 施術の流れ */}
        <section className="py-12 lg:py-16 border-t border-border-main">
          <h2 className="font-serif text-xl md:text-2xl font-semibold text-text-main mb-8">
            施術の流れ
          </h2>
          <div className="max-w-3xl space-y-6">
            {steps.map((step) => (
              <div key={step.num} className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-serif text-sm font-semibold flex-shrink-0">
                  {step.num}
                </div>
                <div className="pt-1">
                  <h3 className="font-semibold text-text-main mb-1">{step.title}</h3>
                  <p className="text-sm text-text-sub leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 予約導線 */}
        <section className="py-16 lg:py-20 border-t border-border-main text-center">
          <h2 className="font-serif text-xl md:text-2xl font-semibold text-text-main mb-4">
            まずはお気軽にご相談ください
          </h2>
          <p className="text-sm text-text-sub mb-8 max-w-lg mx-auto">
            カウンセリングのご予約はお電話・LINE・WEBから承っております。
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href={`tel:${siteConfig.phoneGeneral.replace(/-/g, '')}`}
              className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-md text-sm font-medium hover:bg-primary hover:text-white transition-colors"
            >
              {siteConfig.phoneGeneral}
            </a>
            <a
              href={siteConfig.lineUrl}
              className="inline-flex items-center gap-2 px-6 py-3 bg-line text-white rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
            >
              LINE予約
            </a>
            <a
              href={siteConfig.webReserveUrl}
              className="inline-flex items-center gap-2 px-6 py-3 bg-cta text-white rounded-md text-sm font-medium hover:bg-cta-hover transition-colors"
            >
              WEB予約
            </a>
          </div>
        </section>

        <Breadcrumb items={[{ label: '初めての方へ' }]} />
      </div>
    </>
  );
}
