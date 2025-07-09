"use client";

import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { MinimalFooter } from "@/components/layout/MinimalFooter";
import { AnimatedElement } from "@/components/ui/AnimatedElement";
import { IconButton } from "@/components/ui/IconButton";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ExtendedProduct } from "@/data/products";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

interface ProductPageProps {
  product: ExtendedProduct;
}

export function ProductPage({ product }: ProductPageProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

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
                          alt={`Heyo ${product.name} Dog Treats - Image ${index + 1}`}
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
                <h1 className="text-4xl font-bold mb-4">{product.fullName}</h1>
                <div className="text-2xl font-semibold text-[#A2501B] mb-4">
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
                  >
                    Buy on Shopee
                  </IconButton>
                  <IconButton
                    href={product.marketplaces.tokopedia}
                    icon={<Image src="/images/logo/tokped-logo.png" alt="Tokopedia" width={24} height={24} />}
                    className="w-full bg-[#5B9959]"
                  >
                    Buy on Tokopedia
                  </IconButton>
                </div>

                <div className="prose prose-lg mb-8">
                  <p className="text-gray-600 mb-4">
                    Packed with nourishing goodness: {product.ingredients.join(", ")}, and lots of love.
                  </p>

                  <div className="bg-[#FFF8EA] p-6 rounded-lg mb-6">
                    <h3 className="font-semibold mb-2">ABSOLUTELY NO:</h3>
                    <ul className="list-none space-y-2">
                      {product.noArtificials.map((item) => (
                        <li key={item}>✕ {item}</li>
                      ))}
                    </ul>
                  </div>
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

              {/* Additional Product Information or Features can go here */}
              <div className="bg-[#FFF8EA] p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Product Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#A2501B] mr-2">✓</span>
                    Human-grade ingredients
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#A2501B] mr-2">✓</span>
                    No artificial preservatives
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#A2501B] mr-2">✓</span>
                    Made with love in small batches
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#A2501B] mr-2">✓</span>
                    Nutritionist formulated
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#A2501B] mr-2">✓</span>
                    Supports overall well-being
                  </li>
                </ul>
              </div>
            </div>
          </AnimatedElement>

          {/* Testimonials Section */}
          <AnimatedElement variant="fadeInUp" delay={0.5}>
            <TestimonialsSection
              heading="What Pet Parents Say"
              subheading="Don't just take our word for it - hear from other happy pet parents who have tried our treats!"
              reviews={[
                {
                  id: "1",
                  text: "My dog absolutely loves these treats! The natural ingredients make me feel good about giving them to her.",
                  author: "Sarah M.",
                  title: "Dog Parent",
                  rating: 5,
                  imageSrc: "/images/avatar/ava-01.jpg",
                },
                {
                  id: "2",
                  text: "Great quality treats. I can see the difference in my dog's energy and coat since starting these.",
                  author: "Michael R.",
                  title: "Pet Owner",
                  rating: 5,
                  imageSrc: "/images/avatar/ava-02.jpg",
                },
                {
                  id: "3",
                  text: "Finally found treats that are both healthy and delicious for my picky eater!",
                  author: "Jessica L.",
                  title: "Dog Lover",
                  rating: 5,
                  imageSrc: "/images/avatar/ava-03.jpg",
                },
              ]}
              pageType="product"
            />
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
          color: #a2501b;
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
