'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { siteConfig } from '@/lib/site-config';

interface InstagramFeedProps {
  embedCode?: string;
  placeholderCount?: number;
}

export function InstagramFeed({ embedCode, placeholderCount = 6 }: InstagramFeedProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-20 lg:py-[120px]">
      <div className="mx-auto max-w-[1280px] px-4">
        <div ref={ref} className={`text-center mb-12 animate-fade-in-up ${isVisible ? 'is-visible' : ''}`}>
          <p className="font-serif text-sm tracking-widest text-accent mb-2">FOLLOW US ON INSTAGRAM</p>
          <h2 className="font-serif text-[22px] md:text-[28px] font-semibold text-text-main">Instagram</h2>
          <a
            href={siteConfig.sns.instagram}
            className="inline-block mt-2 text-sm text-text-sub hover:text-primary transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            @kaseki_beauty_clinic
          </a>
        </div>

        {embedCode ? (
          <div dangerouslySetInnerHTML={{ __html: embedCode }} />
        ) : (
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-4">
            {Array.from({ length: placeholderCount }).map((_, i) => (
              <div
                key={i}
                className="aspect-square bg-gray-200 flex items-center justify-center"
              >
                <span className="text-gray-400 text-xs">300 × 300</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
