import { useState, useRef } from 'react';

const HeroSection = () => {
  const [activeCard, setActiveCard] = useState(0);
  const touchStartX = useRef(0);
  const mouseStartX = useRef(0);

  const cards = [
    {
      title: "Discover & Connect",
      content: "In a space where choices are often fragmented and guidance is informal, Warmpawz brings together trusted pet care services, shared knowledge, and lived experiences into one accessible platform. By connecting pet parents with verified service providers and clear information, the platform makes it easier to discover, compare, and choose services that truly fit their pet's needs and their own lifestyle."
    },
    {
      title: "Participate & Grow",
      content: "More than access, Warmpawz encourages participation. Pet parents can learn from others, share insights, and contribute to a growing community that values responsibility, compassion, and informed decision-making. Whether it's everyday care or moments of uncertainty, Warmpawz supports pet parents not just as consumers of services, but as active members of a connected pet care ecosystem built on trust."
    }
  ];

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0 && activeCard < cards.length - 1) {
        // Swipe left - next card
        setActiveCard(activeCard + 1);
      } else if (diff < 0 && activeCard > 0) {
        // Swipe right - previous card
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
        // Swipe left - next card
        setActiveCard(activeCard + 1);
      } else if (diff < 0 && activeCard > 0) {
        // Swipe right - previous card
        setActiveCard(activeCard - 1);
      }
    }
  };

  return (
    <section className="flex flex-col items-center justify-start px-4 sm:px-6 md:px-12 pt-4 lg:pt-32 pb-8 text-center bg-white">
      {/* Main Title */}
      <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4 sm:mb-8">
        Your Pet's Journey with Warmpawz
      </h1>

      {/* Subtitle - Hidden on mobile to save space */}
      <p className="hidden sm:block text-xl sm:text-2xl md:text-3xl text-primary font-semibold max-w-4xl mx-auto mb-6 sm:mb-12">
        Warmpawz helps pet parents find clarity, confidence, and care at every stage of their journey.
      </p>

      {/* Main Content with Orange Border */}
      <div className="max-w-5xl mx-auto mb-6 sm:mb-12 w-full">
        {/* Mobile: Swipeable card with fixed height */}
        <div 
          className="lg:hidden border-2 border-[#F5A855] rounded-2xl bg-white/50 backdrop-blur-sm shadow-sm p-6 relative"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          {/* Card content with fixed height and fade transition */}
          <div className="relative h-[340px] overflow-y-auto scrollbar-hide">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`text-left transition-opacity duration-300 ${
                  activeCard === index ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'
                }`}
              >
                <h3 className="text-xl font-bold text-foreground mb-4">{card.title}</h3>
                <p className="text-base text-foreground leading-relaxed pr-2">{card.content}</p>
              </div>
            ))}
          </div>
          
          {/* Indicators only */}
          <div className="flex justify-center gap-2 mt-4">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveCard(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeCard === index ? 'bg-[#F5A855] w-6' : 'bg-muted-foreground/30'
                }`}
                aria-label={`Go to card ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: Traditional Layout */}
        <div className="hidden lg:block border-2 border-[#F5A855] rounded-2xl bg-white/50 backdrop-blur-sm shadow-sm p-6 sm:p-8">
          <div className="space-y-6 text-left">
            <p className="text-lg sm:text-xl text-foreground leading-relaxed">
              In a space where choices are often fragmented and guidance is informal, Warmpawz brings together trusted pet care services, shared knowledge, and lived experiences into one accessible platform. By connecting pet parents with verified service providers and clear information, the platform makes it easier to discover, compare, and choose services that truly fit their pet's needs and their own lifestyle.
            </p>
            
            <p className="text-lg sm:text-xl text-foreground leading-relaxed">
              More than access, Warmpawz encourages participation. Pet parents can learn from others, share insights, and contribute to a growing community that values responsibility, compassion, and informed decision-making. Whether it's everyday care or moments of uncertainty, Warmpawz supports pet parents not just as consumers of services, but as active members of a connected pet care ecosystem built on trust.
            </p>
          </div>
        </div>
      </div>

      {/* Journey Indicator */}
      <div className="mt-4 sm:mt-16">
        <p className="text-xl sm:text-2xl md:text-3xl text-primary font-bold">
          Explore the journey below ↓
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
