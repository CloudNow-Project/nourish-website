import Image from "next/image";
import Link from "next/link";
import { ShadowedHeading } from "../ui/ShadowedHeading";
import { HeyoPaw } from "../ui/Icons";

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
    <div className="group flex flex-col transition-all bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md">
      <div className="relative aspect-[4/4.5] bg-[#f5efe6] overflow-hidden">
        <Link href={`/treats/${slug}`} className="block h-full">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={name}
              fill
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
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

      <div className="p-6 flex-grow flex flex-col">
        <Link href={`/treats/${slug}`} className="block">
          <ShadowedHeading
            text={name}
            as="h3"
            size="xs"
            textColor="#FFBD58"
            shadowColor="#FBE2BF"
            shadowOffset={2}
            className="hover:text-[#f6b656] transition-colors"
          />
        </Link>

        <p className="mt-3 text-gray-600 text-sm leading-relaxed flex-grow">{description}</p>

        <div className="mt-4 flex items-center justify-between">
          <span className="font-bold text-2xl text-[#333]">${price}</span>
          <Link
            href={`/treats/${slug}`}
            className="p-2 bg-[#FFBD58] text-white rounded-full hover:bg-[#f6b656] transition-colors flex items-center justify-center"
            aria-label={`View ${name}`}
          >
            <HeyoPaw size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
