"use client";

import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { MinimalFooter } from "@/components/layout/MinimalFooter";
import { AnimatedElement } from "@/components/ui/AnimatedElement";
import { IconButton } from "@/components/ui/IconButton";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { MiniPackProduct } from "@/data/products";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductImageSlider } from "./ProductImageSlider";

interface MiniProductPageProps {
  product: MiniPackProduct;
}

export function MiniProductPage({ product }: MiniProductPageProps) {
  const breadcrumbItems = [
    { label: "Products", href: "/products" },
    { label: product.name, href: `/products/${product.slug}` },
  ];

  // Get all product images
  const allImages = product.mainImage
    ? [product.mainImage, ...product.gallery.filter((img) => img !== product.mainImage)]
    : product.gallery;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-grow pt-32">
        <div className="container max-w-6xl mx-auto px-4">
          <Breadcrumb items={breadcrumbItems} />

          {/* Product Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Product Image Slider */}
            <ProductImageSlider images={allImages} productName={product.name} />

            {/* Product Info */}
            <AnimatedElement variant="fadeInRight" delay={0.3}>
              <div className="flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="bg-[#A2501B] text-white text-sm px-3 py-1 rounded-full">MINI PACK</span>
                  <span className="text-sm text-gray-600">Perfect trial size!</span>
                </div>

                <SectionHeading
                  heading={product.name}
                  subheading={product.description}
                  variant="default"
                  size="lg"
                  alignment="left"
                  bottomMargin="medium"
                />

                <div className="text-2xl font-semibold text-[#A2501B] mb-8">
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  }).format(product.price)}
                </div>

                <div className="flex gap-4 mb-8">
                  <IconButton
                    href={product.marketplaces.shopee}
                    icon={<Image src="/images/logo/shopee-logo.png" alt="Shopee" width={24} height={24} />}
                    className="w-full bg-[#F65E42]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy on Shopee
                  </IconButton>
                  <IconButton
                    href={product.marketplaces.tokopedia}
                    icon={<Image src="/images/logo/tokped-logo.png" alt="Tokopedia" width={24} height={24} />}
                    className="w-full bg-[#5B9959]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy on Tokopedia
                  </IconButton>
                </div>

                <div className="bg-[#FFF8EA] p-6 rounded-lg mb-8">
                  <h3 className="font-semibold mb-4">ABSOLUTELY NO:</h3>
                  <ul className="list-none space-y-2">
                    {product.noArtificials.map((item) => (
                      <li key={item} className="flex items-start">
                        <span className="text-[#A2501B] mr-2">✕</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedElement>
          </div>

          {/* Product Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="prose prose-lg">
              <h3 className="text-xl font-bold mb-4">Why It&apos;s Nourishing:</h3>
              <ul className="space-y-3">
                {product.benefits.map((benefit) => (
                  <li key={benefit.name} className="flex items-start">
                    <span className="text-[#A2501B] mr-2">•</span>
                    <div>
                      <strong>{benefit.name}</strong> – {benefit.description}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="prose prose-lg">
              <h3 className="text-xl font-bold mb-4">Serving Guide (Per Day):</h3>
              <ul className="space-y-2">
                {product.servingGuide.map((guide) => (
                  <li key={guide.dogSize}>
                    {guide.dogSize} ({guide.weight}): {guide.pieces}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <p>
                  <strong>Net Weight:</strong> {product.netWeight}
                </p>
                <p>
                  <strong>Storage:</strong> {product.storage}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <MinimalFooter />
    </div>
  );
}
