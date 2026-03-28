'use client';

import Link from 'next/link';
import { CaseItem } from '@/types';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface CaseCarouselProps {
  cases: CaseItem[];
  maxDisplay?: number;
}

export function CaseCarousel({ cases, maxDisplay = 6 }: CaseCarouselProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const displayCases = cases.slice(0, maxDisplay);

  if (displayCases.length === 0) return null;

  return (
    <section className="py-20 lg:py-[120px] bg-bg-sub">
      <div className="mx-auto max-w-[1280px] px-4">
        <div ref={ref} className={`text-center mb-12 animate-fade-in-up ${isVisible ? 'is-visible' : ''}`}>
          <p className="font-serif text-sm tracking-widest text-accent mb-2">CASE PHOTOS</p>
          <h2 className="font-serif text-[22px] md:text-[28px] font-semibold text-text-main">症例写真</h2>
        </div>

        <div className="flex gap-4 overflow-x-auto scroll-snap-x pb-4 -mx-4 px-4">
          {displayCases.map((caseItem) => (
            <div
              key={caseItem.id}
              className="flex-shrink-0 w-[280px] md:w-[320px]"
            >
              <div className="bg-white rounded-sm overflow-hidden shadow-sm">
                <div className="grid grid-cols-2">
                  <div className="aspect-[3/4] bg-gray-200 flex items-center justify-center relative">
                    <span className="text-gray-400 text-xs">Before</span>
                    <span className="absolute bottom-1 left-1 text-[10px] bg-black/50 text-white px-1.5 py-0.5 rounded">Before</span>
                  </div>
                  <div className="aspect-[3/4] bg-gray-300 flex items-center justify-center relative">
                    <span className="text-gray-500 text-xs">After</span>
                    <span className="absolute bottom-1 left-1 text-[10px] bg-black/50 text-white px-1.5 py-0.5 rounded">After</span>
                  </div>
                </div>
                <div className="p-4">
                  <p className="font-medium text-sm text-text-main">{caseItem.treatmentName}</p>
                  <p className="text-xs text-text-sub mt-1">{caseItem.description}</p>
                  <p className="text-xs text-accent mt-1">{caseItem.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/case"
            className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary-dark transition-colors font-medium"
          >
            もっと見る
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
