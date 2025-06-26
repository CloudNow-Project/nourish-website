import { Navbar } from "@/components/layout/Navbar";
import { MinimalFooter } from "@/components/layout/MinimalFooter";

export const metadata = {
  title: "Pawsome Treats | Nourish",
  description: "Explore our range of premium, nutritious dog treats made with wholesome ingredients.",
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-ernest-beige">
      <Navbar />

      <main className="flex-grow py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-center mb-10">Our Pawsome Treats</h1>

          <div className="text-center mb-20">
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Our premium dog treats are created with human-grade, nutritionally dense ingredients that support your
              dog&apos;s health and happiness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product listing will go here */}
            <div className="h-64 bg-white rounded-lg shadow-md flex items-center justify-center">
              <p className="text-lg text-gray-400">Product listings coming soon</p>
            </div>
          </div>
        </div>
      </main>

      <MinimalFooter />
    </div>
  );
}
