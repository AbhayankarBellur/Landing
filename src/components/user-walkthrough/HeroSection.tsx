const HeroSection = () => {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 pt-32 text-center bg-background">
      {/* Main Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 sm:mb-8">
        Your Pet's Journey with Warmpawz
      </h1>

      {/* Subtitle */}
      <p className="text-xl sm:text-2xl md:text-3xl text-primary font-semibold max-w-4xl mx-auto mb-8 sm:mb-12">
        Warmpawz helps pet parents find clarity, confidence, and care at every stage of their journey.
      </p>

      {/* Main Content with Orange Border */}
      <div className="max-w-5xl mx-auto mb-8 sm:mb-12">
        <div className="border-2 border-[#F5A855] rounded-2xl p-6 sm:p-8 bg-white/50 backdrop-blur-sm shadow-sm">
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
      <div className="mt-12 sm:mt-16">
        <p className="text-lg sm:text-xl text-muted-foreground font-medium">
          Explore the journey below ↓
        </p>
      </div>
    </section>
  );
};

export default HeroSection;