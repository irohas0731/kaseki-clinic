import Link from 'next/link';

interface SubMenuItem {
  label: string;
  href: string;
}

interface SubMenuProps {
  items: SubMenuItem[];
  isOpen: boolean;
}

export function SubMenu({ items, isOpen }: SubMenuProps) {
  return (
    <div
      className={`submenu-dropdown absolute top-full left-0 min-w-[200px] bg-white shadow-lg rounded-b-md py-2 z-50 ${isOpen ? 'is-open' : ''}`}
      role="menu"
    >
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="block px-6 py-3 text-sm text-text-main hover:bg-primary-light hover:text-primary transition-colors"
          role="menuitem"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}
