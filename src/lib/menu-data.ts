import { Treatment } from '@/types';

export const treatments: Treatment[] = [
  // ========================================
  // 美容外科 (8件)
  // ========================================
  {
    slug: 'futae-maibotsu',
    name: '二重埋没法',
    nameEn: 'Double Eyelid (Non-Incisional)',
    category: 'surgery',
    subcategory: '目の整形',
    summary: '切らずに自然な二重まぶたを実現する人気の施術',
    description:
      '二重埋没法は、まぶたを切開せずに極細の医療用糸でまぶたの皮膚と筋肉を結び、自然な二重ラインを形成する施術です。ダウンタイムが短く、仕上がりに満足いかない場合はやり直しも可能です。当院では2点留め・3点留めからお選びいただけます。',
    thumbnail: '/images/treatment-futae-maibotsu-thumb.jpg',
    heroImage: '/images/treatment-futae-maibotsu-hero.jpg',
    categoryLabel: 'EYES',
    targetAudience: [
      '一重まぶたを二重にしたい方',
      '奥二重をはっきりした二重にしたい方',
      '切開手術に抵抗がある方',
      'ダウンタイムを最小限にしたい方',
      '左右差を整えたい方',
    ],
    features: [
      {
        layout: 'D',
        title: '自然な仕上がり',
        text: '一人ひとりの目の形や骨格に合わせて、最適な二重ラインをデザインします。「整形した」と分からない、ナチュラルな仕上がりを追求します。',
        image: '/images/treatment-futae-feature-01.jpg',
        imageAlt: '自然な二重の仕上がりイメージ',
      },
      {
        layout: 'D',
        title: '独自の糸留め技術',
        text: '当院独自の結び方により、糸の持続力と安定性を向上。従来の埋没法よりも長期間美しい二重ラインを維持します。',
        image: '/images/treatment-futae-feature-02.jpg',
        imageAlt: '施術技術のイメージ',
      },
    ],
    flow: [
      { stepNumber: 1, title: 'カウンセリング', description: '医師がご希望の二重幅・ラインを丁寧にヒアリングし、シミュレーションを行います。', image: '/images/step-counseling.jpg' },
      { stepNumber: 2, title: 'デザイン', description: '仰向けの状態で実際の二重ラインをマーキングし、最終確認を行います。' },
      { stepNumber: 3, title: '麻酔', description: '点眼麻酔と極細針による局所麻酔を行います。痛みは最小限に抑えます。' },
      { stepNumber: 4, title: '施術', description: '極細の医療用糸をまぶたに通し、二重ラインを形成します。施術時間は約20〜30分です。', image: '/images/step-surgery.jpg' },
      { stepNumber: 5, title: 'アフターケア', description: '施術後の注意事項をご説明し、腫れ止めの処方を行います。' },
    ],
    afterCare: '施術後2〜3日は腫れがピークとなりますが、1週間程度で落ち着きます。洗顔・メイクは翌日から可能です。コンタクトレンズは3日後から使用できます。',
    pricing: [
      { name: '2点留め', price: '¥165,000', note: '6ヶ月保証 / 1点追加 ¥33,000' },
      { name: '3点留め', price: '¥220,000', note: '1年保証' },
    ],
    risks: ['腫れ・内出血（1〜2週間程度）', '左右差', '糸の露出・ゆるみ', '感染症（極めて稀）'],
    precautions: ['施術前後の飲酒は控えてください', 'コンタクトレンズは施術日は外してお越しください', '施術当日は車の運転を控えてください'],
    contraindications: ['妊娠中・授乳中の方', '目の周囲に感染症がある方', 'ケロイド体質の方'],
    downtime: '2〜3日（腫れのピーク）、1週間で概ね落ち着く',
    faq: [
      { question: '埋没法は取れることがありますか？', answer: '稀に糸がゆるむことがあります。当院では保証制度を設けており、保証期間内であれば無料で再施術いたします。' },
      { question: '痛みはありますか？', answer: '局所麻酔を行うため、施術中の痛みはほとんどありません。麻酔の注射時にチクッとする程度です。' },
      { question: '周りにバレませんか？', answer: '2〜3日は腫れがありますが、1週間程度で自然な仕上がりになります。眼鏡などで隠される方も多いです。' },
    ],
    cases: [
      { id: 'case-futae-01', treatmentSlug: 'futae-maibotsu', treatmentName: '二重埋没法', category: 'surgery', beforeImage: '/images/case-futae-before-01.jpg', afterImage: '/images/case-futae-after-01.jpg', description: '20代女性。2点留め。自然な末広二重を形成。', price: '¥165,000', risks: '腫れ・内出血（1〜2週間）' },
      { id: 'case-futae-02', treatmentSlug: 'futae-maibotsu', treatmentName: '二重埋没法', category: 'surgery', beforeImage: '/images/case-futae-before-02.jpg', afterImage: '/images/case-futae-after-02.jpg', description: '30代女性。3点留め。幅広の平行二重を形成。', price: '¥220,000', risks: '腫れ・内出血（1〜2週間）' },
    ],
    relatedEquipment: [],
  },
  {
    slug: 'futae-sekkai',
    name: '二重切開法',
    nameEn: 'Double Eyelid (Incisional)',
    category: 'surgery',
    subcategory: '目の整形',
    summary: '半永久的な二重ラインを実現する切開による二重形成術',
    description:
      '二重切開法は、まぶたの皮膚を切開し、余分な脂肪や皮膚を取り除きながら二重ラインを形成する施術です。埋没法では難しい幅広の二重や、まぶたの脂肪が厚い方にも対応可能。一度の施術で半永久的な二重を実現します。',
    thumbnail: '/images/treatment-futae-sekkai-thumb.jpg',
    heroImage: '/images/treatment-futae-sekkai-hero.jpg',
    categoryLabel: 'EYES',
    targetAudience: [
      'まぶたの脂肪が厚い方',
      '埋没法で糸が取れた経験がある方',
      '半永久的な二重を希望する方',
      'まぶたのたるみも改善したい方',
    ],
    features: [
      { layout: 'D', title: '半永久的な効果', text: '皮膚を切開して二重の構造を作るため、一度の施術で半永久的な二重ラインを実現します。', image: '/images/treatment-sekkai-feature-01.jpg', imageAlt: '切開法の効果イメージ' },
    ],
    flow: [
      { stepNumber: 1, title: 'カウンセリング', description: '二重の幅やデザインについて詳しくヒアリングします。' },
      { stepNumber: 2, title: 'デザイン・麻酔', description: '切開ラインのマーキングと局所麻酔を行います。' },
      { stepNumber: 3, title: '施術', description: 'まぶたを切開し、余分な脂肪・組織を処理して二重ラインを形成します。施術時間は約60分です。', image: '/images/step-surgery.jpg' },
      { stepNumber: 4, title: '縫合・アフターケア', description: '丁寧に縫合し、テーピングを行います。抜糸は5〜7日後です。' },
    ],
    afterCare: '抜糸まで5〜7日間はテーピングが必要です。大きな腫れは1〜2週間で引きますが、完全に落ち着くまで1〜3ヶ月かかります。',
    pricing: [{ name: '二重切開法', price: '¥330,000' }],
    risks: ['腫れ・内出血（2〜4週間）', '傷跡（数ヶ月で目立たなくなる）', '左右差', '感染症'],
    precautions: ['抜糸までは洗顔時に患部を濡らさないでください', '1ヶ月間は激しい運動を控えてください'],
    contraindications: ['妊娠中・授乳中の方', '血液凝固異常のある方'],
    downtime: '1〜2週間（大きな腫れ）、1〜3ヶ月で完成',
    faq: [
      { question: '傷跡は目立ちますか？', answer: '二重のライン上に切開するため、傷跡は二重の折り目に隠れ、目立ちにくくなります。' },
      { question: '埋没法との違いは？', answer: '切開法は半永久的な効果が得られ、まぶたの脂肪が厚い方や幅広い二重を希望される方に適しています。' },
    ],
    cases: [
      { id: 'case-sekkai-01', treatmentSlug: 'futae-sekkai', treatmentName: '二重切開法', category: 'surgery', beforeImage: '/images/case-sekkai-before-01.jpg', afterImage: '/images/case-sekkai-after-01.jpg', description: '30代女性。幅広平行二重。', price: '¥330,000', risks: '腫れ・内出血（2〜4週間）' },
      { id: 'case-sekkai-02', treatmentSlug: 'futae-sekkai', treatmentName: '二重切開法', category: 'surgery', beforeImage: '/images/case-sekkai-before-02.jpg', afterImage: '/images/case-sekkai-after-02.jpg', description: '40代女性。たるみ取り併用。', price: '¥330,000', risks: '腫れ・内出血（2〜4週間）' },
    ],
    relatedEquipment: [],
  },
  {
    slug: 'mayushita-sekkai',
    name: '眉下切開',
    nameEn: 'Sub-Brow Lift',
    category: 'surgery',
    subcategory: '目の整形',
    summary: '眉毛の下を切開して上まぶたのたるみを改善',
    description:
      '眉下切開は、眉毛の下のラインに沿って余分な皮膚を切除し、上まぶたのたるみを改善する施術です。二重のラインを変えずにたるみだけを解消できるため、自然な若返り効果が得られます。加齢によるまぶたの重さや、二重幅が狭くなってきた方に適しています。',
    thumbnail: '/images/treatment-mayushita-thumb.jpg',
    heroImage: '/images/treatment-mayushita-hero.jpg',
    categoryLabel: 'EYES',
    targetAudience: [
      '上まぶたのたるみが気になる方',
      '二重のラインを変えたくない方',
      '目の開きが悪くなってきた方',
      '自然な若返りを希望する方',
    ],
    features: [
      { layout: 'D', title: '二重ラインを変えない自然な仕上がり', text: '眉毛の下で切開するため、既存の二重ラインはそのまま。自然な印象を保ちながらたるみを改善します。', image: '/images/treatment-mayushita-feature-01.jpg', imageAlt: '眉下切開の仕上がり' },
    ],
    flow: [
      { stepNumber: 1, title: 'カウンセリング', description: 'たるみの状態を診察し、切除量を決定します。' },
      { stepNumber: 2, title: 'デザイン・麻酔', description: '眉毛下のラインにマーキングし、局所麻酔を行います。' },
      { stepNumber: 3, title: '施術', description: '余分な皮膚・ROOF・眼窩脂肪を切除し、丁寧に縫合します。施術時間は約60分です。' },
      { stepNumber: 4, title: 'アフターケア', description: '抜糸は5〜7日後。傷跡は眉毛に隠れます。' },
    ],
    afterCare: '大きな腫れは1〜2週間で引きます。傷跡は眉毛のラインに沿っているため目立ちにくく、数ヶ月でさらに馴染みます。',
    pricing: [{ name: '眉下切開', price: '¥440,000', note: 'ROOF・眼窩脂肪切除含む' }],
    risks: ['腫れ・内出血（1〜2週間）', '傷跡（眉毛に隠れる）', '左右差', '感染症'],
    downtime: '1〜2週間',
    faq: [
      { question: '傷跡は目立ちますか？', answer: '眉毛の下のラインに沿って切開するため、傷跡は眉毛に隠れて非常に目立ちにくいです。' },
    ],
    cases: [
      { id: 'case-mayushita-01', treatmentSlug: 'mayushita-sekkai', treatmentName: '眉下切開', category: 'surgery', beforeImage: '/images/case-mayushita-before-01.jpg', afterImage: '/images/case-mayushita-after-01.jpg', description: '50代女性。上まぶたのたるみ改善。', price: '¥440,000', risks: '腫れ・内出血（1〜2週間）' },
      { id: 'case-mayushita-02', treatmentSlug: 'mayushita-sekkai', treatmentName: '眉下切開', category: 'surgery', beforeImage: '/images/case-mayushita-before-02.jpg', afterImage: '/images/case-mayushita-after-02.jpg', description: '40代女性。二重ラインを維持しながらたるみ除去。', price: '¥440,000', risks: '腫れ・内出血（1〜2週間）' },
    ],
    relatedEquipment: [],
  },
  {
    slug: 'kagan-dasshi',
    name: '下眼瞼脱脂術',
    nameEn: 'Lower Eyelid Fat Removal',
    category: 'surgery',
    subcategory: '目の整形',
    summary: '目の下のふくらみ（目袋）を脂肪除去で解消',
    description:
      '下眼瞼脱脂術は、目の下の眼窩脂肪を除去し、目の下のふくらみ（目袋）やクマを改善する施術です。まぶたの裏側（結膜側）からアプローチするため、皮膚表面に傷跡が残りません。疲れた印象や老けた印象を改善し、若々しい目元を実現します。',
    thumbnail: '/images/treatment-kagan-dasshi-thumb.jpg',
    heroImage: '/images/treatment-kagan-dasshi-hero.jpg',
    categoryLabel: 'EYES',
    targetAudience: [
      '目の下のふくらみが気になる方',
      '目の下のクマを改善したい方',
      '疲れた印象を改善したい方',
      '傷跡を残したくない方',
    ],
    features: [
      { layout: 'D', title: '傷跡が見えない施術', text: 'まぶたの裏側（結膜側）からアプローチするため、皮膚表面に傷跡が一切残りません。', image: '/images/treatment-kagan-feature-01.jpg', imageAlt: '結膜側からのアプローチ' },
    ],
    flow: [
      { stepNumber: 1, title: 'カウンセリング', description: '目の下の状態を診察し、脂肪除去量を決定します。' },
      { stepNumber: 2, title: '麻酔', description: '点眼麻酔と局所麻酔を行います。' },
      { stepNumber: 3, title: '施術', description: '結膜側から切開し、余分な眼窩脂肪を除去します。施術時間は約30〜40分です。' },
      { stepNumber: 4, title: 'アフターケア', description: '施術後はクーリングを行い、注意事項をご説明します。抜糸は不要です。' },
    ],
    afterCare: '腫れや内出血は1〜2週間で引きます。洗顔・メイクは翌日から可能です。',
    pricing: [{ name: '下眼瞼脱脂術', price: '¥330,000', note: '局所麻酔 ¥22,000別途' }],
    risks: ['腫れ・内出血（1〜2週間）', '左右差', '凹みすぎ', '結膜浮腫'],
    downtime: '1〜2週間',
    faq: [
      { question: '脂肪は再発しますか？', answer: '除去した脂肪が再び増えることは基本的にありません。一度の施術で長期的な効果が期待できます。' },
    ],
    cases: [
      { id: 'case-kagan-01', treatmentSlug: 'kagan-dasshi', treatmentName: '下眼瞼脱脂術', category: 'surgery', beforeImage: '/images/case-kagan-before-01.jpg', afterImage: '/images/case-kagan-after-01.jpg', description: '30代女性。目の下のふくらみ除去。', price: '¥330,000', risks: '腫れ・内出血（1〜2週間）' },
      { id: 'case-kagan-02', treatmentSlug: 'kagan-dasshi', treatmentName: '下眼瞼脱脂術', category: 'surgery', beforeImage: '/images/case-kagan-before-02.jpg', afterImage: '/images/case-kagan-after-02.jpg', description: '40代男性。疲れた印象の改善。', price: '¥330,000', risks: '腫れ・内出血（1〜2週間）' },
    ],
    relatedEquipment: [],
  },
  {
    slug: 'kagan-tarumi',
    name: '下眼瞼たるみ取り切除',
    nameEn: 'Lower Blepharoplasty',
    category: 'surgery',
    subcategory: '目の整形',
    summary: '目の下の余分な皮膚を切除してたるみを解消',
    description:
      '下眼瞼たるみ取り切除は、目の下の余分な皮膚とたるみを切除し、若々しい目元を取り戻す施術です。脱脂術だけでは改善が難しい皮膚のたるみに対して、外側からアプローチします。必要に応じて筋弁骨膜固定を併用し、より確実なリフトアップを実現します。',
    thumbnail: '/images/treatment-kagan-tarumi-thumb.jpg',
    heroImage: '/images/treatment-kagan-tarumi-hero.jpg',
    categoryLabel: 'EYES',
    targetAudience: [
      '目の下の皮膚がたるんでいる方',
      '脱脂術だけでは改善が見込めない方',
      '小じわが気になる方',
    ],
    features: [
      { layout: 'D', title: '皮膚のたるみも同時改善', text: '余分な皮膚を切除することで、脂肪除去だけでは解消できない皮膚のたるみも同時に改善します。', image: '/images/treatment-kagan-tarumi-feature-01.jpg', imageAlt: '下眼瞼たるみ取りの効果' },
    ],
    flow: [
      { stepNumber: 1, title: 'カウンセリング', description: '目の下の状態を診察し、施術プランを立てます。' },
      { stepNumber: 2, title: '麻酔・施術', description: '局所麻酔後、まつ毛の下のラインに沿って切開し、余分な皮膚・脂肪を除去します。施術時間は約60〜90分です。' },
      { stepNumber: 3, title: '縫合・アフターケア', description: '丁寧に縫合し、抜糸は5〜7日後です。' },
    ],
    afterCare: '大きな腫れは1〜2週間。傷跡はまつ毛の下に隠れ、数ヶ月で目立たなくなります。',
    pricing: [
      { name: '下眼瞼たるみ取り切除', price: '¥550,000', note: '筋弁骨膜固定+¥110,000' },
    ],
    risks: ['腫れ・内出血（2〜4週間）', '傷跡', '下眼瞼外反（極めて稀）'],
    downtime: '2〜4週間',
    faq: [
      { question: '脱脂術との違いは？', answer: '脱脂術は脂肪の膨らみを改善しますが、皮膚のたるみは残ります。たるみ取り切除は皮膚も同時に切除するため、より根本的な改善が可能です。' },
    ],
    cases: [
      { id: 'case-tarumi-01', treatmentSlug: 'kagan-tarumi', treatmentName: '下眼瞼たるみ取り切除', category: 'surgery', beforeImage: '/images/case-tarumi-before-01.jpg', afterImage: '/images/case-tarumi-after-01.jpg', description: '50代女性。目の下のたるみ・小じわ改善。', price: '¥550,000', risks: '腫れ・内出血（2〜4週間）' },
      { id: 'case-tarumi-02', treatmentSlug: 'kagan-tarumi', treatmentName: '下眼瞼たるみ取り切除', category: 'surgery', beforeImage: '/images/case-tarumi-before-02.jpg', afterImage: '/images/case-tarumi-after-02.jpg', description: '60代女性。筋弁骨膜固定併用。', price: '¥660,000', risks: '腫れ・内出血（2〜4週間）' },
    ],
    relatedEquipment: [],
  },
  {
    slug: 'thread-lift',
    name: '糸リフト（アルテミスリフト）',
    nameEn: 'Thread Lift (Artemis Lift)',
    category: 'surgery',
    subcategory: '輪郭形成・小顔',
    summary: '切らずにたるみを引き上げる糸によるリフトアップ',
    description:
      '糸リフト（アルテミスリフト）は、コグ（突起）付きの医療用吸収糸を皮下に挿入することで、フェイスラインのたるみを物理的に引き上げる施術です。切開を必要としないため、ダウンタイムが短く、施術直後からリフトアップ効果を実感できます。糸が吸収される過程でコラーゲン生成が促進され、肌質改善効果も期待できます。',
    thumbnail: '/images/treatment-thread-lift-thumb.jpg',
    heroImage: '/images/treatment-thread-lift-hero.jpg',
    categoryLabel: 'FACE',
    targetAudience: [
      'フェイスラインのたるみが気になる方',
      'ほうれい線を改善したい方',
      '切開手術に抵抗がある方',
      '短いダウンタイムを希望する方',
    ],
    features: [
      { layout: 'D', title: '即時効果＋長期効果', text: '挿入直後のリフトアップ効果に加え、糸の吸収過程でコラーゲンが生成され、肌のハリ・弾力も改善します。', image: '/images/treatment-thread-feature-01.jpg', imageAlt: '糸リフトの効果' },
    ],
    flow: [
      { stepNumber: 1, title: 'カウンセリング', description: 'たるみの状態を診察し、糸の本数・挿入位置を決定します。' },
      { stepNumber: 2, title: '麻酔', description: '局所麻酔を行います。' },
      { stepNumber: 3, title: '施術', description: '極細のカニューレを用いて糸を皮下に挿入し、リフトアップします。施術時間は約30分です。' },
      { stepNumber: 4, title: 'アフターケア', description: '施術後の注意事項をご説明します。' },
    ],
    afterCare: '腫れや引きつれ感は1〜2週間で落ち着きます。大きく口を開ける動作は1週間程度控えてください。',
    pricing: [
      { name: 'PDO 1本', price: '¥42,000〜¥50,000', note: '4本20%OFF/12本30%OFF' },
      { name: 'PLLA 1本', price: '¥62,000〜¥70,000', note: '16本以上40%OFF' },
    ],
    risks: ['腫れ・内出血（1〜2週間）', '引きつれ感', '稀に糸の露出', '左右差'],
    downtime: '1〜2週間',
    faq: [
      { question: '糸は溶けますか？', answer: 'はい、6ヶ月〜1年程度で体内に吸収されます。糸が吸収された後もコラーゲンの生成効果は持続します。' },
    ],
    cases: [
      { id: 'case-thread-01', treatmentSlug: 'thread-lift', treatmentName: '糸リフト', category: 'surgery', beforeImage: '/images/case-thread-before-01.jpg', afterImage: '/images/case-thread-after-01.jpg', description: '40代女性。PLLA 8本使用。', price: '¥496,000', risks: '腫れ・引きつれ感（1〜2週間）' },
      { id: 'case-thread-02', treatmentSlug: 'thread-lift', treatmentName: '糸リフト', category: 'surgery', beforeImage: '/images/case-thread-before-02.jpg', afterImage: '/images/case-thread-after-02.jpg', description: '50代女性。PDO 12本使用。', price: '¥352,800', risks: '腫れ・引きつれ感（1〜2週間）' },
    ],
    relatedEquipment: ['artemis-thread'],
  },
  {
    slug: 'megashira-sekkai',
    name: '目頭切開',
    nameEn: 'Epicanthoplasty',
    category: 'surgery',
    subcategory: '目の整形',
    summary: '蒙古ひだを改善して目を大きく見せる施術',
    description:
      '目頭切開は、目頭にある蒙古ひだ（目頭を覆う皮膚のひだ）を切開・除去し、目の横幅を広げて大きく見せる施術です。目と目の距離が近づくため、バランスの良い目元になります。二重埋没法・切開法との併用で、より理想的な目元を実現できます。',
    thumbnail: '/images/treatment-megashira-thumb.jpg',
    heroImage: '/images/treatment-megashira-hero.jpg',
    categoryLabel: 'EYES',
    targetAudience: [
      '目と目の距離が離れて見える方',
      '蒙古ひだが強い方',
      '目を大きく見せたい方',
      '二重整形と併用したい方',
    ],
    features: [
      { layout: 'D', title: '自然な目元の拡大', text: '蒙古ひだを最小限に処理し、自然に目の横幅を広げます。やりすぎない繊細なデザインを心がけています。', image: '/images/treatment-megashira-feature-01.jpg', imageAlt: '目頭切開の効果' },
    ],
    flow: [
      { stepNumber: 1, title: 'カウンセリング', description: '蒙古ひだの状態を診察し、切開量を決定します。' },
      { stepNumber: 2, title: '施術', description: '局所麻酔後、目頭の皮膚を切開・処理します。施術時間は約30〜40分です。' },
      { stepNumber: 3, title: '縫合・アフターケア', description: '抜糸は5〜7日後です。' },
    ],
    afterCare: '腫れは1〜2週間で引きます。傷跡は数ヶ月で目立たなくなります。',
    pricing: [{ name: '目頭切開', price: '¥275,000' }],
    risks: ['腫れ・内出血（1〜2週間）', '傷跡', '後戻り', '左右差'],
    downtime: '1〜2週間',
    faq: [
      { question: '目が寄り目になりませんか？', answer: '事前のシミュレーションで最適な切開量を決定するため、不自然な仕上がりになることはありません。' },
    ],
    cases: [
      { id: 'case-megashira-01', treatmentSlug: 'megashira-sekkai', treatmentName: '目頭切開', category: 'surgery', beforeImage: '/images/case-megashira-before-01.jpg', afterImage: '/images/case-megashira-after-01.jpg', description: '20代女性。二重埋没法と併用。', price: '¥440,000', risks: '腫れ・内出血（1〜2週間）' },
      { id: 'case-megashira-02', treatmentSlug: 'megashira-sekkai', treatmentName: '目頭切開', category: 'surgery', beforeImage: '/images/case-megashira-before-02.jpg', afterImage: '/images/case-megashira-after-02.jpg', description: '30代女性。目頭切開単独。', price: '¥275,000', risks: '腫れ・内出血（1〜2週間）' },
    ],
    relatedEquipment: [],
  },
  {
    slug: 'tain-shusei',
    name: '他院修正',
    nameEn: 'Revision Surgery',
    category: 'surgery',
    subcategory: '共通',
    summary: '他院で受けた施術の修正・やり直し',
    description:
      '他院修正は、他の医療機関で受けた美容整形手術の結果に満足いただけない場合に、修正を行う施術です。二重の左右差、不自然なライン、糸の露出、鼻プロテーゼのずれなど、様々なケースに対応いたします。まずはカウンセリングで現在の状態を詳しく診察し、最適な修正プランをご提案します。',
    thumbnail: '/images/treatment-tain-shusei-thumb.jpg',
    heroImage: '/images/treatment-tain-shusei-hero.jpg',
    categoryLabel: 'REVISION',
    targetAudience: [
      '他院での施術結果に満足できない方',
      '二重の左右差を修正したい方',
      '不自然な仕上がりを改善したい方',
      '糸の露出や違和感がある方',
    ],
    features: [
      { layout: 'C', title: '豊富な修正実績', text: '当院では年間多数の他院修正を手がけております。初回手術とは異なる難しさがありますが、豊富な経験と技術で最善の結果を追求します。' },
    ],
    flow: [
      { stepNumber: 1, title: 'カウンセリング', description: '以前の施術内容を詳しくヒアリングし、現在の状態を診察します。必要に応じて画像検査を行います。' },
      { stepNumber: 2, title: '修正プラン立案', description: '最適な修正方法をご提案し、リスクや限界についても丁寧にご説明します。' },
      { stepNumber: 3, title: '施術', description: '修正内容に応じた施術を行います。施術時間はケースにより異なります。' },
      { stepNumber: 4, title: 'アフターフォロー', description: '修正後は通常以上に丁寧な経過観察を行います。' },
    ],
    afterCare: '修正内容によりダウンタイムは異なります。カウンセリング時に詳しくご説明いたします。',
    pricing: [{ name: '他院修正', price: '¥110,000〜', note: '施術費に加算' }],
    risks: ['元の施術による組織の瘢痕化で制限がある場合がある', '腫れ・内出血', '修正の限界について事前説明'],
    downtime: '施術内容による',
    faq: [
      { question: 'どんな修正でも対応できますか？', answer: '可能な限り対応いたしますが、前回の施術内容や経過時間によっては修正が難しいケースもあります。まずはカウンセリングで詳しく診察させていただきます。' },
    ],
    cases: [
      { id: 'case-tain-01', treatmentSlug: 'tain-shusei', treatmentName: '他院修正', category: 'surgery', beforeImage: '/images/case-tain-before-01.jpg', afterImage: '/images/case-tain-after-01.jpg', description: '20代女性。他院埋没法の左右差修正。', price: '¥275,000', risks: '腫れ・内出血' },
      { id: 'case-tain-02', treatmentSlug: 'tain-shusei', treatmentName: '他院修正', category: 'surgery', beforeImage: '/images/case-tain-before-02.jpg', afterImage: '/images/case-tain-after-02.jpg', description: '30代女性。他院切開法の幅修正。', price: '¥440,000', risks: '腫れ・内出血' },
    ],
    relatedEquipment: [],
  },

  // ========================================
  // 美容皮膚科 (8件)
  // ========================================
  {
    slug: 'hyaluronic-acid',
    name: 'ヒアルロン酸注入',
    nameEn: 'Hyaluronic Acid Injection',
    category: 'dermatology',
    summary: 'シワの改善やボリュームアップに。自然な若返りを実現',
    description:
      'ヒアルロン酸注入は、体内にも存在する安全な成分であるヒアルロン酸を気になる部位に注入し、シワの改善やボリュームアップを行う施術です。ほうれい線・涙袋・唇・こめかみ・顎など幅広い部位に対応。即効性があり、施術直後から効果を実感できます。',
    thumbnail: '/images/treatment-ha-thumb.jpg',
    heroImage: '/images/treatment-ha-hero.jpg',
    categoryLabel: 'INJECTION',
    targetAudience: [
      'ほうれい線・シワを改善したい方',
      '涙袋を作りたい方',
      '唇をふっくらさせたい方',
      '顔のボリュームロスを改善したい方',
    ],
    features: [
      { layout: 'D', title: '厚生労働省承認製剤を使用', text: 'アラガン社製ジュビダームシリーズ（厚生労働省承認）を使用。安全性と効果が保証されています。', image: '/images/treatment-ha-feature-01.jpg', imageAlt: 'ジュビダーム製剤' },
    ],
    flow: [
      { stepNumber: 1, title: 'カウンセリング', description: '注入部位とご希望のイメージをヒアリングします。' },
      { stepNumber: 2, title: '麻酔', description: '表面麻酔クリームを塗布します（約20分）。' },
      { stepNumber: 3, title: '注入', description: '極細針またはカニューレで丁寧に注入します。施術時間は約15〜30分です。' },
      { stepNumber: 4, title: '仕上がり確認', description: '鏡で仕上がりを確認し、微調整を行います。' },
    ],
    afterCare: '施術直後から日常生活が可能です。内出血が出た場合は1〜2週間で消失します。施術当日のサウナ・激しい運動は避けてください。',
    pricing: [
      { name: 'ヒアルロン酸注入 1本', price: '¥98,000', note: '処置料¥2,200別途/3本以上10%OFF' },
    ],
    risks: ['内出血・腫れ（数日〜1週間）', '左右差', 'しこり', '極めて稀に血管閉塞'],
    downtime: 'ほぼなし（内出血時は1〜2週間）',
    faq: [
      { question: '効果はどのくらい持続しますか？', answer: '製剤の種類と注入部位により異なりますが、12〜24ヶ月程度持続します。' },
      { question: '元に戻せますか？', answer: 'ヒアルロニダーゼという溶解酵素で溶かすことが可能です。' },
    ],
    cases: [
      { id: 'case-ha-01', treatmentSlug: 'hyaluronic-acid', treatmentName: 'ヒアルロン酸注入', category: 'dermatology', beforeImage: '/images/case-ha-before-01.jpg', afterImage: '/images/case-ha-after-01.jpg', description: '40代女性。ほうれい線改善。1本使用。', price: '¥98,000', risks: '内出血・腫れ（数日〜1週間）' },
      { id: 'case-ha-02', treatmentSlug: 'hyaluronic-acid', treatmentName: 'ヒアルロン酸注入', category: 'dermatology', beforeImage: '/images/case-ha-before-02.jpg', afterImage: '/images/case-ha-after-02.jpg', description: '30代女性。涙袋形成。', price: '¥98,000', risks: '内出血・腫れ（数日〜1週間）' },
    ],
    relatedEquipment: ['hyaluronic-acid-allergan', 'pluryal-silk', 'pluryal-bio-sculpture'],
  },
  {
    slug: 'botox',
    name: 'ボトックス注入',
    nameEn: 'Botox Injection',
    category: 'dermatology',
    summary: '表情ジワの改善やエラ縮小に。手軽なアンチエイジング',
    description:
      'ボトックス注入は、ボツリヌストキシン製剤を筋肉に注入し、表情ジワの改善やエラの縮小を行う施術です。額のシワ・眉間のシワ・目尻のシワ・顎の梅干しジワなどに効果的。咬筋への注入でエラを小さくする小顔効果も人気です。',
    thumbnail: '/images/treatment-botox-thumb.jpg',
    heroImage: '/images/treatment-botox-hero.jpg',
    categoryLabel: 'INJECTION',
    targetAudience: [
      '額・眉間・目尻のシワが気になる方',
      'エラを小さくしたい方',
      '小顔になりたい方',
      '手軽にアンチエイジングしたい方',
    ],
    features: [
      { layout: 'D', title: '厚生労働省承認ボトックスビスタ使用', text: '世界で最も使用実績のあるアラガン社製ボトックスビスタ（厚生労働省承認）を使用しています。', image: '/images/treatment-botox-feature-01.jpg', imageAlt: 'ボトックスビスタ' },
    ],
    flow: [
      { stepNumber: 1, title: 'カウンセリング', description: 'シワの状態やご希望を確認し、注入量・部位を決定します。' },
      { stepNumber: 2, title: '注入', description: '極細針で対象の筋肉にピンポイントで注入します。施術時間は約10〜15分です。' },
      { stepNumber: 3, title: 'アフターケア', description: '注意事項のご説明。効果は2〜3日後から現れ、2週間で安定します。' },
    ],
    afterCare: '施術当日は注入部位をこすらないでください。効果は3〜6ヶ月持続します。定期的な施術でシワの予防にもなります。',
    pricing: [
      { name: 'ボトックス注入', price: '¥28,000〜', note: '部位により異なる' },
    ],
    risks: ['内出血（数日）', '一時的な違和感', '表情の不自然さ（過度な注入の場合）', '頭痛（稀）'],
    downtime: 'ほぼなし',
    faq: [
      { question: '表情が固くなりませんか？', answer: '適切な量を注入すれば、自然な表情を保ちながらシワだけを改善できます。当院では自然な仕上がりを重視しています。' },
    ],
    cases: [
      { id: 'case-botox-01', treatmentSlug: 'botox', treatmentName: 'ボトックス注入', category: 'dermatology', beforeImage: '/images/case-botox-before-01.jpg', afterImage: '/images/case-botox-after-01.jpg', description: '30代女性。眉間のシワ改善。', price: '¥28,000', risks: '内出血（数日）' },
      { id: 'case-botox-02', treatmentSlug: 'botox', treatmentName: 'ボトックス注入', category: 'dermatology', beforeImage: '/images/case-botox-before-02.jpg', afterImage: '/images/case-botox-after-02.jpg', description: '40代女性。エラ縮小。', price: '¥55,000', risks: '内出血（数日）' },
    ],
    relatedEquipment: [],
  },
  {
    slug: 'dermapen4',
    name: 'ダーマペン4',
    nameEn: 'Dermapen 4',
    category: 'dermatology',
    summary: 'ニキビ跡・毛穴・小じわを改善するマイクロニードル治療',
    description:
      'ダーマペン4は、16本の極細針で肌表面に微細な穴を開け、肌の自然治癒力を利用してコラーゲン生成を促進する施術です。ニキビ跡・毛穴の開き・小じわ・傷跡の改善に効果的。エクソソームや成長因子などの美容成分を併用することで、さらに高い効果が期待できます。',
    thumbnail: '/images/treatment-dermapen-thumb.jpg',
    heroImage: '/images/treatment-dermapen-hero.jpg',
    categoryLabel: 'SKIN',
    targetAudience: [
      'ニキビ跡が気になる方',
      '毛穴の開きを改善したい方',
      '肌のハリ・ツヤを取り戻したい方',
      '小じわを改善したい方',
    ],
    features: [
      { layout: 'D', title: '美容成分との併用で効果アップ', text: 'エクソソーム・成長因子・ビタミンCなどの美容成分を微細な穴から浸透させることで、相乗効果が期待できます。', image: '/images/treatment-dermapen-feature-01.jpg', imageAlt: 'ダーマペン4の施術' },
    ],
    flow: [
      { stepNumber: 1, title: 'クレンジング', description: 'メイクを落とし、肌を清潔にします。' },
      { stepNumber: 2, title: '麻酔', description: '表面麻酔クリームを塗布します（約20分）。' },
      { stepNumber: 3, title: '施術', description: 'ダーマペン4で肌全体に施術します。施術時間は約20〜30分です。', image: '/images/step-dermapen.jpg' },
      { stepNumber: 4, title: '鎮静パック', description: '施術後に鎮静パックを行い、赤みを抑えます。' },
    ],
    afterCare: '施術当日はメイク・洗顔を避けてください。翌日から通常のスキンケアが可能です。赤みは1〜3日で落ち着きます。日焼け対策を徹底してください。',
    pricing: [
      { name: 'ダーマペン4 全顔', price: '¥33,000', note: '初回/通常¥44,000' },
      { name: 'ダーマペン4×エクソソーム', price: '¥57,100', note: '初回/通常¥77,000' },
    ],
    risks: ['赤み・腫れ（1〜3日）', '皮むけ（2〜3日）', '内出血', '色素沈着（紫外線対策必須）'],
    downtime: '1〜3日',
    faq: [
      { question: '何回くらい受ければ効果がありますか？', answer: '1回でも肌質の変化を感じられますが、ニキビ跡や毛穴の改善には3〜5回の施術をおすすめします。3〜4週間間隔で通院いただきます。' },
    ],
    cases: [
      { id: 'case-dermapen-01', treatmentSlug: 'dermapen4', treatmentName: 'ダーマペン4', category: 'dermatology', beforeImage: '/images/case-dermapen-before-01.jpg', afterImage: '/images/case-dermapen-after-01.jpg', description: '20代男性。ニキビ跡改善。5回施術後。', price: '¥165,000', risks: '赤み（1〜3日）' },
      { id: 'case-dermapen-02', treatmentSlug: 'dermapen4', treatmentName: 'ダーマペン4', category: 'dermatology', beforeImage: '/images/case-dermapen-before-02.jpg', afterImage: '/images/case-dermapen-after-02.jpg', description: '30代女性。毛穴改善。エクソソーム併用3回後。', price: '¥171,300', risks: '赤み（1〜3日）' },
    ],
    relatedEquipment: ['dermapen4-device', 'exosome'],
  },
  {
    slug: 'pico-laser',
    name: 'ピコレーザー',
    nameEn: 'Pico Laser',
    category: 'dermatology',
    summary: 'シミ・くすみ・肝斑をピコ秒レーザーで改善',
    description:
      'ピコレーザー（ディスカバリーピコプラス）は、ピコ秒（1兆分の1秒）の超短パルスレーザーでメラニン色素を微細に破壊するシミ・くすみ治療です。従来のレーザーよりもダウンタイムが短く、肌へのダメージも最小限。ピコトーニング（低出力全顔照射）は肝斑にも対応可能です。',
    thumbnail: '/images/treatment-pico-thumb.jpg',
    heroImage: '/images/treatment-pico-hero.jpg',
    categoryLabel: 'SKIN',
    targetAudience: [
      'シミ・そばかすを改善したい方',
      '肝斑を改善したい方',
      'くすみのない透明感のある肌を目指す方',
      '従来レーザーでダウンタイムが気になった方',
    ],
    features: [
      { layout: 'D', title: '3波長搭載で幅広い色素に対応', text: 'ディスカバリーピコプラスは3つの波長を搭載し、浅いシミから深いシミ、肝斑まで幅広い色素性病変に対応可能です。', image: '/images/treatment-pico-feature-01.jpg', imageAlt: 'ピコレーザーの照射' },
    ],
    flow: [
      { stepNumber: 1, title: 'クレンジング・診察', description: 'メイクを落とし、肌の状態を診察します。' },
      { stepNumber: 2, title: '照射', description: 'レーザーを照射します。施術時間は全顔で約15〜20分です。', image: '/images/step-pico.jpg' },
      { stepNumber: 3, title: 'アフターケア', description: 'クーリング・保湿を行い、日焼け止めを塗布します。' },
    ],
    afterCare: 'ピコトーニングの場合、ダウンタイムはほぼありません。シミ取りの場合、かさぶたが1〜2週間で自然に剥がれます。施術後は日焼け対策を徹底してください。',
    pricing: [
      { name: 'ピコトーニング 全顔', price: '¥22,000', note: '初回/通常¥33,000' },
      { name: 'ルビーフラクショナル 全顔', price: '¥36,000', note: '初回' },
      { name: 'シミ取り放題 全顔', price: '¥110,000', note: '処置料¥2,200別途' },
    ],
    risks: ['赤み（数時間〜1日）', 'かさぶた形成（シミ取り時）', '色素沈着（紫外線対策必須）', '水疱形成（稀）'],
    downtime: 'ピコトーニング：ほぼなし / シミ取り：1〜2週間',
    faq: [
      { question: '肝斑にも効果がありますか？', answer: 'はい、ピコトーニング（低出力モード）は肝斑にも対応可能です。従来のレーザーでは悪化するリスクがありましたが、ピコレーザーなら安全に治療できます。' },
    ],
    cases: [
      { id: 'case-pico-01', treatmentSlug: 'pico-laser', treatmentName: 'ピコレーザー', category: 'dermatology', beforeImage: '/images/case-pico-before-01.jpg', afterImage: '/images/case-pico-after-01.jpg', description: '40代女性。シミ取り放題1回施術後。', price: '¥110,000', risks: 'かさぶた（1〜2週間）' },
      { id: 'case-pico-02', treatmentSlug: 'pico-laser', treatmentName: 'ピコレーザー', category: 'dermatology', beforeImage: '/images/case-pico-before-02.jpg', afterImage: '/images/case-pico-after-02.jpg', description: '50代女性。ピコトーニング5回後。', price: '¥110,000', risks: '軽度の赤み' },
    ],
    relatedEquipment: ['discovery-pico-plus'],
  },
  {
    slug: 'lumecca',
    name: 'ルメッカ',
    nameEn: 'Lumecca',
    category: 'dermatology',
    summary: '1回で効果を実感できる次世代光治療（IPL）',
    description:
      'ルメッカは、InMode社製の次世代IPL（光治療）機器です。従来のIPLの約3倍のピークパワーを持ち、シミ・そばかす・赤みに対して1回の治療でも高い効果を発揮します。広範囲のシミ改善と美肌効果を同時に実現する、効率的な美肌治療です。',
    thumbnail: '/images/treatment-lumecca-thumb.jpg',
    heroImage: '/images/treatment-lumecca-hero.jpg',
    categoryLabel: 'SKIN',
    targetAudience: [
      'シミ・そばかすを広範囲に改善したい方',
      '赤みを改善したい方',
      '少ない回数で効果を得たい方',
      '美肌効果も得たい方',
    ],
    features: [
      { layout: 'D', title: '1回で効果を実感', text: '従来IPLの約3倍のピークパワーにより、1回の施術でもシミの薄化・赤みの改善を実感いただけます。', image: '/images/treatment-lumecca-feature-01.jpg', imageAlt: 'ルメッカの照射' },
    ],
    flow: [
      { stepNumber: 1, title: 'クレンジング', description: 'メイクを落とします。' },
      { stepNumber: 2, title: 'ジェル塗布・照射', description: '冷却ジェルを塗布し、ルメッカを照射します。施術時間は約15〜20分です。' },
      { stepNumber: 3, title: 'アフターケア', description: 'クーリング・保湿・日焼け止め塗布。' },
    ],
    afterCare: 'シミ部分にかさぶたが形成され、1〜2週間で自然に剥がれます。日焼け対策を徹底してください。',
    pricing: [
      { name: 'ルメッカ 全顔', price: '¥33,000', note: '初回/通常¥44,000' },
    ],
    risks: ['赤み（数時間〜1日）', 'かさぶた形成（1〜2週間）', '施術時の痛み（ゴムで弾かれる程度）'],
    downtime: '1〜2日（赤み）',
    faq: [
      { question: 'ピコレーザーとの違いは？', answer: 'ルメッカ（IPL）は広範囲のシミ・赤みに効果的で、美肌効果も。ピコレーザーは濃いシミのピンポイント除去や肝斑に適しています。' },
    ],
    cases: [
      { id: 'case-lumecca-01', treatmentSlug: 'lumecca', treatmentName: 'ルメッカ', category: 'dermatology', beforeImage: '/images/case-lumecca-before-01.jpg', afterImage: '/images/case-lumecca-after-01.jpg', description: '40代女性。全顔1回施術後。', price: '¥33,000', risks: 'かさぶた（1〜2週間）' },
      { id: 'case-lumecca-02', treatmentSlug: 'lumecca', treatmentName: 'ルメッカ', category: 'dermatology', beforeImage: '/images/case-lumecca-before-02.jpg', afterImage: '/images/case-lumecca-after-02.jpg', description: '50代女性。3回施術後。', price: '¥99,000', risks: 'かさぶた（1〜2週間）' },
    ],
    relatedEquipment: ['lumecca-device'],
  },
  {
    slug: 'hifu',
    name: 'HIFU（ハイフ）',
    nameEn: 'HIFU',
    category: 'dermatology',
    summary: '超音波でたるみを引き上げる切らないリフトアップ',
    description:
      'HIFU（ハイフ）は、高密度焦点式超音波を肌の深層に照射し、コラーゲンの収縮と新生を促すたるみ治療です。当院ではウルトラフォーマーMPTを使用し、SMAS筋膜層にまでアプローチ。切開不要で施術直後から引き締め効果を実感でき、2〜3ヶ月かけてさらにリフトアップ効果が向上します。',
    thumbnail: '/images/treatment-hifu-thumb.jpg',
    heroImage: '/images/treatment-hifu-hero.jpg',
    categoryLabel: 'LIFT',
    targetAudience: [
      'フェイスラインのたるみが気になる方',
      '切開手術に抵抗がある方',
      '二重顎を改善したい方',
      '肌の引き締め効果を求める方',
    ],
    features: [
      { layout: 'D', title: 'SMAS層への深部アプローチ', text: '超音波エネルギーをSMAS筋膜層に正確に照射し、外科手術に匹敵するリフトアップ効果を実現します。', image: '/images/treatment-hifu-feature-01.jpg', imageAlt: 'HIFU照射イメージ' },
    ],
    flow: [
      { stepNumber: 1, title: 'カウンセリング', description: 'たるみの状態を診察し、照射プランを決定します。' },
      { stepNumber: 2, title: 'マーキング', description: '照射範囲をマーキングします。' },
      { stepNumber: 3, title: '照射', description: 'ジェルを塗布し、超音波を照射します。施術時間は約40〜60分です。' },
      { stepNumber: 4, title: 'アフターケア', description: '施術直後からメイク可能です。' },
    ],
    afterCare: 'ダウンタイムはほぼありません。施術直後からメイクが可能です。軽度の赤み・むくみは数時間で落ち着きます。',
    pricing: [
      { name: 'ウルトラフォーマー 全顔', price: '¥88,000' },
    ],
    risks: ['施術中の熱感・痛み', '一時的な赤み・むくみ', '稀に内出血'],
    downtime: 'ほぼなし',
    faq: [
      { question: '痛みはありますか？', answer: '骨に近い部位では熱感や痛みを感じることがありますが、耐えられる程度です。痛みが強い場合は出力を調整いたします。' },
    ],
    cases: [
      { id: 'case-hifu-01', treatmentSlug: 'hifu', treatmentName: 'HIFU', category: 'dermatology', beforeImage: '/images/case-hifu-before-01.jpg', afterImage: '/images/case-hifu-after-01.jpg', description: '50代女性。全顔HIFU施術後2ヶ月。', price: '¥88,000', risks: '軽度の赤み・むくみ' },
      { id: 'case-hifu-02', treatmentSlug: 'hifu', treatmentName: 'HIFU', category: 'dermatology', beforeImage: '/images/case-hifu-before-02.jpg', afterImage: '/images/case-hifu-after-02.jpg', description: '40代女性。全顔HIFU施術後1ヶ月。', price: '¥88,000', risks: '軽度の赤み・むくみ' },
    ],
    relatedEquipment: ['ultraformer'],
  },
  {
    slug: 'potenza',
    name: 'ポテンツァ',
    nameEn: 'POTENZA',
    category: 'dermatology',
    summary: 'ニキビ跡・毛穴・肝斑に。マイクロニードルRF治療',
    description:
      'ポテンツァは、マイクロニードルと高周波（RF）を組み合わせた最新の美肌治療器です。極細針を肌に刺入し、針先からRFエネルギーを真皮層に直接照射。コラーゲンのリモデリングを促進し、ニキビ跡・毛穴の開き・肝斑・小じわなど多様な肌悩みを改善します。',
    thumbnail: '/images/treatment-potenza-thumb.jpg',
    heroImage: '/images/treatment-potenza-hero.jpg',
    categoryLabel: 'SKIN',
    targetAudience: [
      'ニキビ跡を改善したい方',
      '毛穴の開きが気になる方',
      '肝斑を改善したい方',
      '肌のハリ・弾力を取り戻したい方',
    ],
    features: [
      { layout: 'D', title: 'ドラッグデリバリー機能', text: 'ポンピングチップにより、美容成分を真皮層に効率的に届けるドラッグデリバリー機能を搭載しています。', image: '/images/treatment-potenza-feature-01.jpg', imageAlt: 'ポテンツァの施術' },
    ],
    flow: [
      { stepNumber: 1, title: 'クレンジング', description: 'メイクを落とします。' },
      { stepNumber: 2, title: '麻酔', description: '表面麻酔クリームを塗布します（約30分）。' },
      { stepNumber: 3, title: '施術', description: 'ポテンツァで全顔に照射します。施術時間は約30〜40分です。' },
      { stepNumber: 4, title: 'アフターケア', description: '鎮静パック・保湿を行います。' },
    ],
    afterCare: '施術後2〜3日は赤みが続きます。翌日からメイクが可能です。日焼け対策を徹底してください。',
    pricing: [
      { name: 'ポテンツァ 全顔', price: '¥88,000' },
    ],
    risks: ['赤み・腫れ（2〜3日）', '内出血（1週間程度で消失）', 'かさつき'],
    downtime: '2〜3日',
    faq: [
      { question: 'ダーマペンとの違いは？', answer: 'ポテンツァはニードル＋RFの複合治療で、ダーマペンよりも深い組織のリモデリングが可能です。肝斑にはポテンツァ、広範囲のニキビ跡にはダーマペンが適しています。' },
    ],
    cases: [
      { id: 'case-potenza-01', treatmentSlug: 'potenza', treatmentName: 'ポテンツァ', category: 'dermatology', beforeImage: '/images/case-potenza-before-01.jpg', afterImage: '/images/case-potenza-after-01.jpg', description: '30代女性。ニキビ跡改善。3回施術後。', price: '¥264,000', risks: '赤み・腫れ（2〜3日）' },
      { id: 'case-potenza-02', treatmentSlug: 'potenza', treatmentName: 'ポテンツァ', category: 'dermatology', beforeImage: '/images/case-potenza-before-02.jpg', afterImage: '/images/case-potenza-after-02.jpg', description: '40代女性。肝斑改善。4回施術後。', price: '¥352,000', risks: '赤み・腫れ（2〜3日）' },
    ],
    relatedEquipment: ['potenza'],
  },
  {
    slug: 'exosome',
    name: 'エクソソーム注入',
    nameEn: 'Exosome Injection',
    category: 'dermatology',
    summary: '幹細胞由来の再生医療で肌を根本から若返らせる',
    description:
      'エクソソーム注入は、幹細胞から分泌される細胞外小胞（エクソソーム）を肌に導入する最先端の再生医療美容治療です。成長因子やサイトカインなどの生理活性物質が豊富に含まれ、肌の再生・修復を促進します。単独での注入のほか、ダーマペンやポテンツァとの併用でより高い効果が期待できます。',
    thumbnail: '/images/treatment-exosome-thumb.jpg',
    heroImage: '/images/treatment-exosome-hero.jpg',
    categoryLabel: 'REGENERATIVE',
    targetAudience: [
      '肌の老化が気になる方',
      '肌のハリ・弾力を取り戻したい方',
      '再生医療に興味がある方',
      'ダーマペンと併用したい方',
    ],
    features: [
      { layout: 'D', title: '再生医療による根本治療', text: '成長因子・サイトカイン・mRNAが細胞レベルで肌の再生を促進。従来の美容治療では得られない根本的な肌質改善が期待できます。', image: '/images/treatment-exosome-feature-01.jpg', imageAlt: 'エクソソームのイメージ' },
    ],
    flow: [
      { stepNumber: 1, title: 'カウンセリング', description: '肌の状態を診察し、施術プランを決定します。' },
      { stepNumber: 2, title: '施術', description: 'エクソソーム製剤を導入します。施術時間は約20〜30分です。' },
      { stepNumber: 3, title: 'アフターケア', description: '保湿・日焼け対策の指導を行います。' },
    ],
    afterCare: 'ダウンタイムは軽度です。施術翌日からメイクが可能です。',
    pricing: [
      { name: 'エクソソーム注入', price: '¥40,000', note: '初回/通常¥50,000' },
    ],
    risks: ['赤み（数時間〜1日）', '軽度の腫れ', '極めて稀にアレルギー反応'],
    downtime: 'ほぼなし',
    faq: [
      { question: 'エクソソームとは何ですか？', answer: 'エクソソームは、細胞から分泌される50〜150nmの微小な小胞です。細胞間の情報伝達を担い、成長因子やサイトカインなどを豊富に含んでいます。' },
    ],
    cases: [
      { id: 'case-exosome-01', treatmentSlug: 'exosome', treatmentName: 'エクソソーム注入', category: 'dermatology', beforeImage: '/images/case-exosome-before-01.jpg', afterImage: '/images/case-exosome-after-01.jpg', description: '40代女性。5回施術後。肌のハリ・ツヤ改善。', price: '¥200,000', risks: '赤み（数時間）' },
      { id: 'case-exosome-02', treatmentSlug: 'exosome', treatmentName: 'エクソソーム注入', category: 'dermatology', beforeImage: '/images/case-exosome-before-02.jpg', afterImage: '/images/case-exosome-after-02.jpg', description: '50代女性。ダーマペン併用3回後。', price: '¥171,300', risks: '赤み（1〜3日）' },
    ],
    relatedEquipment: ['exosome'],
  },

  // ========================================
  // アートメイク (4件)
  // ========================================
  {
    slug: 'artmake-eyebrow',
    name: '眉アートメイク',
    nameEn: 'Eyebrow Art Makeup',
    category: 'artmake',
    summary: '自然で美しい眉を長期間キープ。毎日のメイクが楽に',
    description:
      '眉アートメイクは、専用の針で皮膚の浅い層に色素を注入し、自然で美しい眉を長期間持続させる施術です。毎日の眉メイクの手間が省け、すっぴんでも整った印象を保てます。当院では手彫り（マイクロブレーディング）とマシン彫りを組み合わせ、一人ひとりの骨格に合わせた理想の眉をデザインします。',
    thumbnail: '/images/treatment-artmake-eyebrow-thumb.jpg',
    heroImage: '/images/treatment-artmake-eyebrow-hero.jpg',
    categoryLabel: 'ART MAKEUP',
    targetAudience: [
      '毎日の眉メイクを時短したい方',
      '眉の形が左右非対称な方',
      'すっぴんに自信を持ちたい方',
      'スポーツやアウトドアで汗をかく方',
    ],
    features: [
      { layout: 'D', title: '骨格に合わせたオーダーメイドデザイン', text: '黄金比と骨格分析に基づき、お一人おひとりに最適な眉のデザインをご提案。自然に見える美しい眉を実現します。', image: '/images/treatment-artmake-eyebrow-feature-01.jpg', imageAlt: '眉デザインのプロセス' },
    ],
    flow: [
      { stepNumber: 1, title: 'カウンセリング・デザイン', description: '骨格分析に基づき、ご希望の形・色味を決定します。仕上がりイメージを共有してから施術に進みます。', image: '/images/step-artmake-design.jpg' },
      { stepNumber: 2, title: '麻酔', description: '表面麻酔クリームを塗布します（約20分）。' },
      { stepNumber: 3, title: '施術（1回目）', description: '手彫り＋マシン彫りで色素を注入します。施術時間は約90〜120分です。' },
      { stepNumber: 4, title: 'リタッチ（2回目）', description: '1回目から4〜6週間後に2回目の施術を行い、色の定着と微調整を行います。' },
    ],
    afterCare: '施術後1週間は施術部位を濡らさないようにしてください。かさぶたは自然に剥がれるのを待ってください。色の定着まで2回の施術が必要です。',
    pricing: [
      { name: '眉アートメイク 2回セット', price: '¥120,000' },
      { name: 'リタッチ', price: '¥50,000' },
    ],
    risks: ['赤み・腫れ（1〜3日）', '色の退色（1〜3年で自然退色）', 'かさぶた形成', 'アレルギー反応（パッチテスト推奨）'],
    downtime: '3〜7日（かさぶた期間）',
    faq: [
      { question: 'どのくらい持続しますか？', answer: '個人差がありますが、1〜3年程度持続します。色が薄くなってきたらリタッチで補色が可能です。' },
      { question: 'MRIは受けられますか？', answer: '当院で使用する色素はMRI対応です。ただし、検査前に施術歴をお伝えください。' },
    ],
    cases: [
      { id: 'case-artmake-eyebrow-01', treatmentSlug: 'artmake-eyebrow', treatmentName: '眉アートメイク', category: 'artmake', beforeImage: '/images/case-artmake-eyebrow-before-01.jpg', afterImage: '/images/case-artmake-eyebrow-after-01.jpg', description: '30代女性。ナチュラルストレート眉。', price: '¥120,000', risks: 'かさぶた（3〜7日）' },
      { id: 'case-artmake-eyebrow-02', treatmentSlug: 'artmake-eyebrow', treatmentName: '眉アートメイク', category: 'artmake', beforeImage: '/images/case-artmake-eyebrow-before-02.jpg', afterImage: '/images/case-artmake-eyebrow-after-02.jpg', description: '40代女性。アーチ眉デザイン。', price: '¥120,000', risks: 'かさぶた（3〜7日）' },
    ],
    relatedEquipment: [],
  },
  {
    slug: 'artmake-lip',
    name: 'リップアートメイク',
    nameEn: 'Lip Art Makeup',
    category: 'artmake',
    summary: '血色の良い自然な唇を実現。すっぴんでも華やかに',
    description:
      'リップアートメイクは、唇に色素を注入し、自然な血色感と輪郭を長期間キープする施術です。唇の色がくすんでいる方、輪郭をはっきりさせたい方、リップメイクを時短したい方に人気です。当院では自然な仕上がりにこだわり、お肌の色味に合わせた最適なカラーをご提案します。',
    thumbnail: '/images/treatment-artmake-lip-thumb.jpg',
    heroImage: '/images/treatment-artmake-lip-hero.jpg',
    categoryLabel: 'ART MAKEUP',
    targetAudience: [
      '唇の色がくすんでいる方',
      '唇の輪郭がぼやけている方',
      'リップメイクを時短したい方',
      'すっぴんでも華やかに見せたい方',
    ],
    features: [
      { layout: 'D', title: '自然な血色感', text: '唇本来の色味を活かしながら、健康的でナチュラルな血色感を演出します。', image: '/images/treatment-artmake-lip-feature-01.jpg', imageAlt: 'リップアートメイクの仕上がり' },
    ],
    flow: [
      { stepNumber: 1, title: 'カウンセリング・カラー選定', description: 'お肌の色味に合わせて最適なカラーを選定します。' },
      { stepNumber: 2, title: '麻酔', description: '表面麻酔を塗布します（約20分）。' },
      { stepNumber: 3, title: '施術（1回目）', description: '丁寧に色素を注入します。施術時間は約90〜120分です。' },
      { stepNumber: 4, title: 'リタッチ（2回目）', description: '4〜6週間後に2回目の施術を行います。' },
    ],
    afterCare: '施術後3〜5日は唇が腫れます。1週間は刺激物・熱いものを避けてください。',
    pricing: [
      { name: 'リップアートメイク 2回セット', price: '¥140,000' },
      { name: 'リタッチ', price: '¥60,000' },
    ],
    risks: ['腫れ（3〜5日）', '赤み', '色の退色', 'ヘルペス発症リスク（予防薬処方可）'],
    downtime: '3〜5日（腫れ）',
    faq: [
      { question: 'ヘルペスのリスクはありますか？', answer: '口唇ヘルペスの既往がある方は、施術を契機に再発することがあります。事前に予防内服薬を処方いたしますのでご相談ください。' },
    ],
    cases: [
      { id: 'case-artmake-lip-01', treatmentSlug: 'artmake-lip', treatmentName: 'リップアートメイク', category: 'artmake', beforeImage: '/images/case-artmake-lip-before-01.jpg', afterImage: '/images/case-artmake-lip-after-01.jpg', description: '30代女性。ナチュラルピンク。', price: '¥140,000', risks: '腫れ（3〜5日）' },
      { id: 'case-artmake-lip-02', treatmentSlug: 'artmake-lip', treatmentName: 'リップアートメイク', category: 'artmake', beforeImage: '/images/case-artmake-lip-before-02.jpg', afterImage: '/images/case-artmake-lip-after-02.jpg', description: '20代女性。コーラルピンク。', price: '¥140,000', risks: '腫れ（3〜5日）' },
    ],
    relatedEquipment: [],
  },
  {
    slug: 'artmake-eyeline',
    name: 'アイラインアートメイク',
    nameEn: 'Eyeliner Art Makeup',
    category: 'artmake',
    summary: '目元をぱっちり見せるナチュラルなアイラインを持続',
    description:
      'アイラインアートメイクは、まつ毛の生え際に色素を注入し、目元をぱっちりと見せる施術です。ナチュラルなまつ毛ラインの強調から、しっかりとしたアイラインまで、ご希望に合わせたデザインが可能です。涙や汗でも落ちない、理想のアイラインを長期間キープします。',
    thumbnail: '/images/treatment-artmake-eyeline-thumb.jpg',
    heroImage: '/images/treatment-artmake-eyeline-hero.jpg',
    categoryLabel: 'ART MAKEUP',
    targetAudience: [
      'アイラインが上手く引けない方',
      '目元をぱっちり見せたい方',
      'アイメイクを時短したい方',
      'コンタクトレンズ使用でメイクが崩れやすい方',
    ],
    features: [
      { layout: 'D', title: 'まつ毛が増えたように見える自然な仕上がり', text: 'まつ毛の生え際に繊細に色素を注入し、まるでまつ毛が増えたかのような自然な目力アップを実現します。', image: '/images/treatment-artmake-eyeline-feature-01.jpg', imageAlt: 'アイラインアートメイクの仕上がり' },
    ],
    flow: [
      { stepNumber: 1, title: 'カウンセリング・デザイン', description: 'ご希望のアイラインの太さ・長さを決定します。' },
      { stepNumber: 2, title: '麻酔', description: '表面麻酔を塗布します（約20分）。' },
      { stepNumber: 3, title: '施術（1回目）', description: 'まつ毛の生え際に色素を注入します。施術時間は約60〜90分です。' },
      { stepNumber: 4, title: 'リタッチ（2回目）', description: '4〜6週間後に2回目の施術で微調整します。' },
    ],
    afterCare: '施術後2〜3日は目元の腫れが出ます。コンタクトレンズは3日後から使用可能です。',
    pricing: [
      { name: 'アイライン上 2回セット', price: '¥100,000' },
      { name: 'リタッチ', price: '¥40,000' },
    ],
    risks: ['腫れ（2〜3日）', '赤み', '色の退色', 'まれに角膜への刺激'],
    downtime: '2〜3日',
    faq: [
      { question: 'コンタクトレンズは使えますか？', answer: '施術後3日間はコンタクトレンズの使用を控えていただきます。それ以降は通常通り使用可能です。' },
    ],
    cases: [
      { id: 'case-artmake-eyeline-01', treatmentSlug: 'artmake-eyeline', treatmentName: 'アイラインアートメイク', category: 'artmake', beforeImage: '/images/case-artmake-eyeline-before-01.jpg', afterImage: '/images/case-artmake-eyeline-after-01.jpg', description: '40代女性。ナチュラルライン。', price: '¥100,000', risks: '腫れ（2〜3日）' },
      { id: 'case-artmake-eyeline-02', treatmentSlug: 'artmake-eyeline', treatmentName: 'アイラインアートメイク', category: 'artmake', beforeImage: '/images/case-artmake-eyeline-before-02.jpg', afterImage: '/images/case-artmake-eyeline-after-02.jpg', description: '30代女性。テールライン付き。', price: '¥100,000', risks: '腫れ（2〜3日）' },
    ],
    relatedEquipment: [],
  },
  {
    slug: 'artmake-hairline',
    name: 'ヘアラインアートメイク',
    nameEn: 'Hairline Art Makeup',
    category: 'artmake',
    summary: '生え際を自然に整え、小顔効果も',
    description:
      'ヘアラインアートメイクは、髪の生え際に色素を注入し、生え際のラインを整える施術です。おでこの広さが気になる方や、生え際が薄い方に最適。自然な毛流れを再現し、小顔効果も期待できます。',
    thumbnail: '/images/treatment-artmake-hairline-thumb.jpg',
    heroImage: '/images/treatment-artmake-hairline-hero.jpg',
    categoryLabel: 'ART MAKEUP',
    targetAudience: [
      'おでこが広く見える方',
      '生え際が薄い方',
      '小顔に見せたい方',
      '額の形を整えたい方',
    ],
    features: [
      { layout: 'D', title: '毛並みを再現する繊細な技術', text: '1本1本の毛流れを再現する手彫り技術で、自然な生え際を表現します。', image: '/images/treatment-artmake-hairline-feature-01.jpg', imageAlt: 'ヘアラインアートメイクの仕上がり' },
    ],
    flow: [
      { stepNumber: 1, title: 'カウンセリング・デザイン', description: '生え際のラインと施術範囲を決定します。' },
      { stepNumber: 2, title: '麻酔', description: '表面麻酔を塗布します。' },
      { stepNumber: 3, title: '施術', description: '毛並みを再現しながら色素を注入します。施術時間は範囲により60〜120分です。' },
    ],
    afterCare: '施術後1週間は施術部位を濡らさないようにしてください。',
    pricing: [
      { name: 'ヘアライン', price: '¥80,000〜', note: '範囲により' },
    ],
    risks: ['赤み・腫れ（1〜3日）', '色の退色', 'かさぶた形成'],
    downtime: '3〜7日',
    faq: [
      { question: '髪が生えてくるわけではないのですか？', answer: 'アートメイクは色素を注入する施術のため、実際に髪が生えてくるものではありません。しかし、自然な毛並みを再現することで、視覚的に生え際が整った印象になります。' },
    ],
    cases: [
      { id: 'case-artmake-hairline-01', treatmentSlug: 'artmake-hairline', treatmentName: 'ヘアラインアートメイク', category: 'artmake', beforeImage: '/images/case-artmake-hairline-before-01.jpg', afterImage: '/images/case-artmake-hairline-after-01.jpg', description: '30代女性。生え際ライン整え。', price: '¥80,000', risks: 'かさぶた（3〜7日）' },
      { id: 'case-artmake-hairline-02', treatmentSlug: 'artmake-hairline', treatmentName: 'ヘアラインアートメイク', category: 'artmake', beforeImage: '/images/case-artmake-hairline-before-02.jpg', afterImage: '/images/case-artmake-hairline-after-02.jpg', description: '40代女性。こめかみ〜生え際。', price: '¥100,000', risks: 'かさぶた（3〜7日）' },
    ],
    relatedEquipment: [],
  },
];

// ===== ヘルパー関数 =====
export function getTreatmentBySlug(slug: string): Treatment | undefined {
  return treatments.find((t) => t.slug === slug);
}

export function getTreatmentsByCategory(category: Treatment['category']): Treatment[] {
  return treatments.filter((t) => t.category === category);
}

export function getSurgerySubcategories(): { subcategory: string; treatments: Treatment[] }[] {
  const surgeryTreatments = getTreatmentsByCategory('surgery');
  const subcategoryMap = new Map<string, Treatment[]>();

  surgeryTreatments.forEach((t) => {
    const sub = t.subcategory || 'その他';
    if (!subcategoryMap.has(sub)) {
      subcategoryMap.set(sub, []);
    }
    subcategoryMap.get(sub)!.push(t);
  });

  const order = ['目の整形', '鼻の整形', '輪郭形成・小顔', '婦人科形成', '共通'];
  return order
    .filter((sub) => subcategoryMap.has(sub))
    .map((sub) => ({ subcategory: sub, treatments: subcategoryMap.get(sub)! }));
}

export function getAllCases(): Treatment['cases'] {
  return treatments.flatMap((t) => t.cases);
}
