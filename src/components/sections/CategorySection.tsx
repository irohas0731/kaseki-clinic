'use client';

import Link from 'next/link';
import { CategoryItem } from '@/types';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface CategorySectionProps {
  categories: CategoryItem[];
}

function CategoryCard({ category }: { category: CategoryItem }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div ref={ref} className={`animate-fade-in-up ${isVisible ? 'is-visible' : ''}`}>
      <Link href={category.href} className="group block relative overflow-hidden">
        <div className="aspect-[3/2] bg-gray-300 flex items-center justify-center relative">
          <span className="text-gray-500 text-sm z-10">1200 × 800</span>
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300" />
          <div className="absolute inset-0 transform group-hover:scale-[1.03] transition-transform duration-500 bg-gray-300" />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <p className="font-serif text-sm tracking-widest mb-2 opacity-90">{category.titleEn}</p>
          <h3 className="font-serif text-xl md:text-2xl font-semibold">{category.title}</h3>
          <p className="mt-2 text-sm opacity-80 max-w-xs">{category.description}</p>
        </div>
      </Link>
    </div>
  );
}

export function CategorySection({ categories }: CategorySectionProps) {
  return (
    <section className="py-20 lg:py-[120px]">
      <div className="mx-auto max-w-[1280px] px-4">
        <div className="text-center mb-12">
          <p className="font-serif text-sm tracking-widest text-accent mb-2">TREATMENT MENU</p>
          <h2 className="font-serif text-[22px] md:text-[28px] font-semibold text-text-main">施術カテゴリ</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {categories.map((cat) => (
            <CategoryCard key={cat.href} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
