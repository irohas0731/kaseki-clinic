'use client';

import Link from 'next/link';
import { Treatment } from '@/types';
import { equipmentItems } from '@/lib/equipment-data';
import { siteConfig } from '@/lib/site-config';
import { Accordion } from '@/components/ui/Accordion';
import { StepFlow } from '@/components/ui/StepFlow';
import { PriceTable } from '@/components/ui/PriceTable';
import { BeforeAfter } from '@/components/ui/BeforeAfter';
import { ContentBlock } from '@/components/ui/ContentBlock';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface TreatmentDetailProps {
  treatment: Treatment;
}

function SectionHeading({ title, titleEn }: { title: string; titleEn?: string }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  return (
    <div ref={ref} className={`mb-8 animate-fade-in-up ${isVisible ? 'is-visible' : ''}`}>
      {titleEn && <p className="font-serif text-sm tracking-widest text-accent mb-1">{titleEn}</p>}
      <h2 className="font-serif text-[22px] md:text-[28px] font-semibold text-text-main">{title}</h2>
    </div>
  );
}

export function TreatmentDetail({ treatment }: TreatmentDetailProps) {
  const relatedEquipmentItems = (treatment.relatedEquipment || [])
    .map((slug) => equipmentItems.find((e) => e.slug === slug))
    .filter(Boolean);

  return (
    <>
      {/* 1. ヘッダー画像 */}
      <section className="relative w-full aspect-[2/1] md:aspect-[1200/600] bg-gray-300 flex items-center justify-center">
        <span className="text-gray-500">1200 × 600</span>
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 text-white text-center px-4">
          {treatment.categoryLabel && (
            <span className="text-xs tracking-widest mb-2 opacity-80">{treatment.categoryLabel}</span>
          )}
          <h1 className="font-serif text-2xl md:text-4xl font-semibold">{treatment.name}</h1>
          {treatment.nameEn && (
            <p className="font-serif text-sm tracking-wider mt-1 opacity-70">{treatment.nameEn}</p>
          )}
        </div>
      </section>

      <div className="mx-auto max-w-[1280px] px-4">
        {/* 2. 概要説明文 */}
        <section className="py-12 lg:py-16">
          <p className="text-sm md:text-base text-text-main leading-relaxed max-w-3xl">
            {treatment.description}
          </p>
        </section>

        {/* 3. このような方におすすめ */}
        <section className="py-12 lg:py-16 border-t border-border-main">
          <SectionHeading title="このような方におすすめ" titleEn="RECOMMENDED" />
          <ul className="space-y-3 max-w-3xl">
            {treatment.targetAudience.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-text-main">
                <span className="w-5 h-5 rounded-full bg-primary-light text-primary flex items-center justify-center flex-shrink-0 text-xs mt-0.5">&#x2713;</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* 4. 当院の特徴・メリット */}
        {treatment.features.length > 0 && (
          <section className="py-12 lg:py-16 border-t border-border-main">
            <SectionHeading title="当院の特徴・メリット" titleEn="FEATURES" />
            <div className="space-y-12">
              {treatment.features.map((block, i) => (
                <ContentBlock key={i} block={block} index={i} />
              ))}
            </div>
          </section>
        )}

        {/* 5. 施術の流れ */}
        <section className="py-12 lg:py-16 border-t border-border-main">
          <SectionHeading title="施術の流れ" titleEn="FLOW" />
          <StepFlow steps={treatment.flow} />
        </section>

        {/* 6. 術後経過とアフターフォロー */}
        {treatment.afterCare && (
          <section className="py-12 lg:py-16 border-t border-border-main">
            <SectionHeading title="術後経過とアフターフォロー" titleEn="AFTERCARE" />
            <p className="text-sm text-text-sub leading-relaxed max-w-3xl">{treatment.afterCare}</p>
            <p className="text-sm text-text-sub mt-4">
              <span className="font-medium text-text-main">ダウンタイム：</span>
              {treatment.downtime}
            </p>
          </section>
        )}

        {/* 7. リスク・副作用 */}
        <section className="py-12 lg:py-16 border-t border-border-main">
          <SectionHeading title="リスク・副作用" titleEn="RISKS" />
          <ul className="space-y-2 max-w-3xl">
            {treatment.risks.map((risk, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-text-sub">
                <span className="text-red-400 mt-0.5">&#x25CF;</span>
                {risk}
              </li>
            ))}
          </ul>
        </section>

        {/* 8. 注意事項 */}
        {treatment.precautions && treatment.precautions.length > 0 && (
          <section className="py-12 lg:py-16 border-t border-border-main">
            <SectionHeading title="注意事項" titleEn="PRECAUTIONS" />
            <ul className="space-y-2 max-w-3xl">
              {treatment.precautions.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-text-sub">
                  <span className="text-accent mt-0.5">&#x25CF;</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* 9. 禁忌事項 */}
        {treatment.contraindications && treatment.contraindications.length > 0 && (
          <section className="py-12 lg:py-16 border-t border-border-main">
            <SectionHeading title="禁忌事項" titleEn="CONTRAINDICATIONS" />
            <ul className="space-y-2 max-w-3xl">
              {treatment.contraindications.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-text-sub">
                  <span className="text-red-500 mt-0.5">&#x2716;</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* 10. 料金表 */}
        <section className="py-12 lg:py-16 border-t border-border-main">
          <SectionHeading title="料金" titleEn="PRICE" />
          <div className="max-w-3xl">
            <PriceTable items={treatment.pricing} />
            <div className="mt-4">
              <Link href="/price" className="text-sm text-primary hover:text-primary-dark transition-colors">
                料金一覧を見る →
              </Link>
            </div>
          </div>
        </section>

        {/* 11. 症例写真 */}
        {treatment.cases.length > 0 && (
          <section className="py-12 lg:py-16 border-t border-border-main">
            <SectionHeading title="症例写真" titleEn="CASE PHOTOS" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {treatment.cases.map((c) => (
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
          </section>
        )}

        {/* 12. 関連する機器・製剤 */}
        {relatedEquipmentItems.length > 0 && (
          <section className="py-12 lg:py-16 border-t border-border-main">
            <SectionHeading title="関連する機器・製剤" titleEn="RELATED EQUIPMENT" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedEquipmentItems.map((eq) => eq && (
                <Link
                  key={eq.slug}
                  href={`/equipment/${eq.slug}`}
                  className="group flex gap-4 items-center p-4 border border-border-main rounded-sm hover:border-primary transition-colors"
                >
                  <div className="w-20 h-20 bg-gray-200 flex items-center justify-center flex-shrink-0">
                    <span className="text-gray-400 text-[10px]">80×80</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-text-main group-hover:text-primary transition-colors">
                      {eq.name}
                    </h4>
                    <p className="text-xs text-text-sub mt-1 line-clamp-2">{eq.summary}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* 13. よくある質問 */}
        {treatment.faq.length > 0 && (
          <section className="py-12 lg:py-16 border-t border-border-main">
            <SectionHeading title="よくある質問" titleEn="FAQ" />
            <div className="max-w-3xl">
              <Accordion items={treatment.faq} />
            </div>
          </section>
        )}

        {/* 14. 予約導線 */}
        <section className="py-16 lg:py-20 border-t border-border-main">
          <div className="text-center">
            <h2 className="font-serif text-xl md:text-2xl font-semibold text-text-main mb-4">
              ご予約・ご相談はこちら
            </h2>
            <p className="text-sm text-text-sub mb-8 max-w-lg mx-auto">
              {treatment.name}に関するご質問やカウンセリングのご予約は、お電話・LINE・WEBから承っております。
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href={`tel:${siteConfig.phoneGeneral.replace(/-/g, '')}`}
                className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-md text-sm font-medium hover:bg-primary hover:text-white transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
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
          </div>
        </section>
      </div>
    </>
  );
}
