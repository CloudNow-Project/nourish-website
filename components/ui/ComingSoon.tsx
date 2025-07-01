"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Paw, Bowl, Pack } from "@/components/ui/Icons";
import { MinimalFooter } from "@/components/layout/MinimalFooter";
import { Navbar } from "@/components/layout/Navbar";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface ComingSoonProps {
  productName: string;
  breadcrumbs: BreadcrumbItem[];
}

export function ComingSoon({ productName, breadcrumbs }: ComingSoonProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-orange-50">
      <Navbar />

      <main className="flex-grow flex items-center justify-center relative overflow-hidden pt-32 pb-20">
        {/* Breadcrumb */}
        <div className="absolute top-24 left-0 w-full p-4 z-20">
          <div className="container mx-auto">
            <Breadcrumb items={breadcrumbs} />
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Animated paw prints */}
          <motion.div
            initial={{ opacity: 0, rotate: 45, scale: 0.8 }}
            animate={{ opacity: 0.06, rotate: 45, scale: 1 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
          >
            <Paw size={180} color="#FFBD58" className="absolute -top-10 -left-10" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, rotate: -12, scale: 0.8 }}
            animate={{ opacity: 0.06, rotate: -12, scale: 1 }}
            transition={{ duration: 1.8, repeat: Infinity, repeatType: "reverse", delay: 0.3 }}
          >
            <Paw size={140} color="#FFBD58" className="absolute top-1/4 -right-10" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, rotate: -30, scale: 0.8 }}
            animate={{ opacity: 0.06, rotate: -30, scale: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.6 }}
          >
            <Paw size={160} color="#FFBD58" className="absolute -bottom-10 left-1/4" />
          </motion.div>

          {/* Product-related icons */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 0.08, y: 0 }} transition={{ duration: 1 }}>
            <Bowl size={120} className="absolute top-1/3 left-20" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.08, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <Pack size={120} className="absolute bottom-1/3 right-20" />
          </motion.div>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Main Content */}
              <div className="text-center mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h1 className="text-6xl font-bold text-[#FFBD58] mb-4">Coming Soon!</h1>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h2 className="text-4xl font-bold text-[#A2501B] mb-6">{productName}</h2>
                </motion.div>
              </div>

              {/* Product Preview */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative mb-12"
              >
                <div className="aspect-[16/9] relative overflow-hidden ">
                  <Image src="/images/doggo.png" alt="Product Preview" fill className="object-contain p-8" />
                </div>
              </motion.div>

              {/* Description and CTA */}
              <div className="text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="mb-8"
                >
                  <p className="text-gray-600 text-xl mb-2">We&apos;re cooking up something special!</p>
                  <p className="text-gray-500">
                    Our team is working hard to bring you the best superfood treats for your furry friend.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="space-y-4"
                >
                  <Link
                    href="/products"
                    className="inline-block bg-[#FFBD58] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#A2501B] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    View Available Products
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <MinimalFooter />
    </div>
  );
}
