'use client';

import { ContentBlock as ContentBlockType } from '@/types';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface ContentBlockProps {
  block: ContentBlockType;
  index?: number;
}

export function ContentBlock({ block, index = 0 }: ContentBlockProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const isReversed = index % 2 !== 0;

  return (
    <div ref={ref} className={`animate-fade-in-up ${isVisible ? 'is-visible' : ''}`}>
      {/* A: 全幅画像＋下部テキスト */}
      {block.layout === 'A' && (
        <div>
          {block.image && (
            <div className="w-full aspect-[2/1] bg-gray-200 flex items-center justify-center mb-6">
              <span className="text-gray-400 text-sm">1200 × 600</span>
            </div>
          )}
          {block.title && <h3 className="text-lg font-bold text-text-main mb-3">{block.title}</h3>}
          {block.text && <p className="text-sm text-text-sub leading-relaxed">{block.text}</p>}
        </div>
      )}

      {/* C: テキストのみ */}
      {block.layout === 'C' && (
        <div>
          {block.title && <h3 className="text-lg font-bold text-text-main mb-3">{block.title}</h3>}
          {block.text && <p className="text-sm text-text-sub leading-relaxed mb-4">{block.text}</p>}
          {block.items && (
            <ul className="space-y-2">
              {block.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-text-sub">
                  <span className="text-primary mt-1">&#x2022;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {/* D: 左画像＋右テキスト交互 */}
      {block.layout === 'D' && (
        <div className={`flex flex-col md:flex-row gap-6 md:gap-10 items-center ${isReversed ? 'md:flex-row-reverse' : ''}`}>
          {block.image && (
            <div className="w-full md:w-1/2 aspect-[3/2] bg-gray-200 flex items-center justify-center flex-shrink-0">
              <span className="text-gray-400 text-sm">600 × 400</span>
            </div>
          )}
          <div className="w-full md:w-1/2">
            {block.title && <h3 className="text-lg font-bold text-text-main mb-3">{block.title}</h3>}
            {block.text && <p className="text-sm text-text-sub leading-relaxed">{block.text}</p>}
          </div>
        </div>
      )}

      {/* E: ギャラリーグリッド */}
      {block.layout === 'E' && (
        <div>
          {block.title && <h3 className="text-lg font-bold text-text-main mb-4">{block.title}</h3>}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {(block.items || []).map((_, i) => (
              <div key={i} className="aspect-square bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400 text-xs">Gallery</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
