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
  productColor: string; // Add productColor prop
}

export function ProductCard({ name, description, price, imageSrc, slug, productColor }: ProductCardProps) {
  // Format price to Rupiah
  const formattedPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);

  // Calculate a lighter shade for the shadow color
  const shadowColor = productColor + "80"; // Adding 80 for 50% opacity

  return (
    <Link href={`/${slug}`} className="block group h-full">
      <div className="h-full flex flex-col transition-all duration-300 bg-white rounded-3xl overflow-hidden shadow-sm border border-[#f5efe6] hover:shadow-xl hover:-translate-y-1">
        <div className="relative aspect-[4/4.5] bg-[#f5efe6] overflow-hidden">
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
        </div>

        <div className="p-6 flex-grow flex flex-col">
          <ShadowedHeading
            text={name}
            as="h3"
            size="xs"
            textColor={productColor}
            shadowColor={shadowColor}
            shadowOffset={2}
            className={`group-hover:text-[${productColor}] transition-colors`}
          />

          <p className="mt-3 text-gray-600 text-sm leading-relaxed flex-grow">{description}</p>

          <div className="mt-4 flex items-center justify-between">
            <span className="font-bold text-2xl text-[#333]">{formattedPrice}</span>
            <div
              className="p-2 text-white rounded-full transition-colors flex items-center justify-center"
              style={{
                backgroundColor: productColor,
                transition: "background-color 0.3s ease",
              }}
            >
              <HeyoPaw size={18} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
