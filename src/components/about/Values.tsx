import { useEffect, useRef, useState } from "react";

const Values = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2, rootMargin: '-50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const values = [
    {
      title: "Compassion",
      description: "We place the wellbeing of pets at the heart of every decision we make.",
      icon: "❤️"
    },
    {
      title: "Trust",
      description: "We build confidence through verified partners, transparent choices, and accountable care.",
      icon: "🤝"
    },
    {
      title: "Convenience",
      description: "We simplify pet care by bringing trusted services together in one connected experience.",
      icon: "⚡"
    },
    {
      title: "Community",
      description: "We grow stronger by supporting a shared ecosystem of pet parents and care professionals.",
      icon: "🌟"
    }
  ];

  return (
    <section 
      id="values" 
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <div 
          className={`text-center mb-16 transition-all duration-300 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Values
          </h2>
          <div className="w-24 h-1 bg-[#F5A855] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: isVisible ? `${index * 120}ms` : '0ms' 
              }}
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div 
          className={`mt-16 text-center transition-all duration-300 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ 
            transitionDelay: isVisible ? '600ms' : '0ms' 
          }}
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 inline-block">
            <div className="text-4xl mb-4">🤗</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Warmth</h3>
            <p className="text-gray-600 leading-relaxed text-lg max-w-2xl">
              We lead with empathy, care, and a human touch in every interaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;