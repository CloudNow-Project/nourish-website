import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-amber-100 to-yellow-100 py-16">
        <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-800">
              Wholesome Treats,
              <br />
              <span className="text-amber-600">Happier Tails</span>
            </h1>
            <p className="text-gray-700 text-lg">
              Made with love, premium ingredients, and absolutely no fillers. Because your furry friend deserves the
              very best.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-amber-600 hover:bg-amber-700 px-6 py-2 rounded-full text-white">Shop Now</Button>
              <Button className="bg-white border border-amber-600 text-amber-600 hover:bg-amber-50 px-6 py-2 rounded-full">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative h-64 md:h-80">
            <div className="absolute inset-0 bg-gray-300 rounded-lg overflow-hidden">
              {/* Hero Image Placeholder */}
              <Image src="/dog-placeholder.jpg" alt="Happy dog with treats" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Why Paw-rents Choose Nourish */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Paw-rents Choose Nourish</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Our treats aren&apos;t just tasty—they&apos;re made with carefully sourced ingredients, nutritional
            integrity, and doggie science. Here&apos;s why we&apos;re different.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6 rounded-lg hover:shadow-md transition-shadow">
              <div className="mx-auto w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-amber-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-amber-700 mb-2">Superfood Packed</h3>
              <p className="text-gray-600">
                Nutrient-rich ingredients carefully selected to support your dog&apos;s health and vitality.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6 rounded-lg hover:shadow-md transition-shadow">
              <div className="mx-auto w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-amber-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-amber-700 mb-2">Vet-Approved Recipes</h3>
              <p className="text-gray-600">
                Formulated with input from veterinary nutritionists to ensure optimal health benefits.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6 rounded-lg hover:shadow-md transition-shadow">
              <div className="mx-auto w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-amber-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-amber-700 mb-2">Sensitive-Friendly</h3>
              <p className="text-gray-600">
                Gentle on tummies with allergen-conscious options for pups with sensitive systems.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-full">Learn More</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
