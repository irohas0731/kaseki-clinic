import { CampaignItem } from '@/types';

export const campaigns: CampaignItem[] = [
  {
    id: 'campaign-001',
    title: '春の二重キャンペーン',
    image: '/images/campaign-01.jpg',
    startDate: '2026-03-01',
    endDate: '2026-04-30',
    description:
      '春の新生活応援キャンペーン！二重埋没法（2点留め）が通常¥165,000のところ、期間限定で¥132,000でご提供いたします。初めての方も安心のカウンセリング付き。',
    targetTreatments: ['futae-maibotsu'],
    notes:
      '他のキャンペーンとの併用はできません。カウンセリング当日の施術も可能です。',
  },
  {
    id: 'campaign-002',
    title: '冬のダーマペンキャンペーン',
    image: '/images/campaign-02.jpg',
    startDate: '2025-12-01',
    endDate: '2026-01-31',
    description:
      '冬季限定でダーマペン4全顔が初回¥22,000！さらにエクソソーム併用で肌再生効果をアップ。乾燥が気になるこの季節に、お肌のメンテナンスを始めませんか。',
    targetTreatments: ['dermapen4'],
    notes: '終了済みキャンペーンです。次回開催をお待ちください。',
  },
];
