interface PlaceholderProps {
  width: number;
  height: number;
  label?: string;
  className?: string;
}

export function Placeholder({ width, height, label, className = '' }: PlaceholderProps) {
  return (
    <div
      className={`bg-gray-200 flex items-center justify-center text-text-sub text-sm ${className}`}
      style={{ aspectRatio: `${width}/${height}` }}
      role="img"
      aria-label={label || `${width}x${height} プレースホルダー`}
    >
      <span className="text-center px-2">
        {label || `${width} × ${height}`}
      </span>
    </div>
  );
}
