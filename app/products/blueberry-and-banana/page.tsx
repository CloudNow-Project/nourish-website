"use client";

import { ComingSoon } from "@/components/ui/ComingSoon";

export default function BlueberryAndBananaPage() {
  const breadcrumbs = [
    { label: "Products", href: "/products" },
    { label: "Blueberry & Banana", href: "/products/blueberry-and-banana" },
  ];

  return <ComingSoon productName="Blueberry & Banana" breadcrumbs={breadcrumbs} />;
}
