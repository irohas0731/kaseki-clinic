import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-[1280px] px-4 py-24 text-center">
      <p className="font-serif text-6xl md:text-8xl font-semibold text-primary mb-4">404</p>
      <h1 className="font-serif text-xl md:text-2xl font-semibold text-text-main mb-4">
        ページが見つかりません
      </h1>
      <p className="text-sm text-text-sub mb-8 max-w-md mx-auto">
        お探しのページは移動または削除された可能性があります。
        URLをご確認の上、再度お試しください。
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary-dark transition-colors"
      >
        トップページに戻る
      </Link>
    </div>
  );
}
