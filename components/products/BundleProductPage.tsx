"use client";

import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { MinimalFooter } from "@/components/layout/MinimalFooter";
import { AnimatedElement } from "@/components/ui/AnimatedElement";
import { IconButton } from "@/components/ui/IconButton";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

interface BundleProductPageProps {
  product: {
    name: string;
    fullName: string;
    slug: string;
    price: number;
    description: string;
    includes: string[];
    variants: string[];
    marketplaces?: {
      shopee?: string;
      tokopedia?: string;
    };
  };
}

export function BundleProductPage({ product }: BundleProductPageProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

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
            {/* Main Product Image Slider */}
            <AnimatedElement variant="fadeIn" delay={0.2}>
              <div className="product-slider-container">
                <Swiper
                  spaceBetween={10}
                  navigation={true}
                  thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="main-product-slider"
                >
                  {allImages.map((image, index) => (
                    <SwiperSlide key={index}>
                      <div className="relative aspect-square overflow-hidden bg-white">
                        <Image
                          src={image}
                          alt={`Heyo ${product.name} - Image ${index + 1}`}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Thumbnail Slider */}
                <div className="mt-4">
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={12}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="thumb-product-slider"
                  >
                    {allImages.map((image, index) => (
                      <SwiperSlide key={index}>
                        <div className="relative w-full pb-[100%]">
                          <div className="absolute inset-0">
                            <Image
                              src={image}
                              alt={`Thumbnail ${index + 1}`}
                              fill
                              className="object-cover rounded-lg cursor-pointer hover:opacity-75 transition-opacity"
                              sizes="(max-width: 768px) 25vw, 120px"
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </AnimatedElement>

            {/* Product Info */}
            <AnimatedElement variant="fadeInRight" delay={0.3}>
              <div className="flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 mb-2">
                  <span className="bg-[#E67E22] text-white text-sm px-3 py-1 rounded-full">BUNDLE</span>
                  <span className="text-sm text-gray-600">FREE SAMPLES!</span>
                </div>
                <h1 className="text-4xl font-bold mb-2">{product.fullName}</h1>
                <p className="text-lg text-gray-600 mb-4">{product.description}</p>
                <div className="text-2xl font-semibold text-[#E67E22] mb-4">
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  }).format(product.price)}
                </div>

                {product.marketplaces && (
                  <div className="flex gap-4 mb-6">
                    {product.marketplaces.shopee && (
                      <IconButton
                        href={product.marketplaces.shopee}
                        icon={<Image src="/images/logo/shopee-logo.png" alt="Shopee" width={24} height={24} />}
                        className="w-full bg-[#F65E42]"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Buy on Shopee
                      </IconButton>
                    )}
                    {product.marketplaces.tokopedia && (
                      <IconButton
                        href={product.marketplaces.tokopedia}
                        icon={<Image src="/images/logo/tokped-logo.png" alt="Tokopedia" width={24} height={24} />}
                        className="w-full bg-[#5B9959]"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Buy on Tokopedia
                      </IconButton>
                    )}
                  </div>
                )}

                <div className="prose prose-lg mb-8">
                  <div className="bg-[#FFF8EA] p-6 rounded-lg mb-6">
                    <h3 className="font-semibold mb-4">Bundle Includes:</h3>
                    <ul className="list-none space-y-2">
                      {product.includes.map((item) => (
                        <li key={item} className="flex items-start">
                          <span className="text-[#E67E22] mr-2">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h3 className="font-semibold mb-4">Choose from our drool-worthy treats:</h3>
                    <ul className="list-none space-y-2">
                      {product.variants.map((variant) => (
                        <li key={variant} className="flex items-start">
                          <span className="text-[#E67E22] mr-2">•</span>
                          {variant}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          </div>

          {/* Additional Information */}
          <AnimatedElement variant="fadeInUp" delay={0.4}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div className="prose prose-lg">
                <h2 className="text-2xl font-bold mb-4">Important Notes:</h2>
                <ul className="space-y-2">
                  <li>• Samples are sent randomly based on availability</li>
                  <li>• Variants cannot be chosen</li>
                  <li>• All treats are made with real superfoods, no nasties</li>
                  <li>• Perfect for trying new flavors</li>
                </ul>
              </div>

              {/* Product Features */}
              <div className="bg-[#FFF8EA] p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Bundle Benefits</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#E67E22] mr-2">✓</span>
                    Free samples with every bundle
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E67E22] mr-2">✓</span>
                    Great value for money
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E67E22] mr-2">✓</span>
                    Try different flavors
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E67E22] mr-2">✓</span>
                    Perfect for new customers
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E67E22] mr-2">✓</span>
                    Same high quality ingredients
                  </li>
                </ul>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </main>

      <MinimalFooter />

      <style jsx global>{`
        .product-slider-container {
          width: 100%;
          background: white;
        }

        .main-product-slider {
          width: 100%;
          border-radius: 12px;
          overflow: hidden;
          background: white;
        }

        .main-product-slider .swiper-slide {
          background: white;
          opacity: 1;
        }

        .thumb-product-slider {
          width: 100%;
        }

        .thumb-product-slider .swiper-slide {
          opacity: 0.5;
          transition: all 0.3s ease;
        }

        .thumb-product-slider .swiper-slide-thumb-active {
          opacity: 1;
        }

        .swiper-button-next,
        .swiper-button-prev {
          color: #e67e22;
          background: rgba(255, 255, 255, 0.8);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: rgba(255, 255, 255, 0.95);
        }

        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 20px;
        }
      `}</style>
    </div>
  );
}
