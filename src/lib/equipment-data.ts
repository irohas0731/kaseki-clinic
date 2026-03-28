import { EquipmentItem } from '@/types';

export const equipmentItems: EquipmentItem[] = [
  // ===== 機器 =====
  {
    slug: 'discovery-pico-plus',
    name: 'ディスカバリーピコプラス',
    nameEn: 'Discovery Pico Plus',
    type: 'device',
    image: '/images/equipment-discovery-pico.jpg',
    summary: 'シミ・くすみ・タトゥー除去に対応する最新ピコ秒レーザー',
    description:
      'ディスカバリーピコプラスは、イタリアQuanta System社製の医療用ピコ秒レーザーです。ピコ秒（1兆分の1秒）の超短パルスにより、従来のレーザーでは難しかった薄いシミや肝斑にも対応可能。3波長（532nm・694nm・1064nm）を搭載し、幅広い色素性病変に対応します。ダウンタイムも従来のレーザーと比較して大幅に軽減されています。',
    features: [
      'ピコ秒パルスによる低侵襲治療',
      '3波長搭載で幅広い症状に対応',
      'フラクショナルモードによる肌質改善',
      'ダウンタイムが短い',
      'タトゥー除去にも対応',
    ],
    applicableTreatments: ['pico-laser', 'lumecca'],
    pricing: [
      { name: 'ピコトーニング 全顔', price: '¥22,000', note: '初回' },
      { name: 'ルビーフラクショナル 全顔', price: '¥36,000', note: '初回' },
      { name: 'シミ取り放題 全顔', price: '¥110,000' },
    ],
    risks: [
      '施術部位の一時的な赤み・腫れ',
      'かさぶたの形成（1〜2週間程度）',
      '色素沈着のリスク（紫外線対策が必要）',
    ],
  },
  {
    slug: 'potenza',
    name: 'ポテンツァ',
    nameEn: 'POTENZA',
    type: 'device',
    image: '/images/equipment-potenza.jpg',
    summary: 'マイクロニードルRF治療器。ニキビ跡・毛穴・肝斑に',
    description:
      'ポテンツァは、マイクロニードルと高周波（RF）を組み合わせた次世代の美肌治療器です。針先からRFエネルギーを直接真皮層に届けることで、コラーゲンの生成を促進し、ニキビ跡・毛穴の開き・肝斑・小じわなど多様な肌悩みにアプローチします。独自のドラッグデリバリーシステムにより、薬剤の浸透効率も大幅に向上します。',
    features: [
      'ニードルRFによる真皮層への直接アプローチ',
      'ドラッグデリバリー機能搭載',
      '肝斑治療にも対応',
      'ダウンタイムが比較的短い',
      '多様なチップで幅広い症状に対応',
    ],
    applicableTreatments: ['potenza'],
    pricing: [
      { name: 'ポテンツァ 全顔', price: '¥88,000' },
    ],
    risks: [
      '施術直後の赤み・腫れ（2〜3日程度）',
      '内出血（1週間程度で消失）',
      '施術部位のかさつき',
    ],
  },
  {
    slug: 'ultraformer',
    name: 'ウルトラフォーマー',
    nameEn: 'Ultraformer MPT',
    type: 'device',
    image: '/images/equipment-ultraformer.jpg',
    summary: 'たるみ治療のHIFU機器。切らないリフトアップ',
    description:
      'ウルトラフォーマーMPTは、HIFU（高密度焦点式超音波）技術を用いた医療用たるみ治療器です。超音波エネルギーを肌の深層（SMAS筋膜層）に正確に照射し、コラーゲンの収縮と新生を促すことで、メスを使わずにリフトアップ効果を実現します。施術直後から引き締め効果を実感でき、2〜3ヶ月かけてさらに効果が向上します。',
    features: [
      'SMAS層への深部アプローチ',
      'ダウンタイムほぼなし',
      '施術直後から効果を実感',
      '複数深度のカートリッジ対応',
      '自然なリフトアップ',
    ],
    applicableTreatments: ['hifu'],
    pricing: [
      { name: 'HIFU 全顔', price: '¥88,000' },
    ],
    risks: [
      '施術中の熱感・痛み',
      '一時的な赤み・むくみ',
      '稀に内出血',
    ],
  },
  {
    slug: 'dermapen4-device',
    name: 'ダーマペン4',
    nameEn: 'Dermapen 4',
    type: 'device',
    image: '/images/equipment-dermapen4.jpg',
    summary: '極細針で肌の再生力を引き出すマイクロニードル治療器',
    description:
      'ダーマペン4は、16本の極細針を用いたマイクロニードル治療器です。肌表面に微細な穴を開けることで、肌本来の創傷治癒力を利用してコラーゲンやエラスチンの生成を促進します。ニキビ跡・毛穴の開き・小じわ・傷跡の改善に効果的です。成長因子やエクソソームなどの美容液を併用することで、さらに高い効果が期待できます。',
    features: [
      '16本の極細針で痛みを最小限に',
      '深度調整（0.2mm〜3.0mm）が可能',
      '薬剤併用で効果アップ',
      '短いダウンタイム',
      '幅広い肌悩みに対応',
    ],
    applicableTreatments: ['dermapen4'],
    pricing: [
      { name: 'ダーマペン4 全顔', price: '¥33,000', note: '初回' },
      { name: 'ダーマペン4×エクソソーム', price: '¥57,100', note: '初回' },
    ],
    risks: [
      '施術直後の赤み・腫れ（1〜3日程度）',
      '皮むけ（2〜3日程度）',
      '内出血のリスク',
    ],
  },
  {
    slug: 'lumecca-device',
    name: 'ルメッカ',
    nameEn: 'Lumecca',
    type: 'device',
    image: '/images/equipment-lumecca.jpg',
    summary: 'IPL光治療器。シミ・赤みを1回で効果実感',
    description:
      'ルメッカは、InMode社製の次世代IPL（光治療）機器です。従来のIPLと比較して約3倍のピークパワーを持ち、1回の治療でもシミ・そばかす・赤みに対して高い効果を発揮します。515nm〜1200nmの幅広い波長帯により、メラニンとヘモグロビン両方にアプローチ可能です。',
    features: [
      '従来IPLの約3倍のピークパワー',
      '1回でも効果を実感しやすい',
      'シミ・そばかす・赤みに総合的にアプローチ',
      'ダウンタイムが短い',
      '美肌効果も期待できる',
    ],
    applicableTreatments: ['lumecca'],
    pricing: [
      { name: 'ルメッカ 全顔', price: '¥33,000', note: '初回' },
    ],
    risks: [
      '施術後の赤み（数時間〜1日程度）',
      'シミ部分のかさぶた形成（1〜2週間）',
      '施術時の軽い痛み（ゴムで弾かれる程度）',
    ],
  },
  // ===== 製剤 =====
  {
    slug: 'hyaluronic-acid-allergan',
    name: 'ヒアルロン酸（アラガン社製ジュビダーム）',
    nameEn: 'Juvederm',
    type: 'product',
    image: '/images/equipment-juvederm.jpg',
    summary: '世界シェアNo.1のヒアルロン酸製剤',
    description:
      'アラガン社製ジュビダームシリーズは、世界で最も使用されているヒアルロン酸製剤です。独自のVYCROSS技術により、滑らかな仕上がりと長い持続期間を実現。ボリューマ（深部注入用）・ボリフト（中層用）・ボルベラ（唇用）など部位に応じた製剤を使い分けることで、自然で美しい仕上がりを追求します。',
    features: [
      'VYCROSS技術による滑らかな仕上がり',
      '12〜24ヶ月の長期持続',
      '部位に応じた製剤ラインナップ',
      'FDA承認取得',
      'ヒアルロニダーゼで溶解可能',
    ],
    applicableTreatments: ['hyaluronic-acid'],
    pricing: [
      { name: 'ヒアルロン酸注入 1本', price: '¥98,000', note: '処置料¥2,200別途' },
    ],
    risks: [
      '注入部位の赤み・腫れ・内出血（数日〜1週間）',
      '左右差・不自然な膨らみ（修正可能）',
      '極めて稀に血管閉塞',
    ],
  },
  {
    slug: 'pluryal-silk',
    name: 'プルリアルシルク',
    nameEn: 'Pluryal Silk',
    type: 'product',
    image: '/images/equipment-pluryal-silk.jpg',
    summary: '肌のハリ・弾力を改善する次世代スキンブースター',
    description:
      'プルリアルシルクは、非架橋ヒアルロン酸にアミノ酸複合体を配合したスキンブースター製剤です。真皮内に直接注入することで、肌の保水力・弾力・ハリを内側から改善します。グリシン・L-プロリン・L-リジンなどのアミノ酸がコラーゲン生成を促進し、自然な肌質改善効果をもたらします。',
    features: [
      'ヒアルロン酸＋アミノ酸複合体',
      '肌の内側からハリ・弾力を改善',
      'コラーゲン生成促進',
      '自然な仕上がり',
      '首・手の甲にも施術可能',
    ],
    applicableTreatments: ['hyaluronic-acid'],
    pricing: [
      { name: 'プルリアルシルク 1本', price: '¥74,000', note: '処置料¥2,200別途' },
    ],
    risks: [
      '注入部位の赤み・腫れ（数日程度）',
      '内出血（1週間程度で消失）',
      '施術部位のかゆみ',
    ],
  },
  {
    slug: 'pluryal-bio-sculpture',
    name: 'プルリアルバイオスカルプチャー',
    nameEn: 'Pluryal Bio Sculpture',
    type: 'product',
    image: '/images/equipment-pluryal-bio.jpg',
    summary: '自然な輪郭形成とボリュームアップに',
    description:
      'プルリアルバイオスカルプチャーは、高濃度ヒアルロン酸製剤で、自然なボリュームアップと輪郭形成を実現します。独自のクロスリンク技術により、持続期間が長く、自然な仕上がりが特徴です。顎・こめかみ・頬のボリュームロス改善に適しています。',
    features: [
      '高濃度ヒアルロン酸',
      '自然なボリュームアップ',
      '長い持続期間',
      '輪郭形成に最適',
      '滑らかな注入感',
    ],
    applicableTreatments: ['hyaluronic-acid'],
    pricing: [
      { name: 'プルリアルバイオスカルプチャー 1本', price: '¥49,000', note: '処置料¥2,200別途' },
    ],
    risks: [
      '注入部位の赤み・腫れ（数日程度）',
      '内出血',
      '硬結感（徐々に馴染む）',
    ],
  },
  {
    slug: 'artemis-thread',
    name: 'アルテミスリフト糸',
    nameEn: 'Artemis Thread',
    type: 'product',
    image: '/images/equipment-artemis-thread.jpg',
    summary: 'コグ付き吸収糸による切らないリフトアップ',
    description:
      'アルテミスリフト糸は、PDO/PLLA素材のコグ（突起）付き吸収糸です。皮下に挿入することで物理的にたるみを引き上げ、糸が吸収される過程でコラーゲン生成を促進します。切開を必要としないため、ダウンタイムが短く、自然なリフトアップ効果が6ヶ月〜1年持続します。',
    features: [
      '切らないリフトアップ',
      'コグ付き糸で強力なリフト効果',
      '吸収過程でコラーゲン生成促進',
      'ダウンタイムが短い',
      '施術時間約30分',
    ],
    applicableTreatments: ['thread-lift'],
    pricing: [
      { name: '糸リフト PDO 1本', price: '¥42,000〜¥50,000' },
      { name: '糸リフト PLLA 1本', price: '¥62,000〜¥70,000' },
    ],
    risks: [
      '施術後の腫れ・内出血（1〜2週間）',
      '挿入部位の引きつれ感',
      '稀に糸の露出',
    ],
  },
  {
    slug: 'exosome',
    name: 'エクソソーム',
    nameEn: 'Exosome',
    type: 'product',
    image: '/images/equipment-exosome.jpg',
    summary: '幹細胞由来の再生医療製剤',
    description:
      'エクソソームは、幹細胞から分泌される細胞外小胞（エクソソーム）を高濃度に精製した再生医療製剤です。成長因子・サイトカイン・mRNAなどの生理活性物質を豊富に含み、肌の再生・修復を促進します。ダーマペンやポテンツァとの併用で、より高い肌質改善効果が期待できます。',
    features: [
      '幹細胞由来の高純度エクソソーム',
      '豊富な成長因子含有',
      '肌の再生・修復を促進',
      'ダーマペン・ポテンツァとの併用で効果増大',
      'アレルギーリスクが低い',
    ],
    applicableTreatments: ['exosome', 'dermapen4'],
    pricing: [
      { name: 'エクソソーム注入', price: '¥40,000', note: '初回' },
    ],
    risks: [
      '注入部位の赤み（数時間〜1日）',
      '軽度の腫れ',
      '極めて稀にアレルギー反応',
    ],
  },
];
