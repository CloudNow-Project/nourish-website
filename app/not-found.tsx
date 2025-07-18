"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Paw } from "@/components/ui/Icons";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F6b656] relative overflow-hidden">
      {/* Animated background paw prints */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, rotate: 45 }}
          animate={{ opacity: 0.15, rotate: 45 }}
          transition={{ duration: 1 }}
        >
          <Paw size={120} color="white" className="absolute top-10 left-10" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, rotate: -12 }}
          animate={{ opacity: 0.15, rotate: -12 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Paw size={80} color="white" className="absolute top-40 right-20" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, rotate: -30 }}
          animate={{ opacity: 0.15, rotate: -30 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Paw size={100} color="white" className="absolute bottom-20 left-1/4" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, rotate: 30 }}
          animate={{ opacity: 0.15, rotate: 30 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Paw size={90} color="white" className="absolute bottom-10 right-10" />
        </motion.div>
      </div>

      <div className="relative z-10 text-center px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-9xl font-bold text-white mb-4">404</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-white mb-6">Oops! Page Not Found</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-white text-lg mb-8">
            Looks like this page has gone for a walk! Let&apos;s get you back on track.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link
            href="/"
            className="inline-block bg-white text-[#F6b656] px-8 py-3 rounded-md font-bold text-lg hover:bg-opacity-90 transition-all"
          >
            Go Back Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
