import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';

export function Footer() {
  const footerLinks = [
    {
      title: '施術メニュー',
      links: [
        { label: '美容外科', href: '/menu/surgery' },
        { label: '美容皮膚科', href: '/menu/dermatology' },
        { label: 'アートメイク', href: '/artmake' },
        { label: '料金', href: '/price' },
      ],
    },
    {
      title: 'クリニック情報',
      links: [
        { label: '初めての方へ', href: '/guide' },
        { label: 'クリニック紹介', href: '/clinic' },
        { label: '診察案内', href: '/info' },
        { label: 'アクセス', href: '/access' },
      ],
    },
    {
      title: 'その他',
      links: [
        { label: '症例写真', href: '/case' },
        { label: 'コスメ', href: '/cosme' },
        { label: 'お知らせ', href: '/news' },
        { label: 'キャンペーン・特典', href: '/campaign' },
        { label: 'お問い合わせ', href: '/contact' },
        { label: 'プライバシーポリシー', href: '/privacy' },
      ],
    },
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-[1280px] px-4 py-16 lg:py-20">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Clinic info */}
          <div>
            <Link href="/" className="block mb-4">
              <span className="font-serif text-xl font-semibold block">{siteConfig.clinicName}</span>
              <span className="font-serif text-xs tracking-wider opacity-80">{siteConfig.clinicNameEn}</span>
            </Link>
            <div className="text-sm opacity-80 space-y-1">
              <p>{siteConfig.postalCode}</p>
              <p>{siteConfig.address}</p>
              <p className="mt-3">
                一般予約：
                <a href={`tel:${siteConfig.phoneGeneral.replace(/-/g, '')}`} className="hover:opacity-100">
                  {siteConfig.phoneGeneral}
                </a>
              </p>
              <p>
                アートメイク予約：
                <a href={`tel:${siteConfig.phoneArtmake.replace(/-/g, '')}`} className="hover:opacity-100">
                  {siteConfig.phoneArtmake}
                </a>
              </p>
              <p className="mt-2">休診日：{siteConfig.closedDays}</p>
            </div>

            {/* SNS */}
            <div className="flex gap-4 mt-4">
              <a href={siteConfig.sns.instagram} className="opacity-80 hover:opacity-100 transition-opacity" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </a>
              <a href={siteConfig.sns.facebook} className="opacity-80 hover:opacity-100 transition-opacity" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
              <a href={siteConfig.sns.youtube} className="opacity-80 hover:opacity-100 transition-opacity" aria-label="YouTube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
              </a>
            </div>
          </div>

          {/* Footer links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="font-medium text-sm mb-4 opacity-90">{group.title}</h3>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="mt-12 flex flex-wrap gap-3 justify-center">
          <a
            href={siteConfig.lineUrl}
            className="inline-flex items-center gap-2 px-8 py-3 bg-line text-white rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
          >
            LINE予約
          </a>
          <a
            href={siteConfig.webReserveUrl}
            className="inline-flex items-center gap-2 px-8 py-3 bg-cta text-white rounded-md text-sm font-medium hover:bg-cta-hover transition-colors"
          >
            WEB予約
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/20">
        <div className="mx-auto max-w-[1280px] px-4 py-4 text-center text-xs opacity-60">
          &copy; {new Date().getFullYear()} {siteConfig.clinicName} All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
