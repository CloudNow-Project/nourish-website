import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { HeyoPaw } from "../ui/Icons";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  imageSrc: string;
  slug: string;
  productColor: string;
  isMiniPack?: boolean;
}

export function ProductCard({ name, description, price, imageSrc, slug, productColor, isMiniPack }: ProductCardProps) {
  return (
    <Link href={`/products/${slug}`}>
      <div
        className={cn(
          "group relative bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg",
          "border border-gray-100 hover:border-gray-200"
        )}
      >
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden bg-white">
          <Image
            src={imageSrc}
            alt={name}
            fill
            className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {isMiniPack && (
            <div className="absolute top-4 left-4 bg-[#A2501B] text-white text-xs px-3 py-1 rounded-full">
              MINI PACK
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{name}</h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold" style={{ color: productColor }}>
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              }).format(price)}
            </span>
            <div className="p-2 rounded-full transition-colors" style={{ backgroundColor: productColor }}>
              <HeyoPaw size={20} className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
