import React from "react";
import Image from "next/image";
import { NourishLogo } from "@/components/ui/NourishLogo";

export function TeamSection() {
  return (
    <section className="py-20 bg-[#f7d08a] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute bottom-10 left-20">
        <Image src="/images/toys/ball.svg" alt="Ball toy" width={80} height={80} />
      </div>
      <div className="absolute bottom-40 left-40">
        <Image src="/images/toys/tennis-ball.svg" alt="Tennis ball" width={100} height={100} />
      </div>
      <div className="absolute bottom-20 right-20">
        <Image src="/images/toys/rope.svg" alt="Rope toy" width={100} height={100} />
      </div>

      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">Our Team</h2>
          <h3 className="text-6xl md:text-7xl font-display font-bold text-white">The Bailey Duo</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left side - CFO */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="relative h-[300px] w-[300px] border-8 border-white bg-white shadow-lg mb-6 overflow-hidden">
              <Image src="/images/team/bailey-cfo.jpg" alt="Bailey the CFO" fill className="object-cover" />
              <div className="absolute bottom-0 left-0 bg-white py-2 px-4">
                <p className="font-bold text-gray-800">CFO (Chief Fluff Officer)</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-lg max-w-sm">
              <p className="text-lg">
                Bailey the CFO is an Aussie Doodle, like the title says, he is the fluffy one and his favourite toy is a
                ball.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-lg max-w-sm mt-4">
              <p className="text-lg">He ensures that our products are of premium quality.</p>
            </div>
          </div>

          {/* Right side - CEO */}
          <div className="flex flex-col items-center lg:items-end">
            <div className="relative h-[300px] w-[300px] border-8 border-white bg-white shadow-lg mb-6 overflow-hidden">
              <Image src="/images/team/bailey-ceo.jpg" alt="Bailey the CEO" fill className="object-cover" />
              <div className="absolute bottom-0 right-0 bg-white py-2 px-4">
                <p className="font-bold text-gray-800">CEO (Chief Eating Officer)</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-lg max-w-sm">
              <p className="text-lg">
                Bailey the CEO is a Pitbull Terrier, like the title says, she is the foodie one and her favourite toy is
                a rope.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-lg max-w-sm mt-4">
              <p className="text-lg">She ensures that our products are #DroolWorthy</p>
            </div>
          </div>
        </div>

        {/* Fun Facts */}
        <div className="mt-20 bg-white/20 rounded-lg p-8 max-w-2xl ml-auto">
          <div className="flex items-center gap-6 mb-4">
            <Image src="/images/flags/canada.svg" alt="Canadian Flag" width={60} height={40} />
            <Image src="/images/flags/indonesia.svg" alt="Indonesia Flag" width={60} height={40} />
          </div>

          <p className="text-xl font-medium text-white mb-4">
            Fun Fact: the Bailey Duo are Canadian born pups and moved to Indonesia in 2024. They used to be neighbours
            back in Canada!
          </p>

          <div className="flex items-center gap-4">
            <Image src="/images/food/durian.svg" alt="Durian" width={60} height={60} />
            <p className="text-xl font-medium text-white">They both love durian (in very small amount of course)</p>
          </div>
        </div>

        {/* Logo */}
        <div className="absolute bottom-10 left-10">
          <NourishLogo color="white" size={150} />
        </div>
      </div>
    </section>
  );
}
