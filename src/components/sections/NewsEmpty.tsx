import Link from 'next/link';

interface NewsEmptyProps {
  message?: string;
}

export function NewsEmpty({ message = '現在、お知らせはありません。' }: NewsEmptyProps) {
  return (
    <div className="text-center py-12">
      <p className="text-text-sub mb-4">{message}</p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary-dark transition-colors font-medium"
      >
        トップページへ戻る
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
      </Link>
    </div>
  );
}
