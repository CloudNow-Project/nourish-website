"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { AnimatedElement } from "@/components/ui/AnimatedElement";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

interface ProductImageSliderProps {
  images: string[];
  productName: string;
}

export function ProductImageSlider({ images, productName }: ProductImageSliderProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <AnimatedElement variant="fadeIn" delay={0.2}>
      <div className="product-slider-container">
        <Swiper
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="main-product-slider"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative aspect-square overflow-hidden bg-white">
                <Image
                  src={image}
                  alt={`Heyo ${productName} - Image ${index + 1}`}
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
            {images.map((image, index) => (
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
    </AnimatedElement>
  );
}
