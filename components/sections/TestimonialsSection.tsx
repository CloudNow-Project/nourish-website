import Image from "next/image";
import { AnimatedElement } from "@/components/ui/AnimatedElement";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Review = {
  id: string;
  text: string;
  author: string;
  title: string;
  rating: number;
  imageSrc: string;
};

interface TestimonialsSectionProps {
  heading: string;
  subheading: string;
  reviews: Review[];
}

export function TestimonialsSection({ heading, subheading, reviews }: TestimonialsSectionProps) {
  // Function to render stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clipRule="evenodd"
          />
        </svg>
      );
    }
    return stars;
  };

  return (
    <section className="py-24 bg-ernest-beige">
      <div className="container max-w-6xl mx-auto px-4">
        <SectionHeading
          // categoryLabel={{
          //   text: "Testimonials",
          // }}
          heading={heading}
          subheading={subheading}
          variant="secondary"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {reviews.map((review, index) => (
            <AnimatedElement key={review.id} variant="fadeInUp" delay={0.3 + index * 0.1}>
              <div className="bg-white p-8 rounded-lg shadow-md flex flex-col">
                {/* Stars */}
                <div className="flex mb-4">{renderStars(review.rating)}</div>

                {/* Review text */}
                <blockquote className="text-lg font-medium text-gray-800 mb-6 flex-grow">
                  &ldquo;{review.text}&rdquo;
                </blockquote>

                {/* Reviewer info */}
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 mr-4">
                    {review.imageSrc ? (
                      <Image
                        src={review.imageSrc}
                        alt={review.author}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
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
                    <div className="font-semibold text-ernest-navy">{review.author}</div>
                    <div className="text-sm text-gray-500">{review.title}</div>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
}
