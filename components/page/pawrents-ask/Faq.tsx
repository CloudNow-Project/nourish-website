import { faqItems } from "@/data/pawrents-ask";

export function FaqSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="space-y-8">
          {faqItems.map((item) => (
            <div key={item.id} className="border-b border-gray-200 pb-8">
              <h2 className="text-xl md:text-2xl font-display font-bold text-chile-rojo mb-4">{item.question}</h2>
              <p className="text-gray-700">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
