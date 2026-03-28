import { PriceItem } from '@/types';

interface PriceTableProps {
  items: PriceItem[];
  category?: string;
}

export function PriceTable({ items }: PriceTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b-2 border-primary">
            <th className="py-3 text-left font-semibold text-text-main">施術名</th>
            <th className="py-3 text-right font-semibold text-text-main w-40">料金（税込）</th>
            <th className="py-3 text-left font-semibold text-text-main pl-4">備考</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border-main">
          {items.map((item, index) => (
            <tr key={index}>
              <td className="py-3 text-text-main">{item.name}</td>
              <td className="py-3 text-right text-primary font-medium whitespace-nowrap">{item.price}</td>
              <td className="py-3 text-text-sub text-xs pl-4">{item.note || ''}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
