import Image from "next/image";
import { teamContent } from "@/data/our-pack-journey";

export function TeamSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-chile-rojo mb-4">{teamContent.heading}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{teamContent.subheading}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamContent.members.slice(0, 4).map((member) => (
            <div key={member.id} className="text-center">
              <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full overflow-hidden mb-4">
                {member.imageSrc ? (
                  <Image src={member.imageSrc} alt={member.name} width={128} height={128} className="object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-16 w-16"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                )}
              </div>
              <h3 className="text-xl font-display font-bold text-chile-rojo">{member.name}</h3>
              <p className="text-nourish-orange font-medium mb-2">{member.title}</p>
              <p className="text-gray-600 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
          {teamContent.members.slice(4, 6).map((member) => (
            <div key={member.id} className="flex items-center bg-ernest-beige p-6 rounded-lg">
              <div className="w-20 h-20 bg-gray-200 rounded-full overflow-hidden flex-shrink-0 mr-6">
                {member.imageSrc ? (
                  <Image src={member.imageSrc} alt={member.name} width={80} height={80} className="object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                )}
              </div>
              <div>
                <h3 className="text-lg font-display font-bold text-chile-rojo">{member.name}</h3>
                <p className="text-nourish-orange font-medium text-sm mb-1">{member.title}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
