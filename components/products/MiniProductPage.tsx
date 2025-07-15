"use client";

import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { MinimalFooter } from "@/components/layout/MinimalFooter";
import { AnimatedElement } from "@/components/ui/AnimatedElement";
import { IconButton } from "@/components/ui/IconButton";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { MiniPackProduct } from "@/data/products";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface MiniProductPageProps {
  product: MiniPackProduct;
}

export function MiniProductPage({ product }: MiniProductPageProps) {
  const breadcrumbItems = [
    { label: "Products", href: "/products" },
    { label: product.name, href: `/products/${product.slug}` },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-grow pt-32">
        <div className="container max-w-6xl mx-auto px-4">
          <Breadcrumb items={breadcrumbItems} />

          {/* Product Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Product Image */}
            <AnimatedElement variant="fadeIn" delay={0.2}>
              <div className="relative aspect-square overflow-hidden bg-white rounded-lg">
                <Image
                  src={product.imageSrc}
                  alt={`Heyo ${product.name} Dog Treats`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </AnimatedElement>

            {/* Product Info */}
            <AnimatedElement variant="fadeInRight" delay={0.3}>
              <div className="flex flex-col justify-center">
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

                <div className="flex gap-4 mb-6">
                  <IconButton
                    href="https://shopee.co.id/heyo.id"
                    icon={<Image src="/images/logo/shopee-logo.png" alt="Shopee" width={24} height={24} />}
                    className="w-full bg-[#F65E42]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy on Shopee
                  </IconButton>
                  <IconButton
                    href="https://www.tokopedia.com/heyo-superfood-dog-treats"
                    icon={<Image src="/images/logo/tokped-logo.png" alt="Tokopedia" width={24} height={24} />}
                    className="w-full bg-[#5B9959]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy on Tokopedia
                  </IconButton>
                </div>

                <div className="prose prose-lg">
                  <div className="bg-[#FFF8EA] p-6 rounded-lg">
                    <h3 className="font-semibold mb-4">Mini Pack Features:</h3>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start">
                        <span className="text-[#A2501B] mr-2">✓</span>
                        Perfect trial size
                      </li>
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
                        Travel-friendly packaging
                      </li>
                    </ul>
                  </div>
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
