import Image from "next/image";
import Link from "next/link";
import { ShadowedHeading } from "../ui/ShadowedHeading";

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
    <div className="group flex flex-col transition-all bg-white p-4 rounded-xl">
      <div className="aspect-[4/5] overflow-hidden rounded-lg bg-gray-200 mb-4 relative group-hover:shadow-md transition-shadow">
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
        <Link href={`/treats/${slug}`}>
          <ShadowedHeading
            text={name}
            as="h3"
            size="xxs"
            textColor="#FFBD58"
            shadowColor="#FBE2BF"
            shadowOffset={2}
            className="hover:text-[#f6b656] transition-colors"
          />
        </Link>
        <p className="mt-1 text-gray-600 mb-3 font-semibold text-base">{description}</p>
        <p className="font-semibold text-[#333] text-xl">${price}</p>
      </div>
    </div>
  );
}
