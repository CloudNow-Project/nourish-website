"use client";

import { ComingSoon } from "@/components/ui/ComingSoon";

export default function Omega3SupportPage() {
  const breadcrumbs = [
    { label: "Products", href: "/products" },
    { label: "Omega-3 Support", href: "/products/omega-3-support" },
  ];

  return <ComingSoon productName="Omega-3 Support" breadcrumbs={breadcrumbs} />;
}
