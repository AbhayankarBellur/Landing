const ContentSection = () => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-12 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        {/* Main Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 sm:mb-8">
          Your Service Provider Journey with Warmpawz
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl md:text-3xl text-primary font-semibold max-w-4xl mx-auto mb-8 sm:mb-12">
          Warmpawz supports pet care professionals by providing a trusted platform to connect with pet parents, grow visibility, and build credibility.
        </p>

        {/* Main Content with Orange Border */}
        <div className="max-w-5xl mx-auto mb-8 sm:mb-12">
          <div className="border-2 border-[#F5A855] rounded-2xl p-6 sm:p-8 bg-white/50 backdrop-blur-sm shadow-sm">
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
          <p className="text-lg sm:text-xl text-muted-foreground font-medium">
            Explore the onboarding process below ↓
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;