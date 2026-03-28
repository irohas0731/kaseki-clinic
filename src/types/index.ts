// ===== 施術データ型 =====
export interface Treatment {
  slug: string;
  name: string;
  nameEn?: string;
  category: 'surgery' | 'dermatology' | 'artmake';
  subcategory?: string;
  summary: string;
  description: string;
  thumbnail: string;
  heroImage: string;
  categoryLabel?: string;
  targetAudience: string[];
  features: ContentBlock[];
  flow: StepItem[];
  afterCare?: string;
  pricing: PriceItem[];
  risks: string[];
  precautions?: string[];
  contraindications?: string[];
  downtime: string;
  faq: FaqItem[];
  cases: CaseItem[];
  relatedEquipment?: string[];
}

// ===== コンテンツブロック型 =====
export interface ContentBlock {
  layout: 'A' | 'B' | 'C' | 'D' | 'E';
  title?: string;
  text?: string;
  items?: string[];
  image?: string;
  imageAlt?: string;
}

// ===== 機器・製剤データ型 =====
export interface EquipmentItem {
  slug: string;
  name: string;
  nameEn?: string;
  type: 'device' | 'product';
  image: string;
  summary: string;
  description: string;
  features: string[];
  applicableTreatments: string[];
  pricing?: PriceItem[];
  risks?: string[];
}

// ===== 医師データ型 =====
export interface DoctorItem {
  name: string;
  nameEn?: string;
  role: string;
  image: string;
  greeting?: string;
  career: string[];
  qualifications: string[];
  specialties: string[];
}

// ===== コスメデータ型 =====
export interface CosmeItem {
  id: string;
  name: string;
  brand?: string;
  category: 'skincare' | 'makeup' | 'supplement' | 'other';
  image: string;
  price: string;
  description: string;
  ecUrl?: string;
}

// ===== 料金 =====
export interface PriceItem {
  name: string;
  price: string;
  note?: string;
}

// ===== ステップ =====
export interface StepItem {
  stepNumber: number;
  title: string;
  description: string;
  image?: string;
}

// ===== FAQ =====
export interface FaqItem {
  question: string;
  answer: string;
}

// ===== 症例 =====
export interface CaseItem {
  id: string;
  treatmentSlug: string;
  treatmentName: string;
  category: 'surgery' | 'dermatology' | 'artmake';
  beforeImage: string;
  afterImage: string;
  description: string;
  price: string;
  risks: string;
}

// ===== お知らせ =====
export interface NewsItem {
  id: string;
  date: string;
  title: string;
  content: string;
  category: 'お知らせ' | 'キャンペーン' | 'メディア掲載';
}

// ===== キャンペーン =====
export interface CampaignItem {
  id: string;
  title: string;
  image: string;
  startDate: string;
  endDate: string;
  description: string;
  targetTreatments: string[];
  notes: string;
}

// ===== サイト設定 =====
export interface SiteConfig {
  clinicName: string;
  clinicNameEn: string;
  address: string;
  postalCode: string;
  phoneGeneral: string;
  phoneArtmake: string;
  lineUrl: string;
  webReserveUrl: string;
  hours: { day: string; time: string }[];
  closedDays: string;
  sns: { instagram: string; facebook: string; youtube: string };
  instagramEmbedCode?: string;
}

// ===== ナビゲーション =====
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

// ===== パンくず =====
export interface BreadcrumbItem {
  label: string;
  href?: string;
}

// ===== カテゴリ =====
export interface CategoryItem {
  title: string;
  titleEn: string;
  image: string;
  href: string;
  description: string;
}
