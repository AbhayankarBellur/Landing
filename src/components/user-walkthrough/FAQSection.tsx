import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Can I find pet services near me on Warmpawz?",
    answer: "Yes. Warmpawz helps pet parents discover local pet care services — including veterinary care, grooming, boarding, walking, and training — based on their location and their pet's specific needs. Warmpawz endeavors to be Hyperlocal in all its services."
  },
  {
    question: "How does Warmpawz ensure pet care services are trustworthy?",
    answer: "Warmpawz focuses on transparency and verification by encouraging clear provider information, shared standards, and community feedback. This helps pet parents understand what to expect and choose services with greater confidence. Warmpawz also encourages and onboards community referred service providers that ensures that most service providers on the platform have delivered satisfactory at least and superlative at best experience historically."
  },
  {
    question: "Is Warmpawz suitable for first-time pet parents?",
    answer: "Absolutely! Warmpawz is designed to support both new and experienced pet parents by providing guidance, shared learning, and access to trusted pet care services, making it easier to navigate unfamiliar decisions."
  },
  {
    question: "What is Warmpawz and how does it help pet parents?",
    answer: "Warmpawz is a trusted pet care platform that helps pet parents discover verified services, learn from shared experiences, and make informed decisions. It brings together care providers and community knowledge to support pets through every stage of life."
  },
  {
    question: "Can pet parents contribute to the Warmpawz community?",
    answer: "Yes. Pet parents are encouraged to share experiences, insights, and feedback that help strengthen the pet care ecosystem. Warmpawz values participation and collective learning as essential to better care. Pet Parents can write to a dedicated operations team to recommend providers, make suggestions for service improvements and contribute with their experience."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-12 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about Warmpawz and how we support pet parents
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

export default FAQSection;