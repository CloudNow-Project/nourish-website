"use client";

import { ComingSoon } from "@/components/ui/ComingSoon";

export default function BeefAndBeetrootPage() {
  const breadcrumbs = [
    { label: "Products", href: "/products" },
    { label: "Beef & Beetroot", href: "/products/beef-and-beetroot" },
  ];

  return <ComingSoon productName="Beef & Beetroot" breadcrumbs={breadcrumbs} />;
}
