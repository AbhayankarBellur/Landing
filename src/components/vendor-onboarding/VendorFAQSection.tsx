import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How does Warmpawz support pet service providers in India?",
    answer: "Warmpawz brings service providers into a shared pet care ecosystem where they can connect with pet parents, learn from peers, and shape services that reflect Indian lifestyles. The platform supports transparency, collaboration, and responsible innovation across veterinary, grooming, boarding, training, and allied pet services."
  },
  {
    question: "Is Warmpawz only a listing platform for pet service providers?",
    answer: "No. Warmpawz goes beyond listings by encouraging service providers to co-create care models, share knowledge, and build trust through verified practices and community participation. The focus is on strengthening the pet care system, not just promoting individual services. It is fully transactional and allows for service providers to sell products and services with integrated payment gateways and logistics integrations."
  },
  {
    question: "Can service providers create new or customised pet care services on Warmpawz?",
    answer: "Yes. Warmpawz is designed to allow providers to experiment with new formats, localised offerings, and hybrid care models that suit different households, pet needs, and regional contexts across India."
  },
  {
    question: "Can I register to provide more than one service?",
    answer: "Yes. Warmpawz recognizes that there could be more than one services offered by the same provider. With Transparent Onboarding rules, Warmpawz allows service providers to register multiple businesses and start offering their services quickly to the community."
  },
  {
    question: "What types of pet service providers can join Warmpawz?",
    answer: "Warmpawz welcomes a wide range of pet care professionals, including veterinary clinics, groomers, boarding and daycare centres, dog walkers, trainers, behaviorists, nutritionists, Pet Cafe's, holiday homes, resorts, relocation service providers, transport service providers and other allied pet service providers committed to responsible services."
  }
];

const VendorFAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-12 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about joining Warmpawz as a service provider
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border border-border rounded-lg overflow-hidden bg-card shadow-sm"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-muted/50 transition-colors duration-200"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-foreground pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  <svg
                    className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              {/* Answer Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5 pt-2">
                  <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VendorFAQSection;