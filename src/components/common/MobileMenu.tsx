'use client';

import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { navigation } from '@/lib/site-config';
import { siteConfig } from '@/lib/site-config';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [expandedNav, setExpandedNav] = useState<string | null>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      setExpandedNav(null);
    }
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  const toggleAccordion = (label: string) => {
    setExpandedNav((prev) => (prev === label ? null : label));
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`mobile-menu-overlay fixed inset-0 bg-black/50 z-40 ${isOpen ? 'is-open' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        className={`mobile-menu-panel fixed top-0 right-0 h-full w-[85%] max-w-[400px] bg-white z-50 overflow-y-auto ${isOpen ? 'is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="メニュー"
      >
        {/* Close button */}
        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="w-11 h-11 flex items-center justify-center text-text-main"
            aria-label="メニューを閉じる"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <nav className="px-6 pb-8">
          <ul className="space-y-1">
            {navigation.map((item) => (
              <li key={item.label}>
                {item.children ? (
                  <>
                    <button
                      onClick={() => toggleAccordion(item.label)}
                      className="w-full flex items-center justify-between py-4 text-left text-text-main font-medium border-b border-border-main"
                      aria-expanded={expandedNav === item.label}
                      aria-controls={`mobile-sub-${item.label}`}
                    >
                      <span>{item.label}</span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className={`transition-transform ${expandedNav === item.label ? 'rotate-180' : ''}`}
                      >
                        <polyline points="4 6 8 10 12 6" />
                      </svg>
                    </button>
                    <div
                      id={`mobile-sub-${item.label}`}
                      className="accordion-content"
                      style={{
                        maxHeight: expandedNav === item.label ? `${item.children.length * 52}px` : '0',
                      }}
                      aria-hidden={expandedNav !== item.label}
                    >
                      <ul className="pl-4 py-2 space-y-1">
                        <li>
                          <Link
                            href={item.href}
                            onClick={onClose}
                            className="block py-2 text-sm text-text-sub hover:text-primary"
                          >
                            {item.label}トップ
                          </Link>
                        </li>
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={onClose}
                              className="block py-2 text-sm text-text-sub hover:text-primary"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="block py-4 text-text-main font-medium border-b border-border-main"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA buttons */}
        <div className="px-6 pb-8 space-y-3">
          <a
            href={`tel:${siteConfig.phoneGeneral.replace(/-/g, '')}`}
            className="flex items-center justify-center gap-2 w-full py-3 bg-primary text-white rounded-md text-sm font-medium"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
            一般予約 {siteConfig.phoneGeneral}
          </a>
          <a
            href={`tel:${siteConfig.phoneArtmake.replace(/-/g, '')}`}
            className="flex items-center justify-center gap-2 w-full py-3 bg-primary-dark text-white rounded-md text-sm font-medium"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
            アートメイク予約 {siteConfig.phoneArtmake}
          </a>
          <a
            href={siteConfig.lineUrl}
            className="flex items-center justify-center gap-2 w-full py-3 bg-line text-white rounded-md text-sm font-medium"
          >
            LINE予約
          </a>
          <a
            href={siteConfig.webReserveUrl}
            className="flex items-center justify-center gap-2 w-full py-3 bg-cta text-white rounded-md text-sm font-medium"
          >
            WEB予約
          </a>
        </div>

        {/* SNS */}
        <div className="px-6 pb-8 flex gap-4 justify-center">
          <a href={siteConfig.sns.instagram} className="text-text-sub hover:text-primary" aria-label="Instagram">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
          </a>
          <a href={siteConfig.sns.facebook} className="text-text-sub hover:text-primary" aria-label="Facebook">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
          </a>
          <a href={siteConfig.sns.youtube} className="text-text-sub hover:text-primary" aria-label="YouTube">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
          </a>
        </div>
      </div>
    </>
  );
}
