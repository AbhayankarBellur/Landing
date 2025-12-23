const HeroSection = () => {
  return (
    <section className="min-h-[50vh] sm:min-h-[60vh] flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 pt-32 text-center bg-background">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4 sm:mb-6">
        Your Pet's Journey with Warmpawz
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
        From adoption to aging gracefully, we're with you every step of the way.
      </p>
    </section>
  );
};

export default HeroSection;