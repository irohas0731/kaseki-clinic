import { SiteConfig, NavItem } from '@/types';

export const siteConfig: SiteConfig = {
  clinicName: '化石美容クリニック',
  clinicNameEn: 'KASEKI BEAUTY CLINIC',
  address: '大阪府大阪市中央区○○1-2-3 ○○ビル5F',
  postalCode: '〒540-0000',
  phoneGeneral: '06-XXXX-XXXX',
  phoneArtmake: '06-YYYY-YYYY',
  lineUrl: '#',
  webReserveUrl: '#',
  hours: [
    { day: '月', time: '10:00〜19:00' },
    { day: '火', time: '10:00〜19:00' },
    { day: '水', time: '10:00〜19:00' },
    { day: '木', time: '10:00〜19:00' },
    { day: '金', time: '10:00〜19:00' },
    { day: '土', time: '10:00〜18:00' },
    { day: '日', time: '休診' },
    { day: '祝', time: '休診' },
  ],
  closedDays: '日曜・祝日',
  sns: {
    instagram: '#',
    facebook: '#',
    youtube: '#',
  },
  instagramEmbedCode: '',
};

export const navigation: NavItem[] = [
  { label: 'ホーム', href: '/' },
  { label: '初めての方へ', href: '/guide' },
  { label: 'クリニック紹介', href: '/clinic' },
  {
    label: '施術をさがす',
    href: '/menu',
    children: [
      { label: '美容外科', href: '/menu/surgery' },
      { label: '美容皮膚科', href: '/menu/dermatology' },
      { label: 'アートメイク', href: '/artmake' },
    ],
  },
  { label: '診察案内', href: '/info' },
  { label: '料金', href: '/price' },
  { label: '症例写真', href: '/case' },
  { label: 'コスメ', href: '/cosme' },
  { label: 'アクセス', href: '/access' },
  { label: 'お知らせ', href: '/news' },
  { label: 'キャンペーン・特典', href: '/campaign' },
  { label: 'お問い合わせ', href: '/contact' },
];
