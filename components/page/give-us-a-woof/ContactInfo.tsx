import Link from "next/link";
import { contactInfo, contactForm } from "@/data/give-us-a-woof";
import ContactForm from "@/components/sections/ContactForm";
import { AnimatedElement } from "@/components/ui/AnimatedElement";
import Image from "next/image";

export function ContactInfo() {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Decorative food illustrations */}
      <div className="absolute top-0 left-0">
        <Image src="/images/decorative/drops.svg" alt="Decorative element" width={120} height={120} />
      </div>
      <div className="absolute bottom-0 right-0">
        <Image src="/images/decorative/beet.svg" alt="Decorative element" width={150} height={150} />
      </div>
      <div className="absolute top-1/4 right-0">
        <Image src="/images/decorative/pumpkin.svg" alt="Decorative element" width={200} height={200} />
      </div>
      <div className="absolute bottom-1/3 left-0">
        <Image src="/images/decorative/carrot.svg" alt="Decorative element" width={180} height={180} />
      </div>
      <div className="absolute top-1/2 right-1/4">
        <Image src="/images/decorative/grains.svg" alt="Decorative element" width={120} height={120} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedElement variant="fadeInUp" delay={0.1}>
          <h2 className="text-5xl font-display font-bold text-[#f7d08a] text-center mb-16">Let&apos;s Connect</h2>
        </AnimatedElement>

        {/* Contact details and Map */}
        <div className="flex flex-col md:flex-row mb-16">
          {/* Contact details */}
          <div className="md:w-1/2 pr-0 md:pr-8 mb-12 md:mb-0">
            <div className="space-y-12">
              {/* Email */}
              <AnimatedElement variant="fadeInLeft" delay={0.2}>
                <div className="flex items-start">
                  <div className="bg-[#fff8ea] rounded-full p-3 mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-[#f7d08a]"
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
                      className="text-[#f7d08a] hover:text-[#e5af41] transition-colors font-medium"
                    >
                      {contactInfo.email.value}
                    </a>
                  </div>
                </div>
              </AnimatedElement>

              {/* Phone */}
              <AnimatedElement variant="fadeInLeft" delay={0.3}>
                <div className="flex items-start">
                  <div className="bg-[#fff8ea] rounded-full p-3 mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-[#f7d08a]"
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
                    <div className="space-y-2">
                      {contactInfo.phone.values.map((phone, index) => (
                        <div key={index} className="flex items-center">
                          <a
                            href={`tel:${phone.number.replace(/\s+/g, "")}`}
                            className="text-[#f7d08a] hover:text-[#e5af41] transition-colors font-medium"
                          >
                            {phone.number}
                          </a>
                          <span className="ml-2 text-gray-600">({phone.person})</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedElement>

              {/* Social Media */}
              <AnimatedElement variant="fadeInLeft" delay={0.4}>
                <div className="flex items-start">
                  <div className="bg-[#fff8ea] rounded-full p-3 mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-[#f7d08a]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{contactInfo.social.title}</h3>
                    <p className="text-gray-600 mb-2">{contactInfo.social.username}</p>
                    <div className="flex space-x-4 mt-3">
                      {contactInfo.social.platforms.map((platform, index) => (
                        <Link
                          key={index}
                          href={platform.url}
                          className="text-[#f7d08a] hover:text-[#e5af41] transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {platform.icon === "instagram" && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-7 w-7"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.059-.976.045-1.505.207-1.858.344-.466.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.048 1.055-.058 1.37-.058 4.04 0 2.67.01 2.986.058 4.04.045.976.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.04.058 2.67 0 2.986-.01 4.04-.058.976-.045 1.504-.207 1.857-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.054.058-1.37.058-4.04 0-2.67-.01-2.986-.058-4.04-.045-.976-.207-1.504-.344-1.857a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.054-.048-1.37-.058-4.04-.058zm0 3.063a5.136 5.136 0 110 10.27 5.136 5.136 0 010-10.27zm0 8.468a3.333 3.333 0 100-6.666 3.333 3.333 0 000 6.666zm6.538-8.469a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" />
                            </svg>
                          )}
                          {platform.icon === "tiktok" && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-7 w-7"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                            </svg>
                          )}
                          {platform.icon === "youtube" && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-7 w-7"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                            </svg>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedElement>

              {/* Office Location */}
              <AnimatedElement variant="fadeInLeft" delay={0.5}>
                <div className="flex items-start">
                  <div className="bg-[#fff8ea] rounded-full p-3 mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-[#f7d08a]"
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
                      className="text-[#f7d08a] hover:text-[#e5af41] transition-colors inline-flex items-center font-medium"
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
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </AnimatedElement>
            </div>
          </div>

          {/* Map or Image */}
          <div className="md:w-1/2">
            <AnimatedElement variant="fadeInRight" delay={0.3}>
              <div className="h-[400px] bg-gray-200 rounded-lg overflow-hidden">
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
                  <div className="w-full h-full flex flex-col items-center justify-center bg-[#FFF8EA] p-8 text-center">
                    <Image
                      src="/images/logo/nourish-logo.svg"
                      alt="Nourish Logo"
                      width={200}
                      height={80}
                      className="mb-6"
                    />
                    <p className="text-xl text-gray-700 italic mb-4">
                      We are pawsitively grateful for your partnership.
                    </p>
                    <div className="flex items-center justify-center space-x-4 mt-4">
                      <Image src="/images/decorative/carrot.svg" alt="Decorative carrot" width={50} height={50} />
                      <Image src="/images/decorative/beet.svg" alt="Decorative beet" width={50} height={50} />
                      <Image src="/images/decorative/pumpkin.svg" alt="Decorative pumpkin" width={50} height={50} />
                    </div>
                  </div>
                )}
              </div>
            </AnimatedElement>
          </div>
        </div>

        {/* Contact Form Section (Below Map) */}
        <AnimatedElement variant="fadeInUp" delay={0.4}>
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
        </AnimatedElement>
      </div>
    </section>
  );
}
