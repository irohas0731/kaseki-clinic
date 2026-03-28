'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import { siteConfig, navigation } from '@/lib/site-config';
import { useHeaderScroll } from '@/hooks/useHeaderScroll';
import { useSubMenu } from '@/hooks/useSubMenu';
import { SubMenu } from './SubMenu';
import { MobileMenu } from './MobileMenu';

export function Header() {
  const { isVisible, isScrolled } = useHeaderScroll();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const subMenu = useSubMenu(300);

  const menuNavItem = navigation.find((n) => n.children);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Escape') subMenu.forceClose();
    },
    [subMenu]
  );

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-sm transition-transform duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${isScrolled ? 'shadow-sm' : ''}`}
      >
        {/* Top bar - PC */}
        <div className="hidden lg:block border-b border-border-main">
          <div className="mx-auto max-w-[1280px] px-4 flex items-center justify-end gap-4 py-2 text-xs">
            <a
              href={`tel:${siteConfig.phoneGeneral.replace(/-/g, '')}`}
              className="flex items-center gap-1 text-text-sub hover:text-primary"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
              一般予約 {siteConfig.phoneGeneral}
            </a>
            <a
              href={`tel:${siteConfig.phoneArtmake.replace(/-/g, '')}`}
              className="flex items-center gap-1 text-text-sub hover:text-primary"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
              アートメイク予約 {siteConfig.phoneArtmake}
            </a>
            <a
              href={siteConfig.lineUrl}
              className="inline-flex items-center gap-1 px-4 py-1.5 bg-line text-white rounded text-xs font-medium hover:opacity-90 transition-opacity"
            >
              LINE予約
            </a>
            <a
              href={siteConfig.webReserveUrl}
              className="inline-flex items-center gap-1 px-4 py-1.5 bg-cta text-white rounded text-xs font-medium hover:bg-cta-hover transition-colors"
            >
              WEB予約
            </a>
          </div>
        </div>

        {/* Main header */}
        <div className="mx-auto max-w-[1280px] px-4 flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col flex-shrink-0">
            <span className="font-serif text-primary text-lg lg:text-xl font-semibold leading-tight whitespace-nowrap">
              {siteConfig.clinicName}
            </span>
            <span className="font-serif text-primary text-[10px] lg:text-xs tracking-wider leading-tight whitespace-nowrap">
              {siteConfig.clinicNameEn}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center" aria-label="メインナビゲーション">
            {navigation.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={item.children ? subMenu.open : undefined}
                onMouseLeave={item.children ? subMenu.close : undefined}
                onKeyDown={item.children ? handleKeyDown : undefined}
              >
                {item.children ? (
                  <>
                    <Link
                      href={item.href}
                      className="px-2 xl:px-3 py-2 text-xs xl:text-sm whitespace-nowrap text-text-main hover:text-primary transition-colors"
                      aria-haspopup="true"
                      aria-expanded={subMenu.isOpen}
                    >
                      {item.label}
                    </Link>
                    <SubMenu items={item.children} isOpen={subMenu.isOpen} />
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="px-2 xl:px-3 py-2 text-xs xl:text-sm whitespace-nowrap text-text-main hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Hamburger */}
          <button
            className="lg:hidden w-11 h-11 flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="メニューを開く"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      {/* Spacer */}
      <div className="h-16 lg:h-[calc(5rem+2.5rem)]" />

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}
