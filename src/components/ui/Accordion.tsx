'use client';

import { useState } from 'react';
import { FaqItem } from '@/types';

interface AccordionProps {
  items: FaqItem[];
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-border-main border-y border-border-main">
      {items.map((item, index) => (
        <div key={index}>
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between py-5 text-left gap-4"
            aria-expanded={openIndex === index}
            aria-controls={`accordion-panel-${index}`}
          >
            <span className="flex items-start gap-3">
              <span className="text-primary font-semibold text-sm mt-0.5">Q</span>
              <span className="text-sm font-medium text-text-main">{item.question}</span>
            </span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className={`flex-shrink-0 text-text-sub transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            >
              <polyline points="5 8 10 13 15 8" />
            </svg>
          </button>
          <div
            id={`accordion-panel-${index}`}
            className="accordion-content"
            style={{ maxHeight: openIndex === index ? '500px' : '0' }}
            aria-hidden={openIndex !== index}
          >
            <div className="pb-5 pl-8">
              <div className="flex items-start gap-3">
                <span className="text-accent font-semibold text-sm mt-0.5">A</span>
                <p className="text-sm text-text-sub leading-relaxed">{item.answer}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
