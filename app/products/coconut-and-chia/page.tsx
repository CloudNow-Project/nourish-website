"use client";

import { ComingSoon } from "@/components/ui/ComingSoon";

export default function CoconutAndChiaPage() {
  const breadcrumbs = [
    { label: "Products", href: "/products" },
    { label: "Coconut & Chia", href: "/products/coconut-and-chia" },
  ];

  return <ComingSoon productName="Coconut & Chia" breadcrumbs={breadcrumbs} />;
}
