import Link from "next/link";
import { HeyoPaw } from "./Icons";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
      <Link href="/" className="hover:text-[#A2501B] transition-colors">
        <HeyoPaw size={16} />
      </Link>
      {items.map((item, index) => (
        <div key={item.label} className="flex items-center">
          <span className="mx-2 text-gray-400">/</span>
          {index === items.length - 1 ? (
            <span className="text-[#A2501B] font-medium">{item.label}</span>
          ) : (
            <Link href={item.href || "#"} className="hover:text-[#A2501B] transition-colors">
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}
