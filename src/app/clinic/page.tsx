import { Metadata } from 'next';
import { doctors } from '@/lib/doctor-data';
import { Breadcrumb } from '@/components/common/Breadcrumb';

export const metadata: Metadata = {
  title: 'クリニック紹介',
  description:
    '化石美容クリニックのご紹介。院長挨拶・医師紹介・院内設備など、当院の特徴をご案内します。',
};

export default function ClinicPage() {
  const director = doctors[0];

  return (
    <>
      {/* ヘッダー */}
      <section className="bg-bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-4 text-center">
          <p className="font-serif text-sm tracking-widest text-accent mb-2">CLINIC</p>
          <h1 className="font-serif text-2xl md:text-4xl font-semibold text-text-main">
            クリニック紹介
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-[1280px] px-4">
        {/* 院長挨拶 */}
        <section className="py-12 lg:py-16">
          <h2 className="font-serif text-xl md:text-2xl font-semibold text-text-main mb-8">
            院長挨拶
          </h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/3 flex-shrink-0">
              <div className="aspect-[3/4] bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400">450 × 600</span>
              </div>
              <div className="mt-3 text-center">
                <p className="text-xs text-text-sub">{director.role}</p>
                <p className="font-serif text-lg font-semibold text-text-main">{director.name}</p>
                {director.nameEn && (
                  <p className="text-xs text-text-sub">{director.nameEn}</p>
                )}
              </div>
            </div>
            <div className="w-full md:w-2/3">
              {director.greeting && (
                <p className="text-sm text-text-main leading-relaxed mb-6">
                  {director.greeting}
                </p>
              )}
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-text-main mb-2">経歴</h3>
                <ul className="space-y-1">
                  {director.career.map((c, i) => (
                    <li key={i} className="text-sm text-text-sub">{c}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-text-main mb-2">資格</h3>
                <ul className="space-y-1">
                  {director.qualifications.map((q, i) => (
                    <li key={i} className="text-sm text-text-sub">{q}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 医師紹介 */}
        <section className="py-12 lg:py-16 border-t border-border-main">
          <h2 className="font-serif text-xl md:text-2xl font-semibold text-text-main mb-8">
            医師紹介
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doc) => (
              <div key={doc.name} className="text-center">
                <div className="aspect-[3/4] bg-gray-200 flex items-center justify-center mb-4">
                  <span className="text-gray-400">300 × 400</span>
                </div>
                <p className="text-xs text-accent tracking-wider">{doc.role}</p>
                <p className="font-serif text-lg font-semibold text-text-main mt-1">{doc.name}</p>
                {doc.nameEn && (
                  <p className="text-xs text-text-sub">{doc.nameEn}</p>
                )}
                <div className="mt-3 text-left">
                  <h4 className="text-xs font-semibold text-text-main mb-1">得意分野</h4>
                  <p className="text-xs text-text-sub">
                    {doc.specialties.join(' / ')}
                  </p>
                </div>
                <div className="mt-2 text-left">
                  <h4 className="text-xs font-semibold text-text-main mb-1">資格</h4>
                  <ul className="space-y-0.5">
                    {doc.qualifications.map((q, i) => (
                      <li key={i} className="text-xs text-text-sub">{q}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 院内設備 */}
        <section className="py-12 lg:py-16 border-t border-border-main">
          <h2 className="font-serif text-xl md:text-2xl font-semibold text-text-main mb-8">
            院内紹介
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['受付', '待合室', 'カウンセリングルーム', '施術室', 'パウダールーム', 'オペ室'].map(
              (room) => (
                <div key={room}>
                  <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">400 × 300</span>
                  </div>
                  <p className="text-xs text-text-sub mt-2 text-center">{room}</p>
                </div>
              )
            )}
          </div>
        </section>

        <Breadcrumb items={[{ label: 'クリニック紹介' }]} />
      </div>
    </>
  );
}
