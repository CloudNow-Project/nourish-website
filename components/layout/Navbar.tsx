import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-bold text-xl text-amber-600">
          Nourish
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/inside-the-bite" className="text-gray-700 hover:text-amber-500 transition-colors font-medium">
            Inside the Bite
          </Link>
          <Link href="/our-pack-journey" className="text-gray-700 hover:text-amber-500 transition-colors font-medium">
            Our Pack Journey
          </Link>
          <Link href="/paw-rents-ask" className="text-gray-700 hover:text-amber-500 transition-colors font-medium">
            Paw-rents Ask
          </Link>
          <Link href="/give-us-a-bark" className="text-gray-700 hover:text-amber-500 transition-colors font-medium">
            Give Us a Bark
          </Link>
        </div>

        {/* CTA Button */}
        <Link href="/treats">
          <Button
            variant="outline"
            className="border-2 border-gray-800 text-gray-800 hover:bg-amber-50 hover:text-amber-700 hover:border-amber-500 transition-colors"
          >
            Paw-some Treats
          </Button>
        </Link>

        {/* Mobile Menu Button (hidden on desktop) */}
        <button className="md:hidden text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
