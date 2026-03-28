'use client';

import { StepItem } from '@/types';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface StepFlowProps {
  steps: StepItem[];
}

function StepCard({ step }: { step: StepItem }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div ref={ref} className={`animate-fade-in-up ${isVisible ? 'is-visible' : ''}`}>
      <div className="flex flex-col items-center text-center">
        <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-serif text-lg font-semibold mb-4">
          {String(step.stepNumber).padStart(2, '0')}
        </div>
        {step.image && (
          <div className="w-full aspect-[700/480] bg-gray-200 flex items-center justify-center mb-4 rounded-sm">
            <span className="text-gray-400 text-sm">700 × 480</span>
          </div>
        )}
        <h4 className="font-semibold text-text-main mb-2">{step.title}</h4>
        <p className="text-sm text-text-sub leading-relaxed">{step.description}</p>
      </div>
    </div>
  );
}

export function StepFlow({ steps }: StepFlowProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
      {steps.map((step) => (
        <StepCard key={step.stepNumber} step={step} />
      ))}
    </div>
  );
}
