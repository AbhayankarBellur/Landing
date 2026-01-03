import { useState, useRef } from 'react';
import { CardStack } from '@/components/ui/card-stack';

const ContentSection = () => {
  const [activeCard, setActiveCard] = useState(0);
  const touchStartX = useRef(0);
  const mouseStartX = useRef(0);

  const cards = [
    {
      title: "Innovate & Connect",
      content: "By enabling direct discovery, feedback, and collaboration, Warmpawz creates space for innovation, localised services, and new care models that reflect real community needs. Beyond discovery, the platform encourages transparent standards, shared learning, and responsible practices, helping verified service providers strengthen trust, professional identity, and long-term sustainability."
    },
    {
      title: "Build & Grow",
      content: "While preserving the human connection at the heart of care, Warmpawz empowers service providers to build meaningful relationships with pet parents and contribute to a thriving pet care ecosystem."
    }
  ];

  // Card stack items for mobile view
  const cardStackItems = cards.map((card, index) => ({
    id: index,
    name: "",
    designation: "",
    content: (
      <div className="text-left h-full">
        <h3 className="text-xl font-bold text-gray-900 mb-4">{card.title}</h3>
        <p className="text-base text-gray-700 leading-relaxed">{card.content}</p>
      </div>
    ),
  }));

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0 && activeCard < cards.length - 1) {
        setActiveCard(activeCard + 1);
      } else if (diff < 0 && activeCard > 0) {
        setActiveCard(activeCard - 1);
      }
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    mouseStartX.current = e.clientX;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    const mouseEndX = e.clientX;
    const diff = mouseStartX.current - mouseEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0 && activeCard < cards.length - 1) {
        setActiveCard(activeCard + 1);
      } else if (diff < 0 && activeCard > 0) {
        setActiveCard(activeCard - 1);
      }
    }
  };

  return (
    <section className="pt-4 pb-16 sm:pb-20 px-4 sm:px-6 md:px-12 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        {/* Main Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 sm:mb-8">
          Your Service Provider Journey with Warmpawz
        </h1>

        {/* Main Content with Orange Border */}
        <div className="max-w-5xl mx-auto mb-8 sm:mb-12 w-full">
          {/* Mobile: Card Stack with auto-rotation */}
          <div className="lg:hidden flex items-center justify-center px-4">
            <CardStack items={cardStackItems} offset={10} scaleFactor={0.06} />
          </div>

          {/* Desktop: Traditional Layout */}
          <div className="hidden lg:block border-2 border-[#F5A855] rounded-2xl p-6 sm:p-8 bg-white/50 backdrop-blur-sm shadow-sm">
            <div className="space-y-6 text-left">
              <p className="text-lg sm:text-xl text-foreground leading-relaxed">
                By enabling direct discovery, feedback, and collaboration, Warmpawz creates space for innovation, localised services, and new care models that reflect real community needs. Beyond discovery, the platform encourages transparent standards, shared learning, and responsible practices, helping verified service providers strengthen trust, professional identity, and long-term sustainability.
              </p>
              
              <p className="text-lg sm:text-xl text-foreground leading-relaxed">
                While preserving the human connection at the heart of care, Warmpawz empowers service providers to build meaningful relationships with pet parents and contribute to a thriving pet care ecosystem.
              </p>
            </div>
          </div>
        </div>

        {/* Journey Indicator */}
        <div className="mt-12 sm:mt-16">
          <p className="text-xl sm:text-2xl md:text-3xl text-primary font-bold">
            Explore the onboarding process below ↓
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;