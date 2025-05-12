import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  imageSrc: string;
  slug: string;
}

export function ProductCard({ name, description, price, imageSrc, slug }: ProductCardProps) {
  return (
    <div className="group flex flex-col transition-all">
      <div className="aspect-square overflow-hidden rounded-lg bg-gray-200 mb-4 relative group-hover:shadow-md transition-shadow">
        <Link href={`/treats/${slug}`}>
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={name}
              fill
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full">
              <svg className="w-16 h-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          )}
        </Link>
      </div>
      <div>
        <h3 className="text-lg font-bold text-gray-900 font-display">
          <Link href={`/treats/${slug}`}>{name}</Link>
        </h3>
        <p className="mt-1 text-sm text-gray-600 mb-3">{description}</p>
        <p className="font-semibold text-ernest-navy">${price}</p>
      </div>
    </div>
  );
}
