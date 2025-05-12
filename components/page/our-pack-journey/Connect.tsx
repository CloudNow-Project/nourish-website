import Image from "next/image";
import { connectContent } from "@/data/our-pack-journey";

export function ConnectSection() {
  return (
    <section className="py-20 bg-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Content side */}
          <div className="md:w-1/2 text-white">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">{connectContent.heading}</h2>
            <p className="text-lg text-white/80 mb-8">{connectContent.description}</p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-nourish-orange hover:bg-nourish-orange/90 px-8 py-3 rounded-md text-white font-medium">
                {connectContent.ctaText}
              </button>
              <button className="bg-transparent border border-white/30 hover:bg-white/10 px-8 py-3 rounded-md text-white font-medium">
                {connectContent.secondaryCtaText}
              </button>
            </div>
          </div>

          {/* Image side */}
          <div className="md:w-1/2 h-[300px] md:h-[400px] relative bg-gray-600 rounded-lg overflow-hidden">
            {connectContent.imageSrc ? (
              <Image src={connectContent.imageSrc} alt="Connect with us" fill className="object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <svg className="w-24 h-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
