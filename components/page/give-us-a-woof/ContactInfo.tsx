import Link from "next/link";
import { contactInfo, contactForm } from "@/data/give-us-a-woof";
import ContactForm from "@/components/sections/ContactForm";

export function ContactInfo() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Contact details and Map */}
        <div className="flex flex-col md:flex-row mb-16">
          {/* Contact details */}
          <div className="md:w-1/3 pr-0 md:pr-8 mb-12 md:mb-0">
            <div className="space-y-12">
              {/* Email */}
              <div className="flex items-start">
                <div className="bg-gray-100 rounded-full p-3 mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-chile-rojo"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{contactInfo.email.title}</h3>
                  <p className="text-gray-600 mb-2">{contactInfo.email.subtitle}</p>
                  <a
                    href={`mailto:${contactInfo.email.value}`}
                    className="text-chile-rojo hover:text-terracota transition-colors"
                  >
                    {contactInfo.email.value}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start">
                <div className="bg-gray-100 rounded-full p-3 mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-chile-rojo"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{contactInfo.phone.title}</h3>
                  <p className="text-gray-600 mb-2">{contactInfo.phone.subtitle}</p>
                  <a
                    href={`tel:${contactInfo.phone.value}`}
                    className="text-chile-rojo hover:text-terracota transition-colors"
                  >
                    {contactInfo.phone.value}
                  </a>
                </div>
              </div>

              {/* Office */}
              <div className="flex items-start">
                <div className="bg-gray-100 rounded-full p-3 mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-chile-rojo"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{contactInfo.office.title}</h3>
                  <p className="text-gray-600 mb-2">{contactInfo.office.address}</p>
                  <Link
                    href={contactInfo.office.directionsUrl}
                    className="text-chile-rojo hover:text-terracota transition-colors inline-flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {contactInfo.office.directionsText}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="md:w-2/3 h-[400px] bg-gray-200 rounded-lg overflow-hidden">
            {contactInfo.office.mapEmbedUrl ? (
              <iframe
                src={contactInfo.office.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Nourish Office Location"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-24 w-24"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
              </div>
            )}
          </div>
        </div>

        {/* Contact Form Section (Below Map) */}
        <div className="max-w-2xl mx-auto">
          <ContactForm
            heading={contactForm.heading}
            subheading={contactForm.subheading}
            nameLabel={contactForm.nameLabel}
            emailLabel={contactForm.emailLabel}
            messageLabel={contactForm.messageLabel}
            messagePlaceholder={contactForm.messagePlaceholder}
            submitButton={contactForm.submitButton}
          />
        </div>
      </div>
    </section>
  );
}
