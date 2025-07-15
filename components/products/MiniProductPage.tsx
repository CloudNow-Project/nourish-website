"use client";

import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { MinimalFooter } from "@/components/layout/MinimalFooter";
import { AnimatedElement } from "@/components/ui/AnimatedElement";
import { IconButton } from "@/components/ui/IconButton";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { MiniPackProduct } from "@/data/products";

interface MiniProductPageProps {
  product: MiniPackProduct;
}

export function MiniProductPage({ product }: MiniProductPageProps) {
  const breadcrumbItems = [
    { label: "Products", href: "/products" },
    { label: product.name, href: `/products/${product.slug}` },
  ];

  // Combine main image with gallery images, ensuring no duplicates
  const allImages = [
    `/images/products/${product.slug}/heyo-${product.slug}-01.webp`,
    `/images/products/${product.slug}/heyo-${product.slug}-02.webp`,
    `/images/products/${product.slug}/heyo-${product.slug}-03.webp`,
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-grow pt-32">
        <div className="container max-w-6xl mx-auto px-4">
          <Breadcrumb items={breadcrumbItems} />

          {/* Product Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Main Product Image */}
            <AnimatedElement variant="fadeIn" delay={0.2}>
              <div className="relative aspect-square overflow-hidden bg-white rounded-lg">
                <Image
                  src={product.imageSrc}
                  alt={product.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </AnimatedElement>

            {/* Product Info */}
            <AnimatedElement variant="fadeInRight" delay={0.3}>
              <div className="flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 mb-2">
                  <span className="bg-[#A2501B] text-white text-sm px-3 py-1 rounded-full">MINI PACK</span>
                  <span className="text-sm text-gray-600">Perfect trial size!</span>
                </div>
                <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
                <p className="text-lg text-gray-600 mb-4">{product.description}</p>
                <div className="text-2xl font-semibold text-[#A2501B] mb-4">
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  }).format(product.price)}
                </div>

                {/* Product Features */}
                <div className="bg-[#FFF8EA] p-8 rounded-lg mt-8">
                  <h3 className="text-xl font-bold mb-4">Mini Pack Benefits</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-[#A2501B] mr-2">✓</span>
                      Perfect trial size
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#A2501B] mr-2">✓</span>
                      Same high quality ingredients
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#A2501B] mr-2">✓</span>
                      Great for travel
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#A2501B] mr-2">✓</span>
                      Ideal for small dogs
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#A2501B] mr-2">✓</span>
                      Budget-friendly option
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </main>

      <MinimalFooter />
    </div>
  );
}
