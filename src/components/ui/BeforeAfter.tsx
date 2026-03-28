'use client';

import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  title: string;
}

export function BeforeAfter({ title }: BeforeAfterProps) {
  const [activeView, setActiveView] = useState<'before' | 'after'>('after');
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <div ref={ref} className="overflow-hidden">
      {/* PC: 横並び */}
      <div className="hidden md:grid grid-cols-2 gap-4">
        <div className={`animate-slide-in-left ${isVisible ? 'is-visible' : ''}`}>
          <div className="aspect-[3/4] bg-gray-200 flex items-center justify-center relative">
            <span className="text-gray-400 text-sm">600 × 800</span>
            <span className="absolute bottom-2 left-2 text-xs bg-black/60 text-white px-2 py-1 rounded">Before</span>
          </div>
        </div>
        <div className={`animate-slide-in-right ${isVisible ? 'is-visible' : ''}`}>
          <div className="aspect-[3/4] bg-gray-300 flex items-center justify-center relative">
            <span className="text-gray-500 text-sm">600 × 800</span>
            <span className="absolute bottom-2 left-2 text-xs bg-black/60 text-white px-2 py-1 rounded">After</span>
          </div>
        </div>
      </div>

      {/* SP: タップ切り替え */}
      <div className="md:hidden">
        <div className="flex gap-2 mb-3">
          <button
            onClick={() => setActiveView('before')}
            className={`flex-1 py-2 text-sm rounded-sm transition-colors ${
              activeView === 'before'
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-text-sub'
            }`}
          >
            Before
          </button>
          <button
            onClick={() => setActiveView('after')}
            className={`flex-1 py-2 text-sm rounded-sm transition-colors ${
              activeView === 'after'
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-text-sub'
            }`}
          >
            After
          </button>
        </div>
        <div className="aspect-[3/4] bg-gray-200 flex items-center justify-center relative">
          <span className="text-gray-400 text-sm">600 × 800</span>
          <span className="absolute bottom-2 left-2 text-xs bg-black/60 text-white px-2 py-1 rounded">
            {activeView === 'before' ? 'Before' : 'After'}
          </span>
        </div>
      </div>

      <p className="text-xs text-text-sub mt-2 text-center">{title}</p>
    </div>
  );
}
