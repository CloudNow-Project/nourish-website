"use client";

import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { MinimalFooter } from "@/components/layout/MinimalFooter";
import { AnimatedElement } from "@/components/ui/AnimatedElement";
import { IconButton } from "@/components/ui/IconButton";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ExtendedProduct } from "@/data/products";
import { ProductImageSlider } from "./ProductImageSlider";

interface ProductPageProps {
  product: ExtendedProduct;
}

export function ProductPage({ product }: ProductPageProps) {
  const breadcrumbItems = [
    { label: "Products", href: "/products" },
    { label: product.name, href: `/${product.slug}` },
  ];

  // Combine main image with gallery images, ensuring no duplicates
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
            {/* Main Product Image Slider */}
            <ProductImageSlider images={allImages} productName={product.name} />

            {/* Product Info */}
            <AnimatedElement variant="fadeInRight" delay={0.3}>
              <div className="flex flex-col">
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="bg-[#A2501B] text-white text-sm px-3 py-1 rounded-full">TREAT</span>
                  <span className="text-sm text-gray-600">Nourish with love!</span>
                </div>

                <h1 className="text-4xl font-bold mb-4">{product.fullName}</h1>
                <p className="text-gray-600 mb-6">{product.description}</p>

                <div className="text-2xl font-semibold text-[#A2501B] mb-6">
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  }).format(product.price)}
                </div>

                <div className="flex gap-4 mb-6">
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

                <div className="bg-[#FFF8EA] p-6 rounded-lg mb-6">
                  <p className="text-gray-700">
                    Packed with nourishing goodness: {product.ingredients.join(", ")}, and lots of love ♥
                  </p>
                </div>
              </div>
            </AnimatedElement>
          </div>

          {/* Product Details */}
          <AnimatedElement variant="fadeInUp" delay={0.4}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div className="prose prose-lg">
                <h2 className="text-2xl font-bold mb-4">Why It&apos;s Nourishing:</h2>
                <ul className="space-y-4">
                  {product.benefits.map((benefit) => (
                    <li key={benefit.name}>
                      <strong>{benefit.name}</strong> – {benefit.description}
                    </li>
                  ))}
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">Serving Guide (Per Day):</h2>
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

              {/* Additional Product Information */}
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="font-semibold mb-4">ABSOLUTELY NO:</h3>
                  <ul className="grid grid-cols-2 gap-4">
                    {product.noArtificials.map((item) => (
                      <li key={item} className="flex items-center">
                        <span className="text-[#A2501B] mr-2">✕</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#FFF8EA] p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Made with Love</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <span className="text-[#A2501B] mr-2">♥</span>
                      Human-grade ingredients
                    </li>
                    <li className="flex items-center">
                      <span className="text-[#A2501B] mr-2">♥</span>
                      Crafted in small batches
                    </li>
                    <li className="flex items-center">
                      <span className="text-[#A2501B] mr-2">♥</span>
                      Nutritionist formulated
                    </li>
                    <li className="flex items-center">
                      <span className="text-[#A2501B] mr-2">♥</span>
                      Allergy-friendly
                    </li>
                    <li className="flex items-center">
                      <span className="text-[#A2501B] mr-2">♥</span>
                      Pure & natural ingredients
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </main>

      <MinimalFooter />
    </div>
  );
}
